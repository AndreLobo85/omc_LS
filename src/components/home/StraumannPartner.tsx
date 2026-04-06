import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { whatsappUrl } from "@/lib/constants";

export function StraumannPartner() {
  return (
    <section className="py-24 px-6 lg:px-8">
      <AnimateOnScroll>
        <div className="max-w-7xl mx-auto bg-primary-container rounded-[3rem] overflow-hidden flex flex-col lg:flex-row items-center shadow-2xl">
          <div className="p-12 lg:p-20 lg:w-1/2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="h-10 mb-8 brightness-0 invert opacity-50"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFrsEgn1Bxs_zCYdfXmVpFJcRUjyYwCIYRzD60jGelZqhAiI-i6tUesDC9RnLGXHO4vihLeIdxCOs-cf_r6WU_mqm5KA4sj3s91LiTe7x2gQy3hBMsePSIxVquesPgId6hbuCSC5n2gIBgJew08StqBMubU_9Ir4he3zliigmQamzCt28SNuK-Lgc_YRSouPnQzkokf5vPfRqPYLHyXWgUyHSr-uvXzuTUMMaFYNS-toSMweanrQl4jlNkvRomTbS6i3AVaNrN4lB4"
              alt="Straumann logo"
            />
            <h2 className="font-[family-name:var(--font-inter)] text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter leading-tight">
              Implantes Straumann: O Padrão Ouro da Implantodontia
            </h2>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-4 text-blue-100">
                <span className="material-symbols-outlined text-secondary-fixed">
                  check_circle
                </span>
                Cicatrização rápida e previsível
              </li>
              <li className="flex items-center gap-4 text-blue-100">
                <span className="material-symbols-outlined text-secondary-fixed">
                  check_circle
                </span>
                Líder mundial em tecnologia dental
              </li>
              <li className="flex items-center gap-4 text-blue-100">
                <span className="material-symbols-outlined text-secondary-fixed">
                  check_circle
                </span>
                Garantia vitalícia internacional
              </li>
            </ul>
            <a
              href={whatsappUrl(
                "Olá! Gostaria de um orçamento para implante Straumann."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-secondary text-white px-10 py-4 rounded-xl font-bold hover:bg-secondary-fixed-dim transition-all"
            >
              Solicitar Orçamento Straumann
            </a>
          </div>
          <div className="lg:w-1/2 h-full min-h-[400px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2Sm7C6T68wfk2xCvcez9HLI0JRWAuK4mvLRIYkSBG2MWMVbcbWA7SpJyI7eFhSikTHDtnCnZbu9gqxaRkkIHxu_1UVJUQAzGCnqC9znmNsfF9V5iMpERZcCh1wnghze_y8CRY2KucXNAgbiZQ9YcWUvboHSO8QcdKvwwAxZvKH6cg7zqvyzX6VuNIh-Mjn37sSEKjYu-Bg1Htv_i3FWJXhUsqrIDNYTTfZbKqRELHYMrrOYKpKlNHrKshDEl6maDD0A8e6dboBkhn"
              alt="Simulação 3D de implante dentário"
            />
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
