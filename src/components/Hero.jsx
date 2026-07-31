import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="text-center py-24 px-6">
      <h1 className="text-6xl font-bold leading-tight">
        One Place.
        <br />
        Every Tool.
      </h1>

      <p className="text-gray-600 mt-6 text-xl max-w-3xl mx-auto">
        OmniKit brings together essential online tools for developers,
        students, creators, and professionals in one simple platform.
      </p>

      <div className="mt-10 flex justify-center gap-4">
        <Link
          to="/tools"
          className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
        >
          Explore Tools
        </Link>

        <a
          href="https://github.com/Subhashkolanu"
          target="_blank"
          rel="noreferrer"
          className="border border-black px-6 py-3 rounded-xl hover:bg-black hover:text-white transition"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}