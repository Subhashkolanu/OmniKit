import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 text-center">

      <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 mb-8">
        <span>🚀</span>
        <span className="text-sm font-medium">
          OmniKit v0.7.0 Alpha
        </span>
      </div>

      <h1 className="text-6xl font-extrabold leading-tight">
        The Ultimate
        <br />
        Online Toolkit
      </h1>

      <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
        Powerful online tools for developers, students and creators.
        Fast, free and open source.
      </p>

      <div className="mt-10 flex justify-center gap-4">

        <Link
          to="/tools"
          className="bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition"
        >
          Launch Tools →
        </Link>

        <a
          href="https://github.com/Subhashkolanu"
          target="_blank"
          rel="noreferrer"
          className="border px-8 py-4 rounded-xl hover:bg-gray-100 transition"
        >
          GitHub
        </a>

      </div>

      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">

        <div className="border rounded-2xl p-6">
          <h2 className="text-4xl font-bold">8+</h2>
          <p className="text-gray-500 mt-2">Working Tools</p>
        </div>

        <div className="border rounded-2xl p-6">
          <h2 className="text-4xl font-bold">100%</h2>
          <p className="text-gray-500 mt-2">Free</p>
        </div>

        <div className="border rounded-2xl p-6">
          <h2 className="text-4xl font-bold">⚡</h2>
          <p className="text-gray-500 mt-2">Fast</p>
        </div>

        <div className="border rounded-2xl p-6">
          <h2 className="text-4xl font-bold">🌍</h2>
          <p className="text-gray-500 mt-2">Open Source</p>
        </div>

      </div>

    </section>
  );
}