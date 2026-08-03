import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="glass w-11 h-11 rounded-full flex items-center justify-center text-[var(--text)] hover:text-yellow-400 transition-all"
      aria-label="Toggle Theme"
    >
      {theme === "light" ? (
        <FaMoon size={18} />
      ) : (
        <FaSun size={18} className="text-yellow-400" />
      )}
    </button>
  );
}