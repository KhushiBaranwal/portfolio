"use client";

import { useMousePosition } from "@/hooks/useMousePosition";

export function MouseSpotlight() {
  const { x, y } = useMousePosition();

  return (
    <div
      className="pointer-events-none absolute inset-0 z-10 hidden md:block transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(56, 189, 248, 0.07), transparent 40%)`,
      }}
    />
  );
}
