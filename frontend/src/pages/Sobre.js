import { Link } from "react-router-dom";
import { MapPin, Award, Users, Truck, ShieldCheck, ArrowRight, CheckCircle, HardHat, Globe } from "lucide-react";

export default function Sobre() {
  return (
    <div>
      <section className="bg-[#1E293B] py-20 md:py-28 relative noise-overlay">
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2DD4BF]">Sobre a Empresa</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white uppercase tracking-tight mt-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Usina Recicla</h1>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl">Coleta, transporte e destinação de resíduos industriais e efluentes com expertise técnica e conformidade ambiental. Atendimento em todo o Brasil.</p>
        </div>
      </section>
      <section className="bg-[#F8FAFC] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-[#1E293B] uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Quem Somos</h2>
              <p className="mt-6 text-slate-600 leading-relaxed">A <strong>Usina Recicla</strong> é uma empresa especializada em coleta, transporte e destinação ambientalmente correta de resíduos industriais e efluentes. Atendemos empresas e indústrias em todo o Brasil que precisam descartar resíduos e efluentes com segurança ambiental e documentação completa.</p>
              <p className="mt-4 text-slate-600 leading-relaxed">Nossa operação combina conhecimento técnico ambiental com gestão empresarial de excelência. Contamos com engenheiro ambiental responsável, frota própria de caminhões-tanque com alto vácuo e uma estrutura completa de documentação ambiental que garante a isenção total de passivos para sua empresa.</p>
              <p className="mt-4 text-slate-600 leading-relaxed">Atuamos em conformidade com a CETESB, a Política Nacional de Resíduos Sólidos e toda a legislação ambiental brasileira, emitindo MTR, CDF e CADRI para cada operação.</p>
              <div className="mt-10 grid grid-cols-2 gap-6">
                {[
                  { icon: Globe, label: "Atendimento Nacional" },
                  { icon: Truck, label: "Frota Própria" },
                  { icon: ShieldCheck, label: "Conformidade Total" },
                  { icon: HardHat, label: "Eng. Ambiental" },
                  { icon: Award, label: "Expertise Técnica" },
                  { icon: MapPin, label: "Sede em São Paulo" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#0D9488]/10 flex items-center justify-center shrink-0"><item.icon className="w-5 h-5 text-[#0D9488]" /></div>
                    <span className="text-sm font-medium text-[#1E293B]">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="bg-white border border-slate-200 p-10">
                <div className="flex items-center gap-3 mb-6"><Users className="w-5 h-5 text-[#0D9488]" /><span className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">Liderança</span></div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-20 h-20 bg-[#0D9488] flex items-center justify-center text-white shrink-0"><span className="text-2xl font-bold" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>RP</span></div>
                  <div><h3 className="text-2xl font-bold text-[#1E293B]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Raphael Pascon</h3><p className="text-sm text-slate-500">CEO - Usina Recicla</p></div>
                </div>
                <p className="text-slate-600 leading-relaxed">A Usina Recicla conta com a expertise do CEO <strong>Raphael Pascon</strong>, que traz sua sólida trajetória na gestão de condomínios e administração de empresas de construção civil no interior de São Paulo para garantir a <strong>máxima eficiência logística</strong> e <strong>transparência contratual</strong>.</p>
                <p className="mt-4 text-slate-600 leading-relaxed">Com experiência consolidada na gestão de operações complexas, Raphael trouxe para a Usina Recicla os mesmos princípios de excelência operacional, controle rigoroso de processos e compromisso com resultados que marcaram sua trajetória.</p>
                <blockquote className="mt-8 border-l-4 border-[#0D9488] pl-5 italic text-slate-600">"Tratamos a gestão de resíduos com o mesmo rigor técnico e compromisso que aplicamos em qualquer operação industrial de grande porte. Cada empresa atendida recebe documentação impecável e conformidade total."</blockquote>
              </div>
            </div>
          </div>
          <div className="mt-24">
            <h2 className="text-3xl font-bold text-[#1E293B] uppercase tracking-tight text-center" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Nossos Valores</h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Conformidade Ambiental", desc: "Atuamos em total conformidade com CETESB, SINIR e a Política Nacional de Resíduos Sólidos, com engenheiro ambiental responsável." },
                { title: "Transparência e Rastreabilidade", desc: "Documentação completa e monitoramento em cada etapa. Acesso total às informações de cada operação com MTR, CDF e relatórios." },
                { title: "Eficiência Operacional", desc: "Logística otimizada, frota própria e equipe técnica especializada para atender demandas de qualquer porte em todo o Brasil." },
              ].map((item) => (
                <div key={item.title} className="bg-white border border-slate-200 p-8">
                  <h3 className="text-xl font-bold text-[#1E293B] uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{item.title}</h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-16 text-center">
            <a href="https://wa.me/5519971636969" target="_blank" rel="noopener noreferrer" data-testid="sobre-cta" className="bg-[#0D9488] text-white hover:bg-[#115E59] h-14 px-10 text-sm font-bold uppercase tracking-wider inline-flex items-center gap-2 transition-colors">Entre em Contato <ArrowRight className="w-4 h-4" /></a>
          </div>
        </div>
      </section>
    </div>
  );
}
