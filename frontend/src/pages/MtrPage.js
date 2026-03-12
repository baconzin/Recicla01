import { Link } from "react-router-dom";
import { FileCheck, ArrowRight, CheckCircle, ChevronRight, AlertTriangle, ClipboardCheck, Truck, Factory } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";

export default function MtrPage() {
  return (
    <div>
      <section className="bg-[#1E293B] py-20 md:py-28 relative noise-overlay">
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link to="/" className="hover:text-[#2DD4BF] transition-colors">Inicio</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/documentacao-ambiental" className="hover:text-[#2DD4BF] transition-colors">Documentacao Ambiental</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#2DD4BF]">MTR</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <FileCheck className="w-8 h-8 text-[#2DD4BF]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#2DD4BF]">Documentacao Obrigatoria</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            MTR - Manifesto de Transporte de Residuos
          </h1>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl">
            Documento obrigatorio que rastreia o residuo desde a origem ate a destinacao final. Emissao e suporte completo pela Usina Recicla.
          </p>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-[#1E293B] uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  O Que e o MTR
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  O MTR (Manifesto de Transporte de Residuos) e o documento eletronico emitido pelo Sistema Nacional de Informacoes sobre a Gestao de Residuos Solidos (SINIR). Funciona como um "passaporte" do residuo, registrando informacoes sobre o gerador, o transportador, o tipo e quantidade de residuo, e a unidade de destinacao final.
                </p>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Desde 2021, a emissao do MTR e obrigatoria em todo o territorio nacional, conforme a Portaria MMA 280/2020. A Usina Recicla cuida de toda a emissao e gestao do MTR para seus clientes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#1E293B] uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Por Que o MTR e Obrigatorio
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  O MTR garante a rastreabilidade completa do residuo, desde sua geracao ate a destinacao final. Sem o MTR, nao e possivel comprovar que o residuo foi destinado de forma ambientalmente correta, expondo a empresa geradora a passivos ambientais e sancoes legais.
                </p>
                <div className="mt-6 space-y-3">
                  {[
                    "Obrigatorio pela Politica Nacional de Residuos Solidos (Lei 12.305/2010)",
                    "Emissao eletroncia pelo sistema SINIR desde 2021",
                    "Necessario para todas as operacoes de transporte de residuos",
                    "Comprova a rastreabilidade da cadeia gerador-transportador-destinador",
                    "Vinculado ao Inventario Nacional de Residuos Solidos",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#1E293B] uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Quem Precisa Emitir o MTR
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Toda pessoa fisica ou juridica que gere residuos sujeitos a elaboracao de Plano de Gerenciamento de Residuos Solidos e obrigada a emitir o MTR. Isso inclui:
                </p>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Industrias de todos os portes",
                    "Comercios de grande porte",
                    "Prestadores de servicos publicos",
                    "Empresas de construcao civil",
                    "Servicos de saude",
                    "Postos de combustivel",
                    "Industrias alimenticias",
                    "Empresas quimicas e farmaceuticas",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 bg-[#0D9488] shrink-0"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#1E293B] uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Como a Usina Recicla Ajuda
                </h2>
                <div className="mt-6 space-y-4">
                  {[
                    { step: "01", text: "Cadastro e orientacao no sistema SINIR" },
                    { step: "02", text: "Classificacao correta dos residuos" },
                    { step: "03", text: "Emissao do MTR antes de cada coleta" },
                    { step: "04", text: "Acompanhamento do recebimento na destinacao" },
                    { step: "05", text: "Arquivamento e gestao dos manifestos" },
                  ].map((item) => (
                    <div key={item.step} className="flex items-center gap-4 bg-white border border-slate-200 p-4">
                      <span className="text-2xl font-extrabold text-[#0D9488]/30" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{item.step}</span>
                      <span className="text-slate-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div className="border-t border-slate-200 pt-10">
                <h2 className="text-2xl font-bold text-[#1E293B] uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Perguntas Frequentes Sobre MTR
                </h2>
                <Accordion type="single" collapsible className="mt-6 space-y-3">
                  {[
                    { q: "O MTR e gratuito?", a: "Sim, a emissao do MTR pelo sistema SINIR e gratuita para todos os geradores de residuos." },
                    { q: "O MTR substitui o CADRI?", a: "Nao. O MTR e o CADRI sao documentos complementares. O CADRI autoriza a movimentacao, enquanto o MTR rastreia o transporte efetivo." },
                    { q: "Qual a penalidade por nao emitir o MTR?", a: "A ausencia do MTR durante o transporte configura irregularidade ambiental, com multas, apreensao do veiculo e responsabilizacao do gerador, transportador e destinador." },
                    { q: "O MTR precisa ser emitido a cada coleta?", a: "Sim. O MTR deve ser emitido a cada operacao de transporte de residuos, vinculado aquela operacao especifica." },
                  ].map((faq, i) => (
                    <AccordionItem key={i} value={`mtr-faq-${i}`} className="bg-white border border-slate-200 px-5">
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
                  Informacoes do MTR
                </h3>
                <div className="mt-6 space-y-4">
                  {[
                    { icon: Factory, text: "Dados do gerador de residuos" },
                    { icon: Truck, text: "Dados do transportador" },
                    { icon: ClipboardCheck, text: "Tipo e quantidade do residuo" },
                    { icon: FileCheck, text: "Dados da destinacao final" },
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
                  Precisa Emitir MTR?
                </h3>
                <p className="mt-3 text-white/80 text-sm">
                  A Usina Recicla cuida de toda a emissao e gestao do MTR para sua empresa.
                </p>
                <a
                  href="https://wa.me/5519971636969?text=Ol%C3%A1%2C%20preciso%20de%20suporte%20para%20emiss%C3%A3o%20de%20MTR."
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="mtr-cta"
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
                  <Link to="/cadri-certificado-movimentacao-residuos" className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#0D9488] transition-colors">
                    <ChevronRight className="w-4 h-4" /> CADRI - Certificado CETESB
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
