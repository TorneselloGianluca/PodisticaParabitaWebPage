import React, { useState } from 'react';
import { Calendar, MapPin, Trophy, ChevronLeft, ChevronRight, Timer, Quote } from 'lucide-react';

// Immagini Sfondo (Città/Percorso)
import SfondoCalimera from '../assets/calimera.jpg'; 
import SfondoPista from '../assets/pista.png';
import SfondoRuffano from '../assets/ruffano.webp';

//antonio margarito 
import Antonio from '../assets/risultati/AntonioMargarito.png';
import Valencia from '../assets/risultati/valencia.jpg';

//pierluigi
import Pierluigi from '../assets/risultati/PierluigiBudapest.png';
import Budapest from '../assets/risultati/budapest.jpg';

//riccardo 
import Riccardo from '../assets/risultati/riccardo.png';
import Firenze from '../assets/risultati/firenze.jpg';

//piera
import Piera from '../assets/risultati/piera.png';

// Esempio foto atleti (puoi sostituire con i tuoi asset)
const FOTO_ATLETA_DEFAULT = "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=800&q=80";

const Risultati = () => {
  const risultatiData = [
    {
      id: 1,
      atleta: "Pierluigi Toma",
      gara: "Maratona di Budapest",
      distanza: "10km su Strada",
      dove: "Budapest ",
      tempo: "3:04:01",
      data: "???",
      fotoSfondo: Budapest, // Foto della città
      fotoAtleta: Pierluigi, // Foto dell'atleta
      posizione: "??",
      commento: "Percorso veloce e ben organizzato. Sensazioni ottime nel finale."
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
      commento: "Tornare in pista è sempre un'emozione unica. Obiettivo raggiunto!"
    },
    {
      id: 3,
      atleta: "Riccardo Tornesello",
      gara: "Maratona di Firenze",
      distanza: "42km",
      dove: "Firenze",
      tempo: "2:57:33",
      data: "??",
      fotoSfondo: Firenze,
      fotoAtleta: Riccardo,
      commento: "Tornare in pista è sempre un'emozione unica. Obiettivo raggiunto!"
    },
    {
      id: 4,
      atleta: "Piera Pastore",
      gara: "Maratona di Valencia",
      distanza: "42km",
      dove: "Valencia",
      tempo: "3:12:00",
      data: "??",
      fotoSfondo: Valencia,
      fotoAtleta: Piera,
      commento: "Tornare in pista è sempre un'emozione unica. Obiettivo raggiunto!"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev === risultatiData.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? risultatiData.length - 1 : prev - 1));

  const current = risultatiData[currentIndex];

  return (
    <div className="relative h-screen w-full overflow-hidden bg-slate-950 text-white font-sans">
      
      {/* 1. SFONDO CITTÀ (Full Screen) */}
      <div className="absolute inset-0 transition-all duration-1000 ease-in-out">
        <img 
          src={current.fotoSfondo} 
          alt={current.dove} 
          className="w-full h-full object-cover opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
      </div>

      {/* 2. CONTENUTO PRINCIPALE */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
        
        <div className="flex flex-col lg:flex-row items-center lg:items-end gap-12">
          
          {/* A. RIQUADRO FOTO ATLETA (Sinistra) */}
          <div className="relative group w-64 h-80 md:w-80 md:h-[450px] shrink-0">
            <div className="absolute -inset-4 bg-blue-600/20 blur-xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="relative h-full w-full rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl">
              <img 
                src={current.fotoAtleta} 
                alt={current.atleta} 
                className="w-full h-full object-cover"
              />
              {/* Badge Posizione sulla foto */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-700 to-transparent p-6 text-center">
                <p className="text-xs uppercase font-black tracking-[0.2em] text-blue-200 mb-1">Risultato</p>
                <p className="text-2xl font-black italic uppercase">{current.posizione}</p>
              </div>
            </div>
          </div>

          {/* B. INFORMAZIONI GARA (Destra) */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full mb-4">
                <Trophy size={16} className="text-yellow-400" />
                <span className="text-xs font-bold uppercase tracking-widest">{current.distanza}</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-2">
                {current.atleta}
              </h1>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-blue-400 font-bold text-xl uppercase tracking-tight">
                <MapPin size={22} />
                {current.gara}
              </div>
            </div>

            {/* Grid Dettagli Tecnici */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl mb-8">
              <div className="flex flex-col items-center lg:items-start border-b md:border-b-0 md:border-r border-white/10 pb-4 md:pb-0">
                <span className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">Località</span>
                <span className="font-bold text-lg">{current.dove}</span>
              </div>
              <div className="flex flex-col items-center lg:items-start border-b md:border-b-0 md:border-r border-white/10 pb-4 md:pb-0">
                <span className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">Data Gara</span>
                <span className="font-bold text-lg">{current.data}</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-[10px] uppercase tracking-widest text-green-400 mb-1 font-black">Official Time</span>
                <div className="flex items-center gap-2 text-2xl font-black text-green-400">
                  <Timer size={24} />
                  {current.tempo}
                </div>
              </div>
            </div>

            {/* Commento/Citazione */}
            <div className="max-w-xl flex gap-4 italic text-slate-300 mx-auto lg:mx-0">
              <Quote className="text-blue-500 shrink-0" size={32} />
              <p className="text-lg leading-relaxed">"{current.commento}"</p>
            </div>
          </div>

        </div>
      </div>

      {/* 3. NAVIGAZIONE */}
      <div className="absolute bottom-10 right-10 flex gap-4 z-30">
        <button 
          onClick={prevSlide}
          className="p-4 rounded-full border border-white/20 bg-white/5 hover:bg-blue-600 transition-all active:scale-90"
        >
          <ChevronLeft size={32} />
        </button>
        <button 
          onClick={nextSlide}
          className="p-4 rounded-full border border-white/20 bg-white/5 hover:bg-blue-600 transition-all active:scale-90"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Puntini laterali (Progress) */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4">
        {risultatiData.map((_, i) => (
          <div 
            key={i}
            className={`h-12 w-1 rounded-full transition-all duration-500 ${currentIndex === i ? 'bg-blue-500 h-20' : 'bg-white/20'}`}
          />
        ))}
      </div>

    </div>
  );
};

export default Risultati;