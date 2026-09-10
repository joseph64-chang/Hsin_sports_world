import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ScrollEffects";
import { ARTICLES } from "./articles";

export const metadata: Metadata = {
  title: "技術文章 | Hsin Sports World",
  description: "桌球技術解說文章：弧圈球、發球接發球旋轉判讀、步法訓練。",
};

export default function BlogIndexPage() {
  return (
    <div className="flex flex-1 flex-col bg-background">
      <section className="bg-brand text-white">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <p className="font-display text-xs font-semibold tracking-[0.3em] text-white/60">
            BLOG
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            技術文章
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70">
            三篇桌球技術解說，從弧圈球原理、發球與接發球的旋轉判讀，到常被忽略的步法訓練，幫助你把場上的直覺變成可以拆解、練習的具體動作。
          </p>
        </div>
      </section>

      <main className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-20">
        <div className="flex flex-col border-t border-line">
          {ARTICLES.map((article, i) => (
            <Reveal key={article.slug} delay={i * 60}>
              <Link
                href={`/blog/${article.slug}`}
                className="group flex flex-col gap-4 border-b border-line py-10 transition-colors hover:bg-surface-2 sm:flex-row sm:items-baseline sm:gap-8"
              >
                <span className="font-display text-3xl text-accent sm:w-16">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <p className="font-display text-xs tracking-[0.2em] text-foreground/45">
                    {article.kicker}
                  </p>
                  <h2 className="mt-1 text-xl font-bold tracking-tight sm:text-2xl">
                    {article.title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-foreground/70">
                    {article.excerpt}
                  </p>
                  <p className="mt-3 text-xs text-foreground/40">
                    閱讀時間．{article.readTime}
                  </p>
                </div>
                <span
                  aria-hidden
                  className="hidden shrink-0 text-2xl transition-transform group-hover:translate-x-1 sm:inline"
                >
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </main>
    </div>
  );
}
