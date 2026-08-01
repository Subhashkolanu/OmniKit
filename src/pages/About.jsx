import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50">

        <section className="max-w-6xl mx-auto px-6 py-20">

          {/* Header */}
          <div className="text-center">

            <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-medium mb-5">
              About OmniKit
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold">
              One Platform.
              <br />
              Every Essential Tool.
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
              OmniKit is a modern collection of browser-based tools built
              for developers, students, designers and creators.
              Every tool runs directly in your browser with no installation
              and no unnecessary complexity.
            </p>

          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">

              <div className="text-5xl mb-5">
                ⚡
              </div>

              <h2 className="text-2xl font-bold">
                Lightning Fast
              </h2>

              <p className="mt-4 text-gray-600 leading-7">
                Every tool works instantly inside your browser with no software installation.
              </p>

            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">

              <div className="text-5xl mb-5">
                🔒
              </div>

              <h2 className="text-2xl font-bold">
                Privacy First
              </h2>

              <p className="mt-4 text-gray-600 leading-7">
                Your files and data stay on your device whenever possible.
              </p>

            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">

              <div className="text-5xl mb-5">
                🆓
              </div>

              <h2 className="text-2xl font-bold">
                Always Free
              </h2>

              <p className="mt-4 text-gray-600 leading-7">
                OmniKit is completely free and open for everyone to use.
              </p>

            </div>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">

            <div className="bg-white rounded-2xl border p-6 text-center">
              <h3 className="text-4xl font-bold text-blue-600">12+</h3>
              <p className="mt-2 text-gray-500">Tools</p>
            </div>

            <div className="bg-white rounded-2xl border p-6 text-center">
              <h3 className="text-4xl font-bold text-green-600">100%</h3>
              <p className="mt-2 text-gray-500">Free</p>
            </div>

            <div className="bg-white rounded-2xl border p-6 text-center">
              <h3 className="text-4xl">⚡</h3>
              <p className="mt-2 text-gray-500">Fast</p>
            </div>

            <div className="bg-white rounded-2xl border p-6 text-center">
              <h3 className="text-4xl">🌍</h3>
              <p className="mt-2 text-gray-500">Open Source</p>
            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}
