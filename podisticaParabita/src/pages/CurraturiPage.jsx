import React, { useState, useRef } from 'react';
import { Calendar, Map, Clock, Play, Pause, Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import Podistica from '../assets/curraturi/curraturi.jpg'; 
import RaceVideo from '../assets/curraturi/curraturi.mp4'; 

// Momenti migliori 
import img1 from '../assets/curraturi/img1.png';
import img2 from '../assets/curraturi/img2.png';

const CurraturiPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRef = useRef(null);

  const locandine = [
    "https://picsum.photos/800/1200?random=1", 
    "https://picsum.photos/800/1200?random=2",
    "https://picsum.photos/800/1200?random=3"
  ];

  const galleryImages = [
    { id: 1, src: img1, alt: "Maratona Parabita 1" },
    { id: 2, src: img2, alt: "Maratona Parabita 2" },
    { id: 3, src: "https://picsum.photos/600/800?random=5", alt: "Momento Gara" },
    { id: 4, src: "https://picsum.photos/600/450?random=6", alt: "Atleti in corsa" },
    { id: 5, src: "https://picsum.photos/600/900?random=7", alt: "Traguardo" },
    { id: 6, src: "https://picsum.photos/600/600?random=8", alt: "Premiazione" },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev === locandine.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? locandine.length - 1 : prev - 1));

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-red-200">
      
      {/* === HERO SECTION === */}
      <section className="relative bg-slate-900 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105" style={{ backgroundImage: `url(${Podistica})` }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 via-slate-900/60 to-red-900/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 text-center text-white">
          <span className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-4">Edizione 2026</span>
          <h1 className="text-6xl lg:text-9xl font-black italic tracking-tighter drop-shadow-2xl">CURRA<span className="text-emerald-400">TURI</span></h1>
          <p className="mt-4 text-lg text-slate-100 max-w-2xl mx-auto font-light leading-relaxed">Il rosso della passione, il verde della nostra terra, il bianco della libertà.</p>
        </div>
      </section>

      {/* === QUICK INFO === */}
      <section className="relative z-20 -mt-10 max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-3 shadow-xl rounded-2xl overflow-hidden bg-white border border-slate-100">
          <div className="p-6 flex flex-col items-center text-center border-r border-slate-50">
            <Calendar className="text-emerald-600 mb-2" size={28} />
            <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest leading-none">Data</span>
            <span className="text-lg font-black text-slate-800 tracking-tight">Maggio 2026</span>
          </div>
          <div className="p-6 flex flex-col items-center text-center border-r border-slate-50">
            <Clock className="text-slate-400 mb-2" size={28} />
            <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest leading-none">Ritrovo</span>
            <span className="text-lg font-black text-slate-800 tracking-tight">Ore 07:30</span>
          </div>
          <div className="p-6 flex flex-col items-center text-center">
            <Map size={28} className="text-red-600 mb-2" />
            <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest leading-none">Distanza</span>
            <span className="text-lg font-black text-slate-800 tracking-tight">10k / 21k</span>
          </div>
        </div>
      </section>

      {/* === MEDIA SECTION (Locandina + Video) === */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center justify-items-center">
          
          {/* Slider Locandina */}
          <div className="relative group w-full max-w-[320px] bg-slate-50 p-4 rounded-[2rem] shadow-lg border border-slate-100">
            <div className="relative aspect-[2/3] rounded-xl overflow-hidden shadow-md border-4 border-white">
              <img src={locandine[currentSlide]} alt="Locandina" className="w-full h-full object-cover" />
              <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow hover:bg-emerald-600 hover:text-white transition-all"><ChevronLeft size={18}/></button>
              <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow hover:bg-red-600 hover:text-white transition-all"><ChevronRight size={18}/></button>
            </div>
            <div className="flex justify-center gap-1.5 mt-4">
              {locandine.map((_, i) => <div key={i} className={`h-1.5 rounded-full transition-all ${currentSlide === i ? 'w-6 bg-emerald-600' : 'w-1.5 bg-slate-300'}`} />)}
            </div>
          </div>

          {/* Video Player */}
          <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-900 cursor-pointer group" onClick={togglePlay}>
            <video ref={videoRef} loop playsInline className="absolute inset-0 w-full h-full object-cover">
              <source src={RaceVideo} type="video/mp4" />
            </video>
            <div className={`absolute inset-0 flex items-center justify-center transition-all ${isPlaying ? 'opacity-0' : 'bg-black/40 opacity-100'}`}>
              <div className="bg-red-600 p-5 rounded-full shadow-2xl scale-100 group-hover:scale-110 transition-transform">
                {isPlaying ? <Pause className="text-white" size={28} /> : <Play className="text-white fill-white" size={28} />}
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute bottom-6 left-6 text-white pointer-events-none">
                <p className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${isPlaying ? 'bg-green-500 animate-pulse' : 'bg-white'}`}></span>
                  {isPlaying ? 'Live' : 'Guarda il video'}
                </p>
            </div>
          </div>

        </div>
      </section>

      {/* === DESCRIPTION SECTION (Centrata) === */}
      <section className="py-16 px-8 bg-slate-50/50 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-emerald-100/30 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-red-100/30 rounded-full blur-[80px]"></div>
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="flex justify-center gap-2 mb-6">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tighter italic">Cosa sono i <span className="text-emerald-600">Curraturi</span>?</h2>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
            <p>
              Il termine <strong className="text-slate-900 font-bold italic">"Curraturi"</strong> affonda le sue radici nella tradizione del Salento, richiamando l'immagine dei messaggeri che un tempo percorrevano i sentieri a passo svelto per consegnare notizie tra i borghi.
            </p>
            <p>
              Oggi, questa eredità rivive in una sfida atletica che attraversa il cuore di Parabita. Non è solo una maratona, ma un rito collettivo dove la fatica si mescola alla bellezza degli ulivi secolari e delle pietre barocche. 
            </p>
            <p className="font-medium text-slate-900">
              Correre i Curraturi significa onorare il passato, sfidare il proprio presente e tingere ogni chilometro con i colori della passione.
            </p>
          </div>
        </div>
      </section>

      {/* === GALLERY === */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-baseline mb-12">
            <h2 className="text-white text-5xl font-black uppercase italic tracking-tighter">Momenti <span className="text-emerald-400 underline decoration-red-600 underline-offset-8">Migliori</span></h2>
          </div>
          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {galleryImages.map((img) => (
              <div key={img.id} className="relative group overflow-hidden rounded-2xl bg-slate-800 shadow-xl">
                <img src={img.src} alt={img.alt} className="w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4">
                   <p className="text-white font-black uppercase text-[10px] tracking-widest italic">{img.alt}</p>
                </div>    
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === CTA FINALE === */}
      <section className="py-12 px-8 text-center bg-white relative border-t border-slate-100">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-black text-slate-900 mb-6 italic uppercase tracking-tighter">Sei dei <span className="text-red-600">nostri?</span></h2>
          <div className="flex gap-4 justify-center">
            <button className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-slate-900 transition-all shadow-md">Iscriviti</button>
            <button className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-red-50 transition-all">Regolamento</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CurraturiPage;