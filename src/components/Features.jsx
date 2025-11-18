const features = [
  {
    title: "Centralized trade journal",
    description:
      "Log every trade with entry, exit, screenshots and tags. Forget about messy spreadsheets and screenshots in random folders.",
    points: ["Multi-account support", "Custom tags & setups", "Upload screenshots"],
  },
  {
    title: "Deep performance analytics",
    description:
      "Understand what really drives your equity curve: best setups, market sessions, instruments and risk profile.",
    points: ["Winrate & R-metrics", "Per-setup breakdown", "Session & instrument stats"],
  },
  {
    title: "Risk management on autopilot",
    description:
      "Define your daily loss limit, per-trade risk and platform will warn you before emotions take over your plan.",
    points: ["Daily loss guardrails", "Max trades per day", "Real-time warnings"],
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="mx-auto max-w-6xl px-4 pb-20 pt-8 md:pb-28 md:pt-12"
    >
      {/* Заголовок секції */}
      <div className="mb-10 max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400/80">
          Platform features
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
          Built for active traders who treat trading like a business
        </h2>
        <p className="mt-3 text-sm text-white/65 md:text-base">
          TradeBlade brings together journaling, analytics and risk management in one
          workspace, so you can focus on executing your edge instead of fighting with
          tools.
        </p>
      </div>

      {/* Карточки фіч */}
      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_0_40px_rgba(15,23,42,0.6)] transition hover:border-sky-400/60 hover:bg-white/10 hover:shadow-[0_0_60px_rgba(56,189,248,0.5)]"
          >
            <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/15 text-sky-300">
              <span className="text-lg">◆</span>
            </div>

            <h3 className="text-base font-semibold text-white md:text-lg">
              {feature.title}
            </h3>
            <p className="mt-2 text-xs text-white/70 md:text-sm">
              {feature.description}
            </p>

            <ul className="mt-4 flex flex-1 flex-col gap-1.5 text-xs text-white/65">
              {feature.points.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="mt-[3px] inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

            <p className="mt-3 text-[11px] text-sky-300/90">
              Designed for futures, forex, crypto and equities traders.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
