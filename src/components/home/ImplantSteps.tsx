import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const steps = [
  {
    num: "01",
    title: "Avaliação Gratuita",
    desc: "Consulta inicial para entender seu caso e realizar os primeiros exames diagnósticos.",
  },
  {
    num: "02",
    title: "Planejamento Digital 3D",
    desc: "Mapeamento preciso da sua boca para garantir o posicionamento perfeito do implante.",
  },
  {
    num: "03",
    title: "Colocação do Implante",
    desc: "Procedimento cirúrgico rápido e indolor utilizando as melhores técnicas da atualidade.",
  },
  {
    num: "04",
    title: "Sorriso Restaurado",
    desc: "Finalização do processo com a prótese fixa, devolvendo função e estética completa.",
  },
];

export function ImplantSteps() {
  return (
    <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
      <AnimateOnScroll className="text-center mb-16">
        <h2 className="font-[family-name:var(--font-inter)] text-4xl md:text-5xl font-black text-primary mb-4 tracking-tighter">
          Devolvemos seu sorriso em até 24 horas
        </h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto">
          Tecnologia avançada e planejamento digital para uma restauração
          rápida, segura e definitiva.
        </p>
      </AnimateOnScroll>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <AnimateOnScroll key={step.num} delay={i * 0.1}>
            <div className="group">
              <div className="bg-surface-container-low rounded-3xl p-8 h-full transition-all group-hover:bg-primary group-hover:text-white">
                <span className="text-5xl font-black text-secondary/20 mb-6 block group-hover:text-secondary-container">
                  {step.num}
                </span>
                <h3 className="font-bold text-xl mb-4">{step.title}</h3>
                <p className="text-sm opacity-80">{step.desc}</p>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
