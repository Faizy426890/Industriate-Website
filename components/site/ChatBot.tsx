'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageCircle,
  X,
  Send,
  Minimize2,
  Maximize2,
  RotateCcw,
  ChevronDown,
  Briefcase,
  Users,
  Globe,
  Phone,
} from 'lucide-react';

// ── Types ──────────────────────────────────────────────────────────────────────
interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

type QuickAction = {
  label: string;
  icon: React.ReactNode;
  prompt: string;
};

// ── Constants ──────────────────────────────────────────────────────────────────
const QUICK_ACTIONS: QuickAction[] = [
  { label: 'Our Services', icon: <Briefcase size={13} />, prompt: 'What services does INDUSTRITAS offer?' },
  { label: 'For Employers', icon: <Users size={13} />, prompt: 'How can INDUSTRITAS help me hire workers?' },
  { label: 'For Candidates', icon: <Globe size={13} />, prompt: 'How do I apply for a job through INDUSTRITAS?' },
  { label: 'Contact Us', icon: <Phone size={13} />, prompt: 'How can I get in touch with INDUSTRITAS?' },
];

const WELCOME_MESSAGE: Message = {
  id: 'welcome',
  role: 'assistant',
  content:
    "Hi! 👋 I'm the **INDUSTRITAS AI Assistant**. I can help you with:\n\n• **Hiring workers** — staffing, compliance & credentialing\n• **Job opportunities** — industrial, healthcare, trades & logistics\n• **Visa pathways** — EB-2 NIW, EB-3, TN, EB-5 coordination\n• **Our process** — how we get workers deployed in 48 hours\n\nWhat can I help you with today?",
  timestamp: new Date(),
};

// ── Helpers ────────────────────────────────────────────────────────────────────
function formatTime(date: Date) {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function parseMarkdown(text: string) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br/>');
}

