import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
        
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold">
          OmniKit
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 text-lg">
          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>

          <Link to="/tools" className="hover:text-blue-600 transition">
            Tools
          </Link>

          <Link to="/about" className="hover:text-blue-600 transition">
            About
          </Link>

          <Link to="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
        </div>

        {/* Button */}
        <Link
          to="/tools"
          className="bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition"
        >
          Explore Tools
        </Link>
      </div>
    </nav>
  );
}