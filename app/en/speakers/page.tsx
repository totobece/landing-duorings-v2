import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { speakersHtmlEn } from "@/components/pages/speakers-html-en";
import "@/app/speakers/speakers.css";

export const metadata = {
  title: "The Rings Method — Speakers | Duo Rings",
  description:
    "Flora Aracama and Nico Busso (Duo Rings) as speakers: an entrepreneur's mind, an athlete's body and an artist's soul. A masterclass on high performance, leadership and well-being.",
  alternates: {
    canonical: "https://www.duo-rings.com/en/speakers/",
    languages: {
      es: "https://www.duo-rings.com/speakers/",
      en: "https://www.duo-rings.com/en/speakers/",
    },
  },
};

export default function SpeakersEnPage() {
  return (
    <div className="speakers-page" data-theme="dark">
      <Navbar lang="en" currentPage="speakers" />
      <div dangerouslySetInnerHTML={{ __html: speakersHtmlEn }} />
      <Footer lang="en" />
    </div>
  );
}
