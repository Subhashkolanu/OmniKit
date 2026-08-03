import { useState } from "react";
import ToolLayout from "../../layouts/ToolLayout";

export default function URLEncoderDecoder() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  function encodeURL() {
    try {
      setOutput(encodeURIComponent(input));
    } catch {
      alert("Unable to encode.");
    }
  }

  function decodeURL() {
    try {
      setOutput(decodeURIComponent(input));
    } catch {
      alert("Invalid encoded URL.");
    }
  }

  function copyOutput() {
    navigator.clipboard.writeText(output);
    alert("Copied!");
  }

  function resetTool() {
    setInput("");
    setOutput("");
  }

  return (
    <ToolLayout
      title="URL Encoder / Decoder"
      description="Encode and decode URLs instantly."
    >
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter URL..."
        className="w-full h-40 border rounded-xl p-4 resize-none"
      />      {output && (
        <textarea
          value={output}
          readOnly
          className="w-full h-40 border rounded-xl p-4 mt-6 resize-none"
        />
      )}

      <div className="grid grid-cols-2 gap-4 mt-6">
        <button
          onClick={encodeURL}
          className="bg-black text-white py-3 rounded-xl"
        >
          Encode
        </button>

        <button
          onClick={decodeURL}
          className="bg-black text-white py-3 rounded-xl"
        >
          Decode
        </button>

        <button
          onClick={copyOutput}
          disabled={!output}
          className="border py-3 rounded-xl disabled:opacity-50"
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
    </ToolLayout>
  );
}