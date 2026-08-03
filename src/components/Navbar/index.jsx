import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import ThemeToggle from "../ThemeToggle";
import logo from "../../assets/logo.svg";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-3 md:px-6 py-2 md:py-5">

      <div className="glass max-w-7xl mx-auto rounded-2xl md:rounded-3xl px-4 md:px-8 py-3">

        <div className="flex items-center justify-between gap-3 md:gap-6">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 md:gap-3 select-none hover:opacity-90 transition-all duration-300"
          >
            <img
              src={logo}
              alt="OmniKit Logo"
              className="w-8 h-8 md:w-11 md:h-11 object-contain"
            />

            <h1 className="text-xl md:text-2xl font-bold tracking-tight text-[var(--text)]">
              OmniKit
            </h1>
          </Link>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-xl">

            <div className="glass flex items-center gap-3 w-full rounded-full px-5 py-3">

              <FiSearch
                size={20}
                className="text-[var(--text)]"
              />

              <input
                type="text"
                placeholder="Search any tool..."
                className="w-full bg-transparent outline-none text-[var(--text)] placeholder:text-[var(--text-secondary)]"
              />

            </div>

          </div>

          {/* Right */}
          <div className="flex items-center gap-2 md:gap-3">

            <a
              href="https://github.com/Subhashkolanu"
              target="_blank"
              rel="noreferrer"
              className="glass w-9 h-9 md:w-11 md:h-11 rounded-full flex items-center justify-center text-[var(--text)] hover:text-blue-500 transition-all duration-300"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/sai-subhash-kolanu-358ba0376/"
              target="_blank"
              rel="noreferrer"
              className="glass w-9 h-9 md:w-11 md:h-11 rounded-full flex items-center justify-center text-[var(--text)] hover:text-blue-500 transition-all duration-300"
            >
              <FaLinkedin size={18} />
            </a>

            <ThemeToggle />

          </div>

        </div>

      </div>

    </header>
  );
}