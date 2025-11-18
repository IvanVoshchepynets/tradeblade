import { useState } from "react";

const faqs = [
  {
    question: "Что такое TradeBlade",
    answer:
      "Мы опытная команда, для которой трейдинг – профессия. TradeBlade является авторизованным официальным брокером биржи Binance. Он представляет пользователям множество преимуществ, таких как более высокая скорость синхронизации API и возможность создать учетную запись Binance через платформу TradeBlade всего в 1 клик.",
  },
  {
    question: "Что TradeBlade предлагает инвесторам",
    answer:
      "Здесь будет текст как в макете, можешь просто скопировать его из Figma.",
  },
  {
    question: "Должен ли я перевести свои средства на TradeBlade",
    answer:
      "Тоже вставь текст из макета, чтобы полностью совпадало.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex((current) => (current === idx ? -1 : idx));
  };

  return (
    <section
      id="faq"
      className="mx-auto max-w-4xl px-4 pb-20 pt-8 md:pb-24 md:pt-16"
    >
      {/* Заголовок */}
      <div className="mb-8 text-center md:mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400/80">
          FAQ
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
          Часті запитання про TradeBlade
        </h2>
        <p className="mt-3 text-sm text-white/65 md:text-base">
          Якщо у вас залишилися інші питання — ви завжди можете написати в сапорт
          або комʼюніті.
        </p>
      </div>

      {/* Аккордеон */}
      <div className="space-y-3">
        {faqs.map((item, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={item.question}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 md:px-5 md:py-4"
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="flex w-full items-center justify-between gap-4 text-left"
              >
                <span className="text-sm font-medium text-white md:text-base">
                  {item.question}
                </span>
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-white/20 text-xs text-white/70">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              <div
                className={`grid overflow-hidden text-xs text-white/70 transition-[grid-template-rows,opacity] duration-200 ease-out md:text-sm ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="mt-2 min-h-0 border-t border-white/10 pt-3 text-white/70">
                  {item.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
