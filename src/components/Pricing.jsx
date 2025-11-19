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

// для простоты в обоих табах одинаковые планы
const futuresPlans = spotPlans;

export default function Pricing() {
  const [activeTab, setActiveTab] = useState("spot");

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

        {/* Табы СПОТ / ФЬЮЧЕРС */}
        <div className="mt-6 inline-flex rounded-md bg-[#181a2c] p-1">
          <button
            type="button"
            onClick={() => setActiveTab("spot")}
            className={`px-7 py-2 text-sm font-semibold uppercase tracking-wide transition ${
              activeTab === "spot"
                ? "rounded-md bg-[#27C4FF] text-black shadow-[0_0_20px_rgba(39,196,255,0.7)]"
                : "text-white/70 hover:text-white"
            }`}
          >
            СПОТ
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("futures")}
            className={`px-7 py-2 text-sm font-semibold uppercase tracking-wide transition ${
              activeTab === "futures"
                ? "rounded-md bg-[#6B4BFF] text-white shadow-[0_0_20px_rgba(129,140,248,0.7)]"
                : "text-white/70 hover:text-white"
            }`}
          >
            ФЬЮЧЕРС
          </button>
        </div>

        {/* Карточки тарифов */}
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {plans.map((plan, index) => (
            <article
              key={plan.name}
              className={`flex h-full flex-col rounded-2xl border p-6 text-sm shadow-[0_0_40px_rgba(15,23,42,0.8)] ${
                index === 0
                  ? "border-[#4b4f7b] bg-[#050816]"
                  : "border-transparent bg-[#6B4BFF]"
              }`}
            >
              {/* Название плана */}
              <h3 className="text-lg font-semibold uppercase tracking-wide">
                {plan.name}
              </h3>

              {/* Список фишек с пунктирными линиями */}
              <ul className="mt-5 flex flex-1 flex-col text-[13px] leading-relaxed">
                {plan.features.map((feature, i) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-2 py-2 ${
                      i !== plan.features.length - 1
                        ? "border-b border-white/10"
                        : ""
                    }`}
                  >
                    <span className="mt-[3px] text-[#27C4FF]">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Цена + период */}
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold">{plan.price}</span>
                  <span className="text-sm font-semibold text-[#4DE18C]">
                    {plan.discount}
                  </span>
                </div>

                <select
                  className={`rounded-md px-3 py-1 text-xs outline-none ${
                    index === 0
                      ? "bg-[#050816] text-white ring-1 ring-white/40"
                      : "bg-[#6B4BFF] text-white ring-1 ring-white/60"
                  }`}
                  defaultValue={plan.periodLabel}
                >
                  <option
                    className="bg-[#050816] text-white"
                    value={plan.periodLabel}
                  >
                    {plan.periodLabel}
                  </option>
                </select>
              </div>

              {/* Кнопка + текст про 5 дней */}
              <div className="mt-6">
                <button
                  type="button"
                  className={`flex w-full items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold uppercase tracking-wide transition ${
                    index === 0
                      ? "bg-[#27C4FF] text-black hover:bg-[#1fb4ec]"
                      : "bg-[#27C4FF] text-black hover:bg-[#1fb4ec]"
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
