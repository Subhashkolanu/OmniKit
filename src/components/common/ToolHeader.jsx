export default function ToolHeader({
  title,
  subtitle,
}) {
  return (
    <div className="mb-8">

      <h2
        className="text-2xl font-bold"
        style={{ color: "var(--text)" }}
      >
        {title}
      </h2>

      <p
        className="mt-2"
        style={{ color: "var(--text-secondary)" }}
      >
        {subtitle}
      </p>

    </div>
  );
}