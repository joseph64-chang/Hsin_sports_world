"use client";

import { useVisitor } from "@/components/visitor/VisitorProvider";

export default function WelcomeGreeting() {
  const { name, openPrompt } = useVisitor();

  if (name) {
    return (
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
        <span className="inline-flex items-center gap-2 border border-accent/30 bg-accent/10 px-4 py-2 font-medium tracking-wide text-accent">
          嗨，{name}！很高興你回來 👋
        </span>
        <button
          type="button"
          onClick={openPrompt}
          className="text-foreground/45 underline underline-offset-2 transition-colors hover:text-brand"
        >
          換個稱呼
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-3 text-sm">
      <span className="text-foreground/60">
        還沒設定稱呼？設定後每次回來都會跟你打聲招呼。
      </span>
      <button
        type="button"
        onClick={openPrompt}
        className="border border-line px-4 py-2 font-medium tracking-wide text-foreground transition-colors hover:border-brand hover:text-brand"
      >
        現在設定
      </button>
    </div>
  );
}
