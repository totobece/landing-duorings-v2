"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Pause, Play, ArrowUpRight } from "lucide-react";
import { translations, Lang } from "@/lib/data";
import { pressItems, PressItem } from "@/lib/press";

interface PressProps {
  lang: Lang;
}

const SPEED = 26; // px por segundo

function displayUrl(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

function PressRow({
  item,
  lang,
  categoryLabel,
}: {
  item: PressItem;
  lang: Lang;
  categoryLabel: string;
}) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="press-row group grid items-start gap-4 px-4 py-5 sm:px-6 border-b transition-colors duration-300"
      style={{
        gridTemplateColumns: "10px 1fr auto",
        borderColor: "var(--border)",
      }}
    >
      <span className="press-dot mt-[7px]" aria-hidden />

      <span className="min-w-0 block">
        <span
          className="block text-sm sm:text-[15px] font-semibold leading-snug transition-colors duration-200 group-hover:text-[var(--pink)]"
          style={{ color: "var(--text)" }}
        >
          {item.title}
        </span>

        <span
          className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] sm:text-[11px] tracking-[0.14em] uppercase font-semibold"
          style={{ color: "var(--text-muted)" }}
        >
          <span>{item.publication}</span>
          <span style={{ color: "var(--pink)" }}>·</span>
          <span>{lang === "en" ? item.dateEn : item.dateEs}</span>
          <span
            className="hidden sm:inline px-2 py-[2px] rounded-full border text-[9px] tracking-[0.16em]"
            style={{
              borderColor: "var(--border)",
              color: "var(--text-muted2)",
            }}
          >
            {categoryLabel}
          </span>
        </span>

        <span
          className="mt-1.5 block truncate text-[10px] sm:text-[11px] font-light tracking-wide transition-colors duration-200 group-hover:text-[var(--pink)]"
          style={{ color: "var(--text-muted2)" }}
        >
          {displayUrl(item.url)}
        </span>
      </span>

      <span
        className="mt-1 flex-none transition-all duration-300 opacity-40 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        style={{ color: "var(--pink)" }}
        aria-hidden
      >
        <ArrowUpRight size={16} strokeWidth={2} />
      </span>
    </a>
  );
}

export function Press({ lang }: PressProps) {
  const t = translations[lang];
  const scrollerRef = useRef<HTMLDivElement>(null);
  const hoveringRef = useRef(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let last = performance.now();
    let visible = false;

    // Solo se desliza mientras la sección está a la vista
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        last = performance.now();
      },
      { threshold: 0.05 }
    );
    io.observe(el);

    const step = (now: number) => {
      const delta = (now - last) / 1000;
      last = now;
      if (visible && !hoveringRef.current) {
        const half = el.scrollHeight / 2;
        el.scrollTop += SPEED * delta;
        if (half > 0 && el.scrollTop >= half) el.scrollTop -= half;
      }
      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [paused]);

  // Si el usuario sube con la rueda hasta el tope, saltamos a la copia de abajo
  const handleScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    if (el.scrollTop <= 0) el.scrollTop = el.scrollHeight / 2 - 1;
  };

  const categoryLabels = {
    artists: t.press.categoryArtists,
    business: t.press.categoryBusiness,
  };

  const list = (copy: number) => (
    // La segunda copia es sólo para el loop visual: fuera del foco y del lector
    <div aria-hidden={copy === 1 ? true : undefined} inert={copy === 1}>
      {pressItems.map((item) => (
        <PressRow
          key={`${copy}-${item.url}`}
          item={item}
          lang={lang}
          categoryLabel={categoryLabels[item.category]}
        />
      ))}
    </div>
  );

  return (
    <section
      id="press"
      className="py-24 md:py-32 px-6"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2
            className="text-xs font-semibold tracking-[0.35em] uppercase"
            style={{ color: "var(--pink)" }}
          >
            {t.press.heading}
          </h2>
          <p
            className="mt-5 text-sm font-light"
            style={{ color: "var(--text-muted)" }}
          >
            {t.press.subtitle}
          </p>
          <p
            className="mt-2 text-[10px] tracking-[0.25em] uppercase font-semibold"
            style={{ color: "var(--text-muted2)" }}
          >
            {pressItems.length} {t.press.count}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-12 rounded-lg border overflow-hidden"
          style={{
            borderColor: "var(--border)",
            background: "var(--bg-card)",
          }}
        >
          <div
            ref={scrollerRef}
            className="press-scroller"
            onScroll={handleScroll}
            onMouseEnter={() => (hoveringRef.current = true)}
            onMouseLeave={() => (hoveringRef.current = false)}
            onFocusCapture={() => (hoveringRef.current = true)}
            onBlurCapture={() => (hoveringRef.current = false)}
            onTouchStart={() => (hoveringRef.current = true)}
            onTouchEnd={() => (hoveringRef.current = false)}
          >
            {list(0)}
            {list(1)}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 flex items-center justify-center gap-5"
        >
          <button
            onClick={() => setPaused((p) => !p)}
            className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase font-semibold border rounded-full px-4 py-2 transition-colors duration-200 hover:border-[var(--pink)] hover:text-[var(--pink)]"
            style={{ color: "var(--text-muted)", borderColor: "var(--border)" }}
          >
            {paused ? <Play size={12} /> : <Pause size={12} />}
            {paused ? t.press.play : t.press.pause}
          </button>
          <span
            className="hidden sm:block text-[10px] tracking-[0.2em] uppercase font-light"
            style={{ color: "var(--text-muted2)" }}
          >
            {t.press.hint}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
