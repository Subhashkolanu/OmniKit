export default function ToolCard({ title, description }) {
  return (
    <div className="border rounded-xl p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>

      <button className="mt-5 bg-black text-white px-4 py-2 rounded-lg">
        Open
      </button>
    </div>
  );
}