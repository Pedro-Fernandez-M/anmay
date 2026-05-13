"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Instagram, ExternalLink } from "lucide-react";
import { INSTAGRAM_URL, INSTAGRAM_POSTS } from "@/lib/config";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const existing = document.getElementById("ig-embed-script");
    if (existing) {
      window.instgrm?.Embeds.process();
      return;
    }

    const script = document.createElement("script");
    script.id = "ig-embed-script";
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => window.instgrm?.Embeds.process();
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (inView) window.instgrm?.Embeds.process();
  }, [inView]);

  return (
    <section id="galeria" className="py-24 md:py-36 bg-[#F8F6FF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="gradient-text text-xs font-bold uppercase tracking-[0.3em] mb-3"
          >
            Mi trabajo
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-gray-900 mb-4"
          >
            Galería
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-base md:text-lg max-w-xl mx-auto"
          >
            Resultados reales directamente desde Instagram
          </motion.p>
        </div>

        {/* Instagram embed grid */}
        <div className={`${INSTAGRAM_POSTS.length > 0 ? "columns-1 sm:columns-2 lg:columns-3 gap-4 [column-gap:1rem]" : "flex justify-center"}`}>
          {INSTAGRAM_POSTS.length === 0 && (
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 bg-white rounded-3xl p-12 shadow-lg shadow-gray-100 border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-20 h-20 gradient-bg rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Instagram className="text-white" size={36} />
              </div>
              <div className="text-center">
                <p className="text-gray-900 font-bold text-xl mb-1">@anmay_vald</p>
                <p className="text-gray-400 text-sm">Ver galería completa en Instagram</p>
              </div>
            </a>
          )}
          {INSTAGRAM_POSTS.map((shortcode, i) => (
            <motion.div
              key={shortcode}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="break-inside-avoid mb-4"
            >
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={`https://www.instagram.com/p/${shortcode}/`}
                data-instgrm-version="14"
                style={{
                  background: "#FFF",
                  border: "0",
                  borderRadius: "16px",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                  margin: "0",
                  maxWidth: "100%",
                  minWidth: "260px",
                  padding: "0",
                  width: "100%",
                }}
              >
                <div style={{ padding: "16px" }}>
                  <a
                    href={`https://www.instagram.com/p/${shortcode}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-700 transition-colors"
                  >
                    <Instagram size={14} />
                    Ver en Instagram
                    <ExternalLink size={11} />
                  </a>
                </div>
              </blockquote>
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.55 }}
          className="text-center mt-14"
        >
          <p className="text-gray-500 mb-5 text-sm">
            Sígueme en Instagram para ver más resultados y novedades
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-bg text-white px-8 py-3.5 rounded-full font-semibold inline-flex items-center gap-3 hover:opacity-90 hover:scale-[1.03] transition-all duration-200 shadow-xl shadow-purple-500/25"
          >
            <Instagram size={18} />
            @anmay_vald
          </a>
        </motion.div>
      </div>
    </section>
  );
}
