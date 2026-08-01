import { useState } from "react";
import ToolLayout from "../layouts/ToolLayout";

export default function JSONFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  function formatJSON() {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError("");
    } catch {
      setOutput("");
      setError("❌ Invalid JSON");
    }
  }

  function minifyJSON() {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
      setError("");
    } catch {
      setOutput("");
      setError("❌ Invalid JSON");
    }
  }

  async function copyOutput() {
    if (!output) return;

    await navigator.clipboard.writeText(output);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  function clearAll() {
    setInput("");
    setOutput("");
    setError("");
    setCopied(false);
  }

  return (
    <ToolLayout
      title="JSON Formatter"
      description="Format, validate and minify JSON instantly."
    >
      <div className="space-y-6">

        <textarea
          rows={10}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Paste JSON here...'
          className="w-full border rounded-xl p-4 resize-none"
        />

        <div className="flex flex-wrap gap-4">

          <button
            onClick={formatJSON}
            className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
          >
            Format
          </button>

          <button
            onClick={minifyJSON}
            className="border px-6 py-3 rounded-xl hover:bg-gray-100 transition"
          >
            Minify
          </button>

          <button
            onClick={copyOutput}
            className="border px-6 py-3 rounded-xl hover:bg-gray-100 transition"
          >
            {copied ? "✅ Copied!" : "Copy"}
          </button>

          <button
            onClick={clearAll}
            className="border px-6 py-3 rounded-xl hover:bg-gray-100 transition"
          >
            Clear
          </button>

        </div>

        {error && (
          <div className="bg-red-100 text-red-700 rounded-xl p-4">
            {error}
          </div>
        )}

        {output && (
          <textarea
            rows={12}
            readOnly
            value={output}
            className="w-full border rounded-xl p-4 font-mono bg-gray-50"
          />
        )}

      </div>
    </ToolLayout>
  );
}