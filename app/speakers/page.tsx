import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { speakersHtml } from "@/components/pages/speakers-html";
import "./speakers.css";

export const metadata = {
  title: "The Rings Method — Speakers | Duo Rings",
  description:
    "Flora Aracama y Nico Busso (Duo Rings) como speakers: mente de emprendedor, cuerpo de atleta y alma de artista. Masterclass de alto rendimiento, liderazgo y bienestar.",
  alternates: {
    canonical: "https://www.duo-rings.com/speakers/",
    languages: {
      es: "https://www.duo-rings.com/speakers/",
      en: "https://www.duo-rings.com/en/speakers/",
    },
  },
};

export default function SpeakersPage() {
  return (
    <div className="speakers-page" data-theme="dark">
      <Navbar lang="es" currentPage="speakers" />
      <div dangerouslySetInnerHTML={{ __html: speakersHtml }} />
      <Footer lang="es" />
    </div>
  );
}
