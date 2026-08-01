import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `font-medium transition ${
      isActive
        ? "text-blue-600"
        : "text-gray-600 hover:text-blue-600"
    }`;

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">

      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="OmniKit"
            className="w-11 h-11 object-contain transition-transform duration-300 group-hover:scale-110"
          />

          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              OmniKit
            </h1>

            <p className="text-xs text-gray-500">
              All Tools. One Place.
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">

          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/tools" className={navLinkClass}>
            Tools
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>

          <a
            href="https://github.com/Subhashkolanu"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-gray-600 hover:text-blue-600 transition"
          >
            GitHub
          </a>

        </nav>

        {/* Desktop Button */}
        <Link
          to="/tools"
          className="hidden lg:inline-flex bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition"
        >
          Explore Tools
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-3xl"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">

          <div className="flex flex-col px-6 py-6 gap-5">

            <NavLink
              to="/"
              onClick={closeMenu}
              className={navLinkClass}
            >
              Home
            </NavLink>

            <NavLink
              to="/tools"
              onClick={closeMenu}
              className={navLinkClass}
            >
              Tools
            </NavLink>

            <NavLink
              to="/about"
              onClick={closeMenu}
              className={navLinkClass}
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={navLinkClass}
            >
              Contact
            </NavLink>

            <a
              href="https://github.com/Subhashkolanu"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-gray-600"
            >
              GitHub
            </a>

            <Link
              to="/tools"
              onClick={closeMenu}
              className="mt-2 bg-blue-600 text-white text-center py-3 rounded-xl font-semibold"
            >
              Explore Tools
            </Link>

          </div>

        </div>
      )}

    </header>
  );
}