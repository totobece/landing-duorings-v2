"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { partnerLogos, translations, Lang } from "@/lib/data";

interface HeroProps {
  lang: Lang;
}

export function Hero({ lang }: HeroProps) {
  const t = translations[lang];

  return (
    <section id="inicio">
      <div className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/media/hero/highlights.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 flex items-center justify-center z-10 px-6">
          <div className="flex flex-col items-center text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-black uppercase leading-none tracking-tight mb-3"
              style={{
                fontSize: "clamp(2.8rem, 5.5vw, 5.5rem)",
                color: "var(--white)",
              }}
            >
              {t.hero.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-semibold uppercase tracking-[0.18em] mb-5 w-full text-center"
              style={{
                fontSize: "clamp(0.5rem, 1vw, 0.78rem)",
                color: "rgba(245,240,235,0.65)",
              }}
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-light italic tracking-wide"
              style={{
                fontSize: "clamp(0.75rem, 1.1vw, 0.95rem)",
                color: "rgba(245,240,235,0.42)",
              }}
            >
              {t.hero.quote}
            </motion.p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-14 left-0 right-0 z-10"
        >
          <div className="w-full overflow-hidden mt-12 py-4">
            <div className="flex marquee-track">
              {[...partnerLogos, ...partnerLogos].map((logo, idx) => (
                <div
                  key={`${logo.alt}-${idx}`}
                  className="flex-shrink-0 mx-8 flex items-center justify-center"
                >
                  <Image
                    alt={logo.alt}
                    loading="lazy"
                    width={120}
                    height={48}
                    decoding="async"
                    className="h-10 w-auto object-contain filter brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300"
                    style={{ color: "transparent" }}
                    src={logo.src}
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5">
            <span
              className="text-[9px] tracking-[0.3em] uppercase font-semibold"
              style={{ color: "rgba(245,240,235,0.35)" }}
            >
              {t.hero.scroll}
            </span>
            <div
              className="animate-bounce-arrow"
              style={{ color: "rgba(245,240,235,0.35)" }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M1 1L8 8L15 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
