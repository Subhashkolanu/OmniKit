import { Link } from "react-router-dom";
import tools from "../data/tools";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 text-center">

      {/* Version Badge */}
      <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-4 py-2 mb-8">
        <span>🚀</span>
        <span className="text-sm font-semibold">
          OmniKit v0.7.0 Alpha
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
        All Your Essential
        <br />
        <span className="text-blue-600">
          Tools in One Place
        </span>
      </h1>

      {/* Description */}
      <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-8">
        OmniKit is a fast, free, and open-source collection of online tools
        designed for developers, students, and creators.
        Everything works directly in your browser—no installation required.
      </p>

      {/* Buttons */}
      <div className="mt-10 flex flex-wrap justify-center gap-4">

        <Link
          to="/tools"
          className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition shadow-lg"
        >
          🚀 Explore Tools
        </Link>

        <a
          href="https://github.com/Subhashkolanu"
          target="_blank"
          rel="noreferrer"
          className="border border-gray-300 px-8 py-4 rounded-xl hover:bg-gray-100 transition"
        >
          ⭐ GitHub
        </a>

      </div>

      {/* Stats */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">

        <div className="bg-white border rounded-2xl shadow-sm p-6 hover:shadow-lg transition">
          <h2 className="text-4xl font-bold text-blue-600">
            8+
          </h2>
          <p className="text-gray-500 mt-2">
            Powerful Tools
          </p>
        </div>

        <div className="bg-white border rounded-2xl shadow-sm p-6 hover:shadow-lg transition">
          <h2 className="text-4xl font-bold text-green-600">
            100%
          </h2>
          <p className="text-gray-500 mt-2">
            Browser Based
          </p>
        </div>

        <div className="bg-white border rounded-2xl shadow-sm p-6 hover:shadow-lg transition">
          <h2 className="text-4xl">
            ⚡
          </h2>
          <p className="text-gray-500 mt-2">
            Lightning Fast
          </p>
        </div>

        <div className="bg-white border rounded-2xl shadow-sm p-6 hover:shadow-lg transition">
          <h2 className="text-4xl">
            🌍
          </h2>
          <p className="text-gray-500 mt-2">
            Open Source
          </p>
        </div>

      </div>

    </section>
  );
}