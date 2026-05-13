"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Sparkles, Leaf, Wind, Scissors, Droplets,
  Star, Eye, ShoppingBag, MessageCircle,
} from "lucide-react";
import { WHATSAPP_URL } from "@/lib/config";

const services = [
  {
    icon: Sparkles,
    title: "Limpieza Facial Profunda",
    description:
      "Elimina impurezas, puntos negros y células muertas. Deja tu piel luminosa, fresca y radiante desde la primera sesión.",
    gradient: "from-[#4361EE] to-[#7B2FBE]",
  },
  {
    icon: Leaf,
    title: "Tratamientos Faciales",
    description:
      "Protocolos personalizados con activos premium para hidratar, iluminar, tensar o regenerar tu piel según su tipo.",
    gradient: "from-[#7B2FBE] to-[#E91E8C]",
  },
  {
    icon: Wind,
    title: "Masajes Relajantes",
    description:
      "Sesiones terapéuticas que alivian tensiones musculares, reducen el estrés y restauran el equilibrio de tu cuerpo.",
    gradient: "from-[#4361EE] to-[#E91E8C]",
  },
  {
    icon: Scissors,
    title: "Depilación Profesional",
    description:
      "Técnicas profesionales para resultados duraderos. Piel suave y sin vello con el mínimo de molestias.",
    gradient: "from-[#4361EE] to-[#7B2FBE]",
  },
  {
    icon: Droplets,
    title: "Skincare Personalizado",
    description:
      "Diagnóstico de piel y rutinas de cuidado a medida. Te enseño a usar los productos correctos para tu tipo de piel.",
    gradient: "from-[#7B2FBE] to-[#E91E8C]",
  },
  {
    icon: Star,
    title: "Estética Corporal",
    description:
      "Tratamientos reductores, reafirmantes y modeladores para que te sientas plena y segura en tu propio cuerpo.",
    gradient: "from-[#4361EE] to-[#E91E8C]",
  },
  {
    icon: Eye,
    title: "Cejas & Pestañas",
    description:
      "Diseño y depilación de cejas, lifting de pestañas y técnicas que realzan tu mirada de forma natural y elegante.",
    gradient: "from-[#4361EE] to-[#7B2FBE]",
  },
  {
    icon: ShoppingBag,
    title: "Boutique de Belleza",
    description:
      "Selección de productos cosméticos premium de las mejores marcas. Encuentra exactamente lo que tu piel necesita.",
    gradient: "from-[#7B2FBE] to-[#E91E8C]",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="servicios" className="py-24 md:py-36 bg-[#08080E] relative overflow-hidden">
      {/* Bg orbs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#4361EE]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#E91E8C]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="gradient-text text-xs font-bold uppercase tracking-[0.3em] mb-3"
          >
            Lo que ofrezco
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            Mis Servicios
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/45 text-base md:text-lg max-w-xl mx-auto"
          >
            Tratamientos premium diseñados para realzar tu belleza natural
            y bienestar integral
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.05 * i, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative bg-white/[0.03] rounded-2xl p-6 border border-white/[0.07] hover:border-white/[0.14] hover:bg-white/[0.05] transition-all duration-300 flex flex-col"
            >
              {/* Gradient glow on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${svc.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />

              {/* Icon */}
              <div
                className={`w-11 h-11 rounded-xl bg-gradient-to-br ${svc.gradient} flex items-center justify-center mb-5 flex-shrink-0`}
              >
                <svc.icon className="text-white" size={20} />
              </div>

              <h3 className="text-white font-bold text-base mb-2 leading-snug">
                {svc.title}
              </h3>
              <p className="text-white/45 text-sm leading-relaxed mb-6 flex-1">
                {svc.description}
              </p>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold gradient-text hover:opacity-70 transition-opacity"
              >
                <MessageCircle size={13} />
                Consultar precio
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-14"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-bg text-white px-10 py-4 rounded-full font-bold text-base inline-flex items-center gap-3 hover:opacity-90 hover:scale-[1.03] transition-all duration-200 shadow-xl shadow-purple-900/50"
          >
            <MessageCircle size={19} />
            Reservar mi tratamiento
          </a>
        </motion.div>
      </div>
    </section>
  );
}
