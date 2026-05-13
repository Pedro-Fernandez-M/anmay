"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { MessageCircle, Instagram, MapPin, Clock } from "lucide-react";
import { WHATSAPP_URL, INSTAGRAM_URL, LOCATION } from "@/lib/config";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contacto" className="py-24 md:py-36 bg-[#08080E] relative overflow-hidden">
      {/* Bg orb */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[700px] h-[700px] rounded-full bg-[#7B2FBE]/8 blur-3xl" />
      </div>

      <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="gradient-text text-xs font-bold uppercase tracking-[0.3em] mb-3"
          >
            Hablemos
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            Agenda tu Cita
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/45 text-base md:text-lg max-w-xl mx-auto"
          >
            Contáctame directamente por WhatsApp para consultas, precios y
            reservas. Respondo a la brevedad.
          </motion.p>
        </div>

        {/* Main CTA card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="gradient-border-card rounded-3xl p-10 md:p-16 text-center mb-6"
        >
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative w-24 h-24">
              <Image
                src="/images/logo-dark.png"
                alt="ANMAY"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <h3 className="text-white text-2xl md:text-3xl font-black mb-2">
            ¿Lista para transformarte?
          </h3>
          <p className="text-white/45 mb-10 text-base md:text-lg">
            Escríbeme y coordinamos el tratamiento ideal para ti
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-bg text-white px-10 py-5 rounded-full font-black text-lg md:text-xl inline-flex items-center gap-4 hover:opacity-90 hover:scale-[1.04] transition-all duration-200 shadow-2xl shadow-purple-900/50"
          >
            <MessageCircle size={26} />
            Escribir por WhatsApp
          </a>

          <p className="text-white/25 text-xs mt-6 tracking-wider">
            Mensaje automático: "Hola Anmay, quiero consultar por un tratamiento 😊"
          </p>
        </motion.div>

        {/* Info cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5 flex items-center gap-4 hover:bg-white/[0.06] hover:border-white/[0.14] transition-all duration-300 group"
          >
            <div className="w-11 h-11 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
              <Instagram className="text-white" size={19} />
            </div>
            <div>
              <p className="text-white/35 text-[10px] uppercase tracking-wider">Instagram</p>
              <p className="text-white font-semibold text-sm group-hover:gradient-text transition-all">
                @anmay_vald
              </p>
            </div>
          </a>

          <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5 flex items-center gap-4">
            <div className="w-11 h-11 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
              <MapPin className="text-white" size={19} />
            </div>
            <div>
              <p className="text-white/35 text-[10px] uppercase tracking-wider">Ubicación</p>
              <p className="text-white font-semibold text-sm">{LOCATION}</p>
            </div>
          </div>

          <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5 flex items-center gap-4">
            <div className="w-11 h-11 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
              <Clock className="text-white" size={19} />
            </div>
            <div>
              <p className="text-white/35 text-[10px] uppercase tracking-wider">Horario</p>
              <p className="text-white font-semibold text-sm">Lunes a Sábado</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
