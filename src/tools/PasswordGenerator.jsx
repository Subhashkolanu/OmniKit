import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
      alert("Select at least one option.");
      return;
    }

    let result = "";

    for (let i = 0; i < length; i++) {
      result += chars.charAt(
        Math.floor(Math.random() * chars.length)
      );
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
    <>
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold text-center">
          Password Generator
        </h1>

        <p className="text-gray-600 text-center mt-4">
          Create strong and secure passwords instantly.
        </p>

        <div className="border rounded-2xl shadow-sm p-8 mt-10">

          <label className="font-semibold">
            Password Length: {length}
          </label>

          <input
            type="range"
            min="6"
            max="32"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full mt-4"
          />

          <div className="grid grid-cols-2 gap-4 mt-8">

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
            className="w-full mt-8 bg-black text-white py-3 rounded-xl hover:bg-gray-800"
          >
            Generate Password
          </button>

          {password && (
            <>
              <input
                value={password}
                readOnly
                className="w-full border rounded-xl mt-8 p-4 text-center font-mono"
              />

              <div className="flex justify-between items-center mt-4">
                <span className="font-semibold">
                  Strength: {strength}
                </span>

                <button
                  onClick={copyPassword}
                  className="border px-5 py-2 rounded-lg hover:bg-gray-100"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}