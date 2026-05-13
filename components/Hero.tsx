"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, ChevronDown, MapPin } from "lucide-react";
import { WHATSAPP_URL, BASE_PATH } from "@/lib/config";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#08080E] overflow-hidden"
    >
      {/* ── Background orbs ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-[#4361EE]/8 blur-[140px]" />
        <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#E91E8C]/8 blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#7B2FBE]/8 blur-[120px]" />
      </div>

      {/* ── Subtle grid ── */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto pt-24 pb-16">

        {/* Logo hero */}
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
          className="mb-10"
        >
          <div className="relative w-44 h-44 md:w-56 md:h-56">
            {/* Glow ring */}
            <div className="absolute inset-[-8px] rounded-3xl gradient-bg opacity-20 blur-xl" />
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <Image
                src={`${BASE_PATH}/images/logo-hero.png`}
                alt="ANMAY Salón & Boutique"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mb-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
        >
          <MapPin size={12} className="text-[#E91E8C]" />
          <span className="text-white/60 text-xs tracking-widest uppercase">
            Valdivia, Chile
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-white font-black tracking-[-0.02em] leading-none mb-1"
          style={{ fontSize: "clamp(3.5rem, 10vw, 7rem)" }}
        >
          ANMAY
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.42 }}
          className="gradient-text font-semibold tracking-[0.3em] uppercase text-sm md:text-base mb-8"
        >
          Salón & Boutique
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="w-20 h-[1px] gradient-bg mb-8 origin-left"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.52 }}
          className="text-white/40 text-[11px] uppercase tracking-[0.3em] mb-5"
        >
          Cosmetología · Estética Integral
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-white/65 text-lg md:text-xl max-w-lg mb-12 leading-relaxed"
        >
          Tu bienestar es nuestro arte.{" "}
          <span className="text-white/85 font-medium">
            Tratamientos premium que revelan tu mejor versión.
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-bg text-white px-8 py-4 rounded-full font-bold text-base flex items-center gap-3 hover:opacity-90 hover:scale-[1.04] transition-all duration-200 shadow-2xl shadow-purple-900/50 w-full sm:w-auto justify-center"
          >
            <MessageCircle size={20} />
            Reservar por WhatsApp
          </a>
          <button
            onClick={() => scrollTo("#servicios")}
            className="text-white/55 hover:text-white/90 font-medium flex items-center gap-2 transition-colors text-sm group"
          >
            Ver Servicios
            <ChevronDown
              size={17}
              className="group-hover:translate-y-1 transition-transform"
            />
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.95 }}
          className="mt-16 flex items-center gap-8 sm:gap-14"
        >
          {[
            { value: "5+", label: "Años de exp." },
            { value: "500+", label: "Clientas" },
            { value: "100%", label: "Dedicación" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="gradient-text font-black text-2xl md:text-3xl">{stat.value}</p>
              <p className="text-white/35 text-xs uppercase tracking-wider mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-9 rounded-full border border-white/15 flex items-start justify-center pt-1.5"
        >
          <div className="w-0.5 h-2 rounded-full bg-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
