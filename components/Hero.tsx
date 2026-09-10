import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type HeroAction = {
  href: string;
  label: string;
};

export default function Hero({
  kicker,
  title,
  description,
  image,
  imageAlt,
  primary,
  secondary,
  meta,
  children,
}: {
  kicker: string;
  title: ReactNode;
  description: ReactNode;
  image: string;
  imageAlt: string;
  primary?: HeroAction;
  secondary?: HeroAction;
  meta?: string[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-brand">
      {/* Photo — block on mobile, full-bleed right half on desktop */}
      <div className="relative h-60 w-full sm:h-80 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[55%]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="(min-width: 1024px) 55vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand/10 mix-blend-multiply" />
      </div>

      {/* Card */}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="-mt-14 mb-10 max-w-lg bg-surface p-7 shadow-[0_30px_60px_-25px_rgba(9,14,40,0.55)] sm:p-10 lg:my-20 lg:p-12">
          <p className="font-display text-xs font-semibold tracking-[0.3em] text-accent">
            {kicker}
          </p>
          <h1 className="mt-5 text-4xl leading-[1.08] font-bold tracking-tight text-foreground sm:text-5xl">
            {title}
          </h1>
          <div className="mt-6 h-px w-full bg-line" />
          <p className="mt-6 text-base leading-relaxed text-foreground/70">
            {description}
          </p>

          {(primary || secondary) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {primary && (
                <Link href={primary.href} className="btn-primary">
                  {primary.label}
                  <span aria-hidden>→</span>
                </Link>
              )}
              {secondary && (
                <Link href={secondary.href} className="btn-outline">
                  {secondary.label}
                </Link>
              )}
            </div>
          )}

          {meta && meta.length > 0 && (
            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs tracking-wide text-foreground/45">
              {meta.map((m, i) => (
                <span key={m} className="flex items-center gap-3">
                  {i > 0 && (
                    <span className="h-1 w-1 rounded-full bg-foreground/25" />
                  )}
                  {m}
                </span>
              ))}
            </div>
          )}

          {children}
        </div>
      </div>
    </section>
  );
}
