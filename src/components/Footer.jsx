import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-gray-200 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid gap-12 md:grid-cols-3">

          {/* Brand */}
          <div>

            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="OmniKit"
                className="w-12 h-12 object-contain"
              />

              <div>
                <h2 className="text-2xl font-bold">
                  OmniKit
                </h2>

                <p className="text-sm text-gray-500">
                  All Tools. One Place.
                </p>
              </div>
            </div>

            <p className="mt-5 text-gray-600 leading-7">
              OmniKit is a free collection of browser-based tools
              designed for developers, students, and creators.
            </p>

            <p className="mt-6 text-sm text-gray-500">
              Version 1.0 Beta
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-lg font-semibold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              <Link
                to="/"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                Home
              </Link>

              <Link
                to="/tools"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                Tools
              </Link>

              <Link
                to="/about"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                Contact
              </Link>

            </div>

          </div>

          {/* Connect */}
          <div>

            <h3 className="text-lg font-semibold mb-5">
              Connect
            </h3>

            <a
              href="https://github.com/Subhashkolanu"
              target="_blank"
              rel="noreferrer"
              className="block text-gray-600 hover:text-blue-600 transition mb-3"
            >
              GitHub
            </a>

            <p className="text-gray-600">
              Built with React, Vite and Tailwind CSS.
            </p>

          </div>

        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">

          <p>
            © {new Date().getFullYear()} OmniKit. All rights reserved.
          </p>

          <p>
            Made with ❤️ by Sai Subhash Kolanu
          </p>

        </div>

      </div>
    </footer>
  );
}