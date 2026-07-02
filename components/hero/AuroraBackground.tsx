"use client";

import { motion } from "framer-motion";

export function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_75%)]" />
      <motion.div
        className="absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-primary/20 blur-[120px]"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-40 h-[32rem] w-[32rem] rounded-full bg-secondary/20 blur-[120px]"
        animate={{ x: [0, -50, 0], y: [0, 60, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-[120px]"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </div>
  );
}