// ── Sub-components ─────────────────────────────────────────────────────────────
function BotAvatar({ size = 32 }: { size?: number }) {
  return (
    <div
      style={{ width: size, height: size, flexShrink: 0 }}
      className="rounded-full bg-gradient-to-br from-[#1d4ed8] to-[#0ea5e9] flex items-center justify-center shadow-lg"
    >
      <svg width={size * 0.55} height={size * 0.55} viewBox="0 0 24 24" fill="none">
        <rect x="3" y="8" width="18" height="13" rx="3" fill="white" fillOpacity="0.95" />
        <rect x="9" y="3" width="6" height="5" rx="2" fill="white" fillOpacity="0.95" />
        <circle cx="8.5" cy="14.5" r="2" fill="#1d4ed8" />
        <circle cx="15.5" cy="14.5" r="2" fill="#1d4ed8" />
        <rect x="9" y="18" width="6" height="1.5" rx="0.75" fill="#1d4ed8" />
        <circle cx="9" cy="5.5" r="0.8" fill="#0ea5e9" />
      </svg>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex items-end gap-2.5 mb-4">
      <BotAvatar size={30} />
      <div
        className="px-4 py-3 rounded-2xl rounded-bl-sm"
        style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
      >
        <div className="flex items-center gap-1.5">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-[#60a5fa]"
              animate={{ y: [0, -5, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.18, ease: 'easeInOut' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function MessageBubble({ message }: { message: Message }) {
  const isBot = message.role === 'assistant';

  if (isBot) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-end gap-2.5 mb-4"
      >
        <BotAvatar size={30} />
        <div className="flex-1 max-w-[85%]">
          <div
            className="px-4 py-3 rounded-2xl rounded-bl-sm text-[13.5px] leading-relaxed"
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.92)',
            }}
          >
            <p
              dangerouslySetInnerHTML={{ __html: parseMarkdown(message.content) }}
              className="[&>p]:mb-2 [&>p:last-child]:mb-0"
            />
          </div>
          <span className="mt-1 block text-[10px] pl-1" style={{ color: 'rgba(255,255,255,0.35)' }}>
            {formatTime(message.timestamp)}
          </span>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="flex justify-end mb-4"
    >
      <div className="max-w-[80%]">
        <div
          className="px-4 py-3 rounded-2xl rounded-br-sm text-[13.5px] leading-relaxed text-white"
          style={{ background: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%)' }}
        >
          {message.content}
        </div>
        <span className="mt-1 block text-[10px] text-right pr-1" style={{ color: 'rgba(255,255,255,0.35)' }}>
          {formatTime(message.timestamp)}
        </span>
      </div>
    </motion.div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────
export function ChatBot() {
  const [isOpen, setIsOpen]       = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages]   = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput]         = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [unread, setUnread]       = useState(0);
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesBoxRef = useRef<HTMLDivElement>(null);
  const inputRef       = useRef<HTMLTextAreaElement>(null);

  // ── Scroll handling ──────────────────────────────────────────────────────────
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isLoading, isOpen, scrollToBottom]);

  useEffect(() => {
    const box = messagesBoxRef.current;
    if (!box) return;
    const handler = () => {
      const { scrollTop, scrollHeight, clientHeight } = box;
      setShowScrollBtn(scrollHeight - scrollTop - clientHeight > 120);
    };
    box.addEventListener('scroll', handler);
    return () => box.removeEventListener('scroll', handler);
  }, []);

  // ── Open / close ─────────────────────────────────────────────────────────────
  const open = () => {
    setIsOpen(true);
    setUnread(0);
    setTimeout(() => inputRef.current?.focus(), 350);
  };
  const close = () => { setIsOpen(false); setIsExpanded(false); };

  // ── Send message ─────────────────────────────────────────────────────────────
  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isLoading) return;

      const userMsg: Message = {
        id: `u-${Date.now()}`,
        role: 'user',
        content: trimmed,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, userMsg]);
      setInput('');
      setIsLoading(true);

      if (!isOpen) setUnread((n) => n + 1);

      try {
        const history = [...messages, userMsg].filter((m) => m.id !== 'welcome');
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            messages: history.map((m) => ({ role: m.role, content: m.content })),
          }),
        });
        const data = await res.json();
        const botMsg: Message = {
          id: `b-${Date.now()}`,
          role: 'assistant',
          content: data.message || 'Sorry, I could not process that. Please try again.',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMsg]);
        if (!isOpen) setUnread((n) => n + 1);
      } catch {
        const errMsg: Message = {
          id: `err-${Date.now()}`,
          role: 'assistant',
          content: 'Connection issue. Please email us at **contact@industritas.com** or call **+1 (555) 010-2240**.',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, errMsg]);
      } finally {
        setIsLoading(false);
      }
    },
    [isLoading, isOpen, messages]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const resetChat = () => {
    setMessages([{ ...WELCOME_MESSAGE, timestamp: new Date() }]);
    setInput('');
  };

  // ── Dimensions ───────────────────────────────────────────────────────────────
  const windowW = isExpanded ? 'min(520px, calc(100vw - 24px))' : 'min(390px, calc(100vw - 24px))';
  const windowH = isExpanded ? 'min(680px, calc(100dvh - 100px))' : 'min(580px, calc(100dvh - 100px))';

  return (
    <>
      {/* ── Floating Trigger Button ───────────────────────────────────────────── */}
      <div
        className="fixed z-[9998]"
        style={{ bottom: '24px', right: '24px' }}
      >
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              key="trigger"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              onClick={open}
              aria-label="Open chat assistant"
              className="relative flex items-center justify-center rounded-full shadow-2xl"
              style={{
                width: 60,
                height: 60,
                background: 'linear-gradient(135deg, #1d4ed8 0%, #0ea5e9 100%)',
                boxShadow: '0 8px 32px rgba(29,78,216,0.45), 0 2px 8px rgba(0,0,0,0.3)',
              }}
            >
              {/* Pulse ring */}
              <motion.span
                className="absolute inset-0 rounded-full"
                animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                style={{ background: 'rgba(29,78,216,0.4)', pointerEvents: 'none' }}
              />
              <MessageCircle size={26} className="text-white" strokeWidth={2} />
              {unread > 0 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white"
                >
                  {unread > 9 ? '9+' : unread}
                </motion.div>
              )}
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* ── Chat Window ───────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-window"
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.94 }}
            transition={{ type: 'spring', stiffness: 280, damping: 26 }}
            className="fixed z-[9999] flex flex-col overflow-hidden"
            style={{
              bottom: '24px',
              right: '24px',
              width: windowW,
              height: windowH,
              borderRadius: '20px',
              background: 'linear-gradient(160deg, #0d1b3e 0%, #0a1628 60%, #060e1e 100%)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 8px 24px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.04)',
              transition: 'width 0.35s cubic-bezier(0.22,1,0.36,1), height 0.35s cubic-bezier(0.22,1,0.36,1)',
            }}
            role="dialog"
            aria-label="INDUSTRITAS AI Assistant"
          >
            {/* ── Header ─────────────────────────────────────────────────────── */}
            <div
              className="flex items-center gap-3 px-4 py-3.5 flex-shrink-0"
              style={{
                background: 'linear-gradient(135deg, rgba(29,78,216,0.25) 0%, rgba(14,165,233,0.1) 100%)',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <BotAvatar size={38} />
              <div className="flex-1 min-w-0">
                <p className="text-[13.5px] font-bold text-white leading-tight truncate">
                  INDUSTRITAS Assistant
                </p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                  <span className="text-[10.5px] font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    Online · Powered by Gemini AI
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={resetChat}
                  title="Reset chat"
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:bg-white/10"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                >
                  <RotateCcw size={14} />
                </button>
                <button
                  onClick={() => setIsExpanded((v) => !v)}
                  title={isExpanded ? 'Minimize' : 'Expand'}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:bg-white/10 hidden sm:flex"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                >
                  {isExpanded ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
                </button>
                <button
                  onClick={close}
                  title="Close"
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:bg-white/10"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* ── Messages ───────────────────────────────────────────────────── */}
            <div
              ref={messagesBoxRef}
              className="flex-1 overflow-y-auto px-4 pt-4 pb-2 relative"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: 'rgba(255,255,255,0.1) transparent',
              }}
            >
              {messages.map((msg) => (
                <MessageBubble key={msg.id} message={msg} />
              ))}
              {isLoading && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>

            {/* Scroll to bottom btn */}
            <AnimatePresence>
              {showScrollBtn && (
                <motion.button
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  onClick={scrollToBottom}
                  className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium text-white"
                  style={{
                    bottom: '130px',
                    background: 'rgba(29,78,216,0.8)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(8px)',
                    zIndex: 10,
                  }}
                >
                  <ChevronDown size={12} />
                  New messages
                </motion.button>
              )}
            </AnimatePresence>

            {/* ── Quick Actions ───────────────────────────────────────────────── */}
            {messages.length <= 2 && (
              <div
                className="flex-shrink-0 px-4 py-2"
                style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] mb-2" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  Quick questions
                </p>
                <div className="grid grid-cols-2 gap-1.5">
                  {QUICK_ACTIONS.map((action) => (
                    <button
                      key={action.label}
                      onClick={() => sendMessage(action.prompt)}
                      disabled={isLoading}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl text-[12px] font-medium text-left transition-all duration-200 disabled:opacity-50"
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        color: 'rgba(255,255,255,0.75)',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.background = 'rgba(29,78,216,0.25)';
                        (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(29,78,216,0.5)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.05)';
                        (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.08)';
                      }}
                    >
                      <span style={{ color: '#60a5fa' }}>{action.icon}</span>
                      {action.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* ── Input Area ──────────────────────────────────────────────────── */}
            <div
              className="flex-shrink-0 px-3 pb-3 pt-2"
              style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
            >
              <form onSubmit={handleSubmit}>
                <div
                  className="flex items-end gap-2 rounded-2xl px-3 py-2.5"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    transition: 'border-color 0.2s',
                  }}
                  onFocusCapture={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(29,78,216,0.6)';
                  }}
                  onBlurCapture={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.1)';
                  }}
                >
                  <textarea
                    ref={inputRef}
                    value={input}
                    onChange={(e) => {
                      setInput(e.target.value);
                      e.target.style.height = 'auto';
                      e.target.style.height = Math.min(e.target.scrollHeight, 100) + 'px';
                    }}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask me anything about INDUSTRITAS…"
                    rows={1}
                    disabled={isLoading}
                    className="flex-1 bg-transparent resize-none outline-none text-[13.5px] leading-snug py-0.5 placeholder:opacity-40 disabled:opacity-50"
                    style={{
                      color: 'rgba(255,255,255,0.9)',
                      maxHeight: '100px',
                      minHeight: '22px',
                    }}
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isLoading}
                    className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                    style={{
                      background: input.trim() && !isLoading
                        ? 'linear-gradient(135deg, #1d4ed8 0%, #0ea5e9 100%)'
                        : 'rgba(255,255,255,0.08)',
                    }}
                  >
                    {isLoading ? (
                      <motion.div
                        className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                      />
                    ) : (
                      <Send size={15} className="text-white" />
                    )}
                  </button>
                </div>

                <p className="text-center mt-2 text-[10px]" style={{ color: 'rgba(255,255,255,0.22)' }}>
                  Press Enter to send · Shift+Enter for new line
                </p>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
