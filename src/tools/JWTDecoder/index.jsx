import { useState } from "react";
import ToolLayout from "../../layouts/ToolLayout";

export default function JWTDecoder() {
  const [token, setToken] = useState("");
  const [header, setHeader] = useState("");
  const [payload, setPayload] = useState("");

  function decodeJWT() {
    try {
      const parts = token.split(".");

      if (parts.length !== 3) {
        alert("Invalid JWT token.");
        return;
      }

      const decode = (str) =>
        JSON.stringify(
          JSON.parse(atob(str.replace(/-/g, "+").replace(/_/g, "/"))),
          null,
          2
        );

      setHeader(decode(parts[0]));
      setPayload(decode(parts[1]));
    } catch {
      alert("Unable to decode JWT.");
    }
  }

  function resetTool() {
    setToken("");
    setHeader("");
    setPayload("");
  }

  return (
    <ToolLayout
      title="JWT Decoder"
      description="Decode JWT tokens instantly."
    >
      <textarea
        value={token}
        onChange={(e) => setToken(e.target.value)}
        placeholder="Paste JWT token..."
        className="w-full h-36 border rounded-xl p-4 resize-none"
      />      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <textarea
          value={header}
          readOnly
          placeholder="Header"
          className="h-64 border rounded-xl p-4 resize-none"
        />

        <textarea
          value={payload}
          readOnly
          placeholder="Payload"
          className="h-64 border rounded-xl p-4 resize-none"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <button
          onClick={decodeJWT}
          className="bg-black text-white py-3 rounded-xl"
        >
          Decode
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