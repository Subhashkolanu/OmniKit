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
    length >= 16
      ? "Strong"
      : length >= 10
      ? "Medium"
      : "Weak";

  return (
    <ToolLayout
      title="Password Generator"
      description="Generate secure passwords in seconds."
    >
      <label className="font-semibold">
        Password Length: {length}
      </label>

      <input
        type="range"
        min="6"
        max="32"
        value={length}
        onChange={(e) => setLength(Number(e.target.value))}
        className="w-full mt-3"
      />

      <div className="grid md:grid-cols-2 gap-4 mt-8">
        <label>
          <input
            type="checkbox"
            checked={uppercase}
            onChange={() => setUppercase(!uppercase)}
          />{" "}
          Uppercase
        </label>

        <label>
          <input
            type="checkbox"
            checked={lowercase}
            onChange={() => setLowercase(!lowercase)}
          />{" "}
          Lowercase
        </label>

        <label>
          <input
            type="checkbox"
            checked={numbers}
            onChange={() => setNumbers(!numbers)}
          />{" "}
          Numbers
        </label>

        <label>
          <input
            type="checkbox"
            checked={symbols}
            onChange={() => setSymbols(!symbols)}
          />{" "}
          Symbols
        </label>
      </div>

      <button
        onClick={generatePassword}
        className="w-full bg-black text-white py-3 rounded-xl mt-8"
      >
        Generate Password
      </button>

      {password && (
        <>
          <input
            readOnly
            value={password}
            className="w-full border rounded-xl mt-8 p-4 font-mono text-center"
          />

          <div className="flex justify-between items-center mt-5">
            <span className="font-semibold">
              Strength: {strength}
            </span>

            <button
              onClick={copyPassword}
              className="border px-5 py-2 rounded-lg"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </>
      )}
    </ToolLayout>
  );
}