import { useState } from "react";
import ToolLayout from "../layouts/ToolLayout";

export default function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  function generatePassword() {
    let chars = "";

    if (uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) chars += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) chars += "0123456789";
    if (symbols) chars += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    if (!chars) {
      alert("Please select at least one character type.");
      return;
    }

    let result = "";

    for (let i = 0; i < length; i++) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }

    setPassword(result);
    setCopied(false);
  }

  function copyPassword() {
    navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  const strength =
    length >= 16 ? "Strong" : length >= 10 ? "Medium" : "Weak";

  return (
    <ToolLayout
      title="Password Generator"
      description="Generate secure passwords in seconds."
    >
      {/* Length */}
      <div className="mb-8">
        <label className="block text-xl font-semibold text-[var(--text)] mb-4">
          Password Length: {length}
        </label>

        <input
          type="range"
          min="6"
          max="32"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full accent-blue-600 cursor-pointer"
        />
      </div>

      {/* Options */}
      <div className="grid md:grid-cols-2 gap-5">

        <label className="glass p-4 rounded-2xl flex items-center gap-3 text-[var(--text)] cursor-pointer">
          <input
            type="checkbox"
            checked={uppercase}
            onChange={() => setUppercase(!uppercase)}
          />
          Uppercase Letters
        </label>

        <label className="glass p-4 rounded-2xl flex items-center gap-3 text-[var(--text)] cursor-pointer">
          <input
            type="checkbox"
            checked={lowercase}
            onChange={() => setLowercase(!lowercase)}
          />
          Lowercase Letters
        </label>

        <label className="glass p-4 rounded-2xl flex items-center gap-3 text-[var(--text)] cursor-pointer">
          <input
            type="checkbox"
            checked={numbers}
            onChange={() => setNumbers(!numbers)}
          />
          Numbers
        </label>

        <label className="glass p-4 rounded-2xl flex items-center gap-3 text-[var(--text)] cursor-pointer">
          <input
            type="checkbox"
            checked={symbols}
            onChange={() => setSymbols(!symbols)}
          />
          Symbols
        </label>

      </div>

      {/* Button */}
      <button
        onClick={generatePassword}
        className="w-full mt-10 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg transition-all duration-300"
      >
        Generate Password
      </button>

      {/* Result */}
      {password && (
        <div className="glass rounded-3xl p-6 mt-10">

          <input
            readOnly
            value={password}
            className="w-full bg-transparent outline-none text-center font-mono text-lg text-[var(--text)]"
          />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-6">

            <span className="font-semibold text-[var(--text)]">
              Strength:{" "}
              <span
                className={
                  strength === "Strong"
                    ? "text-green-500"
                    : strength === "Medium"
                    ? "text-yellow-500"
                    : "text-red-500"
                }
              >
                {strength}
              </span>
            </span>

            <button
              onClick={copyPassword}
              className="glass px-6 py-2 rounded-xl text-[var(--text)] hover:scale-105 transition-all duration-300"
            >
              {copied ? "Copied!" : "Copy Password"}
            </button>

          </div>

        </div>
      )}
    </ToolLayout>
  );
}