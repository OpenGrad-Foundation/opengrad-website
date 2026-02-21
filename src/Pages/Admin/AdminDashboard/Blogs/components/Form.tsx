import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import styles from "../../Form.module.css";
import toast from "react-hot-toast";
import { supabase } from "../../../../../App";
import { convertToWebP } from "../../../../../utils/common";
import { insertBlogs } from "../../Apis";

type Props = {
  showAddForm: boolean;
  close: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Form = ({ showAddForm, close }: Props) => {
  const datas = [
    { name: "News and Updates" },
    { name: "Events" },
    { name: "Campus Diaries" },
    { name: "Insights" },
  ];
  const [insertdata, setInsertData] = useState<any[]>([]);
  const [images, setImages] = useState<string[]>([]);

  const [formData, setFormData] = useState({
    title: "",
    image: "",
    author: "",
    dateofblog: "",
    extra_images: "",
    description: "",
    categories: "",
  });

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === "image" && files) {
      const file = files[0];
      try {
        // Remove the old image if it exists
        if (formData.image) {
          const oldFilePath = formData.image.split("/").pop();
          await supabase.storage
            .from("blogs")
            .remove([`images/${oldFilePath}`]);
        }

        const convertedFile = await convertToWebP(file);
        const filename = `${Date.now()}_${file.name.split('.')[0]}.webp`;
        const { data, error } = await supabase.storage
          .from("blogs")
          .upload(`images/${filename}`, convertedFile, {
            cacheControl: "3600",
            upsert: true,
          });

        if (error) {
          toast.error("Error uploading image");
          throw error;
        }

        const { data: publicURLData } = supabase.storage
          .from("blogs")
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
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleInputDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "dateofblog") {
      const formattedDate = formatToYYYYMMDD(value);
      setFormData((prevData) => ({ ...prevData, [name]: formattedDate }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const formatToYYYYMMDD = (inputDate: string) => {
    const [year, month, day] = inputDate.split("-");
    const formattedDate = `${year}-${month.padStart(2, "0")}-${day.padStart(
      2,
      "0"
    )}`;
    return formattedDate;
  }

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCategoryCheckboxChange = (category: string) => {
    setFormData((prevData) => {
      const updatedCategories = prevData.categories.includes(category)
        ? prevData.categories
            .split(", ")
            .filter((c) => c !== category)
            .join(", ")
        : prevData.categories
        ? `${prevData.categories}, ${category}`
        : category;
      return {
        ...prevData,
        categories: updatedCategories,
      };
    });
  };

  const handleAddFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const uploadedImages = await handleImagesUpload();
      const dataToSubmit = {
        ...formData,
        extra_images: uploadedImages.join(", "),
      };
      const response = await insertBlogs(dataToSubmit);
      if (response) {
        setInsertData(response);
        console.log(insertdata);
      }
    } catch (error) {
      console.log(error);
    }

    setFormData({
      title: "",
      image: "",
      author: "",
      extra_images: "",
      dateofblog: "",
      description: "",
      categories: "",
    });
    setImages([]);
    showAddForm = false;
    window.location.reload();
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach(async (file) => {
      try {
        const convertedFile = await convertToWebP(file);
        const filename = `${Date.now()}_${file.name.split('.')[0]}.webp`;
        const { data, error } = await supabase.storage
          .from("blogs")
          .upload(`images/${filename}`, convertedFile, {
            cacheControl: "3600",
            upsert: true,
          });

        if (error) {
          toast.error("Error uploading image");
          throw error;
        }

        const { data: publicURLData } = supabase.storage
          .from("blogs")
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
      .from("blogs")
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
        <h2>Add Blog</h2>
        <form onSubmit={handleAddFormSubmit}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleInputChange}
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
              onChange={handleInputChange}
              required
            />
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Author :</label>
            <input
              type="text"
              name="author"
              placeholder="Author"
              value={formData.author}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Date Of Blog :</label>
            <input
              type="date"
              name="dateofblog"
              placeholder="Date Of Blog"
              value={formData.dateofblog}
              onChange={handleInputDateChange}
              required
            />
          </div>
          <div>
            <label>Description :</label>
            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleTextareaChange}
              required
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
          <div className={styles.cateoriessection}>
            <label>Categories:</label>
            <div>
              {datas.map(({ name }) => (
                <div className={styles.innercheckbox} key={name}>
                  <input
                    type="checkbox"
                    id={name}
                    value={name}
                    checked={formData.categories.includes(name)}
                    onChange={() => handleCategoryCheckboxChange(name)}
                  />
                  <label htmlFor={name}>{name}</label>
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
