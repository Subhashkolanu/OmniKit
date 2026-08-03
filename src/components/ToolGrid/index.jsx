import ToolCard from "../ToolCard";

export default function ToolGrid({ tools }) {
  return (
    <section className="max-w-7xl mx-auto px-6 mt-6 mb-16">
      {tools.length === 0 ? (
        <div className="glass rounded-3xl p-16 text-center">
          <h2 className="text-2xl font-semibold text-[var(--text)]">
            No tools found
          </h2>

          <p className="mt-3 text-[var(--text-secondary)]">
            Try searching with another keyword.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <ToolCard
              key={tool.id}
              tool={tool}
            />
          ))}
        </div>
      )}
    </section>
  );
}