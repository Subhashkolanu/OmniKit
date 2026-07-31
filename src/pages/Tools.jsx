import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import tools from "../data/tools";
import ToolCard from "../components/ToolCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Tools() {
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get("search") || "";

  const [search, setSearch] = useState(initialSearch);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    setSearch(initialSearch);
  }, [initialSearch]);

  const categories = [
    "All",
    "Utility",
    "Developer",
    "Text",
    "Image",
    "PDF",
  ];

  const filteredTools = tools.filter((tool) => {
    const matchesSearch =
      tool.name.toLowerCase().includes(search.toLowerCase()) ||
      tool.description.toLowerCase().includes(search.toLowerCase()) ||
      tool.category.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || tool.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold text-center">
          Explore Tools
        </h1>

        <p className="text-center text-gray-600 mt-4">
          Powerful online tools to boost your productivity.
        </p>

        <div className="mt-10">
          <input
            type="text"
            placeholder="Search tools..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-xl px-5 py-4"
          />
        </div>

        <div className="flex flex-wrap gap-3 mt-6 justify-center">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`px-5 py-2 rounded-full border transition ${
                category === item
                  ? "bg-black text-white"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <p className="text-gray-500 mt-8">
          {filteredTools.length} tool(s) found
        </p>

        {filteredTools.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-3xl font-semibold">
              No tools found
            </h2>

            <p className="text-gray-500 mt-3">
              Try searching with another keyword.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}