import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Droplets,
  Truck,
  FileCheck,
  ShieldCheck,
  Recycle,
  Factory,
  ArrowRight,
  ChevronRight,
  CheckCircle,
  Search,
  MapPin,
  ClipboardCheck,
  Package,
  BarChart3,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const HERO_IMG = "https://images.unsplash.com/photo-1622322977781-76f2247964b7?auto=format&fit=crop&w=1200&q=80";
const FLEET_IMG = "https://images.unsplash.com/photo-1621859191129-6bc88cf02966?auto=format&fit=crop&w=800&q=80";
const INDUSTRY_IMG = "https://images.unsplash.com/photo-1771273954407-05345d61543e?auto=format&fit=crop&w=800&q=80";

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
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
      {/* Hero Section */}
      <section data-testid="hero-section" className="relative bg-[#1E293B] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMG}
            alt="Instalacao industrial de tratamento de residuos"
            className="w-full h-full object-cover opacity-20"
            loading="eager"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#0D9488]/20 border border-[#0D9488]/30 px-4 py-1.5 mb-8 animate-fade-in">
              <ShieldCheck className="w-4 h-4 text-[#2DD4BF]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#2DD4BF]">
                Conformidade CETESB / SINIR
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white uppercase tracking-tight leading-tight animate-fade-in-up"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Gestao Integrada de Residuos Solidos e Efluentes Liquidos
            </h1>

            <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl animate-fade-in-up delay-200">
              Coleta, transporte e destinacao final ambientalmente adequada. Isencao total de passivos ambientais para a sua empresa.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
              <a
                href="https://wa.me/5519971636969"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-cta"
                className="bg-[#0D9488] text-white hover:bg-[#115E59] h-14 px-10 text-sm font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-colors"
              >
                Solicitar Orcamento Tecnico
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

            {/* Trust Badges */}
            <div className="mt-14 flex flex-wrap gap-6 animate-fade-in-up delay-400">
              {[
                "MTR - Manifesto de Transporte",
                "CDF - Certificado de Destinacao",
                "CADRI - CETESB",
              ].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#2DD4BF]" />
                  <span className="text-xs text-slate-400 font-medium uppercase tracking-wide">
                    {badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Clientes Atendidos" },
              { number: "10K+", label: "Toneladas Destinadas" },
              { number: "100%", label: "Conformidade Legal" },
              { number: "24h", label: "Atendimento Emergencial" },
            ].map((stat) => (
              <div key={stat.label} className="text-center reveal">
                <span
                  className="text-3xl md:text-4xl font-extrabold text-[#0D9488] counter-number"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {stat.number}
                </span>
                <p className="text-xs text-slate-500 uppercase tracking-widest mt-1 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services - Bento Grid */}
      <section data-testid="services-section" className="bg-[#F8FAFC] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="reveal">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">
              Servicos Operacionais
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1E293B] uppercase tracking-tight mt-3"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Solucoes Completas em Gestao Ambiental
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {/* Main Service - Effluent Collection */}
            <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden bg-white border border-slate-200 hover:border-[#0D9488] transition-all duration-300 reveal">
              <div className="h-64 overflow-hidden">
                <img
                  src={FLEET_IMG}
                  alt="Coleta de efluentes industriais"
                  className="w-full h-full object-cover service-card-img"
                  loading="lazy"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#0D9488]/10 flex items-center justify-center">
                    <Droplets className="w-5 h-5 text-[#0D9488]" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">
                    Servico Principal
                  </span>
                </div>
                <h3
                  className="text-2xl font-bold text-[#1E293B] uppercase tracking-tight"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Coleta e Transporte de Efluentes
                </h3>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  Caminhoes-tanque com alto vacuo e hidrojateamento para efluentes industriais, sanitarios e limpeza de caixas separadoras de agua e oleo. Frota propria equipada para operacoes de grande porte.
                </p>
                <Link
                  to="/coleta-de-efluentes"
                  data-testid="service-efluentes-link"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0D9488] uppercase tracking-wider hover:gap-3 transition-all"
                >
                  Saiba Mais <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Solid Waste */}
            <div className="group relative overflow-hidden bg-white border border-slate-200 p-8 hover:border-[#0D9488] transition-all duration-300 reveal delay-100">
              <div className="w-10 h-10 bg-[#0D9488]/10 flex items-center justify-center mb-4">
                <Recycle className="w-5 h-5 text-[#0D9488]" />
              </div>
              <h3
                className="text-xl font-bold text-[#1E293B] uppercase tracking-tight"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Gestao de Residuos Solidos e Sucatas
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Manuseio de residuos Classe I (Perigosos) e Classe II (Nao Inertes), promovendo a triagem e reinsercao na cadeia produtiva.
              </p>
              <Link
                to="/gestao-de-residuos"
                data-testid="service-residuos-link"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#0D9488] uppercase tracking-wider hover:gap-3 transition-all"
              >
                Saiba Mais <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Traceability */}
            <div className="group relative overflow-hidden bg-[#1E293B] border border-slate-700 p-8 hover:border-[#2DD4BF] transition-all duration-300 reveal delay-200">
              <div className="w-10 h-10 bg-[#2DD4BF]/10 flex items-center justify-center mb-4">
                <Search className="w-5 h-5 text-[#2DD4BF]" />
              </div>
              <h3
                className="text-xl font-bold text-white uppercase tracking-tight"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Rastreabilidade Completa
              </h3>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                Monitoramento de carga da coleta ate a destinacao final. Transparencia total em cada etapa do processo.
              </p>
              <Link
                to="/servicos"
                data-testid="service-rastreabilidade-link"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#2DD4BF] uppercase tracking-wider hover:gap-3 transition-all"
              >
                Saiba Mais <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Documentation */}
      <section data-testid="compliance-section" className="bg-[#1E293B] py-24 md:py-32 relative noise-overlay">
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2DD4BF]">
                Conformidade e Documentacao Legal
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight mt-3"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Seguranca Juridica Para Sua Empresa
              </h2>
              <p className="mt-6 text-slate-400 leading-relaxed">
                A Usina Recicla garante total regularizacao junto a CETESB e SINIR. Emitimos laudos tecnicos e fornecemos toda a documentacao ambiental necessaria para a sua operacao.
              </p>

              <div className="mt-10 space-y-6">
                {[
                  {
                    icon: FileCheck,
                    title: "MTR - Manifesto de Transporte de Residuos",
                    desc: "Documento obrigatorio que rastreia o residuo desde a origem ate a destinacao final, emitido eletronicamente pelo SINIR.",
                  },
                  {
                    icon: ClipboardCheck,
                    title: "CDF - Certificado de Destinacao Final",
                    desc: "Comprova que o residuo foi destinado de forma ambientalmente correta, isentando sua empresa de passivos ambientais.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "CADRI - Certificado de Movimentacao de Residuos",
                    desc: "Autorizacao da CETESB para movimentacao de residuos de interesse ambiental no Estado de Sao Paulo.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 reveal">
                    <div className="w-12 h-12 bg-[#0D9488]/20 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-[#2DD4BF]" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base">{item.title}</h3>
                      <p className="text-slate-400 text-sm mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/documentacao-ambiental"
                data-testid="compliance-cta"
                className="mt-10 bg-[#0D9488] text-white hover:bg-[#115E59] h-12 px-8 text-sm font-bold uppercase tracking-wider inline-flex items-center gap-2 transition-colors"
              >
                Documentacao Completa <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="relative reveal delay-200">
              <div className="bg-[#0F172A] border border-slate-700 p-8 md:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-3 h-3 bg-[#2DD4BF] rounded-full"></div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#2DD4BF]">
                    Regularizacao Ambiental
                  </span>
                </div>
                <div className="space-y-6">
                  {[
                    "Emissao de Laudos Tecnicos",
                    "Manifesto de Transporte de Residuos (MTR)",
                    "Certificado de Destinacao Final (CDF)",
                    "Suporte para obtencao de CADRI",
                    "Regularizacao junto a CETESB",
                    "Cadastro no sistema SINIR",
                    "Plano de Gerenciamento de Residuos",
                    "Relatorios de rastreabilidade",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#0D9488] shrink-0" />
                      <span className="text-slate-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#0D9488]/30 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section data-testid="how-it-works-section" className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center reveal">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">
              Processo
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1E293B] uppercase tracking-tight mt-3"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Como Funciona Nossa Operacao
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {[
              {
                step: "01",
                icon: Factory,
                title: "Diagnostico",
                desc: "Avaliacao tecnica dos residuos gerados, volumes e requisitos legais da sua operacao industrial.",
              },
              {
                step: "02",
                icon: Package,
                title: "Planejamento",
                desc: "Elaboracao do plano de gerenciamento com cronograma de coleta e documentacao necessaria.",
              },
              {
                step: "03",
                icon: Truck,
                title: "Coleta e Transporte",
                desc: "Mobilizacao da frota especializada com rastreamento em tempo real ate a destinacao final.",
              },
              {
                step: "04",
                icon: BarChart3,
                title: "Documentacao",
                desc: "Emissao de MTR, CDF e relatorios de rastreabilidade para total conformidade legal.",
              },
            ].map((item, i) => (
              <div key={item.step} className={`reveal delay-${(i + 1) * 100}`}>
                <div className="relative">
                  <span
                    className="text-7xl font-extrabold text-slate-100"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {item.step}
                  </span>
                  <div className="w-12 h-12 bg-[#0D9488]/10 flex items-center justify-center absolute top-4 left-16">
                    <item.icon className="w-6 h-6 text-[#0D9488]" />
                  </div>
                </div>
                <h3
                  className="text-xl font-bold text-[#1E293B] uppercase tracking-tight mt-4"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits / Environmental Impact */}
      <section data-testid="benefits-section" className="bg-[#F8FAFC] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <img
                src={INDUSTRY_IMG}
                alt="Infraestrutura industrial de gestao de residuos"
                className="w-full h-80 lg:h-[480px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="reveal delay-200">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">
                Impacto Ambiental
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#1E293B] uppercase tracking-tight mt-3"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Beneficios Para Sua Empresa e o Meio Ambiente
              </h2>
              <div className="mt-8 space-y-5">
                {[
                  {
                    title: "Isencao de Passivos Ambientais",
                    desc: "Documentacao completa que comprova a destinacao correta de todos os residuos gerados.",
                  },
                  {
                    title: "Conformidade com a Legislacao",
                    desc: "Atendimento integral a Politica Nacional de Residuos Solidos (Lei 12.305/2010).",
                  },
                  {
                    title: "Reinsercao na Cadeia Produtiva",
                    desc: "Triagem e encaminhamento de materiais reciclaveis, reduzindo o volume de destinacao final.",
                  },
                  {
                    title: "Eficiencia Operacional",
                    desc: "Planos de coleta personalizados que otimizam a logistica e reduzem custos operacionais.",
                  },
                  {
                    title: "Imagem Corporativa",
                    desc: "Demonstre o compromisso ambiental da sua empresa com relatorios de sustentabilidade.",
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-white border-l-4 border-[#0D9488] p-5">
                    <h3 className="font-bold text-[#1E293B]">{item.title}</h3>
                    <p className="text-sm text-slate-600 mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Industries */}
      <section data-testid="industries-section" className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center reveal">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">
              Segmentos Atendidos
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1E293B] uppercase tracking-tight mt-3"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Solucoes Para Diversos Segmentos Industriais
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
            {[
              "Industrias Quimicas",
              "Fabricas e Manufatura",
              "Industrias Alimenticias",
              "Empresas de Cosmeticos",
              "Saneamento e Limpeza",
              "Postos de Combustivel",
              "Transportadoras",
              "Condominios Industriais",
            ].map((industry) => (
              <div
                key={industry}
                className="bg-[#F8FAFC] border border-slate-200 p-5 text-center hover:border-[#0D9488] transition-colors reveal"
              >
                <Factory className="w-6 h-6 text-[#0D9488] mx-auto mb-3" />
                <span className="text-sm font-medium text-[#1E293B]">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section data-testid="faq-section" className="bg-[#F8FAFC] py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="text-center reveal">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">
              Perguntas Frequentes
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1E293B] uppercase tracking-tight mt-3"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Duvidas Sobre Gestao de Residuos
            </h2>
          </div>

          <div className="mt-12 reveal">
            <Accordion type="single" collapsible className="space-y-3">
              {[
                {
                  q: "Quais tipos de residuos a Usina Recicla coleta?",
                  a: "Coletamos residuos solidos Classe I (Perigosos) e Classe II (Nao Inertes), alem de efluentes industriais e sanitarios. Nossa frota inclui caminhoes-tanque com alto vacuo para efluentes e veiculos especializados para residuos solidos.",
                },
                {
                  q: "A Usina Recicla emite toda a documentacao ambiental necessaria?",
                  a: "Sim. Emitimos MTR (Manifesto de Transporte de Residuos), CDF (Certificado de Destinacao Final) e oferecemos suporte completo para obtencao e movimentacao via CADRI junto a CETESB.",
                },
                {
                  q: "Qual a area de atendimento da Usina Recicla?",
                  a: "Atendemos industrias e grandes geradores em Rio Claro/SP e regiao, com capacidade de atendimento em todo o interior do Estado de Sao Paulo.",
                },
                {
                  q: "Como e feita a rastreabilidade dos residuos?",
                  a: "Realizamos o monitoramento completo de cada carga, desde a coleta na sua empresa ate a destinacao final na unidade licenciada, com emissao de documentacao em cada etapa do processo.",
                },
                {
                  q: "E possivel agendar coletas periodicas?",
                  a: "Sim. Oferecemos planos de coleta personalizados com frequencia semanal, quinzenal ou mensal, alem de atendimento emergencial 24 horas para situacoes criticas.",
                },
                {
                  q: "Minha empresa precisa de CADRI?",
                  a: "O CADRI e obrigatorio para empresas no Estado de Sao Paulo que movimentam residuos de interesse ambiental. Nossa equipe avalia a necessidade e presta suporte completo na obtencao do certificado junto a CETESB.",
                },
              ].map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-white border border-slate-200 px-6"
                  data-testid={`faq-item-${i}`}
                >
                  <AccordionTrigger className="text-left font-bold text-[#1E293B] hover:text-[#0D9488] py-5 text-base">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section data-testid="about-teaser" className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">
                Sobre Nos
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#1E293B] uppercase tracking-tight mt-3"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Lideranca e Confianca na Gestao Ambiental
              </h2>
              <p className="mt-6 text-slate-600 leading-relaxed">
                A Usina Recicla conta com a expertise do CEO Raphael Pascon, que traz sua solida trajetoria na gestao de condominios e administracao de empresas de construcao civil no interior de Sao Paulo para garantir a maxima eficiencia logistica e transparencia contratual.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Sediada em Rio Claro/SP, nossa operacao combina conhecimento tecnico ambiental com gestao empresarial de excelencia, garantindo que cada cliente receba um servico sob medida, com total conformidade legal e eficiencia operacional.
              </p>
              <Link
                to="/sobre"
                data-testid="about-cta"
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#0D9488] uppercase tracking-wider hover:gap-3 transition-all"
              >
                Conheca Nossa Historia <ArrowRight className="w-4 h-4" />
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
                <div className="mt-6 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#0D9488]" />
                  <span className="text-sm text-slate-500">Rio Claro, SP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
