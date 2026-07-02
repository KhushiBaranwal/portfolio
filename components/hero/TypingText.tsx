"use client";

import { useEffect, useState } from "react";

interface TypingTextProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

export function TypingText({
  words,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseTime = 1600,
}: TypingTextProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text.length < current.length) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length + 1)),
        typingSpeed
      );
    } else if (!isDeleting && text.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length - 1)),
        deletingSpeed
      );
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="text-gradient">
      {text}
      <span className="ml-1 inline-block w-[3px] h-[0.9em] bg-primary align-middle animate-blink" />
    </span>
  );
}
