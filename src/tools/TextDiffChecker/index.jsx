import { useState } from "react";
import ToolLayout from "../../layouts/ToolLayout";

export default function TextDiffChecker() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [result, setResult] = useState("");

  function compareText() {
    if (!text1.trim() && !text2.trim()) {
      alert("Enter text to compare.");
      return;
    }

    if (text1 === text2) {
      setResult("✅ Both texts are identical.");
    } else {
      setResult("❌ Texts are different.");
    }
  }

  function copyResult() {
    navigator.clipboard.writeText(result);
    alert("Copied!");
  }

  function resetTool() {
    setText1("");
    setText2("");
    setResult("");
  }

  return (
    <ToolLayout
      title="Text Diff Checker"
      description="Compare two texts instantly."
    >
      <textarea
        value={text1}
        onChange={(e) => setText1(e.target.value)}
        placeholder="First text..."
        className="w-full h-40 border rounded-xl p-4 resize-none"
      />

      <textarea
        value={text2}
        onChange={(e) => setText2(e.target.value)}
        placeholder="Second text..."
        className="w-full h-40 border rounded-xl p-4 mt-6 resize-none"
      />      {result && (
        <div className="mt-6 border rounded-xl p-4 bg-gray-100">
          <p className="font-semibold">{result}</p>
        </div>
      )}

      <div className="grid grid-cols-3 gap-4 mt-6">
        <button
          onClick={compareText}
          className="bg-black text-white py-3 rounded-xl"
        >
          Compare
        </button>

        <button
          onClick={copyResult}
          disabled={!result}
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