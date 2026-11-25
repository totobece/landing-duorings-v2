import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MasterclassContent } from "@/components/pages/masterclass-content";
import { MasterclassLogic } from "@/components/pages/masterclass-logic";
import { masterclassHtml } from "@/components/pages/masterclass-html";
import "./masterclass.css";

export const metadata = {
  title: "Masterclass The Rings Method® | Duo Rings",
  description:
    "Masterclass presencial de The Rings Method® dictada por Flora Aracama y Nico Busso (Duo Rings). Fundamentos, fuerza y control en anillas para todos los niveles.",
  alternates: {
    canonical: "https://www.duo-rings.com/masterclass/",
  },
};

export default function MasterclassPage() {
  return (
    <div className="masterclass-page" data-theme="dark">
      <Navbar lang="es" currentPage="masterclass" />
      <MasterclassContent html={masterclassHtml} />
      <MasterclassLogic />
      <Footer lang="es" />
    </div>
  );
}
