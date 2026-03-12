import { Link } from "react-router-dom";
import { Recycle, ArrowRight, CheckCircle, AlertTriangle, Package, ChevronRight } from "lucide-react";

export default function GestaoResiduos() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1E293B] py-20 md:py-28 relative noise-overlay">
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link to="/" className="hover:text-[#2DD4BF] transition-colors">Inicio</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/servicos" className="hover:text-[#2DD4BF] transition-colors">Serviços</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#2DD4BF]">Gestão de Resíduos</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <Recycle className="w-8 h-8 text-[#2DD4BF]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#2DD4BF]">Serviço Especializado</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            Gestão de Resíduos Sólidos e Sucatas
          </h1>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl">
            Manuseio especializado de residuos Classe I e Classe II, com triagem e reinserção na cadeia produtiva.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#F8FAFC] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Class I */}
              <div className="bg-white border border-slate-200 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-amber-500" />
                  <h2 className="text-2xl font-bold text-[#1E293B] uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                    Resíduos Classe I - Perigosos
                  </h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Residuos que apresentam periculosidade: inflamabilidade, corrosividade, reatividade, toxicidade ou patogenicidade. Exigem acondicionamento, transporte e destinacao especializados.
                </p>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Solventes usados",
                    "Oleos contaminados",
                    "Borras de tinta",
                    "Residuos de galvanoplastia",
                    "Metais pesados",
                    "Embalagens contaminadas",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 bg-amber-500 shrink-0"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Class II */}
              <div className="bg-white border border-slate-200 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Package className="w-6 h-6 text-[#0D9488]" />
                  <h2 className="text-2xl font-bold text-[#1E293B] uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                    Resíduos Classe II - Não Perigosos
                  </h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Subdivididos em Classe II-A (Não Inertes) e Classe II-B (Inertes). Incluem residuos que podem ser biodegradáveis, combustiveis ou soluveis em agua.
                </p>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Residuos orgânicos industriais",
                    "Papeis e papeloes",
                    "Texteis e tecidos",
                    "Madeira e paletes",
                    "Sucatas metálicas",
                    "Plasticos reciclaveis",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 bg-[#0D9488] shrink-0"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div>
                <h2 className="text-2xl font-bold text-[#1E293B] uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Nosso Processo de Gestao
                </h2>
                <div className="mt-6 space-y-4">
                  {[
                    { step: "01", title: "Classificação", text: "Identificacao e classificação conforme NBR 10004" },
                    { step: "02", title: "Segregação", text: "Separacao por tipo e classe na fonte geradora" },
                    { step: "03", title: "Acondicionamento", text: "Embalagem adequada conforme a classe do residuo" },
                    { step: "04", title: "Documentacao", text: "Emissão de MTR, CADRI e demais documentos" },
                    { step: "05", title: "Transporte", text: "Coleta com veículos licenciados e rastreados" },
                    { step: "06", title: "Destinação", text: "Encaminhamento para unidade autorizada (reciclagem, coprocessamento ou aterro)" },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4 bg-white border border-slate-200 p-5">
                      <span className="text-2xl font-extrabold text-[#0D9488]/30 shrink-0" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{item.step}</span>
                      <div>
                        <h3 className="font-bold text-[#1E293B]">{item.title}</h3>
                        <p className="text-sm text-slate-600 mt-1">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-[#1E293B] p-8 text-white">
                <h3 className="text-lg font-bold uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Diferenciais
                </h3>
                <div className="mt-6 space-y-4">
                  {[
                    "Triagem e reinserção na cadeia produtiva",
                    "Manuseio de residuos Classe I e II",
                    "Documentacao ambiental completa",
                    "Rastreabilidade total",
                    "Conformidade com NBR 10004",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#2DD4BF] shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#0D9488] p-8 text-white">
                <h3 className="text-lg font-bold uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Solicite um Orçamento
                </h3>
                <p className="mt-3 text-white/80 text-sm">Avaliação técnica personalizada para a gestao dos residuos da sua empresa.</p>
                <a
                  href="https://wa.me/5519971636969"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="residuos-cta"
                  className="mt-6 bg-white text-[#0D9488] hover:bg-slate-100 h-12 px-6 text-sm font-bold uppercase tracking-wider inline-flex items-center gap-2 transition-colors w-full justify-center"
                >
                  Falar com Especialista <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="bg-white border border-slate-200 p-8">
                <h3 className="text-lg font-bold text-[#1E293B] uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Outros Serviços
                </h3>
                <div className="mt-4 space-y-3">
                  <Link to="/coleta-de-efluentes" className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#0D9488] transition-colors">
                    <ChevronRight className="w-4 h-4" /> Coleta de Efluentes
                  </Link>
                  <Link to="/documentacao-ambiental" className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#0D9488] transition-colors">
                    <ChevronRight className="w-4 h-4" /> Documentação Ambiental
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
