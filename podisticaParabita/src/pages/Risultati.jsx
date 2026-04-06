import React from 'react';
import { Calendar, MapPin, Clock, Trophy } from 'lucide-react';
import Calimera from '../assets/calimera.jpg';
import Pista from '../assets/pista.png';
import Ruffano from '../assets/ruffano.webp';


const Risultati = () => {
  const risultatiData = [
    {
      id: 1,
      atleta: "TBD", // To be determined after the race
      gara: "12^Memorial Marcello ed Osvaldo Longo",
      dove: "Calimera (LE)",
      tempo: "--:--:--",
      data: "12 Aprile 2026",
      foto: Calimera,
      posizione: "Da definire"
    },
    {
      id: 2,
      atleta: "TBD",
      gara: "Running in Salento in Pista",
      dove: "Lecce (LE)",
      tempo: "--:--:--",
      data: "16 Aprile 2026",
      foto: Pista,
      posizione: "Da definire"
    },
    {
      id: 3,
      atleta: "TBD",
      gara: "7^ Ecotrail delle Serre Salentine",
      dove: "Ruffano (LE)",
      tempo: "--:--:--",
      data: "20 Aprile 2026",
      foto: Ruffano,
      posizione: "Da definire"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Intestazione Pagina */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tight">
            Risultati <span className="text-blue-600">Gare</span>
          </h1>
          <p className="text-slate-500 mt-2 font-medium">Le ultime prestazioni dei nostri atleti</p>
        </div>

        {/* Lista Risultati */}
        <div className="space-y-6">
          {risultatiData.map((res) => (
            <div key={res.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row">
                
                {/* Foto Atleta */}
                <div className="md:w-48 h-48 md:h-auto relative">
                  <img 
                    src={res.foto} 
                    alt={res.atleta} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                    {res.posizione}
                  </div>
                </div>

                {/* Info Gara */}
                <div className="p-6 flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900">{res.atleta}</h2>
                      <p className="text-blue-600 font-semibold uppercase text-sm tracking-wider">{res.gara}</p>
                    </div>
                    <Trophy className="text-yellow-500" size={24} />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-50 pt-4">
                    {/* Dove */}
                    <div className="flex items-center gap-2 text-slate-600">
                      <MapPin size={18} className="text-slate-400" />
                      <span className="text-sm font-medium">{res.dove}</span>
                    </div>

                    {/* Tempo */}
                    <div className="flex items-center gap-2 text-slate-600">
                      <Clock size={18} className="text-slate-400" />
                      <span className="text-sm font-bold text-slate-900">{res.tempo}</span>
                    </div>

                    {/* Data */}
                    <div className="flex items-center gap-2 text-slate-600">
                      <Calendar size={18} className="text-slate-400" />
                      <span className="text-sm font-medium">{res.data}</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Risultati;