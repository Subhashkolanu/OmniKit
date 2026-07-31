import ToolCard from "./ToolCard";

export default function FeaturedTools() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        Featured Tools
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        <ToolCard
          title="Password Generator"
          description="Generate strong and secure passwords."
        />

        <ToolCard
          title="QR Code Generator"
          description="Create QR codes instantly."
        />

        <ToolCard
          title="JSON Formatter"
          description="Format and validate JSON."
        />
      </div>
    </section>
  );
}