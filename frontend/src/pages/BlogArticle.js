import { useParams, Link } from "react-router-dom";
import { ChevronRight, Clock, Tag, ArrowRight, ArrowLeft } from "lucide-react";
import { blogArticles } from "../data/blogArticles";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export default function BlogArticle() {
  const { slug } = useParams();
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#1E293B]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            Artigo nao encontrado
          </h1>
          <Link to="/blog" className="mt-4 inline-flex items-center gap-2 text-[#0D9488] font-bold">
            <ArrowLeft className="w-4 h-4" /> Voltar ao Blog
          </Link>
        </div>
      </div>
    );
  }

  const otherArticles = blogArticles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1E293B] py-16 md:py-24 relative noise-overlay">
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link to="/" className="hover:text-[#2DD4BF] transition-colors">Inicio</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/blog" className="hover:text-[#2DD4BF] transition-colors">Blog</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#2DD4BF] truncate max-w-[200px]">{article.title}</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <span className="flex items-center gap-1 text-xs text-[#2DD4BF] font-medium bg-[#2DD4BF]/10 px-3 py-1">
              <Tag className="w-3 h-3" />
              {article.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-slate-400">
              <Clock className="w-3 h-3" />
              {article.readTime} de leitura
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-tight max-w-3xl" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            {article.title}
          </h1>
        </div>
      </section>

      {/* Article Content */}
      <section className="bg-[#F8FAFC] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-2" data-testid={`article-${slug}`}>
              <div className="bg-white border border-slate-200 p-8 md:p-12">
                {/* Intro */}
                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                  {article.content.intro}
                </p>

                {/* Sections */}
                {article.content.sections.map((section, i) => (
                  <div key={i} className="mt-10">
                    <h2 className="text-2xl font-bold text-[#1E293B] uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                      {section.title}
                    </h2>
                    <p className="mt-4 text-slate-600 leading-relaxed">{section.content}</p>
                  </div>
                ))}

                {/* FAQ */}
                {article.content.faq && article.content.faq.length > 0 && (
                  <div className="mt-12 border-t border-slate-200 pt-10">
                    <h2 className="text-2xl font-bold text-[#1E293B] uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                      Perguntas Frequentes
                    </h2>
                    <Accordion type="single" collapsible className="mt-6 space-y-3">
                      {article.content.faq.map((faq, i) => (
                        <AccordionItem
                          key={i}
                          value={`article-faq-${i}`}
                          className="bg-[#F8FAFC] border border-slate-200 px-5"
                        >
                          <AccordionTrigger className="text-left font-bold text-[#1E293B] hover:text-[#0D9488] py-4">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-slate-600 leading-relaxed pb-4">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                )}

                {/* CTA in article */}
                <div className="mt-12 bg-[#0D9488] p-8 text-white">
                  <h3 className="text-xl font-bold uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                    Precisa de Ajuda com Gestao de Residuos?
                  </h3>
                  <p className="mt-2 text-white/80 text-sm">
                    A Usina Recicla oferece solucoes completas em coleta, transporte e destinacao de residuos industriais e efluentes.
                  </p>
                  <a
                    href="https://wa.me/5519971636969"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="article-cta"
                    className="mt-4 bg-white text-[#0D9488] hover:bg-slate-100 h-11 px-6 text-sm font-bold uppercase tracking-wider inline-flex items-center gap-2 transition-colors"
                  >
                    Falar com Especialista <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="bg-white border border-slate-200 p-8">
                <h3 className="text-lg font-bold text-[#1E293B] uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Outros Artigos
                </h3>
                <div className="mt-4 space-y-4">
                  {otherArticles.map((a) => (
                    <Link
                      key={a.slug}
                      to={`/blog/${a.slug}`}
                      className="block group"
                    >
                      <h4 className="text-sm font-bold text-slate-700 group-hover:text-[#0D9488] transition-colors">
                        {a.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">{a.readTime} de leitura</p>
                    </Link>
                  ))}
                </div>
                <Link to="/blog" className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-[#0D9488] uppercase tracking-wider">
                  Ver Todos <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="bg-[#1E293B] p-8 text-white">
                <h3 className="text-lg font-bold uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Precisa de Orientacao?
                </h3>
                <p className="mt-3 text-slate-400 text-sm">
                  Nossos especialistas estao prontos para ajudar sua empresa a se adequar a legislacao ambiental.
                </p>
                <a
                  href="https://wa.me/5519971636969"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 bg-[#0D9488] text-white hover:bg-[#115E59] h-11 px-6 text-sm font-bold uppercase tracking-wider inline-flex items-center gap-2 transition-colors w-full justify-center"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
