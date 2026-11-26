"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Sun, Moon, Menu, X } from "lucide-react";
import { navItems, pageLinks, pageHref, translations, Lang } from "@/lib/data";
import { useTheme } from "@/components/theme-provider";

interface NavbarProps {
  lang: Lang;
  /** Página independiente actual, para marcarla en el menú. */
  currentPage?: "masterclass" | "speakers";
}

export function Navbar({ lang, currentPage }: NavbarProps) {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = translations[lang];

  const languageHref = (target: Lang) =>
    currentPage ? pageHref(target, currentPage) : `/${target}`;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const scrollTo = (selector: string) => {
    setMenuOpen(false);
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      // Las páginas independientes no tienen las secciones del home:
      // se navega al home en el idioma actual y se baja a la sección.
      router.push(`/${lang}${selector}`);
    }
  };

  const menuBackground = menuOpen
    ? "rgba(10,10,10,0.98)"
    : scrolled
      ? "rgba(10,10,10,0.95)"
      : "rgba(10,10,10,0.6)";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "backdrop-blur-sm border-b border-white/[0.07]"
          : "bg-transparent"
      }`}
      style={{ background: menuBackground }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollTo("#inicio")}
          className="font-black text-sm tracking-[0.2em] uppercase hover:text-[var(--pink)] transition-colors duration-200 whitespace-nowrap"
          style={{ color: "#f5f0eb" }}
        >
          DUO RINGS™
        </button>

        <div className="hidden lg:flex items-center gap-4 xl:gap-7">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => scrollTo(item.href)}
              className="text-xs tracking-[0.15em] uppercase transition-colors duration-200 font-semibold hover:text-[var(--pink)] whitespace-nowrap"
              style={{ color: "rgba(245,240,235,0.55)" }}
            >
              {t.nav[item.key as keyof typeof t.nav]}
            </button>
          ))}

          {pageLinks.map((item) => {
            const active = currentPage === item.key;
            return (
              <a
                key={item.key}
                href={pageHref(lang, item.key)}
                aria-current={active ? "page" : undefined}
                className={`inline text-xs tracking-[0.15em] uppercase transition-colors duration-200 font-semibold hover:text-[var(--pink)] whitespace-nowrap ${
                  active ? "underline underline-offset-[6px]" : ""
                }`}
                style={{ color: "var(--pink)" }}
              >
                {t.nav[item.key as keyof typeof t.nav]}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <div
            role="group"
            aria-label={lang === "es" ? "Idioma" : "Language"}
            className="flex items-center rounded border overflow-hidden"
            style={{ borderColor: "rgba(255,255,255,0.07)" }}
          >
            {(["es", "en"] as const).map((target) => {
              const active = target === lang;
              return (
                <Link
                  key={target}
                  href={languageHref(target)}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active ? "page" : undefined}
                  aria-label={
                    target === "es" ? "Ver en español" : "View in English"
                  }
                  title={target === "es" ? "Español" : "English"}
                  className={`px-2.5 py-1.5 text-[11px] font-semibold tracking-[0.12em] uppercase transition-colors duration-200 ${
                    active
                      ? ""
                      : "text-[rgba(245,240,235,0.6)] hover:text-[var(--pink)]"
                  }`}
                  style={
                    active
                      ? { color: "#0a0a0a", background: "var(--pink)" }
                      : undefined
                  }
                >
                  {target.toUpperCase()}
                </Link>
              );
            })}
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded border transition-colors duration-200 hover:text-[var(--pink)]"
            style={{
              color: "rgba(245,240,235,0.55)",
              borderColor: "rgba(255,255,255,0.07)",
            }}
            aria-label={
              lang === "es" ? "Cambiar tema" : "Toggle theme"
            }
          >
            {theme === "dark" ? (
              <Sun size={16} strokeWidth={2} />
            ) : (
              <Moon size={16} strokeWidth={2} />
            )}
          </button>

          <button
            onClick={() => setMenuOpen((open) => !open)}
            className="lg:hidden p-2 rounded border transition-colors duration-200 hover:text-[var(--pink)]"
            style={{
              color: "rgba(245,240,235,0.55)",
              borderColor: "rgba(255,255,255,0.07)",
            }}
            aria-label={
              menuOpen
                ? lang === "es"
                  ? "Cerrar menú"
                  : "Close menu"
                : lang === "es"
                  ? "Abrir menú"
                  : "Open menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? (
              <X size={16} strokeWidth={2} />
            ) : (
              <Menu size={16} strokeWidth={2} />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden border-t max-h-[calc(100vh-4rem)] overflow-y-auto"
          style={{
            borderColor: "rgba(255,255,255,0.07)",
            background: "rgba(10,10,10,0.98)",
          }}
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollTo(item.href)}
                className="text-left text-xs tracking-[0.15em] uppercase font-semibold py-3 border-b transition-colors duration-200 hover:text-[var(--pink)]"
                style={{
                  color: "rgba(245,240,235,0.7)",
                  borderColor: "rgba(255,255,255,0.05)",
                }}
              >
                {t.nav[item.key as keyof typeof t.nav]}
              </button>
            ))}

            {pageLinks.map((item) => (
              <a
                key={item.key}
                href={pageHref(lang, item.key)}
                onClick={() => setMenuOpen(false)}
                aria-current={currentPage === item.key ? "page" : undefined}
                className={`text-xs tracking-[0.15em] uppercase font-semibold py-3 border-b transition-colors duration-200 hover:text-[var(--pink)] ${
                  currentPage === item.key ? "underline underline-offset-4" : ""
                }`}
                style={{
                  color: "var(--pink)",
                  borderColor: "rgba(255,255,255,0.05)",
                }}
              >
                {t.nav[item.key as keyof typeof t.nav]}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
