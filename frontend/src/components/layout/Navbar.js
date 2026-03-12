import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const LOGO_URL = "https://customer-assets.emergentagent.com/job_cd024dda-176e-42e4-8e0d-6d0bd589957d/artifacts/grvncrp2_Usina%20Recicla%20Logo.png";

const navLinks = [
  { label: "Inicio", href: "/" },
  {
    label: "Servicos",
    href: "/servicos",
    children: [
      { label: "Coleta de Efluentes", href: "/coleta-de-efluentes" },
      { label: "Gestao de Residuos", href: "/gestao-de-residuos" },
      { label: "Documentacao Ambiental", href: "/documentacao-ambiental" },
    ],
  },
  { label: "Sobre", href: "/sobre" },
  { label: "Blog", href: "/blog" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [location]);

  return (
    <nav
      data-testid="navbar"
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200"
          : "bg-white border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" data-testid="nav-logo">
            <img
              src={LOGO_URL}
              alt="Usina Recicla"
              className="h-12 w-auto"
              loading="eager"
            />
            <div className="hidden sm:block">
              <span className="font-bold text-[#1E293B] text-lg tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                USINA RECICLA
              </span>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest leading-none">
                Gestao de Residuos e Efluentes
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    data-testid="nav-services"
                    className={`flex items-center gap-1 text-sm font-medium uppercase tracking-wide transition-colors ${
                      location.pathname.includes("servic") || location.pathname.includes("coleta") || location.pathname.includes("gestao") || location.pathname.includes("documentacao")
                        ? "text-[#0D9488]"
                        : "text-slate-600 hover:text-[#0D9488]"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 pt-2 animate-fade-in">
                      <div className="bg-white border border-slate-200 shadow-lg py-2 min-w-[240px]">
                        <Link
                          to={link.href}
                          data-testid="nav-servicos-all"
                          className="block px-5 py-2.5 text-sm text-slate-600 hover:text-[#0D9488] hover:bg-slate-50 font-medium"
                        >
                          Todos os Servicos
                        </Link>
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            data-testid={`nav-${child.href.slice(1)}`}
                            className="block px-5 py-2.5 text-sm text-slate-600 hover:text-[#0D9488] hover:bg-slate-50"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  data-testid={`nav-${link.href === "/" ? "inicio" : link.href.slice(1)}`}
                  className={`text-sm font-medium uppercase tracking-wide transition-colors ${
                    location.pathname === link.href
                      ? "text-[#0D9488]"
                      : "text-slate-600 hover:text-[#0D9488]"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href="https://wa.me/5519971636969"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="nav-cta-whatsapp"
              className="bg-[#0D9488] text-white hover:bg-[#115E59] h-11 px-7 text-sm font-bold uppercase tracking-wider inline-flex items-center transition-colors"
            >
              Solicitar Orcamento
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            data-testid="nav-mobile-toggle"
            className="lg:hidden p-2 text-slate-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-slate-100 py-4 mobile-menu-enter" data-testid="mobile-menu">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <Link
                    to={link.href}
                    className="block py-3 text-sm font-medium uppercase tracking-wide text-slate-700 hover:text-[#0D9488]"
                  >
                    {link.label}
                  </Link>
                  <div className="pl-4 border-l-2 border-slate-200 ml-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block py-2 text-sm text-slate-600 hover:text-[#0D9488]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="block py-3 text-sm font-medium uppercase tracking-wide text-slate-700 hover:text-[#0D9488]"
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href="https://wa.me/5519971636969"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block bg-[#0D9488] text-white text-center py-3 text-sm font-bold uppercase tracking-wider"
            >
              Solicitar Orcamento
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};
