import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Duo Rings | Aerial Rings Duo",
  description:
    "Flora Aracama & Nico Busso — Duo Rings™. Performing Arts | Aerial Rings Duo.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} antialiased`} style={{ fontFamily: "var(--font-montserrat), Arial, sans-serif" }}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
