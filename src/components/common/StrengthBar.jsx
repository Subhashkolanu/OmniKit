export default function StrengthBar({ strength }) {
  const width =
    strength === "Strong"
      ? "100%"
      : strength === "Medium"
      ? "65%"
      : "35%";

  const color =
    strength === "Strong"
      ? "#22c55e"
      : strength === "Medium"
      ? "#f59e0b"
      : "#ef4444";

  return (
    <div className="mt-6">

      <div
        className="flex justify-between mb-2 text-sm"
        style={{ color: "var(--text-secondary)" }}
      >
        <span>Password Strength</span>
        <span>{strength}</span>
      </div>

      <div
        className="w-full rounded-full overflow-hidden"
        style={{
          height: "10px",
          background: "rgba(148,163,184,.25)"
        }}
      >
        <div
          style={{
            width,
            height: "100%",
            background: color,
            transition: "all .4s ease"
          }}
        />
      </div>

    </div>
  );
}