import { useState } from "react";
import ToolLayout from "../layouts/ToolLayout";

export default function WordCounter() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const words =
    text.trim() === ""
      ? 0
      : text.trim().split(/\s+/).length;

  const characters = text.length;

  const charactersWithoutSpaces = text.replace(/\s/g, "").length;

  const sentences =
    text.trim() === ""
      ? 0
      : text.split(/[.!?]+/).filter(Boolean).length;

  const paragraphs =
    text.trim() === ""
      ? 0
      : text.split(/\n+/).filter(Boolean).length;

  const readingTime = Math.ceil(words / 200);

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
      title="Word & Character Counter"
      description="Analyze your text instantly."
    >
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing..."
        rows={10}
        className="w-full border rounded-xl p-4 resize-none"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        <div className="border rounded-xl p-4">
          <h3 className="font-semibold">📝 Words</h3>
          <p className="text-2xl">{words}</p>
        </div>

        <div className="border rounded-xl p-4">
          <h3 className="font-semibold">🔤 Characters</h3>
          <p className="text-2xl">{characters}</p>
        </div>

        <div className="border rounded-xl p-4">
          <h3 className="font-semibold">🚫 No Spaces</h3>
          <p className="text-2xl">{charactersWithoutSpaces}</p>
        </div>

        <div className="border rounded-xl p-4">
          <h3 className="font-semibold">💬 Sentences</h3>
          <p className="text-2xl">{sentences}</p>
        </div>

        <div className="border rounded-xl p-4">
          <h3 className="font-semibold">📄 Paragraphs</h3>
          <p className="text-2xl">{paragraphs}</p>
        </div>

        <div className="border rounded-xl p-4">
          <h3 className="font-semibold">⏱ Reading Time</h3>
          <p className="text-2xl">{readingTime} min</p>
        </div>
      </div>

      <div className="flex gap-4 mt-8">
        <button
          onClick={copyText}
          className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
        >
          {copied ? "✅ Copied!" : "Copy Text"}
        </button>

        <button
          onClick={clearText}
          className="border px-6 py-3 rounded-xl hover:bg-gray-100 transition"
        >
          Clear
        </button>
      </div>
    </ToolLayout>
  );
}