import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const team = [
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8tnbvOFH46K9H4L33aR3vr50sk79dqqV9CMMajRIpO01a1CcZW-BIrpqhECivpujovHULfdmHGJvYP9kBF0Pm03ycZ3r6orNp92M0yXsZXJ4KTo80Vo_ID0-jB9MR2pWSX8-wsJn-ws7HxvwN48ZECmChRN94v8bOWJzZ8uFJDDMAds2C8iEZxcVTA6AX5msBtkA5HIuCg5kauIzBuYAEvC6BpmyCOXxmoiSnmjUjQql54k25ncGtDPF1ApYrGo1scReFXWqV7P26",
    name: "Dr. Matheus Oliveira",
    role: "Diretor Clínico & Implantodontista",
    bio: "Especialista em Reabilitação Oral com mais de 10 anos de experiência internacional em técnicas de carga imediata.",
    offsetTop: false,
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAt2S6pjcrIL8e2e-Ti7ndHWlADfRUmXfp3BQx6MoetbyEbhmJMUlP5LY0XiXkfhNVkSqUi1Ep2qVOKgMst4dihqsdC5cgAphCIWf2-6TOGfn-BcCH9EaNGRAELG3kMk0ttVGa5EPr8oOSQ2RznNhvm0xS3h5slzWjpMSbZQZmKj05w5GcdOOTSvEM7Kn-5fOXKfBRbDtOo-InUyyiN6-GhmRthdo5A3D4C3Fo85avVrnfxyV47qgAGwvKjli1hjzZT91Y2xk_yHiw",
    name: "Dra. Beatriz Santos",
    role: "Ortodontia & Estética",
    bio: "Referência em alinhadores invisíveis e lentes de contato dental para transformações de sorriso naturais.",
    offsetTop: true,
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCH35gScDjqPH6QZSINQr5LEZm15D6rYrM8st0ehh161R34RaCU0loygY0D81IqRxkj7V3CQV1WzUboxPHhj8cHSw14_FOxMTjpcX8Id2HLEWBbhPUXrKi0lHUzqPT5gmdgrMXvjcN0XDOykJmpbPRq7MJNRvJs8y--uQ2AtvZvJHfC3MYeE9LfT19bgDE1wxe4S11O8D3S4COHrkKW8NcXXX3zP4PElCXZ69P7Sgj8Zd5W6zNEUBh1gELpcMB7Baq5C9khVRCJj7k2",
    name: "Dr. Lucas Ferreira",
    role: "Endodontia Avançada",
    bio: "Mestre em Endodontia Microscópica, focado em tratamentos de canal rápidos e totalmente indolores.",
    offsetTop: false,
  },
];

export function TeamProfiles() {
  return (
    <section className="py-24 bg-surface">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-20">
          <span className="text-secondary font-[family-name:var(--font-inter)] font-bold uppercase tracking-[0.3em] text-sm">
            Nossos Especialistas
          </span>
          <h2 className="text-5xl md:text-6xl font-[family-name:var(--font-inter)] font-black text-primary tracking-tighter mt-4">
            Equipe OMC
          </h2>
        </AnimateOnScroll>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {team.map((doc, i) => (
            <AnimateOnScroll
              key={doc.name}
              delay={i * 0.15}
              className={doc.offsetTop ? "md:mt-12" : ""}
            >
              <div className="group">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-surface-container-high mb-6 editorial-shadow transition-all duration-500 group-hover:-translate-y-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    src={doc.img}
                    alt={doc.name}
                  />
                </div>
                <h3 className="text-2xl font-[family-name:var(--font-inter)] font-black text-primary">
                  {doc.name}
                </h3>
                <p className="text-secondary font-bold uppercase tracking-wider text-sm mt-1">
                  {doc.role}
                </p>
                <p className="text-on-surface-variant mt-4 text-sm leading-relaxed">
                  {doc.bio}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
