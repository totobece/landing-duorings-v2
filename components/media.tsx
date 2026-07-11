"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { mediaItems, translations, Lang } from "@/lib/data";

interface MediaProps {
  lang: Lang;
}

export function Media({ lang }: MediaProps) {
  const t = translations[lang];

  return (
    <section id="media" className="py-24 md:py-32 px-6" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-xs font-semibold tracking-[0.35em] uppercase mb-16 text-center"
          style={{ color: "var(--pink)" }}
        >
          {t.media.heading}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mediaItems.map((item, index) => {
            const title = lang === "en" ? item.titleEn : item.titleEs;
            const subtitle = lang === "en" ? item.subtitleEn : item.subtitleEs;

            return (
              <motion.a
                key={item.slug}
                href={item.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: Math.min(index * 0.05, 0.3),
                }}
                className="group block"
              >
                <div
                  className="relative w-full rounded-lg overflow-hidden mb-4"
                  style={{ aspectRatio: "16/9" }}
                >
                  <img
                    src={item.thumbnail}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
                      <Play className="w-5 h-5 text-white fill-white" />
                    </div>
                  </div>
                </div>
                <h3
                  className="text-xs font-bold uppercase tracking-wide mb-1 transition-colors duration-200 group-hover:text-[var(--pink)]"
                  style={{ color: "var(--text)" }}
                >
                  {title}
                </h3>
                <p
                  className="text-[10px] tracking-[0.15em] uppercase font-light"
                  style={{ color: "var(--text-muted)" }}
                >
                  {subtitle}
                </p>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <a
            href="https://www.youtube.com/@TheRingsMethod"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase font-semibold transition-colors duration-200 hover:text-[var(--pink)]"
            style={{ color: "var(--text-muted)" }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            {t.media.allVideos}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
