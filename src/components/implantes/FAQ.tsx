import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const faqs = [
  {
    q: "Dói para colocar o implante?",
    a: "Não! O procedimento é realizado sob anestesia local potente. Na OMC, também oferecemos a opção de sedação consciente, garantindo que o paciente fique totalmente relaxado e não sinta absolutamente nada durante a cirurgia.",
  },
  {
    q: "Quanto tempo dura um implante?",
    a: "Os implantes são projetados para serem uma solução definitiva. Com higiene adequada e visitas regulares ao dentista, eles podem durar a vida toda, especialmente utilizando marcas premium como a Straumann.",
  },
  {
    q: "Existe rejeição do implante?",
    a: 'Não existe o termo "rejeição" para o titânio, pois ele é um material biocompatível. O que pode ocorrer é a não integração do implante ao osso por infecção ou tabagismo, mas nossas taxas de sucesso superam os 98%.',
  },
  {
    q: "Vou ficar sem dentes durante o tratamento?",
    a: "De forma alguma. Dependendo do caso, podemos realizar a carga imediata (dente no mesmo dia) ou providenciar próteses provisórias estéticas para que você nunca fique sem sorrir.",
  },
  {
    q: "Qualquer pessoa pode colocar implantes?",
    a: "A maioria dos adultos saudáveis pode. Condições como diabetes e hipertensão devem estar controladas. Faremos uma avaliação completa da sua saúde sistêmica antes de iniciar.",
  },
  {
    q: "E se eu não tiver osso suficiente?",
    a: "Realizamos procedimentos de enxerto ósseo avançado e técnicas de levantamento de seio maxilar para reconstruir a estrutura necessária e permitir a colocação segura dos implantes.",
  },
  {
    q: "Quanto tempo demora a recuperação?",
    a: "A recuperação inicial (pós-operatório) leva de 3 a 7 dias com cuidados leves. A cicatrização total do osso varia de 4 a 12 semanas com as tecnologias modernas que utilizamos.",
  },
  {
    q: "Implante importado é realmente melhor?",
    a: "Marcas como a Straumann possuem décadas de pesquisas científicas e tecnologias de superfície patenteadas que garantem maior previsibilidade, rapidez e durabilidade ao tratamento.",
  },
];

export function FAQ() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-primary font-[family-name:var(--font-inter)] font-black text-4xl mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-on-surface-variant">
            Esclarecemos os principais pontos sobre o seu futuro sorriso.
          </p>
        </AnimateOnScroll>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <AnimateOnScroll key={i} delay={i * 0.05}>
              <details className="group bg-surface-container-low rounded-2xl p-6 cursor-pointer border border-transparent hover:border-secondary/20 transition-all">
                <summary className="flex justify-between items-center font-[family-name:var(--font-inter)] font-bold text-primary list-none">
                  {faq.q}
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform ml-4 shrink-0">
                    expand_more
                  </span>
                </summary>
                <p className="mt-4 text-on-surface-variant text-sm leading-relaxed">
                  {faq.a}
                </p>
              </details>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
