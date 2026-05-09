"use client";

import { motion } from "framer-motion";

export function ScrollIndicator() {
  return (
    <div className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
      <span className="font-sans text-[10px] uppercase tracking-widest-3 text-apice-champagne [writing-mode:vertical-rl]">
        Role para explorar
      </span>
      <motion.span
        aria-hidden
        className="block h-[60px] w-px origin-top bg-apice-champagne"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.4, 0.6, 1],
        }}
      />
    </div>
  );
}
