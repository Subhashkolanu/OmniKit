import { useState } from "react";
import ToolLayout from "../../layouts/ToolLayout";

export default function ImageResizer() {
  const [image, setImage] = useState(null);
  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(500);

  function handleImage(e) {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);
  }

  function resizeImage() {
    if (!image) return;

    const img = new Image();

    img.src = URL.createObjectURL(image);

    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");

      ctx.drawImage(img, 0, 0, width, height);

      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");

        a.href = url;
        a.download = "resized-image.png";

        a.click();

        URL.revokeObjectURL(url);
      }, "image/png");
    };
  }

  return (
    <ToolLayout
      title="Image Resizer"
      description="Resize images instantly."
    >
      <div className="space-y-6">

        <input
          type="file"
          accept="image/*"
          onChange={handleImage}
          className="border rounded-xl p-3 w-full"
        />

        <div className="grid grid-cols-2 gap-4">

          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(Number(e.target.value))}
            placeholder="Width"
            className="border rounded-xl p-3"
          />

          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
            placeholder="Height"
            className="border rounded-xl p-3"
          />

        </div>

        <button
          onClick={resizeImage}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
        >
          Resize Image
        </button>

      </div>
    </ToolLayout>
  );
}