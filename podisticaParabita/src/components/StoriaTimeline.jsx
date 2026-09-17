import React from 'react';
import { Users, Flag, Award, Trophy, Calendar } from 'lucide-react';

import sfondo from '../assets/sfondo.png'; 

const StoriaTimeline = () => {

  const storiaData = [
    {
      id: 1,
      anno: "1998",
      titolo: "I Primi Passi",
      descrizione: "L'associazione muove i suoi primi storici passi nel panorama podistico pugliese, iniziando a raccogliere appassionati e atleti locali uniti dalla passione per la corsa.",
      icona: <Users size={20} />
    },
    {
      id: 2,
      anno: "2005",
      titolo: "1ª Scalata delle Veneri",
      descrizione: "Nasce la prima storica edizione della Scalata delle Veneri, la gara simbolo della società corsa su un percorso misto che attraversa il centro storico e la macchia mediterranea fino al Parco Archeologico.",
      icona: <Flag size={20} />
    },
    {
      id: 3,
      anno: "10 Dic 2007",
      titolo: "Riconoscimento CONI",
      descrizione: "Viene ufficializzata l'iscrizione formale dell'Associazione Sportiva Dilettantistica Podistica Parabita all'interno del Registro Nazionale del CONI, sancendo lo status ufficiale della società.",
      icona: <Award size={20} />
    },
    {
      id: 4,
      anno: "2019",
      titolo: "20ª Maratonina Salento D'Amare",
      descrizione: "La società organizza la ventesima edizione della prestigiosa Maratonina Salento D'Amare, consolidando l'impegno ultraventennale nella promozione di grandi eventi podistici sul territorio.",
      icona: <Trophy size={20} />
    },
    {
      id: 5,
      anno: "27 Set 2026",
      titolo: "15ª Scalata delle Veneri",
      descrizione: "Si tiene la quindicesima edizione della Scalata delle Veneri, una ricorrenza speciale che rinnova la tradizione e celebra il cammino degli atleti nel cuore del Salento.",
      icona: <Calendar size={20} />
    }
  ];

  return (
    <section className="relative min-h-screen w-full bg-slate-950 py-24 overflow-hidden font-sans">
      
      {/* SFONDO IN TRASPARENZA */}
      <div className="absolute inset-0 z-0">
        <img 
          src={sfondo} 
          alt="Podistica Parabita Storia Sfondo" 
          className="w-full h-full object-cover opacity-40 fixed-background"
        />
        {/* Filtro sfumato bilanciato */}
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

                {/* SCHEDA DELL'EVENTO STORICO */}
                <div className="w-full lg:w-1/2 pl-12 lg:pl-0 lg:px-12">
                  <div className="bg-slate-900/85 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 md:p-8 shadow-2xl transition-all duration-300 hover:border-orange-500/40 group">
                    
                    {/* Header della scheda con Titolo e Data/Anno */}
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

      {/* Stile CSS inline per parallasse desktop */}
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