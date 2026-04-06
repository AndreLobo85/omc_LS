import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { whatsappUrl } from "@/lib/constants";

const techCards = [
  {
    icon: "scanner",
    title: "Scanner 3D iTero",
    desc: "Moldagens digitais precisas sem o desconforto das massas tradicionais.",
  },
  {
    icon: "biotech",
    title: "Microscopia Clínica",
    desc: "Visão ampliada para máxima precisão em cirurgias e tratamentos de canal.",
  },
  {
    icon: "flare",
    title: "Laser Terapêutico",
    desc: "Aceleração da cicatrização e redução drástica do desconforto pós-operatório.",
  },
  {
    icon: "3d_rotation",
    title: "Fluxo Digital",
    desc: "Integração total do planejamento ao resultado final com tecnologia CAD/CAM.",
  },
];

export function Technology() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary-container">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      </div>
      <div className="container max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                {techCards.slice(0, 2).map((card, i) => (
                  <AnimateOnScroll key={card.title} delay={i * 0.1}>
                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 editorial-shadow">
                      <span className="material-symbols-outlined text-secondary-fixed-dim text-4xl mb-4 block">
                        {card.icon}
                      </span>
                      <h4 className="text-white font-[family-name:var(--font-inter)] font-bold">
                        {card.title}
                      </h4>
                      <p className="text-on-primary-container text-xs mt-2">
                        {card.desc}
                      </p>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
              <div className="space-y-4 pt-8">
                {techCards.slice(2).map((card, i) => (
                  <AnimateOnScroll key={card.title} delay={(i + 2) * 0.1}>
                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 editorial-shadow">
                      <span className="material-symbols-outlined text-secondary-fixed-dim text-4xl mb-4 block">
                        {card.icon}
                      </span>
                      <h4 className="text-white font-[family-name:var(--font-inter)] font-bold">
                        {card.title}
                      </h4>
                      <p className="text-on-primary-container text-xs mt-2">
                        {card.desc}
                      </p>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </div>
          <AnimateOnScroll
            direction="right"
            className="order-1 lg:order-2 space-y-8"
          >
            <span className="text-secondary font-[family-name:var(--font-inter)] font-bold uppercase tracking-[0.3em] text-sm">
              Alta Performance
            </span>
            <h2 className="text-5xl md:text-6xl font-[family-name:var(--font-inter)] font-black text-white tracking-tighter">
              Tecnologia de Ponta
            </h2>
            <p className="text-on-primary-container text-lg leading-relaxed">
              Investimos continuamente no que há de mais moderno na odontologia
              mundial. Nosso centro cirúrgico e salas de diagnóstico são
              equipados para oferecer diagnósticos precisos em segundos e
              procedimentos minimamente invasivos.
            </p>
            <a
              href={whatsappUrl(
                "Olá! Gostaria de conhecer os equipamentos da clínica."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-on-secondary px-8 py-4 rounded-xl font-[family-name:var(--font-inter)] font-bold flex items-center gap-3 transition-transform hover:scale-105 active:scale-95 w-fit"
            >
              Conhecer Nossos Equipamentos
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
