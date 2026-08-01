import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSearch() {
    const text = query.trim();

    if (text) {
      navigate(`/tools?search=${encodeURIComponent(text)}`);
    } else {
      navigate("/tools");
    }
  }

  return (
    <section className="max-w-5xl mx-auto px-6 -mt-8 mb-20">
      <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-2xl shadow-lg p-4">

        {/* Search Icon */}
        <div className="text-2xl">
          🔍
        </div>

        {/* Input */}
        <input
          type="text"
          placeholder="Search tools..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="flex-1 text-lg outline-none placeholder:text-gray-400"
        />

        {/* Button */}
        <button
          onClick={handleSearch}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Search
        </button>

      </div>
    </section>
  );
}