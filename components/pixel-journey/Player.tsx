"use client";

import { useEffect, useState } from "react";

interface PlayerProps {
  facing: "left" | "right";
  walking: boolean;
}

/**
 * True pixel-art sprite built with the classic "box-shadow pixel art" technique:
 * one 1x1 div stretched into a grid of pixels via box-shadow, no images needed.
 * Two walk frames are swapped on an interval to fake a stride animation.
 */

const PIXEL_SIZE = 3; // px per "pixel" in the sprite grid
const GRID_WIDTH = 14;

const COLORS: Record<string, string> = {
  A: "#38BDF8", // antenna
  H: "#E2E8F0", // helmet shell
  V: "#8B5CF6", // visor glow
  B: "#8B5CF6", // body armor
  W: "#38BDF8", // chest light
  L: "#334155", // legs
  D: "#0B1120", // dark trim / boots
};

// idle / standing frame (legs together)
const FRAME_IDLE = [
  "......AA......",
  "......AA......",
  "....HHHHHH....",
  "...HHHHHHHH...",
  "...HVVVVVVH...",
  "...HVVVVVVH...",
  "...HHHHHHHH...",
  "..BBBBBBBBBB..",
  ".BBBBBBBBBBBB.",
  ".BBBBBWWBBBBB.",
  ".BBBBBBBBBBBB.",
  ".DDDDDDDDDDDD.",
  "..BBB....BBB..",
  "..LLL....LLL..",
  "..LLL....LLL..",
  "..DDD....DDD..",
];

// walk frame — legs spread wider to fake a stride
const FRAME_WALK = [
  "......AA......",
  "......AA......",
  "....HHHHHH....",
  "...HHHHHHHH...",
  "...HVVVVVVH...",
  "...HVVVVVVH...",
  "...HHHHHHHH...",
  "..BBBBBBBBBB..",
  ".BBBBBBBBBBBB.",
  ".BBBBBWWBBBBB.",
  ".BBBBBBBBBBBB.",
  ".DDDDDDDDDDDD.",
  "..BBB....BBB..",
  ".LLL......LLL.",
  ".LLL......LLL.",
  ".DDD......DDD.",
];

function frameToBoxShadow(frame: string[]): string {
  const shadows: string[] = [];
  frame.forEach((row, y) => {
    for (let x = 0; x < row.length; x++) {
      const code = row[x];
      if (code === "." || !COLORS[code]) continue;
      shadows.push(`${x * PIXEL_SIZE}px ${y * PIXEL_SIZE}px 0 0 ${COLORS[code]}`);
    }
  });
  return shadows.join(", ");
}

const SHADOW_IDLE = frameToBoxShadow(FRAME_IDLE);
const SHADOW_WALK = frameToBoxShadow(FRAME_WALK);

export function Player({ facing, walking }: PlayerProps) {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    if (!walking) {
      setFrame(0);
      return;
    }
    const interval = setInterval(() => {
      setFrame((f) => (f === 0 ? 1 : 0));
    }, 160);
    return () => clearInterval(interval);
  }, [walking]);

  const height = FRAME_IDLE.length * PIXEL_SIZE;
  const width = GRID_WIDTH * PIXEL_SIZE;

  return (
    <div
      className="relative"
      style={{
        width,
        height,
        transform: facing === "left" ? "scaleX(-1)" : "scaleX(1)",
      }}
    >
      <div
        className="absolute left-0 top-0"
        style={{
          width: PIXEL_SIZE,
          height: PIXEL_SIZE,
          boxShadow: frame === 1 && walking ? SHADOW_WALK : SHADOW_IDLE,
        }}
      />
    </div>
  );
}