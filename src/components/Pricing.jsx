const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    description: "Perfect to start tracking your trades and understand if TradeBlade fits your workflow.",
    features: [
      "Up to 100 trades / month",
      "1 connected trading account",
      "Basic trade journal",
      "Simple performance dashboard",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    description: "For active day traders who want full analytics, risk guardrails and deep performance insights.",
    features: [
      "Unlimited trades & journals",
      "Up to 5 trading accounts",
      "Advanced analytics & filters",
      "Risk limits & daily guardrails",
      "Priority support",
    ],
    highlight: true,
    badge: "Most popular",
  },
  {
    name: "Desk",
    price: "$79",
    period: "per month",
    description: "Built for trading teams, small prop firms and mentors working with multiple traders.",
    features: [
      "Team workspaces",
      "Shared dashboards",
      "Trader performance reports",
      "Export & API access",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="mx-auto max-w-6xl px-4 pb-20 pt-8 md:pb-28 md:pt-16"
    >
      {/* Заголовок секції */}
      <div className="mb-10 max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400/80">
          Pricing
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
          Simple pricing designed for consistency, not overtrading
        </h2>
        <p className="mt-3 text-sm text-white/65 md:text-base">
          Start free, upgrade when you&apos;re ready to treat trading like a business. No
          contracts, cancel anytime.
        </p>
      </div>

      {/* Тарифи */}
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`relative flex flex-col rounded-2xl border bg-white/5 p-5 shadow-[0_0_40px_rgba(15,23,42,0.7)] transition hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(56,189,248,0.5)] ${
              plan.highlight
                ? "border-emerald-400/70 bg-gradient-to-b from-emerald-500/15 via-slate-900/90 to-slate-950"
                : "border-white/12"
            }`}
          >
            {/* Бейдж Most popular */}
            {plan.badge && (
              <div className="absolute -top-3 left-5 rounded-full bg-emerald-400 px-3 py-1 text-[11px] font-semibold text-black shadow-lg shadow-emerald-500/40">
                {plan.badge}
              </div>
            )}

            <div className="mb-4">
              <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
              <p className="mt-1 text-xs text-white/70">{plan.description}</p>
            </div>

            {/* Ціна */}
            <div className="mb-4 flex items-baseline gap-1">
              <span className="text-3xl font-semibold text-white">{plan.price}</span>
              <span className="text-xs text-white/55">/{plan.period}</span>
            </div>

            {/* Особливості плану */}
            <ul className="mb-5 flex flex-1 flex-col gap-1.5 text-xs text-white/70">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="mt-[3px] inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Кнопка */}
            <button
              className={`mt-auto w-full rounded-full px-4 py-2.5 text-sm font-medium transition ${
                plan.highlight
                  ? "bg-emerald-400 text-black hover:bg-emerald-300"
                  : "border border-white/25 bg-transparent text-white hover:bg-white/10"
              }`}
            >
              {plan.name === "Starter" ? "Start for free" : "Choose plan"}
            </button>

            {/* Маленький текст знизу */}
            {plan.name === "Starter" && (
              <p className="mt-2 text-[11px] text-white/50">
                No credit card required. Upgrade directly from your dashboard.
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
