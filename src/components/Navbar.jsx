import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold tracking-tight"
        >
          <span className="text-3xl">🧰</span>
          <span>OmniKit</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-gray-600 font-medium">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-black"
                : "hover:text-black transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/tools"
            className={({ isActive }) =>
              isActive
                ? "text-black"
                : "hover:text-black transition"
            }
          >
            Tools
          </NavLink>

          <a
            href="#features"
            className="hover:text-black transition"
          >
            Features
          </a>

          <a
            href="https://github.com/Subhashkolanu"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black transition"
          >
            GitHub
          </a>

        </nav>

        {/* CTA */}
        <Link
          to="/tools"
          className="bg-black text-white px-5 py-2.5 rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-sm hover:shadow-lg"
        >
          Launch →
        </Link>

      </div>
    </header>
  );
}