import React, { useRef, useState, useEffect } from 'react';
import VincenzoCataldo from '../assets/VincenzoCataldo.png';
import PierluigiToma from '../assets/PierluigiToma.png';
import AndreaMarsano from '../assets/AndreaMarsano.png';
import AntonioLeopizzi from '../assets/AntonioLeopizzi.png';
import AntonioMargarito from '../assets/AntonioMargarito.png';
import PieraPastore from '../assets/Piera.png';
import AntonioTornesello from '../assets/AntonioTornesello.jpeg';
import CataldoBiagio from '../assets/CataldoBiagio.png';
import ProvenzanoGiuseppe from '../assets/GiuseppeProvenzano.png';
import NicolettiLuigi from '../assets/Nicoletti.png';
import TommasoNicoletti from '../assets/TommasoNicoletti.png';
import FrancescoMauro from '../assets/FrancescoMauro.png';

const Team = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false); // Stato per monitorare il trascinamento attivo
  
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const staff = [
    { nome: "Antonio Tornesello", ruolo: "Presidente", img: AntonioTornesello },
    { nome: "Cataldo Biagio", ruolo: "Vice Presidente", img: CataldoBiagio },
    { nome: "Provenzano Giuseppe", ruolo: "Vicepresidente", img: ProvenzanoGiuseppe },
    { nome: "Cataldo Vincenzo", ruolo: "Consigliere", img: VincenzoCataldo },
    { nome: "Nicoletti Luigi", ruolo: "Collaboratore", img: NicolettiLuigi },
    { nome: "Toma Pierluigi", ruolo: "Segretario", img: PierluigiToma },
    { nome: "Marsano Andrea", ruolo: "Consigliere", img: AndreaMarsano },
    { nome: "Leopizzi Antonio", ruolo: "Presidente Onorario", img: AntonioLeopizzi },
    { nome: "Margarito Antonio", ruolo: "Tecnico Federale", img: AntonioMargarito },
    { nome: "Piera Pastore", ruolo: "Tecnico Federale", img: PieraPastore },
    { nome: "Tommaso Nicoletti", ruolo: "Consigliere", img: TommasoNicoletti },
    { nome: "Francesco Mauro", ruolo: "Medico sociale", img: FrancescoMauro },
  ];

  // Rilevamento preciso della card centrale
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const containerCenter = container.scrollLeft + container.offsetWidth / 2;
    
    let closestIndex = 0;
    let minDistance = Infinity;
    
    const cards = Array.from(container.children).filter(child => child.getAttribute('data-card') === 'true');

    cards.forEach((card, i) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(containerCenter - cardCenter);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = i;
      }
    });
    
    setActiveIndex(closestIndex);
  };

  // Scorrimento fluido con rotellina del mouse
  const handleWheel = (e) => {
    if (!scrollRef.current) return;
    e.preventDefault();
    // Rimuoviamo lo scroll-smooth temporaneamente per reattività immediata su rotellina
    scrollRef.current.style.scrollBehavior = 'auto';
    scrollRef.current.scrollLeft += e.deltaY * 1.2;
  };

  // Inizio Trascinamento Mouse
  const handleMouseDown = (e) => {
    isDown.current = true;
    setIsDragging(true); // Disattiva lo snap CSS
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.scrollBehavior = 'auto'; // Fluidità manuale senza ritardi
  };

  // Fine Trascinamento
  const handleMouseLeaveOrUp = () => {
    if (!isDown.current) return;
    isDown.current = false;
    setIsDragging(false); // Riattiva lo snap CSS per centrare la card vicina
    
    // Ripristina lo scorrimento magnetico armonioso
    if (scrollRef.current) {
      scrollRef.current.style.scrollBehavior = 'smooth';
      // Forza un piccolo ricalcolo per garantire l'aggancio istantaneo
      handleScroll();
    }
  };

  // Movimento del trascinamento
  const handleMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Moltiplicatore di velocità
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  useEffect(() => {
    const timeout = setTimeout(() => handleScroll(), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="bg-slate-950 py-16 md:py-24 overflow-hidden w-full font-sans border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Intestazione */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-orange-500 bg-orange-500/10 px-4 py-2 rounded-xl border border-orange-500/20">
            Il Direttivo
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mt-4 mb-3">
            IL NOSTRO <span className="text-orange-500 italic">TEAM</span>
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-4"></div>
          <p className="text-slate-400 font-medium text-sm md:text-base">
            I volti e le persone che guidano l'ASD Podistica Parabita.
          </p>
        </div>

        {/* CONTAINER SLIDER */}
        <div className="relative w-full">
          
          {/* Sfumature estetiche laterali */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-950 to-transparent z-40 hidden md:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-950 to-transparent z-40 hidden md:block" />

          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeaveOrUp}
            onMouseUp={handleMouseLeaveOrUp}
            onMouseMove={handleMouseMove}
            /* Gestiamo dinamicamente le classi snap in base allo stato di trascinamento */
            className={`flex overflow-x-auto gap-4 md:gap-6 pb-8 pt-4 scrollbar-none cursor-grab active:cursor-grabbing ${
              isDragging ? 'snap-none' : 'snap-x snap-mandatory scroll-smooth'
            }`}
          >
            {/* Cuscinetto spaziale iniziale */}
            <div className="shrink-0 w-[50vw] -ml-[110px] md:-ml-[120px]" pointerEvents="none" />

            {staff.map((membro, index) => {
              const isActive = index === activeIndex;

              return (
                <div 
                  key={index}
                  data-card="true"
                  className={`relative shrink-0 w-[220px] md:w-[240px] h-[300px] md:h-[340px] rounded-3xl overflow-hidden border transition-all duration-500 ease-out snap-center select-none flex flex-col justify-end p-5 ${
                    isActive 
                      ? 'bg-slate-900 border-orange-500 shadow-[0_0_30px_rgba(249,115,22,0.2)] scale-105 z-30 opacity-100' 
                      : 'bg-slate-900/60 border-white/5 scale-95 z-10 opacity-30 blur-[0.5px]'
                  }`}
                >
                  <img 
                    src={membro.img} 
                    alt={membro.nome} 
                    className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none object-top" 
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent z-10" />

                  <div className="relative z-20">
                    <span className="text-[9px] font-black uppercase tracking-[0.15em] text-orange-400 mb-1 block">
                      {membro.ruolo}
                    </span>
                    <h3 className="text-lg md:text-xl font-black uppercase text-white tracking-tight leading-tight">
                      {membro.nome}
                    </h3>
                  </div>
                </div>
              );
            })}

            {/* Cuscinetto spaziale finale */}
            <div className="shrink-0 w-[50vw] -mr-[110px] md:-mr-[120px]" pointerEvents="none" />
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-none::-webkit-scrollbar { display: none; }
        .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
}

export default Team;