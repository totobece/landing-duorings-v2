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
          ? "backdrop-blur-sm border-b"
          : "bg-transparent"
      }`}
      style={{
        background: scrolled ? "var(--nav-bg-scrolled)" : "var(--nav-bg)",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollTo("#inicio")}
          className="font-black text-sm tracking-[0.2em] uppercase hover:text-[var(--pink)] transition-colors duration-200"
          style={{ color: "var(--text)" }}
        >
          DUO RINGS™
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => scrollTo(item.href)}
              className="text-xs tracking-[0.15em] uppercase transition-colors duration-200 font-semibold hover:text-[var(--pink)]"
              style={{ color: "var(--text-muted)" }}
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
              color: "var(--text-muted)",
              borderColor: "var(--border)",
            }}
          >
            {otherLang.toUpperCase()}
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 rounded border transition-colors duration-200 hover:text-[var(--pink)]"
            style={{
              color: "var(--text-muted)",
              borderColor: "var(--border)",
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
