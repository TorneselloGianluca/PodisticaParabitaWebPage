import React from 'react';
import { 
  Activity, 
  Award, 
  Users, 
  ChevronRight, 
  MapPin, 
  Quote, 
  Share2, 
  Globe 
} from 'lucide-react';
import Team from '../components/Team';
import ProssimeGare from '../components/ProssimeGare';
import Podistica from '../assets/podistica.png';
import Informazioni from '../components/Informazioni';
import LogoSection from '../components/LogoSection';
import Contatti from '../components/Contatti';
import Video from '../assets/video.mp4';
import CaroselloImmagini from '../components/CaroselloImmagini';
import Social from '../components/Social';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      
      {/* === HERO SECTION === */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-end lg:items-center bg-slate-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-[center_left_25%] lg:bg-center bg-no-repeat transition-transform duration-1000"
          style={{ backgroundImage: `url(${Podistica})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 lg:bg-black/40"></div>

        <div className="relative z-10 px-6 py-12 md:py-20 lg:py-40 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl text-white">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 bg-blue-600/40 text-blue-100 px-4 py-1.5 rounded-full text-[10px] md:text-sm font-black tracking-widest uppercase backdrop-blur-md border border-blue-500/30">
                <MapPin size={14} className="animate-pulse" /> Stagione 2026
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tighter uppercase drop-shadow-2xl">
              ASD Podistica <br/> 
              <span className="text-blue-500">Parabita</span>
            </h1>
            <p className="mt-6 text-base md:text-lg lg:text-xl text-slate-200 leading-relaxed max-w-xl font-medium">
              Unisciti alla nostra community. Che tu sia un professionista o un amatore, troverai la carica giusta per correre nel cuore del Salento.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-700 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-blue-600/40 w-full sm:w-auto">
                Prossima Gara <ChevronRight size={20} />
              </button>
              <button className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all w-full sm:w-auto">
                Chi Siamo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* === CHI SIAMO INTRO === */}
      <section className="py-16 md:py-24 px-6 bg-white relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-50 p-4 rounded-full text-blue-600">
              <Quote size={32} fill="currentColor" className="opacity-20" />
            </div>
          </div>
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-blue-600 mb-4">Oltre la corsa</h2>
          <p className="text-2xl md:text-4xl font-bold text-slate-900 leading-tight tracking-tighter italic">
            "La Podistica Parabita è <span className="text-blue-600 font-black">storia, territorio e fatica.</span> Da oltre quarant'anni corriamo per promuovere lo sport come stile di vita."
          </p>
          <div className="mt-8 flex justify-center gap-2">
            <span className="h-1.5 w-12 bg-blue-600 rounded-full"></span>
            <span className="h-1.5 w-4 bg-blue-200 rounded-full"></span>
          </div>
        </div>
      </section>

      <CaroselloImmagini />

      <div className="relative z-20">
        <LogoSection/>
      </div>

      <Informazioni />



      {/* Video Section */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto relative h-[450px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src={Video} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter">
              Vivi l'emozione <br /> <span className="text-blue-400">Della Corsa</span>
            </h2>
          </div>
        </div>
      </section>

      <ProssimeGare />
      <Team />
      <Social />
      <Contatti />
    </div>
  );
};

export default Homepage;