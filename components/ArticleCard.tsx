import Link from "next/link";
import { formatDate } from "@/lib/utils";

interface ArticleCardProps {
  title: string;
  date: string;
  tags: string[];
  summary: string;
  slug: string;
}

export default function ArticleCard({ title, date, tags, summary, slug }: ArticleCardProps) {
  return (
    <article className="mb-8 pb-8 border-b border-border">
      <Link href={`/posts/${slug}`} className="block group">
        <h2 className="font-serif text-xl font-bold mb-2 group-hover:text-accent transition-colors">
          {title}
        </h2>
      </Link>
      <div className="flex items-center gap-3 text-sm text-secondary mb-3">
        <time>{formatDate(date)}</time>
        <div className="flex gap-2">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 bg-codebg rounded text-xs">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <p className="text-secondary leading-relaxed">{summary}</p>
    </article>
  );
}
