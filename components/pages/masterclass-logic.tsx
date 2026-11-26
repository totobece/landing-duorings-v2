"use client";

import { useEffect } from "react";
import type { Lang } from "@/lib/data";

/* Lógica interactiva de la landing de Masterclass (ES/EN).
   El HTML se mantiene tal cual (es contenido editorial) y estas funciones
   quedan en window para los `onclick` / `onsubmit` del propio markup. */

type LevelKey = "principiante" | "intermedio" | "avanzado";

type LevelCopy = {
  badge: string;
  duration: string;
  title: string;
  desc: string;
};

const levels: Record<Lang, Record<LevelKey, LevelCopy>> = {
  es: {
    principiante: {
      badge: "ENFOQUE · NIVEL PRINCIPIANTE",
      duration: "Sin experiencia previa requerida",
      title: "Fundamentos, Estabilidad Escapular y Confianza en Suspensión",
      desc: "Aprenderás a regular la altura de las anillas según tu cuerpo, activar las cadenas estabilizadoras sin sobrecargar articulaciones y dominar los patrones básicos de empuje, tracción y movilidad articular consciente.",
    },
    intermedio: {
      badge: "ENFOQUE · NIVEL INTERMEDIO",
      duration: "Para practicantes activos y deportistas",
      title: "Integración de Cadenas Musculares, Fuerza Funcional y Control",
      desc: "Profundizaremos en transiciones fluidas, control del core en inestabilidad, descompresión articular activa y progresiones seguras para potenciar tu rendimiento en cualquier disciplina deportiva.",
    },
    avanzado: {
      badge: "ENFOQUE · NIVEL AVANZADO",
      duration: "Dominio corporal y alto rendimiento",
      title: "Suspensión Aérea, Inversiones y Precisión Biomecánica",
      desc: "Trabajarás secretos técnicos de 30 años en la élite gimnástica y artística: bloqueo articular fino, control en inversiones, transiciones aéreas y mindfulness aplicado a la máxima exigencia física.",
    },
  },
  en: {
    principiante: {
      badge: "FOCUS · BEGINNER LEVEL",
      duration: "No previous experience required",
      title: "Fundamentals, Scapular Stability and Confidence in Suspension",
      desc: "You'll learn to adjust the ring height to your body, activate stabilizing chains without overloading your joints, and master the basic patterns of pushing, pulling and conscious joint mobility.",
    },
    intermedio: {
      badge: "FOCUS · INTERMEDIATE LEVEL",
      duration: "For active practitioners and athletes",
      title: "Muscle Chain Integration, Functional Strength and Control",
      desc: "We'll go deeper into fluid transitions, core control under instability, active joint decompression and safe progressions to boost your performance in any sport.",
    },
    avanzado: {
      badge: "FOCUS · ADVANCED LEVEL",
      duration: "Body mastery and high performance",
      title: "Aerial Suspension, Inversions and Biomechanical Precision",
      desc: "You'll work on technical secrets from 30 years in elite gymnastics and the arts: fine joint locking, control in inversions, aerial transitions and mindfulness applied to maximum physical demand.",
    },
  },
};

const levelNames: Record<Lang, Record<LevelKey, string>> = {
  es: {
    principiante: "Principiante",
    intermedio: "Intermedio",
    avanzado: "Avanzado",
  },
  en: {
    principiante: "Beginner",
    intermedio: "Intermediate",
    avanzado: "Advanced",
  },
};

const confirmation = {
  es: {
    heading: (name: string) => `¡Gracias, ${name}!`,
    message: (level: string, city: string, email: string) =>
      `Registramos tu pre-reserva para el nivel ${level} (Sede: ${city}). Enviamos los detalles y próximas fechas presenciales a ${email}.`,
  },
  en: {
    heading: (name: string) => `Thank you, ${name}!`,
    message: (level: string, city: string, email: string) =>
      `We've registered your pre-reservation for the ${level} level (Location: ${city}). We'll send the details and upcoming in-person dates to ${email}.`,
  },
};

export function MasterclassLogic({ lang }: { lang: Lang }) {
  useEffect(() => {
    const win = window as unknown as Record<string, unknown>;
    let currentSelectedLevel = levelNames[lang].principiante;

    const selectLevel = (levelKey: LevelKey) => {
      const data = levels[lang][levelKey];
      if (!data) return;

      currentSelectedLevel = levelNames[lang][levelKey];

      document.querySelectorAll(".level-btn").forEach((btn) => {
        btn.classList.remove("border-accentPink", "bg-accentPink", "text-pureBlack");
        btn.classList.add("border-neutral-800", "bg-pureBlack", "text-neutral-300");
      });

      const activeBtn = document.getElementById(`btn-${levelKey}`);
      if (activeBtn) {
        activeBtn.classList.remove(
          "border-neutral-800",
          "bg-pureBlack",
          "text-neutral-300",
        );
        activeBtn.classList.add(
          "border-accentPink",
          "bg-accentPink",
          "text-pureBlack",
        );
      }

      const detailBox = document.getElementById("level-detail");
      if (detailBox) {
        detailBox.classList.remove("animate-fade-slide");
        void detailBox.offsetWidth;
        detailBox.classList.add("animate-fade-slide");
      }

      const badge = document.getElementById("level-badge");
      const duration = document.getElementById("level-duration");
      const title = document.getElementById("level-title");
      const desc = document.getElementById("level-desc");
      if (badge) badge.textContent = data.badge;
      if (duration) duration.textContent = data.duration;
      if (title) title.textContent = data.title;
      if (desc) desc.textContent = data.desc;
    };

    const handleFormSubmit = (event: Event) => {
      event.preventDefault();
      const name =
        (document.getElementById("fullName") as HTMLInputElement | null)
          ?.value.trim() ?? "";
      const email =
        (document.getElementById("email") as HTMLInputElement | null)
          ?.value.trim() ?? "";
      const city =
        (document.getElementById("city") as HTMLSelectElement | null)?.value ??
        "";

      const copy = confirmation[lang];
      const heading = document.getElementById("confirm-heading");
      const message = document.getElementById("confirm-message");
      if (heading) heading.textContent = copy.heading(name);
      if (message) {
        message.textContent = copy.message(
          currentSelectedLevel,
          city,
          email,
        );
      }

      document.getElementById("reservation-form")?.classList.add("hidden");
      document.getElementById("confirmation-box")?.classList.remove("hidden");
    };

    const resetForm = () => {
      const form = document.getElementById(
        "reservation-form",
      ) as HTMLFormElement | null;
      form?.reset();
      document.getElementById("confirmation-box")?.classList.add("hidden");
      document
        .getElementById("reservation-form")
        ?.classList.remove("hidden");
    };

    win.selectLevel = selectLevel;
    win.handleFormSubmit = handleFormSubmit;
    win.resetForm = resetForm;

    return () => {
      delete win.selectLevel;
      delete win.handleFormSubmit;
      delete win.resetForm;
    };
  }, [lang]);

  return null;
}
