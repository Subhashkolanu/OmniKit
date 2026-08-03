export default function ToggleSwitch({
  checked,
  onChange,
  label,
}) {
  return (
    <label className="glass flex items-center justify-between p-4 rounded-2xl cursor-pointer">

      <span
        className="font-medium"
        style={{ color: "var(--text)" }}
      >
        {label}
      </span>

      <div className="relative">

        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />

        <div
          className={`w-12 h-7 rounded-full transition ${
            checked ? "bg-blue-600" : "bg-gray-400"
          }`}
        />

        <div
          className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white transition ${
            checked ? "translate-x-5" : ""
          }`}
        />

      </div>

    </label>
  );
}