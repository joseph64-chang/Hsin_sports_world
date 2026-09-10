import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import { Reveal } from "@/components/ScrollEffects";
import {
  HERO_PHOTO,
  STYLES_BANNER,
  EQUIPMENT_PHOTO,
  TRAINING_PHOTO,
  GALLERY_PHOTOS,
} from "./photos";

export const metadata: Metadata = {
  title: "桌球世界 | Hsin Sports World",
  description: "桌球歷史、賽事日程、技術、器材、WTT世界排名、球員介紹、各國球風與訓練方法。",
};

const NAV_ITEMS = [
  { id: "gallery", label: "精彩瞬間" },
  { id: "history", label: "歷史" },
  { id: "schedule", label: "賽事日程" },
  { id: "skills", label: "技術" },
  { id: "equipment", label: "器材" },
  { id: "rankings", label: "WTT排名" },
  { id: "players", label: "球員介紹" },
  { id: "styles", label: "各國球風" },
  { id: "training", label: "訓練" },
];

const HISTORY = [
  {
    era: "1880s，英國",
    text: "桌球起源於維多利亞時期英國上流社會的室內遊戲，以書本當球網、酒瓶軟木塞或橡膠球在餐桌上模擬網球，早期被稱為「Whiff-Whaff」或「Gossima」。",
  },
  {
    era: "1901 年",
    text: "英國廠商 Jaques of London 註冊「Ping Pong」商標，賽璐珞（celluloid）球與木拍蒙皮開始普及，運動規則初步成形。",
  },
  {
    era: "1926 年",
    text: "國際桌球總會（ITTF）於柏林成立，同年首屆世界桌球錦標賽在倫敦舉行，桌球正式走向國際化競技運動。",
  },
  {
    era: "1950～60 年代",
    text: "海綿與膠皮球拍問世，大幅提升旋轉與速度，日本、匈牙利選手率先崛起，中國隊隨後急起直追並開始建立長期優勢。",
  },
  {
    era: "1988 年，漢城奧運",
    text: "桌球首次成為奧運正式比賽項目，此後中國選手長期在奧運桌球項目中保持壓倒性優勢。",
  },
  {
    era: "2000～2008 年",
    text: "為降低比賽節奏與提升觀賞性，ITTF 陸續將球體從 38mm 改為 40mm、賽制由 21 分制改為 11 分制，並於 2008 年禁用有機溶劑膠水。",
  },
  {
    era: "2014 年起",
    text: "比賽用球材質由賽璐珞改為 ABS 塑料球（俗稱「40+」），球速與旋轉略有下降，也改變了部分打法趨勢。",
  },
  {
    era: "2021 年至今",
    text: "世界桌球職業大聯盟 WTT（World Table Tennis）成立，由 ITTF 主導整合世界巡迴賽事，建立冠軍賽、球星挑戰賽、選手賽等分級賽制與世界排名積分系統。",
  },
];

const SCHEDULE = [
  {
    month: "1月",
    event: "WTT 冠軍賽 Doha",
    location: "卡達・多哈",
    dates: "1/7–1/11",
  },
  {
    month: "2月",
    event: "新加坡大滿貫 Singapore Smash",
    location: "新加坡",
    dates: "2/19–3/1",
  },
  {
    month: "3月",
    event: "WTT 冠軍賽 Chongqing",
    location: "中國・重慶",
    dates: "3/10–3/15",
  },
  {
    month: "4月",
    event: "WTT Contender Taiyuan",
    location: "中國・太原",
    dates: "4/7–4/12",
  },
  {
    month: "5月",
    event: "WTT Contender Lagos",
    location: "奈及利亞・拉哥斯",
    dates: "5/19–5/24",
  },
  {
    month: "6月",
    event: "WTT Star Contender Ljubljana",
    location: "斯洛維尼亞・盧比安納",
    dates: "6/16–6/21",
  },
  {
    month: "7月",
    event: "WTT Star Contender Brazil",
    location: "巴西",
    dates: "7/21–7/26",
  },
  {
    month: "8月",
    event: "WTT 冠軍賽 Yokohama",
    location: "日本・橫濱",
    dates: "8/5–8/9",
  },
  {
    month: "9月",
    event: "WTT 冠軍賽 Macao",
    location: "中國澳門",
    dates: "9/8–9/13",
  },
  {
    month: "10月",
    event: "China Smash 中國大滿貫",
    location: "中國",
    dates: "10/1–10/11",
  },
  {
    month: "11月",
    event: "世界青少年錦標賽 Manama",
    location: "巴林・麥納麥",
    dates: "11/21–11/28",
  },
  {
    month: "12月",
    event: "WTT 年終總決賽 Hong Kong",
    location: "中國香港",
    dates: "12/8–12/13",
  },
];

