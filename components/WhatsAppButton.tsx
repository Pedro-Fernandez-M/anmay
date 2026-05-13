"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/config";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [tooltip, setTooltip] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 280, damping: 22 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {tooltip && (
              <motion.div
                initial={{ opacity: 0, x: 8, scale: 0.92 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 8, scale: 0.92 }}
                transition={{ duration: 0.18 }}
                className="bg-white text-gray-800 text-sm font-semibold px-4 py-2 rounded-2xl shadow-xl shadow-gray-300/60 whitespace-nowrap border border-gray-100"
              >
                ¡Agenda tu cita ahora! ✨
                {/* Arrow */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-t-[6px] border-b-[6px] border-l-[7px] border-t-transparent border-b-transparent border-l-white" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setTooltip(true)}
            onMouseLeave={() => setTooltip(false)}
            aria-label="Contactar por WhatsApp"
            className="relative w-16 h-16 gradient-bg rounded-full flex items-center justify-center shadow-2xl shadow-purple-800/50 hover:scale-110 hover:shadow-purple-600/60 transition-all duration-200"
          >
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full gradient-bg animate-ping opacity-25" />
            <MessageCircle className="text-white relative z-10" size={28} />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
