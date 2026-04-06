import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const cases = [
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRPugexTpYYhG4uIelI7Ot9mLioXSiDNyMtTklONh4tqqRo1ljU3mdmhXmOvreoV9RVW3crWpTdvntJ7OfwlyKVudbw4REbnJTIinpVqYT9JTJvkQPak25o6mg2nz2fvZgMCXrwFY02j9R00DBgBUUMjYc7fpmHkNzyiQKMMwABj-0Dv1UFHHIFzg5YOkWFVT-a0fMwKMwb6p-VZ3iHRFD3xhTcAKyxy7DCJfr3y84i3LnR7X6Ejlrl0qbsCOlNSz_sb0KfI5iiG1Q",
    alt: "Antes e depois de implantes completos",
    label: "CASO 01: IMPLANTES COMPLETOS",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1ZHG8Lcu7I-OufVLW8ajsipdlhscKynjcUowCgDVDVF1p2rcOBnUXvg6Db0JOpjKq5t9E70s9NjBQzIcNcSaegXdhpan93BA4BbpvP2zpayTj1crrZ_iERzS0Whcnh6S9Lq6_3xx6Qtvjp4ZIAgH4xdvZ1wSM7tu-hDiYgss-OlR4Xg0_Dzao_YCfC8fOsJSXtaA9_mnVcELXumb8R1lkcRs_1GQnN8otvkxTSYyKoO6aA35BuzYmzDPm53eWDxFDJdPSncUvnjjR",
    alt: "Antes e depois de lentes de contato dental",
    label: "CASO 02: LENTES DE CONTATO",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOOfLqoHX9fElZo7iVu4AfOCHtO4fwiRjQ_DLcELH7Fvgy-rUiygQhpqj7pjpDHOV1vGm4xpYaUyjp9z6Fal2sUCJK-fq-_gZi3185UPVsjSh5Sga33gLiKX-rqXRu0z16CPXJ5Wrl0V1b6DlUbcMT_ZKrqTnQD97RrbFcZPhhWpAcuBRq57f06G-LKxRXbj4pq_1lc2kmplZRkw2keL1tS636oHDM6vu5wBHG3RZHuHk4nK1K7Y1wpcowgxoBgOBXFse6EP4kKHYY",
    alt: "Antes e depois de reabilitação oral",
    label: "CASO 03: REABILITAÇÃO ORAL",
  },
];

export function BeforeAfter() {
  return (
    <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
      <AnimateOnScroll className="text-center mb-16">
        <h2 className="font-[family-name:var(--font-inter)] text-4xl md:text-5xl font-black text-primary mb-4 tracking-tighter">
          Transformações Reais
        </h2>
        <p className="text-on-surface-variant">
          Conheça o impacto real dos nossos tratamentos na vida dos nossos
          pacientes.
        </p>
      </AnimateOnScroll>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cases.map((c, i) => (
          <AnimateOnScroll key={c.label} delay={i * 0.15}>
            <div className="group overflow-hidden rounded-3xl shadow-lg relative aspect-square">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={c.img}
                alt={c.alt}
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-bold text-primary">
                {c.label}
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
      <div className="mt-12 text-center">
        <button className="bg-primary text-white px-10 py-4 rounded-xl font-bold hover:bg-secondary transition-all shadow-lg">
          Ver Mais Resultados
        </button>
      </div>
    </section>
  );
}
