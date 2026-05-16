import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  Mountain, 
  Trophy, 
  Info, 
  ChevronRight, 
  ChevronLeft,
  Share2, 
  Play,
  Map as MapIcon,
  ArrowUpRight
} from 'lucide-react';

import veneri from '../assets/veneri/veneri.png';

import BannerScalata from '../assets/podistica.png'; 
import MappaPercorso from '../assets/mappa.png'; 
import Contatti from '../components/Contatti';
import video from '../assets/video2.mp4'; 

// === IMPORT ASSERTI GALLERIA ===
import foto1 from '../assets/walking/walking1.png'; 
import foto2 from '../assets/walking/walking2.png';
import foto3 from '../assets/walking/walking3.png';
import foto4 from '../assets/walking/walking4.png';

// === IMPORT SFONDI PER EFFETTI AD ALTO IMPATTO ===
import vicinoSfondo from '../assets/curraturi/sfondo1.png'; // Usato come sfondo per le specifiche
import atmosferaSfondo from '../assets/curraturi/sfondo2.png'; // Usato dietro la sezione YouTube

const ScalataVeneri = () => {
  // Stato per il carosello foto
  const [currentFoto, setCurrentFoto] = useState(0);
  
  const fotoGallery = [foto1, foto2, foto3, foto4];

  const nextFoto = () => setCurrentFoto((prev) => (prev === fotoGallery.length - 1 ? 0 : prev + 1));
  const prevFoto = () => setCurrentFoto((prev) => (prev === 0 ? fotoGallery.length - 1 : prev - 1));

  // Array Video YouTube personalizzato per la Scalata delle Veneri
  const youtubeVideos = [
    { id: "ihuhjNRK9I0", title: "Edizione Passata - Highlights" },
    { id: "XCrmoWoevq8", title: "Il Percorso della Serra" },
    { id: "T2ug1_w9Lqw", title: "Emozioni in Corsa" }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans overflow-x-hidden selection:bg-orange-200">
      
      {/* === HERO SECTION === */}
      <section className="relative min-h-[85vh] flex flex-col justify-between bg-slate-950 overflow-hidden">
        {/* Background Image con overlay scuro */}
        <div className="absolute inset-0 z-0">
          <img 
            src={BannerScalata} 
            alt="Scalata delle Veneri" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/80" />
        </div>
        
        {/* Titolo Principale */}
        <div className="relative z-10 flex-grow flex flex-col items-center justify-center text-center px-6 pt-16">
          <span className="bg-orange-600 text-white px-5 py-2 rounded-full text-xs md:text-sm font-black uppercase tracking-[0.2em] shadow-lg shadow-orange-600/30">
            Edizione 2026
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-white uppercase italic tracking-tighter mt-6 leading-none drop-shadow-2xl">
            Scalata delle <br /> <span className="text-orange-500 not-italic">Veneri</span>
          </h1>
        </div>

        {/* Badge Info Rapide alla base dell'Hero */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-12">
          <div className="bg-white/95 backdrop-blur-md rounded-[2rem] shadow-2xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 border border-white/20">
            <div className="text-center md:border-r border-slate-200/60 last:border-0 flex flex-col justify-center">
              <Calendar className="mx-auto text-orange-500 mb-2" size={24} />
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Data Evento</p>
              <p className="font-black text-slate-900 text-sm md:text-base">14 Giugno 2026</p>
            </div>
            <div className="text-center md:border-r border-slate-200/60 last:border-0 flex flex-col justify-center">
              <Clock className="mx-auto text-orange-500 mb-2" size={24} />
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Orario Partenza</p>
              <p className="font-black text-slate-900 text-sm md:text-base">Ore 18:30</p>
            </div>
            <div className="text-center md:border-r border-slate-200/60 last:border-0 flex flex-col justify-center">
              <Mountain className="mx-auto text-orange-500 mb-2" size={24} />
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Distanza Percorso</p>
              <p className="font-black text-slate-900 text-sm md:text-base">10.5 KM</p>
            </div>
            <div className="text-center flex flex-col justify-center">
              <Trophy className="mx-auto text-orange-500 mb-2" size={24} />
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Difficoltà Gara</p>
              <p className="font-black text-orange-600 text-sm md:text-base">Media / Alta</p>
            </div>
          </div>
        </div>
      </section>

      {/* === SEZIONE DESCRIZIONE E VIDEO PERCORSO === */}
      <section className="relative py-24 px-6 md:px-12 bg-slate-50 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Box Testo (Sinistra) + Gestione della Foto Veneri in Background */}
          <div className="relative lg:col-span-5 space-y-6 pb-12 lg:pb-0">
            
            {/* Foto Veneri: Fissa nell'angolo su PC, centrata dietro al testo su Mobile prima del video */}
            <div className="absolute right-0 bottom-[-20px] lg:left-0 lg:bottom-0 pointer-events-none z-0 max-w-[50%] sm:max-w-[40%] lg:max-w-[65%] opacity-60 blur-[1px]">
              <img 
                src={veneri} 
                alt="Dettaglio Veneri Sfondo" 
                className="w-full h-auto object-contain object-right-bottom lg:object-left-bottom"
              />
            </div>

            {/* Contenuto testuale sopraelevato rispetto all'immagine tramite z-10 */}
            <div className="relative z-10 space-y-6">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-orange-500 block">La gara di Parabita</span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none text-slate-950">
                 Scalata delle <br/><span className="text-orange-500 underline decoration-4 underline-offset-8">Veneri</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed italic font-medium pt-2">
                "Un rito che unisce il sudore degli atleti alla bellezza millenaria di Parabita."
              </p>
              <div className="space-y-4 text-slate-600 leading-relaxed text-base md:text-lg">
                <p>
                  La <strong className="text-slate-950">Scalata delle Veneri</strong> non è una semplice corsa, è un'esperienza sensoriale. Il percorso si snoda dal cuore pulsante del centro storico verso le vette della Serra, offrendo un mix unico di asfalto e paesaggi naturali.
                </p>
                <p>
                  Affronterai la salita che porta al Santuario, dove l'aria diventa più fresca e la vista si apre verso l'orizzonte. L'incitamento del pubblico locale ti darà la spinta necessaria per conquistare gli ultimi metri.
                </p>
              </div>
            </div>

          </div>

          {/* Video Interattivo (Destra) */}
          <div className="relative z-10 lg:col-span-7 w-full overflow-hidden rounded-[2.5rem] shadow-2xl border border-slate-200 bg-black">
            <video 
              src={video} 
              controls 
              autoPlay 
              muted 
              loop 
              className="w-full h-full object-cover aspect-[16/9]"
            >
              Il tuo browser non supporta il tag video.
            </video>
          </div>

        </div>
      </section>

      {/* === SEZIONE CAROSELLO FOTO COMMUNITY === */}
      <section className="pb-24 px-6 bg-slate-50 text-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-orange-500">Galleria Emozioni</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mt-2 text-slate-950">La Scalata in Immagini</h2>
            <div className="w-12 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="relative aspect-[16/9] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 group">
            <img 
              src={fotoGallery[currentFoto]} 
              alt={`Scalata Gallery ${currentFoto + 1}`} 
              className="w-full h-full object-cover transition-all duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

            {/* Frecce Navigazione */}
            <button 
              onClick={prevFoto}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 text-slate-950 hover:bg-orange-600 hover:text-white transition-all active:scale-95 md:opacity-0 group-hover:opacity-100 shadow-md"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextFoto}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 text-slate-950 hover:bg-orange-600 hover:text-white transition-all active:scale-95 md:opacity-0 group-hover:opacity-100 shadow-md"
            >
              <ChevronRight size={24} />
            </button>

            {/* Indicatori Lineari */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {fotoGallery.map((_, idx) => (
                <div 
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${currentFoto === idx ? 'bg-orange-500 w-8' : 'bg-white/40 w-2'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === DETTAGLI TECNICI CON IMMAGINE DI SFONDO === */}
      <section className="relative py-28 px-6 overflow-hidden bg-slate-950">
        {/* Sfondo in parallelo e overlay scuro */}
        <div className="absolute inset-0 z-0 bg-cover bg-fixed bg-center opacity-20" style={{ backgroundImage: `url(${vicinoSfondo})` }}></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950" />
        
        <div className="relative z-10 max-w-4xl mx-auto bg-slate-900/90 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl border border-white/10">
          <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-5">
              <Info size={24} className="text-orange-400" />
              <h4 className="text-2xl font-black uppercase tracking-tight">Specifiche Tecniche Gara</h4>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-8 font-medium text-base md:text-lg">
            <ul className="space-y-4 text-slate-300">
              <li className="flex gap-3 items-start"> 
                  <ChevronRight className="text-orange-500 shrink-0 mt-1" size={20} /> 
                  Percorso misto asfalto e sterrato panoramico
              </li>
              <li className="flex gap-3 items-start"> 
                  <ChevronRight className="text-orange-500 shrink-0 mt-1" size={20} /> 
                  Rifornimenti idrici ed energetici ogni 2.5 km
              </li>
            </ul>
            <ul className="space-y-4 text-slate-300">
              <li className="flex gap-3 items-start"> 
                  <ChevronRight className="text-orange-500 shrink-0 mt-1" size={20} /> 
                  Pacco gara esclusivo con maglia tecnica e prodotti locali
              </li>
              <li className="flex gap-3 items-start"> 
                  <ChevronRight className="text-orange-500 shrink-0 mt-1" size={20} /> 
                  Servizio spogliatoi, docce e deposito borse gratuito
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* === SEZIONE YOUTUBE === */}
      <section className="relative py-24 overflow-hidden border-t border-slate-100 bg-white">
        {/* Sfondo decorativo soft */}
        <div className="absolute inset-0 z-0 bg-cover bg-fixed bg-center opacity-10" style={{ backgroundImage: `url(${atmosferaSfondo})` }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-16 text-center md:text-left">
            <div className="bg-orange-600 p-3 rounded-2xl text-white shadow-lg shadow-orange-600/30 flex items-center justify-center">
               <Play size={24} fill="currentColor" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic text-slate-900">L'Atmosfera della <span className="text-orange-600">Scalata</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {youtubeVideos.map((video, index) => (
              <div key={index} className="group">
                <div className="relative w-full pb-[56.25%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-black transition-transform duration-500 group-hover:scale-[1.02]">
                  <iframe 
                    className="absolute top-0 left-0 w-full h-full" 
                    src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0`} 
                    title={video.title} 
                    frameBorder="0" 
                    allowFullScreen
                  ></iframe>
                </div>
                <h4 className="mt-6 text-center font-black uppercase tracking-tighter text-slate-800 italic group-hover:text-orange-600 transition-colors">
                  {video.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === CALL TO ACTION FINALE === */}
      <section className="py-24 px-6 bg-orange-50 border-t border-orange-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none text-slate-950">
            Non farti raccontare la <span className="text-orange-600 italic">storia</span>,<br /> scrivila insieme a noi.
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">
            <button className="w-full sm:w-auto bg-orange-600 text-white px-12 py-5 rounded-xl font-black uppercase tracking-widest text-xs md:text-sm hover:bg-orange-700 transition-all duration-300 shadow-xl shadow-orange-600/20 active:scale-95">
              Iscriviti Ora
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-5 rounded-xl font-black uppercase tracking-widest text-xs md:text-sm border border-slate-200 hover:bg-slate-50 transition-all duration-300 shadow-md active:scale-95">
              <Share2 size={18} /> Condividi evento
            </button>
          </div>

          <p className="mt-8 text-slate-500 font-black uppercase text-xs tracking-[0.15em]">
            ⚡ Posti limitati: max 500 atleti iscritti
          </p>
        </div>
      </section>

    </div>
  );
};

export default ScalataVeneri;