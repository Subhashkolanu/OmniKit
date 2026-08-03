import { Link } from "react-router-dom";
import Card from "./ui/Card";
import Button from "./ui/Button";

export default function ToolCard({ tool }) {
  return (
    <Card
      className="
      group
      relative
      overflow-hidden
      glass
      rounded-3xl
      p-6
      flex
      flex-col
      h-full
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-2xl
      hover:scale-[1.02]
    "
    >
      {/* Glow */}

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/10 via-cyan-400/5 to-transparent" />

      <div className="relative z-10">

        {/* Header */}

        <div className="flex items-start justify-between">

          <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-4xl transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
            {tool.icon}
          </div>

          <span
            className="glass px-4 py-1 rounded-full text-xs font-semibold"
            style={{ color: "var(--text)" }}
          >
            {tool.category}
          </span>

        </div>

        {/* Title */}

        <h2
          className="mt-6 text-2xl font-bold"
          style={{ color: "var(--text)" }}
        >
          {tool.name}
        </h2>

        {/* Description */}

        <p
          className="mt-3 leading-7 min-h-[70px]"
          style={{ color: "var(--text-secondary)" }}
        >
          {tool.description}
        </p>

        {/* Footer */}

        <div className="mt-8 flex items-center justify-between">

          <div className="text-sm text-blue-500 font-medium">
            Ready to use
          </div>

          <Link to={tool.path}>
            <Button className="rounded-xl px-6">
              Open →
            </Button>
          </Link>

        </div>

      </div>

    </Card>
  );
}