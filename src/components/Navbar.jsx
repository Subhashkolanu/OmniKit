import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <div className="w-11 h-11 rounded-xl bg-black text-white flex items-center justify-center text-xl">
            🧰
          </div>

          <div>
            <h1 className="text-xl font-bold">
              OmniKit
            </h1>

            <p className="text-xs text-gray-500">
              Developer Toolkit
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-black"
                : "text-gray-600 hover:text-black transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/tools"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-black"
                : "text-gray-600 hover:text-black transition"
            }
          >
            Tools
          </NavLink>

          <a
            href="#"
            className="text-gray-600 hover:text-black transition"
          >
            Features
          </a>

          <a
            href="https://github.com/Subhashkolanu"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 hover:text-black transition"
          >
            GitHub
          </a>

        </nav>

        {/* Button */}
        <Link
          to="/tools"
          className="bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition"
        >
          Launch →
        </Link>

      </div>
    </header>
  );
}