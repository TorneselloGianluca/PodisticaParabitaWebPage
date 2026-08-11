import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Import Componenti
import Navbar from './components/Navbar';
import BackToHome from './components/BackToHome';

// Import Pagine
import Homepage from './pages/Homepage';
import Risultati from './pages/Risultati';
import Sponsor from './pages/Sponsor';
import Walking from './pages/Walking';
import Calendario from './pages/Calendario';
import ScalataVeneri from './pages/ScalataVeneri';
import CurraturiPage from './pages/CurraturiPage';
import MiglioriMomenti from './pages/MiglioriMomenti';
import Album from './pages/Album';



function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      

      <BackToHome />

      <Routes>
        <Route path="/" element={<Homepage />} />
        
        <Route path="/home" element={<Navigate to="/" replace />} />
        
        <Route path="/risultati" element={<Risultati />} />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/walking" element={<Walking />} />
        <Route path="/gare" element={<Calendario />} />
        <Route path="/scalata" element={<ScalataVeneri />} />
        <Route path="/curraturi" element={<CurraturiPage />} /> 
        <Route path="/miglioriMomenti" element={<MiglioriMomenti />} />
        <Route path="/album" element={<Album />} />

        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
      
    </Router>
  );
}

export default App;