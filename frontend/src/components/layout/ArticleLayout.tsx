import TOC from "@/components/article/TOC";
import ReadingProgress from "@/components/article/ReadingProgress";
import StickyCTA from "@/components/monetization/StickyCTA";

type Props = {
  children: React.ReactNode;
};

export default function ArticleLayout({ children }: Props) {
  return (
    <div className="relative">

      <ReadingProgress />

      <main className="max-w-[760px] mx-auto px-6 pt-28 pb-32">
        <article className="article-content">
          {children}
        </article>
      </main>

      <StickyCTA />

      <TOC />

    </div>
  );
}