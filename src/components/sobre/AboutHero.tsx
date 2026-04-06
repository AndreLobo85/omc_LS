import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function AboutHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-24">
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="w-full h-full object-cover opacity-20"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUXU4tDoH1tRPLQR3m3IBlwkggco6Zg8qvYGuYhXFXvwpSlHUThjWyeegRhRMvpAy38_hItHDC7Z77eFkwwWR5H8fNz_UBECXrqQHvfDegPv1LhrOfrOGc6VoUtp77Jkcuff6YiAQnPKxv7w1HjAWaC0XGzTkyQVYpOoq3j79VwxvsG7SI1IwuEYZtpTFf4HktZHhWhbzCKsuXGGu3pjJPt2imV76_L7sbHQMfa9reiMs_6wyxJspxAvG38CU8jaQjZkt_IcxKqsly"
          alt="Interior moderno da clínica OdontoMedCenter"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
      </div>
      <div className="container max-w-7xl mx-auto px-6 lg:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <AnimateOnScroll direction="left">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-widest">
              Nossa História
            </div>
            <h1 className="text-6xl md:text-8xl font-[family-name:var(--font-inter)] font-black text-primary leading-tight tracking-tighter">
              Sobre a <br />
              <span className="text-secondary italic">OdontoMedCenter</span>
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed max-w-xl">
              Nascemos em Lagoa Santa com o propósito de transformar o conceito
              de atendimento odontológico. Unimos a precisão clínica à
              sofisticação de um ambiente acolhedor, onde cada detalhe é
              planejado para o seu conforto.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <h4 className="font-[family-name:var(--font-inter)] font-bold text-primary text-lg">
                  Missão
                </h4>
                <p className="text-sm text-on-surface-variant">
                  Proporcionar sorrisos saudáveis através de tecnologia de ponta
                  e cuidado humanizado.
                </p>
              </div>
              <div>
                <h4 className="font-[family-name:var(--font-inter)] font-bold text-primary text-lg">
                  Valores
                </h4>
                <p className="text-sm text-on-surface-variant">
                  Ética, precisão técnica, transparência e acolhimento em cada
                  etapa da jornada.
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll direction="right" className="relative hidden md:block">
          <div className="aspect-[4/5] bg-surface-container-low rounded-2xl overflow-hidden editorial-shadow transform rotate-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLpXU6QWxBHZ5bgJ7hZgKTIEBZCPKh7aLGD5G5WwLyUqgLRQj5JgqFa25TRkYRGEV8hVmum3bPRrkULu4Tk66jpXQaOd37I7Lj9IIwUYncoSSG_ZB_CvCVMHggwnYgHFeA4kaX93s6aXoRbyCf-S676-H_s3IzW8EETGGgGGyt1GAfA40U_Tl1gme41BJ0G-GjBj4c-VwNnY9PFsBzu7WIpLYw9ey8Rnkeg_9-zrOswscFzodJKm5hbxZAm04arhN0mCdxe6WoO491"
              alt="Dentista profissional sorrindo"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 p-8 bg-primary rounded-2xl editorial-shadow max-w-[280px]">
            <p className="text-white font-[family-name:var(--font-inter)] font-bold text-3xl italic leading-none">
              15+
            </p>
            <p className="text-on-primary-container text-sm mt-2">
              Anos transformando sorrisos em Lagoa Santa
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
