import React from 'react';
import { Award } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import storia1 from '../assets/immagini_storiche/storia1.jpeg';
import storia3 from '../assets/immagini_storiche/storia3.png';
import storia4 from '../assets/immagini_storiche/storia4.png';

const Informazioni = () => {
  const fotoStoriche = [
    { url: storia1, caption: "Gara storica anni '80 - Le origini del mito" },
    { url: storia3, caption: "Scalata delle Veneri 2015" },
    { url: storia4, caption: "Podistica Parabita in gara - Anni '90" },
  ];

  return (
    <section className="py-12 md:py-16 px-4 md:px-6 bg-white">
      <div className="max-w-[1500px] mx-auto">
        
        {/* Container principale: rounded ridotto su mobile per non "mangiare" spazio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-slate-50 rounded-[2rem] md:rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
          
          {/* 1. SEZIONE TESTO: Padding ridotto drasticamente su mobile */}
          <div className="lg:col-span-5 p-8 md:p-16 lg:p-20 flex flex-col justify-center bg-white order-2 lg:order-1">
            <div className="space-y-6 md:space-y-10">
              <div>
                <div className="inline-flex items-center gap-3 mb-4 md:mb-6">
                  <span className="h-px w-8 md:w-12 bg-blue-600"></span>
                  <span className="text-blue-600 font-black uppercase tracking-[0.2em] text-[10px] md:text-xs">La nostra identità</span>
                </div>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-[0.9] lg:leading-[0.85]">
                  Storia & <br />
                  <span className="text-blue-600">Passione</span>
                </h2>
              </div>

              <div className="space-y-4 md:space-y-6 text-slate-600 leading-relaxed text-base md:text-xl">
                <p className="font-medium text-slate-900">
                  Dal 1980, la <span className="border-b-2 border-blue-500/20">Podistica Parabita</span> scrive pagine di sport e vita nel Salento.
                </p>
                <p className="text-sm md:text-lg">
                  Nata dalla visione di pochi appassionati, la nostra associazione è diventata un simbolo di costanza, unendo generazioni di runner.
                </p>
              </div>

              <div className="flex gap-8 md:gap-10 pt-4">
                 <div className="flex flex-col">
                    <span className="text-3xl md:text-4xl font-black text-slate-900 leading-none">45</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase mt-2 tracking-widest">Anni di Storia</span>
                 </div>
                 <div className="flex flex-col">
                    <span className="text-3xl md:text-4xl font-black text-slate-900 leading-none">150+</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase mt-2 tracking-widest">Atleti Attivi</span>
                 </div>
              </div>
            </div>
          </div>

          {/* 2. SEZIONE IMMAGINI: Altezza ridotta su mobile per visibilità */}
          <div className="lg:col-span-7 h-[350px] md:h-[500px] lg:h-[700px] relative group border-b lg:border-l border-slate-100 order-1 lg:order-2">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              navigation={false} // Rimosse frecce su mobile per pulizia
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000 }}
              className="h-full w-full"
            >
              {fotoStoriche.map((foto, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-full w-full overflow-hidden">
                    {/* Grayscale rimosso su mobile (lg:grayscale) per far vedere subito i colori */}
                    <img 
                      src={foto.url} 
                      alt={foto.caption} 
                      className="w-full h-full object-cover lg:grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out transform scale-105 group-hover:scale-110" 
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-black/20 lg:group-hover:bg-transparent transition-all"></div>
                    
                    {/* Didascalia: ridimensionata e posizionata meglio per mobile */}
                    <div className="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 z-20">
                      <div className="inline-flex items-center gap-3 bg-white/95 backdrop-blur-md p-3 md:p-5 rounded-xl md:rounded-2xl shadow-2xl border border-white/20">
                        <div className="bg-blue-600 p-1.5 md:p-2 rounded-lg text-white shrink-0">
                          <Award size={18} />
                        </div>
                        <p className="text-slate-900 font-bold text-xs md:text-xl italic line-clamp-1 md:line-clamp-none">
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