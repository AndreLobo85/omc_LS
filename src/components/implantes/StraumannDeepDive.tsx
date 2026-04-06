import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { whatsappUrl } from "@/lib/constants";

const features = [
  {
    title: "Superfície SLActive®",
    desc: "Cicatrização até 3x mais rápida em comparação a implantes convencionais.",
  },
  {
    title: "Material Roxolid®",
    desc: "Maior resistência que o titânio puro, permitindo implantes menores e menos invasivos.",
  },
  {
    title: "Garantia Vitalícia",
    desc: "Suporte global e garantia de substituição do componente original.",
  },
];

export function StraumannDeepDive() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimateOnScroll direction="left">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="rounded-[40px] shadow-2xl relative z-10 w-full aspect-square object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-dpXyE3O7ximHVREnxhNshfV6S7RPzvy4iVrxaV799qWNHIEyd22tvy2nBcz2pW0gkDq1N_nH3eGnku5-2UFXtdSRyU3L7OgTVCElhO-lJW0lhxZD1bvIuts7i35xVZWo2sM3gEGz4y8wjU5F8DxLI8wWhAM7l6C45016PMhCPX-iqHzOOEGAVtF2-JwugGdcJMu_DMkiO8ewduoiX4rXj5yPebV5YJHMXPnGsP2aAM1v_s-zhuyEhvT7r6pl2wkStI9Kt9H9f1u0"
                alt="Implante Straumann em macro"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-xl z-20 flex flex-col gap-2 border border-outline-variant/20">
                <div className="flex items-center gap-2">
                  <span className="text-secondary font-black text-3xl font-[family-name:var(--font-inter)]">
                    98%+
                  </span>
                  <span className="text-on-surface-variant text-xs font-bold leading-tight">
                    TAXA DE
                    <br />
                    SUCESSO
                  </span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll direction="right">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="h-10 mb-6 object-contain opacity-80"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtB1bmXc_isCrDOCJt6JX4h-LSeR16M1cqvHKqGLvavqQWIiROdcxE8gwu4HjKxnHpaU0UFu-iBXeZWzQmeW9sPdYAHhPvngFwMySVMCYiTBbVBmI3TzgGPOmDMUSWCebqxpBAESTWNVA1B50JYExPgY4S_1EfexhOE8iYTxdNnX3ocI4VJiNYb562NU62a_3N-bFPN_-HgB62RQ5IarrJngE17MXoi51WivMC6YoORtjhDeu5Hpp2fOidu80z0XWIncwxKeGnFc0d"
                alt="Straumann logo"
              />
              <h2 className="text-primary font-[family-name:var(--font-inter)] font-black text-4xl mb-6">
                A Melhor Tecnologia do Mundo: Straumann®
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                Na OMC, não aceitamos menos que a perfeição. Por isso, somos
                parceiros da Straumann, líder mundial em implantodontia. Os
                implantes Straumann são projetados para durar a vida toda, com
                tecnologia que acelera a cicatrização e garante a estabilidade do
                osso ao redor do implante.
              </p>
              <ul className="space-y-4 mb-10">
                {features.map((f) => (
                  <li key={f.title} className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-secondary mt-1">
                      check_circle
                    </span>
                    <div>
                      <strong className="text-primary block font-[family-name:var(--font-inter)]">
                        {f.title}
                      </strong>
                      <span className="text-on-surface-variant text-sm italic">
                        {f.desc}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
              <a
                href={whatsappUrl(
                  "Olá! Gostaria de verificar se meu caso é compatível com implante Straumann."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-primary-container transition-all inline-block"
              >
                Verificar se meu caso é compatível
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
