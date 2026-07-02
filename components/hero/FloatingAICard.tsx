"use client";

import { motion } from "framer-motion";
import { Cpu, Eye, Database, Sparkles, Code2, GitBranch } from "lucide-react";
import { AI_STACK } from "@/lib/data";

const icons = [Code2, Eye, Cpu, Database, GitBranch, Sparkles];

export function FloatingAICard() {
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
        className="glass-card p-6 shadow-soft"
      >
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-primary animate-pulse" />
            <p className="text-xs font-medium text-text-muted tracking-wide">
              AI STACK — LIVE
            </p>
          </div>
          <Sparkles size={16} className="text-primary" />
        </div>

        <div className="grid grid-cols-1 gap-2.5">
          {AI_STACK.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.08, duration: 0.5 }}
                className="flex items-center justify-between rounded-xl2 border border-white/[0.06] bg-white/[0.02] px-3.5 py-2.5 hover:bg-white/[0.05] transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <div className="rounded-lg bg-primary/10 p-1.5">
                    <Icon size={14} className="text-primary" />
                  </div>
                  <span className="text-sm text-text">{item}</span>
                </div>
                <div className="h-1.5 w-12 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-secondary"
                    initial={{ width: 0 }}
                    animate={{ width: `${65 + ((i * 13) % 30)}%` }}
                    transition={{ delay: 0.8 + i * 0.08, duration: 0.8 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* accent glow */}
      <div className="absolute -inset-4 -z-10 rounded-xl2 bg-gradient-to-br from-primary/10 to-secondary/10 blur-2xl" />
    </motion.div>
  );
}
