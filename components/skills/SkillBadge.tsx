"use client";

import { motion } from "framer-motion";

interface SkillBadgeProps {
  label: string;
  index: number;
}

export function SkillBadge({ label, index }: SkillBadgeProps) {
  const delay = (index % 6) * 0.4;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 8) * 0.05 }}
      whileHover={{ scale: 1.08, y: -4 }}
      className="cursor-default"
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 4 + (index % 3),
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
        className="rounded-xl2 border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm text-text-muted transition-colors hover:border-primary/40 hover:text-text hover:bg-white/[0.05]"
      >
        {label}
      </motion.div>
    </motion.div>
  );
}
