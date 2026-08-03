import { useState } from "react";

import ToolLayout from "../../layouts/ToolLayout";

import GlassCard from "../../components/common/GlassCard";
import GlassInput from "../../components/common/GlassInput";
import PrimaryButton from "../../components/common/PrimaryButton";

export default function ImageConverter() {
  const [image, setImage] = useState(null);
  const [format, setFormat] = useState("png");

  function handleImage(e) {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);
  }

  function convertImage() {
    if (!image) {
      alert("Please select an image.");
      return;
    }

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

  function resetTool() {
    setImage(null);
    setFormat("png");
  }

  return (
    <ToolLayout
      title="Image Format Converter"
      description="Convert images between PNG, JPG and WEBP."
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
          onChange={handleImage}
          className="file:mr-4 file:rounded-xl file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:text-white"
        />

      </GlassCard>

      <GlassCard className="mt-6">

        <label
          className="block text-lg font-semibold mb-3"
          style={{ color: "var(--text)" }}
        >
          Output Format
        </label>

        <select
          value={format}
          onChange={(e) => setFormat(e.target.value)}
          className="glass w-full rounded-2xl p-4 outline-none"
          style={{ color: "var(--text)" }}
        >
          <option value="png">PNG</option>
          <option value="jpeg">JPG</option>
          <option value="webp">WEBP</option>
        </select>

      </GlassCard>

      {image && (
        <GlassCard className="mt-6">

          <h3
            className="text-lg font-semibold mb-2"
            style={{ color: "var(--text)" }}
          >
            Selected Image
          </h3>

          <p style={{ color: "var(--text-secondary)" }}>
            {image.name}
          </p>

          <p
            className="mt-2"
            style={{ color: "var(--text-secondary)" }}
          >
            {(image.size / 1024).toFixed(1)} KB
          </p>

        </GlassCard>
      )}

      <div className="grid md:grid-cols-2 gap-4 mt-8">

        <PrimaryButton onClick={convertImage}>
          🖼️ Convert Image
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