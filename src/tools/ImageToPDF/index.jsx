import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import ToolLayout from "../../layouts/ToolLayout";

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

  return (
    <ToolLayout
      title="Image to PDF"
      description="Convert one or multiple images into a PDF document."
    >
      <input
        type="file"
        multiple
        accept="image/png,image/jpeg"
        onChange={(e) => setFiles([...e.target.files])}
        className="w-full border rounded-xl p-4"
      />

      {files.length > 0 && (
        <div className="mt-6">
          <h3 className="font-semibold mb-3">
            Selected Images
          </h3>

          <ul className="space-y-2">
            {files.map((file, index) => (
              <li
                key={index}
                className="border rounded-lg px-4 py-3"
              >
                {file.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      <button
        onClick={createPDF}
        disabled={loading}
        className="w-full bg-black text-white py-3 rounded-xl mt-8"
      >
        {loading ? "Creating PDF..." : "Convert to PDF"}
      </button>
    </ToolLayout>
  );
}