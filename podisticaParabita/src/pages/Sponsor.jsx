import React from 'react';
import { ExternalLink, Star, Handshake, ArrowRight } from 'lucide-react';

import sponsor1 from '../assets/sponsor/1.png';
import sponsor2 from '../assets/sponsor/2.png';
import sponsor3 from '../assets/sponsor/3.png';
import sponsor4 from '../assets/sponsor/4.png';

// 1. IMPORTA QUI LA FOTO DI SFONDO DIETRO TUTTO IL SITO
import SfondoGlobale from '../assets/sfondo.png'; 

const Sponsor = () => {
  const sponsorData = {
    gold: [
      { id: 3, nome: "Officine Cantelmo", logo: sponsor2, sito: "https://www.officinecantelmo.it/" },
      { id: 4, nome: "Leopizzi Antonio", logo: sponsor3, sito: "https://www.facebook.com/p/Ditta-Antonio-Leopizzi-Termoidraulico-100028127662321/" },
      { id: 5, nome: "Clark", logo: sponsor4, sito: "https://clarksrl.it/" },
    ],
    silver: [
      { id: 6, nome: "Da inserire", logo: "https://via.placeholder.com/200x100?text=Sport", sito: "#" },
      { id: 7, nome: "Da inserire", logo: "https://via.placeholder.com/200x100?text=Ristorante", sito: "#" },
      { id: 8, nome: "Da inserire", logo: "https://via.placeholder.com/200x100?text=Auto", sito: "#" },
      { id: 9, nome: "Da inserire", logo: "https://via.placeholder.com/200x100?text=Edilizia", sito: "#" },
    ]
  };

  return (
    /* Cambiato lo sfondo di base in grigio chiarissimo per far risaltare la foto luminosa */
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans relative overflow-hidden">
      
      {/* IMMAGINE DI SFONDO DIETRO TUTTO (Massima luminosità) */}
      <div className="absolute inset-0 z-0 bg-white">
        <img 
          src={SfondoGlobale} 
          alt="Podistica Parabita Sponsor Sfondo" 
          className="w-full h-full object-cover opacity-90 fixed-background" 
        />
        {/* Sfumatura bianca leggerissima solo ai lati per ammorbidire lo scroll senza scurire il centro */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/20" />
      </div>

      {/* Tutto il contenuto sopra lo sfondo luminoso */}
      <div className="relative z-10">
        
        {/* Header Sezione Sponsor - Adesso è chiaro e trasparente in stile vetro */}
        <section className="bg-white/70 backdrop-blur-md py-20 px-8 text-center relative overflow-hidden border-b border-slate-200">
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic text-slate-900">
              I Nostri <span className="text-orange-600">Sponsor</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-700 font-medium max-w-2xl mx-auto">
              Le eccellenze del territorio che sostengono la nostra corsa e i nostri valori.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-8 py-20">
          
          {/* --- GOLD SPONSORS --- */}
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-10 justify-center md:justify-start">
              <div className="bg-orange-600 p-3 rounded-2xl text-white shadow-lg shadow-orange-600/20">
                <Star size={24} fill="currentColor" />
              </div>
              <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900">Partner <span className="text-orange-600">Gold</span></h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {sponsorData.gold.map((s) => (
                <a 
                  key={s.id} 
                  href={s.sito} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  /* Card bianche in vetro trasparente: fanno vedere lo sfondo sotto e risaltare il logo */
                  className="group bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-[2.5rem] p-8 flex flex-col items-center justify-center hover:border-orange-500/50 hover:bg-white hover:shadow-2xl hover:shadow-orange-600/10 transition-all duration-500"
                >
                  <div className="h-32 w-full flex items-center justify-center mb-6 bg-slate-50/50 p-4 rounded-2xl">
                    <img 
                      src={s.logo} 
                      alt={s.nome} 
                      className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110" 
                    />
                  </div>
                  <h4 className="font-black text-slate-400 group-hover:text-orange-600 uppercase tracking-widest text-[10px] transition-colors flex items-center gap-2">
                    {s.nome} <ExternalLink size={12} />
                  </h4>
                </a>
              ))}
            </div>
          </div>

          {/* --- SILVER SPONSORS --- */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-10 justify-center md:justify-start">
              <div className="bg-slate-200 text-slate-700 p-3 rounded-2xl">
                <Handshake size={24} />
              </div>
              <h2 className="text-2xl font-black uppercase tracking-tighter text-slate-700">Sostenitori Ufficiali</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {sponsorData.silver.map((s) => (
                <a 
                  key={s.id} 
                  href={s.sito} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-white/50 backdrop-blur-sm rounded-3xl p-8 h-40 flex items-center justify-center border border-slate-200/40 hover:bg-white hover:border-orange-500/20 transition-all duration-300 shadow-sm"
                >
                  <img 
                    src={s.logo} 
                    alt={s.nome} 
                    className="max-h-20 w-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                  />
                </a>
              ))}
            </div>
          </div>

          {/* --- CTA - TOTAL ORANGE --- */}
          <div className="mt-28 bg-orange-600 rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl shadow-orange-600/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-white/20 transition-colors duration-700"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">
                Vuoi correre <br /> con noi?
              </h2>
              <p className="mb-10 text-orange-50 font-medium max-w-xl mx-auto opacity-90">
                Diventa partner della Podistica Parabita e dai visibilità alla tua azienda durante i nostri eventi.
              </p>
              <button className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-orange-600 transition-all flex items-center gap-4 mx-auto text-sm shadow-xl transform active:scale-95">
                Diventa Sponsor <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        <footer className="py-12 text-center text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] border-t border-slate-200/60 bg-white/80 backdrop-blur-md">
          © 2026 Podistica Parabita • Correre nel cuore del Salento
        </footer>
      </div>

      {/* Blocco CSS per gestire il parallasse fisso su PC */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (min-width: 1024px) {
          .fixed-background {
            background-attachment: fixed;
          }
        }
      `}} />
    </div>
  );
};

export default Sponsor;