import React, { useState, useRef } from 'react';
import { Calendar, Map, Clock, Play, Pause, ChevronLeft, ChevronRight, Youtube } from 'lucide-react';

// === ASSETS ===
import Podistica from '../assets/curraturi/curraturi.jpg'; 
import RaceVideo from '../assets/curraturi/curraturi.mp4'; 
import img1 from '../assets/curraturi/img1.png';
import img2 from '../assets/curraturi/img2.png';

import locandina1 from '../assets/curraturi/locandina1.png';
import locandina2 from '../assets/curraturi/locandina2.png';
import locandina3 from '../assets/curraturi/locandina3.png';

const CurraturiPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const locandine = [locandina1, locandina2, locandina3];

  const galleryImages = [
    { id: 1, src: img1, alt: "Maratona Parabita 1" },
    { id: 2, src: img2, alt: "Maratona Parabita 2" },
    { id: 3, src: "https://picsum.photos/600/800?random=5", alt: "Momento Gara" },
    { id: 4, src: "https://picsum.photos/600/450?random=6", alt: "Atleti in corsa" },
    { id: 5, src: "https://picsum.photos/600/900?random=7", alt: "Traguardo" },
    { id: 6, src: "https://picsum.photos/600/600?random=8", alt: "Premiazione" },
  ];


const youtubeVideos = [
    { 
      id: "T2ug1_w9Lqw", 
      title: "Edizione 2019" 
    },
    { 
      id: "XCrmoWoevq8", 
      title: "Edizione 2025" 
    },
    { 
      id: "T2ug1_w9Lqw", // Aggiungi un terzo ID o ripeti uno dei precedenti per completare la griglia a 3
      title: "I Curraturi - Highlights" 
    }
  ];

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-red-200 overflow-x-hidden">
      
      {/* === HERO SECTION === */}
      <section className="relative bg-slate-900 py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105 opacity-60" style={{ backgroundImage: `url(${Podistica})` }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 via-slate-900/60 to-red-900/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 text-center text-white">
          <span className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.3em] mb-6">Edizione 2026</span>
          <h1 className="text-6xl lg:text-9xl font-black italic tracking-tighter drop-shadow-2xl uppercase">
            <span className="text-red-600">CU</span>RR<span className="text-emerald-400">TURI</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-100 max-w-2xl mx-auto font-medium leading-relaxed italic">Il rosso della passione, il verde della nostra terra, il bianco della libertà.</p>
        </div>
      </section>

      {/* === QUICK INFO === */}
      <section className="relative z-20 -mt-12 max-w-5xl mx-auto px-6">
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
      </section>

      {/* === VIDEO & DESCRIPTION === */}
      <section className="py-16 lg:py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[320px] md:max-w-[360px] aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-900 cursor-pointer group" onClick={togglePlay}>
              <video ref={videoRef} loop playsInline className="absolute inset-0 w-full h-full object-cover">
                <source src={RaceVideo} type="video/mp4" />
              </video>
              <div className={`absolute inset-0 flex items-center justify-center transition-all ${isPlaying ? 'opacity-0' : 'bg-black/40 opacity-100'}`}>
                <div className="bg-red-600 p-6 rounded-full shadow-2xl transform group-hover:scale-110 transition-transform">
                  {isPlaying ? <Pause className="text-white" size={32} /> : <Play className="text-white fill-white" size={32} />}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start gap-2 mb-6 text-emerald-500">
              <div className="w-10 h-1 bg-current rounded-full"></div>
              <div className="w-3 h-1 bg-red-500 rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter italic leading-none text-slate-900">
              Cosa sono i <br/><span className="text-emerald-600">Curraturi</span>?
            </h2>
            <div className="space-y-5 text-base md:text-lg text-slate-600 leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
              <p>I Curraturi rappresentano una tradizionale manifestazione religiosa che rievoca il ritrovamento del Monolito della Madonna della Coltura. L'evento ricorda il gesto del contadino che, pieno di gioia, corse verso il paese per annunciare la straordinaria scoperta della sacra immagine.</p>
            </div>
          </div>
        </div>
      </section>

      {/* === LOCANDINE === */}
      <section className="py-16 bg-slate-50 border-y border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 mb-8 text-center md:text-left">
           <h3 className="text-xl font-black uppercase tracking-tighter italic text-slate-400">Curraturi <span className="text-red-600">2026</span></h3>
        </div>
        <div className="flex md:grid md:grid-cols-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-6 px-6 md:max-w-7xl md:mx-auto">
          {locandine.map((url, index) => (
            <div key={index} className="min-w-[85vw] md:min-w-0 snap-center bg-white p-3 rounded-[2rem] shadow-xl border border-slate-100 flex-shrink-0">
               <div className="aspect-[2/3] w-full max-h-[65vh] md:max-h-none rounded-2xl overflow-hidden bg-slate-50">
                  <img src={url} alt={`Locandina ${index + 1}`} className="w-full h-full object-contain md:object-cover" />
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* === MOMENTI MIGLIORI === */}
      <section className="py-24 bg-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10 text-center md:text-left">
          <div className="mb-16">
            <h2 className="text-white text-4xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">
              Momenti Migliori
            </h2>
          </div>
          <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
            {galleryImages.map((img) => (
              <div key={img.id} className="relative group overflow-hidden rounded-3xl bg-slate-900 shadow-2xl border-4 border-white/10">
                <img src={img.src} alt={img.alt} className="w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-8">
                   <p className="text-white font-black uppercase text-xs tracking-widest italic">{img.alt}</p>
                </div>    
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === YOUTUBE VIDEO SECTION === */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-16 text-center md:text-left">
            <div className="bg-red-600 p-3 rounded-2xl text-white shadow-lg">
              <Youtube size={32} />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic">L'Atmosfera dei <span className="text-red-600">Curraturi</span></h2>
              <p className="text-slate-500 font-medium uppercase text-xs tracking-widest mt-2">I video più belli delle scorse edizioni</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {youtubeVideos.map((video, index) => (
              <div key={index} className="group">
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white transition-transform duration-500 group-hover:scale-[1.02]">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <h4 className="mt-6 text-center font-black uppercase tracking-tighter text-slate-800 italic group-hover:text-red-600 transition-colors">
                  {video.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === CTA FINALE === */}
      <section className="py-24 px-8 text-center bg-white relative border-t border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-10 italic uppercase tracking-tighter leading-none text-center">Pronto a <br/><span className="text-red-600">correre?</span></h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 text-white px-12 py-5 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-slate-950 transition-all shadow-xl shadow-emerald-900/20">Iscriviti Ora</button>
            <button className="border-2 border-red-600 text-red-600 px-12 py-5 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-red-50 transition-all">Regolamento</button>
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