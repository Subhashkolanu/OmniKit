import { Link } from "react-router-dom";

export default function ToolCard({ tool }) {
  return (
    <div className="border rounded-xl p-6 hover:shadow-xl transition duration-300">
      <div className="text-5xl mb-4">{tool.icon}</div>

      <h3 className="text-2xl font-semibold">
        {tool.name}
      </h3>

      <span className="inline-block mt-3 bg-gray-100 px-3 py-1 rounded-full text-sm">
        {tool.category}
      </span>

      <p className="text-gray-600 mt-4">
        {tool.description}
      </p>

      <Link
        to={tool.path}
        className="inline-block mt-6 bg-black text-white px-5 py-2 rounded-lg"
      >
        Open Tool
      </Link>
    </div>
  );
}