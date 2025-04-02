import { Button } from "@mui/material";
import { ImageIcon, X } from "lucide-react";
import Image from "next/image";
import useImageUploader from "@Lib/hooks/useImageUploader";

const InputImages = ({ onUpload }: { onUpload: (files: File[]) => void }) => {
  const {
    previews,
    // files, llevar datos en el otro form
    isDragging,
    fileInputRef,
    handleFileChange,
    handleDrop,
    handleDragOver,
    handleDragLeave,
    removeFile,
    triggerFileInput,
    // handleSubmit
    // clearFiles, llevar
  } = useImageUploader(onUpload);

  return (
    <div>
      <div
        className={`mt-4 border-2 border-dashed rounded-lg text-center transition-colors ${
          isDragging
            ? "border-primary bg-primary/5"
            : "border-muted-foreground/20"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept="image/*"
          multiple
        />

        {/* Contenedor de carga de imágenes */}
        <div className="flex flex-col items-center justify-center gap-2">
          {!previews.length && (
            <>
              <ImageIcon className="text-muted-foreground/70 text-gray-800" />
              <p className="text-sm text-muted-foreground text-gray-800">
                <span className="font-medium text-foreground text-gray-800">
                  Haz clic para explorar
                </span>{" "}
                o arrastra y suelta
              </p>
              <p className="text-xs text-muted-foreground text-gray-800">
                PNG, JPG, GIF hasta 10MB
              </p>
            </>
          )}
          <Button onClick={triggerFileInput} className="mt-2">
            Seleccionar archivos
          </Button>
        </div>
      </div>

      {previews.length > 0 && (
        <div className="mt-4">
          <h4 className="text-gray-800 text-sm font-medium mb-2">
            Imágenes seleccionadas
          </h4>
          <div className="grid grid-cols-5 gap-2">
            {previews.map((preview, index) => (
              <div key={index} className="relative group aspect-square">
                <Image
                  src={preview || "/placeholder.svg"}
                  alt={`Preview ${index}`}
                  width={300}
                  height={200}
                  className="object-cover rounded-md"
                />
                <button
                  onClick={() => removeFile(index)}
                  className="absolute top-1 right-1 bg-black/50 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X size={14} className="text-red-600" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default InputImages;
