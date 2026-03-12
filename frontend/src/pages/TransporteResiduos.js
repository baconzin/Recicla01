import { Link } from "react-router-dom";
import { Truck, ArrowRight, CheckCircle, ShieldCheck, FileCheck, AlertTriangle, ChevronRight, MapPin } from "lucide-react";

export default function TransporteResiduos() {
  return (
    <div>
      <section className="bg-[#1E293B] py-20 md:py-28 relative noise-overlay">
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link to="/" className="hover:text-[#2DD4BF] transition-colors">Inicio</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/servicos" className="hover:text-[#2DD4BF] transition-colors">Servicos</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#2DD4BF]">Transporte de Residuos Classe I</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <Truck className="w-8 h-8 text-[#2DD4BF]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#2DD4BF]">Servico Especializado</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            Transporte de Residuos Classe I
          </h1>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl">
            Transporte licenciado de residuos perigosos com rastreabilidade completa, documentacao ambiental obrigatoria e conformidade total com a legislacao.
          </p>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-[#1E293B] uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  O Que Sao Residuos Classe I
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Residuos Classe I sao classificados como perigosos conforme a NBR 10004 da ABNT. Apresentam caracteristicas como inflamabilidade, corrosividade, reatividade, toxicidade ou patogenicidade, exigindo manuseio, transporte e destinacao especializados para proteger a saude publica e o meio ambiente.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#1E293B] uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Tipos de Residuos Classe I Transportados
                </h2>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Solventes e diluentes usados",
                    "Oleos contaminados e hidraulicos",
                    "Borras de tinta e verniz",
                    "Residuos de galvanoplastia",
                    "Materiais com metais pesados",
                    "Embalagens contaminadas",
                    "Residuos de processos quimicos",
                    "Lampadas fluorescentes e com mercurio",
                    "Baterias e pilhas industriais",
                    "Residuos de laboratorio",
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
                  Requisitos Legais Para o Transporte
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  O transporte de residuos perigosos no Brasil e regulamentado pela Resolucao CONAMA 420, pelo Decreto 96.044 e pela NBR 13221. A empresa transportadora deve possuir licenca ambiental especifica, MOPP (Movimentacao e Operacao de Produtos Perigosos) dos motoristas, e veiculo adequado com sinalizacao conforme normas vigentes.
                </p>
                <div className="mt-6 space-y-3">
                  {[
                    "Licenca ambiental para transporte de residuos perigosos",
                    "MOPP dos motoristas (Movimentacao de Produtos Perigosos)",
                    "Veiculos sinalizados conforme NBR 7500",
                    "Kit de emergencia ambiental a bordo",
                    "Plano de contingencia para acidentes",
                    "Seguro ambiental obrigatorio",
                    "Emissao de MTR antes do embarque",
                    "CADRI quando aplicavel (Estado de SP)",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 p-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-amber-900 text-lg">Penalidades por Transporte Irregular</h3>
                    <p className="mt-2 text-amber-800 text-sm leading-relaxed">
                      O transporte irregular de residuos perigosos configura crime ambiental (Lei 9.605/98) e infracao administrativa, com multas que podem chegar a R$ 50 milhoes, apreensao do veiculo e responsabilizacao criminal do gerador e transportador.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-[#1E293B] p-8 text-white">
                <h3 className="text-lg font-bold uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Nossos Diferenciais
                </h3>
                <div className="mt-6 space-y-4">
                  {[
                    { icon: Truck, text: "Veiculos licenciados e rastreados" },
                    { icon: ShieldCheck, text: "Conformidade com NBR 13221" },
                    { icon: FileCheck, text: "MTR e CADRI emitidos" },
                    { icon: MapPin, text: "Atendimento em todo o Brasil" },
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
                  Solicite um Orcamento
                </h3>
                <p className="mt-3 text-white/80 text-sm">
                  Transporte seguro e licenciado para residuos perigosos da sua empresa.
                </p>
                <a
                  href="https://wa.me/5519971636969?text=Ol%C3%A1%2C%20preciso%20de%20transporte%20de%20res%C3%ADduos%20Classe%20I."
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="transporte-cta"
                  className="mt-6 bg-white text-[#0D9488] hover:bg-slate-100 h-12 px-6 text-sm font-bold uppercase tracking-wider inline-flex items-center gap-2 transition-colors w-full justify-center"
                >
                  Falar com Especialista <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="bg-white border border-slate-200 p-8">
                <h3 className="text-lg font-bold text-[#1E293B] uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Outros Servicos
                </h3>
                <div className="mt-4 space-y-3">
                  <Link to="/coleta-de-efluentes" className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#0D9488] transition-colors">
                    <ChevronRight className="w-4 h-4" /> Coleta de Efluentes Industriais
                  </Link>
                  <Link to="/gestao-de-residuos" className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#0D9488] transition-colors">
                    <ChevronRight className="w-4 h-4" /> Gestao de Residuos Industriais
                  </Link>
                  <Link to="/documentacao-ambiental" className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#0D9488] transition-colors">
                    <ChevronRight className="w-4 h-4" /> Documentacao Ambiental
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
