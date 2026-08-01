import { Link } from "react-router-dom";
import Card from "./ui/Card";
import Button from "./ui/Button";

export default function ToolCard({ tool }) {
  return (
    <Card className="p-6 group hover:-translate-y-2">

      <div className="flex items-center justify-between">

        <div className="text-5xl">
          {tool.icon}
        </div>

        <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">
          {tool.category}
        </span>

      </div>

      <h2 className="text-2xl font-bold mt-6">
        {tool.name}
      </h2>

      <p className="text-gray-600 mt-3 min-h-[60px]">
        {tool.description}
      </p>

      <div className="mt-6">
        <Link to={tool.path}>
          <Button>
            Open Tool →
          </Button>
        </Link>
      </div>

    </Card>
  );
}