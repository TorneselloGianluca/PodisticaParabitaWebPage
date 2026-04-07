import React from 'react';
import { 
  Calendar, 
  Clock, 
  Mountain, 
  Trophy, 
  Info, 
  ChevronRight, 
  Share2, 
  Map as MapIcon 
} from 'lucide-react';

import BannerScalata from '../assets/podistica.png'; 
import MappaPercorso from '../assets/mappa.png'; // Foto del percorso
import Contatti from '../components/Contatti';


import video from '../assets/video2.mp4'; // Video del percorso

const ScalataVeneri = () => {
  return (
    <div className="min-h-screen bg-white">
      
      {/* === HERO SECTION === */}
      <section 
        className="relative h-[70vh] flex items-center justify-center bg-slate-900 bg-cover bg-fixed bg-center"
        style={{ backgroundImage: `url(${BannerScalata})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 text-center px-6">
          <span className="bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest shadow-xl">
            Edizione 2026
          </span>
          <h1 className="text-6xl md:text-9xl font-black text-white uppercase italic tracking-tighter mt-6 drop-shadow-2xl">
            Scalata delle <br /> <span className="text-orange-500">Veneri</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mt-6 font-medium max-w-3xl mx-auto drop-shadow">
            La corsa più suggestiva del Salento. 
          </p>
        </div>



        {/* Badge Info Rapide */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-full max-w-4xl px-6">
          <div className="bg-white rounded-3xl shadow-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 border border-slate-100">
            <div className="text-center border-r border-slate-100 last:border-0">
              <Calendar className="mx-auto text-orange-500 mb-2" />
              <p className="text-xs uppercase font-bold text-slate-400">Data</p>
              <p className="font-black text-slate-900">14 Giugno 2026</p>
            </div>
            <div className="text-center border-r border-slate-100 last:border-0">
              <Clock className="mx-auto text-orange-500 mb-2" />
              <p className="text-xs uppercase font-bold text-slate-400">Partenza</p>
              <p className="font-black text-slate-900">Ore 18:30</p>
            </div>
            <div className="text-center border-r border-slate-100 last:border-0">
              <Mountain className="mx-auto text-orange-500 mb-2" />
              <p className="text-xs uppercase font-bold text-slate-400">Distanza</p>
              <p className="font-black text-slate-900">10.5 KM</p>
            </div>
            <div className="text-center">
              <Trophy className="mx-auto text-orange-500 mb-2" />
              <p className="text-xs uppercase font-bold text-slate-400">Difficoltà</p>
              <p className="font-black text-orange-600">Media/Alta</p>
            </div>
          </div>
        </div>
      </section>


        
      {/* === SEZIONE DESCRIZIONE E MAPPA === */}
      <section className="pt-32 pb-16 px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Testo (Sinistra) */}
          <div className="space-y-8">
            <div className="text-left mb-10">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-none">
                La Sfida della <br/><span className="text-orange-500 underline decoration-4 underline-offset-8">Serra</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed italic font-medium">
                "Un rito che unisce il sudore degli atleti alla bellezza millenaria di Parabita."
              </p>
            </div>

            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                La <strong>Scalata delle Veneri</strong> non è una semplice corsa, è un'esperienza sensoriale. Il percorso si snoda dal cuore pulsante del centro storico verso le vette della Serra, offrendo un mix unico di asfalto e paesaggi naturali.
              </p>
              <p>
                Affronterai la salita che porta al Santuario, dove l'aria diventa più fresca e la vista si apre verso l'orizzonte. L'incitamento del pubblico locale ti darà la spinta necessaria per conquistare gli ultimi metri.
              </p>
            </div>
          </div>

          {/* Mappa (Destra - Dimensioni ridotte) */}
      
        <div className="max-w-4xl mx-auto overflow-hidden rounded-[3rem] shadow-2xl">
            <video 
            src={video} 
            controls 
            autoPlay 
            muted 
            loop 
            className="w-full h-auto"
            >
            Il tuo browser non supporta il tag video.
            </video>
        </div>
     

        </div>
      </section>

      {/* === DETTAGLI TECNICI === */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-[3rem] p-8 md:p-12 text-white shadow-2xl transform hover:scale-[1.01] transition-transform">
          <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
              <Info size={24} className="text-orange-400" />
              <h4 className="text-2xl font-black uppercase tracking-tight">Specifiche Gara</h4>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-8 font-medium">
            <ul className="space-y-4 text-slate-300">
              <li className="flex gap-3 items-start"> 
                  <ChevronRight className="text-orange-500 shrink-0 mt-1" size={20} /> 
                  Percorso misto asfalto e sterrato panoramico
              </li>
              <li className="flex gap-3 items-start"> 
                  <ChevronRight className="text-orange-500 shrink-0 mt-1" size={20} /> 
                  Rifornimenti idrici ogni 2.5 km
              </li>
            </ul>
            <ul className="space-y-4 text-slate-300">
              <li className="flex gap-3 items-start"> 
                  <ChevronRight className="text-orange-500 shrink-0 mt-1" size={20} /> 
                  Pacco gara con maglia tecnica e prodotti locali
              </li>
              <li className="flex gap-3 items-start"> 
                  <ChevronRight className="text-orange-500 shrink-0 mt-1" size={20} /> 
                  Servizio docce e deposito borse gratuito
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* === CALL TO ACTION === */}
      <section className="py-24 px-8 bg-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">
            Non farti raccontare la <span className="text-orange-600 italic">storia</span>,<br className="hidden md:block"/> scrivila insieme a noi.
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
            <button className="bg-orange-600 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-orange-700 hover:scale-105 transition shadow-2xl shadow-orange-200">
              Iscriviti Ora
            </button>
            <button className="flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-5 rounded-2xl font-black uppercase tracking-widest border border-slate-200 hover:bg-slate-50 transition shadow-lg">
              <Share2 size={20} /> Condividi evento
            </button>
          </div>
          <p className="mt-10 text-slate-500 font-bold uppercase text-sm tracking-widest italic opacity-75">
            Posti limitati: max 500 atleti iscritti
          </p>
        </div>
      </section>

    </div>
  );
};

export default ScalataVeneri;