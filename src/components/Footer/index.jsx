import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/logo.svg";

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-6 pb-10 mt-24">

      <div className="glass rounded-3xl p-10">

        <div className="flex flex-col items-center text-center">

          <img
            src={logo}
            alt="OmniKit"
            className="w-14 h-14 object-contain mb-4"
          />

          <h2 className="text-3xl font-bold text-[var(--text)]">
            OmniKit
          </h2>

          <p className="mt-4 max-w-2xl leading-8 text-[var(--text-secondary)]">
            Free online tools built for developers, students and creators.
            Fast, modern, privacy-friendly and completely browser-based.
          </p>

          <div className="flex items-center gap-5 mt-8">

            <a
              href="https://github.com/Subhashkolanu"
              target="_blank"
              rel="noreferrer"
              className="glass w-12 h-12 rounded-full flex items-center justify-center text-[var(--text)] hover:scale-110 transition-all duration-300"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/sai-subhash-kolanu-358ba0376/"
              target="_blank"
              rel="noreferrer"
              className="glass w-12 h-12 rounded-full flex items-center justify-center text-[var(--text)] hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin size={20} />
            </a>

          </div>

          <div className="flex flex-wrap justify-center gap-8 mt-10">

            <a
              href="/about"
              className="text-[var(--text-secondary)] hover:text-[var(--text)] transition"
            >
              About
            </a>

            <a
              href="/contact"
              className="text-[var(--text-secondary)] hover:text-[var(--text)] transition"
            >
              Contact
            </a>

            <a
              href="https://github.com/Subhashkolanu"
              target="_blank"
              rel="noreferrer"
              className="text-[var(--text-secondary)] hover:text-[var(--text)] transition"
            >
              GitHub
            </a>

          </div>

          <div className="w-full border-t border-[var(--border)] mt-10 pt-6">

            <div className="flex flex-col md:flex-row justify-between items-center gap-3">

              <p className="text-sm text-[var(--text-secondary)]">
                © 2026 OmniKit • Built for Developers & Creators
              </p>

              <p className="text-sm text-[var(--text-secondary)]">
                Built by SAI SUBHASH KOLANU
              </p>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}