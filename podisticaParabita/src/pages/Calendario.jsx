import React from 'react';
import { Calendar, MapPin, Clock, Trophy, FileText, ExternalLink, ChevronRight } from 'lucide-react';

// Importa il tuo PDF (assicurati che sia nella cartella assets)
import CalendarioInteroPDF from '../assets/calendario.pdf';

const Calendario = () => {
  // Dati delle prossime gare in programma
  const gareFuture = [
    {
      id: 1,
      titolo: "12^ Memorial Marcello ed Osvaldo Longo",
      luogo: "Calimera (LE)",
      data: "12 Aprile 2026",
      ora: "08:30",
      tipo: "Strada - 10km",
      status: "Iscrizioni Aperte"
    },
    {
      id: 2,
      titolo: "Running in Salento in Pista",
      luogo: "Lecce (LE)",
      data: "16 Aprile 2026",
      ora: "09:00",
      tipo: "Pista - Varie distanze",
      status: "Iscrizioni Aperte"
    },
    {
      id: 3,
      titolo: "7^ Ecotrail delle Serre Salentine",
      luogo: "Ruffano (LE)",
      data: "20 Aprile 2026",
      ora: "07:30",
      tipo: "Trail - 15km",
      status: "In attesa"
    },
        {
      id: 2,
      titolo: "Running in Salento in Pista",
      luogo: "Lecce (LE)",
      data: "16 Aprile 2026",
      ora: "09:00",
      tipo: "Pista - Varie distanze",
      status: "Iscrizioni Aperte"
    },
        {
      id: 2,
      titolo: "Running in Salento in Pista",
      luogo: "Lecce (LE)",
      data: "16 Aprile 2026",
      ora: "09:00",
      tipo: "Pista - Varie distanze",
      status: "Iscrizioni Aperte"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Intestazione Pagina */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tight">
            Calendario Gare <span className="text-blue-600">MAGGIO</span>
          </h1>
          <p className="text-slate-500 mt-2 font-medium">Tutti i prossimi appuntamenti podistici</p>
        </div>

        {/* Lista Gare */}
        <div className="space-y-4">
          {gareFuture.map((gara) => (
            <div key={gara.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-all group">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                
                {/* Info Principali */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold px-2 py-1 bg-blue-50 text-blue-600 rounded-md uppercase">
                      {gara.tipo}
                    </span>
                    <span className={`text-xs font-bold px-2 py-1 rounded-md uppercase ${
                      gara.status === 'Iscrizioni Aperte' ? 'bg-green-50 text-green-600' : 'bg-slate-50 text-slate-500'
                    }`}>
                      {gara.status}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {gara.titolo}
                  </h2>
                </div>

                {/* Dettagli Logistici */}
                <div className="grid grid-cols-2 md:flex md:items-center gap-4 md:gap-8">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Calendar size={18} className="text-blue-500" />
                    <span className="text-sm font-semibold">{gara.data}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <MapPin size={18} className="text-blue-500" />
                    <span className="text-sm font-medium">{gara.luogo}</span>
                  </div>
                  <div className="hidden lg:flex items-center gap-2 text-slate-600">
                    <Clock size={18} className="text-blue-500" />
                    <span className="text-sm font-medium">{gara.ora}</span>
                  </div>
                </div>

                {/* Icona Freccia */}
                <div className="hidden md:block">
                  <ChevronRight className="text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- SEZIONE FINALE: PULSANTE CALENDARIO PDF --- */}
        <div className="mt-16 p-8 bg-slate-900 rounded-3xl text-center shadow-xl shadow-slate-200">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4 shadow-lg shadow-blue-900/20">
            <FileText className="text-white" size={32} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Scarica il Calendario Completo</h3>
          <p className="text-slate-400 mb-6 max-w-sm mx-auto">
            Vuoi la lista di tutte le gare Fidal della provincia? Scarica il PDF ufficiale aggiornato.
          </p>
          <a 
            href={CalendarioInteroPDF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-black uppercase tracking-wider hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/30 active:scale-95"
          >
            Visualizza PDF <ExternalLink size={20} />
          </a>
        </div>
        {/* ----------------------------------------------- */}

      </div>
    </div>
  );
};

export default Calendario;