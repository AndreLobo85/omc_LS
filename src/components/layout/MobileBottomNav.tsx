import Link from "next/link";
import { whatsappUrl } from "@/lib/constants";

const items = [
  { icon: "home", label: "Início", href: "/" },
  {
    icon: "calendar_month",
    label: "Agendar",
    href: whatsappUrl("Olá! Gostaria de agendar uma consulta."),
    external: true,
  },
  {
    icon: "chat",
    label: "WhatsApp",
    href: whatsappUrl(),
    external: true,
  },
  { icon: "location_on", label: "Local", href: "/#contato" },
];

export function MobileBottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3 bg-white/90 backdrop-blur-xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)] rounded-t-3xl border-t border-white/20 z-50">
      {items.map((item) =>
        item.external ? (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center text-blue-900/60"
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span className="text-[11px] font-semibold uppercase tracking-wider">
              {item.label}
            </span>
          </a>
        ) : (
          <Link
            key={item.label}
            href={item.href}
            className="flex flex-col items-center justify-center text-blue-900/60"
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span className="text-[11px] font-semibold uppercase tracking-wider">
              {item.label}
            </span>
          </Link>
        )
      )}
    </nav>
  );
}
