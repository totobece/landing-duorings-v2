import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MasterclassContent } from "@/components/pages/masterclass-content";
import { MasterclassLogic } from "@/components/pages/masterclass-logic";
import { masterclassHtmlEn } from "@/components/pages/masterclass-html-en";
import "@/app/masterclass/masterclass.css";

export const metadata = {
  title: "Masterclass The Rings Method® | Duo Rings",
  description:
    "In-person Masterclass by The Rings Method® led by Flora Aracama and Nico Busso (Duo Rings). Fundamentals, strength and control on rings for all levels.",
  alternates: {
    canonical: "https://www.duo-rings.com/en/masterclass/",
    languages: {
      es: "https://www.duo-rings.com/masterclass/",
      en: "https://www.duo-rings.com/en/masterclass/",
    },
  },
};

export default function MasterclassEnPage() {
  return (
    <div className="masterclass-page" data-theme="dark">
      <Navbar lang="en" currentPage="masterclass" />
      <MasterclassContent html={masterclassHtmlEn} />
      <MasterclassLogic lang="en" />
      <Footer lang="en" />
    </div>
  );
}
