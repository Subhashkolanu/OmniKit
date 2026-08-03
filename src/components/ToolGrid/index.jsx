import ToolCard from "../ToolCard";

export default function ToolGrid({ tools }) {
  return (
    <section className="max-w-7xl mx-auto px-6 mt-8 mb-20">

      {tools.length === 0 ? (

        <div className="glass rounded-3xl p-20 text-center">

          <div className="text-6xl mb-5">
            🔍
          </div>

          <h2 className="text-3xl font-bold text-[var(--text)]">
            No tools found
          </h2>

          <p className="mt-4 text-[var(--text-secondary)]">
            Try another keyword or choose a different category.
          </p>

        </div>

      ) : (

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

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