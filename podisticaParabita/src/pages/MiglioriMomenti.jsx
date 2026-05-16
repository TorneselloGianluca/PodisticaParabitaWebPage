import React from 'react';
import Video from '../assets/video1.mp4';

import foto1 from '../assets/carosello/foto1.png';
import foto2 from '../assets/carosello/foto2.png';
import foto3 from '../assets/carosello/foto3.png';
import foto4 from '../assets/carosello/foto4.png';
import foto5 from '../assets/immagini_storiche/storia1.jpeg';
import foto6 from '../assets/immagini_storiche/storia2.png';
import foto7 from '../assets/immagini_storiche/storia3.png';
import foto8 from '../assets/immagini_storiche/storia4.png';
import foto9 from '../assets/walking/walking1.png';
import foto10 from '../assets/walking/walking2.png';
import foto11 from '../assets/walking/walking3.png';
import foto12 from '../assets/walking/walking4.png';

const MiglioriMomenti = () => {

  const fotoGalleria = [
    { id: 1, url: foto1, size: 'large' },
    { id: 2, url: foto2, size: 'small' },
    { id: 3, url: foto3, size: 'small' },
    { id: 4, url: foto4, size: 'small' },
    { id: 5, url: foto5, size: 'large' },
    { id: 6, url: foto6, size: 'small' },
    { id: 7, url: foto7, size: 'medium' },
    { id: 8, url: foto8, size: 'medium' },
    { id: 9, url: foto9, size: 'small' },
    { id: 11, url: foto11, size: 'small' },
    { id: 12, url: foto12, size: 'medium' }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* === HERO SECTION === */}
      <section className="py-6 md:py-12 px-3 md:px-8">
        <div className="max-w-7xl mx-auto relative h-[400px] md:h-[700px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover object-top scale-110 -translate-y-6 md:-translate-y-10"
          >
            <source src={Video} type="video/mp4" />
          </video>
          
          <div className="absolute inset-0 bg-black/60 md:bg-black/40"></div>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-4xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.8] mb-4">
              Migliori <br /> 
              <span className="text-blue-500 drop-shadow-lg">Momenti</span>
            </h1>
            <div className="w-12 h-1 bg-blue-500 mb-4 md:hidden"></div>
            <p className="text-white/90 uppercase tracking-[0.2em] font-black text-[10px] md:text-sm">
              L'essenza della nostra corsa
            </p>
          </div>
        </div>
      </section>

      {/* === GRIGLIA FOTOGRAFICA === */}
      <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 grid-flow-row-dense">
          
          {fotoGalleria.map((foto) => (
            <div 
              key={foto.id}
              className={`
                relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-lg bg-slate-200 group
                ${foto.size === 'large' ? 'col-span-2 row-span-2 h-[450px] md:h-[700px]' : 'h-[200px] md:h-[330px]'}
                ${foto.size === 'medium' ? 'col-span-2 md:col-span-1 h-[250px] md:h-[330px]' : ''}
              `}
            >
              <img 
                src={foto.url} 
                alt="Podistica Parabita"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  e.target.src = "https://placehold.co/600x800/0047FF/FFFFFF?text=Podistica+Parabita";
                }}
              />
            </div>
          ))}

        </div>
      </section>

    </div>
  );
};

export default MiglioriMomenti;