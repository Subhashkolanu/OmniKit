import { useState } from "react";

import ToolLayout from "../layouts/ToolLayout";

import GlassTextarea from "../components/common/GlassTextarea";
import GlassCard from "../components/common/GlassCard";
import PrimaryButton from "../components/common/PrimaryButton";

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
      setCopied(false);
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
      setCopied(false);
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
      <GlassTextarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Paste your JSON here..."
        rows={12}
      />

      <div className="grid md:grid-cols-4 gap-4 mt-8">

        <PrimaryButton onClick={formatJSON}>
          ✨ Format
        </PrimaryButton>

        <PrimaryButton onClick={minifyJSON}>
          📦 Minify
        </PrimaryButton>

        <PrimaryButton onClick={copyOutput}>
          {copied ? "✅ Copied!" : "📋 Copy"}
        </PrimaryButton>

        <button
          onClick={clearAll}
          className="glass rounded-2xl py-4 font-semibold hover:scale-[1.02] transition-all"
          style={{ color: "var(--text)" }}
        >
          🗑 Clear
        </button>

      </div>

      {error && (
        <GlassCard className="mt-8 text-center">
          <p className="text-red-500 font-semibold">
            {error}
          </p>
        </GlassCard>
      )}

      {output && (
        <GlassCard className="mt-8">

          <h3
            className="text-xl font-bold mb-4"
            style={{ color: "var(--text)" }}
          >
            Formatted JSON
          </h3>

          <GlassTextarea
            value={output}
            readOnly
            rows={14}
          />

        </GlassCard>
      )}

    </ToolLayout>
  );
}