// /components/ChatbotWidget.tsx
import React, { useState, useRef, useEffect } from "react";

type Role = "user" | "assistant";

interface ChatMessage {
  role: Role;
  content: string;
  ts: number;
}

// ⏱️ Adjust this to control the visible "thinking" time (in ms)
const THINK_DELAY_MS = 1200;

// Predefined starter questions to guide the user into the funnel
const SUGGESTED_QUESTIONS = [
  "What does Glitzteck build?",
  "Can you build a custom SaaS for my business?",
  "How does pricing work?",
  "Can you integrate payments / Stripe?",
  "How fast can you launch an MVP?",
];

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);

  // Chat state
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");

  // UI state
  const [loading, setLoading] = useState(false); // AI is generating
  const [booting, setBooting] = useState(false); // first-time boot animation
  const [bootComplete, setBootComplete] = useState(false); // don't reboot every time
  const [showSuggestions, setShowSuggestions] = useState(true);

  const scrollRef = useRef<HTMLDivElement | null>(null);

  // scroll to bottom on update
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading, isOpen]);

  // When chat first opens:
  // 1. Show a "booting AI" loader for ~900ms
  // 2. Then show intro message + 5 suggestion chips
  useEffect(() => {
    if (!isOpen) return;

    // if we already did first boot once this session, don't redo
    if (bootComplete) return;

    setBooting(true);

    const t1 = setTimeout(() => {
      setBooting(false);
      setBootComplete(true);

      const welcome: ChatMessage = {
        role: "assistant",
        ts: Date.now(),
        content:
          "Hi 👋 I'm Glitzteck AI.\n\nI can help you understand what we build, how we work, and how we can scale your product.\nChoose a question below to get started, or ask your own.",
      };

      setMessages([welcome]);
    }, 900);

    return () => {
      clearTimeout(t1);
    };
  }, [isOpen, bootComplete]);

  // core ask function
  async function askQuestion(userText: string) {
    const text = userText.trim();
    if (!text || loading) return;

    // after first real question -> hide suggestion chips
    setShowSuggestions(false);

    // add user message to the conversation state
    const userMsg: ChatMessage = {
      role: "user",
      content: text,
      ts: Date.now(),
    };
    const nextMessages = [...messages, userMsg];

    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      // send convo to backend
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await res.json();

      // ⏳ Short "thinking" delay so the typing animation is visible but snappy
      await new Promise((resolve) => setTimeout(resolve, THINK_DELAY_MS));

      const assistantMsg: ChatMessage = {
        role: "assistant",
        content:
          data.reply ??
          "I couldn't generate a reply right now. Please try again.",
        ts: Date.now() + 1,
      };

      setMessages([...nextMessages, assistantMsg]);
    } catch (err) {
      console.error(err);

      // keep UX consistent with a short delay here too
      await new Promise((resolve) => setTimeout(resolve, THINK_DELAY_MS));

      const failMsg: ChatMessage = {
        role: "assistant",
        content:
          "⚠️ I had trouble contacting the AI service. Please try again in a moment.",
        ts: Date.now() + 2,
      };

      setMessages([...nextMessages, failMsg]);
    } finally {
      setLoading(false);
    }
  }

  function handleSend() {
    askQuestion(input);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  }

  // 💬 render each message bubble
  function renderMessageBubble(m: ChatMessage) {
    const isUser = m.role === "user";
    return (
      <div
        key={m.ts}
        className={
          isUser
            ? "text-right flex flex-col items-end"
            : "text-left flex flex-col items-start"
        }
      >
        <div
          className={
            isUser
              ? `
                inline-block max-w-[85%]
                rounded-xl
                bg-gradient-to-r from-sky-500 to-cyan-400
                text-white
                px-3 py-2 text-[13px] leading-relaxed
                shadow-[0_18px_40px_rgba(2,132,199,0.45)]
                ring-1 ring-sky-400/40
                whitespace-pre-wrap break-words
              `
              : `
                inline-block max-w-[85%]
                rounded-xl
                bg-white/80 backdrop-blur
                border border-slate-200
                text-slate-800
                px-3 py-2 text-[13px] leading-relaxed
                shadow-[0_16px_40px_rgba(15,23,42,0.12)]
                whitespace-pre-wrap break-words
              `
          }
        >
          {m.content}
        </div>

        <div
          className={
            isUser
              ? "text-[10px] text-slate-400 mt-1"
              : "text-[10px] text-slate-400 mt-1"
          }
        >
          {isUser ? "You" : "Glitzteck AI"}
        </div>
      </div>
    );
  }

  // 🤖 animated "AI is thinking" bubble
  function renderTypingBubble() {
    return (
      <div className="text-left flex flex-col items-start">
        <div
          className="
            inline-block max-w-[85%]
            rounded-xl
            bg-white/80 backdrop-blur
            border border-slate-200
            text-slate-600
            px-3 py-2 text-[13px] leading-relaxed
            shadow-[0_16px_40px_rgba(15,23,42,0.12)]
          "
        >
          <div className="flex items-center gap-2 text-slate-500">
            {/* pulsing status orb */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>

            {/* bouncing dots */}
            <span className="flex items-center gap-1 font-semibold text-slate-600 leading-none">
              <span className="animate-bounce">●</span>
              <span className="animate-bounce [animation-delay:0.1s]">●</span>
              <span className="animate-bounce [animation-delay:0.2s]">●</span>
            </span>

            {/* label */}
            <span className="text-[12px] text-slate-500">thinking…</span>
          </div>
        </div>

        <div className="text-[10px] text-slate-400 mt-1">
          Glitzteck AI is generating
        </div>
      </div>
    );
  }

  // 🌀 boot screen (first open only)
  function renderBootScreen() {
    return (
      <div className="flex flex-col items-center justify-center text-center py-10 text-[13px] leading-relaxed text-slate-600">
        <div className="relative mb-4 flex h-10 w-10 items-center justify-center">
          {/* glow ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 opacity-30 blur-xl" />
          {/* AI badge */}
          <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-400 shadow-[0_24px_60px_rgba(6,182,212,0.45)] ring-1 ring-white/40 flex items-center justify-center text-white text-[11px] font-semibold">
            AI
          </div>
        </div>

        <div className="text-[12px] font-medium text-slate-700 tracking-[-0.03em]">
          Waking up Glitzteck AI…
        </div>

        <div className="mt-1 text-[11px] text-slate-400">
          Securing conversation • Loading SaaS knowledge
        </div>

        {/* mini progress bar with shimmer */}
        <div className="mt-4 w-32 h-1.5 rounded-full bg-slate-200/60 overflow-hidden">
          <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 animate-[loaderSlide_1.2s_ease-in-out_infinite]" />
        </div>
      </div>
    );
  }

  // 💡 chips with suggested questions (only shown before first real user message)
  function renderSuggestions() {
    if (!showSuggestions) return null;

    return (
      <div className="mt-2 flex flex-wrap gap-2">
        {SUGGESTED_QUESTIONS.map((q, i) => (
          <button
            key={i}
            onClick={() => askQuestion(q)}
            className="
              text-left
              rounded-lg
              border border-slate-300/60
              bg-white/70 backdrop-blur
              px-3 py-2
              text-[12px] leading-snug text-slate-700
              shadow-sm
              hover:border-sky-400 hover:bg-sky-50
              hover:shadow-[0_16px_40px_rgba(2,132,199,0.15)]
              transition
            "
          >
            {q}
          </button>
        ))}
      </div>
    );
  }

  return (
    <>
      {/* Chat panel */}
      {isOpen && (
        <div
          className="
            fixed bottom-20 right-4 z-[9999]
            w-[22rem] max-w-[90vw]
            flex flex-col
            rounded-2xl
            bg-white/80 backdrop-blur-xl
            border border-slate-200/70
            shadow-[0_28px_80px_rgba(15,23,42,0.4)]
            ring-1 ring-slate-900/[0.03]
            animate-[fadeUp_0.18s_ease-out]
          "
          style={{
            transformOrigin: "bottom right",
          }}
        >
          {/* Header */}
          <div
            className="
              relative flex items-start justify-between
              px-4 py-3
              bg-gradient-to-r from-sky-500 to-cyan-400
              text-white
              rounded-t-2xl
              shadow-[0_24px_60px_rgba(6,182,212,0.45)]
            "
          >
            <div className="flex flex-col">
              <span className="text-sm font-semibold leading-tight tracking-[-0.04em]">
                Glitzteck AI Assistant
              </span>
              <span className="text-[10px] text-white/80 leading-tight">
                Ask about SaaS, product launch, pricing
              </span>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="
                text-white/80 hover:text-white
                text-[11px] font-medium
                px-2 py-1
                rounded-lg
                hover:bg-white/10
                active:scale-[0.96]
                transition
              "
              aria-label="Close chat"
            >
              ✕
            </button>

            {/* glow accent */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-white/20 blur-3xl"
            />
          </div>

          {/* Messages area */}
          <div
            ref={scrollRef}
            className="
              flex-1 max-h-[260px] overflow-y-auto
              px-4 py-3
              bg-gradient-to-br from-slate-50/60 to-white/10
              text-slate-800
              space-y-4
              scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-300
            "
          >
            {/* boot state */}
            {booting && renderBootScreen()}

            {/* normal state */}
            {!booting &&
              messages.map((m, index) => (
                <React.Fragment key={m.ts}>
                  {renderMessageBubble(m)}

                  {/* after first assistant message, show quick-start buttons */}
                  {index === 0 &&
                    m.role === "assistant" &&
                    messages.length === 1 &&
                    renderSuggestions()}
                </React.Fragment>
              ))}

            {/* thinking bubble when waiting for response */}
            {!booting && loading && renderTypingBubble()}
          </div>

          {/* input area */}
          <div
            className="
              border-t border-slate-200/70
              bg-white/60 backdrop-blur-xl
              px-3 py-3
              flex items-center gap-2
              rounded-b-2xl
            "
          >
            <input
              className="
                flex-1 rounded-lg
                border border-slate-300
                bg-white/80 backdrop-blur
                px-3 py-2 text-[13px] text-slate-800
                outline-none
                placeholder-slate-400
                focus:border-sky-400
                focus:ring-2 focus:ring-sky-200
              "
              placeholder="Type your question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={loading || booting}
            />

            <button
              onClick={handleSend}
              disabled={loading || booting}
              className="
                group
                flex items-center justify-center
                rounded-lg
                bg-gradient-to-r from-sky-500 to-cyan-400
                px-3 py-2
                text-[12px] font-semibold text-white
                shadow-[0_18px_40px_rgba(2,132,199,0.45)]
                ring-1 ring-sky-400/50
                hover:shadow-[0_22px_50px_rgba(2,132,199,0.6)]
                active:scale-[0.97]
                disabled:opacity-50 disabled:cursor-not-allowed
              "
            >
              <span className="flex items-center gap-1">
                <span>Send</span>
                <svg
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M13 5l7 7-7 7"
                  />
                </svg>
              </span>
            </button>
          </div>

          {/* footer legal */}
          <div className="px-4 pb-3 text-center text-[10px] leading-relaxed text-slate-400">
            AI can make mistakes. For sensitive topics, please contact a human.
          </div>
        </div>
      )}

      {/* Floating launcher button (closed state) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="
            fixed bottom-4 right-4 z-[9999]
            flex items-center gap-2
            rounded-full
            bg-gradient-to-r from-sky-500 to-cyan-400
            px-4 py-3
            text-white text-[13px] font-semibold
            shadow-[0_28px_80px_rgba(6,182,212,0.45)]
            ring-1 ring-sky-400/50
            hover:shadow-[0_32px_90px_rgba(6,182,212,0.6)]
            active:scale-[0.97]
          "
          aria-label="Open Glitzteck AI chat"
        >
          {/* animated pulse dot */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>

          <span className="text-[12px] leading-none font-semibold tracking-[-0.03em]">
            Chat with Glitzteck AI
          </span>
        </button>
      )}

      {/* global keyframes */}
      <style jsx global>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(8px) scale(0.97);
          }
          100% {
            opacity: 1;
            transform: translateY(0px) scale(1);
          }
        }

        @keyframes loaderSlide {
          0% {
            transform: translateX(-50%);
          }
          50% {
            transform: translateX(20%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </>
  );
}
