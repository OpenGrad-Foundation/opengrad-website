import React, { useState } from "react";
import styles from "./index.module.css";
import toast from "react-hot-toast";
import { supabase } from "../../../../../App";
import { convertToWebP } from "../../../../../utils/common";
import { FaTrash } from "react-icons/fa";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onDone: (newCohort: any) => void;
};

const AddAdvisorsModal: React.FC<Props> = ({ isOpen, onClose, onDone }) => {
  const [formData, setFormData] = useState({
    category: "",
    image: "",
    name: "",
    designation: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      const file = files[0];
      try {
        const convertedFile = await convertToWebP(file);
        const filename = `${Date.now()}_${file.name.split(".")[0]}.webp`;
        const fullPath = `${filename}`;

        const { error } = await supabase.storage
          .from("ouradvisors")
          .upload(fullPath, convertedFile);
        if (error) throw error;

        const { data: publicURLData } = supabase.storage
          .from("ouradvisors")
          .getPublicUrl(fullPath);

        const publicUrl = publicURLData?.publicUrl || "";

        setFormData((prev) => ({
          ...prev,
          [name]: publicUrl, // Set the image URL directly as a string
        }));
      } catch (error) {
        toast.error("Error uploading image.");
        console.error(error);
      }
    }
  };

  const handleSubmit = async () => {
    try {
      if (
        !formData.category ||
        !formData.name ||
        !formData.category ||
        !formData.designation
      ) {
        toast.error("Please fill in all required fields.");
        return;
      }

      const newCohort = {
        category: formData.category,
        image: formData.image,
        name: formData.name,
        designation: formData.designation,
        description: formData.description,
      };

      const { data, error } = await supabase
        .from("ouradvisors")
        .insert([newCohort]);
      if (error) throw error;

      toast.success("ouradvisors added successfully!");
      if (data) onDone(data[0]);
      onClose();
    } catch (error: any) {
      toast.error(`Error: ${error.message}`);
      console.error(error);
    }
  };

  const handleDeleteImage = async (imageUrl: string, imageType: string) => {
    try {
      // Extract the path from the URL
      const urlParts = imageUrl.split("/");
      const fileName = urlParts[urlParts.length - 1];

      const path = `${fileName}`;

      // Delete from storage
      const { error: deleteError } = await supabase.storage
        .from("ouradvisors")
        .remove([path]);

      if (deleteError) throw deleteError;

      // Update state
      if (imageType === "image") {
        setFormData((prev) => ({
          ...prev,
          image: prev.image,
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          [imageType]: "",
        }));
      }

      toast.success("Image deleted successfully!");
    } catch (error: any) {
      toast.error("Error deleting image");
      console.error(error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.Modal}>
      <div className={styles.Content}>
        <h2>Add Cohort</h2>

        <select
          name="category"
          onChange={handleChangeSelect}
          value={formData.category}
        >
          <option value="">Select Status</option>
          <option value="Patrons">Patrons</option>
          <option value="Core Advisory">Core Advisory</option>
          <option value="Domain Advisory">Domain Advisory</option>
        </select>
        <input
          name="name"
          placeholder="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          name="designation"
          placeholder="designation"
          value={formData.designation}
          onChange={handleChange}
        />
        <input
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />

        <div className={styles.imageSection}>
          <div className={styles.imageContainer}>
            <label>Image:</label>
            <input
              type="file"
              name="image"
              onChange={handleInputChange}
              accept="/*"
            />
            {formData.image && (
              <div className={styles.previewContainer}>
                <img
                  src={formData.image}
                  alt="Graph preview"
                  className={styles.imagePreview}
                />
                <FaTrash
                  className={styles.deleteIcon}
                  onClick={() => handleDeleteImage(formData.image, "image")}
                />
              </div>
            )}
          </div>
        </div>

        <button onClick={handleSubmit}>Add</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default AddAdvisorsModal;
