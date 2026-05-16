import React, { useState } from 'react';
import { MapPin, Trophy, Timer, Search, ChevronDown } from 'lucide-react';

// === IMPORT ATLETI ===
import Antonio from '../assets/risultati/AntonioMargarito.png';
import Valencia from '../assets/risultati/valencia.jpg';
import Pierluigi from '../assets/risultati/PierluigiBudapest.png';
import Budapest from '../assets/risultati/budapest.jpg';
import Riccardo from '../assets/risultati/riccardo.png';
import Firenze from '../assets/risultati/firenze.jpg';
import Piera from '../assets/risultati/piera.png';

const Risultati = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const risultatiData = [
    {
      id: 1,
      atleta: "Pierluigi Toma",
      gara: "Maratona di Budapest",
      distanza: "10km su Strada",
      dove: "Budapest",
      tempo: "3:04:01",
      data: "Maggio 2026",
      fotoSfondo: Budapest, 
      fotoAtleta: Pierluigi, 
      posizione: "Finisher"
    },
    {
      id: 2,
      atleta: "Antonio Margarito",
      gara: "Maratona di Valencia",
      distanza: "42km",
      dove: "Valencia",
      tempo: "2:52:00",
      data: "16 Aprile 2026",
      fotoSfondo: Valencia,
      fotoAtleta: Antonio,
      posizione: "Personal Best"
    },
    {
      id: 3,
      atleta: "Riccardo Tornesello",
      gara: "Maratona di Firenze",
      distanza: "42km",
      dove: "Firenze",
      tempo: "2:57:33",
      data: "Novembre 2025",
      fotoSfondo: Firenze,
      fotoAtleta: Riccardo,
      posizione: "Personal Best"
    },
    {
      id: 4,
      atleta: "Piera Pastore",
      gara: "Maratona di Valencia",
      distanza: "42km",
      dove: "Valencia",
      tempo: "3:12:00",
      data: "Aprile 2026",
      fotoSfondo: Valencia,
      fotoAtleta: Piera,
      posizione: "Finisher"
    },
    {
      id: 5,
      atleta: "Piera Pastore",
      gara: "Maratonina dello Jonio",
      distanza: "21km",
      dove: "Gallipoli",
      tempo: "1:28:00",
      data: "25 gennaio 2026",
      fotoSfondo: "https://images.unsplash.com/photo-1516483642144-73917e2247b2?auto=format&fit=crop&q=80&w=2000",
      fotoAtleta: Piera,
      posizione: "Finisher"
    }
  ];

  const filteredAtleti = risultatiData.filter(atleta =>
    atleta.atleta.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen w-full bg-slate-950 overflow-x-hidden font-sans">
      
      {/* === SEZIONE INTRO === */}
      <section className="relative h-[70vh] w-full flex flex-col items-center justify-center px-6 border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-600/20 via-slate-950 to-slate-950"></div>
        <div className="relative z-10 text-center max-w-4xl">
          <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-4 drop-shadow-2xl">
            I NOSTRI <span className="text-orange-500 italic">CAMPIONI</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl font-medium mb-12 max-w-lg mx-auto leading-relaxed">
            I traguardi e le emozioni della Podistica Parabita.
          </p>
          <div className="relative w-full max-w-md mx-auto group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500" size={20} />
            <input 
              type="text"
              placeholder="Cerca un atleta..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900/80 border border-white/10 rounded-2xl py-5 pl-12 pr-6 text-white font-bold focus:border-orange-500 transition-all outline-none"
            />
          </div>
        </div>
      </section>

      {/* === LISTA RISULTATI === */}
      {filteredAtleti.map((atleta, index) => (
        <React.Fragment key={atleta.id}>
          <section className="relative min-h-screen w-full flex items-center justify-center py-20">
            {/* SFONDO CITTA' */}
            <div className="absolute inset-0 z-0">
              <img 
                src={atleta.fotoSfondo} 
                alt={atleta.dove} 
                className="w-full h-full object-cover opacity-60" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent lg:block hidden" />
              <div className="absolute inset-0 bg-slate-950/70 lg:hidden block" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
              <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-16">
                
                {/* Immagine Atleta */}
                <div className="relative shrink-0 w-full max-w-[320px] lg:max-w-[400px]">
                  <div className="absolute -inset-4 bg-orange-600/20 blur-[60px] rounded-full"></div>
                  <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden border-4 border-white/10 shadow-2xl">
                    <img src={atleta.fotoAtleta} alt={atleta.atleta} className="w-full h-full object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-orange-600 p-6 text-center">
                      <p className="text-xl md:text-3xl font-black italic uppercase text-slate-950">{atleta.posizione}</p>
                    </div>
                  </div>
                </div>

                {/* Info Atleta e Gara */}
                <div className="flex-1 w-full flex flex-col justify-center">
                  <div className="text-center lg:text-left mb-8">
                    <div className="inline-flex items-center gap-2 bg-slate-900 border border-orange-500/50 px-4 py-2 rounded-xl mb-6">
                      <Trophy size={18} className="text-orange-500" />
                      <span className="text-xs font-black uppercase tracking-widest text-white">{atleta.distanza}</span>
                    </div>
                    
                    <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white leading-[0.85] mb-6 drop-shadow-2xl">
                      {atleta.atleta.split(' ')[0]} <br/>
                      <span className="text-orange-500">{atleta.atleta.split(' ').slice(1).join(' ')}</span>
                    </h2>
                    
                    <div className="flex items-center justify-center lg:justify-start gap-3 text-white font-bold text-2xl uppercase tracking-tight">
                      <MapPin className="text-orange-500" />
                      {atleta.gara}
                    </div>
                  </div>

                  {/* INFO BOX CORRETTO PER PC */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-900/90 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[3rem] shadow-2xl items-center">
                    <div className="flex flex-col border-b md:border-b-0 md:border-r border-white/10 pb-4 md:pb-0">
                      <span className="text-[10px] font-black uppercase text-orange-500 tracking-[0.2em] mb-2">Città</span>
                      <span className="text-2xl md:text-3xl font-bold text-white uppercase">{atleta.dove}</span>
                    </div>
                    
                    <div className="flex flex-col border-b md:border-b-0 md:border-r border-white/10 pb-4 md:pb-0 md:pl-6">
                      <span className="text-[10px] font-black uppercase text-orange-500 tracking-[0.2em] mb-2">Periodo</span>
                      <span className="text-2xl md:text-3xl font-bold text-white uppercase">{atleta.data}</span>
                    </div>

                    {/* Modificato: rimpicciolito su schermi larghi per evitare scatti sproporzionati */}
                    <div className="flex flex-col md:pl-6">
                      <span className="text-[10px] font-black uppercase text-orange-500 tracking-[0.2em] mb-2">Cronometro</span>
                      <div className="flex items-center gap-2 text-4xl md:text-5xl lg:text-4xl font-black text-white tracking-tighter">
                        <Timer className="text-orange-500 shrink-0" size={28} />
                        {atleta.tempo}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* LINEA ARANCIONE PRONUNCIATA CON GLOW */}
          {index !== filteredAtleti.length - 1 && (
            <div className="w-full flex justify-center py-4">
              <div className="w-2/3 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent shadow-[0_0_15px_rgba(249,115,22,0.6)]"></div>
            </div>
          )}
        </React.Fragment>
      ))}

      {filteredAtleti.length === 0 && (
        <div className="py-40 text-center">
          <p className="text-slate-500 font-bold uppercase tracking-widest">Nessun risultato trovato</p>
        </div>
      )}
    </div>
  );
};

export default Risultati;