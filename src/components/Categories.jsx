const categories = [
  "📄 PDF Tools",
  "🖼️ Image Tools",
  "📝 Text Tools",
  "💻 Developer Tools",
  "⚡ Utilities",
];

export default function Categories() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">
        Browse by Category
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {categories.map((item) => (
          <div
            key={item}
            className="border rounded-xl p-6 text-center hover:bg-black hover:text-white transition cursor-pointer"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}