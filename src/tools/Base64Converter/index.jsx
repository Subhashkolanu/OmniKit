import { useState } from "react";
import ToolLayout from "../../layouts/ToolLayout";

export default function Base64Converter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  function encodeText() {
    try {
      setOutput(btoa(input));
    } catch {
      alert("Unable to encode text.");
    }
  }

  function decodeText() {
    try {
      setOutput(atob(input));
    } catch {
      alert("Invalid Base64 string.");
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
      title="Base64 Encoder / Decoder"
      description="Encode and decode Base64 text instantly."
    >
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text or Base64..."
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
          onClick={encodeText}
          className="bg-black text-white py-3 rounded-xl"
        >
          Encode
        </button>

        <button
          onClick={decodeText}
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