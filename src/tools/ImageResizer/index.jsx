import { useState } from "react";

import ToolLayout from "../../layouts/ToolLayout";

import GlassCard from "../../components/common/GlassCard";
import GlassInput from "../../components/common/GlassInput";
import PrimaryButton from "../../components/common/PrimaryButton";

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
    if (!image) {
      alert("Please select an image.");
      return;
    }

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

  function resetTool() {
    setImage(null);
    setWidth(500);
    setHeight(500);
  }

  return (
    <ToolLayout
      title="Image Resizer"
      description="Resize images instantly."
    >
      <GlassCard>

        <label
          className="block text-lg font-semibold mb-3"
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

      <div className="grid md:grid-cols-2 gap-6 mt-6">

        <GlassCard>

          <label
            className="block mb-2 font-semibold"
            style={{ color: "var(--text)" }}
          >
            Width (px)
          </label>

          <GlassInput
            type="number"
            value={width}
            onChange={(e) => setWidth(Number(e.target.value))}
          />

        </GlassCard>

        <GlassCard>

          <label
            className="block mb-2 font-semibold"
            style={{ color: "var(--text)" }}
          >
            Height (px)
          </label>

          <GlassInput
            type="number"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
          />

        </GlassCard>

      </div>

      {image && (
        <GlassCard className="mt-6">

          <h3
            className="text-lg font-semibold"
            style={{ color: "var(--text)" }}
          >
            Selected Image
          </h3>

          <p
            className="mt-2"
            style={{ color: "var(--text-secondary)" }}
          >
            {image.name}
          </p>

          <p style={{ color: "var(--text-secondary)" }}>
            {(image.size / 1024).toFixed(1)} KB
          </p>

        </GlassCard>
      )}

      <div className="grid md:grid-cols-2 gap-4 mt-8">

        <PrimaryButton onClick={resizeImage}>
          📏 Resize Image
        </PrimaryButton>

        <button
          onClick={resetTool}
          className="glass rounded-2xl py-4 font-semibold hover:scale-[1.02] transition-all"
          style={{ color: "var(--text)" }}
        >
          🔄 Reset
        </button>

      </div>

    </ToolLayout>
  );
}