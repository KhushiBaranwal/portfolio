"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export function PhotoCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: -3 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
      className="relative w-full max-w-sm"
    >
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="glass-card overflow-hidden p-3 shadow-soft"
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[18px]">
          <Image
            src="/images/profile.jpg"
            alt="Khushi Baranwal"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 90vw, 384px"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
        </div>

        <div className="mt-3 flex items-center justify-between px-1 pb-1">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <p className="text-xs font-medium text-text-muted tracking-wide">
              BTech ECE Student | AI Engineer
            </p>
          </div>
          <Sparkles size={14} className="text-primary" />
        </div>
      </motion.div>

      {/* accent glow */}
      <div className="absolute -inset-4 -z-10 rounded-xl2 bg-gradient-to-br from-primary/10 to-secondary/10 blur-2xl" />
    </motion.div>
  );
}