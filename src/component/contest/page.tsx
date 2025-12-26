export default function ContestPage() {
  const contests = [
    {
      title: "Weekly Trading Challenge",
      prize: "₹50,000",
      duration: "7 Days",
      status: "Live",
    },
    {
      title: "Monthly Pro Traders League",
      prize: "₹2,00,000",
      duration: "30 Days",
      status: "Upcoming",
    },
    {
      title: "Crypto Scalping Battle",
      prize: "$5,000",
      duration: "10 Days",
      status: "Live",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-slate-950 to-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-500 font-semibold uppercase tracking-wider">
            Traders Paradise
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-5">
            Trading Contests
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Compete with top traders, test your strategies, and win exciting cash prizes.
            Trade smarter, manage risk, and climb the leaderboard.
          </p>
        </div>

        {/* Contest Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {contests.map((contest, index) => (
            <div
              key={index}
              className="bg-slate-900/70 backdrop-blur border border-slate-800
                         rounded-2xl p-7 hover:border-blue-500
                         hover:shadow-xl hover:shadow-blue-500/10 transition"
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold
                    ${
                      contest.status === "Live"
                        ? "bg-green-500/10 text-green-400"
                        : "bg-yellow-500/10 text-yellow-400"
                    }`}
                >
                  {contest.status}
                </span>
                <span className="text-sm text-gray-400">
                  {contest.duration}
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {contest.title}
              </h3>

              <p className="text-gray-400 mb-6">
                Prize Pool
              </p>

              <div className="text-3xl font-bold text-blue-500 mb-6">
                {contest.prize}
              </div>

              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-medium transition">
                Join Contest
              </button>
            </div>
          ))}
        </div>

        {/* Rules Section */}
        <div className="mt-24 bg-slate-900/60 border border-slate-800 rounded-2xl p-10">
          <h2 className="text-2xl font-bold mb-6">
            Contest Rules
          </h2>
          <ul className="space-y-3 text-gray-400 list-disc list-inside">
            <li>Participants must register before the contest start date.</li>
            <li>Trading must be performed using the Traders Paradise platform.</li>
            <li>Risk management rules must be followed strictly.</li>
            <li>Leaderboard rankings are based on net profit & drawdown.</li>
            <li>Any misuse or unfair practices will lead to disqualification.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
