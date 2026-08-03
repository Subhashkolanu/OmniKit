import { useState } from "react";
import { marked } from "marked";
import ToolLayout from "../../layouts/ToolLayout";

export default function MarkdownPreview() {
  const [markdown, setMarkdown] = useState(`# Welcome to OmniKit

## Markdown Preview

- Fast
- Free
- Live Preview

**Bold Text**

\`console.log("Hello");\`
`);

  function resetTool() {
    setMarkdown("");
  }

  function copyMarkdown() {
    navigator.clipboard.writeText(markdown);
    alert("Copied!");
  }

  return (
    <ToolLayout
      title="Markdown Preview"
      description="Write Markdown and preview it instantly."
    >
      <div className="grid md:grid-cols-2 gap-6">

        <textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          className="border rounded-xl p-4 h-[500px] resize-none"
        />        <div
          className="border rounded-xl p-4 h-[500px] overflow-auto prose max-w-none"
          dangerouslySetInnerHTML={{
            __html: marked.parse(markdown),
          }}
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <button
          onClick={copyMarkdown}
          className="bg-black text-white py-3 rounded-xl"
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
    </ToolLayout>
  );
}