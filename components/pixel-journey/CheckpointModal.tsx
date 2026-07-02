"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Github, X } from "lucide-react";
import type { Checkpoint } from "@/types";

interface CheckpointModalProps {
  checkpoint: Checkpoint | null;
  onClose: () => void;
}

export function CheckpointModal({
  checkpoint,
  onClose,
}: CheckpointModalProps) {
  return (
    <AnimatePresence>
      {checkpoint && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 z-30 flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="glass-card relative w-full max-w-md p-7"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 rounded-full p-1.5 text-text-muted transition-colors hover:bg-white/[0.06] hover:text-text"
            >
              <X size={16} />
            </button>

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Checkpoint
            </span>

            <h3 className="mt-2 font-heading text-2xl font-semibold">
              {checkpoint.title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-text-muted">
              {checkpoint.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {checkpoint.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>

            {checkpoint.github && (
              <div className="mt-6 flex gap-3">
                <a
                  href={checkpoint.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl2 bg-gradient-to-r from-primary to-secondary px-4 py-2.5 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
                >
                  <Github size={15} />
                  Code
                </a>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}