import { useRef, useState } from "react";
import QRCode from "react-qr-code";
import { toPng } from "html-to-image";
import ToolLayout from "../layouts/ToolLayout";

export default function QRCodeGenerator() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const qrRef = useRef(null);

  async function downloadQR() {
    if (!qrRef.current) return;

    try {
      const dataUrl = await toPng(qrRef.current);

      const link = document.createElement("a");
      link.download = "omnikit-qrcode.png";
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error(err);
    }
  }

  function copyText() {
    navigator.clipboard.writeText(text);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  function clearText() {
    setText("");
    setCopied(false);
  }

  return (
    <ToolLayout
      title="QR Code Generator"
      description="Generate QR codes instantly from text or URLs."
    >
      <div className="space-y-6">

        <textarea
          rows={4}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a URL, text, phone number, email, or Wi-Fi details..."
          className="w-full border rounded-xl p-4 resize-none"
        />

        <div
          ref={qrRef}
          className="bg-white p-6 rounded-xl flex justify-center"
        >
          <QRCode
            value={text || " "}
            size={220}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-4">

          <button
            onClick={downloadQR}
            className="bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
          >
            Download PNG
          </button>

          <button
            onClick={copyText}
            className="border py-3 rounded-xl hover:bg-gray-100 transition"
          >
            {copied ? "✅ Copied!" : "Copy Text"}
          </button>

          <button
            onClick={clearText}
            className="border py-3 rounded-xl hover:bg-gray-100 transition"
          >
            Clear
          </button>

        </div>

      </div>
    </ToolLayout>
  );
}