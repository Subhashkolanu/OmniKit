import { useState } from "react";

import ToolLayout from "../layouts/ToolLayout";

import GlassTextarea from "../components/common/GlassTextarea";
import GlassCard from "../components/common/GlassCard";
import PrimaryButton from "../components/common/PrimaryButton";

export default function WordCounter() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const words =
    text.trim() === ""
      ? 0
      : text.trim().split(/\s+/).length;

  const characters = text.length;

  const charactersWithoutSpaces =
    text.replace(/\s/g, "").length;

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

      <GlassTextarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing..."
        rows={10}
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-8">

        <GlassCard className="text-center">
          <h3 className="text-lg font-semibold mb-2">📝 Words</h3>
          <p className="text-3xl font-bold">{words}</p>
        </GlassCard>

        <GlassCard className="text-center">
          <h3 className="text-lg font-semibold mb-2">🔤 Characters</h3>
          <p className="text-3xl font-bold">{characters}</p>
        </GlassCard>

        <GlassCard className="text-center">
          <h3 className="text-lg font-semibold mb-2">🚫 No Spaces</h3>
          <p className="text-3xl font-bold">
            {charactersWithoutSpaces}
          </p>
        </GlassCard>

        <GlassCard className="text-center">
          <h3 className="text-lg font-semibold mb-2">💬 Sentences</h3>
          <p className="text-3xl font-bold">{sentences}</p>
        </GlassCard>

        <GlassCard className="text-center">
          <h3 className="text-lg font-semibold mb-2">📄 Paragraphs</h3>
          <p className="text-3xl font-bold">{paragraphs}</p>
        </GlassCard>

        <GlassCard className="text-center">
          <h3 className="text-lg font-semibold mb-2">⏱ Reading Time</h3>
          <p className="text-3xl font-bold">
            {readingTime} min
          </p>
        </GlassCard>

      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-8">

        <PrimaryButton onClick={copyText}>
          {copied ? "✅ Copied!" : "📋 Copy Text"}
        </PrimaryButton>

        <button
          onClick={clearText}
          className="glass py-4 rounded-2xl font-semibold hover:scale-[1.02] transition-all"
          style={{ color: "var(--text)" }}
        >
          🗑 Clear
        </button>

      </div>

    </ToolLayout>
  );
}