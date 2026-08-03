import { useState } from "react";

import ToolLayout from "../../layouts/ToolLayout";

import GlassTextarea from "../../components/common/GlassTextarea";
import GlassCard from "../../components/common/GlassCard";
import PrimaryButton from "../../components/common/PrimaryButton";

export default function UUIDGenerator() {
  const [uuid, setUuid] = useState("");
  const [copied, setCopied] = useState(false);

  function generateUUID() {
    setUuid(crypto.randomUUID());
    setCopied(false);
  }

  function copyUUID() {
    if (!uuid) return;

    navigator.clipboard.writeText(uuid);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  function resetTool() {
    setUuid("");
    setCopied(false);
  }

  return (
    <ToolLayout
      title="UUID Generator"
      description="Generate secure UUID v4 identifiers instantly."
    >
      <PrimaryButton onClick={generateUUID}>
        🎲 Generate UUID
      </PrimaryButton>

      <GlassCard className="mt-8">

        <h3
          className="text-xl font-bold mb-4"
          style={{ color: "var(--text)" }}
        >
          Generated UUID
        </h3>

        <GlassTextarea
          value={uuid}
          readOnly
          rows={4}
          placeholder="Generated UUID will appear here..."
        />

      </GlassCard>

      <div className="grid md:grid-cols-2 gap-4 mt-8">

        <PrimaryButton onClick={copyUUID}>
          {copied ? "✅ Copied!" : "📋 Copy UUID"}
        </PrimaryButton>

        <button
          onClick={resetTool}
          className="glass rounded-2xl py-4 font-semibold hover:scale-[1.02] transition-all"
          style={{ color: "var(--text)" }}
        >
          🔄 Reset
        </button>

      </div>

    </ToolLayout>
  );
}