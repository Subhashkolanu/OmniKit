import ToolCard from "./ToolCard";
import tools from "../data/tools";

export default function FeaturedTools() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        Featured Tools
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {tools.slice(0, 3).map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </section>
  );
}