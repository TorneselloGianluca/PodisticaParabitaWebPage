import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Calendar, MapPin, Clock, Footprints, ArrowUpRight, MessageSquare } from 'lucide-react';
import Contatti from '../components/Contatti';

// === IMPORT ASSERTI ===
import WalkingBg from '../assets/walking.png'; 

import walking1 from '../assets/walking/walking1.png';
import walking2 from '../assets/walking/walking2.png';
import walking3 from '../assets/walking/walking3.png';
import walking4 from '../assets/walking/walking4.png';

import locandina from '../assets/walking/prossimo evento.png';

const Walking = () => {
  // Stato per il carosello foto
  const [currentFoto, setCurrentFoto] = useState(0);
  
  const fotoGallery = [
    walking1,
    walking2,
    walking3,
    walking4
  ];

  const nextFoto = () => setCurrentFoto((prev) => (prev === fotoGallery.length - 1 ? 0 : prev + 1));
  const prevFoto = () => setCurrentFoto((prev) => (prev === 0 ? fotoGallery.length - 1 : prev - 1));

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans overflow-x-hidden">
      
      {/* === HERO SECTION CORRETTA (Sfondo nitido e contrastato) === */}
      <section className="relative h-[70vh] flex items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={WalkingBg} 
            alt="Walking Parabita" 
            className="w-full h-full object-cover opacity-45 scale-100 transition-transform duration-700"
          />
          {/* Nuovo Overlay bilanciato: elimina i riflessi blu parassiti e stacca il testo dallo sfondo */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/50" />
        </div>

        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
            <Footprints size={16} className="animate-pulse" />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">Fitwalking & Benessere</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-4 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            WALKING <span className="text-emerald-400 italic">PARABITA</span>
          </h1>
          <p className="text-slate-300 text-base md:text-xl font-medium max-w-xl mx-auto leading-relaxed drop-shadow-md">
            Il benessere cammina al ritmo del tuo passo. Unisciti ai nostri gruppi e scopri i sentieri del Salento.
          </p>
        </div>
      </section>

      {/* === CAROSELLO FOTO INTERATTIVO === */}
      <section className="py-12 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-xs font-black uppercase tracking-[0.3em] text-center text-emerald-400 mb-8">La nostra community in cammino</h2>
        <div className="relative aspect-[16/9] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 group">
          
          <img 
            src={fotoGallery[currentFoto]} 
            alt={`Walking Gallery ${currentFoto + 1}`} 
            className="w-full h-full object-cover transition-all duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent pointer-events-none" />

          <button 
            onClick={prevFoto}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-4 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-white hover:bg-emerald-500 transition-all active:scale-95 md:opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextFoto}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-white hover:bg-emerald-500 transition-all active:scale-95 md:opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={24} />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {fotoGallery.map((_, idx) => (
              <div 
                key={idx}
                className={`h-2 rounded-full transition-all duration-300 ${currentFoto === idx ? 'bg-emerald-400 w-6' : 'bg-white/30 w-2'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* === SEZIONE LOCANDINA / PROSSIMO EVENTO === */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">
            PROSSIMO <span className="text-emerald-400">EVENTO</span>
          </h2>
          <div className="w-16 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-6 md:p-10 grid md:grid-cols-2 gap-8 items-center shadow-2xl">
          
          {/* Box Immagine Locandina */}
          <div className="relative aspect-[3/4] md:aspect-square w-full rounded-2xl overflow-hidden border border-white/10 bg-slate-900 shadow-lg">
            <img 
              src={locandina} 
              alt="Locandina Prossimo Evento" 
              className="w-full h-full object-contain md:object-cover" 
            />
          </div>

          {/* Dettagli Tecnici Evento */}
          <div className="flex flex-col justify-center h-full text-center md:text-left">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400 mb-2 block">Dettagli Appuntamento</span>
            <h3 className="text-3xl font-black uppercase tracking-tight text-white mb-6">2^ CAMMINATA ANTONIANA</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center md:justify-start gap-4 p-3 rounded-xl bg-white/5 border border-white/5">
                <Calendar className="text-emerald-400 shrink-0" size={20} />
                <div>
                  <p className="text-[9px] uppercase tracking-wider text-slate-400">Data</p>
                  <p className="font-bold text-sm">Domenica, 31 Maggio 2026</p>
                </div>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-4 p-3 rounded-xl bg-white/5 border border-white/5">
                <Clock className="text-emerald-400 shrink-0" size={20} />
                <div>
                  <p className="text-[9px] uppercase tracking-wider text-slate-400">Orario di Ritrovo</p>
                  <p className="font-bold text-sm">Ore 08:00 (Partenza ore 09:00)</p>
                </div>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-4 p-3 rounded-xl bg-white/5 border border-white/5">
                <MapPin className="text-emerald-400 shrink-0" size={20} />
                <div>
                  <p className="text-[9px] uppercase tracking-wider text-slate-400">Luogo di Partenza</p>
                  <p className="font-bold text-sm">Parrocchia S. Antonio, Parabita</p>
                </div>
              </div>
            </div>

            {/* Link dinamico a WhatsApp anche per l'evento specifico */}
            <a 
              href="https://wa.me/393317018865?text=Ciao!%20Vorrei%20iscrivermi%20alla%202^%20Camminata%20Antoniana."
              target="_blank"
              rel="noopener noreferrer" 
              className="w-full inline-flex items-center justify-center bg-emerald-600 text-white font-black uppercase tracking-widest py-4 rounded-xl hover:bg-emerald-700 transition shadow-lg shadow-emerald-600/20 active:scale-95 text-center text-sm"
            >
              Partecipa all'evento
            </a>
          </div>

        </div>
      </section>

      {/* === COMMUNITY LINK & CALL TO ACTION === */}
      <section className="pb-24 px-6 max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          
          {/* Bottone 1: Visita la pagina */}
          <a 
            href="https://www.facebook.com/groups/813834722031069/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-black uppercase tracking-widest text-xs py-4 px-8 rounded-xl transition-all duration-300 active:scale-95 group text-center"
          >
            Visita la nostra pagina
            <ArrowUpRight size={16} className="text-slate-400 group-hover:text-white transition-colors" />
          </a>

          {/* Bottone 2: Iscriviti al gruppo (WhatsApp funzionante) */}
          <a 
            href="https://wa.me/393317018865?text=Ciao!%20Vorrei%20avere%20maggiori%20informazioni%20sulle%20attività%20di%20Walking%20Parabita." 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black uppercase tracking-widest text-xs py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/10 active:scale-95 text-center"
          >
            Iscriviti al nostro gruppo
            <MessageSquare size={16} />
          </a>

        </div>
      </section>

      {/* === SEZIONE RECAP VELOCE === */}
      <section className="py-12 bg-white/5 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center text-slate-400 text-sm font-medium">
          <p>Le uscite settimanali ordinarie restano attive ogni <span className="text-white font-bold">Martedì</span> e <span className="text-white font-bold">Giovedì</span> alle ore <span className="text-white font-bold">18:30</span> presso il Parco Comunale.</p>
        </div>
      </section>

    </div>
  );
};

export default Walking;