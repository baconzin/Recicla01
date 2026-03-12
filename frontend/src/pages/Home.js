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

const HERO_IMG = "https://customer-assets.emergentagent.com/job_usina-recicla-tech/artifacts/7o5219do_image.png";
const EFFLUENT_IMG = "https://images.unsplash.com/photo-1629019896873-cc95f1a8845d?auto=format&fit=crop&w=800&q=80";
const INDUSTRY_IMG = "https://images.unsplash.com/photo-1742349934917-c6932c49d067?auto=format&fit=crop&w=800&q=80";

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
          <img src={HERO_IMG} alt="Área de armazenamento de resíduos industriais" className="w-full h-full object-cover opacity-25" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E293B]/90 via-[#1E293B]/70 to-transparent"></div>
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
              Coleta e Destinação de Resíduos Industriais em Todo o Brasil
            </h1>

            <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl animate-fade-in-up delay-200" data-testid="hero-subtitle">
              Atendemos empresas e indústrias que precisam descartar resíduos e efluentes com segurança ambiental e documentação completa. <strong>Isenção total de passivos ambientais</strong> para a sua empresa.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
              <a
                href="https://wa.me/5519971636969?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20coleta%20de%20res%C3%ADduos."
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-cta"
                className="bg-[#0D9488] text-white hover:bg-[#115E59] h-14 px-10 text-sm font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-colors"
              >
                Solicitar Coleta ou Orçamento
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/servicos"
                data-testid="hero-cta-services"
                className="border-2 border-white/30 text-white hover:border-[#2DD4BF] hover:text-[#2DD4BF] h-14 px-10 text-sm font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-colors"
              >
                Conhecer Serviços
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 animate-fade-in-up delay-400">
              {[
                { value: "100%", label: "Conformidade Legal" },
                { value: "24h", label: "Atendimento" },
                { value: "MTR", label: "Rastreabilidade" },
                { value: "CETESB", label: "Licenciada" },
              ].map((badge) => (
                <div key={badge.label} className="bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-3 text-center">
                  <span className="text-xl font-extrabold text-[#2DD4BF] block" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                    {badge.value}
                  </span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest font-medium">{badge.label}</span>
                </div>
              ))}
            </div>
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
              { icon: FileCheck, title: "Documentação Ambiental Completa", desc: "Emissão de MTR, CADRI e CDF conforme exigências ambientais vigentes." },
              { icon: HardHat, title: "Engenheiro Ambiental Responsável", desc: "Acompanhamento técnico garantindo conformidade ambiental em cada operação." },
              { icon: Search, title: "Rastreabilidade Total", desc: "Monitoramento da coleta até a destinação final com relatórios detalhados." },
              { icon: Truck, title: "Infraestrutura Especializada", desc: "Caminhões-tanque com alto vácuo e hidrojateamento para operações industriais." },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-slate-200 p-8 hover:border-[#0D9488] transition-colors reveal">
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

      {/* ===== SERVIÇOS ===== */}
      <section data-testid="services-section" className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="reveal text-center mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">Serviços Operacionais</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] uppercase tracking-tight mt-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Soluções Completas em Gestão Ambiental
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Oferecemos serviços especializados para indústrias, construtoras e grandes geradores de resíduos com total conformidade legal.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {/* Coleta de Efluentes */}
            <div className="group bg-white border border-slate-200 overflow-hidden hover:border-[#0D9488] transition-all duration-300 reveal">
              <div className="h-52 overflow-hidden">
                <img src={EFFLUENT_IMG} alt="Coleta e transporte de efluentes industriais" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-7">
                <h3 className="text-xl font-bold text-[#1E293B] uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Coleta e Transporte de Efluentes
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Caminhões-tanque com alto vácuo e hidrojateamento para efluentes industriais, sanitários e limpeza de caixas separadoras de água e óleo.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Alto Vácuo", "Hidrojateamento", "Efluentes Industriais", "Caixas Separadoras"].map((tag) => (
                    <span key={tag} className="text-[11px] font-medium bg-[#0D9488]/10 text-[#0D9488] px-2.5 py-1">{tag}</span>
                  ))}
                </div>
                <Link to="/coleta-de-efluentes" data-testid="service-efluentes-link" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#0D9488] uppercase tracking-wider hover:gap-3 transition-all">
                  Saiba Mais <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Gestão de Resíduos */}
            <div className="group bg-white border border-slate-200 overflow-hidden hover:border-[#0D9488] transition-all duration-300 reveal delay-100">
              <div className="h-52 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1675583097478-fc4d6c436890?auto=format&fit=crop&w=800&q=80" alt="Gestão de resíduos sólidos e sucatas" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-7">
                <h3 className="text-xl font-bold text-[#1E293B] uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Gestão de Resíduos Sólidos e Sucatas
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Manuseio de resíduos Classe I (Perigosos) e Classe II (Não Inertes), promovendo a triagem e reinserção na cadeia produtiva.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Classe I - Perigosos", "Classe II - Não Inertes", "Triagem", "Economia Circular"].map((tag) => (
                    <span key={tag} className="text-[11px] font-medium bg-[#0D9488]/10 text-[#0D9488] px-2.5 py-1">{tag}</span>
                  ))}
                </div>
                <Link to="/gestao-de-residuos" data-testid="service-residuos-link" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#0D9488] uppercase tracking-wider hover:gap-3 transition-all">
                  Saiba Mais <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Rastreabilidade */}
            <div className="group bg-white border border-slate-200 overflow-hidden hover:border-[#0D9488] transition-all duration-300 reveal delay-200">
              <div className="h-52 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1675093022653-59233299f8ba?auto=format&fit=crop&w=800&q=80" alt="Rastreabilidade completa de resíduos" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-7">
                <h3 className="text-xl font-bold text-[#1E293B] uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Rastreabilidade Completa
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Monitoramento de carga da coleta até a destinação final. Transparência total em todas as etapas do processo.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Monitoramento GPS", "Relatórios", "Documentação Digital", "Auditoria"].map((tag) => (
                    <span key={tag} className="text-[11px] font-medium bg-[#0D9488]/10 text-[#0D9488] px-2.5 py-1">{tag}</span>
                  ))}
                </div>
                <Link to="/transporte-de-residuos-classe-i" data-testid="service-transporte-link" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#0D9488] uppercase tracking-wider hover:gap-3 transition-all">
                  Saiba Mais <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DOCUMENTAÇÃO AMBIENTAL ===== */}
      <section data-testid="compliance-section" className="bg-[#1E293B] py-24 md:py-32 relative noise-overlay">
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center reveal mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2DD4BF]">Conformidade Legal</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight mt-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Documentação e Regularização Ambiental
            </h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
              Total regularização junto à <strong className="text-[#2DD4BF]">CETESB</strong> e <strong className="text-[#2DD4BF]">SINIR</strong>. Emitimos laudos técnicos e garantimos toda a documentação necessária para sua empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal">
            {[
              { abbr: "MTR", title: "Manifesto de Transporte de Resíduos", desc: "Documento obrigatório para rastreamento de resíduos desde a origem até a destinação final.", link: "/mtr-manifesto-transporte-residuos" },
              { abbr: "CDF", title: "Certificado de Destinação Final", desc: "Comprova a destinação ambientalmente adequada dos resíduos, garantindo conformidade legal.", link: "/documentacao-ambiental" },
              { abbr: "CADRI", title: "Certificado de Movimentação de Resíduos", desc: "Autorização da CETESB para movimentação de resíduos de interesse ambiental no Estado de São Paulo.", link: "/cadri-certificado-movimentacao-residuos" },
            ].map((doc) => (
              <Link key={doc.abbr} to={doc.link} className="bg-[#0F172A] border border-slate-700 p-8 hover:border-[#2DD4BF] transition-colors group">
                <span className="text-3xl font-extrabold text-[#0D9488]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{doc.abbr}</span>
                <h3 className="text-lg font-bold text-white uppercase tracking-tight mt-3 group-hover:text-[#2DD4BF] transition-colors" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  {doc.title}
                </h3>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">{doc.desc}</p>
              </Link>
            ))}
          </div>

          {/* Checklist + compliance */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            <div className="bg-[#0F172A] border border-slate-700 p-8 reveal">
              <h3 className="text-xl font-bold text-white uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Sua Empresa Protegida de Passivos Ambientais
              </h3>
              <div className="mt-6 space-y-4">
                {[
                  "Regularização completa junto aos órgãos ambientais",
                  "Laudos técnicos assinados por profissional habilitado",
                  "Rastreabilidade total de todos os resíduos",
                  "Suporte na obtenção e movimentação via CADRI",
                  "Documentação digital para auditorias",
                  "Conformidade com a Política Nacional de Resíduos Sólidos",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0D9488] shrink-0" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#0F172A] border border-slate-700 p-8 flex flex-col items-center justify-center text-center reveal delay-200">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2DD4BF] mb-4">Conformidade com</span>
              <div className="space-y-4">
                {["CETESB", "Política Nacional de Resíduos Sólidos", "Legislação Ambiental Brasileira", "Sistema SINIR"].map((item) => (
                  <div key={item} className="bg-[#1E293B] border border-slate-600 px-6 py-3">
                    <span className="text-white font-bold text-sm">{item}</span>
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
              Atendemos empresas e indústrias de diversos segmentos que precisam de coleta e destinação de resíduos com conformidade ambiental.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
            {[
              { icon: FlaskConical, label: "Indústrias Químicas" },
              { icon: UtensilsCrossed, label: "Indústrias Alimentícias" },
              { icon: Factory, label: "Fábricas e Plantas Industriais" },
              { icon: Pipette, label: "Empresas de Cosméticos" },
              { icon: SprayCan, label: "Limpeza Industrial" },
              { icon: Fuel, label: "Postos de Combustível" },
              { icon: Truck, label: "Transportadoras" },
              { icon: Warehouse, label: "Condomínios Industriais" },
            ].map((industry) => (
              <div key={industry.label} className="bg-[#F8FAFC] border border-slate-200 p-6 text-center hover:border-[#0D9488] transition-colors reveal">
                <industry.icon className="w-7 h-7 text-[#0D9488] mx-auto mb-3" />
                <span className="text-sm font-medium text-[#1E293B]">{industry.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INFRAESTRUTURA ===== */}
      <section data-testid="infraestrutura-section" className="bg-[#F8FAFC] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <img src={INDUSTRY_IMG} alt="Operação industrial da Usina Recicla" className="w-full h-80 lg:h-[480px] object-cover" loading="lazy" />
            </div>
            <div className="reveal delay-200">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">Capacidade Operacional</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] uppercase tracking-tight mt-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Infraestrutura Especializada
              </h2>
              <div className="mt-8 space-y-4">
                {[
                  { icon: Truck, title: "Caminhões-tanque com alto vácuo", desc: "Frota própria para coleta de efluentes de grande volume." },
                  { icon: Gauge, title: "Equipamentos de hidrojateamento industrial", desc: "Limpeza de caixas separadoras, tubulações e tanques." },
                  { icon: Users, title: "Equipe técnica especializada", desc: "Profissionais treinados com engenheiro ambiental responsável." },
                  { icon: ShieldCheck, title: "Transporte licenciado de resíduos", desc: "Veículos certificados e rastreados para resíduos Classe I e II." },
                  { icon: Recycle, title: "Destinação ambiental regulamentada", desc: "Unidades de tratamento e disposição final devidamente licenciadas." },
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

      {/* ===== SOBRE / CEO ===== */}
      <section data-testid="about-teaser" className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">Sobre a Empresa</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] uppercase tracking-tight mt-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Experiência e Excelência Operacional
              </h2>
              <p className="mt-6 text-slate-600 leading-relaxed">
                A <strong>Usina Recicla</strong> conta com a expertise do CEO <strong>Raphael Pascon</strong>, que traz sua sólida trajetória na gestão de condomínios e administração de empresas de construção civil no interior de São Paulo para garantir a <strong>máxima eficiência logística</strong> e <strong>transparência contratual</strong>.
              </p>
              <div className="mt-8 space-y-3">
                {[
                  "Atendimento ágil e pontual",
                  "Contratos transparentes e claros",
                  "Frota própria e equipamentos modernos",
                  "Compromisso com sustentabilidade",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0D9488] shrink-0" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/sobre" data-testid="about-cta" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#0D9488] uppercase tracking-wider hover:gap-3 transition-all">
                Conheça Nossa Empresa <ArrowRight className="w-4 h-4" />
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
                  "Nossa missão é garantir que cada empresa atendida tenha a tranquilidade de operar em total conformidade ambiental, com a certeza de que seus resíduos recebem a destinação adequada."
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
              Dúvidas Sobre Gestão de Resíduos Industriais
            </h2>
          </div>
          <div className="mt-12 reveal">
            <Accordion type="single" collapsible className="space-y-3">
              {[
                { q: "Quais tipos de resíduos industriais a Usina Recicla coleta?", a: "Coletamos resíduos sólidos Classe I (Perigosos) e Classe II (Não Inertes), além de efluentes industriais e sanitários. Nossa frota inclui caminhões-tanque com alto vácuo para efluentes e veículos especializados para resíduos sólidos." },
                { q: "A Usina Recicla atende em todo o Brasil?", a: "Sim. Atendemos empresas e indústrias em todo o território nacional, com logística especializada para coleta, transporte e destinação de resíduos industriais." },
                { q: "Quais documentos ambientais são emitidos?", a: "Emitimos MTR (Manifesto de Transporte de Resíduos), CDF (Certificado de Destinação Final) e oferecemos suporte completo para obtenção e movimentação via CADRI junto à CETESB." },
                { q: "O que é MTR e por que é obrigatório?", a: "O MTR (Manifesto de Transporte de Resíduos) é o documento obrigatório que rastreia o resíduo desde a origem até a destinação final, emitido pelo sistema SINIR. É obrigatório desde 2021." },
                { q: "O que é CADRI e quando minha empresa precisa?", a: "O CADRI é o Certificado de Movimentação de Resíduos de Interesse Ambiental, emitido pela CETESB. É obrigatório para empresas no Estado de São Paulo que transportam resíduos perigosos." },
                { q: "A empresa conta com engenheiro ambiental?", a: "Sim. Contamos com engenheiro ambiental responsável que acompanha cada operação, garantindo conformidade com a legislação ambiental e a Política Nacional de Resíduos Sólidos." },
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
