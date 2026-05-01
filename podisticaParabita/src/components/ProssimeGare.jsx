import React from 'react';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

// IMPORTA IL TUO PDF
import CalendarioPDF from '../assets/calendario.pdf';

import Lecce from '../assets/lecce.webp';
import Spongano from '../assets/spongano.jpg';
import Borgagne from '../assets/prossime_gare/borgagne.jpg';

const ProssimeGare = () => {
 
  const gareData = [
    {
      id: 1,
      titolo: "1^ meeting provinciale pista",
      data: "2026-05-02",
      luogo: "Lecce, LE",
      ora: "09:00",
      tipo: "Pista",
      immagine: "https://www.liceodonmilani.it/wp-content/uploads/2021/06/Schermata-2018-01-22-alle-12.49.06-980x490-1.png",
      iscrizioniAperte: true
    },
    {
      id: 2,
      titolo: "14^ stracittadina magliese",
      data: "2026-05-03",
      luogo: "Maglie, LE",
      ora: "08:30",
      tipo: "10km",
      immagine: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/28/4e/b8/maglie.jpg?w=1200&h=-1&s=1",
      iscrizioniAperte: true
    },
    {
      id: 3,
      titolo: "Running in Salento in Pista",
      data: "2026-05-07",
      luogo: "Lecce, LE",
      ora: "08:30",
      tipo: "varie",
      immagine: "https://www.liceodonmilani.it/wp-content/uploads/2021/06/Schermata-2018-01-22-alle-12.49.06-980x490-1.png",
      iscrizioniAperte: true
    }
  ];

  const gareOrdinate = [...gareData].sort((a, b) => new Date(a.data) - new Date(b.data));

  const formattaData = (dataStr) => {
    return new Date(dataStr).toLocaleDateString('it-IT', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intestazione */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">
              Prossimi <span className="text-blue-600">Appuntamenti</span>
            </h2>
            <p className="text-slate-500 mt-2">Segna in calendario e preparati a correre.</p>
          </div>
          
          <a 
            href={CalendarioPDF} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-blue-600 font-bold hover:underline cursor-pointer"
          >
            Vedi tutto il calendario <ArrowRight size={18} />
          </a>
        </div>

        {/* CONTENITORE MODIFICATO: Flex su mobile, Grid su desktop */}
        <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-x-visible md:pb-0 scrollbar-hide">
          {gareOrdinate.map((gara) => (
            <div 
              key={gara.id} 
              className="min-w-[85%] sm:min-w-[45%] md:min-w-0 snap-center group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
            >
              
              {/* Immagine Gara */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={gara.immagine} 
                  alt={gara.titolo} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                   <span className="text-xs font-bold text-blue-700 uppercase">{gara.tipo}</span>
                </div>
              </div>

              {/* Contenuto Scheda */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {gara.titolo}
                </h3>
                
                <div className="space-y-3 mb-6 flex-grow">
                  <div className="flex items-center gap-3 text-slate-600">
                    <Calendar size={18} className="text-blue-500" />
                    <span className="text-sm font-medium">{formattaData(gara.data)}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <MapPin size={18} className="text-blue-500" />
                    <span className="text-sm font-medium">{gara.luogo}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <Clock size={18} className="text-blue-500" />
                    <span className="text-sm font-medium">Partenza ore {gara.ora}</span>
                  </div>
                </div>

                <button 
                  disabled={!gara.iscrizioniAperte}
                  className={`w-full py-3 rounded-xl font-bold transition-all ${
                    gara.iscrizioniAperte 
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-100' 
                    : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  {gara.iscrizioniAperte ? 'Iscriviti Ora' : 'Iscrizioni Chiuse'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Link Mobile */}
        <div className="mt-4 md:hidden text-center">
          <a 
            href={CalendarioPDF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 font-bold p-2"
          >
            Vedi tutto il calendario <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProssimeGare;