export const CLINIC = {
  name: "OdontoMedCenter Lagoa Santa",
  shortName: "OMC",
  phone: "(31) 99999-9999",
  phoneClean: "5531999999999",
  email: "contato@omclagoasanta.com.br",
  instagram: "@omc_ls",
  instagramUrl: "https://instagram.com/omc_ls",
  address: {
    street: "Rua Conde Dolabela, 1025",
    neighborhood: "Várzea",
    city: "Lagoa Santa",
    state: "MG",
    full: "Rua Conde Dolabela, 1025, Várzea, Lagoa Santa - MG",
  },
  hours: {
    weekdays: "Segunda a Sexta: 08:00 às 19:00",
    saturday: "Sábados: 08:00 às 12:00",
  },
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3757.2913164996963!2d-43.8967812239324!3d-19.64687508167816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDM4JzQ4LjgiUyA0M8KwNTMnNDAuNSJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr",
} as const;

export const WHATSAPP_URL = `https://wa.me/${CLINIC.phoneClean}`;

export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${CLINIC.phoneClean}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
