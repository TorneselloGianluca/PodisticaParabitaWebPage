import React from 'react';
import { Award } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import storia1 from '../assets/immagini_storiche/storia1.jpeg';
import storia2 from '../assets/immagini_storiche/storia2.png';
import storia3 from '../assets/immagini_storiche/storia3.png';

const Informazioni = () => {
  const fotoStoriche = [
    { url: storia1, caption: "Gara storica anni '80 - Le origini del mito" },
    { url: storia3, caption: "Scalata delle Veneri 2015" },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-[1500px] mx-auto">
        
        {/* Container principale con divisione 5/12 e 7/12 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-slate-50 rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
          
          {/* 1. SEZIONE TESTO (5/12) */}
          <div className="lg:col-span-5 p-12 md:p-20 flex flex-col justify-center space-y-10 bg-white">
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="h-px w-12 bg-blue-600"></span>
                <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs">La nostra identità</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-[0.85]">
                Storia & <br />
                <span className="text-blue-600">Passione</span>
              </h1>
            </div>

            <div className="space-y-6 text-slate-600 leading-relaxed text-xl">
              <p className="font-medium">
                Dal 1980, la <span className="text-slate-900 font-bold border-b-2 border-blue-500/20">Podistica Parabita</span> scrive pagine di sport e vita nel cuore del Salento.
              </p>
              <p className="text-lg">
                Nata dalla visione di pochi appassionati, la nostra associazione è diventata un simbolo di costanza e dedizione, unendo generazioni di runner sotto un unico traguardo.
              </p>
            </div>

            <div className="flex gap-10 pt-4">
               <div className="flex flex-col">
                  <span className="text-4xl font-black text-slate-900 leading-none">45</span>
                  <span className="text-xs font-bold text-slate-400 uppercase mt-2 tracking-widest">Anni di Storia</span>
               </div>
               <div className="flex flex-col">
                  <span className="text-4xl font-black text-slate-900 leading-none">150+</span>
                  <span className="text-xs font-bold text-slate-400 uppercase mt-2 tracking-widest">Atleti Attivi</span>
               </div>
            </div>
          </div>

          {/* 2. SEZIONE IMMAGINI STORICHE (7/12) con EFFETTO COLORE AL PASSAGGIO */}
          <div className="lg:col-span-7 h-[500px] lg:h-[700px] relative group border-l border-slate-100 cursor-crosshair">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              className="h-full w-full"
            >
              {fotoStoriche.map((foto, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-full w-full overflow-hidden">
                    {/* 
                        L'immagine ha 'grayscale' di base. 
                        Quando l'utente passa il mouse sulla sezione (group-hover), 
                        la classe 'grayscale-0' la riporta ai colori originali.
                    */}
                    <img 
                      src={foto.url} 
                      alt={foto.caption} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out transform group-hover:scale-105" 
                    />
                    
                    {/* Overlay scuro per far risaltare la didascalia */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-1000"></div>
                    
                    {/* Didascalia */}
                    <div className="absolute bottom-12 left-12 right-12 z-20">
                      <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-2xl border border-white/20 transform -rotate-1 group-hover:rotate-0 transition-transform duration-500">
                        <div className="bg-blue-600 p-2 rounded-lg text-white">
                          <Award size={24} />
                        </div>
                        <p className="text-slate-900 font-bold text-lg md:text-xl italic">
                          {foto.caption}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Informazioni;