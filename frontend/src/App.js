import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { WhatsAppButton } from "./components/layout/WhatsAppButton";
import Home from "./pages/Home";
import Servicos from "./pages/Servicos";
import ColetaEfluentes from "./pages/ColetaEfluentes";
import GestaoResiduos from "./pages/GestaoResiduos";
import TransporteResiduos from "./pages/TransporteResiduos";
import DocumentacaoAmbiental from "./pages/DocumentacaoAmbiental";
import MtrPage from "./pages/MtrPage";
import CadriPage from "./pages/CadriPage";
import Sobre from "./pages/Sobre";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/coleta-de-efluentes" element={<ColetaEfluentes />} />
            <Route path="/gestao-de-residuos" element={<GestaoResiduos />} />
            <Route path="/transporte-de-residuos-classe-i" element={<TransporteResiduos />} />
            <Route path="/documentacao-ambiental" element={<DocumentacaoAmbiental />} />
            <Route path="/mtr-manifesto-transporte-residuos" element={<MtrPage />} />
            <Route path="/cadri-certificado-movimentacao-residuos" element={<CadriPage />} />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
