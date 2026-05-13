"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Valentina Torres",
    service: "Limpieza Facial Profunda",
    text: "La mejor limpieza facial que he tenido. Anjela es increíblemente profesional y cuidadosa. Mi piel quedó radiante y suave. Ya agendé mi próxima cita.",
    rating: 5,
    initials: "VT",
  },
  {
    name: "Camila Rojas",
    service: "Tratamiento Facial Premium",
    text: "Llevaba meses buscando una esteticista de confianza en Valdivia y la encontré. El ambiente es relajante, los productos son excelentes y los resultados son increíbles.",
    rating: 5,
    initials: "CR",
  },
  {
    name: "Daniela Muñoz",
    service: "Masaje Relajante",
    text: "El masaje fue una experiencia increíble. Salí completamente renovada y relajada. Anjela tiene un don especial para el bienestar. 100% recomendada.",
    rating: 5,
    initials: "DM",
  },
  {
    name: "Fernanda Reyes",
    service: "Skincare Personalizado",
    text: "La atención es muy personalizada. Me explicó todo el proceso y me recomendó productos perfectos para mi tipo de piel. Noté la diferencia desde la primera semana.",
    rating: 5,
    initials: "FR",
  },
  {
    name: "Sofía Contreras",
    service: "Diseño de Cejas",
    text: "El diseño de cejas cambió completamente mi cara. Anjela tiene un ojo artístico increíble. Nunca había tenido cejas tan perfectas para mis rasgos.",
    rating: 5,
    initials: "SC",
  },
  {
    name: "Andrea González",
    service: "Tratamiento Corporal",
    text: "Llevo 3 meses con los tratamientos y los resultados son notables. Lo que más valoro es su honestidad sobre lo que cada tratamiento puede lograr.",
    rating: 5,
    initials: "AG",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="gradient-text text-xs font-bold uppercase tracking-[0.3em] mb-3"
          >
            Lo que dicen mis clientas
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-gray-900 mb-4"
          >
            Testimonios
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base md:text-lg max-w-xl mx-auto"
          >
            La satisfacción de mis clientas es mi mayor logro
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.07 * i, ease: "easeOut" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-gray-50 rounded-2xl p-7 hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-300 flex flex-col"
            >
              {/* Quote icon */}
              <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center mb-5 flex-shrink-0">
                <Quote className="text-white" size={16} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={13} className="fill-[#E91E8C] text-[#E91E8C]" />
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200/60">
                <div className="w-9 h-9 gradient-bg rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.service}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
