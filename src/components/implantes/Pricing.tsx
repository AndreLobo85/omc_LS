import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function Pricing() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="bg-white rounded-[48px] p-10 lg:p-20 shadow-2xl overflow-hidden relative border border-secondary/10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-primary font-[family-name:var(--font-inter)] font-black text-4xl mb-6">
                  Invista no seu maior patrimônio: Você.
                </h2>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                  Na OMC Lagoa Santa, acreditamos que um sorriso saudável deve
                  ser acessível. Por isso, oferecemos planos personalizados e
                  condições que cabem no seu orçamento.
                </p>
                <div className="bg-surface-container-low p-8 rounded-3xl border-l-8 border-secondary mb-8">
                  <h3 className="text-primary font-[family-name:var(--font-inter)] font-bold text-2xl mb-2">
                    Parcele seu sorriso em até 24x
                  </h3>
                  <p className="text-on-surface-variant">
                    Trabalhamos com parcelamento facilitado no cartão de crédito
                    e opções exclusivas via financiamento odontológico.
                  </p>
                </div>
                <div className="flex gap-4 flex-wrap">
                  {["Boleto", "Cartão de Crédito", "PIX com Desconto"].map(
                    (m) => (
                      <div
                        key={m}
                        className="bg-surface-container-high px-4 py-2 rounded-full text-primary font-bold text-xs uppercase tracking-tighter"
                      >
                        {m}
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="rounded-[32px] shadow-xl w-full h-[400px] object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnSHnE7uJt4fhZrT1WlxskdaA7TEanusP7ixA4pebleeCy7vOkMYBbfw6JPPOIO6jNCcKNCngxk1VwxW7BuKFp3OacISXpeL06MH-G59kUoJlaU-zPlnOxroqkPq5YdNFFH8NKOthr6jAudse0jb6EwEKaIuFYFxqyhgfANN1aqW4ENwEInUcbX5uyI3IDpWqFmBkTgGeTNVnpm-11xE_JIIFQVhHdN1mVrbWCC-CnKIk13b7ufRVEg2aMAvHBrK1e7Ct8E5pfkNgR"
                  alt="Médico explicando plano de financiamento"
                />
                <div className="absolute -bottom-6 -left-6 bg-secondary text-white p-10 rounded-3xl shadow-2xl">
                  <div className="text-center">
                    <span className="block text-sm uppercase tracking-widest font-bold mb-1">
                      Parcelas a partir de
                    </span>
                    <span className="block font-[family-name:var(--font-inter)] font-black text-5xl">
                      R$ 199*
                    </span>
                    <span className="block text-[10px] opacity-70 mt-2">
                      *Consulte condições na avaliação presencial
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
