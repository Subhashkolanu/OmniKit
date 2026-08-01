import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold flex items-center gap-2">
              🧰 OmniKit
            </h2>

            <p className="text-gray-600 mt-4">
              A collection of free online tools built for developers,
              students, and creators.
            </p>

            <p className="mt-6 text-sm text-gray-500">
              Version 0.7.0 Alpha
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              <Link
                to="/"
                className="hover:text-black text-gray-600 transition"
              >
                Home
              </Link>

              <Link
                to="/tools"
                className="hover:text-black text-gray-600 transition"
              >
                Tools
              </Link>

              <a
                href="https://github.com/Subhashkolanu"
                target="_blank"
                rel="noreferrer"
                className="hover:text-black text-gray-600 transition"
              >
                GitHub
              </a>

            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              About
            </h3>

            <p className="text-gray-600 leading-7">
              OmniKit is an open-source toolkit focused on providing
              fast, privacy-friendly, browser-based utilities.
            </p>
          </div>

        </div>

        <div className="border-t mt-12 pt-8 text-center text-gray-500">
          © {new Date().getFullYear()} OmniKit. Built with React,
          Vite & Tailwind CSS.
        </div>

      </div>
    </footer>
  );
}