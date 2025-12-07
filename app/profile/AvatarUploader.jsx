"use client";
import { useState } from "react";

export default function AvatarUploader({ value, onChange }) {
  const [preview, setPreview] = useState(value);

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result);
      onChange(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <img
        src={preview}
        className="md:w-32 md:h-32 rounded-full 
        max-md:max-w-12 min-w-12 min-h-12 max-md:max-h-12
        object-cover border"
        alt="Profile"
      />
      <label className="cursor-pointer bg-indigo-800
      max-md:text-xs px-2
      md:px-4 py-2 rounded-xl text-gray-200">
        Upload
        <input type="file" accept="image/*" hidden onChange={handleFile} />
      </label>
    </div>
  );
}
