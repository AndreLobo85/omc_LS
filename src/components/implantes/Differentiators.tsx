import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const cards = [
  {
    icon: "precision_manufacturing",
    title: "Cirurgia Guiada",
    desc: "Procedimentos planejados digitalmente em 3D, garantindo maior precisão e menor trauma cirúrgico.",
  },
  {
    icon: "biotech",
    title: "Sedação Consciente",
    desc: "Opção de sedação para que você realize seu procedimento com total tranquilidade e ausência de ansiedade.",
  },
  {
    icon: "workspace_premium",
    title: "Marcas Premium",
    desc: "Trabalhamos exclusivamente com os melhores sistemas de implantes do mundo, garantindo longevidade.",
  },
  {
    icon: "history_edu",
    title: "Corpo Docente",
    desc: "Nossos especialistas são referência na área, com vasta experiência em casos de alta complexidade.",
  },
];

export function Differentiators() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-primary font-[family-name:var(--font-inter)] font-black text-4xl mb-4">
            Por que escolher a OMC para seu implante?
          </h2>
          <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full" />
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((c, i) => (
            <AnimateOnScroll key={c.title} delay={i * 0.1}>
              <div className="bg-surface-container-lowest p-8 rounded-3xl editorial-shadow hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                  <span
                    className="material-symbols-outlined text-secondary text-3xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {c.icon}
                  </span>
                </div>
                <h3 className="text-primary font-[family-name:var(--font-inter)] font-bold text-xl mb-3">
                  {c.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {c.desc}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
