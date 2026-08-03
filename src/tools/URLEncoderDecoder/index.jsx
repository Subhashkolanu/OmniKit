import { useState } from "react";

import ToolLayout from "../../layouts/ToolLayout";

import GlassTextarea from "../../components/common/GlassTextarea";
import GlassCard from "../../components/common/GlassCard";
import PrimaryButton from "../../components/common/PrimaryButton";

export default function URLEncoderDecoder() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  function encodeURL() {
    try {
      setOutput(encodeURIComponent(input));
      setError("");
      setCopied(false);
    } catch {
      setOutput("");
      setError("❌ Unable to encode URL.");
    }
  }

  function decodeURL() {
    try {
      setOutput(decodeURIComponent(input));
      setError("");
      setCopied(false);
    } catch {
      setOutput("");
      setError("❌ Invalid encoded URL.");
    }
  }

  function copyOutput() {
    if (!output) return;

    navigator.clipboard.writeText(output);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  function resetTool() {
    setInput("");
    setOutput("");
    setError("");
    setCopied(false);
  }

  return (
    <ToolLayout
      title="URL Encoder / Decoder"
      description="Encode and decode URLs instantly."
    >
      <GlassTextarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter URL..."
        rows={8}
      />

      <div className="grid md:grid-cols-4 gap-4 mt-8">

        <PrimaryButton onClick={encodeURL}>
          🔒 Encode
        </PrimaryButton>

        <PrimaryButton onClick={decodeURL}>
          🔓 Decode
        </PrimaryButton>

        <PrimaryButton onClick={copyOutput}>
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
            Output
          </h3>

          <GlassTextarea
            value={output}
            readOnly
            rows={8}
          />

        </GlassCard>
      )}

    </ToolLayout>
  );
}