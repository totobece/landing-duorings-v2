"use client";

import { translations, socialLinks, Lang } from "@/lib/data";

interface FooterProps {
  lang: Lang;
}

export function Footer({ lang }: FooterProps) {
  const t = translations[lang];

  return (
    <footer className="py-10 px-6 border-t" style={{ borderColor: "var(--border)", background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        <a
          href="https://www.theringsmethod.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold tracking-[0.25em] uppercase px-8 py-3 border rounded-sm transition-all duration-300 hover:border-[var(--pink)] hover:text-[var(--pink)]"
          style={{ color: "var(--text-muted)", borderColor: "var(--border)" }}
        >
          {t.footer.training}
        </a>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs tracking-[0.12em] uppercase font-semibold transition-colors duration-200 hover:text-[var(--pink)]"
              style={{ color: "var(--text-muted)" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d={link.iconPath} />
              </svg>
              {link.label}
            </a>
          ))}
        </div>

        <p
          className="text-xs tracking-[0.15em] uppercase font-semibold"
          style={{ color: "var(--text-muted2)" }}
        >
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
