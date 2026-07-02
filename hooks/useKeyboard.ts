"use client";

import { useEffect, useRef } from "react";

export type KeyMap = Record<string, boolean>;

/**
 * Tracks currently-pressed keys in a ref (no re-renders per keystroke)
 * so game loops can poll it every animation frame.
 */
export function useKeyboard() {
  const keys = useRef<KeyMap>({});

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      keys.current[e.key.toLowerCase()] = true;
    };
    const up = (e: KeyboardEvent) => {
      keys.current[e.key.toLowerCase()] = false;
    };
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, []);

  return keys;
}
