export default function WhyUs() {
  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "All tools run instantly in your browser.",
    },
    {
      icon: "🔒",
      title: "Privacy First",
      description: "Your data stays on your device whenever possible.",
    },
    {
      icon: "🆓",
      title: "100% Free",
      description: "No subscriptions or hidden charges.",
    },
    {
      icon: "📱",
      title: "Responsive",
      description: "Works perfectly on desktop, tablet and mobile.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold">Why OmniKit?</h2>

        <p className="text-gray-600 mt-4">
          Everything you need in one fast and modern toolkit.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((item) => (
          <div
            key={item.title}
            className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="text-5xl mb-5">
              {item.icon}
            </div>

            <h3 className="text-xl font-bold">
              {item.title}
            </h3>

            <p className="text-gray-600 mt-3">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}