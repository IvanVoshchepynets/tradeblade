export default function Hero() {
  return (
    <section
      id="hero"
      className="relative mx-auto flex max-w-6xl flex-col items-start gap-10 px-4 pb-16 pt-24 md:flex-row md:items-center md:pb-24 md:pt-32"
    >
      {/* Ліва колонка */}
      <div className="flex-1">
        <h1 className="text-3xl font-extrabold leading-tight text-white md:text-5xl md:leading-[1.1]">
          МОМЕНТАЛЬНО
          <br />
          КОПИРУЙ СДЕЛКИ
          <br />
          ПРОФИ ТРЕЙДЕРОВ
        </h1>

        <p className="mt-5 max-w-md text-sm text-white/70 md:text-base">
          Начни копировать сделки с успешной командой профессиональных трейдеров
          в автоматическом режиме.
        </p>

        {/* Інпут + кнопка */}
        <form className="mt-7 flex w-full max-w-md flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="ВАШ E-MAIL"
            className="h-11 flex-1 rounded-md bg-[#181a2c] px-3 text-sm text-white placeholder:text-white/40 outline-none ring-1 ring-transparent focus:ring-sky-400"
          />
          <button
            type="submit"
            className="h-11 rounded-md bg-sky-400 px-6 text-sm font-semibold text-black shadow-[0_0_20px_rgba(56,189,248,0.6)] hover:bg-sky-300"
          >
            НАЧАТЬ
          </button>
        </form>

        <p className="mt-3 text-xs text-white/55">
          5 дней бесплатного пользования
        </p>
      </div>

      {/* Права частина – блок ETH/USDT */}
      <div className="flex flex-1 justify-end">
        <div className="relative h-52 w-full max-w-sm">
          {/* Пунктирний прямокутник */}
          <div className="absolute right-0 top-0 h-32 w-full rounded-xl border border-dashed border-indigo-500/60" />
          <div className="absolute right-6 top-5 text-sm text-indigo-300">
            ETH/USDT
            <div className="text-xs text-indigo-300/80">Short</div>
            <div className="mt-2 text-xl font-semibold text-indigo-300">
              +141%
            </div>
          </div>

          {/* Фіолетова карточка */}
          <div className="absolute right-0 bottom-0 w-64 rounded-xl bg-[#6b4bff] px-5 py-4 shadow-[0_0_40px_rgba(129,140,248,0.8)]">
            <div className="text-sm font-semibold text-white">ETH/USDT</div>
            <div className="text-xs text-white/80">Short</div>
            <div className="mt-3 text-2xl font-bold text-white">+116%</div>
          </div>
        </div>
      </div>
    </section>
  );
}
