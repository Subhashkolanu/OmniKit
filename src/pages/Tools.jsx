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

      <main className="min-h-screen bg-gray-50">

        <section className="max-w-7xl mx-auto px-6 py-16">

          {/* Header */}
          <div className="text-center">

            <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-medium mb-5">
              🛠 OmniKit Collection
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold">
              Explore All Tools
            </h1>

            <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
              Browse all {tools.length} browser-based tools designed
              for developers, students and creators.
            </p>

          </div>

          {/* Search */}
          <div className="mt-12">

            <input
              type="text"
              placeholder="Search tools..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-2xl border border-gray-300 bg-white px-6 py-4 text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">

            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`px-5 py-2 rounded-full font-medium transition ${
                  category === item
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white border border-gray-300 hover:bg-gray-100"
                }`}
              >
                {item}
              </button>
            ))}

          </div>

          {/* Counter */}
          <p className="mt-10 text-gray-500">
            Showing <strong>{filteredTools.length}</strong> of{" "}
            <strong>{tools.length}</strong> tools
          </p>

          {/* Grid */}
          {filteredTools.length === 0 ? (

            <div className="mt-16 bg-white border rounded-2xl shadow-sm p-12 text-center">

              <h2 className="text-3xl font-bold">
                No tools found
              </h2>

              <p className="mt-4 text-gray-500">
                Try another keyword or category.
              </p>

            </div>

          ) : (

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">

              {filteredTools.map((tool) => (
                <ToolCard
                  key={tool.id}
                  tool={tool}
                />
              ))}

            </div>

          )}

        </section>

      </main>

      <Footer />
    </>
  );
}