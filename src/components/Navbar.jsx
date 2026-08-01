import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="OmniKit"
            className="w-12 h-12 object-contain"
          />

          <div>
            <h1 className="text-2xl font-bold">OmniKit</h1>
            <p className="text-xs text-gray-500">
              All Tools. One Place.
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-blue-600"
                : "text-gray-600 hover:text-blue-600 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/tools"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-blue-600"
                : "text-gray-600 hover:text-blue-600 transition"
            }
          >
            Tools
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-blue-600"
                : "text-gray-600 hover:text-blue-600 transition"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-blue-600"
                : "text-gray-600 hover:text-blue-600 transition"
            }
          >
            Contact
          </NavLink>

          <a
            href="https://github.com/Subhashkolanu"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            GitHub
          </a>

        </nav>

        {/* CTA Button */}
        <Link
          to="/tools"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl transition"
        >
          Explore Tools
        </Link>

      </div>
    </header>
  );
}