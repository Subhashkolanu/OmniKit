import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (search.trim() !== "") {
      navigate(`/tools?search=${encodeURIComponent(search)}`);
    } else {
      navigate("/tools");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section className="max-w-3xl mx-auto px-6">
      <div className="flex border rounded-xl overflow-hidden shadow-sm">
        <input
          type="text"
          placeholder="Search for a tool..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 px-5 py-4 outline-none"
        />

        <button
          onClick={handleSearch}
          className="bg-black text-white px-6 hover:bg-gray-800 transition"
        >
          Search
        </button>
      </div>
    </section>
  );
}