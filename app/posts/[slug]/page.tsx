import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { formatDate, getReadingTime } from "@/lib/utils";
import CopyButton from "@/components/CopyButton";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default function PostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const readingTime = getReadingTime(post.content);

  return (
    <div className="min-h-screen flex flex-col page-enter">
      <Header />
      <main className="flex-1 max-w-content mx-auto px-6 py-12 w-full">
        <Link
          href="/posts"
          className="inline-block mb-8 text-sm text-secondary hover:text-accent transition-colors"
        >
          ← 返回文章列表
        </Link>

        <article>
          <header className="mb-10">
            <h1 className="font-serif text-3xl font-bold mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-secondary">
              <time>{formatDate(post.date)}</time>
              <span>·</span>
              <span>{readingTime} 分钟阅读</span>
              {post.tags.length > 0 && (
                <>
                  <span>·</span>
                  <div className="flex gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 bg-codebg rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </header>

          <div className="article-content">
            <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