const SKILLS = [
  {
    title: "握拍方式",
    desc: "橫拍（Shakehand）如握手般握持，正反手轉換靈活，是目前世界主流握法；直拍（Penhold）以食指與拇指夾住拍柄，傳統打法正手強勢，現代直拍選手多發展「直拍橫打」補強反手。",
  },
  {
    title: "步法與站位",
    desc: "基本步法包含並步、交叉步、跳步與側身步，目的是讓身體隨時保持在球的正後方擊球。良好的步法是銜接每一板技術動作的根基。",
  },
  {
    title: "弧圈球（Loop）",
    desc: "以強烈上旋為核心的現代主流進攻技術，透過摩擦球體製造前沖或加轉弧圈，是當今男女頂尖選手相持與搶攻的主要手段。",
  },
  {
    title: "搓球與擺短",
    desc: "以下旋為主的控制型技術，用於處理台內短球或化解對手強力進攻，擺短講究「短、低、轉」，是接發球階段的關鍵技巧。",
  },
  {
    title: "削球",
    desc: "以大幅後退、製造強烈下旋回球為特色的防守反擊打法，透過旋轉變化和落點調動對手，伺機反攻，是少數但仍活躍於世界舞台的獨特風格。",
  },
  {
    title: "發球與接發球",
    desc: "發球旋轉（上旋、下旋、側旋、逆旋、不轉混合）與落點變化是搶佔主動的第一步；接發球則需透過觀察拍面角度與觸球瞬間判斷旋轉，做出擺短、劈長或挑打反應。",
  },
];

const EQUIPMENT = [
  {
    title: "球拍底板",
    desc: "由多層天然木材（部分加入碳纖維、芳綸纖維）壓製而成，依速度、控制與弧圈性能分為純木、複合纖維等類型，選手依打法風格挑選軟硬與彈性。",
  },
  {
    title: "膠皮",
    desc: "反膠（顆粒朝內，最主流，利於製造強烈旋轉）、正膠（顆粒朝外，球速快、旋轉相對單純，利於快攻）、長膠（削弱來球旋轉、製造怪異回球，常見於防守型打法）、生膠（介於正膠與反膠之間）。",
  },
  {
    title: "比賽用球",
    desc: "現行採用直徑 40mm 的「40+」ABS 塑料無縫球，顏色為白色或橙色（依球台與對比色而定），比賽採用符合 ITTF 認證的三星球。",
  },
  {
    title: "球台與球網",
    desc: "標準比賽球台面漆成深綠色或藍色以降低反光，並附中線標記雙打發球區；球網含支架，張力與高度需符合規格才可用於正式比賽。",
  },
  {
    title: "服裝與鞋",
    desc: "比賽服顏色須與球色明顯區隔（避免白球混淆），桌球鞋強調輕量、抓地與快速變向支撐，鞋底多用非黑膠底以免刮傷場地。",
  },
  {
    title: "訓練輔助器材",
    desc: "發球機可設定旋轉、速度與落點做重複性多球訓練；近年也出現如桌球機器人等 AI 輔助訓練工具，用於步伐與擊球節奏訓練。",
  },
];

const MEN_RANKINGS = [
  { rank: 1, name: "王楚欽 Wang Chuqin", country: "中國", points: "8,857" },
  { rank: 2, name: "費利克斯・勒布倫 Félix Lebrun", country: "法國", points: "7,479" },
  { rank: 3, name: "松島輝空 Sora Matsushima", country: "日本", points: "6,930" },
  { rank: 4, name: "張本智和 Tomokazu Harimoto", country: "日本", points: "6,333" },
  { rank: 5, name: "特魯斯・莫勒加德 Truls Moregard", country: "瑞典", points: "4,980" },
  { rank: 6, name: "林昀儒 Lin Yun-Ju", country: "中華台北", points: "4,405" },
  { rank: 7, name: "雨果・卡爾德拉諾 Hugo Calderano", country: "巴西", points: "4,240" },
  { rank: 8, name: "林詩棟 Lin Shidong", country: "中國", points: "3,842" },
  { rank: 9, name: "亞歷克斯・勒布倫 Alexis Lebrun", country: "法國", points: "3,600" },
  { rank: 10, name: "張禹珍 Jang Woojin", country: "韓國", points: "3,356" },
];

