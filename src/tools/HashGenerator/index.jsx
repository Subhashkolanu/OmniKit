import { useState } from "react";
import ToolLayout from "../../layouts/ToolLayout";

export default function HashGenerator() {
  const [text, setText] = useState("");
  const [hash, setHash] = useState("");

  async function generateHash() {
    if (!text.trim()) {
      alert("Enter some text.");
      return;
    }

    const encoder = new TextEncoder();
    const data = encoder.encode(text);

    const buffer = await crypto.subtle.digest("SHA-256", data);

    const bytes = Array.from(new Uint8Array(buffer));

    const result = bytes
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    setHash(result);
  }

  function copyHash() {
    if (!hash) return;

    navigator.clipboard.writeText(hash);
    alert("Hash copied!");
  }

  function resetTool() {
    setText("");
    setHash("");
  }

  return (
    <ToolLayout
      title="Hash Generator"
      description="Generate SHA-256 hashes instantly."
    >
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text..."
        className="w-full h-40 border rounded-xl p-4 resize-none"
      />      {hash && (
        <>
          <textarea
            value={hash}
            readOnly
            className="w-full h-40 border rounded-xl p-4 mt-6 resize-none"
          />

          <div className="flex gap-4 mt-6">
            <button
              onClick={copyHash}
              className="flex-1 bg-blue-600 text-white py-3 rounded-xl"
            >
              Copy
            </button>

            <button
              onClick={resetTool}
              className="flex-1 border py-3 rounded-xl"
            >
              Reset
            </button>
          </div>
        </>
      )}

      <button
        onClick={generateHash}
        className="w-full bg-black text-white py-3 rounded-xl mt-6"
      >
        Generate SHA-256 Hash
      </button>
    </ToolLayout>
  );
}