import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-6">About OmniKit</h1>

        <p className="text-lg text-gray-600 leading-8">
          OmniKit is a free collection of online tools built for developers,
          students, and creators. Our goal is to provide fast, reliable,
          browser-based utilities without requiring any installation.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-14">

          <div className="border rounded-2xl p-6">
            <h2 className="font-bold text-xl">⚡ Fast</h2>
            <p className="mt-3 text-gray-600">
              Instant browser-based tools.
            </p>
          </div>

          <div className="border rounded-2xl p-6">
            <h2 className="font-bold text-xl">🔒 Privacy</h2>
            <p className="mt-3 text-gray-600">
              Your data stays with you whenever possible.
            </p>
          </div>

          <div className="border rounded-2xl p-6">
            <h2 className="font-bold text-xl">🆓 Free</h2>
            <p className="mt-3 text-gray-600">
              No subscriptions or hidden costs.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}