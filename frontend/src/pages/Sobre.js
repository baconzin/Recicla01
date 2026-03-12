import { Link } from "react-router-dom";
import { MapPin, Award, Users, Truck, ShieldCheck, ArrowRight, CheckCircle } from "lucide-react";

export default function Sobre() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1E293B] py-20 md:py-28 relative noise-overlay">
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2DD4BF]">Sobre Nos</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white uppercase tracking-tight mt-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            Usina Recicla
          </h1>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl">
            Gestao integrada de residuos solidos e efluentes liquidos com expertise e transparencia contratual.
          </p>
        </div>
      </section>

      {/* Company Info */}
      <section className="bg-[#F8FAFC] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-[#1E293B] uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Quem Somos
              </h2>
              <p className="mt-6 text-slate-600 leading-relaxed">
                A Usina Recicla e uma empresa especializada em coleta, transporte e destinacao ambientalmente correta de residuos industriais e efluentes. Sediada em Rio Claro/SP, atendemos industrias e grandes geradores em todo o interior do Estado de Sao Paulo.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Nossa operacao combina conhecimento tecnico ambiental com gestao empresarial de excelencia, garantindo que cada cliente receba um servico sob medida, com total conformidade legal e eficiencia operacional.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Contamos com frota propria de caminhoes-tanque com alto vacuo, equipe tecnica especializada e uma estrutura completa de documentacao ambiental que garante a isencao total de passivos para sua empresa.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-6">
                {[
                  { icon: MapPin, label: "Rio Claro, SP" },
                  { icon: Truck, label: "Frota Propria" },
                  { icon: ShieldCheck, label: "Conformidade Total" },
                  { icon: Award, label: "Expertise Tecnica" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#0D9488]/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-[#0D9488]" />
                    </div>
                    <span className="text-sm font-medium text-[#1E293B]">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CEO Section */}
            <div>
              <div className="bg-white border border-slate-200 p-10">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-5 h-5 text-[#0D9488]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">Lideranca</span>
                </div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-20 h-20 bg-[#0D9488] flex items-center justify-center text-white shrink-0">
                    <span className="text-2xl font-bold" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>RP</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#1E293B]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Raphael Pascon</h3>
                    <p className="text-sm text-slate-500">CEO - Usina Recicla</p>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  A Usina Recicla conta com a expertise do CEO Raphael Pascon, que traz sua solida trajetoria na gestao de condominios e administracao de empresas de construcao civil no interior de Sao Paulo para garantir a maxima eficiencia logistica e transparencia contratual.
                </p>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Com experiencia consolidada na gestao de operacoes complexas, Raphael trouxe para a Usina Recicla os mesmos principios de excelencia operacional, controle rigoroso de processos e compromisso com resultados que marcaram sua trajetoria no setor de construcao civil.
                </p>
                <blockquote className="mt-8 border-l-4 border-[#0D9488] pl-5 italic text-slate-600">
                  "Tratamos a gestao de residuos com o mesmo rigor tecnico e compromisso que aplicamos em qualquer operacao industrial de grande porte. Cada cliente recebe atencao personalizada e documentacao impecavel."
                </blockquote>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold text-[#1E293B] uppercase tracking-tight text-center" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Nossos Valores
            </h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Conformidade Legal",
                  desc: "Atuamos em total conformidade com a legislacao ambiental vigente, garantindo a regularizacao de cada operacao junto aos orgaos competentes.",
                },
                {
                  title: "Transparencia",
                  desc: "Documentacao completa e rastreabilidade em cada etapa do processo. Nossos clientes tem acesso total as informacoes de cada operacao.",
                },
                {
                  title: "Eficiencia Operacional",
                  desc: "Logistica otimizada, frota propria e equipe especializada para atender demandas de qualquer porte com agilidade e qualidade.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white border border-slate-200 p-8">
                  <h3 className="text-xl font-bold text-[#1E293B] uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <a
              href="https://wa.me/5519971636969"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="sobre-cta"
              className="bg-[#0D9488] text-white hover:bg-[#115E59] h-14 px-10 text-sm font-bold uppercase tracking-wider inline-flex items-center gap-2 transition-colors"
            >
              Entre em Contato <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
