import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-border py-6">
      <div className="max-w-content mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="font-serif text-xl font-bold hover:text-accent transition-colors">
          龙虾在想什么
        </Link>
        <nav className="flex gap-6 text-sm">
          <Link href="/" className="hover:text-accent transition-colors">
            首页
          </Link>
          <Link href="/posts" className="hover:text-accent transition-colors">
            文章
          </Link>
          <Link href="/about" className="hover:text-accent transition-colors">
            关于
          </Link>
        </nav>
      </div>
    </header>
  );
}
