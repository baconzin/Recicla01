import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Droplets, Truck, FileCheck, ShieldCheck, Recycle, Factory,
  ArrowRight, ChevronRight, CheckCircle, Search, ClipboardCheck,
  Package, BarChart3, Users, Gauge, HardHat, Building2, Fuel,
  FlaskConical, UtensilsCrossed, Pipette, SprayCan, Warehouse,
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "../components/ui/accordion";

const HERO_IMG = "https://images.unsplash.com/photo-1622322977781-76f2247964b7?auto=format&fit=crop&w=1400&q=80";
const FLEET_IMG = "https://images.unsplash.com/photo-1621859191129-6bc88cf02966?auto=format&fit=crop&w=800&q=80";
const INDUSTRY_IMG = "https://images.unsplash.com/photo-1771273954407-05345d61543e?auto=format&fit=crop&w=800&q=80";

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const children = ref.current?.querySelectorAll(".reveal");
    children?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Home() {
  const pageRef = useReveal();

  return (
    <div ref={pageRef}>
      {/* ===== HERO ===== */}
      <section data-testid="hero-section" className="relative bg-[#1E293B] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={HERO_IMG} alt="Planta industrial de tratamento de residuos" className="w-full h-full object-cover opacity-20" loading="eager" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#0D9488]/20 border border-[#0D9488]/30 px-4 py-1.5 mb-8 animate-fade-in">
              <ShieldCheck className="w-4 h-4 text-[#2DD4BF]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#2DD4BF]">
                Conformidade Ambiental em Todo o Brasil
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white uppercase tracking-tight leading-tight animate-fade-in-up"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              data-testid="hero-title"
            >
              Coleta e Destinacao de Residuos Industriais em Todo o Brasil
            </h1>

            <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl animate-fade-in-up delay-200" data-testid="hero-subtitle">
              Atendemos empresas e industrias que precisam descartar residuos e efluentes com seguranca ambiental e documentacao completa.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
              <a
                href="https://wa.me/5519971636969?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20coleta%20de%20res%C3%ADduos."
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-cta"
                className="bg-[#0D9488] text-white hover:bg-[#115E59] h-14 px-10 text-sm font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-colors"
              >
                Solicitar Coleta ou Orcamento
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/servicos"
                data-testid="hero-cta-services"
                className="border-2 border-white/30 text-white hover:border-[#2DD4BF] hover:text-[#2DD4BF] h-14 px-10 text-sm font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-colors"
              >
                Conhecer Servicos
              </Link>
            </div>

            <div className="mt-14 flex flex-wrap gap-6 animate-fade-in-up delay-400">
              {["MTR - Manifesto de Transporte", "CDF - Certificado de Destinacao", "CADRI - CETESB"].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#2DD4BF]" />
                  <span className="text-xs text-slate-400 font-medium uppercase tracking-wide">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Empresas Atendidas" },
              { number: "10K+", label: "Toneladas Destinadas" },
              { number: "100%", label: "Conformidade Legal" },
              { number: "24h", label: "Atendimento Emergencial" },
            ].map((stat) => (
              <div key={stat.label} className="text-center reveal">
                <span className="text-3xl md:text-4xl font-extrabold text-[#0D9488]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  {stat.number}
                </span>
                <p className="text-xs text-slate-500 uppercase tracking-widest mt-1 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DIFERENCIAIS ===== */}
      <section data-testid="diferenciais-section" className="bg-[#F8FAFC] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center reveal">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">Por que escolher a Usina Recicla</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] uppercase tracking-tight mt-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Nossos Diferenciais
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { icon: FileCheck, title: "Documentacao Ambiental Completa", desc: "Emissao de MTR, CADRI e CDF conforme exigencias ambientais vigentes." },
              { icon: HardHat, title: "Engenheiro Ambiental Responsavel", desc: "Acompanhamento tecnico garantindo conformidade ambiental em cada operacao." },
              { icon: Search, title: "Rastreabilidade Total", desc: "Monitoramento da coleta ate a destinacao final com relatorios detalhados." },
              { icon: Truck, title: "Infraestrutura Especializada", desc: "Caminhoes-tanque com alto vacuo e hidrojateamento para operacoes industriais." },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-slate-200 p-8 hover:border-[#0D9488] transition-colors reveal" data-testid={`diferencial-${item.title.toLowerCase().replace(/\s/g, '-')}`}>
                <div className="w-12 h-12 bg-[#0D9488]/10 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-[#0D9488]" />
                </div>
                <h3 className="text-lg font-bold text-[#1E293B] uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICOS ===== */}
      <section data-testid="services-section" className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="reveal">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">Servicos Operacionais</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] uppercase tracking-tight mt-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Solucoes Completas em Gestao de Residuos Industriais
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {/* Effluent Collection - Large */}
            <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden bg-white border border-slate-200 hover:border-[#0D9488] transition-all duration-300 reveal">
              <div className="h-64 overflow-hidden">
                <img src={FLEET_IMG} alt="Coleta de efluentes industriais com caminhao-tanque" className="w-full h-full object-cover service-card-img" loading="lazy" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#0D9488]/10 flex items-center justify-center"><Droplets className="w-5 h-5 text-[#0D9488]" /></div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">Servico Principal</span>
                </div>
                <h3 className="text-2xl font-bold text-[#1E293B] uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Coleta e Transporte de Efluentes Industriais
                </h3>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  Caminhoes-tanque com alto vacuo e hidrojateamento para efluentes industriais, sanitarios e limpeza de caixas separadoras de agua e oleo. Atendimento em todo o Brasil.
                </p>
                <Link to="/coleta-de-efluentes" data-testid="service-efluentes-link" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0D9488] uppercase tracking-wider hover:gap-3 transition-all">
                  Saiba Mais <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Waste Management */}
            <div className="group relative overflow-hidden bg-white border border-slate-200 p-8 hover:border-[#0D9488] transition-all duration-300 reveal delay-100">
              <div className="w-10 h-10 bg-[#0D9488]/10 flex items-center justify-center mb-4"><Recycle className="w-5 h-5 text-[#0D9488]" /></div>
              <h3 className="text-xl font-bold text-[#1E293B] uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Gestao de Residuos Industriais
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Manuseio de residuos Classe I (Perigosos) e Classe II (Nao Inertes), com triagem e reinsercao na cadeia produtiva.
              </p>
              <Link to="/gestao-de-residuos" data-testid="service-residuos-link" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#0D9488] uppercase tracking-wider hover:gap-3 transition-all">
                Saiba Mais <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Transport Class I */}
            <div className="group relative overflow-hidden bg-[#1E293B] border border-slate-700 p-8 hover:border-[#2DD4BF] transition-all duration-300 reveal delay-200">
              <div className="w-10 h-10 bg-[#2DD4BF]/10 flex items-center justify-center mb-4"><Truck className="w-5 h-5 text-[#2DD4BF]" /></div>
              <h3 className="text-xl font-bold text-white uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Transporte de Residuos Classe I
              </h3>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                Transporte licenciado de residuos perigosos com rastreabilidade completa e documentacao ambiental obrigatoria.
              </p>
              <Link to="/transporte-de-residuos-classe-i" data-testid="service-transporte-link" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#2DD4BF] uppercase tracking-wider hover:gap-3 transition-all">
                Saiba Mais <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DOCUMENTACAO AMBIENTAL ===== */}
      <section data-testid="compliance-section" className="bg-[#1E293B] py-24 md:py-32 relative noise-overlay">
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2DD4BF]">Documentacao Ambiental</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight mt-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Seguranca Juridica Para Sua Empresa
              </h2>
              <p className="mt-6 text-slate-400 leading-relaxed">
                A Usina Recicla emite toda a documentacao ambiental obrigatoria, garantindo conformidade com a CETESB, SINIR e a Politica Nacional de Residuos Solidos.
              </p>
              <div className="mt-10 space-y-6">
                {[
                  { icon: FileCheck, title: "MTR - Manifesto de Transporte de Residuos", desc: "Documento obrigatorio que rastreia o residuo desde a origem ate a destinacao final.", link: "/mtr-manifesto-transporte-residuos" },
                  { icon: ClipboardCheck, title: "CDF - Certificado de Destinacao Final", desc: "Comprova que o residuo foi destinado de forma ambientalmente correta.", link: "/documentacao-ambiental" },
                  { icon: ShieldCheck, title: "CADRI - Certificado de Movimentacao de Residuos", desc: "Autorizacao da CETESB para movimentacao de residuos de interesse ambiental.", link: "/cadri-certificado-movimentacao-residuos" },
                ].map((item) => (
                  <Link to={item.link} key={item.title} className="flex gap-4 group reveal">
                    <div className="w-12 h-12 bg-[#0D9488]/20 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-[#2DD4BF]" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base group-hover:text-[#2DD4BF] transition-colors">{item.title}</h3>
                      <p className="text-slate-400 text-sm mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <Link to="/documentacao-ambiental" data-testid="compliance-cta" className="mt-10 bg-[#0D9488] text-white hover:bg-[#115E59] h-12 px-8 text-sm font-bold uppercase tracking-wider inline-flex items-center gap-2 transition-colors">
                Documentacao Completa <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative reveal delay-200">
              <div className="bg-[#0F172A] border border-slate-700 p-8 md:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-3 h-3 bg-[#2DD4BF] rounded-full"></div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#2DD4BF]">Conformidade Ambiental</span>
                </div>
                <div className="space-y-5">
                  {[
                    "Conformidade com CETESB",
                    "Politica Nacional de Residuos Solidos",
                    "Legislacao ambiental brasileira",
                    "Manifesto de Transporte de Residuos (MTR)",
                    "Certificado de Destinacao Final (CDF)",
                    "CADRI - Movimentacao de Residuos",
                    "Engenheiro Ambiental Responsavel",
                    "Rastreabilidade completa da operacao",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#0D9488] shrink-0" />
                      <span className="text-slate-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#0D9488]/30 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INFRAESTRUTURA ===== */}
      <section data-testid="infraestrutura-section" className="bg-[#F8FAFC] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <img src={INDUSTRY_IMG} alt="Infraestrutura operacional da Usina Recicla" className="w-full h-80 lg:h-[480px] object-cover" loading="lazy" />
            </div>
            <div className="reveal delay-200">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">Capacidade Operacional</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] uppercase tracking-tight mt-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Infraestrutura Especializada
              </h2>
              <div className="mt-8 space-y-4">
                {[
                  { icon: Truck, title: "Caminhoes-tanque com alto vacuo", desc: "Frota propria para coleta de efluentes de grande volume." },
                  { icon: Gauge, title: "Equipamentos de hidrojateamento industrial", desc: "Limpeza de caixas separadoras, tubulacoes e tanques." },
                  { icon: Users, title: "Equipe tecnica especializada", desc: "Profissionais treinados com engenheiro ambiental responsavel." },
                  { icon: ShieldCheck, title: "Transporte licenciado de residuos", desc: "Veiculos certificados e rastreados para residuos Classe I e II." },
                  { icon: Recycle, title: "Destinacao ambiental regulamentada", desc: "Unidades de tratamento e disposicao final devidamente licenciadas." },
                ].map((item) => (
                  <div key={item.title} className="bg-white border-l-4 border-[#0D9488] p-5 flex gap-4 items-start">
                    <item.icon className="w-5 h-5 text-[#0D9488] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-[#1E293B]">{item.title}</h3>
                      <p className="text-sm text-slate-600 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== QUEM ATENDEMOS ===== */}
      <section data-testid="industries-section" className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center reveal">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">Segmentos Atendidos</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] uppercase tracking-tight mt-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Quem Atendemos
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Atendemos empresas e industrias de diversos segmentos que precisam de coleta e destinacao de residuos com conformidade ambiental.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
            {[
              { icon: FlaskConical, label: "Industrias Quimicas" },
              { icon: UtensilsCrossed, label: "Industrias Alimenticias" },
              { icon: Factory, label: "Fabricas e Plantas Industriais" },
              { icon: Pipette, label: "Empresas de Cosmeticos" },
              { icon: SprayCan, label: "Empresas de Limpeza Industrial" },
              { icon: Fuel, label: "Postos de Combustivel" },
              { icon: Truck, label: "Transportadoras" },
              { icon: Warehouse, label: "Condominios Industriais" },
            ].map((industry) => (
              <div key={industry.label} className="bg-[#F8FAFC] border border-slate-200 p-6 text-center hover:border-[#0D9488] transition-colors reveal" data-testid={`industry-${industry.label.toLowerCase().replace(/\s/g, '-')}`}>
                <industry.icon className="w-7 h-7 text-[#0D9488] mx-auto mb-3" />
                <span className="text-sm font-medium text-[#1E293B]">{industry.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMO FUNCIONA ===== */}
      <section data-testid="how-it-works-section" className="bg-[#F8FAFC] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center reveal">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">Processo</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] uppercase tracking-tight mt-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Como Funciona Nossa Operacao
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {[
              { step: "01", icon: Factory, title: "Diagnostico", desc: "Avaliacao tecnica dos residuos, volumes e requisitos legais da sua operacao." },
              { step: "02", icon: Package, title: "Planejamento", desc: "Plano de gerenciamento com cronograma de coleta e documentacao necessaria." },
              { step: "03", icon: Truck, title: "Coleta e Transporte", desc: "Mobilizacao da frota especializada com rastreamento ate a destinacao final." },
              { step: "04", icon: BarChart3, title: "Documentacao", desc: "Emissao de MTR, CDF e relatorios para total conformidade legal." },
            ].map((item, i) => (
              <div key={item.step} className={`reveal delay-${(i + 1) * 100}`}>
                <div className="relative">
                  <span className="text-7xl font-extrabold text-slate-100" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{item.step}</span>
                  <div className="w-12 h-12 bg-[#0D9488]/10 flex items-center justify-center absolute top-4 left-16">
                    <item.icon className="w-6 h-6 text-[#0D9488]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1E293B] uppercase tracking-tight mt-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SOBRE / CEO ===== */}
      <section data-testid="about-teaser" className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">Sobre a Empresa</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] uppercase tracking-tight mt-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Lideranca e Confianca na Gestao Ambiental
              </h2>
              <p className="mt-6 text-slate-600 leading-relaxed">
                A Usina Recicla conta com a expertise do CEO Raphael Pascon, que traz sua solida trajetoria na gestao de condominios e administracao de empresas de construcao civil no interior de Sao Paulo para garantir a maxima eficiencia logistica e transparencia contratual.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Atendemos empresas em todo o Brasil com uma operacao que combina conhecimento tecnico ambiental com gestao empresarial de excelencia, garantindo total conformidade legal e eficiencia operacional.
              </p>
              <Link to="/sobre" data-testid="about-cta" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#0D9488] uppercase tracking-wider hover:gap-3 transition-all">
                Conheca Nossa Empresa <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="reveal delay-200">
              <div className="bg-[#F8FAFC] border border-slate-200 p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-[#0D9488] flex items-center justify-center text-white">
                    <span className="text-xl font-bold" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>RP</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1E293B] text-lg">Raphael Pascon</h3>
                    <p className="text-sm text-slate-500">CEO - Usina Recicla</p>
                  </div>
                </div>
                <blockquote className="text-slate-600 leading-relaxed italic border-l-4 border-[#0D9488] pl-5">
                  "Nossa missao e garantir que cada empresa atendida tenha a tranquilidade de operar em total conformidade ambiental, com a certeza de que seus residuos recebem a destinacao adequada."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section data-testid="faq-section" className="bg-[#F8FAFC] py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="text-center reveal">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">Perguntas Frequentes</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] uppercase tracking-tight mt-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Duvidas Sobre Gestao de Residuos Industriais
            </h2>
          </div>
          <div className="mt-12 reveal">
            <Accordion type="single" collapsible className="space-y-3">
              {[
                { q: "Quais tipos de residuos industriais a Usina Recicla coleta?", a: "Coletamos residuos solidos Classe I (Perigosos) e Classe II (Nao Inertes), alem de efluentes industriais e sanitarios. Nossa frota inclui caminhoes-tanque com alto vacuo para efluentes e veiculos especializados para residuos solidos." },
                { q: "A Usina Recicla atende em todo o Brasil?", a: "Sim. Atendemos empresas e industrias em todo o territorio nacional, com logistica especializada para coleta, transporte e destinacao de residuos industriais." },
                { q: "Quais documentos ambientais sao emitidos?", a: "Emitimos MTR (Manifesto de Transporte de Residuos), CDF (Certificado de Destinacao Final) e oferecemos suporte completo para obtencao e movimentacao via CADRI junto a CETESB." },
                { q: "O que e MTR e por que e obrigatorio?", a: "O MTR (Manifesto de Transporte de Residuos) e o documento obrigatorio que rastreia o residuo desde a origem ate a destinacao final, emitido pelo sistema SINIR. E obrigatorio desde 2021." },
                { q: "O que e CADRI e quando minha empresa precisa?", a: "O CADRI e o Certificado de Movimentacao de Residuos de Interesse Ambiental, emitido pela CETESB. E obrigatorio para empresas no Estado de Sao Paulo que transportam residuos perigosos." },
                { q: "A empresa conta com engenheiro ambiental?", a: "Sim. Contamos com engenheiro ambiental responsavel que acompanha cada operacao, garantindo conformidade com a legislacao ambiental e a Politica Nacional de Residuos Solidos." },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-white border border-slate-200 px-6" data-testid={`faq-item-${i}`}>
                  <AccordionTrigger className="text-left font-bold text-[#1E293B] hover:text-[#0D9488] py-5 text-base">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed pb-5">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
