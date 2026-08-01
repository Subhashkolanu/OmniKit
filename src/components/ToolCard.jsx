import { Link } from "react-router-dom";
import Card from "./ui/Card";
import Button from "./ui/Button";

export default function ToolCard({ tool }) {
  return (
    <Card className="group p-6 flex flex-col h-full border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

      {/* Header */}
      <div className="flex items-start justify-between">

        <div className="text-5xl transition-transform duration-300 group-hover:scale-110">
          {tool.icon}
        </div>

        <span className="bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
          {tool.category}
        </span>

      </div>

      {/* Title */}
      <h2 className="mt-6 text-2xl font-bold text-gray-900">
        {tool.name}
      </h2>

      {/* Description */}
      <p className="mt-3 text-gray-600 leading-7 flex-grow">
        {tool.description}
      </p>

      {/* Button */}
      <div className="mt-8">
        <Link to={tool.path}>
          <Button className="w-full">
            Open Tool →
          </Button>
        </Link>
      </div>

    </Card>
  );
}