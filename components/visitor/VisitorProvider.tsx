"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import VisitorPrompt from "./VisitorPrompt";

const NAME_KEY = "hsw-visitor-name";
const SEEN_KEY = "hsw-visitor-prompt-seen";

type VisitorContextValue = {
  /** The visitor's chosen 稱呼, or null if not set yet. */
  name: string | null;
  /** Whether the first-visit prompt modal is currently open. */
  promptOpen: boolean;
  /** Open the prompt manually (e.g. from a "改稱呼" button). */
  openPrompt: () => void;
  /** Dismiss the prompt without saving a name. */
  closePrompt: () => void;
  /** Save a name, close the prompt, and greet the visitor everywhere. */
  saveName: (value: string) => void;
};

const VisitorContext = createContext<VisitorContextValue | null>(null);

const noopSubscribe = () => () => {};

function subscribeStorage(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function readName() {
  try {
    return localStorage.getItem(NAME_KEY);
  } catch {
    return null;
  }
}

function readSeen() {
  try {
    return localStorage.getItem(SEEN_KEY) === "1";
  } catch {
    return true;
  }
}

export function VisitorProvider({ children }: { children: ReactNode }) {
  // Read persisted state without a setState-in-effect: getServerSnapshot keeps
  // SSR + hydration output stable (no name, prompt closed), then the real
  // values take over right after hydration.
  const storedName = useSyncExternalStore(subscribeStorage, readName, () => null);
  const storedSeen = useSyncExternalStore(
    subscribeStorage,
    readSeen,
    () => true,
  );
  const isClient = useSyncExternalStore(noopSubscribe, () => true, () => false);

  const [submittedName, setSubmittedName] = useState<string | null>(null);
  const [locallySeen, setLocallySeen] = useState(false);
  const [forceOpen, setForceOpen] = useState(false);

  const name = (submittedName ?? storedName) || null;
  const seen = locallySeen || storedSeen;
  const promptOpen = forceOpen || (isClient && !name && !seen);

  const markSeen = useCallback(() => {
    try {
      localStorage.setItem(SEEN_KEY, "1");
    } catch {}
    setLocallySeen(true);
  }, []);

  const openPrompt = useCallback(() => setForceOpen(true), []);

  const closePrompt = useCallback(() => {
    setForceOpen(false);
    markSeen();
  }, [markSeen]);

  const saveName = useCallback(
    (value: string) => {
      const trimmed = value.trim();
      if (!trimmed) return;
      try {
        localStorage.setItem(NAME_KEY, trimmed);
      } catch {}
      setSubmittedName(trimmed);
      setForceOpen(false);
      markSeen();
    },
    [markSeen],
  );

  const value = useMemo(
    () => ({ name, promptOpen, openPrompt, closePrompt, saveName }),
    [name, promptOpen, openPrompt, closePrompt, saveName],
  );

  return (
    <VisitorContext.Provider value={value}>
      {children}
      <VisitorPrompt
        open={promptOpen}
        defaultValue={name ?? ""}
        onSubmit={saveName}
        onClose={closePrompt}
      />
    </VisitorContext.Provider>
  );
}

export function useVisitor() {
  const ctx = useContext(VisitorContext);
  if (!ctx) {
    throw new Error("useVisitor 必須在 VisitorProvider 內使用");
  }
  return ctx;
}
