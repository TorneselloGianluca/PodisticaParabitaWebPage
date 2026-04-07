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
      <section className="bg-slate-900 py-24 px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic text-white">
            I Nostri <span className="text-blue-500">Sponsor</span>
          </h1>
          <p className="mt-6 text-xl text-slate-300 font-medium leading-relaxed">
            Aziende che condividono i nostri valori di sport, salute e territorio. 
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8 py-20">
        
        {/* --- GOLD SPONSORS --- */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="bg-blue-600 p-2 rounded-lg text-white">
              <Star size={28} />
            </div>
            <h2 className="text-3xl font-black uppercase tracking-tight">Gold Sponsors</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
            {sponsorData.gold.map((s) => (
              <a 
                key={s.id} 
                href={s.sito} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-white border-2 border-slate-50 rounded-[3rem] p-8 flex flex-col items-center justify-center hover:border-blue-200 hover:shadow-2xl transition-all duration-300"
              >
                {/* Aumentato h-32 -> h-48 per loghi molto più grandi */}
                <div className="h-48 w-full flex items-center justify-center mb-6 px-6">
                  <img 
                    src={s.logo} 
                    alt={s.nome} 
                    className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110" 
                  />
                </div>
                <h4 className="font-bold text-slate-400 group-hover:text-slate-900 uppercase tracking-widest text-sm transition-colors flex items-center gap-2">
                  {s.nome} <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </h4>
              </a>
            ))}
          </div>
        </div>

        {/* --- SILVER SPONSORS --- */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="bg-slate-200 p-2 rounded-lg text-slate-600">
              <Handshake size={24} />
            </div>
            <h2 className="text-2xl font-black uppercase tracking-tight text-slate-600">Sostenitori Ufficiali</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {sponsorData.silver.map((s) => (
              <a 
                key={s.id} 
                href={s.sito} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-slate-50 rounded-3xl p-10 h-44 flex flex-col items-center justify-center hover:bg-white border border-transparent hover:border-slate-100 transition-all shadow-sm hover:shadow-md"
              >
                {/* Aumentata max-h-16 -> max-h-24 */}
                <img 
                  src={s.logo} 
                  alt={s.nome} 
                  className="max-h-24 w-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105" 
                />
              </a>
            ))}
          </div>
        </div>

        {/* --- CTA --- */}
        <div className="mt-32 relative bg-blue-600 rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
              Vuoi correre con noi?
            </h2>
            <button className="bg-white text-blue-600 px-10 py-5 rounded-full font-black uppercase tracking-widest hover:scale-110 transition-transform shadow-xl flex items-center gap-3 mx-auto group">
              Diventa Partner <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>

      </div>

      <footer className="py-12 text-center text-slate-400 font-medium border-t border-slate-100 mt-10">
        &copy; 2026 Podistica Parabita. Tutti i diritti riservati.
      </footer>
    </div>
  );
};

export default Sponsor;