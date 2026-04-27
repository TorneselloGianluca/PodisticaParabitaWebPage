import React from 'react';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

// 1. IMPORTA IL TUO PDF (Assicurati che il nome del file sia corretto)
import CalendarioPDF from '../assets/calendario.pdf';

import Calimera from '../assets/calimera.jpg';
import Pista from '../assets/pista.png';
import Ruffano from '../assets/ruffano.webp';
import Otranto from '../assets/otranto.webp';
import Lecce from '../assets/lecce.webp';
import Spongano from '../assets/spongano.jpg';
import Borgagne from '../assets/prossime_gare/borgagne.jpg';

const ProssimeGare = () => {
 
  const gareData = [
    {
      id: 1,
      titolo: "Campionati Provinciali di Società Esordienti",
      data: "2026-04-26",
      luogo: "Lecce, LE",
      ora: "09:00",
      tipo: "Pista",
      immagine: Lecce,
      iscrizioniAperte: true
    },
    {
      id: 2,
      titolo: "1^ Mezza Maratona Terre a Levante",
      data: "2026-04-26",
      luogo: "Spongano, LE",
      ora: "07:30",
      tipo: "22KM",
      immagine: Spongano,
      iscrizioniAperte: true
    },
    {
      id: 3,
      titolo: "43^ Marcialonga di Primavera",
      data: "2026-05-01",
      luogo: "Borgagne, LE",
      ora: "08:30",
      tipo: "11KM",
      immagine: Borgagne,
      iscrizioniAperte: true
    }
  ];

  // Ordinamento cronologico
  const gareOrdinate = [...gareData].sort((a, b) => new Date(a.data) - new Date(b.data));

  // Formattazione data in italiano
  const formattaData = (dataStr) => {
    return new Date(dataStr).toLocaleDateString('it-IT', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intestazione Sezione */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">
              Prossimi <span className="text-blue-600">Appuntamenti</span>
            </h2>
            <p className="text-slate-500 mt-2">Segna in calendario e preparati a correre.</p>
          </div>
          
          {/* LINK AL PDF: Sostituito il button con un tag <a> */}
          <a 
            href={CalendarioPDF} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-blue-600 font-bold hover:underline cursor-pointer"
          >
            Vedi tutto il calendario <ArrowRight size={18} />
          </a>
        </div>

        {/* Griglia delle Gare */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gareOrdinate.map((gara) => (
            <div key={gara.id} className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
              
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
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
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

                {/* Pulsante Iscrizione */}
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

        {/* Pulsante visibile solo su mobile (opzionale) */}
        <div className="mt-8 md:hidden">
          <a 
            href={CalendarioPDF}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-2 text-blue-600 font-bold p-4 bg-blue-50 rounded-xl"
          >
            Vedi tutto il calendario <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProssimeGare;