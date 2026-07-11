"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { translations, Lang } from "@/lib/data";

interface BioProps {
  lang: Lang;
}

export function Bio({ lang }: BioProps) {
  const [expanded, setExpanded] = useState(false);
  const t = translations[lang];
  const visibleParagraphs = t.bio.paragraphs.slice(0, 3);
  const hiddenParagraphs = t.bio.paragraphs.slice(3);

  return (
    <section id="bio" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="text-xs font-semibold tracking-[0.35em] uppercase mb-16 text-center"
        style={{ color: "var(--pink)" }}
      >
        {t.bio.heading}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div
            className="animate-float relative w-full rounded-lg overflow-hidden"
            style={{ aspectRatio: "4/5" }}
          >
            <Image
              src="/media/bio/main.jpg"
              alt="Flora Aracama & Nico Busso — Duo Rings"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col justify-center"
        >
          <div className="space-y-5">
            {visibleParagraphs.map((text, idx) => (
              <p
                key={idx}
                className="text-sm md:text-base leading-relaxed font-light"
                style={{ color: "var(--text-muted)" }}
              >
                {text}
              </p>
            ))}
          </div>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="space-y-5 mt-5">
                  {hiddenParagraphs.map((text, idx) => (
                    <p
                      key={idx}
                      className="text-sm md:text-base leading-relaxed font-light"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {text}
                    </p>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-8 self-start text-xs font-semibold tracking-[0.2em] uppercase border px-6 py-3 rounded transition-all duration-200 hover:border-[var(--pink)] hover:text-[var(--pink)]"
            style={{ color: "var(--text)", borderColor: "var(--border)" }}
          >
            {expanded ? t.bio.readLess : t.bio.readMore}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
