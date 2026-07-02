"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { OWNER } from "@/lib/data";
import { QUICK_REPLIES, getFaqAnswer } from "@/lib/chatbot-data";

interface ChatMessage {
  id: string;
  role: "bot" | "user";
  text: string;
}

const WELCOME_MESSAGE: ChatMessage = {
  id: "welcome",
  role: "bot",
  text: `Hey! I'm a quick FAQ bot for ${OWNER.name}'s portfolio. Ask me about projects, skills, experience, or how to get in touch.`,
};

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isOpen]);

  const sendMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg: ChatMessage = { id: crypto.randomUUID(), role: "user", text: trimmed };
    const botMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: "bot",
      text: getFaqAnswer(trimmed),
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
    setShowQuickReplies(false);
  };

  return (
    <>
      {/* Floating toggle button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.4 }}
        onClick={() => setIsOpen((o) => !o)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary text-background shadow-soft transition-transform hover:scale-105"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={22} />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={22} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="glass-card fixed bottom-24 right-6 z-50 flex h-[480px] w-[92vw] max-w-sm flex-col overflow-hidden shadow-glass"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-white/[0.08] px-5 py-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary">
                <Bot size={18} className="text-background" />
              </div>
              <div>
                <p className="text-sm font-semibold">Portfolio Assistant</p>
                <p className="flex items-center gap-1.5 text-xs text-text-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  FAQ bot · always online
                </p>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start gap-2 ${
                    msg.role === "user" ? "flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                      msg.role === "bot"
                        ? "bg-white/[0.06] text-primary"
                        : "bg-gradient-to-r from-primary to-secondary text-background"
                    }`}
                  >
                    {msg.role === "bot" ? <Bot size={13} /> : <User size={13} />}
                  </div>
                  <div
                    className={`max-w-[75%] rounded-xl2 px-3.5 py-2.5 text-sm leading-relaxed ${
                      msg.role === "bot"
                        ? "bg-white/[0.05] text-text"
                        : "bg-gradient-to-r from-primary to-secondary text-background"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {showQuickReplies && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {QUICK_REPLIES.map((q) => (
                    <button
                      key={q}
                      onClick={() => sendMessage(q)}
                      className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-text-muted transition-colors hover:border-primary/40 hover:text-text"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
              className="flex items-center gap-2 border-t border-white/[0.08] p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something..."
                className="flex-1 rounded-xl2 bg-white/[0.05] px-3.5 py-2.5 text-sm text-text placeholder:text-text-muted/60 outline-none focus:ring-1 focus:ring-primary/50"
              />
              <button
                type="submit"
                aria-label="Send"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl2 bg-gradient-to-r from-primary to-secondary text-background transition-transform hover:scale-105"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}