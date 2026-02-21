import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import toast from "react-hot-toast";
import { supabase } from "../../../../../App";
import { convertToWebP } from "../../../../../utils/common";
import { FaTrash } from "react-icons/fa";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  cohortData: any; // Pass the cohort data to be updated
  onUpdate: () => void; // Callback to refresh the list after updating
};

const UpdateCohortModal: React.FC<Props> = ({
  isOpen,
  onClose,
  cohortData,
  onUpdate,
}) => {
  const [formData, setFormData] = useState({
    year: "",
    status: "",
    category: "",
    category_description: "",
    cohortLanguage: "",
    description: "",
    graphImage: "",
    countsImage: "",
    cohortImage: [] as string[],
  });

  useEffect(() => {
    if (cohortData) {
      setFormData({
        year: cohortData.year || "",
        status: cohortData.status || "",
        category: cohortData.category || "",
        category_description: cohortData.category_description || "",
        cohortLanguage: cohortData.cohort_language || "",
        description: cohortData.description || "",
        graphImage: cohortData.graph_image || "",
        countsImage: cohortData.counts_image || "",
        cohortImage: cohortData.cohort_image || [],
      });
    }
  }, [cohortData]);

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
        const folderName =
          name === "graphImage"
            ? "graphImage"
            : name === "countsImage"
            ? "countsImage"
            : "images";
        const convertedFile = await convertToWebP(file);
        const filename = `${Date.now()}_${file.name.split(".")[0]}.webp`;
        const fullPath = `${folderName}/${filename}`;

        const { error } = await supabase.storage
          .from("cohorts")
          .upload(fullPath, convertedFile);
        if (error) throw error;

        const { data: publicURLData } = supabase.storage
          .from("cohorts")
          .getPublicUrl(fullPath);

        const publicUrl = publicURLData?.publicUrl || "";
        setFormData((prev) => ({
          ...prev,
          [name]:
            name === "cohortImage"
              ? [...prev.cohortImage, publicUrl]
              : publicUrl,
        }));
      } catch (error) {
        toast.error("Error uploading image.");
        console.error(error);
      }
    }
  };

  const handleDeleteImage = async (imageUrl: string, imageType: string) => {
    try {
      // Extract the path from the URL
      const urlParts = imageUrl.split('/');
      const fileName = urlParts[urlParts.length - 1];
      const folderName = imageType === "graphImage" 
        ? "graphImage" 
        : imageType === "countsImage" 
        ? "countsImage" 
        : "images";
      const path = `${folderName}/${fileName}`;

      // Delete from storage
      const { error: deleteError } = await supabase.storage
        .from("cohorts")
        .remove([path]);

      if (deleteError) throw deleteError;

      // Update state
      if (imageType === "cohortImage") {
        setFormData(prev => ({
          ...prev,
          cohortImage: prev.cohortImage.filter(img => img !== imageUrl)
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          [imageType]: ""
        }));
      }

      toast.success("Image deleted successfully!");
    } catch (error: any) {
      toast.error("Error deleting image");
      console.error(error);
    }
  };

  const handleSubmit = async () => {
    try {
      if (
        !formData.year ||
        !formData.status ||
        !formData.category ||
        !formData.cohortLanguage
      ) {
        toast.error("Please fill in all required fields.");
        return;
      }

      const updatedCohort = {
        year: formData.year,
        status: formData.status,
        category: formData.category,
        category_description: formData.category_description,
        cohort_language: formData.cohortLanguage,
        description: formData.description,
        graph_image: formData.graphImage,
        counts_image: formData.countsImage,
        cohort_image: formData.cohortImage,
      };

      const { error } = await supabase
        .from("cohorts")
        .update(updatedCohort)
        .eq("id", cohortData.id);

      if (error) throw error;

      toast.success("Cohort updated successfully!");
      onUpdate(); // Refresh the list
      onClose();
    } catch (error: any) {
      toast.error(`Error: ${error.message}`);
      console.error(error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.Modal}>
      <div className={styles.Content}>
        <h2>Update Cohort</h2>
        <input
          name="year"
          placeholder="Year"
          value={formData.year}
          onChange={handleChange}
        />
        <select
          name="status"
          onChange={handleChangeSelect}
          value={formData.status}
        >
          <option value="">Select Status</option>
          <option value="running">Running</option>
          <option value="completed">Completed</option>
        </select>
        <input
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
        />
        <input
          name="category_description"
          placeholder="Category Description"
          value={formData.category_description}
          onChange={handleChange}
        />
        <input
          name="cohortLanguage"
          placeholder="Cohort Language"
          value={formData.cohortLanguage}
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
            <label>Graph Image:</label>
            <input
              type="file"
              name="graphImage"
              onChange={handleInputChange}
              accept="image/*"
            />
            {formData.graphImage && (
              <div className={styles.previewContainer}>
                <img 
                  src={formData.graphImage} 
                  alt="Graph preview" 
                  className={styles.imagePreview} 
                />
                <FaTrash 
                  className={styles.deleteIcon}
                  onClick={() => handleDeleteImage(formData.graphImage, "graphImage")}
                />
              </div>
            )}
          </div>

          <div className={styles.imageContainer}>
            <label>Counts Image:</label>
            <input
              type="file"
              name="countsImage"
              onChange={handleInputChange}
              accept="image/*"
            />
            {formData.countsImage && (
              <div className={styles.previewContainer}>
                <img 
                  src={formData.countsImage} 
                  alt="Counts preview" 
                  className={styles.imagePreview} 
                />
                <FaTrash 
                  className={styles.deleteIcon}
                  onClick={() => handleDeleteImage(formData.countsImage, "countsImage")}
                />
              </div>
            )}
          </div>

          <div className={styles.imageContainer}>
            <label>Cohort Images:</label>
            <input
              type="file"
              name="cohortImage"
              onChange={handleInputChange}
              accept="image/*"
            />
            <div className={styles.multiplePreviewContainer}>
              {formData.cohortImage.map((image, index) => (
                <div key={index} className={styles.previewContainer}>
                  <img 
                    src={image} 
                    alt={`Cohort preview ${index + 1}`} 
                    className={styles.imagePreview} 
                  />
                  <FaTrash 
                    className={styles.deleteIcon}
                    onClick={() => handleDeleteImage(image, "cohortImage")}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <button onClick={handleSubmit}>Update</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default UpdateCohortModal;
