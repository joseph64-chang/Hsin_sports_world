"use client";

import { useEffect, useId, useRef, type FormEvent } from "react";

export default function VisitorPrompt({
  open,
  defaultValue,
  onSubmit,
  onClose,
}: {
  open: boolean;
  defaultValue: string;
  onSubmit: (value: string) => void;
  onClose: () => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const id = useId();

  useEffect(() => {
    if (!open) return;

    const input = inputRef.current;
    input?.focus();
    input?.select();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onSubmit(inputRef.current?.value ?? "");
  }

  return (
    <div className="fixed inset-0 z-[100]">
      <button
        type="button"
        aria-label="關閉"
        onClick={onClose}
        className="hsw-modal-backdrop absolute inset-0 h-full w-full cursor-default bg-ink/60 backdrop-blur-sm"
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-4">
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${id}-title`}
          className="hsw-modal-card pointer-events-auto relative w-full max-w-md bg-surface p-7 shadow-[0_40px_90px_-20px_rgba(9,14,40,0.6)] sm:p-9"
        >
          <p className="font-display text-xs font-semibold tracking-[0.3em] text-accent">
            WELCOME
          </p>
          <h2
            id={`${id}-title`}
            className="mt-3 text-2xl font-bold tracking-tight text-foreground"
          >
            歡迎來到 Hsin Sports World
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-foreground/60">
            留下你的稱呼，之後每次回來我們都會跟你打聲招呼。
          </p>

          <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3">
            <label
              htmlFor={`${id}-input`}
              className="text-sm font-medium text-foreground/70"
            >
              怎麼稱呼你？
            </label>
            <input
              id={`${id}-input`}
              ref={inputRef}
              type="text"
              defaultValue={defaultValue}
              maxLength={20}
              autoComplete="off"
              placeholder="輸入你的稱呼"
              className="border border-line bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-brand focus:outline-none"
            />
            <div className="mt-1 flex items-center gap-4">
              <button type="submit" className="btn-primary">
                開始逛逛
                <span aria-hidden>→</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="text-sm font-medium text-foreground/45 transition-colors hover:text-foreground"
              >
                稍後再說
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
