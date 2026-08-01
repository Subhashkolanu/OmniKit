import { Link } from "react-router-dom";
import tools from "../data/tools";

export default function Hero() {
  const totalTools = tools.length;

  return (
    <section className="max-w-7xl mx-auto px-6 py-28 text-center">

      {/* Version Badge */}
      <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-5 py-2 mb-8 shadow-sm">
        <span>🚀</span>
        <span className="text-sm font-semibold">
          OmniKit v1.0 Beta
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
        All Your Essential
        <br />
        <span className="text-blue-600">
          Tools in One Place
        </span>
      </h1>

      {/* Description */}
      <p className="mt-8 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-8">
        OmniKit is a free collection of online tools built for
        developers, students, and creators.
        Everything works directly in your browser with
        no installation required.
      </p>

      {/* Buttons */}
      <div className="mt-10 flex flex-wrap justify-center gap-4">

        <Link
          to="/tools"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
        >
          🚀 Explore Tools
        </Link>

        <a
          href="https://github.com/Subhashkolanu"
          target="_blank"
          rel="noreferrer"
          className="border border-gray-300 bg-white hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
        >
          ⭐ GitHub
        </a>

      </div>

      {/* Stats */}
      <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <h2 className="text-4xl font-bold text-blue-600">
            {totalTools}+
          </h2>
          <p className="mt-2 text-gray-500">
            Powerful Tools
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <h2 className="text-4xl font-bold text-green-600">
            100%
          </h2>
          <p className="mt-2 text-gray-500">
            Browser Based
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <h2 className="text-4xl">⚡</h2>
          <p className="mt-2 text-gray-500">
            Lightning Fast
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <h2 className="text-4xl">🌍</h2>
          <p className="mt-2 text-gray-500">
            Open Source
          </p>
        </div>

      </div>

    </section>
  );
}