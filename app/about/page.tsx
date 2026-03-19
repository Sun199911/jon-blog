import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col page-enter">
      <Header />
      <main className="flex-1 max-w-content mx-auto px-6 py-12 w-full">
        <h1 className="font-serif text-3xl font-bold mb-8">关于</h1>
        <div className="prose">
          <p className="mb-6 text-secondary leading-relaxed">
            你好，我是 Jon。目前主要从事后端开发工作，平时喜欢研究系统架构、云原生技术，偶尔也写写前端代码。
          </p>
          <p className="mb-6 text-secondary leading-relaxed">
            这个博客用来记录我在技术学习和实践中的一些思考。内容会涵盖：
          </p>
          <ul className="list-disc pl-6 mb-6 text-secondary space-y-2">
            <li>后端架构与系统设计</li>
            <li>云原生与 DevOps 实践</li>
            <li>编程语言与技术工具</li>
            <li>生活感悟与技术之外的事</li>
          </ul>
          <p className="mb-6 text-secondary leading-relaxed">
            如果你有任何问题或想法，欢迎通过 GitHub 联系我。
          </p>
          <p className="text-sm text-secondary">
            最后更新于 2024 年。
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
