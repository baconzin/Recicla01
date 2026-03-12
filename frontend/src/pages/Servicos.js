import { Link } from "react-router-dom";
import { Droplets, Recycle, FileCheck, Search, Truck, ShieldCheck, ArrowRight, ChevronRight } from "lucide-react";

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
            Solucoes completas em coleta, transporte e destinacao final de residuos solidos e efluentes liquidos para industrias e grandes geradores.
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
                <img src={FLEET_IMG} alt="Coleta de efluentes" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Droplets className="w-6 h-6 text-[#0D9488]" />
                  <h2 className="text-2xl font-bold text-[#1E293B] uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                    Coleta e Transporte de Efluentes
                  </h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Caminhoes-tanque com alto vacuo e hidrojateamento para efluentes industriais, sanitarios e limpeza de caixas separadoras de agua e oleo. Frota propria para operacoes de pequeno a grande porte.
                </p>
                <ul className="mt-4 space-y-2">
                  {["Efluentes industriais", "Efluentes sanitarios", "Limpeza de caixas separadoras", "Hidrojateamento de tubulacoes", "Coleta programada ou emergencial"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-[#0D9488] shrink-0"></div>
                      {item}
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
                    Gestao de Residuos Solidos
                  </h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Manuseio especializado de residuos Classe I (Perigosos) e Classe II (Nao Inertes), com triagem e reinsercao na cadeia produtiva quando possivel.
                </p>
                <ul className="mt-4 space-y-2">
                  {["Residuos Classe I (Perigosos)", "Residuos Classe II (Nao Inertes)", "Triagem e reciclagem", "Sucatas industriais", "Reinsercao na cadeia produtiva"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-[#0D9488] shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/gestao-de-residuos" data-testid="servicos-residuos-link" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0D9488] uppercase tracking-wider hover:gap-3 transition-all">
                  Detalhes Completos <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
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
                Emissao completa de MTR, CDF e suporte para CADRI. Garantimos a regularizacao da sua empresa junto a CETESB e SINIR com laudos tecnicos e certificados.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-4">
                {[
                  { label: "MTR", desc: "Manifesto de Transporte" },
                  { label: "CDF", desc: "Certificado de Destinacao" },
                  { label: "CADRI", desc: "Movimentacao CETESB" },
                ].map((doc) => (
                  <div key={doc.label} className="bg-[#F8FAFC] border border-slate-200 p-4 text-center">
                    <span className="text-lg font-bold text-[#0D9488]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{doc.label}</span>
                    <p className="text-xs text-slate-500 mt-1">{doc.desc}</p>
                  </div>
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
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <a
              href="https://wa.me/5519971636969"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="servicos-cta"
              className="bg-[#0D9488] text-white hover:bg-[#115E59] h-14 px-10 text-sm font-bold uppercase tracking-wider inline-flex items-center gap-2 transition-colors"
            >
              Solicitar Orcamento Tecnico <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
