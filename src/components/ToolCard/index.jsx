import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const gradients = {
  PDF: "from-red-500/20 to-red-300/10 text-red-500",
  Image: "from-green-500/20 to-green-300/10 text-green-500",
  Developer: "from-violet-500/20 to-purple-300/10 text-violet-500",
  Text: "from-orange-500/20 to-yellow-300/10 text-orange-500",
  Utility: "from-sky-500/20 to-cyan-300/10 text-sky-500",
};

export default function ToolCard({ tool }) {
  const style =
    gradients[tool.category] ||
    "from-gray-500/20 to-gray-300/10 text-gray-500";

  return (
    <Link
      to={tool.path}
      className="glass group block rounded-3xl p-6 hover:-translate-y-2 hover:scale-[1.02]"
    >
      <div className="flex items-start justify-between">

        <div
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${style}
          flex items-center justify-center text-3xl`}
        >
          {tool.icon}
        </div>

        <FaArrowRight
          className="opacity-40 group-hover:opacity-100
          group-hover:translate-x-1 transition-all"
        />
      </div>

      <h3 className="mt-6 text-xl font-semibold text-[var(--text)]">
        {tool.name}
      </h3>

      <p className="mt-2 text-sm text-[var(--text-secondary)]">
        {tool.description}
      </p>

      <div className="mt-5 inline-flex rounded-full px-3 py-1 text-xs font-medium bg-white/10 text-[var(--text-secondary)]">
        {tool.category}
      </div>
    </Link>
  );
}