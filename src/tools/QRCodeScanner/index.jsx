import { useState } from "react";
import jsQR from "jsqr";
import ToolLayout from "../../layouts/ToolLayout";

export default function QRCodeScanner() {
  const [result, setResult] = useState("");

  async function scanQR(e) {
    const file = e.target.files[0];
    if (!file) return;

    const img = new Image();
    img.src = URL.createObjectURL(file);

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
      );

      const code = jsQR(
        imageData.data,
        canvas.width,
        canvas.height
      );

      if (code) {
        setResult(code.data);
      } else {
        alert("No QR Code found.");
      }
    };
  }

  function copyResult() {
    navigator.clipboard.writeText(result);
    alert("Copied!");
  }

  function resetTool() {
    setResult("");
  }

  return (
    <ToolLayout
      title="QR Code Scanner"
      description="Scan QR codes from uploaded images."
    >
      <input
        type="file"
        accept="image/*"
        onChange={scanQR}
        className="w-full border rounded-xl p-4"
      />      {result && (
        <>
          <textarea
            value={result}
            readOnly
            className="w-full h-40 border rounded-xl p-4 mt-6 resize-none"
          />

          <div className="grid grid-cols-2 gap-4 mt-6">
            <button
              onClick={copyResult}
              className="bg-black text-white py-3 rounded-xl"
            >
              Copy
            </button>

            <button
              onClick={resetTool}
              className="border py-3 rounded-xl"
            >
              Reset
            </button>
          </div>
        </>
      )}
    </ToolLayout>
  );
}