"use client";

import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { CLINIC, whatsappUrl } from "@/lib/constants";
import { type FormEvent, useState } from "react";

export function ConversionForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const text = `Olá! Meu nome é ${name}. Telefone: ${phone}. ${message ? `Mensagem: ${message}` : "Gostaria de agendar uma avaliação gratuita para implante."}`;
    window.open(whatsappUrl(text), "_blank");
  }

  return (
    <section className="py-24 bg-surface-container-low relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <AnimateOnScroll direction="left" className="lg:col-span-5">
          <h2 className="text-primary font-[family-name:var(--font-inter)] font-black text-4xl mb-6">
            Solicitar Avaliação Gratuita
          </h2>
          <p className="text-on-surface-variant text-lg mb-8">
            Dê o primeiro passo para o sorriso dos seus sonhos. Nossa equipe
            entrará em contato para agendar seu horário com um especialista.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-primary">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  chat
                </span>
              </div>
              <div>
                <span className="block text-xs uppercase font-bold text-on-surface-variant">
                  WhatsApp
                </span>
                <span className="font-bold">{CLINIC.phone}</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-primary">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  location_on
                </span>
              </div>
              <div>
                <span className="block text-xs uppercase font-bold text-on-surface-variant">
                  Endereço
                </span>
                <span className="font-bold">{CLINIC.address.full}</span>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll direction="right" className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-10 rounded-[32px] shadow-2xl space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-primary mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-primary mb-2">
                  Telefone / WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary transition-all"
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-primary mb-2">
                Mensagem (Opcional)
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary transition-all"
                placeholder="Conte-nos brevemente seu objetivo..."
                rows={4}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-secondary text-white font-[family-name:var(--font-inter)] font-black py-4 rounded-xl shadow-xl hover:bg-secondary-fixed-dim transition-all text-lg uppercase tracking-tight"
            >
              Enviar Solicitação
            </button>
            <p className="text-[10px] text-center text-on-surface-variant/60">
              Ao enviar, você concorda com nossa política de privacidade e
              tratamento de dados.
            </p>
          </form>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
