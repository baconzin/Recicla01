import { Link } from "react-router-dom";
import { Droplets, ArrowRight, CheckCircle, Truck, ShieldCheck, Clock, ChevronRight } from "lucide-react";

const FLEET_IMG = "https://images.unsplash.com/photo-1621859191129-6bc88cf02966?auto=format&fit=crop&w=1200&q=80";

export default function ColetaEfluentes() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1E293B] py-20 md:py-28 relative noise-overlay">
        <div className="absolute inset-0 z-0">
          <img src={FLEET_IMG} alt="Frota de coleta de efluentes" className="w-full h-full object-cover opacity-15" loading="eager" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link to="/" className="hover:text-[#2DD4BF] transition-colors">Inicio</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/servicos" className="hover:text-[#2DD4BF] transition-colors">Serviços</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#2DD4BF]">Coleta de Efluentes</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <Droplets className="w-8 h-8 text-[#2DD4BF]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#2DD4BF]">Serviço Especializado</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            Coleta e Transporte de Efluentes Industriais
          </h1>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl">
            Caminhões-tanque com alto vácuo e hidrojateamento para efluentes industriais, sanitários e limpeza de caixas separadoras de água e óleo. Atendimento em todo o Brasil.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#F8FAFC] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-[#1E293B] uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Equipamentos de Alta Performance
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Nossa frota e equipada com caminhoes-tanque de alto vacuo, com capacidade de 8.000 a 30.000 litros, preparados para a succao de efluentes de tanques, caixas separadoras e reservatorios industriais. Contamos tambem com equipamentos de hidrojateamento de alta pressao para desobstrucao e limpeza de tubulações.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#1E293B] uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Tipos de Efluentes Atendidos
                </h2>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Efluentes de processos químicos",
                    "Efluentes sanitários industriais",
                    "Oleos e graxas de caixas separadoras",
                    "Agua contaminada de processos produtivos",
                    "Efluentes de lavagem industrial",
                    "Residuos líquidos de tanques",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 bg-white border border-slate-200 p-4">
                      <CheckCircle className="w-5 h-5 text-[#0D9488] shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#1E293B] uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Processo Operacional
                </h2>
                <div className="mt-6 space-y-4">
                  {[
                    { step: "01", text: "Avaliação técnica do local e tipo de efluente" },
                    { step: "02", text: "Emissão da documentacao necessaria (MTR, CADRI)" },
                    { step: "03", text: "Mobilizacao da frota adequada ao volume" },
                    { step: "04", text: "Coleta com equipamentos de alto vacuo" },
                    { step: "05", text: "Transporte em caminhoes-tanque lacrados" },
                    { step: "06", text: "Destinação para estacao de tratamento licenciada" },
                    { step: "07", text: "Emissão do CDF (Certificado de Destinação Final)" },
                  ].map((item) => (
                    <div key={item.step} className="flex items-center gap-4 bg-white border border-slate-200 p-4">
                      <span className="text-2xl font-extrabold text-[#0D9488]/20" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{item.step}</span>
                      <span className="text-slate-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-[#1E293B] p-8 text-white">
                <h3 className="text-lg font-bold uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Diferenciais do Servico
                </h3>
                <div className="mt-6 space-y-4">
                  {[
                    { icon: Truck, text: "Frota propria e especializada" },
                    { icon: ShieldCheck, text: "Documentacao ambiental completa" },
                    { icon: Clock, text: "Atendimento 24h emergêncial" },
                    { icon: Droplets, text: "Alto vacuo e hidrojateamento" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3">
                      <item.icon className="w-5 h-5 text-[#2DD4BF] shrink-0" />
                      <span className="text-sm text-slate-300">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#0D9488] p-8 text-white">
                <h3 className="text-lg font-bold uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Solicite um Orçamento
                </h3>
                <p className="mt-3 text-white/80 text-sm">
                  Entre em contato com nossos especialistas para uma avaliação técnica personalizada.
                </p>
                <a
                  href="https://wa.me/5519971636969"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="efluentes-cta"
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
                  <Link to="/gestao-de-residuos" className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#0D9488] transition-colors">
                    <ChevronRight className="w-4 h-4" /> Gestão de Resíduos Sólidos
                  </Link>
                  <Link to="/documentacao-ambiental" className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#0D9488] transition-colors">
                    <ChevronRight className="w-4 h-4" /> Documentação Ambiental
                  </Link>
                  <Link to="/servicos" className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#0D9488] transition-colors">
                    <ChevronRight className="w-4 h-4" /> Todos os Serviços
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
