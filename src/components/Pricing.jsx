import { useState } from "react";

const spotPlans = [
  {
    name: "STANDART",
    price: "$234",
    discount: "-35%",
    periodLabel: "12 месяцев",
    features: [
      "Ручной трейдинг",
      "Автоматическое или полуавтоматическое копирование сделок",
      "Личный кабинет со статистикой",
      "Среднесрочные сделки с уровнями набора портфеля",
    ],
  },
  {
    name: "VIP",
    price: "$585",
    discount: "-35%",
    periodLabel: "12 месяцев",
    features: [
      "Ручной трейдинг",
      "Автоматическое или полуавтоматическое копирование сделок",
      "Личный кабинет со статистикой",
      "Краткосрочные, среднесрочные и инвест сделки",
      "Доступ в Vip чат с командой",
      "Наш авторский курс по трейдингу",
    ],
  },
];

// для простоти в обоих табах однакові плани
const futuresPlans = spotPlans;

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<"spot" | "futures">("spot");

  const plans = activeTab === "spot" ? spotPlans : futuresPlans;

  return (
    <section
      id="pricing"
      className="bg-[#050816] py-16 text-white md:py-20"
    >
      <div className="mx-auto max-w-5xl px-4">
        {/* Заголовок */}
        <h2 className="text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
          ТАРИФЫ
        </h2>

        {/* Таби СПОТ / ФЬЮЧЕРС */}
        <div className="mt-6 inline-flex rounded-md bg-[#181a2c] p-1">
          <button
            type="button"
            className={`px-6 py-2 text-sm font-semibold uppercase tracking-wide ${
              activeTab === "spot"
                ? "rounded-md bg-sky-400 text-black shadow-[0_0_20px_rgba(56,189,248,0.7)]"
                : "text-white/70 hover:text-white"
            }`}
            onClick={() => setActiveTab("spot")}
          >
            СПОТ
          </button>
          <button
            type="button"
            className={`px-6 py-2 text-sm font-semibold uppercase tracking-wide ${
              activeTab === "futures"
                ? "rounded-md bg-sky-400 text-black shadow-[0_0_20px_rgba(56,189,248,0.7)]"
                : "text-white/70 hover:text-white"
            }`}
            onClick={() => setActiveTab("futures")}
          >
            ФЬЮЧЕРС
          </button>
        </div>

        {/* Карточки тарифів */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {plans.map((plan, index) => (
            <article
              key={plan.name}
              className={`flex h-full flex-col rounded-2xl border bg-[#050816] p-6 text-sm shadow-[0_0_40px_rgba(15,23,42,0.8)] ${
                index === 1
                  ? "border-transparent bg-[#6b4bff] shadow-[0_0_50px_rgba(129,140,248,0.9)]"
                  : "border-[#383c68]"
              }`}
            >
              {/* Назва плану */}
              <h3 className="text-lg font-semibold uppercase tracking-wide">
                {plan.name}
              </h3>

              {/* Список фіч */}
              <ul className="mt-5 flex flex-1 flex-col gap-2 text-[13px] leading-relaxed">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2"
                  >
                    <span className="mt-[3px] text-sky-400">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Ціна + період */}
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold">
                      {plan.price}
                    </span>
                    <span className="text-sm text-emerald-400">
                      {plan.discount}
                    </span>
                  </div>
                </div>

                <div>
                  <select
                    className="rounded-md bg-transparent px-3 py-1 text-xs text-white outline-none ring-1 ring-white/40"
                    defaultValue={plan.periodLabel}
                  >
                    <option
                      className="bg-[#050816]"
                      value={plan.periodLabel}
                    >
                      {plan.periodLabel}
                    </option>
                  </select>
                </div>
              </div>

              {/* Кнопка + текст про 5 днів */}
              <div className="mt-6">
                <button
                  type="button"
                  className={`flex w-full items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold uppercase tracking-wide ${
                    index === 1
                      ? "bg-sky-400 text-black hover:bg-sky-300"
                      : "bg-sky-400 text-black hover:bg-sky-300"
                  }`}
                >
                  ПОПРОБОВАТЬ
                </button>
                <p className="mt-2 text-center text-[11px] text-white/70">
                  5 дней бесплатно
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
