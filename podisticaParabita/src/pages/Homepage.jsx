import React from 'react';
import { Activity, Award, Users, ChevronRight, MapPin } from 'lucide-react'; 
import Team from '../components/Team';
import ProssimeGare from '../components/ProssimeGare';
import Podistica from '../assets/podistica.png';
import Informazioni from '../components/Informazioni';
import LogoSection from '../components/LogoSection';
import Contatti from '../components/Contatti';
import Video from '../assets/video.mp4';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      
      {/* === HERO SECTION === */}
      <section 
        className="relative bg-slate-900 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Podistica})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 px-8 py-24 lg:py-40 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <span className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-200 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase backdrop-blur-sm border border-blue-500/30">
              <MapPin size={16} /> Stagione 2026
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold mt-6 leading-tight drop-shadow-lg">
              ASD Podistica <span className="text-blue-400">Parabita</span>
            </h1>
            <p className="mt-6 text-lg text-slate-100 leading-relaxed max-w-lg drop-shadow">
              Unisciti alla Podistica Parabita. Che tu sia un professionista o un amatore, troverai una community pronta a correre insieme a te tra gli ulivi e il mare.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 hover:scale-105 transition flex items-center justify-center gap-2 shadow-xl">
                Prossima Gara <ChevronRight size={20} />
              </button>
              <button className="border-2 border-white/50 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition backdrop-blur-sm">
                Chi Siamo
              </button>
            </div>
          </div>
          <div className="relative h-full min-h-[200px] lg:min-h-[400px]"></div>
        </div>

        <div className="absolute bottom-10 right-10 z-20 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl hidden md:block border border-slate-100 hover:scale-105 transition-transform duration-300">
          <div className="flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-full text-green-600">
              <Activity size={24} />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Km Percorsi quest'anno</p>
              <p className="text-3xl font-black text-slate-900">+12.450</p>
            </div>
          </div>
        </div>
      </section>

      <LogoSection/>
      <Informazioni />

      {/* Quick Stats/Features */}
      <section className="bg-slate-50 py-20 px-8 relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <Users className="text-blue-600 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">150+ Iscritti</h3>
            <p className="text-slate-500">Una famiglia che cresce ogni giorno, dai giovani ai master.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <Award className="text-blue-600 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Gare Nazionali</h3>
            <p className="text-slate-500">Partecipiamo ai circuiti più prestigiosi in tutta Italia.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <Activity className="text-blue-600 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Allenamenti</h3>
            <p className="text-slate-500">Piani personalizzati e uscite di gruppo ogni martedì e giovedì.</p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto relative h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src={Video} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/40"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
            <div className="bg-blue-600 p-4 rounded-full mb-6 animate-bounce shadow-lg shadow-blue-500/50">
                <Activity size={32} className="text-white" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter drop-shadow-2xl">
              Vivi l'emozione <br /> della <span className="text-blue-400">corsa</span>
            </h2>
            <p className="mt-4 text-slate-200 font-medium max-w-md text-lg">
              Guarda i momenti più belli delle nostre maratone e preparati alla prossima sfida.
            </p>
          </div>
        </div>
      </section>

      <ProssimeGare />

      <section>
        <Team />
      </section>

      <section>
        <Contatti />
      </section>
    </div>
  );
};

export default Homepage;