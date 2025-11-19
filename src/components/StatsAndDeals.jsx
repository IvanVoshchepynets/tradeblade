const stats = [
  { label: "ТОРГОВОЙ ПРИБЫЛИ", value: "2756%" },
  { label: "ФЬЮЧЕРСНЫХ И СПОТОВЫХ СДЕЛОК", value: "67" },
  { label: "ПРИБЫЛЬ ПОДПИСЧИКОВ", value: "375000" },
];

const deals = [
  {
    pair: "NEAR/USDT",
    type: "SPOT · 1 мин. назад",
    profit: "58.6206%",
    target: "Цель 4",
    date: "Дата входа 06.10.2022",
  },
  {
    pair: "BTC/USDT",
    type: "SPOT · 1 мин. назад",
    profit: "6.02%",
    target: "Цель 3",
    date: "Дата входа 06.10.2022",
  },
  {
    pair: "ETH/USDT",
    type: "SPOT · 1 мин. назад",
    profit: "16.3%",
    target: "Цель 4",
    date: "Дата входа 06.10.2022",
  },
  {
    pair: "NEAR/USDT",
    type: "SPOT · 1 мин. назад",
    profit: "58.6206%",
    target: "Цель 4",
    date: "Дата входа 06.10.2022",
  },
];

export default function StatsAndDeals() {
  return (
    <>
      {/* ЦИФРЫ – білий фон */}
      <section
        id="stats"
        className="bg-white py-10 text-slate-900 md:py-12"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight">
              ЦИФРЫ
            </h2>
            <p className="mt-1 text-xs text-slate-500">Сентябрь 2022</p>
          </div>

          <div className="grid flex-1 gap-6 text-center md:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label}>
                <p className="text-xs font-semibold text-slate-500">
                  {item.label}
                </p>
                <p className="mt-1 text-3xl font-bold text-indigo-500">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ПРОШЕДШИЕ СДЕЛКИ */}
      <section id="deals" className="bg-[#050816] py-12 text-white">
        <div className="mx-auto max-w-6xl px-4">
          {/* Заголовок + онлайн */}
          <div className="mb-6">
            <h2 className="text-2xl font-extrabold">ПРОШЕДШИЕ СДЕЛКИ</h2>
            <span className="mt-2 inline-flex items-center gap-1 text-xs text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Онлайн
            </span>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4">
            {deals.map((deal) => (
              <article
                key={deal.pair + deal.profit}
                className="min-w-[240px] rounded-xl bg-[#6b4bff] p-4 text-sm text-white shadow-[0_0_40px_rgba(129,140,248,0.8)]"
              >
                <div className="flex justify-between text-xs text-white/80">
                  <span>{deal.pair}</span>
                  <span>{deal.type}</span>
                </div>

                <div className="mt-6 text-xs text-emerald-300">
                  ПРИБЫЛЬ
                </div>
                <div className="text-2xl font-bold text-emerald-300">
                  {deal.profit} ↑
                </div>

                <div className="mt-4 flex justify-between text-xs text-white/80">
                  <span>{deal.target}</span>
                  <span>{deal.date}</span>
                </div>
              </article>
            ))}
          </div>

          {/* сірий скролл-індикатор внизу */}
          <div className="mx-auto mt-3 h-1 w-40 rounded-full bg-slate-600">
            <div className="h-1 w-16 rounded-full bg-slate-300" />
          </div>
        </div>
      </section>
    </>
  );
}
