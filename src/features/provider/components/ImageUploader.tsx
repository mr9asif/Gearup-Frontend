"use client";

import { ImagePlus, X } from "lucide-react";
import { ChangeEvent } from "react";

interface ImageUploaderProps {
  files: File[];
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
}

export default function ImageUploader({ files, setFiles }: ImageUploaderProps) {
  const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);

    setFiles((prev) => [...prev, ...selectedFiles]);

    // Allow selecting the same file again
    e.target.value = "";
  };

  const removeImage = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-muted-foreground/30 p-8 transition hover:border-primary">
        <ImagePlus className="mb-3 h-10 w-10 text-muted-foreground" />

        <p className="text-lg font-medium">Click to upload images</p>

        <p className="text-sm text-muted-foreground">PNG, JPG, JPEG, WEBP</p>

        <input
          hidden
          type="file"
          multiple
          accept="image/*"
          onChange={handleSelect}
        />
      </label>

      {files.length > 0 && (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {files.map((file, index) => (
            <div
              key={`${file.name}-${index}`}
              className="relative overflow-hidden rounded-xl border"
            >
              <img
                src={URL.createObjectURL(file)}
                alt={file.name}
                className="h-32 w-full object-cover"
              />

              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute right-2 top-2 rounded-full bg-red-500 p-1 text-white transition hover:bg-red-600"
              >
                <X size={16} />
              </button>

              <div className="truncate bg-background p-2 text-xs">
                {file.name}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
