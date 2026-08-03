import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <main
        className="min-h-screen transition-colors duration-300"
        style={{ background: "var(--background)" }}
      >
        <section className="max-w-6xl mx-auto px-6 py-20">

          {/* Header */}

          <div className="text-center">

            <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-medium mb-5">
              About OmniKit
            </span>

            <h1
              className="text-5xl md:text-6xl font-extrabold"
              style={{ color: "var(--text)" }}
            >
              One Platform.
              <br />
              Every Essential Tool.
            </h1>

            <p
              className="mt-6 max-w-3xl mx-auto text-lg leading-8"
              style={{ color: "var(--text-secondary)" }}
            >
              OmniKit is a modern collection of browser-based tools built
              for developers, students, designers and creators.
              Every tool works directly inside your browser with no
              installation, no unnecessary complexity and privacy first.
            </p>

          </div>

          {/* Features */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">

            <div className="glass rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300">

              <div className="text-5xl mb-5">
                ⚡
              </div>

              <h2
                className="text-2xl font-bold"
                style={{ color: "var(--text)" }}
              >
                Lightning Fast
              </h2>

              <p
                className="mt-4 leading-7"
                style={{ color: "var(--text-secondary)" }}
              >
                Every tool works instantly inside your browser without any
                software installation.
              </p>

            </div>

            <div className="glass rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300">

              <div className="text-5xl mb-5">
                🔒
              </div>

              <h2
                className="text-2xl font-bold"
                style={{ color: "var(--text)" }}
              >
                Privacy First
              </h2>

              <p
                className="mt-4 leading-7"
                style={{ color: "var(--text-secondary)" }}
              >
                Your files and data stay on your device whenever possible.
                Nothing is uploaded unless absolutely required.
              </p>

            </div>

            <div className="glass rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300">

              <div className="text-5xl mb-5">
                🚀
              </div>

              <h2
                className="text-2xl font-bold"
                style={{ color: "var(--text)" }}
              >
                Modern Experience
              </h2>

              <p
                className="mt-4 leading-7"
                style={{ color: "var(--text-secondary)" }}
              >
                Beautiful Glass UI, responsive design, dark mode and a
                growing collection of useful productivity tools.
              </p>

            </div>

          </div>

          {/* Stats */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">

            <div className="glass rounded-3xl p-6 text-center">

              <h3 className="text-4xl font-bold text-blue-500">
                50+
              </h3>

              <p
                className="mt-2"
                style={{ color: "var(--text-secondary)" }}
              >
                Tools
              </p>

            </div>

            <div className="glass rounded-3xl p-6 text-center">

              <h3 className="text-4xl font-bold text-green-500">
                100%
              </h3>

              <p
                className="mt-2"
                style={{ color: "var(--text-secondary)" }}
              >
                Browser Based
              </p>

            </div>

            <div className="glass rounded-3xl p-6 text-center">

              <h3 className="text-4xl">
                ⚡
              </h3>

              <p
                className="mt-2"
                style={{ color: "var(--text-secondary)" }}
              >
                Fast
              </p>

            </div>

            <div className="glass rounded-3xl p-6 text-center">

              <h3 className="text-4xl">
                🌍
              </h3>

              <p
                className="mt-2"
                style={{ color: "var(--text-secondary)" }}
              >
                Open Source
              </p>

            </div>

          </div>

          {/* Bottom Section */}

          <div className="glass rounded-3xl p-10 text-center mt-20">

            <h2
              className="text-3xl font-bold"
              style={{ color: "var(--text)" }}
            >
              Built to Make Everyday Tasks Easier
            </h2>

            <p
              className="mt-4 max-w-3xl mx-auto leading-8"
              style={{ color: "var(--text-secondary)" }}
            >
              OmniKit continues to evolve with new tools, better performance,
              and a modern user experience. The goal is simple—provide one
              reliable place where developers, students and creators can find
              the tools they need every day.
            </p>

          </div>

        </section>
      </main>

      <Footer />
    </>
  );
}