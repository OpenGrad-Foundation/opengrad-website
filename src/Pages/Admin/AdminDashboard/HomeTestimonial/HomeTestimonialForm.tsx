import styles from "../Form.module.css";
import { useState, ChangeEvent, useEffect } from "react";
import toast from "react-hot-toast";
import { convertToWebP } from "../../../../utils/common";
import { supabase } from "../../../../App";
import { insertTestimonial, updateTestimonial } from "./services/apis";

type Props = {
  showAddForm: boolean;
  close: React.Dispatch<React.SetStateAction<boolean>>;
  initialData?: TestimonialType;
  tablename: string;
};

export const HomeTestimonialForm = ({
  showAddForm,
  close,
  initialData,
  tablename,
}: Props) => {
  const [formData, setFormData] = useState({
    description: "",
    name: "",
    designation: "",
    image: "",
  });
  useEffect(() => {
    if (initialData) {
      setFormData({
        description: initialData.description || "",
        name: initialData.name || "",
        designation: initialData.designation || "",
        image: initialData.image || "",
      });
    }
  }, [initialData]);

  const handleInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === "image" && files) {
      const file = files[0];
      try {
        if (formData.image) {
          const oldFilePath = formData.image.split("/").pop();
          await supabase.storage
            .from(tablename)
            .remove([`images/${oldFilePath}`]);
        }

        const convertedFile = await convertToWebP(file);
        const filename = `${Date.now()}_${file.name.split(".")[0]}.webp`;
        const { data, error } = await supabase.storage
          .from(tablename)
          .upload(`images/${filename}`, convertedFile, {
            cacheControl: "3600",
            upsert: true,
          });

        if (error) {
          toast.error("Error uploading image");
          throw error;
        }

        const { data: publicURLData } = supabase.storage
          .from(tablename)
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

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (initialData?.id) {
        // Update existing testimonial
        const response = await updateTestimonial(
          formData,
          initialData.id,
          tablename
        );
        if (response) {
          toast.success("Report updated successfully");
        }
      } else {
        // Create new testimonial
        const response = await insertTestimonial(formData, tablename);
        if (response) {
          toast.success("Report created successfully");
        }
      }
      setFormData({
        description: "",
        name: "",
        designation: "",
        image: "",
      });
    } catch (error) {
      console.log(error);
    }

    showAddForm = false;
    window.location.reload();
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.addForm}>
        <h2>Add Testimonial</h2>
        <form onSubmit={handleAddFormSubmit}>
          <div>
            <label>Name :</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Designation:</label>
            <input
              type="text"
              name="designation"
              placeholder="Designation"
              value={formData.designation}
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
            <label>Description :</label>
            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleTextareaChange}
              required
            />
          </div>
          <span className={styles.buttonWrappers}>
            <button style={{ backgroundColor: "green" }} type="submit">
              Submit
            </button>
            <button
              style={{ backgroundColor: "red" }}
              onClick={() => {
                if (initialData) {
                  setFormData({
                    description: "",
                    name: "",
                    designation: "",
                    image: "",
                  });
                }
                close(!showAddForm); 
              }}
            >
              Close
            </button>
          </span>
        </form>
      </div>
    </div>
  );
};
