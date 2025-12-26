export default function PlatformPage() {
  const features = [
    {
      title: "Real-Time Market Data",
      desc: "Access live price feeds, depth charts, and real-time market movements across multiple assets.",
      icon: "📡",
    },
    {
      title: "Advanced Trading Charts",
      desc: "Professional-grade charts with indicators, drawing tools, and multiple timeframes.",
      icon: "📈",
    },
    {
      title: "Smart Order Execution",
      desc: "Lightning-fast order execution with limit, market, and stop-loss orders.",
      icon: "⚡",
    },
    {
      title: "Portfolio Tracking",
      desc: "Track profits, losses, and performance analytics with detailed reports.",
      icon: "💼",
    },
    {
      title: "Risk Management Suite",
      desc: "Built-in tools for position sizing, risk-to-reward analysis, and capital protection.",
      icon: "🛡️",
    },
    {
      title: "Secure & Reliable",
      desc: "Enterprise-level security with encrypted data and secure authentication.",
      icon: "🔐",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-slate-950 to-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-blue-500 font-semibold uppercase tracking-wider">
            Traders Paradise Platform
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
            Trade Smarter with a Powerful Platform
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Traders Paradise provides a robust, secure, and feature-rich trading platform
            designed for beginners and professional traders alike.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-900/70 backdrop-blur border border-slate-800
                         rounded-2xl p-7 hover:border-blue-500
                         hover:shadow-xl hover:shadow-blue-500/10 transition"
            >
              <div className="text-4xl mb-5">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Platform Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 text-center">
          <div>
            <h3 className="text-3xl font-bold text-blue-500">99.9%</h3>
            <p className="text-gray-400 text-sm mt-2">Uptime</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-500">1M+</h3>
            <p className="text-gray-400 text-sm mt-2">Trades Executed</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-500">50+</h3>
            <p className="text-gray-400 text-sm mt-2">Indicators</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-500">24/7</h3>
            <p className="text-gray-400 text-sm mt-2">Support</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-24">
          <h2 className="text-2xl font-bold mb-4">
            Experience the Power of Traders Paradise
          </h2>
          <p className="text-gray-400 mb-6">
            Join thousands of traders using our platform to trade confidently every day.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-3 rounded-xl font-medium transition">
            Launch Platform
          </button>
        </div>

      </div>
    </section>
  );
}
