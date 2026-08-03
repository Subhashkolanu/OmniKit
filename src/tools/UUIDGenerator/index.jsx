import { useState } from "react";
import ToolLayout from "../../layouts/ToolLayout";

export default function UUIDGenerator() {
  const [uuid, setUuid] = useState("");

  function generateUUID() {
    setUuid(crypto.randomUUID());
  }

  function copyUUID() {
    if (!uuid) return;

    navigator.clipboard.writeText(uuid);
    alert("UUID copied to clipboard!");
  }

  function resetTool() {
    setUuid("");
  }

  return (
    <ToolLayout
      title="UUID Generator"
      description="Generate secure UUID v4 identifiers instantly."
    >
      <div className="space-y-6">

        <button
          onClick={generateUUID}
          className="w-full bg-black text-white py-3 rounded-xl"
        >
          Generate UUID
        </button>

        <textarea
          value={uuid}
          readOnly
          placeholder="Generated UUID will appear here..."
          className="w-full border rounded-xl p-4 h-32 resize-none"
        />

        <div className="flex gap-4">

          <button
            onClick={copyUUID}
            disabled={!uuid}
            className="flex-1 bg-blue-600 text-white py-3 rounded-xl disabled:opacity-50"
          >
            Copy
          </button>

          <button
            onClick={resetTool}
            className="flex-1 border py-3 rounded-xl"
          >
            Reset
          </button>

        </div>

      </div>
    </ToolLayout>
  );
}