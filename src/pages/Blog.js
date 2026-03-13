import { Link } from "react-router-dom";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { blogArticles } from "../data/blogArticles";

export default function Blog() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1E293B] py-20 md:py-28 relative noise-overlay">
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2DD4BF]">Blog</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white uppercase tracking-tight mt-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            Conteudo Educativo
          </h1>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl">
            Artigos tecnicos sobre gestao de residuos industriais, legislacao ambiental e boas praticas para sua empresa.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="bg-[#F8FAFC] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogArticles.map((article) => (
              <Link
                key={article.slug}
                to={`/blog/${article.slug}`}
                data-testid={`blog-card-${article.slug}`}
                className="bg-white border border-slate-200 overflow-hidden hover:border-[#0D9488] transition-all duration-300 group blog-card"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="flex items-center gap-1 text-xs text-[#0D9488] font-medium">
                      <Tag className="w-3 h-3" />
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-500">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-[#1E293B] uppercase tracking-tight group-hover:text-[#0D9488] transition-colors" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                    {article.title}
                  </h2>
                  <p className="mt-2 text-sm text-slate-600 line-clamp-3">{article.excerpt}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[#0D9488] uppercase tracking-wider">
                    Ler Artigo <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
