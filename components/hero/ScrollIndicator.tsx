"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4, duration: 0.8 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted"
    >
      <span className="text-xs tracking-widest uppercase">Scroll</span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={18} className="text-primary" />
      </motion.div>
    </motion.div>
  );
}
