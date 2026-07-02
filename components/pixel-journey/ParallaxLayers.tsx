"use client";

interface ParallaxLayerProps {
  offset: number;
  speed: number;
  children: React.ReactNode;
  className?: string;
}

/**
 * Moves slower than the camera to create depth (classic parallax trick).
 */
export function ParallaxLayer({ offset, speed, children, className = "" }: ParallaxLayerProps) {
  return (
    <div
      className={`absolute inset-0 ${className}`}
      style={{ transform: `translateX(${-offset * speed}px)` }}
    >
      {children}
    </div>
  );
}

export function Clouds() {
  const clouds = [40, 260, 520, 780, 1040, 1300, 1560, 1820, 2080, 2340];
  return (
    <>
      {clouds.map((x, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/[0.06]"
          style={{
            left: x,
            top: 30 + (i % 3) * 24,
            width: 90 + (i % 3) * 20,
            height: 32 + (i % 3) * 8,
            filter: "blur(1px)",
          }}
        />
      ))}
    </>
  );
}

export function Mountains() {
  const peaks = [0, 300, 600, 900, 1200, 1500, 1800, 2100, 2400, 2700, 3000];
  return (
    <svg
      className="absolute bottom-0 left-0 h-40 w-[3400px]"
      viewBox="0 0 3400 160"
      preserveAspectRatio="none"
    >
      <polyline
        points={peaks.map((x, i) => `${x},${i % 2 === 0 ? 40 : 100}`).join(" ") + " 3400,160 0,160"}
        fill="rgba(99,102,241,0.12)"
      />
    </svg>
  );
}

export function TreesAndGround() {
  const trees = Array.from({ length: 22 }, (_, i) => i * 150 + 40);
  return (
    <>
      {/* ground strip */}
      <div className="absolute bottom-0 left-0 h-16 w-[3400px] bg-gradient-to-b from-[#0B1120] to-[#050816] border-t border-white/[0.06]" />
      {trees.map((x, i) => (
        <div
          key={i}
          className="absolute bottom-16"
          style={{ left: x }}
        >
          <div className="mx-auto h-8 w-2 bg-[#0B1120]" />
          <div
            className="mx-auto -mt-6 h-10 w-10 rounded-full"
            style={{
              background:
                i % 2 === 0
                  ? "rgba(56,189,248,0.18)"
                  : "rgba(99,102,241,0.18)",
            }}
          />
        </div>
      ))}
    </>
  );
}
