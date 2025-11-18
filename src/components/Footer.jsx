export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 md:flex-row md:items-center md:justify-between">
        {/* Ліва частина: лого + текст */}
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-sky-400 to-emerald-400">
            <span className="text-lg font-bold leading-none text-white">TB</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-white">
              TradeBlade
            </span>
            <span className="text-xs text-white/60">
              Trading analytics & risk management platform for serious traders.
            </span>
          </div>
        </div>

        {/* Центр: навігація */}
        <nav className="text-xs text-white/60 md:text-sm">
          <ul className="flex flex-wrap items-center gap-4 md:gap-6">
            <li>
              <a href="#features" className="hover:text-white">
                Features
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-white">
                Pricing
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-white">
                FAQ
              </a>
            </li>
          </ul>
        </nav>

        {/* Права частина: копірайт */}
        <div className="text-xs text-white/50 md:text-right">
          <p>© {new Date().getFullYear()} TradeBlade. All rights reserved.</p>
          <p className="mt-1">Made for traders, not for gurus.</p>
        </div>
      </div>
    </footer>
  );
}
