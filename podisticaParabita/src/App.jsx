import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Risultati from './pages/Risultati';
import Sponsor from './pages/Sponsor';
import Navbar from './components/Navbar';
import Walking from './pages/Walking';
import Calendario from './pages/Calendario';
import ScalataVeneri from './pages/ScalataVeneri';
import CurraturiPage from './pages/CurraturiPage';
import MiglioriMomenti from './pages/MiglioriMomenti';
import Album from './pages/Album';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/risultati" element={<Risultati />} />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/walking" element={<Walking />} />
        <Route path="/gare" element={<Calendario />} />
        <Route path="/scalata" element={<ScalataVeneri />} />
        <Route path="/curraturi" element={<CurraturiPage />} /> 
        <Route path="/miglioriMomenti" element={<MiglioriMomenti />} />
        <Route path="/album" element={<Album />} />
      </Routes>
    </Router>
  );
}

export default App;