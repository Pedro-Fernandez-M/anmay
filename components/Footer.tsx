"use client";

import Image from "next/image";
import { Instagram, MessageCircle, Heart } from "lucide-react";
import { WHATSAPP_URL, INSTAGRAM_URL, BASE_PATH } from "@/lib/config";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Sobre Mí", href: "#sobre-mi" },
  { label: "Galería", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-black border-t border-white/[0.05] pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 pb-10 border-b border-white/[0.05]">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="relative w-12 h-12">
              <Image
                src={`${BASE_PATH}/images/logo-icon.png`}
                alt="ANMAY"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-white font-black tracking-[0.2em] text-sm">ANMAY</p>
              <p className="text-white/25 text-[10px] tracking-[0.15em] uppercase">
                Salón & Boutique
              </p>
            </div>
            <p className="text-white/25 text-xs max-w-[200px] text-center md:text-left leading-relaxed">
              Cosmetología y Estética Integral en Valdivia, Chile.
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-white/20 text-[10px] uppercase tracking-wider mb-2">Navegación</p>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className="text-white/40 hover:text-white text-sm transition-colors py-0.5"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <p className="text-white/20 text-[10px] uppercase tracking-wider mb-1">Contacto</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-bg text-white px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white text-sm flex items-center gap-2 transition-colors"
            >
              <Instagram size={15} />
              @anmay_vald
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/15 text-xs text-center sm:text-left">
            © {year} ANMAY Salón & Boutique · Anjela R. Calderón Parra · Todos los derechos reservados
          </p>
          <p className="text-white/15 text-xs flex items-center gap-1">
            Hecho con <Heart size={11} className="text-[#E91E8C] fill-[#E91E8C]" /> en Valdivia, Chile
          </p>
        </div>
      </div>
    </footer>
  );
}
