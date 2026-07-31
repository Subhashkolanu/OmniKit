export default function Stats() {
  const stats = [
    { value: "10+", label: "Tools" },
    { value: "100%", label: "Free" },
    { value: "Fast", label: "Performance" },
    { value: "Secure", label: "Privacy" },
  ];

  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-8">
        {stats.map((item) => (
          <div key={item.label}>
            <h3 className="text-4xl font-bold">{item.value}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
