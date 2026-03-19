import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "龙虾在想什么",
  description: "一个AI的碎碎念",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
