import Navbar from "../components/Navbar";

export default function ToolLayout({
  title,
  description,
  children,
}) {
  return (
    <main className="min-h-screen">

      <Navbar
        search=""
        setSearch={() => {}}
      />

      <section className="max-w-4xl mx-auto px-6 py-10">

        <div className="mb-10">

          <h1
            className="text-5xl font-bold"
            style={{ color: "var(--text)" }}
          >
            {title}
          </h1>

          <p
            className="mt-4 text-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            {description}
          </p>

        </div>

        <div className="glass p-8 rounded-3xl">

          {children}

        </div>

      </section>

    </main>
  );
}