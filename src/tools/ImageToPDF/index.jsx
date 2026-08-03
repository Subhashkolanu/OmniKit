import { useState } from "react";
import { PDFDocument } from "pdf-lib";

import ToolLayout from "../../layouts/ToolLayout";

import GlassCard from "../../components/common/GlassCard";
import GlassInput from "../../components/common/GlassInput";
import PrimaryButton from "../../components/common/PrimaryButton";

export default function ImageToPDF() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  async function createPDF() {
    if (files.length === 0) {
      alert("Please select at least one image.");
      return;
    }

    setLoading(true);

    try {
      const pdfDoc = await PDFDocument.create();

      for (const file of files) {
        const bytes = await file.arrayBuffer();

        let image;

        if (file.type === "image/png") {
          image = await pdfDoc.embedPng(bytes);
        } else {
          image = await pdfDoc.embedJpg(bytes);
        }

        const { width, height } = image.scale(1);

        const page = pdfDoc.addPage([width, height]);

        page.drawImage(image, {
          x: 0,
          y: 0,
          width,
          height,
        });
      }

      const pdfBytes = await pdfDoc.save();

      const blob = new Blob([pdfBytes], {
        type: "application/pdf",
      });

      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "images.pdf";
      a.click();

      URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
      alert("Failed to create PDF.");
    }

    setLoading(false);
  }

  function resetTool() {
    setFiles([]);
  }

  return (
    <ToolLayout
      title="Image to PDF"
      description="Convert one or multiple images into a PDF document."
    >
      <GlassCard>

        <label
          className="block text-lg font-semibold mb-3"
          style={{ color: "var(--text)" }}
        >
          Select Images
        </label>

        <GlassInput
          type="file"
          multiple
          accept="image/png,image/jpeg"
          onChange={(e) => setFiles([...e.target.files])}
        />

      </GlassCard>

      {files.length > 0 && (
        <GlassCard className="mt-6">

          <h3
            className="text-lg font-semibold mb-4"
            style={{ color: "var(--text)" }}
          >
            Selected Images ({files.length})
          </h3>

          <div className="space-y-3">
            {files.map((file, index) => (
              <div
                key={index}
                className="glass rounded-xl px-4 py-3"
              >
                <p style={{ color: "var(--text)" }}>
                  {file.name}
                </p>

                <p
                  className="text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {(file.size / 1024).toFixed(1)} KB
                </p>
              </div>
            ))}
          </div>

        </GlassCard>
      )}

      <div className="grid md:grid-cols-2 gap-4 mt-8">

        <PrimaryButton
          onClick={createPDF}
          className={loading ? "opacity-70" : ""}
        >
          {loading ? "Creating PDF..." : "📄 Convert to PDF"}
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