"use client";

import {
  useState,
  useSyncExternalStore,
  type FormEvent,
} from "react";

const STORAGE_KEY = "hsw-visitor-name";

// No external changes to subscribe to — the value only changes via this
// component's own submit handler, which updates local state directly.
const subscribe = () => () => {};

function readStoredName() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

export default function WelcomeGreeting() {
  // `null` on the server and during hydration, the real value afterwards —
  // useSyncExternalStore keeps this hydration-safe without a setState-in-effect.
  const storedName = useSyncExternalStore(
    subscribe,
    readStoredName,
    () => null,
  );
  const [justSubmitted, setJustSubmitted] = useState<string | null>(null);
  const [input, setInput] = useState("");

  const name = justSubmitted ?? storedName;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    try {
      localStorage.setItem(STORAGE_KEY, trimmed);
    } catch {}
    setJustSubmitted(trimmed);
  }

  if (name) {
    return (
      <p className="inline-flex items-center gap-2 border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium tracking-wide text-accent">
        嗨，{name}！歡迎回到 Hsin Sports World 👋
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap items-center gap-3">
      <label htmlFor="visitor-name" className="text-sm text-foreground/55">
        怎麼稱呼你？
      </label>
      <input
        id="visitor-name"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="輸入你的稱呼"
        maxLength={20}
        className="border border-line bg-background px-3 py-2 text-sm text-foreground placeholder:text-foreground/40 focus:border-brand focus:outline-none"
      />
      <button
        type="submit"
        className="border border-line px-4 py-2 text-sm font-medium tracking-wide text-foreground transition-colors hover:border-brand hover:text-brand"
      >
        送出
      </button>
    </form>
  );
}
