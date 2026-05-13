import React, { useState, useRef } from 'react';
import { Calendar, Map, Clock, Play, Pause } from 'lucide-react';

// === ASSETS ===
import Podistica from '../assets/curraturi/curraturi.jpg'; 
import RaceVideo from '../assets/curraturi/curraturi.mp4'; 
import img1 from '../assets/curraturi/img1.png';
import img2 from '../assets/curraturi/img2.png';
import locandina1 from '../assets/curraturi/locandina1.png';
import locandina2 from '../assets/curraturi/locandina2.png';
import locandina3 from '../assets/curraturi/locandina3.png';

import sfondo1 from '../assets/curraturi/sfondo1.png';
import sfondo2 from '../assets/curraturi/sfondo2.png';
import sfondo3 from '../assets/curraturi/sfondo3.png';
import sfondo4 from '../assets/curraturi/sfondo4.png';

const CurraturiPage = () => {

  // === CONFIGURAZIONE SFONDI E OPACITÀ ===
  const BackgroundOptions = {
    descrizione: { img: sfondo1, opacity: 40 }, // Sfondo sezione "Cosa sono i Curraturi"
    atmosfera: { img: sfondo2, opacity: 30 },   // Sfondo sezione Video YouTube
    ctaFinale: { img: sfondo3, opacity: 100 }   // Sfondo sezione "Pronto a Correre"
  };

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const locandine = [locandina1, locandina2, locandina3];

  const galleryImages = [
    { id: 1, src: img1, alt: "Maratona Parabita 1" },
    { id: 2, src: img2, alt: "Maratona Parabita 2" },
    { id: 3, src: sfondo1, alt: "Momento Gara" },
    { id: 4, src: sfondo2, alt: "Atleti in corsa" },
    { id: 5, src: sfondo3, alt: "Traguardo" },
    { id: 6, src: sfondo4, alt: "Premiazione" },
  ];

  const youtubeVideos = [
    { id: "T2ug1_w9Lqw", title: "Edizione 2019" },
    { id: "XCrmoWoevq8", title: "Edizione 2025" },
    { id: "T2ug1_w9Lqw", title: "I Curraturi - Highlights" }
  ];

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-200 overflow-x-hidden">
      
      {/* === HERO SECTION + QUICK INFO (BLOCCO UNICO SCURO) === */}
      <section className="relative bg-slate-900 pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
        {/* Sfondo Hero */}
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105 opacity-60" style={{ backgroundImage: `url(${Podistica})` }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 via-slate-900/60 to-red-900/80"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-8 text-center text-white mb-16">
          <span className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.3em] mb-6">Edizione 2026</span>
          <h1 className="text-6xl lg:text-9xl font-black italic tracking-tighter drop-shadow-2xl uppercase">
            <span className="text-white">CURRATURI</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-100 max-w-2xl mx-auto font-medium leading-relaxed italic">Il rosso della passione, il verde della nostra terra, il bianco della libertà.</p>
        </div>

        {/* QUICK INFO (Integrata nel blocco scuro per eliminare stacchi bianchi laterali) */}
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

      {/* === VIDEO & DESCRIPTION (TESTO BIANCO SISTEMATO) === */}
      <section className="relative py-16 lg:py-24 px-6 md:px-8 overflow-hidden bg-slate-900">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-fixed bg-center" 
          style={{ 
            backgroundImage: `url(${BackgroundOptions.descrizione.img})`,
            opacity: BackgroundOptions.descrizione.opacity / 100 
          }}
        ></div>
        {/* Overlay per migliorare leggibilità testo bianco */}
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

            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="flex justify-center lg:justify-start gap-2 mb-6">
                <div className="w-10 h-1 bg-orange-500 rounded-full"></div>
                <div className="w-3 h-1 bg-red-500 rounded-full"></div>
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter italic leading-none text-white drop-shadow-lg">
                Cosa sono i <br/><span className="text-orange-500">Curraturi</span>?
              </h2>
              <p className="text-base md:text-xl text-white leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0 italic drop-shadow-md">
                I Curraturi rappresentano una tradizionale manifestazione religiosa che rievoca il ritrovamento del Monolito della Madonna della Coltura. L'evento ricorda il gesto del contadino che, pieno di gioia, corse verso il paese per annunciare la straordinaria scoperta della sacra immagine. Nonostante l'atto della corsa, non si tratta di una competizione podistica, bensì di un evento della tradizione di Parabita vissuto con spirito fraterno e gioioso in omaggio alla Madonna.
              </p>
              <div className="mt-8 pt-6 border-t border-white/20 inline-block">
                <p className="text-orange-400 font-bold uppercase tracking-widest text-xs">Tradizione • Fede • Territorio</p>
              </div>
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
            <div key={index} className="min-w-[85vw] md:min-w-0 snap-center bg-white p-3 rounded-[2rem] shadow-xl border border-slate-100 flex-shrink-0 flex items-center justify-center">
               <div className="aspect-[2/3] w-full max-h-[65vh] md:max-h-none rounded-2xl overflow-hidden bg-slate-50 flex items-center justify-center">
                  <img src={url} alt={`Locandina ${index + 1}`} className="w-full h-full object-contain md:object-cover" />
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* === MOMENTI MIGLIORI === */}
      <section className="py-24 bg-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10 text-center md:text-left">
          <div className="mb-16">
            <h2 className="text-white text-4xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">Momenti Migliori</h2>
          </div>
          <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
            {galleryImages.map((img) => (
              <div key={img.id} className="relative group overflow-hidden rounded-3xl bg-slate-900 shadow-2xl border-4 border-white/10">
                <img src={img.src} alt={img.alt} className="w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-8 text-white font-black uppercase text-xs tracking-widest italic">{img.alt}</div>    
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === YOUTUBE VIDEO SECTION === */}
      <section className="relative py-24 overflow-hidden border-t border-slate-100">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-fixed bg-center" 
          style={{ 
            backgroundImage: `url(${BackgroundOptions.atmosfera.img})`,
            opacity: BackgroundOptions.atmosfera.opacity / 100 
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-16 text-center md:text-left">
            <div className="bg-orange-600 p-3 rounded-2xl text-white shadow-lg">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
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
      <section className="relative py-32 px-8 text-center overflow-hidden border-t border-slate-100">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: `url(${BackgroundOptions.ctaFinale.img})`,
            opacity: BackgroundOptions.ctaFinale.opacity / 100 
          }}
        ></div>
        <div className="absolute inset-0 z-10 bg-slate-900/60 backdrop-blur-[2px]"></div>
        <div className="relative z-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-black text-white mb-10 italic uppercase tracking-tighter leading-none">Pronto a <br/><span className="text-orange-500">correre?</span></h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-600 text-white px-12 py-5 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-white hover:text-orange-600 transition-all shadow-2xl shadow-orange-900/40">Iscriviti Ora</button>
            <button className="border-2 border-white text-white px-12 py-5 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-white hover:text-slate-900 transition-all">Regolamento</button>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] bg-slate-50 border-t border-slate-100">
        © 2026 Podistica Parabita • Correre con passione
      </footer>
    </div>
  );
};

export default CurraturiPage;