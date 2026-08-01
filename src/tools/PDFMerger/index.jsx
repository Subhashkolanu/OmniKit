import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import ToolLayout from "../../layouts/ToolLayout";

export default function PDFMerger() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  function handleFiles(e) {
    const selected = Array.from(e.target.files);

    if (selected.length === 0) return;

    setFiles(selected);
  }

  async function mergePDFs() {
    if (files.length < 2) {
      alert("Select at least two PDF files.");
      return;
    }

    setLoading(true);

    try {
      const mergedPdf = await PDFDocument.create();

      for (const file of files) {
        const bytes = await file.arrayBuffer();

        const pdf = await PDFDocument.load(bytes);

        const pages = await mergedPdf.copyPages(
          pdf,
          pdf.getPageIndices()
        );

        pages.forEach((page) => mergedPdf.addPage(page));
      }

      const mergedBytes = await mergedPdf.save();

      const blob = new Blob([mergedBytes], {
        type: "application/pdf",
      });

      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");

      a.href = url;
      a.download = "OmniKit-Merged.pdf";

      a.click();

      URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
      alert("Failed to merge PDFs.");
    }

    setLoading(false);
  }

  return (
    <ToolLayout
      title="PDF Merger"
      description="Merge multiple PDF files into one."
    >
      <div className="space-y-8">

        <input
          type="file"
          accept=".pdf"
          multiple
          onChange={handleFiles}
          className="border rounded-xl p-3 w-full"
        />

        {files.length > 0 && (
          <div className="border rounded-xl p-6">

            <h2 className="font-bold text-xl mb-4">
              Selected Files
            </h2>

            <ul className="space-y-2">
              {files.map((file, index) => (
                <li key={index}>
                  {index + 1}. {file.name}
                </li>
              ))}
            </ul>

          </div>
        )}

        <button
          onClick={mergePDFs}
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
        >
          {loading ? "Merging..." : "Merge PDFs"}
        </button>

      </div>
    </ToolLayout>
  );
}