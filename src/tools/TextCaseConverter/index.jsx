import { useState } from "react";
import ToolLayout from "../../layouts/ToolLayout";
import {
  toUpper,
  toLower,
  toTitle,
  toSentence,
  toCamel,
  toSnake,
  toKebab,
} from "./utils";

export default function TextCaseConverter() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  function copyText() {
    if (!text) return;

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
      title="Text Case Converter"
      description="Convert text into different formats instantly."
    >
      <div className="space-y-6">

        <textarea
          rows={8}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your text..."
          className="w-full border rounded-xl p-4 resize-none"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

          <button
            onClick={() => setText(toUpper(text))}
            className="border rounded-xl py-3 hover:bg-gray-100 transition"
          >
            UPPERCASE
          </button>

          <button
            onClick={() => setText(toLower(text))}
            className="border rounded-xl py-3 hover:bg-gray-100 transition"
          >
            lowercase
          </button>

          <button
            onClick={() => setText(toTitle(text))}
            className="border rounded-xl py-3 hover:bg-gray-100 transition"
          >
            Title Case
          </button>

          <button
            onClick={() => setText(toSentence(text))}
            className="border rounded-xl py-3 hover:bg-gray-100 transition"
          >
            Sentence case
          </button>

          <button
            onClick={() => setText(toCamel(text))}
            className="border rounded-xl py-3 hover:bg-gray-100 transition"
          >
            camelCase
          </button>

          <button
            onClick={() => setText(toSnake(text))}
            className="border rounded-xl py-3 hover:bg-gray-100 transition"
          >
            snake_case
          </button>

          <button
            onClick={() => setText(toKebab(text))}
            className="border rounded-xl py-3 hover:bg-gray-100 transition"
          >
            kebab-case
          </button>

        </div>

        <div className="grid grid-cols-2 gap-4">

          <div className="border rounded-xl p-4 text-center">
            <h3 className="font-semibold">Words</h3>
            <p className="text-2xl">
              {text.trim() ? text.trim().split(/\s+/).length : 0}
            </p>
          </div>

          <div className="border rounded-xl p-4 text-center">
            <h3 className="font-semibold">Characters</h3>
            <p className="text-2xl">
              {text.length}
            </p>
          </div>

        </div>

        <div className="flex gap-4">

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

      </div>
    </ToolLayout>
  );
}