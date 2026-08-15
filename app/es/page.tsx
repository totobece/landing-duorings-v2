import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Bio } from "@/components/bio";
import { Shows } from "@/components/shows";
import { Media } from "@/components/media";
import { Press } from "@/components/press";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Duo Rings | Dúo de Anillas Aéreas",
  description:
    "Flora Aracama y Nico Busso — Duo Rings™. Artes Escénicas | Dúo de Anillas Aéreas.",
};

export default function SpanishPage() {
  return (
    <main>
      <Navbar lang="es" />
      <Hero lang="es" />
      <Bio lang="es" />
      <Shows lang="es" />
      <Media lang="es" />
      <Press lang="es" />
      <Contact lang="es" />
      <Footer lang="es" />
    </main>
  );
}
