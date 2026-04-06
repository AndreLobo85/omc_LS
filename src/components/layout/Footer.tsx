import Image from "next/image";
import Link from "next/link";
import { CLINIC } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <div className="mb-6">
            <Image
              src="/logo-omc.png"
              alt="OdontoMedCenter"
              width={180}
              height={48}
              className="h-10 w-auto brightness-0 invert"
            />
          </div>
          <p className="text-sm leading-relaxed text-blue-100/60">
            Sua clínica odontológica de referência em Lagoa Santa. Transformando
            vidas através do sorriso.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-secondary-fixed uppercase text-xs tracking-widest">
            Navegação
          </h4>
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-blue-100/80 hover:text-white transition-colors"
            >
              Início
            </Link>
            <Link
              href="/#especialidades"
              className="text-blue-100/80 hover:text-white transition-colors"
            >
              Especialidades
            </Link>
            <Link
              href="/implantes"
              className="text-blue-100/80 hover:text-white transition-colors"
            >
              Implantes
            </Link>
            <Link
              href="/sobre"
              className="text-blue-100/80 hover:text-white transition-colors"
            >
              Sobre Nós
            </Link>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-secondary-fixed uppercase text-xs tracking-widest">
            Legal
          </h4>
          <div className="flex flex-col gap-4">
            <Link
              href="#"
              className="text-blue-100/80 hover:text-white transition-colors"
            >
              Privacidade
            </Link>
            <Link
              href="#"
              className="text-blue-100/80 hover:text-white transition-colors"
            >
              Termos de Uso
            </Link>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-secondary-fixed uppercase text-xs tracking-widest">
            Contato
          </h4>
          <div className="flex flex-col gap-4 text-blue-100/80 text-sm">
            <p>{CLINIC.address.full}</p>
            <p>{CLINIC.phone}</p>
            <p>{CLINIC.email}</p>
            <p>{CLINIC.hours.weekdays}</p>
            <p>{CLINIC.hours.saturday}</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center">
        <p className="text-sm text-blue-100/40">
          &copy; {new Date().getFullYear()} {CLINIC.name}. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
