import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const specialties = [
  { icon: "medical_services", name: "Implantodontia" },
  { icon: "grid_view", name: "Ortodontia" },
  { icon: "pulmonology", name: "Endodontia (Canal)" },
  { icon: "dentistry", name: "Prótese Dental" },
  { icon: "child_care", name: "Odontopediatria" },
  { icon: "visibility", name: "Lentes de Contato" },
  { icon: "healing", name: "Periodontia" },
  { icon: "face", name: "Estética Facial" },
];

export function Specialties() {
  return (
    <section id="especialidades" className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="font-[family-name:var(--font-inter)] text-4xl md:text-5xl font-black text-primary mb-4 tracking-tighter">
                Nossas Especialidades
              </h2>
              <p className="text-on-surface-variant">
                Soluções completas para a saúde bucal da sua família em um só
                lugar.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((s, i) => (
            <AnimateOnScroll key={s.name} delay={i * 0.05}>
              <div className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/10 hover:shadow-2xl transition-all cursor-pointer">
                <span className="material-symbols-outlined text-4xl text-secondary mb-6 block">
                  {s.icon}
                </span>
                <h4 className="font-bold text-lg text-primary">{s.name}</h4>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
