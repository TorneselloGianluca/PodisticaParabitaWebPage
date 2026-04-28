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

      {/* === CHI SIAMO INTRO (Reinserita) === */}
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

      {/* === SOCIAL & LINKS SECTION === */}
{/* === SOCIAL & LINKS SECTION - SFONDO BIANCO E FOTO SFOCATE === */}
      <section className="bg-white py-20 px-4 md:px-6 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          {/* Intestazione Sezione */}
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter leading-none">
              Social & <span className="text-blue-600">Pagina Fidal</span>
            </h2>
            <p className="text-slate-500 mt-4 font-medium">Rimani connesso con la nostra community.</p>
          </div>

          {/* Layout: Scroll su mobile, Griglia su Desktop */}
          <div className="flex overflow-x-auto pb-12 gap-6 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible md:pb-0 scrollbar-hide">
            
            {/* Instagram */}
            <a href="https://www.instagram.com/podisticaparabita" target="_blank" rel="noopener noreferrer" 
               className="relative group min-w-[300px] md:min-w-0 h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200 snap-center shrink-0 transition-transform hover:-translate-y-2">
              {/* Foto di Sfondo Sfocata */}
              <img src="https://images.unsplash.com/photo-1532444458054-01a7dd3e9fca?q=80&w=800" alt="Instagram BG" 
                   className="absolute inset-0 w-full h-full object-cover blur-[1px] group-hover:blur-0 group-hover:scale-110 transition-all duration-700" />
              {/* Overlay Bianco per Testo */}
              <div className="absolute inset-0 bg-white/80 group-hover:bg-white/70 transition-colors" />
              
              {/* Contenuto */}
              <div className="relative h-full p-10 flex flex-col items-center md:items-start">
                <div className="text-pink-600 mb-8 bg-white p-5 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                  <Share2 size={32} />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-3 text-slate-900">Instagram</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">Seguici per foto, video e aggiornamenti live dalle gare.</p>
                <span className="mt-auto bg-blue-600 text-white px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest flex items-center gap-2 shadow-lg">
                  Vedi Profilo <ChevronRight size={14} />
                </span>
              </div>
            </a>

            {/* Facebook */}
            <a href="https://www.facebook.com/podisticaparabita" target="_blank" rel="noopener noreferrer" 
               className="relative group min-w-[300px] md:min-w-0 h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200 snap-center shrink-0 transition-transform hover:-translate-y-2">
              <img src="https://images.unsplash.com/photo-1461896756913-64752638a410?q=80&w=800" alt="Facebook BG" 
                   className="absolute inset-0 w-full h-full object-cover blur-[1px] group-hover:blur-0 group-hover:scale-110 transition-all duration-700" />
              <div className="absolute inset-0 bg-white/80 group-hover:bg-white/70 transition-colors" />
              
              <div className="relative h-full p-10 flex flex-col items-center md:items-start">
                <div className="text-blue-600 mb-8 bg-white p-5 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                  <Globe size={32} />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-3 text-slate-900">Facebook</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">Unisciti alla nostra community e rimani aggiornato sugli eventi.</p>
                <span className="mt-auto bg-blue-600 text-white px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest flex items-center gap-2 shadow-lg">
                  Visita Pagina <ChevronRight size={14} />
                </span>
              </div>
            </a>

            {/* Pagina FIDAL */}
            <a href="https://www.fidal.it/societa/A.S.D.-PODISTICA-PARABITA/LE605" target="_blank" rel="noopener noreferrer" 
               className="relative group min-w-[300px] md:min-w-0 h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200 snap-center shrink-0 transition-transform hover:-translate-y-2">
              <img src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=800" alt="Fidal BG" 
                   className="absolute inset-0 w-full h-full object-cover blur-[1px] group-hover:blur-0 group-hover:scale-110 transition-all duration-700" />
              <div className="absolute inset-0 bg-white/80 group-hover:bg-white/70 transition-colors" />
              
              <div className="relative h-full p-10 flex flex-col items-center md:items-start">
                <div className="text-blue-800 mb-8 bg-white p-5 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                  <Award size={32} />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-3 text-slate-900">Pagina FIDAL</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">Controlla i risultati ufficiali e la nostra scheda tecnica federale.</p>
                <span className="mt-auto bg-blue-600 text-white px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest flex items-center gap-2 shadow-lg">
                  Scheda Tecnica <ChevronRight size={14} />
                </span>
              </div>
            </a>

          </div>
        </div>
      </section>

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
      <Contatti />
    </div>
  );
};

export default Homepage;