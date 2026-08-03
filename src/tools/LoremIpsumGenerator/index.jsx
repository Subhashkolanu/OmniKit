import { useState } from "react";
import ToolLayout from "../../layouts/ToolLayout";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

export default function LoremIpsumGenerator() {
  const [count, setCount] = useState(3);
  const [text, setText] = useState("");

  function generateLorem() {
    setText(Array(count).fill(lorem).join("\n\n"));
  }

  function copyText() {
    navigator.clipboard.writeText(text);
    alert("Copied!");
  }

  function resetTool() {
    setCount(3);
    setText("");
  }

  return (
    <ToolLayout
      title="Lorem Ipsum Generator"
      description="Generate placeholder text instantly."
    >
      <label className="font-semibold">Paragraphs</label>

      <input
        type="number"
        min="1"
        max="20"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
        className="w-full border rounded-xl p-3 mt-2"
      />      <button
        onClick={generateLorem}
        className="w-full bg-black text-white py-3 rounded-xl mt-6"
      >
        Generate
      </button>

      {text && (
        <>
          <textarea
            value={text}
            readOnly
            className="w-full h-64 border rounded-xl p-4 mt-6 resize-none"
          />

          <div className="grid grid-cols-2 gap-4 mt-6">
            <button
              onClick={copyText}
              className="bg-blue-600 text-white py-3 rounded-xl"
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