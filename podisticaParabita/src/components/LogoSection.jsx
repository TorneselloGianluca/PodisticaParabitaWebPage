import React from 'react';
import { ShieldCheck, Zap, Globe, Star } from 'lucide-react';
import logo from '../assets/logo.jpeg';

const LogoSection = () => {
  return (
    <section className="py-12 px-8 bg-white relative z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Container principale: Stesso stile dei box "Quick Stats" */}
        <div className="bg-slate-50 rounded-[3rem] p-8 md:p-16 border border-slate-100 shadow-xl shadow-slate-200/50">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* 1. IL LOGO: Grande e pulito con ombra "morbida" come i tuoi box km */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group">
                {/* Aura di luce blu dietro il logo */}
                <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-3xl group-hover:bg-blue-400/30 transition-colors duration-700"></div>
                
                <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 bg-white p-6 rounded-[3.5rem] shadow-2xl shadow-blue-100 flex items-center justify-center transform -rotate-2 group-hover:rotate-0 transition-all duration-500 border border-slate-50">
                  <img 
                    src={logo} 
                    alt="Logo Ufficiale Podistica Parabita" 
                    className="w-full h-full object-contain rounded-2xl" 
                  />
                </div>
              </div>
            </div>

            {/* 2. TESTO E VALORI: Coerente con la tua Hero */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-4">
                  <Star size={14} fill="currentColor" /> Identity Card
                </span>
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                  Il Nostro <span className="text-blue-600">DNA</span>
                </h2>
                <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-xl font-medium">
                  Lo stemma della Podistica Parabita non è solo un disegno, ma il vessillo che portiamo sul petto in ogni gara. Rappresenta la nostra storia e la nostra velocità.
                </p>
              </div>

              {/* Griglia Valori: Stesso stile icone dei box "Quick Stats" della tua homepage */}
              <div className="grid sm:grid-cols-2 gap-6">
                
                <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-blue-50 p-3 rounded-full text-blue-600 shrink-0">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 uppercase text-sm tracking-tight">Ufficialità</h4>
                    <p className="text-xs text-slate-400 font-medium">Affiliata FIDAL dal 1980</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-blue-50 p-3 rounded-full text-blue-600 shrink-0">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 uppercase text-sm tracking-tight">Velocità</h4>
                    <p className="text-xs text-slate-400 font-medium">Dinamismo in ogni falcata</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-blue-50 p-3 rounded-full text-blue-600 shrink-0">
                    <Globe size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 uppercase text-sm tracking-tight">Territorio</h4>
                    <p className="text-xs text-slate-400 font-medium">Orgoglio del Salento</p>
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