import React from 'react';
import { Calendar, Award, Flag, Users } from 'lucide-react';

import sfondo from '../assets/sfondo.png'; 

const StoriaTimeline = () => {

  // COSTANTE AUTOMATICA: Gestisci i testi direttamente da qui
  const storiaData = [
    {
      id: 1,
      anno: "1998",
      titolo: "La Nascita dell'ASD",
      descrizione: "Un gruppo di amici uniti dalla passione per l'atletica leggera decide di fondare la Podistica Parabita, ponendo la prima pietra di una storia fatta di chilometri, sudore e amicizia.",
      icona: <Users size={20} />
    },
    {
      id: 2,
      anno: "2005",
      titolo: "Prima Edizione Scalata delle Veneri",
      descrizione: "Nasce la gara simbolo del nostro territorio. Un percorso selettivo e affascinante che attira fin da subito centinaia di atleti da tutta la regione, diventando una classica del podismo salentino.",
      icona: <Flag size={20} />
    },
    {
      id: 3,
      anno: "2018",
      titolo: "Riconoscimento Regionale Fidal",
      descrizione: "Grazie ai risultati agonistici e all'impeccabile organizzazione degli eventi, la società viene premiata come una delle realtà più attive e solide del panorama Fidal pugliese.",
      icona: <Award size={20} />
    },
    {
      id: 4,
      anno: "2026",
      titolo: "Generazione di Campioni",
      descrizione: "Oggi la Podistica Parabita conta decine di tesserati, un reparto Walking in forte crescita e atleti capaci di piazzare tempi straordinari nelle maratone internazionali più prestigiose.",
      icona: <Calendar size={20} />
    }
  ];

  return (
    <section className="relative min-h-screen w-full bg-slate-950 py-24 overflow-hidden font-sans">
      
      {/* SFONDO IN TRASPARENZA (Ottimizzato per maggiore visibilità) */}
      <div className="absolute inset-0 z-0">
        <img 
          src={sfondo} 
          alt="Podistica Parabita Storia Sfondo" 
          className="w-full h-full object-cover opacity-40 fixed-background" /* Alzata opacità a 40 per mostrare bene l'immagine */
        />
        {/* Filtro sfumato bilanciato per dare contrasto senza oscurare lo sfondo */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* INTESTAZIONE SEZIONE */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-orange-500 bg-orange-500/10 px-4 py-2 rounded-xl border border-orange-500/20">
            Il nostro cammino
          </span>
          <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mt-6 mb-4">
            STORIA & <span className="text-orange-500 italic">LINEA TEMPORALE</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-4"></div>
          <p className="text-slate-300 font-medium md:text-lg">
            Dai primi passi fino ai traguardi moderni: le tappe che hanno reso grande l'ASD Podistica Parabita.
          </p>
        </div>

        {/* CONTENITORE TIMELINE VERTICALE */}
        <div className="relative after:absolute after:inset-y-0 after:left-4 lg:after:left-1/2 after:-translate-x-1/2 after:w-[2px] after:bg-gradient-to-b after:from-orange-500/10 after:via-orange-500 after:to-orange-500/10">
          
          {storiaData.map((evento, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={evento.id} 
                className={`relative flex flex-col lg:flex-row items-start lg:items-center mb-12 lg:mb-16 ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Spaziatore laterale per PC */}
                <div className="w-full lg:w-1/2 hidden lg:block" />

                {/* ICONA / PIN SULLA LINEA VERTICALE */}
                <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center w-9 h-9 rounded-full bg-slate-900 border-2 border-orange-500 text-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.4)] animate-pulse">
                  {evento.icona}
                </div>

                {/* SCHEDA DELL'EVENTO STORICO (SOLO TESTO) */}
                <div className="w-full lg:w-1/2 pl-12 lg:pl-0 lg:px-12">
                  <div className="bg-slate-900/85 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 md:p-8 shadow-2xl transition-all duration-300 hover:border-orange-500/40 group">
                    
                    {/* Header della scheda con Anno e Titolo in linea */}
                    <div className="flex items-center justify-between gap-4 mb-3 border-b border-white/5 pb-3">
                      <h3 className="text-xl md:text-2xl font-black uppercase text-white tracking-tight group-hover:text-orange-500 transition-colors">
                        {evento.titolo}
                      </h3>
                      <span className="text-sm font-black text-orange-500 tracking-wider font-mono bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-lg shrink-0">
                        {evento.anno}
                      </span>
                    </div>

                    {/* Descrizione */}
                    <p className="text-slate-300 text-xs md:text-sm font-medium leading-relaxed">
                      {evento.descrizione}
                    </p>

                  </div>
                </div>

              </div>
            );
          })}

        </div>

      </div>

      {/* Stile CSS inline per bloccare lo sfondo in parallasse */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (min-width: 1024px) {
          .fixed-background {
            background-attachment: fixed;
          }
        }
      `}} />
    </section>
  );
};

export default StoriaTimeline;