import { useState } from "react";

import ToolLayout from "../../layouts/ToolLayout";

import GlassInput from "../../components/common/GlassInput";
import GlassTextarea from "../../components/common/GlassTextarea";
import GlassCard from "../../components/common/GlassCard";
import PrimaryButton from "../../components/common/PrimaryButton";

export default function RegexTester() {
  const [pattern, setPattern] = useState("");
  const [text, setText] = useState("");
  const [matches, setMatches] = useState([]);
  const [error, setError] = useState("");

  function testRegex() {
    try {
      const regex = new RegExp(pattern, "g");
      const result = text.match(regex);

      setMatches(result || []);
      setError("");
    } catch {
      setMatches([]);
      setError("❌ Invalid Regular Expression");
    }
  }

  function resetTool() {
    setPattern("");
    setText("");
    setMatches([]);
    setError("");
  }

  return (
    <ToolLayout
      title="Regex Tester"
      description="Test and validate regular expressions instantly."
    >
      <GlassInput
        value={pattern}
        onChange={(e) => setPattern(e.target.value)}
        placeholder="Enter regex pattern (e.g. \\d+)"
      />

      <div className="mt-6">
        <GlassTextarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text to test..."
          rows={8}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-8">

        <PrimaryButton onClick={testRegex}>
          🔍 Test Regex
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

      {!error && matches.length > 0 && (
        <GlassCard className="mt-8">

          <h3
            className="text-xl font-bold mb-4"
            style={{ color: "var(--text)" }}
          >
            Matches ({matches.length})
          </h3>

          <ul
            className="space-y-3"
            style={{ color: "var(--text)" }}
          >
            {matches.map((match, index) => (
              <li
                key={index}
                className="glass rounded-xl px-4 py-3"
              >
                {match}
              </li>
            ))}
          </ul>

        </GlassCard>
      )}

    </ToolLayout>
  );
}