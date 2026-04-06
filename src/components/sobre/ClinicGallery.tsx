import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function ClinicGallery() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-inter)] font-black text-primary tracking-tighter">
                Ambiente Exclusivo
              </h2>
              <p className="mt-4 text-on-surface-variant text-lg">
                Estrutura moderna projetada para oferecer uma experiência
                relaxante e segura.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[700px]">
          <AnimateOnScroll
            direction="left"
            className="md:col-span-7 rounded-3xl overflow-hidden editorial-shadow group relative min-h-[300px]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCa_WSMZJPSpS0OL8nsN_kKhJsZiNXH2aqorU5xxD5Bakl9P7S0lGB1Xk6pCEQ8KSZg-lZg7QNtMmPS9-8lVEaXX53scN_c0GXikaYfMNB6LBObaUVpumjtp8-_3rUNZ7Wj3GpF5JD8bM_2VTvu6o0uy0qKZD97GUw5U4P8eO_kPZkvjEoq1Ize11Tb3wOMUwl5gbgLskmeB_v9E5kJxMoT1A0TiaW4Gcpr6CLRujPYFEvgCFCNyI0RLqOCNZcTdCNpcQxYXLuAKx1G"
              alt="Sala de procedimentos ultramoderna"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
              <span className="text-white font-[family-name:var(--font-inter)] font-bold text-xl uppercase tracking-widest">
                Sala de Procedimentos
              </span>
            </div>
          </AnimateOnScroll>
          <div className="md:col-span-5 grid grid-rows-2 gap-6">
            <AnimateOnScroll
              direction="right"
              className="rounded-3xl overflow-hidden editorial-shadow group relative min-h-[200px]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzA0JyCYcZuwzsn6oTSKUdGWiveJGWEmkUVwlw-loK6gB5mKyLxFEvUzfBqhWB6epmYESZFnyzQ04yUe_W--eIQdHyfa6XNjjgtuCwx8pBabxZ0k9mWNjK3HUJbM1mAck163zf1ctqCdINsn5NehWa0Nv0LCFowCrajCxkW_iSWIRK25Kb86zdMKRDmRs2i59xLHFpLFSSDiSIz_N8C6HkSNcqJS6JT4-xTa4ZmFqawQRjcdSwKg2Iurr2SHEmQ8XWTPDaHKuy4xpr"
                alt="Sala de espera elegante"
              />
            </AnimateOnScroll>
            <AnimateOnScroll
              direction="right"
              delay={0.15}
              className="rounded-3xl overflow-hidden editorial-shadow group relative min-h-[200px]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8RG_666bmYFO_MbyDO4amngtNm-6EAfsMJ_686MyO62pH307zizoo2X0UqvWtVvxq-wp7vv0yhxbwv3Nat-qA8sYcMSP2KVkq8uc_KDLznrrwNy9xtHVeEc0kgyG14cyHzwjGyCZdvtrVb6Z-Hk1u4OAZDVAn3C1yAc0FmzU1oVYx4VUXXnIx7g6I0KmoHrQoMvTT3JPPe2rv4PIftjVZxkepS1LiZl0rGfDK4WPJkkh02ys6DdF4XoII8_QvmjIE8xq196emLAM3"
                alt="Equipamentos esterilizados"
              />
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
