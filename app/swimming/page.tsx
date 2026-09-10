import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import { Reveal } from "@/components/ScrollEffects";
import {
  HERO_PHOTO,
  STROKES_BANNER,
  VICTORY_BANNER,
  GALLERY_PHOTOS,
} from "./photos";

export const metadata: Metadata = {
  title: "游泳世界 | Hsin Sports World",
  description: "游泳歷史、四式泳姿技術、世界錦標賽代表成績、選手介紹與精彩瞬間。",
};

const NAV_ITEMS = [
  { id: "gallery", label: "精彩瞬間" },
  { id: "history", label: "歷史" },
  { id: "strokes", label: "泳姿技術" },
  { id: "rankings", label: "世界賽成績" },
  { id: "athletes", label: "選手介紹" },
];

const HISTORY = [
  {
    era: "西元前，古文明",
    text: "游泳自古便是人類的生存與移動技能，古埃及、亞述與希臘的壁畫、浮雕中皆有游泳紀錄，是已知歷史最悠久的運動之一。",
  },
  {
    era: "1837 年，英國",
    text: "倫敦成立最早的游泳協會，室內泳池陸續興建，游泳逐漸從實用技能轉型為競技運動與休閒活動。",
  },
  {
    era: "1896 年，雅典奧運",
    text: "游泳成為第一屆現代奧運的正式項目，比賽在露天海域舉行，僅設男子項目。",
  },
  {
    era: "1908 年",
    text: "國際泳總 FINA（現更名為 World Aquatics）成立，統一比賽規則與世界紀錄認證標準。",
  },
  {
    era: "1956～1970 年代",
    text: "翻滾轉身、蝶式從蛙式中獨立為第四式、標準 50 公尺泳池規格逐漸確立，競賽制度日趨完整。",
  },
  {
    era: "2000 年代",
    text: "全身式高科技泳衣大幅提升浮力與減阻，2008 年前後世界紀錄被大量刷新，2010 年起 World Aquatics 明令禁用非紡織材質泳衣以維護競賽公平。",
  },
  {
    era: "2020 年代至今",
    text: "World Aquatics 世界游泳錦標賽（含 25 公尺短水道）與世界盃巡迴賽並行，搭配科技化計時與轉播，持續推升觀賞性與競技水準。",
  },
];

const STROKES = [
  {
    title: "自由式（Freestyle）",
    desc: "速度最快的泳姿，採左右交替划手搭配打水前進，比賽中自由式項目不限定動作，選手幾乎都採用捷泳（front crawl），是短、中、長距離比賽的核心項目。",
  },
  {
    title: "仰式（Backstroke）",
    desc: "唯一以仰躺姿勢出發、划手方式與自由式相似但方向相反，出發與轉身皆有特殊規則（如轉身前允許翻滾至俯臥再轉身），視線無法直視前方是最大挑戰。",
  },
  {
    title: "蛙式（Breaststroke）",
    desc: "歷史最悠久的泳姿，划手與踢腿需同步對稱進行，每個週期身體有明顯的滑行與起伏節奏，速度較慢但技術門檻高，划頻與蹬腿時機是關鍵。",
  },
  {
    title: "蝶式（Butterfly）",
    desc: "雙臂同時向外划水並配合海豚式打水，講究全身波浪般的節奏感與核心力量，是四式中最耗費體能、對技術與體能要求皆極高的泳姿。",
  },
  {
    title: "個人混合式（Individual Medley）",
    desc: "同一位選手於單場比賽中依序游完蝶式、仰式、蛙式、自由式，考驗選手四式技術的全面性與體能分配策略。",
  },
  {
    title: "出發與轉身",
    desc: "出發台起跳角度、入水流線型、水下海豚腿，以及觸壁轉身的效率，往往是勝負差距不到零點幾秒的關鍵環節，也是各國選手長期鑽研的技術細節。",
  },
];

const MEN_RESULTS = [
  { event: "50m 自由式", name: "Cameron McEvoy", country: "澳洲", time: "21.14" },
  { event: "100m 自由式", name: "David Popovici", country: "羅馬尼亞", time: "46.51" },
  { event: "400m 自由式", name: "Lukas Märtens", country: "德國", time: "3:42.35" },
  { event: "100m 仰式", name: "Pieter Coetze", country: "南非", time: "51.85" },
  { event: "100m 蛙式", name: "Qin Haiyang 覃海洋", country: "中國", time: "58.23" },
  { event: "100m 蝶式", name: "Maxime Grousset", country: "法國", time: "49.62" },
  { event: "400m 混合式", name: "Léon Marchand", country: "法國", time: "4:04.73" },
];

