import { useState } from "react";

import ToolLayout from "../../layouts/ToolLayout";

import GlassTextarea from "../../components/common/GlassTextarea";
import GlassCard from "../../components/common/GlassCard";
import PrimaryButton from "../../components/common/PrimaryButton";

export default function HashGenerator() {
  const [text, setText] = useState("");
  const [hash, setHash] = useState("");
  const [copied, setCopied] = useState(false);

  async function generateHash() {
    if (!text.trim()) {
      alert("Enter some text.");
      return;
    }

    const encoder = new TextEncoder();
    const data = encoder.encode(text);

    const buffer = await crypto.subtle.digest("SHA-256", data);

    const bytes = Array.from(new Uint8Array(buffer));

    const result = bytes
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    setHash(result);
    setCopied(false);
  }

  function copyHash() {
    if (!hash) return;

    navigator.clipboard.writeText(hash);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  function resetTool() {
    setText("");
    setHash("");
    setCopied(false);
  }

  return (
    <ToolLayout
      title="Hash Generator"
      description="Generate SHA-256 hashes instantly."
    >
      <GlassTextarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text..."
        rows={8}
      />

      <PrimaryButton
        onClick={generateHash}
        className="mt-8"
      >
        🔐 Generate SHA-256 Hash
      </PrimaryButton>

      {hash && (
        <>
          <GlassCard className="mt-8">

            <h3
              className="text-xl font-bold mb-4"
              style={{ color: "var(--text)" }}
            >
              SHA-256 Hash
            </h3>

            <GlassTextarea
              value={hash}
              readOnly
              rows={6}
            />

          </GlassCard>

          <div className="grid md:grid-cols-2 gap-4 mt-8">

            <PrimaryButton onClick={copyHash}>
              {copied ? "✅ Copied!" : "📋 Copy Hash"}
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