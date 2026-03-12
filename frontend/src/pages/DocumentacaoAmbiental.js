import { Link } from "react-router-dom";
import { FileCheck, ShieldCheck, ClipboardCheck, ArrowRight, CheckCircle, ChevronRight, AlertTriangle } from "lucide-react";

export default function DocumentacaoAmbiental() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1E293B] py-20 md:py-28 relative noise-overlay">
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link to="/" className="hover:text-[#2DD4BF] transition-colors">Inicio</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/servicos" className="hover:text-[#2DD4BF] transition-colors">Servicos</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#2DD4BF]">Documentacao Ambiental</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <FileCheck className="w-8 h-8 text-[#2DD4BF]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#2DD4BF]">Conformidade Legal</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            Documentacao Ambiental Completa
          </h1>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl">
            Regularizacao junto a CETESB e SINIR com emissao de laudos tecnicos, MTR, CDF e suporte completo para CADRI.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#F8FAFC] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Documents Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* MTR */}
            <div className="bg-white border border-slate-200 p-8 hover:border-[#0D9488] transition-colors">
              <div className="w-14 h-14 bg-[#0D9488]/10 flex items-center justify-center mb-6">
                <FileCheck className="w-7 h-7 text-[#0D9488]" />
              </div>
              <h2 className="text-2xl font-bold text-[#1E293B] uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                MTR
              </h2>
              <p className="text-sm text-[#0D9488] font-medium mt-1">Manifesto de Transporte de Residuos</p>
              <p className="mt-4 text-slate-600 leading-relaxed text-sm">
                Documento obrigatorio que rastreia o residuo desde a origem ate a destinacao final. Emitido eletronicamente pelo sistema SINIR, o MTR e o &quot;passaporte&quot; do residuo, registrando todas as informacoes sobre gerador, transportador e destinador.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  "Emissao obrigatoria em todo territorio nacional",
                  "Registro eletronico no sistema SINIR",
                  "Rastreabilidade completa da carga",
                  "Obrigatorio desde 2021 (Portaria MMA 280/2020)",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* CDF */}
            <div className="bg-white border border-slate-200 p-8 hover:border-[#0D9488] transition-colors">
              <div className="w-14 h-14 bg-[#0D9488]/10 flex items-center justify-center mb-6">
                <ClipboardCheck className="w-7 h-7 text-[#0D9488]" />
              </div>
              <h2 className="text-2xl font-bold text-[#1E293B] uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                CDF
              </h2>
              <p className="text-sm text-[#0D9488] font-medium mt-1">Certificado de Destinacao Final</p>
              <p className="mt-4 text-slate-600 leading-relaxed text-sm">
                Comprova que o residuo foi destinado de forma ambientalmente correta. O CDF e o documento que isenta sua empresa de passivos ambientais futuros, comprovando a destinacao adequada perante orgaos fiscalizadores.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  "Comprova destinacao ambientalmente correta",
                  "Isenta a empresa de passivos ambientais",
                  "Valido perante orgaos fiscalizadores",
                  "Emitido apos confirmacao de destinacao",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* CADRI */}
            <div className="bg-white border border-slate-200 p-8 hover:border-[#0D9488] transition-colors">
              <div className="w-14 h-14 bg-[#0D9488]/10 flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7 text-[#0D9488]" />
              </div>
              <h2 className="text-2xl font-bold text-[#1E293B] uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                CADRI
              </h2>
              <p className="text-sm text-[#0D9488] font-medium mt-1">Certificado de Movimentacao de Residuos</p>
              <p className="mt-4 text-slate-600 leading-relaxed text-sm">
                Autorizacao emitida pela CETESB para movimentacao de residuos de interesse ambiental no Estado de Sao Paulo. Obrigatorio para empresas que transportam residuos perigosos e de interesse ambiental.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  "Emitido pela CETESB",
                  "Obrigatorio no Estado de Sao Paulo",
                  "Validade de 1 a 2 anos",
                  "Suporte completo na obtencao",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Warning Box */}
          <div className="mt-12 bg-amber-50 border border-amber-200 p-8 flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-amber-900 text-lg">Atencao: Penalidades por Irregularidade</h3>
              <p className="mt-2 text-amber-800 text-sm leading-relaxed">
                O descarte irregular de residuos configura crime ambiental previsto na Lei 9.605/98, com multas de ate R$ 50 milhoes, interdicao da atividade, e responsabilizacao civil e criminal dos administradores. A Usina Recicla garante total conformidade documental para proteger sua empresa.
              </p>
            </div>
          </div>

          {/* Additional Services */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-[#1E293B] uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Servicos Adicionais de Documentacao
            </h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Laudos Tecnicos", desc: "Emissao de laudos de classificacao de residuos conforme NBR 10004" },
                { title: "Plano de Gerenciamento", desc: "Elaboracao de PGRS conforme Politica Nacional de Residuos Solidos" },
                { title: "Cadastro SINIR", desc: "Suporte para cadastro e operacao no sistema SINIR" },
                { title: "Regularizacao CETESB", desc: "Assessoria para regularizacao ambiental junto a CETESB" },
                { title: "Relatorios de Rastreabilidade", desc: "Relatorios periodicos de todas as operacoes realizadas" },
                { title: "Consultoria Ambiental", desc: "Orientacao tecnica para conformidade com legislacao ambiental" },
              ].map((item) => (
                <div key={item.title} className="bg-white border-l-4 border-[#0D9488] p-5">
                  <h3 className="font-bold text-[#1E293B]">{item.title}</h3>
                  <p className="text-sm text-slate-600 mt-1">{item.desc}</p>
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
              data-testid="docs-cta"
              className="bg-[#0D9488] text-white hover:bg-[#115E59] h-14 px-10 text-sm font-bold uppercase tracking-wider inline-flex items-center gap-2 transition-colors"
            >
              Consultar Documentacao Necessaria <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
