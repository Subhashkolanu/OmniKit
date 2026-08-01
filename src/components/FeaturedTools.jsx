import { Link } from "react-router-dom";
import tools from "../data/tools";
import ToolCard from "./ToolCard";

export default function FeaturedTools() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-14">

        <div>

          <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-medium mb-4">
            🚀 Featured Collection
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Explore Our Tools
          </h2>

          <p className="mt-4 text-lg text-gray-600 max-w-2xl">
            A growing collection of browser-based tools designed for
            developers, students, and creators.
          </p>

        </div>

        <Link
          to="/tools"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
        >
          View All {tools.length} Tools →
        </Link>

      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {tools.slice(0, Math.min(8, tools.length)).map((tool) => (
          <ToolCard
            key={tool.id}
            tool={tool}
          />
        ))}

      </div>

    </section>
  );
}