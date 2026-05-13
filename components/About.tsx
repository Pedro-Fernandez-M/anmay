"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Award, Users, Heart, Sparkles, MessageCircle } from "lucide-react";
import { WHATSAPP_URL, BASE_PATH } from "@/lib/config";

const stats = [
  { icon: Award, value: "5+", label: "Años de experiencia" },
  { icon: Users, value: "500+", label: "Clientas satisfechas" },
  { icon: Heart, value: "100%", label: "Dedicación" },
  { icon: Sparkles, value: "∞", label: "Pasión" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" },
});

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="sobre-mi" className="py-24 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center"
        >
          {/* ── Left: Visual ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Main dark card */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-[#08080E]">
              {/* Glow bg */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 gradient-bg opacity-15 blur-3xl rounded-full" />
              </div>

              {/* Logo centered */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="relative w-52 h-52">
                  <Image
                    src={`${BASE_PATH}/images/logo-dark.png`}
                    alt="ANMAY"
                    fill
                    className="object-contain opacity-90"
                  />
                </div>
                <div className="text-center">
                  <p className="gradient-text text-xs font-semibold uppercase tracking-[0.3em]">
                    Cosmetóloga & Esteticista
                  </p>
                </div>
              </div>

              {/* Bottom fade */}
              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#08080E] to-transparent" />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              className="absolute -bottom-6 -right-4 sm:-right-8 bg-white rounded-2xl shadow-xl shadow-gray-200/80 p-5 border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-black text-xl text-gray-900">5+</p>
                  <p className="text-gray-400 text-xs">Años de experiencia</p>
                </div>
              </div>
            </motion.div>

            {/* Accent dot */}
            <div className="absolute -top-5 -left-5 w-20 h-20 gradient-bg rounded-full opacity-10 blur-2xl" />
          </motion.div>

          {/* ── Right: Content ── */}
          <div>
            <motion.p
              {...fadeUp(0.1)}
              animate={inView ? fadeUp(0.1).animate : {}}
              className="gradient-text text-xs font-bold uppercase tracking-[0.3em] mb-3"
            >
              Sobre Mí
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-2"
            >
              Anjela R.
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-black gradient-text leading-tight mb-7"
            >
              Calderón Parra
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-14 h-[3px] gradient-bg rounded-full mb-8 origin-left"
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-gray-500 text-base md:text-lg leading-relaxed mb-5"
            >
              Soy Cosmetóloga y Esteticista Integral, apasionada por el
              bienestar y la belleza en todas sus formas. Mi misión es que cada
              persona que visita ANMAY salga sintiéndose mejor consigo misma.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.42 }}
              className="text-gray-500 text-base md:text-lg leading-relaxed mb-10"
            >
              Trabajo con técnicas modernas y productos de alta calidad para
              ofrecerte tratamientos personalizados que se adaptan a las
              necesidades únicas de tu piel y cuerpo. Cada sesión es una
              experiencia de bienestar diseñada especialmente para ti.
            </motion.p>

            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.48 }}
              className="grid grid-cols-2 gap-3 mb-10"
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-gray-50 rounded-2xl p-4 flex items-center gap-3 hover:bg-gray-100 transition-colors"
                >
                  <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
                    <stat.icon className="text-white" size={17} />
                  </div>
                  <div>
                    <p className="font-black text-gray-900">{stat.value}</p>
                    <p className="text-gray-400 text-xs">{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.a
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.56 }}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-bg text-white px-8 py-4 rounded-full font-bold inline-flex items-center gap-3 hover:opacity-90 hover:scale-[1.03] transition-all duration-200 shadow-xl shadow-purple-500/20"
            >
              <MessageCircle size={18} />
              Agenda tu cita
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
