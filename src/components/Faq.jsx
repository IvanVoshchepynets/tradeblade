import { useState } from "react";

const faqs = [
  {
    question: "Что такое TradeBlade",
    answer:
      "Мы опытная команда, для которой трейдинг – профессия. TradeBlade является авторизованным официальным брокером биржи Binance.\n\nОн представляет пользователям множество преимуществ, таких как более высокая скорость синхронизации API и возможность создать учетную запись Binance через платформу TradeBlade всего в 1 клик.",
  },
  {
    question: "Что TradeBlade предлагает инвесторам",
    answer: "Здесь будет текст как в макете.",
  },
  {
    question: "Должен ли я перевести свои средства на TradeBlade",
    answer: "Здесь будет текст как в макете.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? -1 : i);
  };

  return (
    <section
      id="faq"
      className="bg-white py-16 md:py-20"
    >
      <div className="mx-auto max-w-4xl px-4">
        {/* Заголовок */}
        <h2 className="text-center text-3xl font-extrabold uppercase text-black md:text-4xl">
          ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
        </h2>

        {/* FAQ */}
        <div className="mt-10 space-y-3">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-xl transition ${
                  isOpen ? "bg-[#6B4BFF] text-white" : "bg-[#E7EBF0] text-black"
                }`}
              >
                {/* Кнопка заголовка */}
                <button
                  onClick={() => toggle(idx)}
                  className={`flex w-full items-center justify-between px-6 py-4 text-left text-lg font-semibold`}
                >
                  {item.question}

                  {/* Стрілка */}
                  <span
                    className={`transition-transform ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={isOpen ? "stroke-white" : "stroke-black"}
                    >
                      <path
                        d="M5 7L10 12L15 7"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>

                {/* Контент */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[500px] px-6 pb-6" : "max-h-0 px-6 pb-0"
                  }`}
                >
                  <p
                    className={`whitespace-pre-line text-sm leading-relaxed ${
                      isOpen ? "text-white/90" : "text-black"
                    }`}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
