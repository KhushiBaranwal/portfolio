"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Player } from "./Player";
import { Clouds, Mountains, TreesAndGround } from "./ParallaxLayers";
import { CheckpointSign } from "./CheckpointSign";
import { CheckpointModal } from "./CheckpointModal";
import { MobileControls, SoundToggle } from "./MobileControls";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useKeyboard } from "@/hooks/useKeyboard";
import { CHECKPOINTS } from "@/lib/data";
import type { Checkpoint } from "@/types";

const WORLD_WIDTH = 3400;
const PLAYER_SPEED = 4.2;
const INTERACT_RADIUS = 60;

export function PixelJourney() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const keys = useKeyboard();

  const [playerX, setPlayerX] = useState(20);
  const [facing, setFacing] = useState<"left" | "right">("right");
  const [walking, setWalking] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(800);
  const [activeCheckpointId, setActiveCheckpointId] = useState<string | null>(null);
  const [openCheckpoint, setOpenCheckpoint] = useState<Checkpoint | null>(null);
  const [muted, setMuted] = useState(true);

  const touchDir = useRef<{ left: boolean; right: boolean }>({ left: false, right: false });

  // Measure viewport for camera clamping / responsiveness
  useEffect(() => {
    const measure = () => {
      if (viewportRef.current) setViewportWidth(viewportRef.current.offsetWidth);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const checkpointPositions = CHECKPOINTS.map((cp) => ({
    ...cp,
    px: (cp.x / 100) * WORLD_WIDTH,
  }));

  const handleInteract = useCallback(() => {
    const cp = checkpointPositions.find((c) => c.id === activeCheckpointId);
    if (cp) setOpenCheckpoint(cp);
  }, [activeCheckpointId, checkpointPositions]);

  // Game loop
  useEffect(() => {
    let frame: number;

    const tick = () => {
      setPlayerX((prev) => {
        if (openCheckpoint) return prev; // freeze while modal open

        const left = keys.current["arrowleft"] || keys.current["a"] || touchDir.current.left;
        const right = keys.current["arrowright"] || keys.current["d"] || touchDir.current.right;

        let next = prev;
        if (left && !right) {
          next = Math.max(10, prev - PLAYER_SPEED);
          setFacing("left");
          setWalking(true);
        } else if (right && !left) {
          next = Math.min(WORLD_WIDTH - 10, prev + PLAYER_SPEED);
          setFacing("right");
          setWalking(true);
        } else {
          setWalking(false);
        }

        // proximity check
        const nearby = checkpointPositions.find(
          (c) => Math.abs(c.px - next) < INTERACT_RADIUS
        );
        setActiveCheckpointId(nearby ? nearby.id : null);

        return next;
      });

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openCheckpoint]);

  // Keyboard interact (E / Space)
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.key.toLowerCase() === "e" || e.key === " ") && activeCheckpointId) {
        handleInteract();
      }
      if (e.key === "Escape") setOpenCheckpoint(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeCheckpointId, handleInteract]);

  const camera = Math.min(
    Math.max(0, playerX - viewportWidth / 2),
    WORLD_WIDTH - viewportWidth
  );

  return (
    <section id="journey" className="relative section-padding py-28">
      <SectionHeading
        eyebrow="Interactive"
        title="Pixel Journey"
        description="Walk through the story with arrow keys (or the on-screen controls on mobile). Reach a sign and press E to open it."
      />

      <div
        ref={viewportRef}
        className="pixel-frame relative mx-auto h-[420px] w-full max-w-5xl overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #0B1120 0%, #0d1730 55%, #0B1120 100%)",
        }}
      >
        <div className="scanlines pointer-events-none absolute inset-0 z-40" />
        <SoundToggle muted={muted} onToggle={() => setMuted((m) => !m)} />

        {/* Sky decorations - slow parallax */}
        <div
          className="absolute inset-0"
          style={{ transform: `translateX(${-camera * 0.3}px)`, width: WORLD_WIDTH }}
        >
          <Clouds />
        </div>

        {/* Mountains - medium parallax */}
        <div
          className="absolute inset-0"
          style={{ transform: `translateX(${-camera * 0.55}px)`, width: WORLD_WIDTH }}
        >
          <Mountains />
        </div>

        {/* World layer - full speed (trees, ground, checkpoints, player) */}
        <div
          className="absolute inset-0"
          style={{ transform: `translateX(${-camera}px)`, width: WORLD_WIDTH }}
        >
          <TreesAndGround />

          {checkpointPositions.map((cp) => (
            <div key={cp.id} style={{ position: "absolute", left: cp.px, bottom: 0 }}>
              <CheckpointSign
                checkpoint={cp}
                active={activeCheckpointId === cp.id}
                onInteract={handleInteract}
              />
            </div>
          ))}

          <motion.div
            className="absolute bottom-16"
            style={{ left: playerX - 21 }}
            transition={{ type: "tween", duration: 0.05 }}
          >
            <Player facing={facing} walking={walking} />
          </motion.div>
        </div>

        {/* progress bar */}
        <div className="absolute left-4 right-4 top-4 h-1.5 rounded-full bg-white/[0.06] sm:left-6 sm:right-6">
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary to-secondary transition-all"
            style={{ width: `${(playerX / WORLD_WIDTH) * 100}%` }}
          />
        </div>

        <MobileControls
          showInteract={!!activeCheckpointId}
          onLeftDown={() => (touchDir.current.left = true)}
          onLeftUp={() => (touchDir.current.left = false)}
          onRightDown={() => (touchDir.current.right = true)}
          onRightUp={() => (touchDir.current.right = false)}
          onInteract={handleInteract}
        />

        <CheckpointModal checkpoint={openCheckpoint} onClose={() => setOpenCheckpoint(null)} />
      </div>

      <p className="mt-4 text-center text-xs text-text-muted">
        Controls: ← → or A / D to move · E or Space to interact
      </p>
    </section>
  );
}
