import React, { useState } from 'react';

const MagliaFigurina = ({ immagineFronte, immagineRetro, nomeAtleta }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="group perspective-1000 w-[280px] h-[400px] cursor-pointer mx-auto"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {/* Contenitore Rotante */}
      <div className={`relative w-full h-full transition-transform duration-700 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        
        {/* PARTE FRONTALE (Fronte Maglia) */}
        <div className="absolute inset-0 backface-hidden">
          <div className="w-full h-full bg-white rounded-[2rem] shadow-2xl border-4 border-slate-100 p-4 flex flex-col items-center justify-between">
             <div className="w-full h-[80%] rounded-xl overflow-hidden bg-slate-50 flex items-center justify-center">
                <img src={immagineFronte} alt="Fronte Maglia" className="w-full h-full object-contain" />
             </div>
             <div className="text-center mt-2">
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Divisa Ufficiale</p>
                <h3 className="font-black text-slate-900 uppercase tracking-tighter">{nomeAtleta}</h3>
             </div>
             <div className="text-[8px] text-slate-400 font-bold uppercase mt-1 italic">Tocca per girare</div>
          </div>
        </div>

        {/* PARTE POSTERIORE (Retro Maglia) */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className="w-full h-full bg-blue-600 rounded-[2rem] shadow-2xl border-4 border-white p-4 flex flex-col items-center justify-center text-white">
             <div className="w-full h-[80%] rounded-xl overflow-hidden bg-blue-700/50 flex items-center justify-center">
                <img src={immagineRetro} alt="Retro Maglia" className="w-full h-full object-contain" />
             </div>
             <div className="mt-4 text-center">
                <p className="font-black text-2xl uppercase tracking-tighter italic">Podistica</p>
                <p className="text-sm font-bold opacity-80 uppercase tracking-widest">Parabita 2026</p>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MagliaFigurina;