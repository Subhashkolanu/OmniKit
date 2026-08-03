import { useState } from "react";

import ToolLayout from "../../layouts/ToolLayout";

import GlassTextarea from "../../components/common/GlassTextarea";
import GlassCard from "../../components/common/GlassCard";
import PrimaryButton from "../../components/common/PrimaryButton";

export default function TextDiffChecker() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);

  function compareText() {
    if (!text1.trim() && !text2.trim()) {
      alert("Enter text to compare.");
      return;
    }

    if (text1 === text2) {
      setResult("✅ Both texts are identical.");
    } else {
      setResult("❌ The texts are different.");
    }

    setCopied(false);
  }

  function copyResult() {
    if (!result) return;

    navigator.clipboard.writeText(result);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  function resetTool() {
    setText1("");
    setText2("");
    setResult("");
    setCopied(false);
  }

  return (
    <ToolLayout
      title="Text Diff Checker"
      description="Compare two pieces of text instantly."
    >
      <div className="grid md:grid-cols-2 gap-6">

        <GlassCard>

          <h2
            className="text-lg font-bold mb-4"
            style={{ color: "var(--text)" }}
          >
            First Text
          </h2>

          <GlassTextarea
            value={text1}
            onChange={(e) => setText1(e.target.value)}
            placeholder="Enter first text..."
            rows={10}
          />

        </GlassCard>

        <GlassCard>

          <h2
            className="text-lg font-bold mb-4"
            style={{ color: "var(--text)" }}
          >
            Second Text
          </h2>

          <GlassTextarea
            value={text2}
            onChange={(e) => setText2(e.target.value)}
            placeholder="Enter second text..."
            rows={10}
          />

        </GlassCard>

      </div>

      {result && (
        <GlassCard className="mt-8 text-center">

          <h3
            className="text-xl font-bold"
            style={{ color: "var(--text)" }}
          >
            Comparison Result
          </h3>

          <p
            className="mt-4 text-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            {result}
          </p>

        </GlassCard>
      )}

      <div className="grid md:grid-cols-3 gap-4 mt-8">

        <PrimaryButton onClick={compareText}>
          🔍 Compare
        </PrimaryButton>

        <PrimaryButton onClick={copyResult}>
          {copied ? "✅ Copied!" : "📋 Copy Result"}
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