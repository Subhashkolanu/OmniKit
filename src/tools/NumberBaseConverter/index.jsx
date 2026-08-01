import { useState } from "react";
import ToolLayout from "../../layouts/ToolLayout";
import { convert } from "./utils";

export default function NumberBaseConverter() {
  const bases = [
    "Binary",
    "Octal",
    "Decimal",
    "Hexadecimal",
  ];

  const [input, setInput] = useState("");
  const [fromBase, setFromBase] = useState("Decimal");
  const [toBase, setToBase] = useState("Binary");
  const [copied, setCopied] = useState(false);

  const result = convert(input, fromBase, toBase);

  function copyResult() {
    if (!result || result === "Invalid Input") return;

    navigator.clipboard.writeText(result);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  function clearAll() {
    setInput("");
    setFromBase("Decimal");
    setToBase("Binary");
    setCopied(false);
  }

  return (
    <ToolLayout
      title="Number Base Converter"
      description="Convert Binary, Octal, Decimal and Hexadecimal instantly."
    >
      <div className="space-y-8">

        <div>
          <label className="font-semibold">
            Enter Number
          </label>

          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter value..."
            className="w-full border rounded-xl p-3 mt-2"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">

          <div>
            <label className="font-semibold">
              From
            </label>

            <select
              value={fromBase}
              onChange={(e) => setFromBase(e.target.value)}
              className="w-full border rounded-xl p-3 mt-2"
            >
              {bases.map((base) => (
                <option key={base}>
                  {base}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-semibold">
              To
            </label>

            <select
              value={toBase}
              onChange={(e) => setToBase(e.target.value)}
              className="w-full border rounded-xl p-3 mt-2"
            >
              {bases.map((base) => (
                <option key={base}>
                  {base}
                </option>
              ))}
            </select>
          </div>

        </div>

        <div className="rounded-2xl border p-6 bg-gray-50">

          <h2 className="text-lg font-semibold">
            Result
          </h2>

          <p className="text-3xl font-bold mt-3 break-all">
            {result || "-"}
          </p>

        </div>

        <div className="flex flex-wrap gap-4">

          <button
            onClick={copyResult}
            className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
          >
            {copied ? "✅ Copied!" : "Copy Result"}
          </button>

          <button
            onClick={clearAll}
            className="border px-6 py-3 rounded-xl hover:bg-gray-100 transition"
          >
            Clear
          </button>

        </div>

      </div>
    </ToolLayout>
  );
}