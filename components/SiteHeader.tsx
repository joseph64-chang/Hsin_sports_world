"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "首頁" },
  { href: "/table-tennis", label: "桌球世界" },
  { href: "/swimming", label: "游泳世界" },
  { href: "/blog", label: "技術文章" },
];

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" onClick={onClick} className="flex items-center gap-2.5">
      <span className="flex h-7 w-7 items-center justify-center bg-white text-[13px] font-bold text-brand">
        H
      </span>
      <span className="font-display text-lg font-semibold tracking-wide text-white">
        HSIN SPORTS WORLD
      </span>
    </Link>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand text-white">
      {/* Top row */}
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Logo onClick={() => setOpen(false)} />

        <div className="flex items-center gap-3">
          <Link href="/table-tennis" className="btn-ghost-light hidden sm:inline-flex">
            開始探索
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="開啟選單"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center border border-white/40 sm:hidden"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              aria-hidden
            >
              {open ? (
                <path d="M3 3l10 10M13 3L3 13" strokeLinecap="round" />
              ) : (
                <path d="M2 4h12M2 8h12M2 12h12" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Nav row (desktop) */}
      <div className="hidden border-t border-white/15 sm:block">
        <nav className="mx-auto flex max-w-6xl gap-9 px-6 text-sm">
          {NAV_LINKS.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-3.5 font-medium tracking-[0.08em] transition-colors after:absolute after:bottom-0 after:left-0 after:h-[3px] after:bg-white after:transition-all ${
                  active
                    ? "text-white after:w-full"
                    : "text-white/70 after:w-0 hover:text-white hover:after:w-full"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="flex flex-col border-t border-white/15 px-6 py-2 text-sm sm:hidden">
          {NAV_LINKS.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`border-b border-white/10 py-3 font-medium tracking-wide last:border-0 ${
                  active ? "text-white" : "text-white/70"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/table-tennis"
            onClick={() => setOpen(false)}
            className="btn-ghost-light mt-3 mb-2 justify-center"
          >
            開始探索
          </Link>
        </nav>
      )}
    </header>
  );
}
