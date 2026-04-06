import React from 'react';
import { ExternalLink, Trophy, Star, Handshake, ArrowRight } from 'lucide-react';

const Sponsor = () => {
  // Struttura dati per gestire facilmente gli sponsor
  const sponsorData = {
    main: [
      {
        id: 1,
        nome: "Banca Popolare Pugliese",
        ruolo: "Main Partner 2026",
        logo: "https://via.placeholder.com/400x200?text=BPP+Logo", // Sostituisci con i tuoi asset
        sito: "https://www.bpp.it",
        descrizione: "Il motore principale delle nostre iniziative sportive e sociali sul territorio."
      }
    ],
    gold: [
      { id: 2, nome: "Salento Food", logo: "https://via.placeholder.com/300x150?text=Salento+Food", sito: "#" },
      { id: 3, nome: "Ottica del Corso", logo: "https://via.placeholder.com/300x150?text=Ottica", sito: "#" },
      { id: 4, nome: "Farmacia Parabita", logo: "https://via.placeholder.com/300x150?text=Farmacia", sito: "#" },
    ],
    silver: [
      { id: 5, nome: "Sport & Co", logo: "https://via.placeholder.com/200x100?text=Sport", sito: "#" },
      { id: 6, nome: "Ristorante Da Mario", logo: "https://via.placeholder.com/200x100?text=Ristorante", sito: "#" },
      { id: 7, nome: "Auto Salento", logo: "https://via.placeholder.com/200x100?text=Auto", sito: "#" },
      { id: 8, nome: "Edilizia Parabita", logo: "https://via.placeholder.com/200x100?text=Edilizia", sito: "#" },
    ]
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      
      {/* Header Sezione Sponsor - Stile Hero */}
      <section className="bg-slate-900 py-24 px-8 text-center relative overflow-hidden">
        {/* Decorazione di sfondo */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic text-white">
            I Nostri <span className="text-blue-500">Sponsor</span>
          </h1>
          <p className="mt-6 text-xl text-slate-300 font-medium leading-relaxed">
            Aziende che condividono i nostri valori di sport, salute e territorio. 
            Grazie al loro supporto, la Podistica Parabita continua a correre verso nuovi traguardi.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8 py-20">
        
        {/* --- MAIN SPONSOR --- */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="bg-yellow-500 p-2 rounded-lg text-white">
              <Trophy size={28} />
            </div>
            <h2 className="text-3xl font-black uppercase tracking-tight">Main Partner</h2>
          </div>

          {sponsorData.main.map((s) => (
            <a 
              key={s.id} 
              href={s.sito} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col md:flex-row items-center bg-blue-50 rounded-[3rem] p-10 md:p-16 transition-all hover:shadow-2xl hover:bg-blue-100 border border-blue-100/50"
            >
              <div className="md:w-1/2 flex justify-center">
                <img 
                  src={s.logo} 
                  alt={s.nome} 
                  className="max-h-40 grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" 
                />
              </div>
              <div className="md:w-1/2 mt-10 md:mt-0 md:pl-16 text-center md:text-left">
                <span className="text-blue-600 font-black uppercase tracking-widest text-sm">{s.ruolo}</span>
                <h3 className="text-4xl font-black text-slate-900 mt-2 flex items-center justify-center md:justify-start gap-3">
                  {s.nome} <ExternalLink size={24} className="text-slate-300 group-hover:text-blue-600 transition-colors" />
                </h3>
                <p className="mt-6 text-slate-600 text-lg leading-relaxed italic">
                  "{s.descrizione}"
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* --- GOLD SPONSORS --- */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="bg-blue-600 p-2 rounded-lg text-white">
              <Star size={28} />
            </div>
            <h2 className="text-3xl font-black uppercase tracking-tight">Gold Sponsors</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsorData.gold.map((s) => (
              <a 
                key={s.id} 
                href={s.sito} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-white border-2 border-slate-50 rounded-[2.5rem] p-10 flex flex-col items-center justify-center hover:border-blue-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="h-32 flex items-center justify-center mb-6">
                  <img src={s.logo} alt={s.nome} className="max-h-full grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <h4 className="font-bold text-slate-400 group-hover:text-slate-900 uppercase tracking-widest text-sm transition-colors">
                  {s.nome}
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
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sponsorData.silver.map((s) => (
              <a 
                key={s.id} 
                href={s.sito} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-slate-50 rounded-2xl p-8 flex flex-col items-center justify-center hover:bg-white border border-transparent hover:border-slate-100 transition-all shadow-sm hover:shadow-md"
              >
                <img 
                  src={s.logo} 
                  alt={s.nome} 
                  className="max-h-16 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" 
                />
              </a>
            ))}
          </div>
        </div>

        {/* --- CTA CALL TO ACTION --- */}
        <div className="mt-32 relative bg-blue-600 rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl shadow-blue-200 overflow-hidden">
          {/* Decorazione astratta */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
              Vuoi correre con noi?
            </h2>
            <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-10 font-medium">
              Unisci il nome della tua azienda a una delle realtà sportive più dinamiche del territorio. Scopri i nostri pacchetti di sponsorizzazione.
            </p>
            <button className="bg-white text-blue-600 px-10 py-5 rounded-full font-black uppercase tracking-widest hover:scale-110 transition-transform shadow-xl flex items-center gap-3 mx-auto group">
              Diventa Partner <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>

      </div>

      {/* Footer minimalista per la pagina sponsor */}
      <footer className="py-12 text-center text-slate-400 font-medium border-t border-slate-100 mt-10">
        &copy; 2026 Podistica Parabita. Tutti i diritti riservati.
      </footer>
    </div>
  );
};

export default Sponsor;