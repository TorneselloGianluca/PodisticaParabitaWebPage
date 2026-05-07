import React, { useState } from 'react';
import { MapPin, Trophy, Timer, Search, ChevronDown } from 'lucide-react';

// === IMPORT IMMAGINI SFONDO ===
import SfondoCalimera from '../assets/calimera.jpg'; 
import SfondoPista from '../assets/pista.png';
import SfondoRuffano from '../assets/ruffano.webp';

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
      distanza: "42km",
      dove: "Gallipoli",
      tempo: "3:12:00",
      data: "25 gennaio 2026",
      fotoSfondo: Valencia,
      fotoAtleta: Piera,
      posizione: "Finisher"
    }
  ];

  const filteredAtleti = risultatiData.filter(atleta =>
    atleta.atleta.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-screen w-full overflow-y-auto snap-y snap-mandatory bg-slate-950 scroll-smooth">
      
      {/* === SEZIONE INTRODUTTIVA RIMPICCIOLITA === */}
      <section className="relative h-[60vh] w-full snap-start flex flex-col items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600/10 via-slate-950 to-slate-950"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl pt-10">
          {/* Titolo su riga singola e più piccolo */}
          <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
            I NOSTRI <span className="text-blue-500 italic">CAMPIONI</span>
          </h1>
          
          <p className="text-slate-400 text-sm md:text-base font-medium mb-8 max-w-lg mx-auto leading-relaxed">
            Scopri i traguardi raggiunti dai nostri atleti nelle competizioni nazionali e internazionali.
          </p>

          {/* Barra di Ricerca compatta */}
          <div className="relative w-full max-w-md mx-auto group mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-blue-500 transition-colors" size={20} />
            <input 
              type="text"
              placeholder="Cerca un atleta..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white text-base font-bold focus:border-blue-500/50 transition-all outline-none shadow-xl"
            />
          </div>

          <div className="flex flex-col items-center gap-1 opacity-40">
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white">Scorri i risultati</p>
            <ChevronDown size={20} className="animate-bounce text-blue-500" />
          </div>
        </div>
      </section>

      {/* === LISTA RISULTATI === */}
      {filteredAtleti.length > 0 ? (
        filteredAtleti.map((atleta) => (
          <section 
            key={atleta.id} 
            className="relative h-screen w-full snap-start flex items-center justify-center overflow-hidden"
          >
            <div className="absolute inset-0 z-0">
              <img 
                src={atleta.fotoSfondo} 
                alt={atleta.dove} 
                className="w-full h-full object-cover opacity-30 scale-110 blur-xl" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/80" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-10">
              <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
                
                <div className="relative shrink-0 w-full max-w-[240px] md:max-w-[320px] lg:w-[420px]">
                  <div className="absolute -inset-6 bg-blue-600/20 blur-[80px] rounded-full opacity-50" />
                  <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-2xl">
                    <img 
                      src={atleta.fotoAtleta} 
                      alt={atleta.atleta} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900 p-8 text-center">
                      <p className="text-[10px] uppercase font-black tracking-[0.3em] text-blue-200 mb-2">Risultato</p>
                      <p className="text-xl md:text-3xl font-black italic uppercase text-white">{atleta.posizione}</p>
                    </div>
                  </div>
                </div>

                <div className="flex-1 text-center lg:text-left w-full">
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-md border border-blue-500/30 px-5 py-2 rounded-full mb-6 font-black">
                      <Trophy size={16} className="text-yellow-400" />
                      <span className="text-[10px] uppercase tracking-widest text-white">{atleta.distanza}</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.8] mb-6 text-white">
                      {atleta.atleta.split(' ')[0]} <br className="hidden lg:block"/>
                      <span className="text-blue-500">{atleta.atleta.split(' ').slice(1).join(' ')}</span>
                    </h2>
                    
                    <div className="flex items-center justify-center lg:justify-start gap-3 text-blue-400 font-bold text-lg md:text-3xl uppercase tracking-tight">
                      <MapPin size={26} />
                      {atleta.gara}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 bg-white/5 backdrop-blur-2xl border border-white/10 p-6 md:p-10 rounded-[3rem] shadow-2xl">
                    <div className="flex flex-col items-center lg:items-start">
                      <span className="text-[10px] uppercase tracking-widest text-slate-500 mb-2 font-black italic">Location</span>
                      <span className="font-bold text-base md:text-2xl text-white">{atleta.dove}</span>
                    </div>
                    <div className="flex flex-col items-center lg:items-start">
                      <span className="text-[10px] uppercase tracking-widest text-slate-500 mb-2 font-black italic">Data</span>
                      <span className="font-bold text-base md:text-2xl text-white">{atleta.data}</span>
                    </div>
                    <div className="flex flex-col items-center lg:items-start col-span-2 lg:col-span-1 border-t lg:border-t-0 lg:border-l border-white/10 mt-4 lg:mt-0 pt-4 lg:pt-0 lg:pl-6 text-green-400">
                      <span className="text-[10px] uppercase tracking-widest mb-2 font-black italic">Tempo Gara</span>
                      <div className="flex items-center gap-3 text-4xl md:text-6xl font-black tracking-tighter">
                        <Timer size={32} />
                        {atleta.tempo}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
        ))
      ) : (
        <div className="h-screen w-full snap-start flex flex-col items-center justify-center bg-slate-950 text-white/30 p-6 text-center">
          <Search size={48} className="mb-4 opacity-10" />
          <p className="text-xl font-black uppercase tracking-widest">Atleta non trovato</p>
          <button 
            onClick={() => setSearchTerm("")}
            className="mt-6 text-blue-500 font-bold uppercase text-xs tracking-widest border-b border-blue-500"
          >
            Azzera ricerca
          </button>
        </div>
      )}
    </div>
  );
};

export default Risultati;