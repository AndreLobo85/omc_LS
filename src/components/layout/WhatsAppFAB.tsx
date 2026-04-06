import { whatsappUrl } from "@/lib/constants";

export function WhatsAppFAB() {
  return (
    <a
      href={whatsappUrl("Olá! Vim pelo site e gostaria de mais informações.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-24 right-6 md:bottom-10 md:right-10 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-40 transition-transform hover:scale-110 active:scale-95 animate-pulse"
    >
      <span
        className="material-symbols-outlined text-4xl"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        chat
      </span>
    </a>
  );
}
