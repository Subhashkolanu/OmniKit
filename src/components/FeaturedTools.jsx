import tools from "../data/tools";
import ToolCard from "./ToolCard";

export default function FeaturedTools() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="text-center mb-12">

        <h2 className="text-4xl font-bold">
          Featured Tools
        </h2>

        <p className="text-gray-600 mt-4">
          Free online tools built for developers, students and creators.
        </p>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {tools.slice(0, 8).map((tool) => (
          <ToolCard
            key={tool.id}
            tool={tool}
          />
        ))}
      </div>

    </section>
  );
}