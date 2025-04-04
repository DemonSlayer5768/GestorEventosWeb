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
    onUpload(newFiles);
  };

  const removeFile = (index: number) => {
    setPreviews((prevPreviews) => {
      return prevPreviews.filter((_, i) => i !== index);
    });
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const clearFiles = () => {
    setPreviews([]);
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
