import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/ScrollEffects";
import { ARTICLES, getArticle } from "../articles";

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title} | Hsin Sports World`,
    description: article.excerpt,
  };
}

export default async function BlogArticlePage(
  props: PageProps<"/blog/[slug]">
) {
  const { slug } = await props.params;
  const article = getArticle(slug);
  if (!article) notFound();

  const otherArticles = ARTICLES.filter((a) => a.slug !== slug);

  return (
    <div className="flex flex-1 flex-col bg-background">
      <section className="bg-brand text-white">
        <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
          <Link
            href="/blog"
            className="text-sm text-white/60 transition-colors hover:text-white"
          >
            ← 返回文章列表
          </Link>
          <p className="font-display mt-6 text-xs font-semibold tracking-[0.3em] text-white/60">
            {article.kicker}
          </p>
          <h1 className="mt-3 text-3xl leading-tight font-bold tracking-tight sm:text-4xl">
            {article.title}
          </h1>
          <p className="mt-4 text-sm text-white/60">
            閱讀時間．{article.readTime}
          </p>
        </div>
      </section>

      <main className="mx-auto flex w-full max-w-3xl flex-col gap-14 px-6 py-16 sm:py-20">
        {article.sections.map((section, i) => (
          <Reveal key={section.heading} delay={i * 40}>
            <section className="flex flex-col gap-4">
              <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
                {section.heading}
              </h2>
              {section.paragraphs.map((p) => (
                <p
                  key={p}
                  className="leading-relaxed text-foreground/80"
                >
                  {p}
                </p>
              ))}
              {section.list && (
                <ul className="mt-1 flex flex-col gap-3 border-l-2 border-line pl-5">
                  {section.list.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 leading-relaxed text-foreground/75"
                    >
                      <span className="mt-1 text-accent">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </Reveal>
        ))}

        <div className="mt-6 border-t border-line pt-10">
          <p className="font-display text-xs tracking-[0.2em] text-foreground/45">
            KEEP READING
          </p>
          <div className="mt-4 flex flex-col gap-1">
            {otherArticles.map((a) => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="group flex items-center justify-between gap-4 border-b border-line py-4 transition-colors hover:text-accent"
              >
                <span className="font-medium">{a.title}</span>
                <span
                  aria-hidden
                  className="shrink-0 transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            ))}
            <Link
              href="/table-tennis"
              className="group flex items-center justify-between gap-4 border-b border-line py-4 transition-colors hover:text-accent"
            >
              <span className="font-medium">回到桌球世界主頁</span>
              <span
                aria-hidden
                className="shrink-0 transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
