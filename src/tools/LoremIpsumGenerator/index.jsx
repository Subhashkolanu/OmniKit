import { useState } from "react";

import ToolLayout from "../../layouts/ToolLayout";

import GlassInput from "../../components/common/GlassInput";
import GlassTextarea from "../../components/common/GlassTextarea";
import PrimaryButton from "../../components/common/PrimaryButton";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

export default function LoremIpsumGenerator() {
  const [count, setCount] = useState(3);
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  function generateLorem() {
    setText(Array(count).fill(lorem).join("\n\n"));
    setCopied(false);
  }

  function copyText() {
    navigator.clipboard.writeText(text);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  function resetTool() {
    setCount(3);
    setText("");
    setCopied(false);
  }

  return (
    <ToolLayout
      title="Lorem Ipsum Generator"
      description="Generate placeholder text instantly."
    >

      <label
        className="block text-lg font-semibold mb-3"
        style={{ color: "var(--text)" }}
      >
        Number of Paragraphs
      </label>

      <GlassInput
        type="number"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      />

      <PrimaryButton
        onClick={generateLorem}
        className="mt-6"
      >
        Generate Lorem Ipsum
      </PrimaryButton>

      {text && (
        <>
          <div className="mt-8">
            <GlassTextarea
              value={text}
              readOnly
              rows={12}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-6">

            <PrimaryButton onClick={copyText}>
              {copied ? "✅ Copied!" : "📋 Copy"}
            </PrimaryButton>

            <button
              onClick={resetTool}
              className="glass rounded-2xl py-4 font-semibold hover:scale-[1.02] transition-all"
              style={{ color: "var(--text)" }}
            >
              🔄 Reset
            </button>

          </div>
        </>
      )}

    </ToolLayout>
  );
}