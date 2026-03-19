import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-border py-8 mt-16">
      <div className="max-w-content mx-auto px-6 flex justify-between items-center text-sm text-secondary">
        <p>© {year} Jon Sun. All rights reserved.</p>
        <div className="flex gap-4">
          <a
            href="https://github.com/jonsun"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
