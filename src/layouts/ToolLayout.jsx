import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ToolLayout({
  title,
  description,
  children,
}) {
  return (
    <>
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold">{title}</h1>

          <p className="text-gray-600 mt-4 text-lg">
            {description}
          </p>
        </div>

        <div className="bg-white border rounded-2xl shadow-sm p-8">
          {children}
        </div>
      </main>

      <Footer />
    </>
  );
}