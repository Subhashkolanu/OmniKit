import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import ToolLayout from "../../layouts/ToolLayout";

export default function PDFCompressor() {
  const [file, setFile] = useState(null);
  const [quality, setQuality] = useState(70);
  const [loading, setLoading] = useState(false);

  async function compressPDF() {
    if (!file) {
      alert("Please select a PDF.");
      return;
    }

    try {
      setLoading(true);

      const bytes = await file.arrayBuffer();

      const pdfDoc = await PDFDocument.load(bytes);

      const pages = pdfDoc.getPages();

      for (const page of pages) {
        const { width, height } = page.getSize();

        page.scaleContent(quality / 100, quality / 100);

        page.setSize(
          width * (quality / 100),
          height * (quality / 100)
        );
      }

      const compressed = await pdfDoc.save({
        useObjectStreams: true,
        addDefaultPage: false,
      });

      const blob = new Blob([compressed], {
        type: "application/pdf",
      });

      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "compressed.pdf";
      a.click();

      URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
      alert("Compression failed.");
    } finally {
      setLoading(false);
    }
  }

  function resetTool() {
    setFile(null);
    setQuality(70);
  }

  return (
    <ToolLayout
      title="PDF Compressor"
      description="Reduce PDF size directly in your browser."
    >
      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => setFile(e.target.files[0])}
        className="w-full border rounded-xl p-4"
      />

      {file && (
        <div className="mt-6 p-4 bg-gray-100 rounded-xl">
          <p className="font-semibold">{file.name}</p>
          <p className="text-sm text-gray-500">
            {(file.size / 1024 / 1024).toFixed(2)} MB
          </p>
        </div>
      )}

      <label className="block mt-8 font-semibold">
        Compression Level ({quality}%)
      </label>

      <input
        type="range"
        min="30"
        max="100"
        value={quality}
        onChange={(e) => setQuality(Number(e.target.value))}
        className="w-full mt-4"
      />      <div className="flex gap-4 mt-8">
        <button
          onClick={compressPDF}
          disabled={loading}
          className="flex-1 bg-black text-white py-3 rounded-xl"
        >
          {loading ? "Compressing..." : "Compress PDF"}
        </button>

        <button
          onClick={resetTool}
          className="flex-1 border py-3 rounded-xl"
        >
          Reset
        </button>
      </div>
    </ToolLayout>
  );
}