import React from 'react';
import { Calendar, MapPin, Clock, Trophy, ArrowRight } from 'lucide-react';

import Calimera from '../assets/calimera.jpg';
import Pista from '../assets/pista.png';
import Ruffano from '../assets/ruffano.webp';

const ProssimeGare = () => {
 
  const gareData = [
    {
      id: 1,
      titolo: "12^Memorial Marcello ed Osvaldo Longo",
      data: "2026-04-12",
      luogo: "Calimera, LE",
      ora: "08:30",
      tipo: "10km",
      immagine: Calimera,
      iscrizioniAperte: true
    },
    {
      id: 2,
      titolo: "Running in Salento in Pista",
      data: "2026-04-16",
      luogo: "Lecce, LE",
      ora: "09:00",
      tipo: "Pista",
      immagine: Pista,
      iscrizioniAperte: true
    },
    {
      id: 3,
      titolo: "7^ Ecotrail delle Serre Salentine",
      data: "2026-04-20",
      luogo: "Ruffano, LE",
      ora: "07:30",
      tipo: "Trail 15km",
      immagine: Ruffano,
      iscrizioniAperte: true
    }
  ];

  // Ordinamento cronologico (dalla data più vicina alla più lontana)
  const gareOrdinate = [...gareData].sort((a, b) => new Date(a.data) - new Date(b.data));

  // Funzione per formattare la data in italiano (es: 20 Apr 2026)
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
          <button className="hidden md:flex items-center gap-2 text-blue-600 font-bold hover:underline">
            Vedi tutto il calendario <ArrowRight size={18} />
          </button>
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

                {/* Pulsante Azione */}
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
      </div>
    </section>
  );
};

export default ProssimeGare;