const WOMEN_RANKINGS = [
  { rank: 1, name: "孫穎莎 Sun Yingsha", country: "中國", points: "9,675" },
  { rank: 2, name: "王曼昱 Wang Manyu", country: "中國", points: "9,465" },
  { rank: 3, name: "張本美和 Miwa Harimoto", country: "日本", points: "6,289" },
  { rank: 4, name: "蒯曼 Kuai Man", country: "中國", points: "5,680" },
  { rank: 5, name: "王藝迪 Wang Yidi", country: "中國", points: "5,647" },
  { rank: 6, name: "早田希夢 Hina Hayata", country: "日本", points: "4,725" },
  { rank: 7, name: "陳幸同 Chen Xingtong", country: "中國", points: "4,325" },
  { rank: 8, name: "朱雨玲 Zhu Yuling", country: "中國", points: "3,710" },
  { rank: 9, name: "薩賓娜・溫特 Sabine Winter", country: "德國", points: "3,550" },
  { rank: 10, name: "申裕斌 Shin Yubin", country: "韓國", points: "3,520" },
];

const PLAYERS = [
  {
    name: "王楚欽 Wang Chuqin",
    gender: "M" as const,
    tag: "中國・世界排名男單第一",
    desc: "橫拍兩面反膠全面型打法，正手爆發力與反手擰拉技術俱佳，兼項男雙、混雙皆為世界頂尖組合，是新生代領軍人物。",
    photo: "/images/player-wang-chuqin.jpg",
    photoCredit: "XIAOYU TANG",
  },
  {
    name: "孫穎莎 Sun Yingsha",
    gender: "F" as const,
    tag: "中國・世界排名女單第一",
    desc: "以極快的相持節奏與正反手均衡進攻著稱，比賽氣勢強、心理素質穩定，是巴黎奧運女單金牌得主。",
    photo: "/images/player-sun-yingsha.png",
    photoCredit: "China News Service",
  },
  {
    name: "馬龍 Ma Long",
    gender: "M" as const,
    tag: "中國・傳奇名將",
    desc: "生涯集世界盃、世錦賽、奧運金牌於一身的「大滿貫」選手，技術全面、比賽閱讀能力出眾，被廣泛視為桌球史上最偉大選手之一。",
    photo: "/images/player-ma-long.jpg",
    photoCredit: "Pierre-Yves Beaudouin",
  },
  {
    name: "樊振東 Fan Zhendong",
    gender: "M" as const,
    tag: "中國・奧運男單冠軍",
    desc: "以強悍的正手弧圈與相持能力聞名，擊球力量與穩定性兼具，是東京、巴黎奧運週期的主力大將。",
    photo: "/images/player-fan-zhendong.jpg",
    photoCredit: "XIAOYU TANG",
  },
  {
    name: "張本智和 Tomokazu Harimoto",
    gender: "M" as const,
    tag: "日本・新生代主力",
    desc: "自青少年時期即嶄露頭角，反手快撕與正手弧圈速度快、壓迫感強，是日本隊近十年最具代表性的選手之一。",
    photo: "/images/player-harimoto-tomokazu.jpg",
    photoCredit: "Peter Porai-Koshits",
  },
  {
    name: "費利克斯・勒布倫 Félix Lebrun",
    gender: "M" as const,
    tag: "法國・歐洲新星",
    desc: "與兄長 Alexis Lebrun 並列歐洲新生代雙子星，發球與接發球細膩多變，弧圈與台內小球技術兼具，帶動歐洲桌球復甦。",
    photo: "/images/player-felix-lebrun.jpg",
    photoCredit: "Julia Engel",
  },
  {
    name: "林昀儒 Lin Yun-Ju",
    gender: "M" as const,
    tag: "中華台北・穩健全能",
    desc: "有「小林同學」之稱，打法穩健細膩、正反手銜接流暢，多次於世界大賽擊敗中國一線選手，是台灣桌球代表人物。",
    photo: "/images/player-lin-yunju-v2.jpg",
    photoCredit: "Marcus Cyron",
  },
  {
    name: "王曼昱 Wang Manyu",
    gender: "F" as const,
    tag: "中國・力量型打法",
    desc: "正手殺傷力極強、相持穩定，是女子桌壇力量型打法的代表，長期位居世界排名前列。",
    photo: "/images/player-wang-manyu.jpg",
    photoCredit: "XIAOYU TANG",
  },
];

const MEN_PLAYERS = PLAYERS.filter((p) => p.gender === "M");
const WOMEN_PLAYERS = PLAYERS.filter((p) => p.gender === "F");

const STYLES = [
  {
    country: "中國",
    flag: "🇨🇳",
    desc: "體系化選訓機制搭配「快、狠、準、變、轉」的傳統打法哲學，正反手技術均衡發展，長期是奧運與世錦賽的絕對優勢隊伍，各種打法（弧圈、直拍橫打、削球）人才齊全。",
  },
  {
    country: "日本",
    flag: "🇯🇵",
    desc: "近十年積極推動年輕化培訓計畫，選手多從小接受高強度多球訓練，特色是出手速度快、反手技術銳利，張本兄妹世代帶動日本隊整體實力大幅提升。",
  },
  {
    country: "德國／歐洲傳統勢力",
    flag: "🇩🇪",
    desc: "以奧恰洛夫、波爾等名將為代表，強調力量型弧圈球與穩定的相持能力，職業聯賽體系完整，是歐洲桌球長期的中堅力量。",
  },
  {
    country: "瑞典",
    flag: "🇸🇪",
    desc: "1990 年代由瓦爾德內爾、佩爾森等名將帶領，曾多次擊敗中國隊奪得世界冠軍，打法全面、比賽經驗豐富，是歐洲桌球黃金時代的代表。",
  },
  {
    country: "法國",
    flag: "🇫🇷",
    desc: "以勒布倫兄弟為首的新生代帶動法國隊快速崛起，技術細膩、發球接發球變化多，逐漸成為衝擊中國隊優勢地位的新興力量。",
  },
  {
    country: "韓國",
    flag: "🇰🇷",
    desc: "傳統上以削球與弧圈結合的防守反擊風格聞名，團隊默契佳、雙打實力強，歷史上曾誕生朱世赫等世界級削球名將。",
  },
  {
    country: "中華台北",
    flag: "🇹🇼",
    desc: "技術細膩、球路變化豐富，近年以林昀儒為代表打入世界一流水準，青少年培訓體系逐漸與國際接軌。",
  },
];

const TRAINING = [
  {
    title: "基本功／多球訓練",
    desc: "教練或發球機連續餵球，針對正手攻球、反手撥擋、弧圈球等單一動作進行大量重複訓練，建立肌肉記憶與動作穩定性。",
  },
  {
    title: "步法與敏捷訓練",
    desc: "透過側併步、交叉步練習、跳繩與敏捷梯訓練，強化橫向移動速度與擊球後的還原能力，是銜接每一板技術的基礎。",
  },
  {
    title: "體能訓練",
    desc: "核心肌群穩定性、下肢爆發力與心肺耐力訓練，支撐長時間高強度相持與多局比賽的體力需求。",
  },
  {
    title: "戰術與套路訓練",
    desc: "針對發球搶攻、接發球搶攻、相持球路線與變化進行套路化演練，並依對手打法（如削球、左手持拍）做針對性戰術設計。",
  },
  {
    title: "心理素質訓練",
    desc: "透過模擬比賽壓力情境、呼吸調節與專注力訓練，提升關鍵分的臨場穩定性與抗壓能力。",
  },
  {
    title: "影像與數據分析",
    desc: "職業選手普遍運用錄影回放拆解自己與對手的技戰術習慣，近年也開始導入數據追蹤輔助訓練決策。",
  },
  {
    title: "業餘愛好者建議",
    desc: "初學者建議先找合格教練矯正握拍與基本動作，搭配規律的多球練習與俱樂部比賽，循序累積實戰經驗，避免自我摸索養成錯誤習慣。",
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

export default function TableTennisPage() {
  return (
    <div className="flex flex-1 flex-col bg-background">
      <Hero
        kicker="TABLE TENNIS"
        title="桌球世界"
        description="從百年歷史、賽事日程、技術動作、器材選擇，到 WTT 世界排名、球員介紹、各國球風與訓練方法，一次認識桌球這項「小球大智慧」的運動。"
        image={HERO_PHOTO}
        imageAlt="2016 里約奧運，選手擊球瞬間特寫"
        meta={["1926 年成立 ITTF", "奧運正式項目", "WTT 職業巡迴賽"]}
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
              title="桌球歷史"
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

        {/* Schedule */}
        <section className="flex flex-col gap-10">
          <Reveal>
            <SectionIntro
              id="schedule"
              index="02"
              kicker="SCHEDULE"
              title="各月份賽事日程表"
            />
            <p className="mt-5 text-sm text-foreground/50">
              以下為 2026 年 WTT／ITTF
              重點賽事月曆，每月精選一項代表賽事，完整賽程請以{" "}
              <a
                href="https://www.ittf.com/2026-events-calendar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-2"
              >
                ITTF 官方賽事日曆
              </a>{" "}
              為準。
            </p>
          </Reveal>
          <div className="flex flex-col border-t border-line">
            {SCHEDULE.map((s, i) => (
              <Reveal
                key={s.month}
                delay={(i % 6) * 40}
                className="grid items-baseline gap-2 border-b border-line py-5 sm:grid-cols-[72px_1fr_auto] sm:gap-6"
              >
                <span className="font-display text-2xl text-accent">
                  {s.month}
                </span>
                <div>
                  <h3 className="text-base font-bold tracking-tight">
                    {s.event}
                  </h3>
                  <p className="mt-1 text-sm text-foreground/60">
                    {s.location}
                  </p>
                </div>
                <span className="font-display text-sm text-foreground/50 sm:text-right">
                  {s.dates}
                </span>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="flex flex-col gap-10">
          <Reveal>
            <SectionIntro
              id="skills"
              index="03"
              kicker="TECHNIQUE"
              title="技術動作"
            />
          </Reveal>
          <div className="flex flex-col border-t border-line">
            {SKILLS.map((s, i) => (
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
        </section>

        {/* Equipment */}
        <section className="flex flex-col gap-10">
          <Reveal>
            <SectionIntro
              id="equipment"
              index="04"
              kicker="GEAR"
              title="裝備與器材"
            />
          </Reveal>
          <div className="grid gap-px overflow-hidden bg-line sm:grid-cols-2 lg:grid-cols-3">
            {EQUIPMENT.map((e, i) => (
              <Reveal
                key={e.title}
                delay={(i % 3) * 45}
                className="bg-background p-6"
              >
                <span className="font-display text-xs tracking-[0.2em] text-accent-2">
                  GEAR {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-base font-bold tracking-tight">
                  {e.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                  {e.desc}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal className="relative aspect-[16/6] overflow-hidden">
            <Image
              src={EQUIPMENT_PHOTO.src}
              alt={EQUIPMENT_PHOTO.alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            <p className="absolute bottom-3 left-4 text-xs font-medium text-paper">
              {EQUIPMENT_PHOTO.caption}
            </p>
          </Reveal>
        </section>

        {/* Rankings */}
        <section className="flex flex-col gap-10">
          <Reveal>
            <SectionIntro
              id="rankings"
              index="05"
              kicker="WTT RANKINGS"
              title="WTT 世界排名"
            />
            <p className="mt-5 text-sm text-foreground/50">
              以下為 2026 年 9 月參考排名（積分依 WTT
              賽事結果每週更新，正式最新排名請以{" "}
              <a
                href="https://www.ittf.com/rankings/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-2"
              >
                ITTF 官方網站
              </a>{" "}
              為準）。
            </p>
          </Reveal>
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <RankingTable
                title="男子單打"
                kicker="MEN'S SINGLES"
                rows={MEN_RANKINGS}
              />
            </Reveal>
            <Reveal delay={90}>
              <RankingTable
                title="女子單打"
                kicker="WOMEN'S SINGLES"
                rows={WOMEN_RANKINGS}
              />
            </Reveal>
          </div>
        </section>

        {/* Players */}
        <section className="flex flex-col gap-10">
          <Reveal>
            <SectionIntro
              id="players"
              index="06"
              kicker="ATHLETES"
              title="球員介紹"
            />
          </Reveal>
          <div className="grid gap-10 lg:grid-cols-2">
            <PlayerGroup title="男子選手" kicker="MEN" players={MEN_PLAYERS} />
            <PlayerGroup
              title="女子選手"
              kicker="WOMEN"
              players={WOMEN_PLAYERS}
            />
          </div>
          <p className="text-xs leading-relaxed text-foreground/40">
            球員照片來源：Wikimedia Commons（CC BY / CC BY-SA），攝影／提供者：
            {Array.from(new Set(PLAYERS.map((p) => p.photoCredit))).join(
              "、",
            )}
            。
          </p>
        </section>

        {/* Styles */}
        <section className="flex flex-col gap-10">
          <Reveal>
            <SectionIntro
              id="styles"
              index="07"
              kicker="PLAYING STYLES"
              title="各國球風"
            />
          </Reveal>
          <Reveal className="relative aspect-[16/7] overflow-hidden">
            <Image
              src={STYLES_BANNER.src}
              alt={STYLES_BANNER.alt}
              fill
              sizes="100vw"
              className="object-cover grayscale-[30%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4">
              <p className="text-xs font-medium text-paper">
                {STYLES_BANNER.caption}
              </p>
              <p className="mt-0.5 text-[10px] text-paper/60">
                © {STYLES_BANNER.credit}
              </p>
            </div>
          </Reveal>
          <div className="grid gap-px overflow-hidden bg-line sm:grid-cols-2">
            {STYLES.map((s, i) => (
              <Reveal
                key={s.country}
                delay={(i % 2) * 50}
                className="bg-background p-6"
              >
                <span
                  aria-hidden
                  className={`inline-block h-1 w-10 ${
                    i % 2 === 0 ? "bg-accent" : "bg-accent-2"
                  }`}
                />
                <h3 className="mt-3 flex items-center gap-2 font-display text-xl tracking-wide">
                  <span aria-hidden className="text-2xl leading-none">
                    {s.flag}
                  </span>
                  {s.country}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                  {s.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Training */}
        <section className="flex flex-col gap-10">
          <Reveal>
            <SectionIntro
              id="training"
              index="08"
              kicker="TRAINING"
              title="桌球訓練"
            />
          </Reveal>
          <div className="grid gap-px overflow-hidden bg-line sm:grid-cols-2 lg:grid-cols-3">
            {TRAINING.map((t, i) => (
              <Reveal
                key={t.title}
                delay={(i % 3) * 45}
                className="bg-background p-6"
              >
                <span className="font-display text-xs tracking-[0.2em] text-foreground/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-base font-bold tracking-tight">
                  {t.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                  {t.desc}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal className="relative aspect-[16/6] overflow-hidden">
            <Image
              src={TRAINING_PHOTO.src}
              alt={TRAINING_PHOTO.alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <p className="absolute bottom-3 left-4 text-xs font-medium text-paper">
              {TRAINING_PHOTO.caption}
            </p>
          </Reveal>
        </section>
      </main>
    </div>
  );
}

function RankingTable({
  title,
  kicker,
  rows,
}: {
  title: string;
  kicker: string;
  rows: { rank: number; name: string; country: string; points: string }[];
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
            key={r.rank}
            className={`flex items-center gap-4 border-b border-line py-3 text-sm ${
              r.rank === 1 ? "text-accent font-semibold" : ""
            }`}
          >
            <span className="font-display w-8 text-xl">{r.rank}</span>
            <span className="flex-1 font-medium">{r.name}</span>
            <span className="hidden text-foreground/50 sm:inline">
              {r.country}
            </span>
            <span className="w-16 text-right text-foreground/50">
              {r.points}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PlayerGroup({
  title,
  kicker,
  players,
}: {
  title: string;
  kicker: string;
  players: (typeof PLAYERS)[number][];
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
        {players.map((p) => (
          <Reveal
            key={p.name}
            className="flex gap-4 border-b border-line py-6"
          >
            {p.photo ? (
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-accent/10">
                <Image
                  src={p.photo}
                  alt={p.name}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
            ) : (
              <span className="flex h-16 w-16 shrink-0 items-center justify-center bg-accent/10 font-display text-lg text-accent">
                {p.name.charAt(0)}
              </span>
            )}
            <div>
              <h4 className="font-bold tracking-tight">{p.name}</h4>
              <p className="mt-0.5 text-xs font-medium tracking-wide text-accent-2">
                {p.tag}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                {p.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
