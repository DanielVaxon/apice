"use client";

import { motion } from "framer-motion";

export function BarraProgresso({ percentual }: { percentual: number }) {
  return (
    <div
      className="relative h-3 w-full overflow-hidden bg-apice-stone/15"
      role="progressbar"
      aria-valuenow={percentual}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Progresso da obra"
    >
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percentual}%` }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="h-full bg-apice-champagne"
      />
    </div>
  );
}
