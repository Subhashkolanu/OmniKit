import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import ThemeToggle from "../ThemeToggle";
import logo from "../../assets/logo.svg";

export default function Navbar({ search, setSearch }) {
  return (
    <header className="sticky top-0 z-50 px-6 py-4">
      <div className="glass max-w-7xl mx-auto rounded-3xl px-8 py-3">

        <div className="flex items-center justify-between gap-8">

          {/* Logo */}
          <div className="flex items-center gap-3 select-none">

            <img
              src={logo}
              alt="OmniKit Logo"
              className="w-11 h-11 object-contain"
            />

            <h1 className="text-2xl font-bold tracking-tight text-[var(--text)]">
              OmniKit
            </h1>

          </div>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-xl">

            <div className="glass flex items-center gap-3 w-full rounded-full px-5 py-2.5">

              <FiSearch
                size={20}
                className="text-[var(--text)]"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search any tool..."
                className="w-full bg-transparent outline-none text-[var(--text)] placeholder:text-[var(--text-secondary)]"
              />

            </div>

          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">

            <a
              href="https://github.com/Subhashkolanu"
              target="_blank"
              rel="noreferrer"
              className="glass w-11 h-11 rounded-full flex items-center justify-center text-[var(--text)] hover:text-blue-500 transition-all duration-300"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/sai-subhash-kolanu-358ba0376/"
              target="_blank"
              rel="noreferrer"
              className="glass w-11 h-11 rounded-full flex items-center justify-center text-[var(--text)] hover:text-blue-500 transition-all duration-300"
            >
              <FaLinkedin size={20} />
            </a>

            <ThemeToggle />

          </div>

        </div>

      </div>
    </header>
  );
}