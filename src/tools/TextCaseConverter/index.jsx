import { useState } from "react";

import ToolLayout from "../../layouts/ToolLayout";

import GlassTextarea from "../../components/common/GlassTextarea";
import GlassCard from "../../components/common/GlassCard";
import PrimaryButton from "../../components/common/PrimaryButton";

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
      <GlassTextarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your text here..."
        rows={8}
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">

        <PrimaryButton onClick={() => setText(toUpper(text))}>
          UPPERCASE
        </PrimaryButton>

        <PrimaryButton onClick={() => setText(toLower(text))}>
          lowercase
        </PrimaryButton>

        <PrimaryButton onClick={() => setText(toTitle(text))}>
          Title Case
        </PrimaryButton>

        <PrimaryButton onClick={() => setText(toSentence(text))}>
          Sentence Case
        </PrimaryButton>

        <PrimaryButton onClick={() => setText(toCamel(text))}>
          camelCase
        </PrimaryButton>

        <PrimaryButton onClick={() => setText(toSnake(text))}>
          snake_case
        </PrimaryButton>

        <PrimaryButton onClick={() => setText(toKebab(text))}>
          kebab-case
        </PrimaryButton>

      </div>

      <div className="grid grid-cols-2 gap-5 mt-8">

        <GlassCard className="text-center">

          <h3
            className="text-lg font-semibold mb-2"
            style={{ color: "var(--text)" }}
          >
            📝 Words
          </h3>

          <p
            className="text-3xl font-bold"
            style={{ color: "var(--text)" }}
          >
            {text.trim() ? text.trim().split(/\s+/).length : 0}
          </p>

        </GlassCard>

        <GlassCard className="text-center">

          <h3
            className="text-lg font-semibold mb-2"
            style={{ color: "var(--text)" }}
          >
            🔤 Characters
          </h3>

          <p
            className="text-3xl font-bold"
            style={{ color: "var(--text)" }}
          >
            {text.length}
          </p>

        </GlassCard>

      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-8">

        <PrimaryButton onClick={copyText}>
          {copied ? "✅ Copied!" : "📋 Copy Text"}
        </PrimaryButton>

        <button
          onClick={clearText}
          className="glass rounded-2xl py-4 font-semibold hover:scale-[1.02] transition-all"
          style={{ color: "var(--text)" }}
        >
          🗑 Clear
        </button>

      </div>

    </ToolLayout>
  );
}