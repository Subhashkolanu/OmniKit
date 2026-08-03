import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />

      <main
        className="min-h-screen transition-colors duration-300"
        style={{ background: "var(--background)" }}
      >
        <section className="max-w-5xl mx-auto px-6 py-20">

          {/* Header */}
          <div className="text-center">

            <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-medium mb-5">
              Contact
            </span>

            <h1
              className="text-5xl md:text-6xl font-extrabold"
              style={{ color: "var(--text)" }}
            >
              Get in Touch
            </h1>

            <p
              className="mt-6 text-lg max-w-2xl mx-auto leading-8"
              style={{ color: "var(--text-secondary)" }}
            >
              Have an idea, found a bug, or want to contribute to OmniKit?
              I'd love to hear from you.
            </p>

          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">

            {/* Email */}
            <div className="glass rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300">

              <div className="text-5xl mb-5">
                📧
              </div>

              <h2
                className="text-2xl font-bold"
                style={{ color: "var(--text)" }}
              >
                Email
              </h2>

              <p
                className="mt-4"
                style={{ color: "var(--text-secondary)" }}
              >
                Feel free to reach out anytime.
              </p>

              <a
                href="mailto:saisubhash.kolanu@gmail.com"
                className="inline-block mt-6 text-blue-500 font-semibold hover:underline"
              >
                saisubhash.kolanu@gmail.com
              </a>

            </div>

            {/* GitHub */}
            <div className="glass rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300">

              <div className="text-5xl mb-5">
                💻
              </div>

              <h2
                className="text-2xl font-bold"
                style={{ color: "var(--text)" }}
              >
                GitHub
              </h2>

              <p
                className="mt-4"
                style={{ color: "var(--text-secondary)" }}
              >
                Explore the source code and contribute.
              </p>

              <a
                href="https://github.com/Subhashkolanu"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-6 text-blue-500 font-semibold hover:underline"
              >
                github.com/Subhashkolanu
              </a>

            </div>

          </div>

          {/* Bottom CTA */}
          <div className="glass rounded-3xl p-10 text-center mt-16">

            <h2
              className="text-3xl font-bold"
              style={{ color: "var(--text)" }}
            >
              Let's Build Better Tools Together 🚀
            </h2>

            <p
              className="mt-4 max-w-2xl mx-auto leading-7"
              style={{ color: "var(--text-secondary)" }}
            >
              OmniKit is continuously improving. Your suggestions,
              bug reports and feedback help make it better for everyone.
            </p>

          </div>

        </section>
      </main>

      <Footer />
    </>
  );
}