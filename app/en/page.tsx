import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Bio } from "@/components/bio";
import { Shows } from "@/components/shows";
import { Media } from "@/components/media";
import { Press } from "@/components/press";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Duo Rings | Aerial Rings Duo",
  description:
    "Flora Aracama & Nico Busso — Duo Rings™. Performing Arts | Aerial Rings Duo.",
};

export default function EnglishPage() {
  return (
    <main>
      <Navbar lang="en" />
      <Hero lang="en" />
      <Bio lang="en" />
      <Shows lang="en" />
      <Media lang="en" />
      <Press lang="en" />
      <Contact lang="en" />
      <Footer lang="en" />
    </main>
  );
}
