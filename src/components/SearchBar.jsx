export default function SearchBar() {
  return (
    <section className="max-w-3xl mx-auto px-6">
      <div className="flex border rounded-xl overflow-hidden shadow-sm">
        <input
          type="text"
          placeholder="Search for a tool..."
          className="flex-1 px-5 py-4 outline-none"
        />
        <button className="bg-black text-white px-6">
          Search
        </button>
      </div>
    </section>
  );
}