export default function Hero() {
  return (
    <section
      id="hero"
      className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 pb-16 pt-10 md:flex-row md:items-start md:pb-24 md:pt-20"
    >
      {/* Фонова градієнтна пляма */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-[420px] max-w-xl rounded-full bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_transparent_60%)] blur-3xl" />

      {/* Ліва колонка з текстом */}
      <div className="flex w-full flex-1 flex-col gap-6 md:max-w-xl">
        {/* Пілл / бейдж над заголовком */}
        <div className="inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span>All-in-one analytics platform for traders</span>
        </div>

        {/* Заголовок + підзаголовок */}
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold leading-tight text-white md:text-5xl md:leading-[1.1]">
            Trade with confidence,{" "}
            <span className="bg-gradient-to-r from-sky-400 via-emerald-400 to-indigo-400 bg-clip-text text-transparent">
              powered by real data
            </span>
          </h1>
          <p className="text-sm text-white/70 md:text-base">
            Track all your trades, manage risk and analyze performance in one
            place. No spreadsheets, no chaos — just clear insights for better
            decisions.
          </p>
        </div>

        {/* Кнопки CTA */}
        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <button className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black shadow-lg shadow-sky-500/20 transition hover:translate-y-[1px] hover:bg-slate-100">
            Get started for free
          </button>
          <button className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-sm font-medium text-white/80 transition hover:bg-white/10">
            Join the community
          </button>
        </div>

        {/* Маленький текст / статистика під кнопками */}
        <div className="flex flex-col gap-1 pt-1 text-xs text-white/55 md:text-sm">
          <span>✅ No credit card required</span>
          <span>⭐ Trusted by active day traders and prop firms worldwide</span>
        </div>
      </div>

      {/* Права колонка — картинка телефону / панель */}
      <div className="flex w-full flex-1 justify-center md:justify-end">
        <div className="relative h-[360px] w-[230px] rounded-[2rem] border border-white/15 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950/95 p-3 shadow-[0_0_60px_rgba(56,189,248,0.35)] md:h-[420px] md:w-[260px]">
          {/* Верхній індикатор телефону */}
          <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-white/10" />

          {/* Умовний екран з даними */}
          <div className="flex h-full flex-col justify-between rounded-2xl bg-black/60 p-3">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[10px] text-white/60">
                <span>Today P&amp;L</span>
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-300">
                  +3.4%
                </span>
              </div>

              <div className="space-y-1">
                <p className="text-2xl font-semibold text-emerald-300">
                  +$1,245
                </p>
                <p className="text-[11px] text-white/50">
                  Across 14 trades · 1.2R avg
                </p>
              </div>

              {/* Мала псевдографіка */}
              <div className="mt-2 h-20 rounded-xl bg-gradient-to-tr from-emerald-500/20 via-sky-500/10 to-purple-500/20 p-[1px]">
                <div className="flex h-full items-end justify-between rounded-[0.9rem] bg-black/90 px-2 pb-2">
                  {[30, 55, 45, 80, 60, 95, 70].map((h, idx) => (
                    <div
                      key={idx}
                      className="w-2 rounded-full bg-gradient-to-t from-sky-500/10 via-sky-400/70 to-emerald-300/80"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Список угод */}
              <div className="space-y-2 pt-1">
                {[
                  { symbol: "NQ", side: "Long", pl: "+$340" },
                  { symbol: "ES", side: "Short", pl: "+$190" },
                  { symbol: "CL", side: "Long", pl: "-$45" },
                ].map((trade) => (
                  <div
                    key={trade.symbol}
                    className="flex items-center justify-between rounded-lg bg-white/5 px-2 py-1.5"
                  >
                    <div className="flex items-center gap-2 text-[11px]">
                      <span className="rounded-md bg-white/10 px-1.5 py-0.5 text-[10px] text-white/80">
                        {trade.symbol}
                      </span>
                      <span className="text-white/60">{trade.side}</span>
                    </div>
                    <span
                      className={`text-[11px] ${
                        trade.pl.startsWith("+")
                          ? "text-emerald-300"
                          : "text-rose-300"
                      }`}
                    >
                      {trade.pl}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Низ екрану */}
            <div className="flex items-center justify-between rounded-xl bg-white/5 px-2 py-2">
              <div className="text-[10px] text-white/60">
                <p>Risk per trade</p>
                <p className="text-[11px] font-semibold text-white">
                  0.75% balance
                </p>
              </div>
              <button className="rounded-full bg-emerald-400/90 px-3 py-1 text-[10px] font-semibold text-black">
                Start session
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
