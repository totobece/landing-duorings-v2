"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { navItems, translations, Lang } from "@/lib/data";

interface NavbarProps {
  lang: Lang;
}

export function Navbar({ lang }: NavbarProps) {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const t = translations[lang];
  const otherLang = lang === "es" ? "en" : "es";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const switchLang = () => {
    router.push(`/${otherLang}`);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--black)]/90 backdrop-blur-sm border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollTo("#inicio")}
          className="text-[var(--white)] font-black text-sm tracking-[0.2em] uppercase hover:text-[var(--pink)] transition-colors duration-200"
        >
          DUO RINGS™
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => scrollTo(item.href)}
              className="text-[var(--muted)] hover:text-[var(--white)] text-xs tracking-[0.15em] uppercase transition-colors duration-200 font-semibold"
            >
              {t.nav[item.key as keyof typeof t.nav]}
            </button>
          ))}
        </div>

        <button
          onClick={switchLang}
          className="text-xs tracking-[0.15em] uppercase font-semibold text-[var(--muted)] hover:text-[var(--pink)] transition-colors duration-200 border border-[var(--border)] px-3 py-1.5 rounded"
        >
          {otherLang.toUpperCase()}
        </button>
      </div>
    </nav>
  );
}
