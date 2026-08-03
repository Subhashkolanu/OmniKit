import { useState } from "react";
import ToolLayout from "../../layouts/ToolLayout";

export default function RegexTester() {
  const [pattern, setPattern] = useState("");
  const [text, setText] = useState("");
  const [matches, setMatches] = useState([]);

  function testRegex() {
    try {
      const regex = new RegExp(pattern, "g");
      const result = text.match(regex);
      setMatches(result || []);
    } catch {
      alert("Invalid regular expression.");
      setMatches([]);
    }
  }

  function resetTool() {
    setPattern("");
    setText("");
    setMatches([]);
  }

  return (
    <ToolLayout
      title="Regex Tester"
      description="Test regular expressions instantly."
    >
      <input
        type="text"
        value={pattern}
        onChange={(e) => setPattern(e.target.value)}
        placeholder="Enter regex pattern..."
        className="w-full border rounded-xl p-3"
      />

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text..."
        className="w-full h-40 border rounded-xl p-4 mt-6 resize-none"
      />      {matches.length > 0 && (
        <div className="mt-6 border rounded-xl p-4">
          <h3 className="font-semibold mb-3">
            Matches ({matches.length})
          </h3>

          <ul className="list-disc pl-5 space-y-2">
            {matches.map((match, index) => (
              <li key={index}>{match}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4 mt-6">
        <button
          onClick={testRegex}
          className="bg-black text-white py-3 rounded-xl"
        >
          Test Regex
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