import type { Metadata } from "next";
import { AboutHero } from "@/components/sobre/AboutHero";
import { ClinicGallery } from "@/components/sobre/ClinicGallery";
import { TeamProfiles } from "@/components/sobre/TeamProfiles";
import { Technology } from "@/components/sobre/Technology";
import { Partnerships } from "@/components/sobre/Partnerships";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description:
    "Conheça a OdontoMedCenter Lagoa Santa. Nossa história, equipe especializada, tecnologia de ponta e ambiente exclusivo. Referência em implantes no Vetor Norte.",
};

export default function SobrePage() {
  return (
    <>
      <AboutHero />
      <ClinicGallery />
      <TeamProfiles />
      <Technology />
      <Partnerships />
    </>
  );
}
