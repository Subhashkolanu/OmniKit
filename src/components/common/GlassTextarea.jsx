export default function GlassTextarea({
  value,
  onChange,
  placeholder = "",
  rows = 8,
}) {
  return (
    <textarea
      value={value}
      onChange={onChange}
      rows={rows}
      placeholder={placeholder}
      className="glass w-full rounded-2xl p-5 resize-none bg-transparent outline-none text-[color:var(--text)] placeholder:text-[color:var(--text-secondary)]"
    />
  );
}