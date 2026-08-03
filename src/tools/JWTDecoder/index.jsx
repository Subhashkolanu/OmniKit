import { useState } from "react";

import ToolLayout from "../../layouts/ToolLayout";

import GlassTextarea from "../../components/common/GlassTextarea";
import GlassCard from "../../components/common/GlassCard";
import PrimaryButton from "../../components/common/PrimaryButton";

export default function JWTDecoder() {
  const [token, setToken] = useState("");
  const [header, setHeader] = useState("");
  const [payload, setPayload] = useState("");
  const [error, setError] = useState("");

  function decodeJWT() {
    try {
      const parts = token.split(".");

      if (parts.length !== 3) {
        throw new Error();
      }

      const decode = (str) => {
        const base64 = str.replace(/-/g, "+").replace(/_/g, "/");

        return JSON.stringify(
          JSON.parse(atob(base64)),
          null,
          2
        );
      };

      setHeader(decode(parts[0]));
      setPayload(decode(parts[1]));
      setError("");
    } catch {
      setHeader("");
      setPayload("");
      setError("❌ Invalid JWT Token");
    }
  }

  function resetTool() {
    setToken("");
    setHeader("");
    setPayload("");
    setError("");
  }

  return (
    <ToolLayout
      title="JWT Decoder"
      description="Decode JWT tokens instantly."
    >
      <GlassTextarea
        value={token}
        onChange={(e) => setToken(e.target.value)}
        placeholder="Paste JWT Token..."
        rows={6}
      />

      <div className="grid md:grid-cols-2 gap-4 mt-8">

        <PrimaryButton onClick={decodeJWT}>
          🔓 Decode JWT
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

      {(header || payload) && (
        <div className="grid lg:grid-cols-2 gap-6 mt-8">

          <GlassCard>

            <h3
              className="text-xl font-bold mb-4"
              style={{ color: "var(--text)" }}
            >
              Header
            </h3>

            <GlassTextarea
              value={header}
              readOnly
              rows={12}
            />

          </GlassCard>

          <GlassCard>

            <h3
              className="text-xl font-bold mb-4"
              style={{ color: "var(--text)" }}
            >
              Payload
            </h3>

            <GlassTextarea
              value={payload}
              readOnly
              rows={12}
            />

          </GlassCard>

        </div>
      )}

    </ToolLayout>
  );
}