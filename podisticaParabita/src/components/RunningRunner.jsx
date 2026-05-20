import React from 'react';

const RunningRunner = () => {
  return (
    <div className="w-full bg-slate-950 border-y border-white/5 py-4 overflow-hidden relative h-20 flex items-center shadow-inner">
      
      {/* Container dell'atleta in corsa */}
      <div className="absolute animate-run-across bottom-1">
        
        {/* SVG ATLETA IN CORSA (Busto inclinato in avanti) */}
        <svg 
          className="w-12 h-12 text-orange-500 fill-current animate-body-bounce" 
          viewBox="0 0 100 100" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Testa (Spostata in avanti rispetto al baricentro) */}
          <circle cx="62" cy="15" r="6.5" />
          
          {/* Busto/Collo inclinato in avanti di circa 15 gradi */}
          <path d="M58 22 C54 34, 46 44, 42 54" stroke="currentColor" strokeWidth="6.5" strokeLinecap="round" fill="none" />
          
          {/* Braccio Sinistro (Sullo sfondo, movimento alternato) */}
          <path d="M54 24" stroke="currentColor" strokeWidth="5" strokeLinecap="round" fill="none" className="animate-run-arm-left" />
          
          {/* Gamba Sinistra (Sullo sfondo) */}
          <path d="M42 54" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" fill="none" className="animate-run-leg-left" />
          
          {/* Gamba Destra (In primo piano) */}
          <path d="M42 54" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" fill="none" className="animate-run-leg-right" />
          
          {/* Braccio Destro (In primo piano, gomito piegato a 90° tipico della corsa) */}
          <path d="M54 24" stroke="currentColor" strokeWidth="5" strokeLinecap="round" fill="none" className="animate-run-arm-right" />
        </svg>

      </div>

      {/* MOTORE GRAFICO DELLA CORSA COMPLETA */}
      <style dangerouslySetInnerHTML={{__html: `
        /* 1. Spostamento orizzontale lungo lo schermo */
        @keyframes runAcross {
          0% { transform: translateX(-10vw); }
          100% { transform: translateX(105vw); }
        }
        .animate-run-across {
          animation: runAcross 14s linear infinite; /* Leggermente più veloce per simulare la corsa */
        }

        /* 2. Fase di Volo (Il corpo si solleva da terra a ogni falcata e ricade) */
        @keyframes bodyBounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-7px); } /* Fase di volo: stacco netto dal terreno */
        }
        .animate-body-bounce {
          animation: bodyBounce 0.35s ease-in-out infinite alternate;
        }

        /* 3. Movimento Gamba Destra (Falcata ampia con ginocchio alto e richiamo dietro) */
        @keyframes runLegRight {
          0%   { d: path("M42 54 Q60 62, 70 85"); }   /* Spinta a terra dietro */
          25%  { d: path("M42 54 Q38 68, 52 75"); }   /* Richiamo: ginocchio piegato dietro, piede alto */
          50%  { d: path("M42 54 Q44 60, 64 62"); }   /* Avanzamento: ginocchio alto in avanti */
          75%  { d: path("M42 54 Q56 68, 58 85"); }   /* Appoggio: la gamba scende per toccare terra */
          100% { d: path("M42 54 Q60 62, 70 85"); }
        }

        /* 4. Movimento Gamba Sinistra (In opposizione simmetrica alla destra) */
        @keyframes runLegLeft {
          0%   { d: path("M42 54 Q44 60, 64 62"); }   /* Avanzamento */
          25%  { d: path("M42 54 Q56 68, 58 85"); }   /* Appoggio */
          50%  { d: path("M42 54 Q60 62, 70 85"); }   /* Spinta */
          75%  { d: path("M42 54 Q38 68, 52 75"); }   /* Richiamo */
          100% { d: path("M42 54 Q44 60, 64 62"); }
        }

        /* 5. Braccio Destro (Oscillazione decisa con gomito piegato) */
        @keyframes runArmRight {
          0%, 100% { d: path("M54 24 Q40 32, 36 46"); } /* Braccio dietro */
          50%      { d: path("M54 24 Q68 26, 74 14"); } /* Braccio avanti vicino al petto */
        }

        /* 6. Braccio Sinistro (In opposizione al braccio destro) */
        @keyframes runArmLeft {
          0%, 100% { d: path("M54 24 Q68 26, 74 14"); } /* Braccio avanti */
          50%      { d: path("M54 24 Q40 32, 36 46"); } /* Braccio dietro */
        }

        /* Assegnazione delle animazioni ai singoli pezzi del corpo */
        .animate-run-leg-right { animation: runLegRight 0.7s linear infinite; }
        .animate-run-leg-left  { animation: runLegLeft 0.7s linear infinite; }
        .animate-run-arm-right { animation: runArmRight 0.7s ease-in-out infinite; }
        .animate-run-arm-left  { animation: runArmLeft 0.7s ease-in-out infinite; }
      `}} />
    </div>
  );
};

export default RunningRunner;