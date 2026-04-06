import type { Metadata } from "next";
import { ImplantesHero } from "@/components/implantes/ImplantesHero";
import { Differentiators } from "@/components/implantes/Differentiators";
import { StraumannDeepDive } from "@/components/implantes/StraumannDeepDive";
import { TreatmentTimeline } from "@/components/implantes/TreatmentTimeline";
import { Pricing } from "@/components/implantes/Pricing";
import { FAQ } from "@/components/implantes/FAQ";
import { ConversionForm } from "@/components/implantes/ConversionForm";

export const metadata: Metadata = {
  title: "Implante Dentário em Lagoa Santa",
  description:
    "Implantes Straumann com 98%+ de sucesso. Cirurgia guiada, sedação consciente e parcelamento em até 24x. Avaliação gratuita na OdontoMedCenter.",
};

export default function ImplantesPage() {
  return (
    <>
      <ImplantesHero />
      <Differentiators />
      <StraumannDeepDive />
      <TreatmentTimeline />
      <Pricing />
      <FAQ />
      <ConversionForm />
    </>
  );
}
