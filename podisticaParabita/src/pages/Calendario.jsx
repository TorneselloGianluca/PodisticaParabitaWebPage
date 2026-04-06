import React from 'react';
import { Calendar, MapPin, Clock, Trophy } from 'lucide-react';

const Calendario = () => {
  const risultatiData = [
    {
      id: 1,
      atleta: "Gianluca Tornesello",
      gara: "Maratona del Salento",
      dove: "Parabita (LE)",
      tempo: "03:45:12",
      data: "22 Marzo 2026",
      foto: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&h=400&fit=crop", // Foto d'esempio
      posizione: "12° Assoluto"
    },
    {
      id: 2,
      atleta: "Maria Rossi",
      gara: "Corri a Lecce",
      dove: "Lecce (LE)",
      tempo: "00:42:30",
      data: "10 Febbraio 2026",
      foto: "https://images.unsplash.com/photo-1594882645126-14020914d58d?w=400&h=400&fit=crop",
      posizione: "3° Categoria"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Intestazione Pagina */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tight">
            Calendario prossime  <span className="text-blue-600">Gare</span>
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

export default Calendario;