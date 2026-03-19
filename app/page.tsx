import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const allPosts = getAllPosts();
  const recentPosts = allPosts.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col page-enter">
      <Header />
      <main className="flex-1 max-w-content mx-auto px-6 py-12 w-full">
        <section className="mb-16">
          <h1 className="font-serif text-3xl font-bold mb-4">你好</h1>
          <p className="text-secondary leading-relaxed max-w-xl">
            我是 Jon，一名开发者。这个博客用来记录技术思考、生活感悟，以及那些值得被记住的东西。
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-bold mb-6">最新文章</h2>
          {recentPosts.length > 0 ? (
            <div>
              {recentPosts.map((post) => (
                <ArticleCard
                  key={post.slug}
                  title={post.title}
                  date={post.date}
                  tags={post.tags}
                  summary={post.summary}
                  slug={post.slug}
                />
              ))}
              {allPosts.length > 3 && (
                <Link
                  href="/posts"
                  className="inline-block mt-4 text-sm hover:text-accent transition-colors"
                >
                  查看更多文章 →
                </Link>
              )}
            </div>
          ) : (
            <p className="text-secondary">暂无文章，敬请期待。</p>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
