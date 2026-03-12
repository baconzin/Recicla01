import { Link } from "react-router-dom";
import { Droplets, Recycle, FileCheck, Search, Truck, ShieldCheck, ArrowRight, ChevronRight, HardHat } from "lucide-react";

const FLEET_IMG = "https://images.unsplash.com/photo-1621859191129-6bc88cf02966?auto=format&fit=crop&w=800&q=80";

export default function Servicos() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1E293B] py-20 md:py-28 relative noise-overlay">
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2DD4BF]">Servicos</span>
          <h1
            className="text-4xl sm:text-5xl font-extrabold text-white uppercase tracking-tight mt-3"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Servicos Operacionais
          </h1>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl">
            Solucoes completas em coleta, transporte e destinacao final de residuos industriais e efluentes para empresas em todo o Brasil.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-[#F8FAFC] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Effluent Collection */}
            <div className="bg-white border border-slate-200 overflow-hidden hover:border-[#0D9488] transition-colors group">
              <div className="h-56 overflow-hidden">
                <img src={FLEET_IMG} alt="Coleta de efluentes industriais" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Droplets className="w-6 h-6 text-[#0D9488]" />
                  <h2 className="text-2xl font-bold text-[#1E293B] uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                    Coleta de Efluentes Industriais
                  </h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Caminhoes-tanque com alto vacuo e hidrojateamento para efluentes industriais, sanitarios e limpeza de caixas separadoras de agua e oleo.
                </p>
                <ul className="mt-4 space-y-2">
                  {["Efluentes industriais e sanitarios", "Limpeza de caixas separadoras", "Hidrojateamento de tubulacoes", "Coleta programada ou emergencial", "Atendimento em todo o Brasil"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-[#0D9488] shrink-0"></div>{item}
                    </li>
                  ))}
                </ul>
                <Link to="/coleta-de-efluentes" data-testid="servicos-efluentes-link" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0D9488] uppercase tracking-wider hover:gap-3 transition-all">
                  Detalhes Completos <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Waste Management */}
            <div className="bg-white border border-slate-200 overflow-hidden hover:border-[#0D9488] transition-colors group">
              <div className="h-56 overflow-hidden bg-[#1E293B] flex items-center justify-center">
                <Recycle className="w-24 h-24 text-[#0D9488]/30" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Recycle className="w-6 h-6 text-[#0D9488]" />
                  <h2 className="text-2xl font-bold text-[#1E293B] uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                    Gestao de Residuos Industriais
                  </h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Manuseio especializado de residuos Classe I (Perigosos) e Classe II (Nao Inertes), com triagem e reinsercao na cadeia produtiva.
                </p>
                <ul className="mt-4 space-y-2">
                  {["Residuos Classe I (Perigosos)", "Residuos Classe II (Nao Inertes)", "Triagem e reciclagem", "Sucatas industriais", "Classificacao conforme NBR 10004"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-[#0D9488] shrink-0"></div>{item}
                    </li>
                  ))}
                </ul>
                <Link to="/gestao-de-residuos" data-testid="servicos-residuos-link" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0D9488] uppercase tracking-wider hover:gap-3 transition-all">
                  Detalhes Completos <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Transport Class I */}
            <div className="bg-white border border-slate-200 p-8 hover:border-[#0D9488] transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Truck className="w-6 h-6 text-[#0D9488]" />
                <h2 className="text-2xl font-bold text-[#1E293B] uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Transporte de Residuos Classe I
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Transporte licenciado de residuos perigosos com rastreabilidade completa, documentacao ambiental obrigatoria e conformidade com NBR 13221.
              </p>
              <ul className="mt-4 space-y-2">
                {["Veiculos licenciados e rastreados", "Motoristas com MOPP", "Kit de emergencia ambiental", "Seguro ambiental obrigatorio", "Rastreabilidade em tempo real"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 bg-[#0D9488] shrink-0"></div>{item}
                  </li>
                ))}
              </ul>
              <Link to="/transporte-de-residuos-classe-i" data-testid="servicos-transporte-link" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0D9488] uppercase tracking-wider hover:gap-3 transition-all">
                Detalhes Completos <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Documentation */}
            <div className="bg-white border border-slate-200 p-8 hover:border-[#0D9488] transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <FileCheck className="w-6 h-6 text-[#0D9488]" />
                <h2 className="text-2xl font-bold text-[#1E293B] uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Documentacao Ambiental
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Emissao completa de MTR, CDF e suporte para CADRI. Regularizacao junto a CETESB e SINIR com engenheiro ambiental responsavel.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-4">
                {[
                  { label: "MTR", desc: "Manifesto de Transporte", link: "/mtr-manifesto-transporte-residuos" },
                  { label: "CDF", desc: "Certificado de Destinacao", link: "/documentacao-ambiental" },
                  { label: "CADRI", desc: "Certificado CETESB", link: "/cadri-certificado-movimentacao-residuos" },
                ].map((doc) => (
                  <Link key={doc.label} to={doc.link} className="bg-[#F8FAFC] border border-slate-200 p-4 text-center hover:border-[#0D9488] transition-colors">
                    <span className="text-lg font-bold text-[#0D9488]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{doc.label}</span>
                    <p className="text-xs text-slate-500 mt-1">{doc.desc}</p>
                  </Link>
                ))}
              </div>
              <Link to="/documentacao-ambiental" data-testid="servicos-docs-link" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0D9488] uppercase tracking-wider hover:gap-3 transition-all">
                Detalhes Completos <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Traceability */}
            <div className="bg-[#1E293B] border border-slate-700 p-8 hover:border-[#2DD4BF] transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Search className="w-6 h-6 text-[#2DD4BF]" />
                <h2 className="text-2xl font-bold text-white uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Rastreabilidade Completa
                </h2>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Monitoramento de carga da coleta ate a destinacao final. Transparencia total em cada etapa do processo com relatorios detalhados.
              </p>
              <div className="mt-6 space-y-4">
                {[
                  { icon: Truck, text: "Rastreamento da frota em tempo real" },
                  { icon: ShieldCheck, text: "Comprovacao documental em cada etapa" },
                  { icon: FileCheck, text: "Relatorios periodicos de operacao" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-[#2DD4BF] shrink-0" />
                    <span className="text-sm text-slate-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Eng Ambiental */}
            <div className="bg-[#1E293B] border border-slate-700 p-8 hover:border-[#2DD4BF] transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <HardHat className="w-6 h-6 text-[#2DD4BF]" />
                <h2 className="text-2xl font-bold text-white uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Engenheiro Ambiental Responsavel
                </h2>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Todas as operacoes contam com acompanhamento de engenheiro ambiental responsavel, garantindo conformidade tecnica e legal em cada etapa.
              </p>
              <div className="mt-6 space-y-4">
                {[
                  { icon: ShieldCheck, text: "Conformidade com legislacao ambiental" },
                  { icon: FileCheck, text: "Laudos tecnicos especializados" },
                  { icon: Search, text: "Assessoria tecnica para sua empresa" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-[#2DD4BF] shrink-0" />
                    <span className="text-sm text-slate-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <a
              href="https://wa.me/5519971636969?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20coleta%20de%20res%C3%ADduos."
              target="_blank"
              rel="noopener noreferrer"
              data-testid="servicos-cta"
              className="bg-[#0D9488] text-white hover:bg-[#115E59] h-14 px-10 text-sm font-bold uppercase tracking-wider inline-flex items-center gap-2 transition-colors"
            >
              Solicitar Coleta ou Orcamento <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
