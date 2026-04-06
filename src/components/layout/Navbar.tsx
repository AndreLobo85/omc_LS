"use client";

import Link from "next/link";
import { useState } from "react";
import { whatsappUrl } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Início", href: "/" },
  { label: "Especialidades", href: "/#especialidades" },
  { label: "Implantes", href: "/implantes" },
  { label: "Sobre Nós", href: "/sobre" },
  { label: "Depoimentos", href: "/#depoimentos" },
  { label: "Contato", href: "/#contato" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-[0px_10px_40px_rgba(26,28,28,0.06)]">
      <div className="flex justify-between items-center px-6 lg:px-8 py-4 max-w-7xl mx-auto">
        <Link
          href="/"
          className="text-2xl font-black text-blue-950 tracking-tighter font-[family-name:var(--font-inter)]"
        >
          OMC
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-[family-name:var(--font-inter)] font-bold tracking-tight text-blue-800/70 hover:text-yellow-700 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={whatsappUrl("Olá! Gostaria de agendar uma avaliação.")}
            target="_blank"
            className="bg-primary-container text-white px-6 py-2 rounded-lg font-bold hover:bg-secondary transition-all"
          >
            Agendar Avaliação
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className="material-symbols-outlined text-primary text-3xl">
            {open ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-outline-variant/20 px-6 pb-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 font-[family-name:var(--font-inter)] font-bold text-primary border-b border-outline-variant/10"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={whatsappUrl("Olá! Gostaria de agendar uma avaliação.")}
            target="_blank"
            className="block mt-4 text-center bg-secondary text-white px-6 py-3 rounded-lg font-bold"
          >
            Agendar Avaliação
          </Link>
        </div>
      )}
    </nav>
  );
}
