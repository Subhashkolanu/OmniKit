import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSearch() {
    navigate(`/tools?search=${encodeURIComponent(query)}`);
  }

  return (
    <section className="max-w-5xl mx-auto px-6 -mt-8 mb-20">
      <div className="bg-white shadow-xl border rounded-2xl p-4 flex items-center gap-3">

        <span className="text-2xl">🔍</span>

        <input
          type="text"
          placeholder="Search for Password Generator, JSON Formatter..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="flex-1 outline-none text-lg"
        />

        <button
          onClick={handleSearch}
          className="bg-black text-white px-8 py-3 rounded-xl hover:bg-gray-800 transition"
        >
          Search
        </button>

      </div>
    </section>
  );
}