import React from 'react';
import { Star, Award, Shield, ArrowRight } from 'lucide-react';

//import sponsor A (Gold)
import sponsor1 from '../assets/sponsorA/Sponsor1.png';
import sponsor2 from '../assets/sponsorA/Sponsor2.png';
import sponsor3 from '../assets/sponsorA/Sponsor3.png';
import sponsor4 from '../assets/sponsorA/Sponsor4.png';
import sponsor5 from '../assets/sponsorA/Sponsor5.png';
import sponsor6 from '../assets/sponsorA/Sponsor6.png';
import sponsor7 from '../assets/sponsorA/Sponsor7.png';
import sponsor8 from '../assets/sponsorA/Sponsor8.png';
import sponsor9 from '../assets/sponsorA/Sponsor9.png';
import sponsor10 from '../assets/sponsorA/Sponsor10.png';
import sponsor11 from '../assets/sponsorA/Sponsor11.png';
import sponsor12 from '../assets/sponsorA/Sponsor12.png';
import sponsor13 from '../assets/sponsorA/Sponsor13.png';

//import sponsor B (Silver)
import sponsor14 from '../assets/sponsorB/Sponsor1.png';
import sponsor15 from '../assets/sponsorB/Sponsor2.png';
import sponsor16 from '../assets/sponsorB/Sponsor3.png';
import sponsor17 from '../assets/sponsorB/Sponsor4.png';
import sponsor18 from '../assets/sponsorB/Sponsor5.png';
import sponsor19 from '../assets/sponsorB/Sponsor6.png';
import sponsor20 from '../assets/sponsorB/Sponsor7.png';
import sponsor21 from '../assets/sponsorB/Sponsor8.png';
import sponsor22 from '../assets/sponsorB/Sponsor9.png';
import sponsor23 from '../assets/sponsorB/Sponsor10.png';
import sponsor24 from '../assets/sponsorB/Sponsor11.png';
import sponsor25 from '../assets/sponsorB/Sponsor12.png';
import sponsor26 from '../assets/sponsorB/Sponsor13.png';
import sponsor27 from '../assets/sponsorB/Sponsor14.png';
import sponsor28 from '../assets/sponsorB/Sponsor15.png';

//import sponsor C (Bronze)
import sponsor29 from '../assets/sponsorC/Sponsor1.png';
import sponsor30 from '../assets/sponsorC/Sponsor2.png';
import sponsor31 from '../assets/sponsorC/Sponsor3.png';
import sponsor32 from '../assets/sponsorC/Sponsor4.png';
import sponsor33 from '../assets/sponsorC/Sponsor5.png';
import sponsor34 from '../assets/sponsorC/Sponsor6.png';
import sponsor35 from '../assets/sponsorC/Sponsor7.png';
import sponsor36 from '../assets/sponsorC/Sponsor8.png';
import sponsor37 from '../assets/sponsorC/Sponsor9.png';
import sponsor38 from '../assets/sponsorC/Sponsor10.png';
import sponsor39 from '../assets/sponsorC/Sponsor11.png';
import sponsor40 from '../assets/sponsorC/Sponsor12.png';
import sponsor41 from '../assets/sponsorC/Sponsor13.png';
import sponsor42 from '../assets/sponsorC/Sponsor14.png';
import sponsor43 from '../assets/sponsorC/Sponsor15.png';
import sponsor44 from '../assets/sponsorC/Sponsor16.png';
import sponsor45 from '../assets/sponsorC/Sponsor17.png';
import sponsor46 from '../assets/sponsorC/Sponsor18.png';
import sponsor47 from '../assets/sponsorC/Sponsor19.png';
import sponsor48 from '../assets/sponsorC/Sponsor20.png';
import sponsor49 from '../assets/sponsorC/Sponsor21.png';
import sponsor50 from '../assets/sponsorC/Sponsor22.png';
import sponsor51 from '../assets/sponsorC/Sponsor23.png';
import sponsor52 from '../assets/sponsorC/Sponsor24.png';
import sponsor53 from '../assets/sponsorC/Sponsor25.png';
import sponsor54 from '../assets/sponsorC/Sponsor26.png';
import sponsor55 from '../assets/sponsorC/Sponsor27.png';
import sponsor56 from '../assets/sponsorC/Sponsor28.png';
import sponsor57 from '../assets/sponsorC/Sponsor29.png';
import sponsor58 from '../assets/sponsorC/Sponsor30.png';
import sponsor59 from '../assets/sponsorC/Sponsor31.png';
import sponsor60 from '../assets/sponsorC/Sponsor32.png';
import sponsor61 from '../assets/sponsorC/Sponsor33.png';
import sponsor62 from '../assets/sponsorC/Sponsor34.png';
import sponsor63 from '../assets/sponsorC/Sponsor35.png';
import sponsor64 from '../assets/sponsorC/Sponsor36.png';
import sponsor65 from '../assets/sponsorC/Sponsor37.png';
import sponsor66 from '../assets/sponsorC/Sponsor38.png';
import sponsor67 from '../assets/sponsorC/Sponsor39.png';
import sponsor68 from '../assets/sponsorC/Sponsor40.png';
import sponsor69 from '../assets/sponsorC/Sponsor41.png';
import sponsor70 from '../assets/sponsorC/Sponsor42.png';
import sponsor71 from '../assets/sponsorC/Sponsor43.png';
import sponsor72 from '../assets/sponsorC/Sponsor44.png';
import sponsor73 from '../assets/sponsorC/Sponsor45.png';
import sponsor74 from '../assets/sponsorC/Sponsor46.png';
import sponsor75 from '../assets/sponsorC/Sponsor47.png';

