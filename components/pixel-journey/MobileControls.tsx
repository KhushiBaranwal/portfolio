"use client";

import { ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";

interface MobileControlsProps {
  onLeftDown: () => void;
  onLeftUp: () => void;
  onRightDown: () => void;
  onRightUp: () => void;
  onInteract: () => void;
  showInteract: boolean;
}

export function MobileControls({
  onLeftDown,
  onLeftUp,
  onRightDown,
  onRightUp,
  onInteract,
  showInteract,
}: MobileControlsProps) {
  return (
    <div className="absolute bottom-4 left-0 right-0 z-20 flex items-center justify-between px-4 sm:hidden select-none">
      <div className="flex gap-3">
        <button
          onTouchStart={onLeftDown}
          onTouchEnd={onLeftUp}
          onMouseDown={onLeftDown}
          onMouseUp={onLeftUp}
          onMouseLeave={onLeftUp}
          aria-label="Move left"
          className="glass flex h-14 w-14 items-center justify-center rounded-full active:bg-white/[0.1]"
        >
          <ChevronLeft size={26} />
        </button>
        <button
          onTouchStart={onRightDown}
          onTouchEnd={onRightUp}
          onMouseDown={onRightDown}
          onMouseUp={onRightUp}
          onMouseLeave={onRightUp}
          aria-label="Move right"
          className="glass flex h-14 w-14 items-center justify-center rounded-full active:bg-white/[0.1]"
        >
          <ChevronRight size={26} />
        </button>
      </div>

      {showInteract && (
        <button
          onClick={onInteract}
          className="glass rounded-full px-5 py-3 text-sm font-semibold text-primary shadow-soft"
        >
          Interact
        </button>
      )}
    </div>
  );
}

interface SoundToggleProps {
  muted: boolean;
  onToggle: () => void;
}

export function SoundToggle({ muted, onToggle }: SoundToggleProps) {
  return (
    <button
      onClick={onToggle}
      aria-label={muted ? "Unmute" : "Mute"}
      className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full glass text-text-muted transition-colors hover:text-text"
    >
      {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
    </button>
  );
}
