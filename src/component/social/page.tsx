export default function SocialPage() {
  const communities = [
    {
      title: "Live Trading Discussions",
      desc: "Chat with traders in real-time, share ideas, and discuss market movements.",
      icon: "💬",
    },
    {
      title: "Top Traders Feed",
      desc: "Follow professional traders and view their public trade insights and strategies.",
      icon: "👑",
    },
    {
      title: "Strategy Sharing",
      desc: "Share, discover, and discuss profitable trading strategies with the community.",
      icon: "📘",
    },
    {
      title: "Leaderboards",
      desc: "Compete with traders worldwide and climb the weekly and monthly rankings.",
      icon: "🏆",
    },
    {
      title: "Trade Copying",
      desc: "Learn by copying trades from experienced traders with full risk control.",
      icon: "🔁",
    },
    {
      title: "Private Groups",
      desc: "Join invite-only groups for focused learning and advanced market insights.",
      icon: "🔒",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-slate-950 to-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-blue-500 font-semibold uppercase tracking-wider">
            Traders Paradise Community
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
            Connect. Learn. Trade Together.
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Join a growing community of traders sharing insights, strategies, and
            real-time market discussions across the globe.
          </p>
        </div>

        {/* Social Features Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {communities.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900/70 backdrop-blur border border-slate-800
                         rounded-2xl p-7 hover:border-blue-500
                         hover:shadow-xl hover:shadow-blue-500/10 transition"
            >
              <div className="text-4xl mb-5">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 text-center">
          <div>
            <h3 className="text-3xl font-bold text-blue-500">150K+</h3>
            <p className="text-gray-400 text-sm mt-2">Community Members</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-500">20K+</h3>
            <p className="text-gray-400 text-sm mt-2">Daily Discussions</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-500">5K+</h3>
            <p className="text-gray-400 text-sm mt-2">Shared Strategies</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-500">24/7</h3>
            <p className="text-gray-400 text-sm mt-2">Active Moderation</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-24">
          <h2 className="text-2xl font-bold mb-4">
            Become Part of Traders Paradise
          </h2>
          <p className="text-gray-400 mb-6">
            Learn faster, trade smarter, and grow together with the community.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-3 rounded-xl font-medium transition">
            Join the Community
          </button>
        </div>

      </div>
    </section>
  );
}