// Sfondo del sito
import SfondoGlobale from '../assets/sfondo.png'; 

const Sponsor = () => {

  const goldSponsors = [
    { id: 1, logo: sponsor1 },
    { id: 2, logo: sponsor2 },
    { id: 3, logo: sponsor3 },
    { id: 4, logo: sponsor4 },
    { id: 5, logo: sponsor5 },
    { id: 6, logo: sponsor6 },
    { id: 7, logo: sponsor7 },
    { id: 8, logo: sponsor8 },
    { id: 9, logo: sponsor9 },
    { id: 10, logo: sponsor10 },
    { id: 11, logo: sponsor11 },
    { id: 12, logo: sponsor12 },
    { id: 13, logo: sponsor13 },
  ];

  const silverSponsors = [
    { id: 101, logo: sponsor14 },
    { id: 102, logo: sponsor15 },
    { id: 103, logo: sponsor16 },
    { id: 104, logo: sponsor17 },
    { id: 105, logo: sponsor18 },
    { id: 106, logo: sponsor19 },
    { id: 107, logo: sponsor20 },
    { id: 108, logo: sponsor21 },
    { id: 109, logo: sponsor22 },
    { id: 110, logo: sponsor23 },
    { id: 111, logo: sponsor24 },
    { id: 112, logo: sponsor25 },
    { id: 113, logo: sponsor26 },
    { id: 114, logo: sponsor27 },
    { id: 115, logo: sponsor28 },
  ];

  const bronzeSponsors = [
    { id: 201, logo: sponsor29 },
    { id: 202, logo: sponsor30 },
    { id: 203, logo: sponsor31 },
    { id: 204, logo: sponsor32 },
    { id: 205, logo: sponsor33 },
    { id: 206, logo: sponsor34 },
    { id: 207, logo: sponsor35 },
    { id: 208, logo: sponsor36 },
    { id: 209, logo: sponsor37 },
    { id: 210, logo: sponsor38 },
    { id: 211, logo: sponsor39 },
    { id: 212, logo: sponsor40 },
    { id: 213, logo: sponsor41 },
    { id: 214, logo: sponsor42 },
    { id: 215, logo: sponsor43 },
    { id: 216, logo: sponsor44 },
    { id: 217, logo: sponsor45 },
    { id: 218, logo: sponsor46 },
    { id: 219, logo: sponsor47 },
    { id: 220, logo: sponsor48 },
    { id: 221, logo: sponsor49 },
    { id: 222, logo: sponsor50 },
    { id: 223, logo: sponsor51 },
    { id: 224, logo: sponsor52 },
    { id: 225, logo: sponsor53 },
    { id: 226, logo: sponsor54 },
    { id: 227, logo: sponsor55 },
    { id: 228, logo: sponsor56 },
    { id: 229, logo: sponsor57 },
    { id: 230, logo: sponsor58 },
    { id: 231, logo: sponsor59 },
    { id: 232, logo: sponsor60 },
    { id: 233, logo: sponsor61 },
    { id: 234, logo: sponsor62 },
    { id: 235, logo: sponsor63 },
    { id: 236, logo: sponsor64 },
    { id: 237, logo: sponsor65 },
    { id: 238, logo: sponsor66 },
    { id: 239, logo: sponsor67 },
    { id: 240, logo: sponsor68 },
    { id: 241, logo: sponsor69 },
    { id: 242, logo: sponsor70 },
    { id: 243, logo: sponsor71 },
    { id: 244, logo: sponsor72 },
    { id: 245, logo: sponsor73 },
    { id: 246, logo: sponsor74 },
    { id: 247, logo: sponsor75 },
  ];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans relative overflow-hidden">

      {/* IMMAGINE DI SFONDO GLOBALE */}
      <div className="absolute inset-0 z-0 bg-white">
        <img 
          src={SfondoGlobale} 
          alt="Podistica Parabita Sponsor Sfondo" 
          className="w-full h-full object-cover opacity-90 fixed-background" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/20" />
      </div>

      <div className="relative z-10">

        {/* Header Sezione */}
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

        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">

          {/* --- 1. GOLD SPONSORS (Bordo ORO aderente solo alla foto) --- */}
          <div className="mb-28">
            <div className="flex items-center gap-4 mb-12 justify-center md:justify-start">
              <div className="bg-amber-500 p-3 rounded-2xl text-white shadow-lg shadow-amber-500/25">
                <Star size={26} fill="currentColor" />
              </div>
              <div>
                <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900">
                  Partner <span className="text-amber-500">Gold</span>
                </h2>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Top Sponsor Ufficiali</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 items-center justify-items-center">
              {goldSponsors.map((s) => (
                <div 
                  key={s.id} 
                  className="h-56 md:h-60 w-full flex items-center justify-center p-2 relative cursor-pointer group transition-all duration-300 ease-out hover:scale-110 hover:z-20"
                >
                  <img 
                    src={s.logo} 
                    alt={`Sponsor ${s.id}`} 
                    className="max-h-full max-w-full object-contain p-3 rounded-2xl border-2 border-amber-400 bg-white/75 shadow-md shadow-amber-500/15 group-hover:border-amber-500 group-hover:shadow-xl group-hover:shadow-amber-500/30 transition-all duration-300" 
                  />
                </div>
              ))}
            </div>
          </div>

          {/* --- 2. SILVER SPONSORS (Bordo ARGENTO aderente solo alla foto) --- */}
          <div className="mb-28">
            <div className="flex items-center gap-4 mb-10 justify-center md:justify-start">
              <div className="bg-slate-400 p-3 rounded-2xl text-white shadow-lg shadow-slate-400/20">
                <Award size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-black uppercase tracking-tighter text-slate-800">
                  Partner <span className="text-slate-500">Silver</span>
                </h2>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Sostenitori Ufficiali</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-10 items-center justify-items-center">
              {silverSponsors.map((s) => (
                <div 
                  key={s.id} 
                  className="h-36 md:h-40 w-full flex items-center justify-center p-2 relative cursor-pointer group transition-all duration-300 ease-out hover:scale-110 hover:z-20"
                >
                  <img 
                    src={s.logo} 
                    alt={`Sponsor ${s.id}`} 
                    className="max-h-full max-w-full object-contain p-2.5 rounded-xl border-2 border-slate-300 bg-white/75 shadow-sm shadow-slate-400/15 group-hover:border-slate-400 group-hover:shadow-lg group-hover:shadow-slate-400/25 transition-all duration-300" 
                  />
                </div>
              ))}
            </div>
          </div>

          {/* --- 3. BRONZE SPONSORS (Bordo BRONZO aderente solo alla foto) --- */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8 justify-center md:justify-start">
              <div className="bg-amber-800/80 p-2.5 rounded-2xl text-white shadow-md shadow-amber-900/15">
                <Shield size={22} />
              </div>
              <div>
                <h2 className="text-xl font-black uppercase tracking-tighter text-amber-900/80">
                  Partner <span className="text-amber-700">Bronze</span>
                </h2>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Amici della Podistica</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
              {bronzeSponsors.map((s) => (
                <div 
                  key={s.id} 
                  className="h-24 md:h-28 w-full flex items-center justify-center p-1.5 relative cursor-pointer group transition-all duration-300 ease-out hover:scale-110 hover:z-20"
                >
                  <img 
                    src={s.logo} 
                    alt={`Sponsor ${s.id}`} 
                    className="max-h-full max-w-full object-contain p-2 rounded-lg border border-amber-700/60 bg-white/75 shadow-xs group-hover:border-amber-700 group-hover:shadow-md group-hover:shadow-amber-900/20 transition-all duration-300" 
                  />
                </div>
              ))}
            </div>
          </div>

          {/* --- BANNER CTA --- */}
          <div className="mt-28 bg-orange-600 rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl shadow-orange-600/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-white/20 transition-colors duration-700"></div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">
                Vuoi correre <br /> con noi?
              </h2>
              <p className="mb-10 text-orange-50 font-medium max-w-xl mx-auto opacity-90">
                Diventa partner della Podistica Parabita e dai visibilità alla tua azienda durante i nostri eventi.
              </p>
              <a 
                href="mailto:podisticaparabita@gmail.com?subject=Richiesta%20Informazioni%20Sponsorizzazione%20-%20Podistica%20Parabita&body=Salve%2C%0A%0ASono%20interessato%20a%20diventare%20sponsor%20per%20la%20Podistica%20Parabita.%20Vorrei%20ricevere%20maggiori%20informazioni%20sui%20pacchetti%20di%20partnership.%0A%0ACordiali%20saluti"
                className="inline-flex items-center gap-4 bg-slate-900 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-orange-600 transition-all text-sm shadow-xl transform active:scale-95"
              >
                Diventa Sponsor <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>

        </div>

        <footer className="py-12 text-center text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] border-t border-slate-200/60 bg-white/80 backdrop-blur-md">
          © 2026 Podistica Parabita • Correre nel cuore del Salento
        </footer>
      </div>

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