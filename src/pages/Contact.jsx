import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50">

        <section className="max-w-5xl mx-auto px-6 py-20">

          {/* Header */}
          <div className="text-center">

            <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-medium mb-5">
              Contact
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold">
              Get in Touch
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-8">
              Have an idea, found a bug, or want to contribute to OmniKit?
              I'd love to hear from you.
            </p>

          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">

            {/* Email */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">

              <div className="text-5xl mb-5">
                📧
              </div>

              <h2 className="text-2xl font-bold">
                Email
              </h2>

              <p className="mt-4 text-gray-600">
                Feel free to reach out anytime.
              </p>

              <a
                href="mailto:saisubhash.kolanu@gmail.com"
                className="inline-block mt-6 text-blue-600 font-semibold hover:underline"
              >
                saisubhash.kolanu@gmail.com
              </a>

            </div>

            {/* GitHub */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">

              <div className="text-5xl mb-5">
                💻
              </div>

              <h2 className="text-2xl font-bold">
                GitHub
              </h2>

              <p className="mt-4 text-gray-600">
                Explore the source code and contribute.
              </p>

              <a
                href="https://github.com/Subhashkolanu"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-6 text-blue-600 font-semibold hover:underline"
              >
                github.com/Subhashkolanu
              </a>

            </div>

          </div>

          {/* Bottom Card */}
          <div className="mt-16 bg-blue-600 text-white rounded-3xl p-10 text-center">

            <h2 className="text-3xl font-bold">
              Let's Build Better Tools Together 🚀
            </h2>

            <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
              OmniKit is continuously improving. Your suggestions and feedback
              help make it better for everyone.
            </p>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}