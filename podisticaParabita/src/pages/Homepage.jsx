import React, { useRef } from 'react';
import { 
  Activity, 
  Award, 
  Users, 
  ChevronRight, 
  MapPin, 
  Quote, 
  Share2, 
  Globe, 
  Shirt
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
import BackToHome from '../components/BackToHome'; 
import StoriaTimeline from '../components/StoriaTimeline';

import maglia1 from '../assets/download.mp4';
import maglia2 from '../assets/maglia.png';
import fotoSquadra from '../assets/fotoSquadra.jpeg';

import sponsor1 from '../assets/sponsor/1.png';
import sponsor2 from '../assets/sponsor/2.png';
import sponsor3 from '../assets/sponsor/3.png';
import sponsor4 from '../assets/sponsor/4.png';

import primoVideo from '../assets/videoufficiale.mp4';

const Homepage = () => {

  // Riferimenti per lo scorrimento dei pulsanti
  const chiSiamoRef = useRef(null);
  const prossimeGareRef = useRef(null);

  const eseguiScroll = (riferimento) => {
    riferimento.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const sponsorLogos = [
    { id: 2, name: "Sponsor 2", logo: sponsor2 },
    { id: 3, name: "Sponsor 3", logo: sponsor3 },
    { id: 4, name: "Sponsor 4", logo: sponsor4 },
    { id: 5, name: "Sponsor 5", logo: "https://www.lacorsadimiguel.it/miguel-newsite/wp-content/uploads/logo-fidal.png" },
    { id: 6, name: "Sponsor 6", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYQShT_ZyuZPF6IjUG8OfyyJV8LvWCAM8P2A&s" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden font-sans">
      
      {/* AGGIUNTO COMPONENTE (Si nasconderà automaticamente in questa pagina) */}
      <BackToHome />

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

      {/* === HERO SECTION CON SFONDO VIDEO IN LOOP === */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-end lg:items-center bg-slate-950 overflow-hidden">
        {/* Tag Video di Sfondo */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
        >
          <source src={primoVideo} type="video/mp4" />
        </video>
        
        {/* Overlay scuro per non far confondere le scritte con il video sotto */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Contenuto testuale */}
        <div className="relative z-20 px-6 py-12 md:py-20 lg:py-40 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl text-white">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 bg-orange-600/40 text-orange-100 px-4 py-1.5 rounded-full text-[10px] md:text-sm font-black tracking-widest uppercase backdrop-blur-md border border-orange-500/30">
                <MapPin size={14} className="animate-pulse" /> Stagione 2026
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tighter uppercase drop-shadow-2xl">
              ASD Podistica <br/> 
              <span className="text-orange-500">Parabita</span>
            </h1>
            <p className="mt-6 text-base md:text-lg lg:text-xl text-slate-200 leading-relaxed max-w-xl font-medium">
              Unisciti alla nostra community. Che tu sia un professionista o un amatore, troverai la carica giusta per correre nel cuore del Salento.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => eseguiScroll(prossimeGareRef)} 
                className="bg-orange-600 text-white px-8 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-orange-700 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-orange-600/40 w-full sm:w-auto"
              >
                Prossima Gara <ChevronRight size={20} />
              </button>
              <button 
                onClick={() => eseguiScroll(chiSiamoRef)} 
                className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all w-full sm:w-auto"
              >
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

      {/* === CHI SIAMO INTRO CON FOTO DI SFONDO IN TRASPARENZA === */}
      <section ref={chiSiamoRef} className="py-24 md:py-36 px-6 bg-slate-950 relative overflow-hidden border-b border-white/5 flex items-center min-h-[50vh]">
        {/* Immagine inserita dietro al testo in trasparenza calibrata */}
        <div className="absolute inset-0 z-0">
          <img 
            src={fotoSquadra} 
            alt="Podistica Sfondo Intro" 
            className="w-full h-full object-cover opacity-100 object-center"
          />
          {/* Overlay scuro radiale/lineare per sfumare i lati e concentrare lo sguardo al centro */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/60 to-slate-950" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="bg-orange-500/10 p-4 rounded-full text-orange-500 border border-orange-500/20">
              <Quote size={32} fill="currentColor" className="opacity-40" />
            </div>
          </div>
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-orange-500 mb-4">Oltre la corsa</h2>
          <p className="text-2xl md:text-4xl font-bold text-white leading-tight tracking-tighter italic drop-shadow-md">
            "La ASD Podistica Parabita è <span className="text-orange-500 font-black">una associazione sportiva dilettantistica nel cuore del Salento.</span> Da oltre quarant'anni corriamo per promuovere lo sport come stile di vita."
          </p>
          <div className="mt-8 flex justify-center gap-2">
            <span className="h-1.5 w-12 bg-orange-500 rounded-full"></span>
            <span className="h-1.5 w-4 bg-orange-500/30 rounded-full"></span>
          </div>
        </div> 
      </section>

      <div className="relative z-20">
        <LogoSection/>
      </div>

      <StoriaTimeline />

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
              Vivi l'emozione <br /> <span className="text-orange-400">Della Corsa</span>
            </h2>
          </div>
        </div>
      </section>
      

      {/* === NUOVA SEZIONE: LA NOSTRA PELLE (Testo a Sinistra, Video a Destra) === */}
      <section className="bg-slate-950 text-white py-20 md:py-28 px-6 relative overflow-hidden border-t border-white/5">
        {/* Elemento decorativo di sfondo (sfumatura arancio soffusa) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-orange-600/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* PARTE SINISTRA: TITOLO E DESCRIZIONE */}
            <div className="lg:col-span-5 text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-3 bg-orange-500/10 border border-orange-500/20 px-4 py-2 rounded-xl">
                <Shirt size={16} className="text-orange-500" />
                <span className="text-orange-500 font-black uppercase tracking-[0.25em] text-[10px]">Kit Ufficiale 2026</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                LA NOSTRA <br />
                <span className="text-orange-500 italic">PELLE</span>
              </h2>
              
              <div className="w-16 h-1 bg-orange-500 mx-auto lg:mx-0"></div>
              
              <p className="text-slate-400 font-medium text-base md:text-lg leading-relaxed">
                I nostri colori, la nostra identità. Indossare questa maglia significa farsi portavoce di una storia di passione, fatica e traguardi condivisi lungo le strade del Salento. Progettata per gli atleti, onorata da tutta la squadra.
              </p>
            </div>

            {/* PARTE DESTRA: VIDEO PULITO (Senza descrizioni sopra) */}
            <div className="lg:col-span-7 w-full">
              <div className="relative group aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                >
                  <source src={maglia1} type="video/mp4" />
                </video>
                
                {/* Overlay gradiente leggerissimo solo per dare profondità cinematografica ai bordi */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* === SEZIONE PROSSIME GARE === */}
      <section ref={prossimeGareRef}>
        <ProssimeGare />
      </section>


      <Team />
      <Social />

      {/* === FOOTER ISTITUZIONALE === */}
      <footer className="bg-slate-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all mb-16 pb-12 border-b border-white/10">
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
              <h4 className="text-sm font-black uppercase tracking-widest mb-6 text-orange-500">Trasparenza</h4>
              <ul className="text-slate-400 text-sm space-y-4 font-bold uppercase tracking-tight">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors underline decoration-orange-500/50">Contributi Pubblici (L. 124/2017)</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Modello Organizzativo (MOG)</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-black uppercase tracking-widest mb-6 text-orange-500">Social & Utility</h4>
              <div className="flex gap-4 mb-6">
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