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
import Video from '../assets/video1.mp4';
import CaroselloImmagini from '../components/CaroselloImmagini';
import Social from '../components/Social';

import sponsor1 from '../assets/sponsor/1.png';
import sponsor2 from '../assets/sponsor/2.png';
import sponsor3 from '../assets/sponsor/3.png';
import sponsor4 from '../assets/sponsor/4.png';

const Homepage = () => {

  const sponsorLogos = [
    { id: 2, name: "Sponsor 2", logo: sponsor2 },
    { id: 3, name: "Sponsor 3", logo: sponsor3 },
    { id: 4, name: "Sponsor 4", logo: sponsor4 },
    { id: 5, name: "Sponsor 5", logo: "https://www.lacorsadimiguel.it/miguel-newsite/wp-content/uploads/logo-fidal.png" },
    { id: 6, name: "Sponsor 6", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYQShT_ZyuZPF6IjUG8OfyyJV8LvWCAM8P2A&s" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden font-sans">
      
      {/* Animazione CSS per lo scorrimento infinito */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            display: flex;
            width: max-content;
            animation: scroll 30s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>

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
              {/* Modificato: blue-600/40 -> orange-600/40, blue-100 -> orange-100, blue-500/30 -> orange-500/30 */}
              <span className="inline-flex items-center gap-2 bg-orange-600/40 text-orange-100 px-4 py-1.5 rounded-full text-[10px] md:text-sm font-black tracking-widest uppercase backdrop-blur-md border border-orange-500/30">
                <MapPin size={14} className="animate-pulse" /> Stagione 2026
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tighter uppercase drop-shadow-2xl">
              ASD Podistica <br/> 
              {/* Modificato: blue-500 -> orange-500 */}
              <span className="text-orange-500">Parabita</span>
            </h1>
            <p className="mt-6 text-base md:text-lg lg:text-xl text-slate-200 leading-relaxed max-w-xl font-medium">
              Unisciti alla nostra community. Che tu sia un professionista o un amatore, troverai la carica giusta per correre nel cuore del Salento.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              {/* Modificato: bg-blue-600 -> bg-orange-600, shadow-blue-600/40 -> shadow-orange-600/40 */}
              <button className="bg-orange-600 text-white px-8 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-orange-700 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-orange-600/40 w-full sm:w-auto">
                Prossima Gara <ChevronRight size={20} />
              </button>
              <button className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all w-full sm:w-auto">
                Chi Siamo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* === STRISCIA SPONSOR SCORREVOLE === */}
      <div className="bg-white border-y border-slate-100 py-4 relative overflow-hidden group">
        <div className="animate-scroll">
          {[...sponsorLogos, ...sponsorLogos, ...sponsorLogos].map((sponsor, index) => (
            <div key={index} className="mx-3 md:mx-6 flex items-center justify-center w-32 md:w-44 shrink-0">
              <img 
                src={sponsor.logo} 
                alt={sponsor.name} 
                className="max-h-16 md:max-h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* === CHI SIAMO INTRO === */}
      <section className="py-16 md:py-24 px-6 bg-white relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            {/* Modificato: bg-blue-50 -> bg-orange-50, text-blue-600 -> text-orange-600 */}
            <div className="bg-orange-50 p-4 rounded-full text-orange-600">
              <Quote size={32} fill="currentColor" className="opacity-20" />
            </div>
          </div>
          {/* Modificato: text-blue-600 -> text-orange-600 */}
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-orange-600 mb-4">Oltre la corsa</h2>
          <p className="text-2xl md:text-4xl font-bold text-slate-900 leading-tight tracking-tighter italic">
            "La ASD Podistica Parabita è <span className="text-orange-600 font-black">una associazione sportiva dilettantistica nel cuore del Salento.</span> Da oltre quarant'anni corriamo per promuovere lo sport come stile di vita."
          </p>
          <div className="mt-8 flex justify-center gap-2">
            {/* Modificato: bg-blue-600 -> bg-orange-600, bg-blue-200 -> bg-orange-200 */}
            <span className="h-1.5 w-12 bg-orange-600 rounded-full"></span>
            <span className="h-1.5 w-4 bg-orange-200 rounded-full"></span>
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
              {/* Modificato: text-blue-400 -> text-orange-400 */}
              Vivi l'emozione <br /> <span className="text-orange-400">Della Corsa</span>
            </h2>
          </div>
        </div>
      </section>

      <ProssimeGare />
      <Team />
      <Social />
      <Contatti />

      {/* === FOOTER ISTITUZIONALE === */}
      <footer className="bg-slate-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all mb-16 pb-12 border-b border-white/10">
            {/* ... i cerchietti CONI/FIDAL rimangono neutri o con hover se vuoi */}
            <div className="text-center">
              <div className="h-12 w-12 bg-white/20 rounded-full mx-auto mb-2 flex items-center justify-center font-bold text-[10px]">CONI</div>
              <p className="text-[8px] uppercase tracking-widest">Affiliata CONI</p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 bg-white/20 rounded-full mx-auto mb-2 flex items-center justify-center font-bold text-[10px]">FIDAL</div>
              <p className="text-[8px] uppercase tracking-widest">Federazione FIDAL</p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 bg-white/20 rounded-full mx-auto mb-2 flex items-center justify-center font-bold text-[10px]">ASI</div>
              <p className="text-[8px] uppercase tracking-widest">Ente Promozione</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div>
              <h3 className="text-xl font-black uppercase tracking-tighter mb-6">
                {/* Modificato: text-blue-500 -> text-orange-500 */}
                ASD Podistica <span className="text-orange-500">Parabita</span>
              </h3>
              <ul className="text-slate-400 text-sm space-y-2 font-medium">
                <li>Sede Legale: Via Roma, 1 - 73052 Parabita (LE)</li>
                <li>Codice Fiscale: 90001234567</li>
                <li>P. IVA: 01234567890</li>
                <li>Iscr. Registro RASD: n. 123456</li>
                <li>PEC: podisticaparabita@pec.it</li>
              </ul>
            </div>

            <div>
              {/* Modificato: text-blue-500 -> text-orange-500 */}
              <h4 className="text-sm font-black uppercase tracking-widest mb-6 text-orange-500">Trasparenza</h4>
              <ul className="text-slate-400 text-sm space-y-4 font-bold uppercase tracking-tight">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                {/* Modificato: decoration-blue-500/50 -> decoration-orange-500/50 */}
                <li><a href="#" className="hover:text-white transition-colors underline decoration-orange-500/50">Contributi Pubblici (L. 124/2017)</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Modello Organizzativo (MOG)</a></li>
              </ul>
            </div>

            <div>
              {/* Modificato: text-blue-500 -> text-orange-500 */}
              <h4 className="text-sm font-black uppercase tracking-widest mb-6 text-orange-500">Social & Utility</h4>
              <div className="flex gap-4 mb-6">
                {/* Modificato: hover:bg-blue-600 -> hover:bg-orange-600 */}
                <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-orange-600 transition-all"><Share2 size={20}/></a>
                <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-orange-600 transition-all"><Globe size={20}/></a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center">
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">
              © 2026 ASD Podistica Parabita • Tutti i diritti riservati • Created with Passion in Salento
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;