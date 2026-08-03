import { Link } from "react-router-dom";
import tools from "../data/tools";

export default function Hero() {
  const totalTools = tools.length;

  const trendingTools = [
    "Password Generator",
    "JSON Formatter",
    "Image Converter",
    "Word Counter",
    "UUID Generator",
  ];

  return (
    <section className="relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-blue-500/20 blur-[150px]" />

      <div className="absolute top-10 right-0 w-96 h-96 rounded-full bg-cyan-500/20 blur-[150px]" />

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full bg-indigo-500/10 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-6 pt-24">

        {/* Badge */}

        <div className="flex justify-center">

          <div className="glass rounded-full px-5 py-2 flex items-center gap-2">

            <span>🚀</span>

            <span
              className="font-semibold"
              style={{ color: "var(--text)" }}
            >
              OmniKit V2
            </span>

          </div>

        </div>

        {/* Heading */}

        <h1
          className="mt-10 text-center text-5xl md:text-7xl lg:text-8xl font-black leading-tight"
          style={{ color: "var(--text)" }}
        >
          The Ultimate Toolkit

          <br />

          <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 bg-clip-text text-transparent">
            for Developers
          </span>

        </h1>

        {/* Description */}

        <p
          className="mt-8 text-center text-lg md:text-xl max-w-3xl mx-auto leading-8"
          style={{ color: "var(--text-secondary)" }}
        >
          Free browser-based tools for developers,
          students and creators.

          <br />

          Fast • Private • Open Source
        </p>

        {/* Buttons */}

        <div className="mt-10 flex flex-wrap justify-center gap-5">

          <Link
            to="/tools"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105"
          >
            🚀 Explore Tools
          </Link>

          <a
            href="https://github.com/Subhashkolanu"
            target="_blank"
            rel="noreferrer"
            className="glass rounded-2xl px-8 py-4 font-semibold hover:scale-105 transition-all duration-300"
            style={{ color: "var(--text)" }}
          >
            ⭐ GitHub
          </a>

        </div>

        {/* Hero Search */}

        <div className="mt-14 max-w-3xl mx-auto">

          <div className="glass rounded-3xl p-2">

            <input
              type="text"
              placeholder="🔍 Search 50+ tools..."
              className="w-full bg-transparent outline-none px-6 py-4 text-lg"
              style={{ color: "var(--text)" }}
            />

          </div>

        </div>

        {/* Trending */}

        <div className="mt-12">

          <p
            className="text-center uppercase tracking-[0.35em] text-sm"
            style={{ color: "var(--text-secondary)" }}
          >
            Trending Tools
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-3">

            {trendingTools.map((tool) => (
              <span
                key={tool}
                className="glass rounded-full px-5 py-2 hover:scale-105 transition-all duration-300"
                style={{ color: "var(--text)" }}
              >
                {tool}
              </span>
            ))}

          </div>

        </div>
                {/* Stats */}

        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            {
              icon: "🛠️",
              value: `${totalTools}+`,
              title: "Free Tools",
            },
            {
              icon: "🌐",
              value: "100%",
              title: "Browser Based",
            },
            {
              icon: "⚡",
              value: "Fast",
              title: "Lightning Speed",
            },
            {
              icon: "🔒",
              value: "Private",
              title: "Privacy First",
            },
          ].map((item) => (

            <div
              key={item.title}
              className="glass rounded-3xl p-8 text-center hover:-translate-y-2 hover:scale-105 transition-all duration-300"
            >

              <div className="text-5xl mb-5">
                {item.icon}
              </div>

              <h2
                className="text-4xl font-extrabold"
                style={{ color: "var(--text)" }}
              >
                {item.value}
              </h2>

              <p
                className="mt-2"
                style={{ color: "var(--text-secondary)" }}
              >
                {item.title}
              </p>

            </div>

          ))}

        </div>

        {/* Why OmniKit */}

        <div className="mt-28">

          <h2
            className="text-center text-4xl md:text-5xl font-bold"
            style={{ color: "var(--text)" }}
          >
            Why Choose OmniKit?
          </h2>

          <p
            className="mt-5 max-w-2xl mx-auto text-center text-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            Everything you need in one beautiful,
            fast and privacy-friendly toolkit.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-14">

            <div className="glass rounded-3xl p-8">

              <div className="text-5xl mb-5">⚡</div>

              <h3
                className="text-2xl font-bold mb-3"
                style={{ color: "var(--text)" }}
              >
                Lightning Fast
              </h3>

              <p style={{ color: "var(--text-secondary)" }}>
                Every tool runs directly inside your browser with no installation.
              </p>

            </div>

            <div className="glass rounded-3xl p-8">

              <div className="text-5xl mb-5">🔒</div>

              <h3
                className="text-2xl font-bold mb-3"
                style={{ color: "var(--text)" }}
              >
                Privacy First
              </h3>

              <p style={{ color: "var(--text-secondary)" }}>
                Your files remain on your device whenever possible.
              </p>

            </div>

            <div className="glass rounded-3xl p-8">

              <div className="text-5xl mb-5">🚀</div>

              <h3
                className="text-2xl font-bold mb-3"
                style={{ color: "var(--text)" }}
              >
                Modern Experience
              </h3>

              <p style={{ color: "var(--text-secondary)" }}>
                Beautiful Glass UI, responsive design and constantly improving tools.
              </p>

            </div>

          </div>

        </div>

        {/* CTA */}

        <div className="mt-24 text-center">

          <h2
            className="text-4xl font-bold"
            style={{ color: "var(--text)" }}
          >
            Ready to boost your productivity?
          </h2>

          <p
            className="mt-4 text-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            Explore every tool completely free.
          </p>

          <Link
            to="/tools"
            className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105"
          >
            Explore All Tools →
          </Link>

        </div>

      </div>

    </section>
  );
}