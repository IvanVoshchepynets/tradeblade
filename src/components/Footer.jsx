export default function Footer() {
  return (
    <footer className="border-t border-[#3834a5] bg-[#050816] text-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-[2fr_minmax(0,1fr)] md:items-start">
          {/* Ліва частина */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                БЫСТРАЯ НАВИГАЦИЯ
              </p>
            </div>

            <nav className="mt-10 text-xs text-white/70 md:mt-24">
              <ul className="flex flex-wrap gap-x-6 gap-y-3">
                <li>
                  <a href="#stats" className="hover:text-white">
                    ЦИФРЫ
                  </a>
                </li>
                <li>
                  <a href="#deals" className="hover:text-white">
                    СДЕЛКИ ОНЛАЙН
                  </a>
                </li>
                <li>
                  <a href="#company" className="hover:text-white">
                    О КОМПАНИИ
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white">
                    TRADEBLADE ЭТО
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white">
                    ТАРИФЫ
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white">
                    FAQ
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Права частина */}
          <div className="flex flex-col items-start justify-between gap-6 md:items-end md:border-l md:border-white/10 md:pl-8">
            {/* Лого справа */}
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-tr from-indigo-600 via-purple-600 to-sky-400 shadow-[0_0_25px_rgba(129,140,248,0.8)]">
                <span className="text-lg font-extrabold">T</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-extrabold tracking-wide">
                  TRADE
                  <span className="ml-1">BLADE</span>
                </span>
              </div>
            </div>

            {/* Копірайт */}
            <div className="text-[11px] text-white/60 md:text-right">
              <p>© 2022 TradeBlade. All rights reserved</p>
            </div>
          </div>
        </div>
      </div>

      {/* Низ фіолетовою лінією */}
      <div className="h-[2px] w-full bg-[#3834a5]" />
    </footer>
  );
}
