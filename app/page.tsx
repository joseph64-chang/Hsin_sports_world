import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import WelcomeGreeting from "@/components/WelcomeGreeting";

type Sport = {
  index: string;
  name: string;
  kicker: string;
  desc: string;
  href: string;
  ready: boolean;
  image?: string;
};

const SPORTS: Sport[] = [
  {
    index: "01",
    name: "桌球",
    kicker: "TABLE TENNIS",
    desc: "從百年歷史、規則技術到 WTT 世界排名、球員介紹、各國球風與訓練方法。",
    href: "/table-tennis",
    ready: true,
    image: "/images/unsplash-03-table-tennis-player-serving.jpg",
  },
  {
    index: "02",
    name: "游泳",
    kicker: "SWIMMING",
    desc: "游泳歷史、四式泳姿技術，到世界錦標賽代表成績與選手介紹。",
    href: "/swimming",
    ready: true,
    image: "/images/swimming/swimming-stock-05-lane-lines-pool.jpg",
  },
  {
    index: "03",
    name: "羽球",
    kicker: "BADMINTON",
    desc: "即將推出。",
    href: "#",
    ready: false,
    image: "/images/swimming/swimming-stock-02-competition-daytime.jpg",
  },
  {
    index: "04",
    name: "網球",
    kicker: "TENNIS",
    desc: "即將推出。",
    href: "#",
    ready: false,
    image: "/images/unsplash-04-blue-table-tennis.jpg",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-background">
      <Hero
        kicker="HSIN SPORTS WORLD"
        title={
          <>
            運動，值得
            <br />
            被認真介紹。
          </>
        }
        description="一個持續擴充的運動知識站：歷史脈絡、實戰技術、裝備選擇，到即時的世界排名與球星故事，一次看懂。"
        image="/images/swimming/swimming-stock-03-olympic-pool-swimmer.jpg"
        imageAlt="選手自由式划手瞬間"
        primary={{ href: "/table-tennis", label: "進入桌球世界" }}
        secondary={{ href: "/swimming", label: "進入游泳世界" }}
      />

      {/* Welcome strip */}
      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <WelcomeGreeting />
        </div>
      </section>

      {/* Sports index */}
      <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24">
        <p className="font-display text-xs font-semibold tracking-[0.3em] text-accent">
          EXPLORE
        </p>
        <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
          目前收錄的運動
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-foreground/55">
          每個項目都是一份完整的入門指南，從零開始帶你認識這項運動的全貌。
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {SPORTS.map((s) => {
            const inner = (
              <>
                <div className="relative aspect-[16/10] overflow-hidden bg-surface-2">
                  {s.image && (
                    <Image
                      src={s.image}
                      alt=""
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className={`object-cover transition-transform duration-500 ${
                        s.ready ? "group-hover:scale-105" : "grayscale"
                      }`}
                    />
                  )}
                  <span className="font-display absolute top-3 left-3 bg-brand px-2 py-0.5 text-xs font-semibold text-white">
                    {s.index}
                  </span>
                  {!s.ready && (
                    <span className="absolute top-3 right-3 bg-foreground/70 px-2 py-0.5 text-xs font-medium text-white">
                      即將推出
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-display text-[11px] font-semibold tracking-[0.25em] text-foreground/45">
                    {s.kicker}
                  </p>
                  <p className="mt-1.5 text-xl font-bold tracking-tight">
                    {s.name}
                  </p>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/60">
                    {s.desc}
                  </p>
                  {s.ready && (
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                      查看內容
                      <span
                        aria-hidden
                        className="transition-transform group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </span>
                  )}
                </div>
              </>
            );

            return s.ready ? (
              <Link
                key={s.index}
                href={s.href}
                className="group flex flex-col overflow-hidden border border-line bg-surface transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_24px_50px_-30px_rgba(9,14,40,0.5)]"
              >
                {inner}
              </Link>
            ) : (
              <div
                key={s.index}
                className="group flex cursor-not-allowed flex-col overflow-hidden border border-line bg-surface opacity-60"
              >
                {inner}
              </div>
            );
          })}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-brand">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16 sm:flex-row sm:items-center sm:justify-between sm:py-20">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              先從一項開始
            </h2>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/70">
              桌球與游泳兩個完整專題已經上線，挑一個有興趣的，用十分鐘好好認識它。
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/table-tennis" className="btn-ghost-light">
              桌球世界
            </Link>
            <Link href="/swimming" className="btn-ghost-light">
              游泳世界
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
