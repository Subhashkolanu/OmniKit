import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />

      <section className="max-w-4xl mx-auto px-6 py-20">

        <h1 className="text-5xl font-bold">
          Contact
        </h1>

        <p className="mt-4 text-gray-600">
          Have suggestions or found a bug? Reach out below.
        </p>

        <div className="mt-12 border rounded-2xl p-8">

          <p>
            📧 <strong>Email</strong>
          </p>

          <p className="text-blue-600 mt-2">
            saisubhash.kolanu@gmail.com
          </p>

          <p className="mt-8">
            💻 <strong>GitHub</strong>
          </p>

          <a
            href="https://github.com/Subhashkolanu"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600"
          >
            github.com/Subhashkolanu
          </a>

        </div>

      </section>

      <Footer />
    </>
  );
}