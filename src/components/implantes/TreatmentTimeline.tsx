import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const steps = [
  {
    num: "01",
    title: "Avaliação 3D",
    desc: "Exames de imagem e planejamento digital para definir a estratégia exata do seu tratamento.",
  },
  {
    num: "02",
    title: "A Cirurgia",
    desc: "Colocação do implante com tecnologia guiada. Rápido, preciso e com opção de sedação.",
  },
  {
    num: "03",
    title: "Osseointegração",
    desc: "Período onde o implante se une ao osso. Com Straumann SLActive, este tempo é reduzido.",
  },
  {
    num: "04",
    title: "A Coroa Final",
    desc: "Instalação da prótese definitiva em cerâmica, restaurando a estética e a função mastigatória.",
  },
];

export function TreatmentTimeline() {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-20">
          <h2 className="font-[family-name:var(--font-inter)] font-black text-4xl mb-4">
            Sua Jornada de Transformação
          </h2>
          <p className="text-blue-200/80 max-w-2xl mx-auto">
            Um processo transparente, seguro e focado no seu conforto em cada
            etapa.
          </p>
        </AnimateOnScroll>
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-secondary/30 -translate-y-1/2" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((s, i) => (
              <AnimateOnScroll key={s.num} delay={i * 0.15}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-secondary text-primary rounded-full flex items-center justify-center font-black text-xl mb-6 shadow-[0_0_30px_rgba(115,91,40,0.5)] border-4 border-primary">
                    {s.num}
                  </div>
                  <h4 className="font-[family-name:var(--font-inter)] font-bold text-xl mb-3">
                    {s.title}
                  </h4>
                  <p className="text-blue-100/70 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
