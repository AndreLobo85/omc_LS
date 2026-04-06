import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const items = [
  { icon: "verified", label: "Implantes Straumann" },
  { icon: "3d_rotation", label: "Odontologia 3D" },
  { icon: "favorite", label: "Atendimento Humanizado" },
  { icon: "history", label: "+3 Anos no Vetor Norte" },
  { icon: "star", label: "Avaliação Gratuita" },
];

export function TrustBar() {
  return (
    <AnimateOnScroll direction="up">
      <section className="bg-surface-container-lowest py-10 relative z-20 -mt-12 mx-4 lg:mx-8 rounded-2xl shadow-xl max-w-7xl xl:mx-auto border border-outline-variant/20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center md:divide-x divide-outline-variant/30">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center px-4"
            >
              <span className="material-symbols-outlined text-secondary text-3xl mb-2">
                {item.icon}
              </span>
              <p className="text-xs font-bold uppercase tracking-tighter text-primary">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </AnimateOnScroll>
  );
}
