"use client";

import { Counter } from "@/components/ui/Counter";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function SocialProof() {
  return (
    <section className="bg-primary py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
        <AnimateOnScroll>
          <div>
            <h3 className="text-secondary-fixed text-4xl md:text-5xl font-black mb-2 tracking-tighter">
              <Counter target={500} suffix="+" />
            </h3>
            <p className="text-blue-100/70 text-sm font-bold uppercase tracking-widest">
              Implantes Realizados
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.1}>
          <div>
            <h3 className="text-secondary-fixed text-4xl md:text-5xl font-black mb-2 tracking-tighter">
              4.9★
            </h3>
            <p className="text-blue-100/70 text-sm font-bold uppercase tracking-widest">
              No Google Reviews
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.2}>
          <div>
            <h3 className="text-secondary-fixed text-4xl md:text-5xl font-black mb-2 tracking-tighter">
              <Counter target={3000} suffix="+" />
            </h3>
            <p className="text-blue-100/70 text-sm font-bold uppercase tracking-widest">
              Pacientes Satisfeitos
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.3}>
          <div>
            <h3 className="text-secondary-fixed text-lg md:text-xl font-black mb-2 leading-tight">
              Única com Straumann
            </h3>
            <p className="text-blue-100/70 text-sm font-bold uppercase tracking-widest">
              No Vetor Norte
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
