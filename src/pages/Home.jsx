import { useMemo, useState } from "react";

import Navbar from "../components/Navbar";
import CategoryBar from "../components/CategoryBar";
import ToolGrid from "../components/ToolGrid";
import Footer from "../components/Footer";

import tools from "../data/tools";

export default function Home() {
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesCategory =
        category === "all" ||
        tool.category.toLowerCase() === category.toLowerCase();

      const query = search.toLowerCase();

      const matchesSearch =
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query) ||
        tool.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  return (
    <main className="min-h-screen">

      <Navbar
        search={search}
        setSearch={setSearch}
      />

      <CategoryBar
        category={category}
        setCategory={setCategory}
      />

      <ToolGrid
        tools={filteredTools}
      />

      <Footer />

    </main>
  );
}