import { useState, useRef } from "react";

export default function useImageUploader(onUpload: (files: File[]) => void) {
  const [previews, setPreviews] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newFiles = Array.from(event.target.files);
      updateFiles(newFiles);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    if (event.dataTransfer.files) {
      const newFiles = Array.from(event.dataTransfer.files);
      updateFiles(newFiles);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const updateFiles = (newFiles: File[]) => {
    setPreviews((prevPreviews) => [
      ...prevPreviews,
      ...newFiles.map((file) => URL.createObjectURL(file)),
    ]);
    onUpload(newFiles); // Notificar al componente padre
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const removeFile = (index: number) => {
    setPreviews((prevPreviews) => {
      const newPreviews = prevPreviews.filter((_, i) => i !== index);
      // Notificar al padre después de la actualización
      setTimeout(() => {
        if (fileInputRef.current?.files) {
          const filesArray = Array.from(fileInputRef.current.files);
          const newFiles = filesArray.filter((_, i) => i !== index);
          onUpload(newFiles);
        } else {
          onUpload([]);
        }
      }, 0);
      return newPreviews;
    });
  };

  const clearFiles = () => {
    setPreviews([]);
    setTimeout(() => {
      onUpload([]);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }, 0);
  };

  return {
    previews,
    isDragging,
    fileInputRef,
    handleFileChange,
    handleDrop,
    handleDragOver,
    handleDragLeave,
    removeFile,
    triggerFileInput,
    clearFiles,
  };
}
