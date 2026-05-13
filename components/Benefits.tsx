"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, Gem, Clock, Shield, Sparkles, Star } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Atención Personalizada",
    description:
      "Cada cliente recibe un diagnóstico único y un tratamiento 100% adaptado a sus necesidades específicas de piel y bienestar.",
  },
  {
    icon: Gem,
    title: "Productos Premium",
    description:
      "Trabajamos con las mejores marcas del mercado cosmético para garantizar resultados visibles y que duran en el tiempo.",
  },
  {
    icon: Sparkles,
    title: "Técnicas Modernas",
    description:
      "Formación continua en los últimos avances de cosmetología y estética integral para ofrecerte lo mejor siempre.",
  },
  {
    icon: Shield,
    title: "Profesionalismo Total",
    description:
      "Cosmetóloga certificada con formación en estética integral, comprometida con los más altos estándares de calidad.",
  },
  {
    icon: Clock,
    title: "Experiencia Única",
    description:
      "Un ambiente íntimo y tranquilo donde el tiempo se detiene. Ven a relajarte, renovarte y salir sintiéndote increíble.",
  },
  {
    icon: Star,
    title: "Resultados Reales",
    description:
      "Cada tratamiento está orientado a resultados visibles desde la primera sesión. Tu satisfacción es nuestra mejor carta de presentación.",
  },
];

export default function Benefits() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 md:py-36 bg-[#08080E] relative overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-[#4361EE]/5 blur-3xl" />
        <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] rounded-full bg-[#E91E8C]/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="gradient-text text-xs font-bold uppercase tracking-[0.3em] mb-3"
          >
            La diferencia ANMAY
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            ¿Por qué elegir ANMAY?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/45 text-base md:text-lg max-w-xl mx-auto"
          >
            Más que un salón, una experiencia que transforma desde adentro
          </motion.p>
        </div>

        {/* 5 cards — 3 on first row (desktop), 2 on second */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 * i, ease: "easeOut" }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8 hover:bg-white/[0.055] hover:border-white/[0.13] transition-all duration-300"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl gradient-bg opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300 pointer-events-none" />

              <div className="w-14 h-14 gradient-bg rounded-2xl flex items-center justify-center mb-6">
                <b.icon className="text-white" size={24} />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{b.title}</h3>
              <p className="text-white/45 text-sm leading-relaxed">{b.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
