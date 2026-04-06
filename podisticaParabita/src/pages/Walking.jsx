import React from 'react';
import { ChevronRight, Footprints, Map, Users, Heart, ArrowRight, Activity } from 'lucide-react';

import WalkingBg from '../assets/walking.png'; 
import Contatti from '../components/Contatti';

const Walking = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      
      {/* === HERO SECTION WALKING === */}
      <section 
        className="relative bg-slate-900 bg-cover bg-center bg-no-repeat h-[80vh] flex items-center"
        style={{ backgroundImage: `url(${WalkingBg})` }}
      >
        {/* Overlay scuro per il contrasto */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 px-8 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <span className="inline-flex items-center gap-2 bg-emerald-600/20 text-emerald-200 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase backdrop-blur-sm border border-emerald-500/30">
              <Footprints size={16} /> Fitwalking & Benessere
            </span>
            
            <h1 className="text-5xl lg:text-8xl font-extrabold mt-6 leading-tight drop-shadow-lg uppercase italic tracking-tighter">
              Il ritmo del <br /> 
              <span className="text-emerald-400">tuo passo</span>
            </h1>
            
            <p className="mt-6 text-lg text-slate-100 leading-relaxed max-w-lg drop-shadow">
              Scopri il piacere di muoverti in libertà. I nostri gruppi di cammino uniscono sport, socialità e la scoperta dei sentieri più belli di Parabita e delle serre salentine.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-emerald-700 hover:scale-105 transition shadow-xl flex items-center justify-center gap-2">
                Unisciti al gruppo <ChevronRight size={20} />
              </button>
              <button className="border-2 border-white/50 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition backdrop-blur-sm uppercase tracking-widest">
                I nostri percorsi
              </button>
            </div>
          </div>
        </div>

        {/* Floating Stat - Walking Edition */}
        <div className="absolute bottom-10 right-10 z-20 bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-2xl hidden md:block border border-slate-100">
          <div className="flex items-center gap-4">
            <div className="bg-emerald-100 p-3 rounded-full text-emerald-600">
              <Heart size={24} className="animate-pulse" />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium tracking-tight uppercase">Battiti medi</p>
              <p className="text-3xl font-black text-slate-900">115 BPM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione Filosofia del Cammino */}
      <section className="py-24 px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            
            <div className="group p-8 bg-white rounded-[3rem] border border-slate-100 hover:shadow-xl transition-all duration-300">
              <div className="bg-emerald-50 w-16 h-16 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Map size={32} />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Percorsi Natura</h3>
              <p className="text-slate-500 leading-relaxed">
                Esploriamo la macchia mediterranea e gli uliveti secolari su itinerari sicuri e suggestivi, lontano dal traffico.
              </p>
            </div>

            <div className="group p-8 bg-white rounded-[3rem] border border-slate-100 hover:shadow-xl transition-all duration-300">
              <div className="bg-emerald-50 w-16 h-16 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Users size={32} />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Socialità</h3>
              <p className="text-slate-500 leading-relaxed">
                Il walking è condivisione. I nostri gruppi sono aperti a tutte le età, per chi vuole restare in forma chiacchierando.
              </p>
            </div>

            <div className="group p-8 bg-white rounded-[3rem] border border-slate-100 hover:shadow-xl transition-all duration-300">
              <div className="bg-emerald-50 w-16 h-16 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Activity size={32} />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Fitwalking</h3>
              <p className="text-slate-500 leading-relaxed">
                Tecnica di camminata sportiva per chi cerca un allenamento efficace e a basso impatto per le articolazioni.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Sezione Invito */}
      <section className="py-20 px-8">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-emerald-600/10 opacity-30 pointer-events-none"></div>
          <h2 className="relative z-10 text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-6">
            Ti aspettiamo al <br /> prossimo appuntamento
          </h2>
          <p className="relative z-10 text-emerald-100/70 text-lg mb-10 max-w-xl mx-auto font-medium">
            Le nostre uscite partono solitamente dal Parco Comunale ogni Martedì e Giovedì alle 18:30.
          </p>
          <div className="relative z-10 flex flex-wrap justify-center gap-6">
             <div className="flex items-center gap-2 text-white font-bold">
               <ArrowRight className="text-emerald-400" /> Abbigliamento comodo
             </div>
             <div className="flex items-center gap-2 text-white font-bold">
               <ArrowRight className="text-emerald-400" /> Scarpe da ginnastica
             </div>
             <div className="flex items-center gap-2 text-white font-bold">
               <ArrowRight className="text-emerald-400" /> Tanta voglia di camminare
             </div>
          </div>
        </div>
      </section>

      <Contatti />
    </div>
  );
};

export default Walking;