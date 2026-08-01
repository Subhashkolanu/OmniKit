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

      {/* Add top padding because Navbar is sticky */}
      <main className="min-h-screen bg-gray-50 pt-24">

        <section className="max-w-5xl mx-auto px-6 py-12">

          {/* Page Header */}
          <div className="text-center mb-12">

            <span className="inline-block bg-blue-100 text-blue-600 font-medium px-4 py-2 rounded-full mb-6">
              OmniKit Tool
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              {title}
            </h1>

            <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto leading-8">
              {description}
            </p>

          </div>

          {/* Tool Card */}
          <div className="bg-white border border-gray-200 rounded-3xl shadow-lg p-6 md:p-10">

            {children}

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}