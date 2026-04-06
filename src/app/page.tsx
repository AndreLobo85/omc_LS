import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { ImplantSteps } from "@/components/home/ImplantSteps";
import { Specialties } from "@/components/home/Specialties";
import { BeforeAfter } from "@/components/home/BeforeAfter";
import { SocialProof } from "@/components/home/SocialProof";
import { Testimonials } from "@/components/home/Testimonials";
import { Team } from "@/components/home/Team";
import { StraumannPartner } from "@/components/home/StraumannPartner";
import { ContactMap } from "@/components/home/ContactMap";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ImplantSteps />
      <Specialties />
      <BeforeAfter />
      <SocialProof />
      <Testimonials />
      <Team />
      <StraumannPartner />
      <ContactMap />
    </>
  );
}