const WOMEN_RESULTS = [
  { event: "100m 自由式", name: "Marrit Steenbergen", country: "荷蘭", time: "52.55" },
  { event: "200m 自由式", name: "Mollie O'Callaghan", country: "澳洲", time: "1:53.48" },
  { event: "800m 自由式", name: "Katie Ledecky", country: "美國", time: "8:05.62" },
  { event: "100m 仰式", name: "Kaylee McKeown", country: "澳洲", time: "57.16" },
  { event: "100m 蛙式", name: "Anna Elendt", country: "德國", time: "1:05.19" },
  { event: "200m 蝶式", name: "Summer McIntosh", country: "加拿大", time: "2:01.99" },
];

const ATHLETES = [
  {
    name: "Léon Marchand",
    tag: "法國・混合式之王",
    desc: "巴黎奧運包辦四金的法國新生代招牌，200／400 混合式技術全面、四式銜接流暢，2025 世界錦標賽再度當選最佳男運動員。",
  },
  {
    name: "David Popovici",
    tag: "羅馬尼亞・自由式新星",
    desc: "青少年時期即刷新自由式世界紀錄，划頻效率極高，是 100／200 公尺自由式最具威脅的競爭者之一。",
  },
  {
    name: "Katie Ledecky",
    tag: "美國・長距離傳奇",
    desc: "生涯長期壟斷女子 800／1500 公尺自由式，續航力與配速掌控無人能及，是史上最偉大的長距離泳將之一。",
  },
  {
    name: "Summer McIntosh",
    tag: "加拿大・全能新星",
    desc: "橫跨自由式、蝶式與混合式皆能站上頒獎台，年紀輕輕已多次刷新世界紀錄，2025 世錦賽當選最佳女運動員。",
  },
  {
    name: "Kaylee McKeown",
    tag: "澳洲・仰式女王",
    desc: "長期稱霸女子 100／200 公尺仰式，出發與轉身技術細膩，是澳洲泳隊近年最具代表性的選手之一。",
  },
  {
    name: "Qin Haiyang 覃海洋",
    tag: "中國・蛙式主力",
    desc: "亞洲蛙式代表人物，划手爆發力與後半程續航兼具，多次於世界大賽包辦 100／200 公尺蛙式金牌。",
  },
];

function SectionIntro({
  id,
  index,
  kicker,
  title,
}: {
  id: string;
  index: string;
  kicker: string;
  title: string;
}) {
  return (
    <div
      id={id}
      className="flex scroll-mt-40 items-baseline lg:scroll-mt-48 gap-4 border-b border-line pb-5"
    >
      <span className="font-display text-3xl text-accent sm:text-4xl">
        {index}
      </span>
      <div>
        <p className="font-display text-xs tracking-[0.25em] text-foreground/45">
          {kicker}
        </p>
        <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
          {title}
        </h2>
      </div>
    </div>
  );
}

