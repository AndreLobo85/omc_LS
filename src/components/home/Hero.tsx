"use client";

import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { whatsappUrl } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzdVxoQUQmDGyUQne4eGZaH6HWgzTgna_TLOS15meYO1iSftiXkaLekr7MZESw7wuyECM5CVaUgeCgZMdEdl1iRfMtcvrfH_1_0CbZT-QQwlLO5DZGsKMmquJJIqnr7qoH0zlHPLQHbTEP-QMpjbMUWBpG_1W-TCH3QXIpZng4jr8liuClNN1iZjZop81VjBjokmHWNI3Kvzmt22YBecEU_zaw9yzX2j3quCz_zU8F29LgtOYCwrlnBXZdkzM1qjDs0TdBJHQFiqCj"
          alt="Sorriso perfeito em close-up com iluminação natural quente"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <AnimateOnScroll direction="left">
          <div className="max-w-2xl text-white">
            <span className="text-secondary-fixed font-bold tracking-widest uppercase text-sm mb-4 block">
              Lagoa Santa / MG
            </span>
            <h1 className="font-[family-name:var(--font-inter)] text-5xl md:text-7xl font-black leading-[1.1] mb-6 tracking-tighter">
              Seu Sorriso Perfeito Começa Aqui
            </h1>
            <p className="text-lg md:text-xl text-blue-100/90 mb-10 font-medium">
              Especialistas em Implantes Dentários em Lagoa Santa — Avaliação
              Gratuita para transformar sua vida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappUrl(
                  "Olá! Gostaria de agendar uma avaliação gratuita."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-xl"
              >
                <span className="material-symbols-outlined">chat</span>
                Agendar pelo WhatsApp
              </a>
              <a
                href="#especialidades"
                className="border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all text-center"
              >
                Conhecer os Tratamentos
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
