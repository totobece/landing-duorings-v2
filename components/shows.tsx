"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { shows as showsData, translations, Lang, Show } from "@/lib/data";

interface ShowsProps {
  lang: Lang;
}

function ImageCarousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % images.length), 3500);
    return () => clearInterval(timer);
  }, [images.length]);

  if (images.length === 0) return null;

  return (
    <div
      className="relative w-full rounded overflow-hidden mb-4"
      style={{ aspectRatio: "16/9" }}
    >
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: i === index ? 1 : 0 }}
        />
      ))}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="w-1.5 h-1.5 rounded-full transition-all duration-300"
              style={{
                background:
                  i === index
                    ? "var(--text)"
                    : "var(--text-muted2)",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ShowPanel({
  show,
  desc,
  videoLabel,
}: {
  show: Show;
  desc: string;
  videoLabel: string;
}) {
  const images = show.images ?? [];
  const videoUrl = show.videoUrl ?? "";

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="overflow-hidden"
    >
      <div
        className="mt-4 p-5 rounded-lg border"
        style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
      >
        <ImageCarousel images={images} />
        <p
          className="text-sm leading-relaxed font-light mb-4"
          style={{ color: "var(--text-muted)" }}
        >
          {desc}
        </p>
        {videoUrl && (
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase px-5 py-2.5 rounded border transition-all duration-200 hover:bg-[var(--pink)] hover:text-[var(--black)]"
            style={{
              borderColor: "var(--pink)",
              color: "var(--pink)",
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="flex-shrink-0"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            {videoLabel}
          </a>
        )}
      </div>
    </motion.div>
  );
}

function TimelineItem({
  show,
  title,
  year,
  location,
  desc,
  videoLabel,
  isOpen,
  onToggle,
  index,
}: {
  show: Show;
  title: string;
  year: string;
  location: string;
  desc: string;
  videoLabel: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const dotClasses =
    show.featured === "agt"
      ? {
          dot: "bg-amber-400 border-amber-400",
          glow: "0 0 16px 4px rgba(251,191,36,0.6)",
        }
      : show.featured === "cirque"
      ? {
          dot: "bg-[var(--pink)] border-[var(--pink)]",
          glow: "0 0 16px 4px rgba(255,107,157,0.6)",
        }
      : {
          dot: "bg-[var(--text-muted)] border-[var(--border)]",
          glow: "none",
        };

  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.04, 0.4) }}
      className="relative"
    >
      {/* Desktop layout */}
      <div className="hidden md:flex items-start relative">
        <div className="w-1/2 pr-12">
          {isLeft && (
            <div className="text-right">
              <motion.button
                onClick={onToggle}
                whileHover={{ scale: 1.025 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group text-right w-full rounded-lg px-4 py-3 -mx-4 origin-right"
                style={{ cursor: "pointer" }}
              >
                <span
                  className="text-[10px] tracking-[0.25em] uppercase font-semibold block mb-1"
                  style={{ color: "var(--pink)" }}
                >
                  {year}
                </span>
                <h3
                  className="text-sm font-bold uppercase tracking-wide group-hover:text-[var(--pink)] transition-colors duration-200 flex items-center justify-end gap-2"
                  style={{ color: "var(--text)" }}
                >
                  {title}
                  <span className="opacity-0 group-hover:opacity-60 transition-opacity duration-200 text-[var(--pink)] text-xs font-light">
                    {isOpen ? "−" : "+"}
                  </span>
                </h3>
                <span
                  className="text-[11px] font-light block mt-0.5"
                  style={{ color: "var(--text-muted)" }}
                >
                  {location}
                </span>
              </motion.button>
              <AnimatePresence>
                {isOpen && (
                  <ShowPanel show={show} desc={desc} videoLabel={videoLabel} />
                )}
              </AnimatePresence>
            </div>
          )}
        </div>

        <div
          className="relative flex-shrink-0 flex items-start justify-center"
          style={{ width: "2px" }}
        >
          <button
            onClick={onToggle}
            className="absolute top-3 left-1/2 -translate-x-1/2"
          >
            <span
              className={`block w-3 h-3 rounded-full border-2 transition-all duration-300 ${dotClasses.dot} ${
                isOpen ? "scale-150" : "hover:scale-125"
              }`}
              style={{
                boxShadow: isOpen ? dotClasses.glow : "none",
              }}
            />
          </button>
        </div>

        <div className="w-1/2 pl-12">
          {!isLeft && (
            <div>
              <motion.button
                onClick={onToggle}
                whileHover={{ scale: 1.025 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group text-left w-full rounded-lg px-4 py-3 -mx-4 origin-left"
                style={{ cursor: "pointer" }}
              >
                <span
                  className="text-[10px] tracking-[0.25em] uppercase font-semibold block mb-1"
                  style={{ color: "var(--pink)" }}
                >
                  {year}
                </span>
                <h3
                  className="text-sm font-bold uppercase tracking-wide group-hover:text-[var(--pink)] transition-colors duration-200 flex items-center gap-2"
                  style={{ color: "var(--text)" }}
                >
                  {title}
                  <span className="opacity-0 group-hover:opacity-60 transition-opacity duration-200 text-[var(--pink)] text-xs font-light">
                    {isOpen ? "−" : "+"}
                  </span>
                </h3>
                <span
                  className="text-[11px] font-light block mt-0.5"
                  style={{ color: "var(--text-muted)" }}
                >
                  {location}
                </span>
              </motion.button>
              <AnimatePresence>
                {isOpen && (
                  <ShowPanel
                    show={show}
                    desc={desc}
                    videoLabel={videoLabel}
                  />
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden flex gap-6 pb-8">
        <div
          className="relative flex-shrink-0 flex flex-col items-center"
          style={{ width: "8px" }}
        >
          <button onClick={onToggle} className="mt-3">
            <span
              className={`block w-3 h-3 rounded-full border-2 transition-all duration-300 ${dotClasses.dot} ${
                isOpen ? "scale-150" : ""
              }`}
              style={{
                boxShadow: isOpen ? dotClasses.glow : "none",
              }}
            />
          </button>
        </div>

        <div className="flex-1 pb-2">
          <motion.button
            onClick={onToggle}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group text-left w-full origin-left"
          >
            <span
              className="text-[10px] tracking-[0.25em] uppercase font-semibold block mb-1"
              style={{ color: "var(--pink)" }}
            >
              {year}
            </span>
            <h3
              className="text-sm font-bold uppercase tracking-wide group-hover:text-[var(--pink)] transition-colors duration-200 flex items-center gap-2"
              style={{ color: "var(--text)" }}
            >
              {title}
              <span className="opacity-0 group-hover:opacity-60 transition-opacity duration-200 text-[var(--pink)] text-xs">
                {isOpen ? "−" : "+"}
              </span>
            </h3>
            <span
              className="text-[11px] font-light block mt-0.5"
              style={{ color: "var(--text-muted)" }}
            >
              {location}
            </span>
          </motion.button>
          <AnimatePresence>
            {isOpen && (
              <ShowPanel show={show} desc={desc} videoLabel={videoLabel} />
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="hidden md:block h-8" />
    </motion.div>
  );
}

export function Shows({ lang }: ShowsProps) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const t = translations[lang];

  const toggle = (slug: string) => {
    setOpenSlug((current) => (current === slug ? null : slug));
  };

  return (
    <section id="shows" className="py-24 md:py-32 px-6" style={{ background: "var(--card)" }}>
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-xs font-semibold tracking-[0.35em] uppercase mb-20 text-center"
          style={{ color: "var(--pink)" }}
        >
          {t.shows.heading}
        </motion.h2>

        <div className="relative">
          <div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ background: "var(--border)" }}
          />

          <div className="space-y-0">
            {showsData.map((show, index) => {
              const title = lang === "en" ? show.titleEn : show.titleEs;
              const year =
                lang === "en" && show.yearEn ? show.yearEn : show.year;
              const location =
                lang === "en" && show.locationEn
                  ? show.locationEn
                  : show.location;
              const desc = lang === "en" ? show.descEn : show.descEs;

              return (
                <TimelineItem
                  key={show.slug}
                  show={show}
                  title={title}
                  year={year}
                  location={location}
                  desc={desc}
                  videoLabel={t.shows.watchVideo}
                  isOpen={openSlug === show.slug}
                  onToggle={() => toggle(show.slug)}
                  index={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
