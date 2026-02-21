import { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import styles from "../../Form.module.css";
import toast from "react-hot-toast";
import { supabase } from "../../../../../App";
import { convertToWebP } from "../../../../../utils/common";
import { insertReports, updateReports } from "../services/apis";

type Props = {
  showAddForm: boolean;
  close: React.Dispatch<React.SetStateAction<boolean>>;
  initialData?: AnnualReportType;
};

export const Form = ({ showAddForm, close, initialData }: Props) => {
  const [images, setImages] = useState<string[]>([]);

  const [formData, setFormData] = useState({
    year: "",
    image: "",
    link: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        year: initialData.year || "",
        image: initialData.image || "",
        link: initialData.link || "",
      });
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (name === "image" && files) {
      const file = files[0];
      try {
        // Remove the old image if it exists
        if (formData.image) {
          const oldFilePath = formData.image.split("/").pop();
          await supabase.storage
            .from("reports")
            .remove([`images/${oldFilePath}`]);
        }

        const convertedFile = await convertToWebP(file);
        const filename = `${Date.now()}_${file.name.split(".")[0]}.webp`;
        const { data, error } = await supabase.storage
          .from("reports")
          .upload(`images/${filename}`, convertedFile, {
            cacheControl: "3600",
            upsert: true,
          });

        if (error) {
          toast.error("Error uploading image");
          throw error;
        }

        const { data: publicURLData } = supabase.storage
          .from("reports")
          .getPublicUrl(data.path);

        setFormData((prevData) => ({
          ...prevData,
          image: publicURLData.publicUrl,
        }));
      } catch (error) {
        toast.error("Error during image upload");
        console.error(error);
      }
    } else {
      handleChange(e);
    }
  };

  const handleAddFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const uploadedImages = await handleImagesUpload();
      const dataToSubmit = {
        ...formData,
        extra_images: uploadedImages.join(", "),
      };

      if (initialData?.id) {
        // Update existing report
        const response = await updateReports(dataToSubmit, initialData.id);
        if (response) {
          toast.success("Report updated successfully");
        }
      } else {
        // Create new report
        const response = await insertReports(dataToSubmit);
        if (response) {
          toast.success("Report created successfully");
        }
      }
      
      setFormData({
        year: "",
        image: "",
        link: "",
      });
      setImages([]);
      close(false);
      window.location.reload();
    } catch (error) {
      console.log(error);
      toast.error("Error saving report");
    }
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach(async (file) => {
      try {
        const convertedFile = await convertToWebP(file);
        const filename = `${Date.now()}_${file.name.split(".")[0]}.webp`;
        const { data, error } = await supabase.storage
          .from("reports")
          .upload(`images/${filename}`, convertedFile, {
            cacheControl: "3600",
            upsert: true,
          });

        if (error) {
          toast.error("Error uploading image");
          throw error;
        }

        const { data: publicURLData } = supabase.storage
          .from("reports")
          .getPublicUrl(data.path);

        setImages((prevImages) => [...prevImages, publicURLData.publicUrl]);
      } catch (error) {
        toast.error("Error during image upload");
        console.error(error);
      }
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".webp", ".jpeg", ".jpg"],
    },
  });

  const removeImage = async (index: number) => {
    const imageToRemove = images[index];
    const filePath = imageToRemove.split("/").pop();
    const { error } = await supabase.storage
      .from("reports")
      .remove([`images/${filePath}`]);

    if (error) {
      toast.error("Error removing image");
      console.error(error);
      return;
    }

    setImages((images) => images.filter((_, i) => i !== index));
  };

  const handleImagesUpload = async () => {
    return images;
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.addForm}>
        <h2>Add Reports</h2>
        <form onSubmit={handleAddFormSubmit}>
          <div className={styles.form_group}>
            <label>Year:</label>
            <input
              type="text"
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.form_group}>
            <label>Link:</label>
            <input
              type="url"
              name="link"
              value={formData.link}
              onChange={handleChange}
              placeholder="Enter report link"
              required
            />
          </div>
          <div>
            <label>Image Link :</label>
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={formData.image}
              onChange={handleImageChange}
              required
            />
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <div>
            <label>Extra Images:</label>
            <div {...getRootProps()} className={styles.Dropzone}>
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop the files here ...</p>
              ) : (
                <div>
                  <>Upload photos</>
                  <button type="button">Browse files</button>
                </div>
              )}
            </div>
            <div className={styles.UploadedImages}>
              {images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt="Uploaded" width={200} />
                  <button type="button" onClick={() => removeImage(index)}>
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
          <span className={styles.buttonWrappers}>
            <button style={{ backgroundColor: "green" }} type="submit">
              Submit
            </button>
            <button
              style={{ backgroundColor: "red" }}
              onClick={() => close(!showAddForm)}
            >
              Close
            </button>
          </span>
        </form>
      </div>
    </div>
  );
};
