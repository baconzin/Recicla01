import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const LOGO_URL = "https://customer-assets.emergentagent.com/job_usina-recicla-tech/artifacts/o9r6pl89_image.png";

export const Footer = () => {
  return (
    <footer data-testid="footer" className="bg-[#0F172A] text-white relative noise-overlay">
      <div className="relative z-10">
        <div className="bg-[#0D9488]">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Precisa de coleta e destinação de resíduos industriais?</h2>
              <p className="text-white/80 mt-2 text-sm md:text-base max-w-xl">Fale com nossos especialistas e receba um orçamento técnico personalizado para sua operação.</p>
            </div>
            <a href="https://wa.me/5519971636969?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento." target="_blank" rel="noopener noreferrer" data-testid="footer-cta-whatsapp" className="bg-white text-[#0D9488] hover:bg-slate-100 font-bold uppercase tracking-wider text-sm px-8 py-4 inline-flex items-center gap-2 shrink-0 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Solicitar Coleta ou Orçamento
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <Link to="/" className="flex items-center gap-3 mb-6">
                <img src={LOGO_URL} alt="Usina Recicla" className="h-12 w-auto" />
                <span className="font-bold text-white text-lg tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>USINA RECICLA</span>
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed">Coleta, transporte e destinação de resíduos industriais e efluentes com conformidade ambiental. Atendimento em todo o Brasil.</p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#2DD4BF] mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Serviços</h3>
              <ul className="space-y-3">
                <li><Link to="/coleta-de-efluentes" className="text-sm text-slate-400 hover:text-[#2DD4BF] transition-colors">Coleta de Efluentes Industriais</Link></li>
                <li><Link to="/gestao-de-residuos" className="text-sm text-slate-400 hover:text-[#2DD4BF] transition-colors">Gestão de Resíduos Industriais</Link></li>
                <li><Link to="/transporte-de-residuos-classe-i" className="text-sm text-slate-400 hover:text-[#2DD4BF] transition-colors">Transporte de Resíduos Classe I</Link></li>
                <li><Link to="/documentacao-ambiental" className="text-sm text-slate-400 hover:text-[#2DD4BF] transition-colors">Documentação Ambiental</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#2DD4BF] mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Documentação</h3>
              <ul className="space-y-3">
                <li><Link to="/mtr-manifesto-transporte-residuos" className="text-sm text-slate-400 hover:text-[#2DD4BF] transition-colors">MTR - Manifesto de Transporte</Link></li>
                <li><Link to="/cadri-certificado-movimentacao-residuos" className="text-sm text-slate-400 hover:text-[#2DD4BF] transition-colors">CADRI - Certificado CETESB</Link></li>
                <li><Link to="/sobre" className="text-sm text-slate-400 hover:text-[#2DD4BF] transition-colors">Sobre a Empresa</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#2DD4BF] mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Contato</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><MapPin className="w-4 h-4 text-[#2DD4BF] mt-0.5 shrink-0" /><span className="text-sm text-slate-400">Atendimento em todo o Brasil</span></li>
                <li className="flex items-start gap-3"><Phone className="w-4 h-4 text-[#2DD4BF] mt-0.5 shrink-0" /><a href="https://wa.me/5519971636969" className="text-sm text-slate-400 hover:text-[#2DD4BF] transition-colors">(19) 97163-6969</a></li>
                <li className="flex items-start gap-3"><Mail className="w-4 h-4 text-[#2DD4BF] mt-0.5 shrink-0" /><span className="text-sm text-slate-400">contato@usinarecicla.com.br</span></li>
                <li className="flex items-start gap-3"><Clock className="w-4 h-4 text-[#2DD4BF] mt-0.5 shrink-0" /><span className="text-sm text-slate-400">Seg - Sex: 8h às 18h</span></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500">&copy; {new Date().getFullYear()} Usina Recicla. Todos os direitos reservados.</p>
            <p className="text-xs text-slate-500">Gestão Integrada de Resíduos Industriais e Efluentes - Atendimento em todo o Brasil</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
