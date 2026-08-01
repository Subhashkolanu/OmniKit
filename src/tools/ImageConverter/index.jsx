import { useState } from "react";
import ToolLayout from "../../layouts/ToolLayout";

export default function ImageConverter() {
  const [image, setImage] = useState(null);
  const [format, setFormat] = useState("png");

  function handleImage(e) {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);
  }

  function convertImage() {
    if (!image) return;

    const img = new Image();

    img.src = URL.createObjectURL(image);

    img.onload = () => {
      const canvas = document.createElement("canvas");

      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext("2d");

      ctx.drawImage(img, 0, 0);

      canvas.toBlob(
        (blob) => {
          const url = URL.createObjectURL(blob);

          const a = document.createElement("a");

          a.href = url;
          a.download = `converted.${format}`;

          a.click();

          URL.revokeObjectURL(url);
        },
        `image/${format}`,
        0.95
      );
    };
  }

  return (
    <ToolLayout
      title="Image Format Converter"
      description="Convert images between PNG, JPG and WEBP."
    >
      <div className="space-y-6">

        <input
          type="file"
          accept="image/*"
          onChange={handleImage}
          className="border rounded-xl p-3 w-full"
        />

        <select
          value={format}
          onChange={(e) => setFormat(e.target.value)}
          className="border rounded-xl p-3 w-full"
        >
          <option value="png">PNG</option>
          <option value="jpeg">JPG</option>
          <option value="webp">WEBP</option>
        </select>

        <button
          onClick={convertImage}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
        >
          Convert Image
        </button>

      </div>
    </ToolLayout>
  );
}