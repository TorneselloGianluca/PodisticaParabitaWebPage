import React from 'react';
import { ExternalLink, Star, Handshake, ArrowRight } from 'lucide-react';

import sponsor1 from '../assets/sponsor/1.png';
import sponsor2 from '../assets/sponsor/2.png';
import sponsor3 from '../assets/sponsor/3.png';
import sponsor4 from '../assets/sponsor/4.png';

const Sponsor = () => {
  const sponsorData = {
    gold: [
      { id: 2, nome: "Città di Parabita", logo: sponsor1, sito: "#" },
      { id: 3, nome: "Officine Cantelmo", logo: sponsor2, sito: "#" },
      { id: 4, nome: "Leopizzi Antonio", logo: sponsor3, sito: "#" },
      { id: 5, nome: "Clark", logo: sponsor4, sito: "#" },
    ],
    silver: [
      { id: 6, nome: "Sport & Co", logo: "https://via.placeholder.com/200x100?text=Sport", sito: "#" },
      { id: 7, nome: "Ristorante Da Mario", logo: "https://via.placeholder.com/200x100?text=Ristorante", sito: "#" },
      { id: 8, nome: "Auto Salento", logo: "https://via.placeholder.com/200x100?text=Auto", sito: "#" },
      { id: 9, nome: "Edilizia Parabita", logo: "https://via.placeholder.com/200x100?text=Edilizia", sito: "#" },
    ]
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      
      {/* Header Sezione Sponsor */}
      <section className="bg-slate-900 py-16 px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic text-white">
            I Nostri <span className="text-blue-500">Sponsor</span>
          </h1>
          <p className="mt-4 text-lg text-slate-300 font-medium">
            Aziende che condividono i nostri valori di sport, salute e territorio. 
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8 py-16">
        
        {/* --- GOLD SPONSORS (Ora 4 per riga) --- */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-blue-600 p-2 rounded-lg text-white">
              <Star size={24} />
            </div>
            <h2 className="text-2xl font-black uppercase tracking-tight">Gold Sponsors</h2>
          </div>
          
          {/* Griglia impostata a 4 colonne su desktop e 2 su mobile */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sponsorData.gold.map((s) => (
              <a 
                key={s.id} 
                href={s.sito} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-white border border-slate-100 rounded-3xl p-6 flex flex-col items-center justify-center hover:border-blue-200 hover:shadow-xl transition-all duration-300"
              >
                {/* Altezza ridotta a h-32 per non farli sembrare giganti */}
                <div className="h-32 w-full flex items-center justify-center mb-4">
                  <img 
                    src={s.logo} 
                    alt={s.nome} 
                    className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" 
                  />
                </div>
                <h4 className="font-bold text-slate-400 group-hover:text-slate-900 uppercase tracking-widest text-[10px] transition-colors flex items-center gap-1">
                  {s.nome} <ExternalLink size={12} className="opacity-0 group-hover:opacity-100" />
                </h4>
              </a>
            ))}
          </div>
        </div>

        {/* --- SILVER SPONSORS (Anche questi 4 per riga) --- */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-slate-100 p-2 rounded-lg text-slate-600">
              <Handshake size={20} />
            </div>
            <h2 className="text-xl font-black uppercase tracking-tight text-slate-500">Sostenitori Ufficiali</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sponsorData.silver.map((s) => (
              <a 
                key={s.id} 
                href={s.sito} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-slate-50 rounded-2xl p-6 h-32 flex items-center justify-center hover:bg-white border border-transparent hover:border-slate-100 transition-all"
              >
                <img 
                  src={s.logo} 
                  alt={s.nome} 
                  className="max-h-16 w-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all" 
                />
              </a>
            ))}
          </div>
        </div>

        {/* --- CTA --- */}
        <div className="mt-20 bg-blue-600 rounded-[2.5rem] p-10 md:p-16 text-center text-white shadow-2xl overflow-hidden">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6">
            Vuoi diventare partner?
          </h2>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-black uppercase tracking-widest hover:bg-slate-100 transition-all flex items-center gap-3 mx-auto group text-sm">
            Contattaci <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

      </div>

      <footer className="py-8 text-center text-slate-400 text-sm border-t border-slate-50 mt-10">
        &copy; 2026 Podistica Parabita. Tutti i diritti riservati.
      </footer>
    </div>
  );
};

export default Sponsor;