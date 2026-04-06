"use client";

import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { whatsappUrl } from "@/lib/constants";

export function ImplantesHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <AnimateOnScroll direction="left" className="lg:col-span-6 z-10">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">
            Excelência em Implantodontia
          </span>
          <h1 className="text-primary font-[family-name:var(--font-inter)] font-black text-5xl lg:text-7xl leading-[1.1] mb-8 tracking-tighter">
            Implante Dentário em{" "}
            <span className="text-secondary">Lagoa Santa</span>
          </h1>
          <p className="text-on-surface-variant text-lg max-w-xl mb-10 leading-relaxed">
            Recupere sua autoestima e a funcionalidade do seu sorriso com
            tecnologia de ponta e o conforto que você merece. O cuidado clínico
            que você busca, com o resultado estético que você sonha.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={whatsappUrl(
                "Olá! Quero agendar meu implante dentário."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-white px-8 py-4 rounded-xl font-bold shadow-xl hover:bg-secondary-fixed-dim transition-all"
            >
              Quero agendar meu implante
            </a>
            <div className="flex items-center gap-3 px-6 py-4 bg-surface-container-low rounded-xl">
              <span
                className="material-symbols-outlined text-secondary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
              <span className="text-primary font-bold text-sm">
                98.8% de Sucesso Clínico
              </span>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll
          direction="right"
          className="lg:col-span-6 relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 flex">
            <div className="w-1/2 h-full overflow-hidden relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-60"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8R7NxCh0r99fR4oaoiXoajbTZbfXmyc6wVPMQ5P3r__QEW_2vdlyMAM8a3cZX9RiSLKB80_yN26UJqz7fAhGHVHscLa9ZGvgZuGo3w6QVK00Zwe761yw8qBqxpQMbBiIfcp6cxkdelNGVRUo0wUfSeOHp7DqoiD2uXoooiaYylWTQudLpF-n5rFv7dWcqhi_za8bIXSCtu0WE_NYXMTLByc9crLiNRrkzmJSH8dndW5LSatRg_R6yaMK5o8vLSmI68cGzJ3OPjhfq"
                alt="Antes do implante dentário"
              />
              <div className="absolute inset-0 bg-primary/20" />
              <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded text-white text-xs font-bold uppercase tracking-widest">
                Antes
              </div>
            </div>
            <div className="w-1/2 h-full overflow-hidden relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAG5KWQCDg13A6_sRdouqMN4ZJlvlNGkyyJVwOA-Lc6w1gb5kE-g-ZiIO5JDPzIUgB5kmc70yQM8eZBiDi-y2iSYZGIDfr-yDHfvms5a4rpIBLUJxQ3r-hS-n4r5Uqg0dx0G-d7dTiOx01FpzNu08E_nwomQd7GTTfq0JFA222zY_dEZ62Ab_O5lPRJSwcNLCxAU6PLiCR5hOcqlcvjgQdyQsmZ6HbE6-12_hLnJdJh625XZ7ZUc9zMPCx6jBZrHzkKtRUqVIbnv1XC"
                alt="Depois do implante dentário"
              />
              <div className="absolute top-4 right-4 bg-secondary/80 backdrop-blur-md px-3 py-1 rounded text-white text-xs font-bold uppercase tracking-widest">
                Depois
              </div>
            </div>
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white/50 backdrop-blur-sm z-20 shadow-xl">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-2xl flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">
                  unfold_more
                </span>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
