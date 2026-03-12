import { Link } from "react-router-dom";
import { MapPin, Award, Users, Truck, ShieldCheck, ArrowRight, CheckCircle, HardHat, Globe } from "lucide-react";

export default function Sobre() {
  return (
    <div>
      <section className="bg-[#1E293B] py-20 md:py-28 relative noise-overlay">
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2DD4BF]">Sobre a Empresa</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white uppercase tracking-tight mt-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            Usina Recicla
          </h1>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl">
            Coleta, transporte e destinacao de residuos industriais e efluentes com expertise tecnica e conformidade ambiental. Atendimento em todo o Brasil.
          </p>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-[#1E293B] uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Quem Somos
              </h2>
              <p className="mt-6 text-slate-600 leading-relaxed">
                A Usina Recicla e uma empresa especializada em coleta, transporte e destinacao ambientalmente correta de residuos industriais e efluentes. Atendemos empresas e industrias em todo o Brasil que precisam descartar residuos e efluentes com seguranca ambiental e documentacao completa.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Nossa operacao combina conhecimento tecnico ambiental com gestao empresarial de excelencia. Contamos com engenheiro ambiental responsavel, frota propria de caminhoes-tanque com alto vacuo e uma estrutura completa de documentacao ambiental que garante a isencao total de passivos para sua empresa.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Atuamos em conformidade com a CETESB, a Politica Nacional de Residuos Solidos e toda a legislacao ambiental brasileira, emitindo MTR, CDF e CADRI para cada operacao.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-6">
                {[
                  { icon: Globe, label: "Atendimento Nacional" },
                  { icon: Truck, label: "Frota Propria" },
                  { icon: ShieldCheck, label: "Conformidade Total" },
                  { icon: HardHat, label: "Eng. Ambiental" },
                  { icon: Award, label: "Expertise Tecnica" },
                  { icon: MapPin, label: "Sede em Sao Paulo" },
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
                  Com experiencia consolidada na gestao de operacoes complexas, Raphael trouxe para a Usina Recicla os mesmos principios de excelencia operacional, controle rigoroso de processos e compromisso com resultados que marcaram sua trajetoria.
                </p>
                <blockquote className="mt-8 border-l-4 border-[#0D9488] pl-5 italic text-slate-600">
                  "Tratamos a gestao de residuos com o mesmo rigor tecnico e compromisso que aplicamos em qualquer operacao industrial de grande porte. Cada empresa atendida recebe documentacao impecavel e conformidade total."
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
                { title: "Conformidade Ambiental", desc: "Atuamos em total conformidade com CETESB, SINIR e a Politica Nacional de Residuos Solidos, com engenheiro ambiental responsavel." },
                { title: "Transparencia e Rastreabilidade", desc: "Documentacao completa e monitoramento em cada etapa. Acesso total as informacoes de cada operacao com MTR, CDF e relatorios." },
                { title: "Eficiencia Operacional", desc: "Logistica otimizada, frota propria e equipe tecnica especializada para atender demandas de qualquer porte em todo o Brasil." },
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

          <div className="mt-16 text-center">
            <a
              href="https://wa.me/5519971636969?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20coleta%20de%20res%C3%ADduos."
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
