"use client";

import { motion } from "framer-motion";
import { translations, Lang } from "@/lib/data";

interface ContactProps {
  lang: Lang;
}

export function Contact({ lang }: ContactProps) {
  const t = translations[lang];

  return (
    <section id="contacto" className="py-24 md:py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="font-black uppercase tracking-[0.25em] mb-10"
          style={{
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            color: "var(--white)",
          }}
        >
          {t.contact.heading}
        </motion.h2>

        <motion.a
          href="mailto:cirqueduorings@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="inline-block px-10 py-4 text-xs font-bold uppercase tracking-[0.3em] border border-[var(--pink)] text-[var(--pink)] hover:bg-[var(--pink)] hover:text-black transition-all duration-300 rounded-sm"
        >
          {t.contact.cta}
        </motion.a>
      </div>
    </section>
  );
}
