import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { CLINIC, whatsappUrl } from "@/lib/constants";

export function ContactMap() {
  return (
    <section id="contato" className="py-24 bg-surface-container-low px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <AnimateOnScroll direction="left">
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px]">
            <iframe
              allowFullScreen
              className="w-full h-full border-0"
              loading="lazy"
              src={CLINIC.mapsEmbedUrl}
              title="Localização OdontoMedCenter"
            />
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll direction="right">
          <div className="flex flex-col justify-center">
            <h2 className="font-[family-name:var(--font-inter)] text-4xl font-black text-primary mb-8 tracking-tighter">
              Onde Estamos
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <span className="material-symbols-outlined text-secondary text-3xl">
                  location_on
                </span>
                <div>
                  <h4 className="font-bold text-lg text-primary">Endereço</h4>
                  <p className="text-on-surface-variant">
                    {CLINIC.address.street}, {CLINIC.address.neighborhood}
                    <br />
                    {CLINIC.address.city} - {CLINIC.address.state}
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="material-symbols-outlined text-secondary text-3xl">
                  schedule
                </span>
                <div>
                  <h4 className="font-bold text-lg text-primary">
                    Horário de Funcionamento
                  </h4>
                  <p className="text-on-surface-variant">
                    {CLINIC.hours.weekdays}
                    <br />
                    {CLINIC.hours.saturday}
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="material-symbols-outlined text-secondary text-3xl">
                  call
                </span>
                <div>
                  <h4 className="font-bold text-lg text-primary">Contato</h4>
                  <p className="text-on-surface-variant">
                    {CLINIC.phone}
                    <br />
                    {CLINIC.email}
                  </p>
                </div>
              </div>
              <a
                href={whatsappUrl("Olá! Gostaria de agendar uma consulta.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:brightness-110 transition-all shadow-xl"
              >
                <span className="material-symbols-outlined">chat</span>
                Falar pelo WhatsApp
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
