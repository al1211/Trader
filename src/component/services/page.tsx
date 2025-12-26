export default function ServicesPage() {
  const services = [
    {
      title: "Live Market Analysis",
      desc: "Real-time market insights with advanced technical indicators and price action analysis.",
      icon: "📊",
    },
    {
      title: "Trading Signals",
      desc: "High-accuracy buy & sell signals for stocks, forex, and crypto markets.",
      icon: "🚨",
    },
    {
      title: "Pro Trading Dashboard",
      desc: "Interactive dashboards with real-time charts, order flow, and performance tracking.",
      icon: "💹",
    },
    {
      title: "Risk Management Tools",
      desc: "Smart tools to manage risk, stop-loss strategies, and capital protection.",
      icon: "🛡️",
    },
    {
      title: "Learning & Mentorship",
      desc: "Beginner to advanced trading courses, live sessions, and expert mentorship.",
      icon: "🎓",
    },
    {
      title: "Community & Contests",
      desc: "Trader community access, leaderboard challenges, and live trading contests.",
      icon: "🏆",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-slate-950 to-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-500 font-semibold uppercase tracking-wide">
            Traders Paradise
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-5">
            Professional Trading Services
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Traders Paradise empowers traders with cutting-edge tools, real-time data,
            and expert-driven insights to trade confidently in any market.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-900/70 backdrop-blur border border-slate-800
                         rounded-2xl p-7 hover:border-blue-500
                         hover:shadow-xl hover:shadow-blue-500/10 transition"
            >
              <div className="text-4xl mb-5">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h2 className="text-2xl font-bold mb-4">
            Start Your Trading Journey Today
          </h2>
          <p className="text-gray-400 mb-6">
            Join Traders Paradise and gain access to professional-grade trading tools.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-medium transition">
            Join Traders Paradise
          </button>
        </div>

      </div>
    </section>
  );
}
