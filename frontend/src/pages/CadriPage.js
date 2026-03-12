import { Link } from "react-router-dom";
import { ShieldCheck, ArrowRight, CheckCircle, ChevronRight, AlertTriangle, FileCheck, Clock, Building2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";

export default function CadriPage() {
  return (
    <div>
      <section className="bg-[#1E293B] py-20 md:py-28 relative noise-overlay">
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link to="/" className="hover:text-[#2DD4BF] transition-colors">Inicio</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/documentacao-ambiental" className="hover:text-[#2DD4BF] transition-colors">Documentacao Ambiental</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#2DD4BF]">CADRI</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="w-8 h-8 text-[#2DD4BF]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#2DD4BF]">Certificacao CETESB</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            CADRI - Certificado de Movimentacao de Residuos
          </h1>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl">
            Autorizacao da CETESB para movimentacao de residuos de interesse ambiental no Estado de Sao Paulo. Suporte completo na obtencao e renovacao.
          </p>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-[#1E293B] uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  O Que e o CADRI
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  O CADRI (Certificado de Movimentacao de Residuos de Interesse Ambiental) e o documento emitido pela CETESB (Companhia Ambiental do Estado de Sao Paulo) que aprova o encaminhamento de residuos de interesse ambiental a locais de reprocessamento, armazenamento, tratamento ou disposicao final, licenciados ou autorizados pela CETESB.
                </p>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  E regulamentado pela Resolucao SMA 38/2011 e obrigatorio para empresas no Estado de Sao Paulo que movimentam residuos classificados como de interesse ambiental.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#1E293B] uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Quais Residuos Necessitam de CADRI
                </h2>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Residuos industriais perigosos (Classe I)",
                    "Residuos de servicos de saude",
                    "Oleos lubrificantes usados",
                    "Pilhas e baterias industriais",
                    "Pneus insevivels",
                    "Lampadas com mercurio",
                    "Residuos de construcao contaminados",
                    "Efluentes industriais perigosos",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 bg-white border border-slate-200 p-4">
                      <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#1E293B] uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Como Solicitar o CADRI
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  A solicitacao e feita online pelo sistema da CETESB. A Usina Recicla presta suporte completo em todo o processo:
                </p>
                <div className="mt-6 space-y-4">
                  {[
                    { step: "01", text: "Identificacao e classificacao dos residuos da sua empresa" },
                    { step: "02", text: "Preparacao da documentacao tecnica necessaria" },
                    { step: "03", text: "Submissao da solicitacao junto a CETESB" },
                    { step: "04", text: "Acompanhamento da analise ate a aprovacao" },
                    { step: "05", text: "Obtencao do certificado e inicio das operacoes" },
                  ].map((item) => (
                    <div key={item.step} className="flex items-center gap-4 bg-white border border-slate-200 p-4">
                      <span className="text-2xl font-extrabold text-[#0D9488]/30" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{item.step}</span>
                      <span className="text-slate-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#1E293B] uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Validade e Renovacao
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  O CADRI possui validade definida pela CETESB, geralmente de 1 a 2 anos, podendo ser renovado mediante nova solicitacao antes do vencimento. A operacao sem CADRI valido sujeita a empresa a autuacoes e multas ambientais. A Usina Recicla acompanha o prazo de validade e auxilia na renovacao.
                </p>
              </div>

              {/* FAQ */}
              <div className="border-t border-slate-200 pt-10">
                <h2 className="text-2xl font-bold text-[#1E293B] uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Perguntas Frequentes Sobre CADRI
                </h2>
                <Accordion type="single" collapsible className="mt-6 space-y-3">
                  {[
                    { q: "Quanto tempo demora para obter o CADRI?", a: "O prazo medio de analise pela CETESB e de 15 a 30 dias uteis, podendo variar conforme a complexidade do residuo e a demanda do orgao." },
                    { q: "O CADRI e obrigatorio em outros estados?", a: "O CADRI e especifico do Estado de Sao Paulo. Outros estados possuem documentos similares emitidos por seus respectivos orgaos ambientais." },
                    { q: "Posso transportar residuo sem CADRI?", a: "Nao. O transporte de residuos de interesse ambiental sem CADRI valido configura infracao ambiental, sujeita a multas e outras sancoes administrativas." },
                    { q: "O CADRI substitui o MTR?", a: "Nao. O CADRI autoriza a movimentacao do residuo, enquanto o MTR rastreia o transporte efetivo. Ambos sao obrigatorios e complementares." },
                  ].map((faq, i) => (
                    <AccordionItem key={i} value={`cadri-faq-${i}`} className="bg-white border border-slate-200 px-5">
                      <AccordionTrigger className="text-left font-bold text-[#1E293B] hover:text-[#0D9488] py-4">{faq.q}</AccordionTrigger>
                      <AccordionContent className="text-slate-600 leading-relaxed pb-4">{faq.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-[#1E293B] p-8 text-white">
                <h3 className="text-lg font-bold uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Dados do CADRI
                </h3>
                <div className="mt-6 space-y-4">
                  {[
                    { icon: Building2, text: "Emitido pela CETESB" },
                    { icon: ShieldCheck, text: "Obrigatorio em Sao Paulo" },
                    { icon: Clock, text: "Validade de 1 a 2 anos" },
                    { icon: FileCheck, text: "Renovacao antes do vencimento" },
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
                  Precisa de CADRI?
                </h3>
                <p className="mt-3 text-white/80 text-sm">
                  A Usina Recicla presta suporte completo na obtencao e renovacao do CADRI junto a CETESB.
                </p>
                <a
                  href="https://wa.me/5519971636969?text=Ol%C3%A1%2C%20preciso%20de%20suporte%20para%20obten%C3%A7%C3%A3o%20de%20CADRI."
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="cadri-cta"
                  className="mt-6 bg-white text-[#0D9488] hover:bg-slate-100 h-12 px-6 text-sm font-bold uppercase tracking-wider inline-flex items-center gap-2 transition-colors w-full justify-center"
                >
                  Falar com Especialista <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="bg-white border border-slate-200 p-8">
                <h3 className="text-lg font-bold text-[#1E293B] uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Documentacao Relacionada
                </h3>
                <div className="mt-4 space-y-3">
                  <Link to="/mtr-manifesto-transporte-residuos" className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#0D9488] transition-colors">
                    <ChevronRight className="w-4 h-4" /> MTR - Manifesto de Transporte
                  </Link>
                  <Link to="/documentacao-ambiental" className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#0D9488] transition-colors">
                    <ChevronRight className="w-4 h-4" /> Documentacao Ambiental Completa
                  </Link>
                  <Link to="/servicos" className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#0D9488] transition-colors">
                    <ChevronRight className="w-4 h-4" /> Todos os Servicos
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
