"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Sun, Moon } from "lucide-react";
import { navItems, translations, Lang } from "@/lib/data";
import { useTheme } from "@/components/theme-provider";

interface NavbarProps {
  lang: Lang;
}

export function Navbar({ lang }: NavbarProps) {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
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
          ? "backdrop-blur-sm border-b border-white/[0.07]"
          : "bg-transparent"
      }`}
      style={{
        background: scrolled ? "rgba(10,10,10,0.95)" : "rgba(10,10,10,0.6)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollTo("#inicio")}
          className="font-black text-sm tracking-[0.2em] uppercase hover:text-[var(--pink)] transition-colors duration-200"
          style={{ color: "#f5f0eb" }}
        >
          DUO RINGS™
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => scrollTo(item.href)}
              className="text-xs tracking-[0.15em] uppercase transition-colors duration-200 font-semibold hover:text-[var(--pink)]"
              style={{ color: "rgba(245,240,235,0.55)" }}
            >
              {t.nav[item.key as keyof typeof t.nav]}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={switchLang}
            className="text-xs tracking-[0.15em] uppercase font-semibold transition-colors duration-200 hover:text-[var(--pink)] border rounded px-3 py-1.5"
            style={{
              color: "rgba(245,240,235,0.55)",
              borderColor: "rgba(255,255,255,0.07)",
            }}
          >
            {otherLang.toUpperCase()}
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 rounded border transition-colors duration-200 hover:text-[var(--pink)]"
            style={{
              color: "rgba(245,240,235,0.55)",
              borderColor: "rgba(255,255,255,0.07)",
            }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun size={16} strokeWidth={2} />
            ) : (
              <Moon size={16} strokeWidth={2} />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
