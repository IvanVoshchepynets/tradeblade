import { useState } from "react";
import logo from "../assets/logo-tradeblade.svg";

const navLinks = [
  { label: "ЦИФРЫ", href: "#stats" },
  { label: "СДЕЛКИ ОНЛАЙН", href: "#deals" },
  { label: "О КОМПАНИИ", href: "#company" },
  { label: "КАК НАЧАТЬ", href: "#how" },
  { label: "ТАРИФЫ", href: "#pricing" },
  { label: "ОТЗЫВЫ", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#050816]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">

        {/* ==== ЛОГО ==== */}
        <a href="#" className="flex items-center gap-2">
          <img
            src={logo}
            alt="TradeBlade Logo"
            className="h-10 w-auto drop-shadow-[0_0_20px_rgba(107,75,255,0.6)]"
          />
        </a>

        {/* ==== ДЕСКТОП-МЕНЮ ==== */}
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

          {/* ==== ВХОД / РЕГИСТРАЦИЯ ==== */}
          <div className="flex items-center gap-3">
            {/* ВХОД */}
            <button className="rounded-md border border-[#27C4FF] bg-[#061426] px-6 py-1.5 text-sm font-semibold text-[#27C4FF] shadow-[0_0_12px_rgba(39,196,255,0.5)] transition hover:bg-[#0a1c33]">
              ВХОД
            </button>

            {/* РЕГИСТРАЦИЯ */}
            <button className="rounded-md bg-[#27C4FF] px-6 py-1.5 text-sm font-semibold text-black transition hover:bg-[#1fb4ec]">
              РЕГИСТРАЦИЯ
            </button>
          </div>
        </nav>

        {/* ==== МОБІЛЬНА КНОПКА ==== */}
        <button
          className="inline-flex items-center justify-center rounded-md border border-white/15 p-2 text-white md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
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

      {/* ==== МОБІЛЬНЕ МЕНЮ ==== */}
      {isOpen && (
        <div className="border-t border-white/10 bg-[#050816]/95 md:hidden">
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

              {/* Mobile ВХОД */}
              <button className="rounded-md border border-[#27C4FF] bg-[#061426] px-4 py-2 text-sm font-semibold text-[#27C4FF] shadow-[0_0_12px_rgba(39,196,255,0.5)]">
                ВХОД
              </button>

              {/* Mobile РЕГИСТРАЦИЯ */}
              <button className="rounded-md bg-[#27C4FF] px-4 py-2 text-sm font-medium text-black">
                РЕГИСТРАЦИЯ
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
