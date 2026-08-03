import { useState } from "react";
import { marked } from "marked";

import ToolLayout from "../../layouts/ToolLayout";

import GlassTextarea from "../../components/common/GlassTextarea";
import GlassCard from "../../components/common/GlassCard";
import PrimaryButton from "../../components/common/PrimaryButton";

export default function MarkdownPreview() {
  const [markdown, setMarkdown] = useState(`# Welcome to OmniKit

## Markdown Preview

- Fast
- Free
- Live Preview

**Bold Text**

\`console.log("Hello");\`
`);

  const [copied, setCopied] = useState(false);

  function resetTool() {
    setMarkdown("");
    setCopied(false);
  }

  function copyMarkdown() {
    navigator.clipboard.writeText(markdown);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <ToolLayout
      title="Markdown Preview"
      description="Write Markdown and preview it instantly."
    >
      <div className="grid lg:grid-cols-2 gap-6">

        {/* Editor */}
        <GlassCard>

          <h2
            className="text-xl font-bold mb-4"
            style={{ color: "var(--text)" }}
          >
            ✍️ Markdown Editor
          </h2>

          <GlassTextarea
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            rows={18}
            placeholder="Write Markdown..."
          />

        </GlassCard>

        {/* Preview */}
        <GlassCard>

          <h2
            className="text-xl font-bold mb-4"
            style={{ color: "var(--text)" }}
          >
            👀 Live Preview
          </h2>

          <div
            className="prose dark:prose-invert max-w-none overflow-auto h-[420px]"
            dangerouslySetInnerHTML={{
              __html: marked.parse(markdown),
            }}
          />

        </GlassCard>

      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-8">

        <PrimaryButton onClick={copyMarkdown}>
          {copied ? "✅ Copied!" : "📋 Copy Markdown"}
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