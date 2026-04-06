import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Risultati from './pages/Risultati';
import Sponsor from './pages/Sponsor';
import Navbar from './components/Navbar';
import Walking from './pages/Walking';
import Calendario from './pages/Calendario';

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
      </Routes>
    </Router>
  );
}

export default App;