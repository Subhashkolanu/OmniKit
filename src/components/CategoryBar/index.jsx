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
    <section className="max-w-7xl mx-auto px-6 mt-8 mb-10">

      <div className="flex flex-wrap justify-center gap-4">

        {categories.map((item) => {

          const active = category === item.id;

          return (

            <button
              key={item.id}
              onClick={() => setCategory(item.id)}
              className={`
                relative
                overflow-hidden
                flex
                items-center
                gap-3
                px-6
                py-3
                rounded-2xl
                font-semibold
                transition-all
                duration-300
                hover:-translate-y-1
                hover:scale-105
                ${
                  active
                    ? "glass shadow-xl"
                    : "hover:bg-white/10"
                }
              `}
              style={{
                color: active
                  ? "var(--text)"
                  : "var(--text-secondary)",
              }}
            >

              {active && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-400/5 to-transparent" />
              )}

              <span className="relative z-10 text-lg">
                {item.icon}
              </span>

              <span className="relative z-10">
                {item.label}
              </span>

            </button>

          );
        })}

      </div>

    </section>
  );
}