export default function GlassInput({
  value,
  onChange,
  placeholder = "",
  readOnly = false,
  type = "text",
  className = "",
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      readOnly={readOnly}
      placeholder={placeholder}
      className={`glass w-full rounded-2xl px-5 py-4 bg-transparent outline-none text-[color:var(--text)] placeholder:text-[color:var(--text-secondary)] ${className}`}
    />
  );
}