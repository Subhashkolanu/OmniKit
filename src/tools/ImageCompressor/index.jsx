import { useState } from "react";
import imageCompression from "browser-image-compression";

import ToolLayout from "../../layouts/ToolLayout";

import GlassCard from "../../components/common/GlassCard";
import GlassInput from "../../components/common/GlassInput";
import GlassSlider from "../../components/common/GlassSlider";
import PrimaryButton from "../../components/common/PrimaryButton";

export default function ImageCompressor() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [compressedImage, setCompressedImage] = useState(null);
  const [quality, setQuality] = useState(70);
  const [loading, setLoading] = useState(false);

  async function handleImage(e) {
    const file = e.target.files[0];
    if (!file) return;

    setSelectedImage(file);
    setCompressedImage(null);

    setLoading(true);

    try {
      const compressed = await imageCompression(file, {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        initialQuality: quality / 100,
        useWebWorker: true,
      });

      setCompressedImage(compressed);
    } catch {
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

  function resetTool() {
    setSelectedImage(null);
    setCompressedImage(null);
    setQuality(70);
  }

  return (
    <ToolLayout
      title="Image Compressor"
      description="Compress JPG and PNG images instantly."
    >
      <GlassCard>

        <label
          className="block mb-3 font-semibold"
          style={{ color: "var(--text)" }}
        >
          Select Image
        </label>

        <GlassInput
          type="file"
          accept="image/*"
          onChange={handleImage}
        />

      </GlassCard>

      <div className="mt-6">

        <GlassSlider
          value={quality}
          min={10}
          max={100}
          onChange={(e) => setQuality(Number(e.target.value))}
        />

      </div>

      {loading && (
        <GlassCard className="mt-6 text-center">
          <p style={{ color: "var(--text)" }}>
            Compressing image...
          </p>
        </GlassCard>
      )}

      {selectedImage && (
        <GlassCard className="mt-6">

          <h3
            className="text-xl font-bold mb-4"
            style={{ color: "var(--text)" }}
          >
            Original Image
          </h3>

          <img
            src={URL.createObjectURL(selectedImage)}
            alt=""
            className="rounded-2xl max-h-64 mx-auto"
          />

          <p
            className="mt-4 text-center"
            style={{ color: "var(--text-secondary)" }}
          >
            {(selectedImage.size / 1024).toFixed(2)} KB
          </p>

        </GlassCard>
      )}

      {compressedImage && (
        <GlassCard className="mt-6">

          <h3
            className="text-xl font-bold mb-4"
            style={{ color: "var(--text)" }}
          >
            Compressed Image
          </h3>

          <img
            src={URL.createObjectURL(compressedImage)}
            alt=""
            className="rounded-2xl max-h-64 mx-auto"
          />

          <p
            className="mt-4 text-center"
            style={{ color: "var(--text-secondary)" }}
          >
            {(compressedImage.size / 1024).toFixed(2)} KB
          </p>

          <PrimaryButton
            onClick={downloadImage}
            className="mt-6"
          >
            ⬇ Download Image
          </PrimaryButton>

        </GlassCard>
      )}

      <button
        onClick={resetTool}
        className="glass w-full rounded-2xl py-4 mt-6 font-semibold"
        style={{ color: "var(--text)" }}
      >
        🔄 Reset
      </button>

    </ToolLayout>
  );
}