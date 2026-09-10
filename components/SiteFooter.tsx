import Link from "next/link";

const EXPLORE_LINKS = [
  { href: "/", label: "首頁" },
  { href: "/table-tennis", label: "桌球世界" },
  { href: "/swimming", label: "游泳世界" },
  { href: "/blog", label: "技術文章" },
];

const TABLE_TENNIS_LINKS = [
  { href: "/table-tennis#rankings", label: "WTT 世界排名" },
  { href: "/table-tennis#players", label: "球員介紹" },
  { href: "/table-tennis#training", label: "桌球訓練" },
  { href: "/table-tennis#game", label: "桌球小遊戲" },
];

const SWIMMING_LINKS = [
  { href: "/swimming#strokes", label: "四式泳姿技術" },
  { href: "/swimming#rankings", label: "世界賽成績" },
  { href: "/swimming#athletes", label: "選手介紹" },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-strong text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center bg-white text-[13px] font-bold text-brand">
              H
            </span>
            <span className="font-display text-lg font-semibold tracking-wide">
              HSIN SPORTS WORLD
            </span>
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            一站式運動知識站，帶你認識各項運動的歷史、技術與最新賽事動態。
          </p>
        </div>

        <FooterCol title="探索" links={EXPLORE_LINKS} />
        <FooterCol title="桌球世界" links={TABLE_TENNIS_LINKS} />
        <FooterCol title="游泳世界" links={SWIMMING_LINKS} />
      </div>

      <div className="border-t border-white/15 px-6 py-5 text-center text-xs tracking-wide text-white/45">
        © {year} Hsin Sports World. All rights reserved.
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <p className="font-display text-xs font-semibold tracking-[0.25em] text-white/50">
        {title}
      </p>
      <ul className="mt-4 flex flex-col gap-3 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-white/70 transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
