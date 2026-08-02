import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import ToolLayout from "../../layouts/ToolLayout";

export default function PDFSplitter() {
  const [file, setFile] = useState(null);
  const [pageRange, setPageRange] = useState("");
  const [loading, setLoading] = useState(false);

  async function splitPDF() {
    if (!file) {
      alert("Please select a PDF.");
      return;
    }

    if (!pageRange.trim()) {
      alert("Enter page numbers or ranges.");
      return;
    }

    try {
      setLoading(true);

      const bytes = await file.arrayBuffer();

      const pdfDoc = await PDFDocument.load(bytes);

      const totalPages = pdfDoc.getPageCount();

      let pages = [];

      const ranges = pageRange.split(",");

      for (const range of ranges) {
        if (range.includes("-")) {
          const [start, end] = range
            .split("-")
            .map((n) => parseInt(n.trim(), 10));

          if (
            isNaN(start) ||
            isNaN(end) ||
            start < 1 ||
            end > totalPages ||
            start > end
          ) {
            throw new Error("Invalid page range.");
          }

          for (let i = start; i <= end; i++) {
            pages.push(i - 1);
          }
        } else {
          const page = parseInt(range.trim(), 10);

          if (
            isNaN(page) ||
            page < 1 ||
            page > totalPages
          ) {
            throw new Error("Invalid page number.");
          }

          pages.push(page - 1);
        }
      }

      pages = [...new Set(pages)];

      const newPdf = await PDFDocument.create();

      const copiedPages = await newPdf.copyPages(
        pdfDoc,
        pages
      );
            copiedPages.forEach((page) => {
        newPdf.addPage(page);
      });

      const pdfBytes = await newPdf.save();

      const blob = new Blob([pdfBytes], {
        type: "application/pdf",
      });

      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "split.pdf";
      a.click();

      URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
      alert(err.message || "Failed to split PDF.");
    } finally {
      setLoading(false);
    }
  }

  function resetTool() {
    setFile(null);
    setPageRange("");
  }

  return (
    <ToolLayout
      title="PDF Splitter"
      description="Extract selected pages from a PDF."
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
        Page Range
      </label>

      <input
        type="text"
        value={pageRange}
        onChange={(e) => setPageRange(e.target.value)}
        placeholder="Example: 1-3,5,8-10"
        className="w-full border rounded-xl p-4 mt-3"
      />

      <div className="flex gap-4 mt-8">
        <button
          onClick={splitPDF}
          disabled={loading}
          className="flex-1 bg-black text-white py-3 rounded-xl"
        >
          {loading ? "Splitting..." : "Split PDF"}
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