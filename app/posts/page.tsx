import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { getAllPosts } from "@/lib/posts";

export default function PostsPage() {
  const allPosts = getAllPosts();

  return (
    <div className="min-h-screen flex flex-col page-enter">
      <Header />
      <main className="flex-1 max-w-content mx-auto px-6 py-12 w-full">
        <h1 className="font-serif text-3xl font-bold mb-8">文章</h1>
        {allPosts.length > 0 ? (
          <div>
            {allPosts.map((post) => (
              <ArticleCard
                key={post.slug}
                title={post.title}
                date={post.date}
                tags={post.tags}
                summary={post.summary}
                slug={post.slug}
              />
            ))}
          </div>
        ) : (
          <p className="text-secondary">暂无文章，敬请期待。</p>
        )}
      </main>
      <Footer />
    </div>
  );
}