export default function SwimmingPage() {
  return (
    <div className="flex flex-1 flex-col bg-background">
      <Hero
        kicker="SWIMMING"
        title="游泳世界"
        description="從古老的生存技能到現代奧運核心項目，認識自由式、仰式、蛙式、蝶式四大泳姿，以及世界錦標賽舞台上最頂尖的選手們。"
        image={HERO_PHOTO}
        imageAlt="2016 里約奧運，Adam Peaty 100公尺蛙式決賽"
        meta={["1896 年成為奧運項目", "1908 年成立 FINA", "World Aquatics 主辦"]}
      />

      {/* In-page nav */}
      <nav className="sticky top-16 z-30 overflow-x-auto border-b border-line bg-background/95 backdrop-blur lg:top-[112px]">
        <ul className="mx-auto flex max-w-5xl gap-7 px-6 text-sm whitespace-nowrap">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="inline-block border-b-2 border-transparent py-3 font-medium text-foreground/55 transition-colors hover:border-accent hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <main className="mx-auto flex w-full max-w-5xl flex-col gap-24 px-6 py-20">
        {/* Gallery */}
        <section className="flex flex-col gap-10">
          <Reveal>
            <div
              id="gallery"
              className="flex scroll-mt-40 items-baseline lg:scroll-mt-48 gap-4 border-b border-line pb-5"
            >
              <span
                aria-hidden
                className="mb-1.5 h-3 w-3 shrink-0 bg-accent sm:h-3.5 sm:w-3.5"
              />
              <div>
                <p className="font-display text-xs tracking-[0.25em] text-foreground/45">
                  IN ACTION
                </p>
                <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
                  精彩瞬間
                </h2>
              </div>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-px overflow-hidden bg-line sm:grid-cols-5">
            {GALLERY_PHOTOS.map((photo, i) => (
              <Reveal
                key={photo.src}
                delay={(i % 5) * 40}
                className="group relative aspect-[4/5] overflow-hidden bg-ink"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 640px) 20vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/90 via-ink/0 to-ink/0 p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-xs font-medium text-paper">
                    {photo.caption}
                  </p>
                  {photo.credit && (
                    <p className="mt-0.5 text-[10px] text-paper/60">
                      © {photo.credit}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* History */}
        <section className="flex flex-col gap-10">
          <Reveal>
            <SectionIntro
              id="history"
              index="01"
              kicker="OUR HISTORY"
              title="游泳歷史"
            />
          </Reveal>
          <div className="flex flex-col gap-7 border-l-2 border-line pl-8">
            {HISTORY.map((h, i) => (
              <Reveal key={h.era} delay={i * 45}>
                <p className="font-display text-base tracking-wide text-accent">
                  {h.era}
                </p>
                <p className="mt-1.5 max-w-2xl leading-relaxed text-foreground/75">
                  {h.text}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Strokes */}
        <section className="flex flex-col gap-10">
          <Reveal>
            <SectionIntro
              id="strokes"
              index="02"
              kicker="TECHNIQUE"
              title="泳姿技術"
            />
          </Reveal>
          <div className="flex flex-col border-t border-line">
            {STROKES.map((s, i) => (
              <Reveal
                key={s.title}
                delay={(i % 3) * 45}
                className="grid gap-3 border-b border-line py-7 sm:grid-cols-[80px_1fr] sm:gap-6"
              >
                <span className="font-display text-2xl text-foreground/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-base font-bold tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="relative aspect-[16/6] overflow-hidden">
            <Image
              src={STROKES_BANNER.src}
              alt={STROKES_BANNER.alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            <p className="absolute bottom-3 left-4 text-xs font-medium text-paper">
              {STROKES_BANNER.caption}
            </p>
          </Reveal>
        </section>

        {/* Rankings / Results */}
        <section className="flex flex-col gap-10">
          <Reveal>
            <SectionIntro
              id="rankings"
              index="03"
              kicker="WORLD CHAMPIONSHIPS"
              title="世界賽代表成績"
            />
            <p className="mt-5 text-sm text-foreground/50">
              以下為 2025 年新加坡世界游泳錦標賽精選個人項目金牌成績，完整成績請以{" "}
              <a
                href="https://www.worldaquatics.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-2"
              >
                World Aquatics 官方網站
              </a>{" "}
              為準。
            </p>
          </Reveal>
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <ResultsTable title="男子項目" kicker="MEN" rows={MEN_RESULTS} />
            </Reveal>
            <Reveal delay={90}>
              <ResultsTable
                title="女子項目"
                kicker="WOMEN"
                rows={WOMEN_RESULTS}
              />
            </Reveal>
          </div>
        </section>

        {/* Athletes */}
        <section className="flex flex-col gap-10">
          <Reveal>
            <SectionIntro
              id="athletes"
              index="04"
              kicker="ATHLETES"
              title="選手介紹"
            />
          </Reveal>
          <Reveal className="relative aspect-[16/7] overflow-hidden">
            <Image
              src={VICTORY_BANNER.src}
              alt={VICTORY_BANNER.alt}
              fill
              sizes="100vw"
              className="object-cover grayscale-[30%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4">
              <p className="text-xs font-medium text-paper">
                {VICTORY_BANNER.caption}
              </p>
              <p className="mt-0.5 text-[10px] text-paper/60">
                © {VICTORY_BANNER.credit}
              </p>
            </div>
          </Reveal>
          <div className="grid gap-px overflow-hidden bg-line sm:grid-cols-2">
            {ATHLETES.map((a, i) => (
              <Reveal
                key={a.name}
                delay={(i % 2) * 50}
                className="flex gap-4 bg-background p-6"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-accent/10 font-display text-lg text-accent">
                  {a.name.charAt(0)}
                </span>
                <div>
                  <h3 className="font-bold tracking-tight">{a.name}</h3>
                  <p className="mt-0.5 text-xs font-medium tracking-wide text-accent-2">
                    {a.tag}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                    {a.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

function ResultsTable({
  title,
  kicker,
  rows,
}: {
  title: string;
  kicker: string;
  rows: { event: string; name: string; country: string; time: string }[];
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between border-b border-line pb-3">
        <h3 className="text-lg font-bold tracking-tight">{title}</h3>
        <span className="font-display text-xs tracking-[0.2em] text-foreground/40">
          {kicker}
        </span>
      </div>
      <div className="flex flex-col">
        {rows.map((r) => (
          <div
            key={r.event}
            className="flex flex-col gap-1 border-b border-line py-3 text-sm sm:flex-row sm:items-center sm:gap-4"
          >
            <span className="w-28 shrink-0 font-display text-xs tracking-wide text-foreground/50">
              {r.event}
            </span>
            <span className="flex-1 font-medium">
              {r.name}
              <span className="ml-2 text-foreground/50">{r.country}</span>
            </span>
            <span className="font-display text-sm text-accent">
              {r.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
