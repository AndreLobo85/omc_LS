import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const testimonials = [
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCb4RLMX451pGG_oZmv78-OQ0u0EAWhQjWONlqcteeU4XD8RpnNg47A4x2YMm4qpO53YgR1M4GIx5KYOedfpQBX-1rFK5Wxh6cDAya70alw2CK5siCnx_5ZHpRhkRY-fPLShfXz39NAWmPeFWm05o2DRcwkQUqOGnWUfaNHd3yU4ewmyjusjh274MEm_xpzD0lCUtpG3C2mhLlVgnzcD2yWK4kX9kCYrb9_3QkDfSw9k7s8xmpDB5S83x9KPteu3eeKp8IBDjMLWOgU",
    quote: "Minha vida mudou após o implante em 24h!",
    name: "Maria Silva",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtQib4-KvS1J_6uUNxkPUQjUlxjGddWlAr3J66o7y32JLvybUdqlhkwr0G31dyROPyvgu4GNtsXNjsETI0TTKLyad1UNqJNpHDWFofX9Ckg7g1aQuh3G_IdmkjdhRO7GkAl1Fow2V9yc99noOdXAVlmG5McFf6XIyoXoyDrMao8vvihoTKIt-NzHDSLR1PGgrNa2Fn8Brp6h0luI_atPqV5Z7TsELCywRkhpNGVFRoiwQI-Vwp8dDlL3LzCiUwiFY0fY52Vxyh8RSF",
    quote: "O atendimento é excepcional, me senti em casa.",
    name: "José Oliveira",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtAYKEhDERSGV3WKXmuaNlmuTAAtFa82YsbMBBL6wqhD_jBMaKr3JMZIghM0n21l-ye5aMLHD499NkHBQedN_OOMvVmW8ViJcNTVLV81nFPetd5Wujc-xcZtcdCQ0k4WJTTuGAPe43SgvVe8rbROVjZwcGsU2DcpX6nby2LFuA8TdYYqFFm2eUpBeHObXqiLhsgB6swqSyzs85MArBQ2CTjFLr3mMhbURRreRvNWHdVjUiBuscP2KVZTqEVjE0DLpkPhb5FeDhxUUY",
    quote: "Perdi o medo de dentista graças à equipe da OMC.",
    name: "Ana Paula",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
      <AnimateOnScroll>
        <h2 className="font-[family-name:var(--font-inter)] text-4xl font-black text-primary mb-12 tracking-tighter text-center">
          O Que Nossos Pacientes Dizem
        </h2>
      </AnimateOnScroll>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <AnimateOnScroll key={t.name} delay={i * 0.15}>
            <div className="relative group aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover"
                src={t.img}
                alt={`Depoimento de ${t.name}`}
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity group-hover:bg-black/40">
                <span
                  className="material-symbols-outlined text-white text-6xl cursor-pointer"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  play_circle
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-bold italic">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-sm opacity-80">- {t.name}</p>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
