export default function GlassSlider({
  value,
  onChange,
  min = 6,
  max = 32,
}) {
  return (
    <div className="glass rounded-2xl p-5">

      <div
        className="flex justify-between mb-4"
        style={{ color: "var(--text)" }}
      >
        <span className="font-semibold">Password Length</span>
        <span className="font-bold text-blue-500">{value}</span>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        className="w-full accent-blue-600 cursor-pointer"
      />

    </div>
  );
}