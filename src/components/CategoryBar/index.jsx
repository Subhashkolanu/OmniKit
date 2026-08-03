import {
  FaThLarge,
  FaFilePdf,
  FaImage,
  FaCode,
  FaFont,
  FaCog,
} from "react-icons/fa";

const categories = [
  { id: "all", label: "All", icon: <FaThLarge /> },
  { id: "pdf", label: "PDF", icon: <FaFilePdf className="text-red-500" /> },
  { id: "image", label: "Image", icon: <FaImage className="text-green-500" /> },
  { id: "developer", label: "Developer", icon: <FaCode className="text-violet-500" /> },
  { id: "text", label: "Text", icon: <FaFont className="text-orange-500" /> },
  { id: "utility", label: "Utility", icon: <FaCog className="text-sky-500" /> },
];

export default function CategoryBar({ category, setCategory }) {
  return (
    <section className="flex justify-center mt-6 mb-8">

      <div className="flex items-center gap-2 flex-wrap">

        {categories.map((item) => (
          <button
            key={item.id}
            onClick={() => setCategory(item.id)}
            className={`flex items-center gap-2 px-5 py-3 rounded-full transition-all duration-300 font-medium
              ${
                category === item.id
                  ? "glass shadow-lg text-[var(--text)] scale-105"
                  : "text-[var(--text-secondary)] hover:text-[var(--text)]"
              }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}

      </div>

    </section>
  );
}