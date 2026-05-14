import React, { useState, useRef } from 'react';
import { 
  Calendar, 
  Map, 
  Clock, 
  Play, 
  Pause 
} from 'lucide-react';

// === ASSETS ===
import Podistica from '../assets/curraturi/curraturi.jpg'; 
import RaceVideo from '../assets/curraturi/curraturi.mp4'; 
import locandina1 from '../assets/curraturi/locandina1.png';
import locandina2 from '../assets/curraturi/locandina2.png';
import locandina3 from '../assets/curraturi/locandina3.png';
import sfondo1 from '../assets/curraturi/sfondo1.png';
import sfondo2 from '../assets/curraturi/sfondo2.png';
import comitato from '../assets/comitato.png';
import podistica from '../assets/logo.jpeg';
import comune from '../assets/sponsor/1.png';

const CurraturiPage = () => {
  const BackgroundOptions = {
    descrizione: { img: sfondo1, opacity: 40 }, 
    atmosfera: { img: sfondo2, opacity: 30 },   
  };

  // Hooks & Refs
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const regolamentoRef = useRef(null); // Riferimento per la terza locandina

  const locandine = [locandina1, locandina2, locandina3];
  
  const youtubeVideos = [
    { id: "ihuhjNRK9I0", title: "Edizione 2019" },
    { id: "XCrmoWoevq8", title: "Edizione 2025" },
    { id: "T2ug1_w9Lqw", title: "I Curraturi - Highlights" }
  ];

  // Funzioni di Interazione
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "393317018865"; 
    const message = encodeURIComponent("Ciao! Vorrei verificare la disponibilità dei posti per i Curraturi 2026.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const scrollToRegolamento = () => {
    regolamentoRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-200 overflow-x-hidden">
      
      {/* === HERO SECTION === */}
      <section className="relative bg-slate-900 pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105 opacity-60" style={{ backgroundImage: `url(${Podistica})` }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 via-slate-900/60 to-red-900/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 text-center text-white mb-16">
          <span className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.3em] mb-6">Edizione 2026</span>
          <h1 className="text-6xl lg:text-9xl font-black italic tracking-tighter drop-shadow-2xl uppercase text-white">CURRATURI</h1>
          <p className="mt-6 text-lg md:text-xl text-slate-100 max-w-2xl mx-auto font-medium leading-relaxed italic">Il rosso della passione, il verde della nostra terra, il bianco della libertà.</p>
        </div>
        <div className="relative z-20 max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 shadow-2xl rounded-3xl overflow-hidden bg-white border border-slate-100">
            <div className="p-8 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-slate-100">
              <Calendar className="text-emerald-600 mb-3" size={32} />
              <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest leading-none mb-2">Data Evento</span>
              <span className="text-xl font-black text-slate-800 tracking-tight">24 Maggio 2026</span>
            </div>
            <div className="p-8 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-slate-100">
              <Clock className="text-slate-400 mb-3" size={32} />
              <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest leading-none mb-2">Ritrovo Atleti</span>
              <span className="text-xl font-black text-slate-800 tracking-tight">Ore 11:30</span>
            </div>
            <div className="p-8 flex flex-col items-center text-center">
              <Map size={32} className="text-red-600 mb-3" />
              <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest leading-none mb-2">Percorsi</span>
              <span className="text-xl font-black text-slate-800 tracking-tight">2km</span>
            </div>
          </div>
        </div>
      </section>

      {/* === BANNER LOGHI E SOCIAL (OTTIMIZZATO MOBILE) === */}
      <section className="relative z-30 py-6 md:py-10 bg-white border-b border-slate-100 w-full">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between md:justify-center gap-4 md:gap-16">
            <div className="flex items-center justify-start md:justify-center gap-4 md:gap-12 flex-1 md:flex-none">
              <img src={comitato} alt="Logo Comitato" className="h-12 md:h-28 w-auto object-contain transition-transform hover:scale-105" />
              <img src={podistica} alt="Logo Podistica" className="h-12 md:h-28 w-auto object-contain transition-transform hover:scale-105" />
              <img src={comune} alt="Logo Sponsor/Partner" className="h-12 md:h-28 w-auto object-contain transition-transform hover:scale-105" />
            </div>
            <div className="hidden sm:block w-px h-12 bg-slate-200"></div>
            <div className="flex items-center gap-4 md:gap-8 flex-shrink-0">
              <a href="#" className="group flex flex-col items-center">
                <div className="p-2 text-slate-400 group-hover:text-blue-600 transition-all duration-300 transform group-hover:scale-110">
                  <svg width="24" height="24" className="md:w-[30px] md:h-[30px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </div>
                <span className="text-[7px] md:text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover:text-blue-600">FB</span>
              </a>
              <a href="#" className="group flex flex-col items-center">
                <div className="p-2 text-slate-400 group-hover:text-pink-600 transition-all duration-300 transform group-hover:scale-110">
                  <svg width="24" height="24" className="md:w-[30px] md:h-[30px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <span className="text-[7px] md:text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover:text-pink-600">IG</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* === VIDEO & DESCRIPTION === */}
      <section className="relative py-16 lg:py-24 px-6 md:px-8 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0 bg-cover bg-fixed bg-center" style={{ backgroundImage: `url(${BackgroundOptions.descrizione.img})`, opacity: BackgroundOptions.descrizione.opacity / 100 }}></div>
        <div className="absolute inset-0 z-0 bg-black/30"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[320px] md:max-w-[360px] aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-900 cursor-pointer group" onClick={togglePlay}>
                <video ref={videoRef} loop playsInline className="absolute inset-0 w-full h-full object-cover">
                  <source src={RaceVideo} type="video/mp4" />
                </video>
                <div className={`absolute inset-0 flex items-center justify-center transition-all ${isPlaying ? 'opacity-0' : 'bg-black/40 opacity-100'}`}>
                  <div className="bg-orange-600 p-6 rounded-full shadow-2xl transform group-hover:scale-110 transition-transform">
                    {isPlaying ? <Pause className="text-white" size={32} /> : <Play className="text-white fill-white" size={32} />}
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 text-center lg:text-left text-white">
              <div className="flex justify-center lg:justify-start gap-2 mb-6 text-orange-500">
                <div className="w-10 h-1 bg-current rounded-full"></div>
                <div className="w-3 h-1 bg-red-500 rounded-full"></div>
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter italic leading-none drop-shadow-lg">Cosa sono i <br/><span className="text-orange-500">Curraturi</span>?</h2>
              <p className="text-base md:text-xl leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0 italic drop-shadow-md opacity-90">I Curraturi rappresentano una tradizionale manifestazione religiosa che rievoca il ritrovamento del Monolito della Madonna della Coltura.</p>
              <div className="mt-8 pt-6 border-t border-white/20 inline-block text-orange-400 font-bold uppercase tracking-widest text-xs">Tradizione • Fede • Territorio</div>
            </div>
          </div>
        </div>
      </section>

      {/* === LOCANDINE === */}
      <section className="py-16 bg-slate-50 border-y border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 mb-8 text-center md:text-left">
           <h3 className="text-xl font-black uppercase tracking-tighter italic text-slate-400">Curraturi <span className="text-orange-600">2026</span></h3>
        </div>
        <div className="flex md:grid md:grid-cols-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-6 px-6 md:max-w-7xl md:mx-auto">
          {locandine.map((url, index) => (
            <div 
              key={index} 
              ref={index === 2 ? regolamentoRef : null} // Collega il ref alla terza locandina
              className="min-w-[85vw] md:min-w-0 snap-center bg-white p-3 rounded-[2rem] shadow-xl border border-slate-100 flex-shrink-0 flex items-center justify-center"
            >
               <div className="aspect-[2/3] w-full max-h-[65vh] md:max-h-none rounded-2xl overflow-hidden bg-slate-50 flex items-center justify-center">
                  <img src={url} alt={`Locandina ${index + 1}`} className="w-full h-full object-contain md:object-cover" />
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* === YOUTUBE VIDEO SECTION === */}
      <section className="relative py-24 overflow-hidden border-t border-slate-100 bg-white">
        <div className="absolute inset-0 z-0 bg-cover bg-fixed bg-center" style={{ backgroundImage: `url(${BackgroundOptions.atmosfera.img})`, opacity: BackgroundOptions.atmosfera.opacity / 100 }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-16 text-center md:text-left">
            <div className="bg-orange-600 p-3 rounded-2xl text-white shadow-lg flex items-center justify-center">
               <Play size={24} fill="currentColor" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic text-slate-900">L'Atmosfera dei <span className="text-orange-600">Curraturi</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {youtubeVideos.map((video, index) => (
              <div key={index} className="group">
                <div className="relative w-full pb-[56.25%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-black transition-transform duration-500 group-hover:scale-[1.02]">
                  <iframe className="absolute top-0 left-0 w-full h-full" src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0`} title={video.title} frameBorder="0" allowFullScreen></iframe>
                </div>
                <h4 className="mt-6 text-center font-black uppercase tracking-tighter text-slate-800 italic group-hover:text-orange-600 transition-colors">{video.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === CTA FINALE === */}
      <section className="relative py-24 px-8 text-center border-t border-slate-100 bg-white">
        <div className="relative z-20 max-w-3xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-7xl font-black text-slate-900 mb-10 italic uppercase tracking-tighter leading-none text-center">Pronto a <br/><span className="text-orange-500">correre?</span></h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Pulsante WhatsApp */}
            <button 
              onClick={handleWhatsAppClick}
              className="bg-orange-600 text-white px-8 py-5 rounded-2xl font-black uppercase text-xs md:text-sm tracking-widest hover:bg-slate-900 transition-all shadow-2xl shadow-orange-900/40"
            >
              Verifica Disponibilità Posti
            </button>
            {/* Pulsante Regolamento */}
            <button 
              onClick={scrollToRegolamento}
              className="border-2 border-orange-600 text-orange-600 px-12 py-5 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-orange-50 transition-all"
            >
              Regolamento
            </button>
          </div>
        </div>
      </section>

      {/* === FOOTER === */}
      <footer className="relative py-16 text-center overflow-hidden border-t border-slate-100">
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${sfondo2})`, opacity: 0.70 }}></div>
        <div className="absolute inset-0 z-10 bg-white/60"></div>
        <div className="relative z-20 max-w-7xl mx-auto px-8">
          <p className="text-slate-900 text-[10px] md:text-[12px] font-black uppercase tracking-[0.5em]">
            © 2026 Podistica Parabita • Correre con passione
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CurraturiPage;