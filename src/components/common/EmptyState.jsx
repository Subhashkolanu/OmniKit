export default function EmptyState({ message }) {
  return (
    <div className="glass rounded-2xl p-10 text-center">

      <p
        style={{ color: "var(--text-secondary)" }}
      >
        {message}
      </p>

    </div>
  );
}