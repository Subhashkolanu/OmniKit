import { useState } from "react";
import imageCompression from "browser-image-compression";
import ToolLayout from "../../layouts/ToolLayout";

export default function ImageCompressor() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [compressedImage, setCompressedImage] = useState(null);
  const [quality, setQuality] = useState(0.7);
  const [loading, setLoading] = useState(false);

  async function handleImage(e) {
    const file = e.target.files[0];

    if (!file) return;

    setSelectedImage(file);
    setCompressedImage(null);

    setLoading(true);

    try {
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        initialQuality: quality,
        useWebWorker: true,
      };

      const compressed = await imageCompression(file, options);

      setCompressedImage(compressed);
    } catch (err) {
      alert("Compression failed.");
    }

    setLoading(false);
  }

  function downloadImage() {
    if (!compressedImage) return;

    const url = URL.createObjectURL(compressedImage);

    const a = document.createElement("a");
    a.href = url;
    a.download = compressedImage.name;

    a.click();

    URL.revokeObjectURL(url);
  }

  return (
    <ToolLayout
      title="Image Compressor"
      description="Compress JPG and PNG images instantly."
    >
      <div className="space-y-8">

        <input
          type="file"
          accept="image/*"
          onChange={handleImage}
          className="border rounded-xl p-3 w-full"
        />

        <div>

          <label className="font-semibold">
            Compression Quality ({Math.round(quality * 100)}%)
          </label>

          <input
            type="range"
            min="0.1"
            max="1"
            step="0.1"
            value={quality}
            onChange={(e) => setQuality(Number(e.target.value))}
            className="w-full mt-3"
          />

        </div>

        {loading && (
          <p className="text-blue-600 font-semibold">
            Compressing...
          </p>
        )}

        {selectedImage && (
          <div className="border rounded-xl p-6">

            <h2 className="font-bold text-xl mb-4">
              Original
            </h2>

            <img
              src={URL.createObjectURL(selectedImage)}
              alt=""
              className="max-h-64 rounded-xl"
            />

            <p className="mt-4">
              {(selectedImage.size / 1024).toFixed(2)} KB
            </p>

          </div>
        )}

        {compressedImage && (
          <div className="border rounded-xl p-6">

            <h2 className="font-bold text-xl mb-4">
              Compressed
            </h2>

            <img
              src={URL.createObjectURL(compressedImage)}
              alt=""
              className="max-h-64 rounded-xl"
            />

            <p className="mt-4">
              {(compressedImage.size / 1024).toFixed(2)} KB
            </p>

            <button
              onClick={downloadImage}
              className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
            >
              Download Image
            </button>

          </div>
        )}

      </div>
    </ToolLayout>
  );
}