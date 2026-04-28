import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Importa solo lo stile base di Swiper
import 'swiper/css';

import foto1 from '../assets/PierluigiToma.png';
import foto2 from '../assets/immagini_storiche/storia1.jpeg';
import foto3 from '../assets/podistica.png';
import foto4 from '../assets/piera.png';
import foto5 from '../assets/immagini_storiche/storia2.png'; 
import foto6 from '../assets/carosello/foto1.png';
import foto7 from '../assets/carosello/foto2.png';
import foto8 from '../assets/carosello/foto3.png';
import foto9 from '../assets/carosello/foto4.png';


const CaroselloImmagini = () => {
  const immagini = [
    { id: 1, src: foto1, alt: "Corsa 1" },
    { id: 2, src: foto2, alt: "Corsa 2" },
    { id: 3, src: foto4, alt: "Corsa 3" },
    { id: 4, src: foto3, alt: "Corsa 4" },
    { id: 6, src: foto6, alt: "Corsa 6" },
    { id: 7, src: foto7, alt: "Corsa 7" },
    { id: 8, src: foto8, alt: "Corsa 8" },
    { id: 9, src: foto9, alt: "Corsa 9" },
  ];

  return (
    <section className="w-full bg-white overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0} // Elimina lo spazio tra le foto
        slidesPerView={2} // 2 foto su mobile
        loop={true}
        speed={5000} // Velocità del movimento (più alto = più fluido)
        autoplay={{
          delay: 0, // Nessun ritardo tra uno scorrimento e l'altro
          disableOnInteraction: false,
        }}
        breakpoints={{
          // Tablet
          640: {
            slidesPerView: 3,
          },
          // Desktop
          1024: {
            slidesPerView: 5, // 5 foto su schermi grandi
          },
        }}
        className="w-full flex items-center linear-swiper"
      >
        {immagini.map((img) => (
          <SwiperSlide key={img.id}>
            <div className="relative aspect-square w-full overflow-hidden border-none">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CSS Necessario per lo scorrimento continuo e fluido */}
      <style dangerouslySetInnerHTML={{ __html: `
        .linear-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}} />
    </section>
  );
};

export default CaroselloImmagini;