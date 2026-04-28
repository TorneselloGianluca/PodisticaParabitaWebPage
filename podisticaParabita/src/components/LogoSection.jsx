import React from 'react';
import { ShieldCheck, Zap, Globe, Star, ChevronRight } from 'lucide-react';
import logo from '../assets/logo.jpeg';

const LogoSection = () => {
  return (
    <section className="py-12 px-4 md:px-8 bg-white relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Container principale: SFONDO CAMBIATO IN SLATE-900 (come il Team) */}
        <div className="bg-slate-900 rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-16 border border-white/5 shadow-2xl shadow-blue-900/20">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* 1. IL LOGO */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-1">
              <div className="relative group">
                {/* Aura blu più intensa per risaltare sullo scuro */}
                <div className="absolute inset-0 bg-blue-600/30 rounded-full blur-3xl group-hover:bg-blue-500/40 transition-colors duration-700"></div>
                
                <div className="relative z-10 w-40 h-40 md:w-80 md:h-80 bg-white p-4 md:p-6 rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl flex items-center justify-center transform -rotate-2 group-hover:rotate-0 transition-all duration-500 border border-white/10">
                  <img 
                    src={logo} 
                    alt="Logo Ufficiale Podistica Parabita" 
                    className="w-full h-full object-contain rounded-2xl" 
                  />
                </div>
              </div>
            </div>

            {/* 2. TESTO E VALORI */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8 w-full min-w-0 order-2 lg:order-2">
              <div className="text-center lg:text-left">
                <span className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase mb-4 border border-blue-500/20">
                  <Star size={12} fill="currentColor" /> Identity Card
                </span>
                {/* Titolo ora in bianco */}
                <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                  Il Nostro <span className="text-blue-500">DNA</span>
                </h2>
                {/* Descrizione in grigio chiaro per leggibilità */}
                <p className="mt-4 text-sm md:text-lg text-slate-400 leading-relaxed max-w-xl font-medium mx-auto lg:mx-0">
                  Lo stemma della Podistica Parabita non è solo un disegno, ma il vessillo che portiamo sul petto. Rappresenta la nostra storia e la nostra velocità.
                </p>
              </div>

              {/* CONTENITORE VALORI SCORREVOLI */}
              <div className="w-full min-w-0">
                {/* Suggerimento visivo scroll */}
                <div className="flex items-center gap-2 mb-3 lg:hidden justify-center text-slate-500">
                  <span className="text-[10px] font-bold uppercase tracking-widest">Scorri i valori</span>
                  <ChevronRight size={12} className="animate-pulse" />
                </div>

                <div className="flex overflow-x-auto pb-6 gap-4 snap-x snap-mandatory lg:grid lg:grid-cols-2 lg:overflow-visible lg:pb-0 scrollbar-hide">
                  
                  {/* Valore 1 - Stile card scura come i membri del Team */}
                  <div className="flex items-center gap-4 bg-white/5 p-4 md:p-5 rounded-2xl border border-white/10 shadow-sm min-w-[240px] md:min-w-0 flex-shrink-0 snap-center">
                    <div className="bg-blue-600/20 p-3 rounded-full text-blue-500 shrink-0">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white uppercase text-xs md:text-sm tracking-tight">Ufficialità</h4>
                      <p className="text-[10px] md:text-xs text-slate-500 font-medium uppercase tracking-wider">Affiliata FIDAL dal 1980</p>
                    </div>
                  </div>

                  {/* Valore 2 */}
                  <div className="flex items-center gap-4 bg-white/5 p-4 md:p-5 rounded-2xl border border-white/10 shadow-sm min-w-[240px] md:min-w-0 flex-shrink-0 snap-center">
                    <div className="bg-blue-600/20 p-3 rounded-full text-blue-500 shrink-0">
                      <Zap size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white uppercase text-xs md:text-sm tracking-tight">Velocità</h4>
                      <p className="text-[10px] md:text-xs text-slate-500 font-medium uppercase tracking-wider">Dinamismo in ogni falcata</p>
                    </div>
                  </div>

                  {/* Valore 3 */}
                  <div className="flex items-center gap-4 bg-white/5 p-4 md:p-5 rounded-2xl border border-white/10 shadow-sm min-w-[240px] md:min-w-0 flex-shrink-0 snap-center lg:col-span-2">
                    <div className="bg-blue-600/20 p-3 rounded-full text-blue-500 shrink-0">
                      <Globe size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white uppercase text-xs md:text-sm tracking-tight">Territorio</h4>
                      <p className="text-[10px] md:text-xs text-slate-500 font-medium uppercase tracking-wider">Orgoglio del Salento</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSection;