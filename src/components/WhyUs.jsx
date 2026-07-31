export default function WhyUs() {
  const features = [
    {
      title: "Fast",
      desc: "Most tools work instantly in your browser."
    },
    {
      title: "Free",
      desc: "No hidden costs or subscriptions."
    },
    {
      title: "Secure",
      desc: "Your files stay private."
    },
  ];

  return (
    <section className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        Why OmniKit?
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div key={feature.title} className="border rounded-xl p-8">
            <h3 className="text-2xl font-semibold">{feature.title}</h3>
            <p className="text-gray-600 mt-3">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}