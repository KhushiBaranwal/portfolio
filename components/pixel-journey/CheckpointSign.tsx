"use client";

import { motion } from "framer-motion";
import type { Checkpoint } from "@/types";

interface CheckpointSignProps {
  checkpoint: Checkpoint;
  active: boolean;
  onInteract: () => void;
}

export function CheckpointSign({ checkpoint, active, onInteract }: CheckpointSignProps) {
  return (
    <div className="absolute bottom-16 flex flex-col items-center" style={{ left: 0 }}>
      {active && (
        <motion.button
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={onInteract}
          className="mb-3 whitespace-nowrap rounded-full glass px-3 py-1 text-[11px] font-semibold text-primary shadow-soft"
        >
          Press E / Tap
        </motion.button>
      )}
      <motion.div
        animate={active ? { y: [0, -4, 0] } : {}}
        transition={{ duration: 1.2, repeat: active ? Infinity : 0 }}
        className={`flex h-14 w-11 flex-col items-center justify-center rounded-md border-2 pixel-render ${
          active
            ? "border-primary bg-primary/20 shadow-soft"
            : "border-white/20 bg-white/[0.04]"
        }`}
      >
        <span className="px-1 text-center text-[9px] font-bold leading-tight text-text">
          {checkpoint.label}
        </span>
      </motion.div>
      <div className="h-6 w-1.5 bg-[#0B1120]" />
    </div>
  );
}
