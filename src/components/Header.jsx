import { useState } from "react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Community", href: "#community" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        {/* Лого */}
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-sky-400 to-emerald-400">
            <span className="text-lg font-bold leading-none text-white">TB</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-white md:text-base">
              TradeBlade
            </span>
            <span className="text-[10px] text-white/60 md:text-xs">
              Trading analytics platform
            </span>
          </div>
        </a>

        {/* Десктоп-меню */}
        <nav className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6 text-sm text-white/70">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button className="text-sm text-white/70 transition-colors hover:text-white">
              Log in
            </button>
            <button className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-slate-100">
              Sign up
            </button>
          </div>
        </nav>

        {/* Мобільна кнопка-бургер */}
        <button
          className="inline-flex items-center justify-center rounded-md border border-white/15 p-2 text-white md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Open main menu</span>
          {/* Іконка бургер / х */}
          <span className="relative flex h-4 w-4 items-center justify-center">
            <span
              className={`absolute h-[2px] w-4 bg-white transition-transform ${
                isOpen ? "translate-y-0 rotate-45" : "-translate-y-[4px]"
              }`}
            />
            <span
              className={`absolute h-[2px] w-4 bg-white transition-opacity ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-[2px] w-4 bg-white transition-transform ${
                isOpen ? "translate-y-0 -rotate-45" : "translate-y-[4px]"
              }`}
            />
          </span>
        </button>
      </div>

      {/* Мобільне меню */}
      {isOpen && (
        <div className="border-t border-white/10 bg-black/90 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4">
            <ul className="flex flex-col gap-3 text-sm text-white/80">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="block py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-2 pt-2">
              <button className="w-full rounded-full border border-white/25 px-4 py-2 text-sm text-white">
                Log in
              </button>
              <button className="w-full rounded-full bg-white px-4 py-2 text-sm font-medium text-black">
                Sign up
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
