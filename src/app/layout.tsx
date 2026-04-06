import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFAB } from "@/components/layout/WhatsAppFAB";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "OdontoMedCenter Lagoa Santa | Implantes Dentários e Especialidades",
    template: "%s | OdontoMedCenter Lagoa Santa",
  },
  description:
    "Clínica odontológica completa em Lagoa Santa - MG. Especialistas em implantes Straumann, ortodontia, estética dental e todas as especialidades. Avaliação gratuita.",
  keywords: [
    "implante dentário lagoa santa",
    "dentista lagoa santa",
    "implante straumann",
    "odontologia 3d",
    "clínica odontológica vetor norte",
    "ortodontia lagoa santa",
    "lentes de contato dental",
    "estética dental",
  ],
  openGraph: {
    title: "OdontoMedCenter Lagoa Santa | Implantes Dentários",
    description:
      "Especialistas em implantes Straumann em Lagoa Santa. Avaliação gratuita. +500 implantes realizados.",
    locale: "pt_BR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background text-on-surface font-[family-name:var(--font-manrope)] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFAB />
        <MobileBottomNav />
      </body>
    </html>
  );
}
