import React, { useRef } from 'react';
import { Trophy, Medal, Star, ArrowDown } from 'lucide-react';

const Classifica = () => {
  const rigaParabitaRef = useRef(null);

  const datiClassifica = [
    { pos: 1, squadra: "AVIS IN CORSA CONVERSANO", punti: 5265 },
    { pos: 2, squadra: "G.S.ATLETICA AMATORI CORATO", punti: 4899 },
    { pos: 3, squadra: "A.S. PODISTICA PARABITA", punti: 4749 },
    { pos: 4, squadra: "GR. POD.  A 13 ALBA TAURISANO", punti: 3985 },
    { pos: 5, squadra: "ATLETICA CAPO DI LEUCA", punti: 3893 },
    { pos: 6, squadra: "A.S.D. TRE CASALI", punti: 3681 },
    { pos: 7, squadra: "ALBEROBELLO RUNNING ASD", punti: 3646 },
    { pos: 8, squadra: "ASD AVIS MOLA RUNNING", punti: 3266 },
    { pos: 9, squadra: "A.S. ATLETICA CASTELLANA", punti: 3141 },
    { pos: 10, squadra: "ATLETICA CASALINI", punti: 3072 },
    { pos: 11, squadra: "BARLETTA SPORTIVA", punti: 2778 },
    { pos: 12, squadra: "BITETTO RUNNERS A.S.D.", punti: 2543 },
    { pos: 13, squadra: "A.S.D. PODISTICA SOLETUM", punti: 2325 },
    { pos: 14, squadra: "ATLETICAMENTE", punti: 1839 },
    { pos: 15, squadra: "A.S.D. ATLETICA CAROVIGNO", punti: 1838 },
    { pos: 16, squadra: "ATLETIC CLUB ALTAMURA", punti: 1824 },
    { pos: 17, squadra: "S.S. A.V.I.S.  SPORT NOVOLI", punti: 1553 },
    { pos: 18, squadra: "ATLETICA  MONOPOLI", punti: 1529 },
    { pos: 19, squadra: "A.S. AMATORI PUTIGNANO", punti: 1527 },
    { pos: 20, squadra: "NUOVA ATLETICA COPERTINO", punti: 1514 },
    { pos: 21, squadra: "PODISTICA  COPERTINO", punti: 1485 },
    { pos: 22, squadra: "FREE RUNNERS MOLFETTA", punti: 1458 },
    { pos: 23, squadra: "DORANDO PIETRI", punti: 1445 },
    { pos: 24, squadra: "G.S.P. III REGIONE AEREA BARI", punti: 1424 },
    { pos: 25, squadra: "ASD PODISTI CAMPI", punti: 1332 },
    { pos: 26, squadra: "ASD TERLIZZI SPORTING CLUB", punti: 1234 },
    { pos: 27, squadra: "A.S.D. GRAVINA FESTINA LENTE!", punti: 1233 },
    { pos: 28, squadra: "A.S.D. AMICI DI MARCO", punti: 1226 },
    { pos: 29, squadra: "AQQUANNVUE' TRAIL RUNNING", punti: 1211 },
    { pos: 30, squadra: "A.A.'E. MANZARI' CASAMASSIMA", punti: 1206 },
    { pos: 31, squadra: "ASD ATLETICA CONVERSANO", punti: 1190 },
    { pos: 32, squadra: "AMATORI CASTRIGNANO DE' GRECI", punti: 1124 },
    { pos: 33, squadra: "HAPPY RUNNERS ALTAMURA", punti: 1114 },
    { pos: 34, squadra: "A.P.D.TEAM SCARCIGLIA", punti: 1103 },
    { pos: 35, squadra: "CORRERE E' SALUTE MOTTOLA", punti: 1077 },
    { pos: 36, squadra: "ATLETICA SALENTO ARADEO", punti: 1067 },
    { pos: 37, squadra: "A.S.D. \"I BITLOSSI-MONTERUN\"", punti: 1049 },
    { pos: 38, squadra: "ATLETICA ADELFIA", punti: 1015 },
    { pos: 39, squadra: "A.S.D. ASOPICO RUNNING BARI", punti: 1009 },
    { pos: 40, squadra: "BODY ANGEL", punti: 1001 },
    { pos: 41, squadra: "A.S.D.  LA FENICE", punti: 1001 },
    { pos: 42, squadra: "RUNNERS DEL LEVANTE", punti: 996 },
    { pos: 43, squadra: "A.S. ATLETICA POLIGNANO", punti: 994 },
    { pos: 44, squadra: "A.S.D. MARATHON MASSAFRA", punti: 982 },
    { pos: 45, squadra: "AVIS MOLA RUNNING", punti: 903 },
    { pos: 46, squadra: "ATLETICA PRO CANOSA", punti: 893 },
    { pos: 47, squadra: "ASD NEW FITCENTER2.0", punti: 885 },
    { pos: 48, squadra: "BITONTO RUNNERS", punti: 827 },
    { pos: 49, squadra: "SARACENATLETICA", punti: 821 },
    { pos: 50, squadra: "LA MANDRA CALIMERA", punti: 814 },
    { pos: 51, squadra: "A.MARATONETI ANDRIESI", punti: 812 },
    { pos: 52, squadra: "A.S.D. TRANI MARATHON", punti: 811 },
    { pos: 53, squadra: "GPDM LECCE", punti: 799 },
    { pos: 54, squadra: "POLISPORT CICLO CLUB FASANO", punti: 778 },
    { pos: 55, squadra: "CASARUN ASD", punti: 763 },
    { pos: 56, squadra: "PODISTICA MAGLIESE", punti: 736 },
    { pos: 57, squadra: "A.S. DOF AMATORI TURI", punti: 696 },
    { pos: 58, squadra: "ATLETICA TOMMASO ASSI TRANI", punti: 690 },
    { pos: 59, squadra: "MURGIA MARATHON SANTERAMO", punti: 684 },
    { pos: 60, squadra: "CLUB CLUB CORRERE GALATINA", punti: 678 },
    { pos: 61, squadra: "PEDONE-RICCARDI BISCEGLIE", punti: 678 },
    { pos: 62, squadra: "ASD ATLETICA RACALE", punti: 647 },
    { pos: 63, squadra: "A.S.D. NADIR ON THE ROAD - PUT", punti: 633 },
    { pos: 64, squadra: "A.S.D. BISCEGLIE RUNNING", punti: 626 },
    { pos: 65, squadra: "A.S.D. ATLETICA BITRITTO", punti: 624 },
    { pos: 66, squadra: "A.S.D. P.U.C. SALENTO", punti: 621 },
    { pos: 67, squadra: "A.S.D. AMICI STRADA DEL TESORO", punti: 598 },
    { pos: 68, squadra: "G.POD. DUEMILA RUFFANO", punti: 597 },
    { pos: 69, squadra: "ATLETICA TOP RUNNERS LECCE", punti: 585 },
    { pos: 70, squadra: "A.S.D. MONTEDORO NOCI", punti: 578 },
    { pos: 71, squadra: "MARTINA FRANCA RUNNING A.S.D.", punti: 559 },
    { pos: 72, squadra: "ASD ATLETICA MESSAPICA", punti: 541 },
    { pos: 73, squadra: "TOP RUNNERS LATERZA", punti: 507 },
    { pos: 74, squadra: "TRIATHLON VALLE D'ITRIA ALBATROS", punti: 475 },
    { pos: 75, squadra: "A.S. ACTION RUNNING MONTERONI", punti: 474 },
    { pos: 76, squadra: "ACQUAMARINA PALESE", punti: 470 },
    { pos: 77, squadra: "ASD N.E.S.T.", punti: 468 },
    { pos: 78, squadra: "ATL. AMATORI CORIGLIANO", punti: 465 },
    { pos: 79, squadra: "GIOIA RUNNING A.S.D.", punti: 465 },
    { pos: 80, squadra: "G.S. ATHLOS MATERA", punti: 453 },
    { pos: 81, squadra: "BARI ROAD RUNNERS CLUB", punti: 447 },
    { pos: 82, squadra: "A.S.D. TEAM KM SPORT", punti: 437 },
    { pos: 83, squadra: "LA PIETRA", punti: 430 },
    { pos: 84, squadra: "ATLETICA SURBO", punti: 429 },
    { pos: 85, squadra: "ASD NUOVA ATLETICA TARANTO", punti: 392 },
    { pos: 86, squadra: "A.S.D. OLIMPIA GROTTAGLIE", punti: 386 },
    { pos: 87, squadra: "ASD RUNNING CORSANO", punti: 383 },
    { pos: 88, squadra: "GALATLETICA DREAM TEAM", punti: 381 },
    { pos: 89, squadra: "POL. 'D. PIETRI' GRAVINA", punti: 379 },
    { pos: 90, squadra: "ASD FELICI DI CORRERE BARLETTA", punti: 377 },
    { pos: 91, squadra: "LUCANI FREE RUNNERS", punti: 375 },
    { pos: 92, squadra: "RUNNERS GINOSA", punti: 366 },
    { pos: 93, squadra: "A.S. ATLET. TAVIANO 97 ONLUS", punti: 363 },
    { pos: 94, squadra: "BITONTO SPORTIVA", punti: 362 },
    { pos: 95, squadra: "ATLETICA CORREREPOLLINO", punti: 359 },
    { pos: 96, squadra: "ASD METALFER POD. BRIENZA 2000", punti: 353 },
    { pos: 97, squadra: "GM SPORT ASD", punti: 343 },
    { pos: 98, squadra: "BUTTAZZO RUNNERS", punti: 338 },
    { pos: 99, squadra: "DREAM TEAM BARI", punti: 337 },
    { pos: 100, squadra: "ASD RUTIGLIANO ROAD RUNNERS", punti: 336 },
    { pos: 101, squadra: "ATLETICA CEGLIE MESSAPICA", punti: 336 },
    { pos: 102, squadra: "ASD AQQUANNVUE' TRAIL RUNNING", punti: 333 },
    { pos: 103, squadra: "AMICI FONTANA ROMANO TRIGGIANO", punti: 332 },
    { pos: 104, squadra: "RUNNING PEOPLE NOICATTARO", punti: 317 },
    { pos: 105, squadra: "ATLETICA CEGLIE MESSAPICA", punti: 311 },
    { pos: 106, squadra: "ASDNOCINCORSA", punti: 300 },
    { pos: 107, squadra: "ASD ATLETICA LEVERANO", punti: 299 },
    { pos: 108, squadra: "A.S.D. 101 RUNNERS GALLIPOLI", punti: 298 },
    { pos: 109, squadra: "MARATHON CS", punti: 296 },
    { pos: 110, squadra: "A.S.D. GRECIA SALENTINA", punti: 293 },
    { pos: 111, squadra: "ASD RUNNERS FOR EMERGENCY", punti: 288 },
    { pos: 112, squadra: "A.S.D. TRE CASALI", punti: 272 },
    { pos: 113, squadra: "A.D. SPORT A.S.D.", punti: 262 },
    { pos: 114, squadra: "AMATORI ATL. ACQUAVIVA", punti: 261 },
    { pos: 115, squadra: "ATLETICA CONVERSANO", punti: 254 },
    { pos: 116, squadra: "ALTERATLETICA LOCOROTONDO", punti: 251 },
    { pos: 117, squadra: "A.S. PODISTICA TUGLIE", punti: 250 },
    { pos: 118, squadra: "TRIATHLON VALLE D'ITRIA", punti: 247 },
    { pos: 119, squadra: "CUS BARI", punti: 247 },
    { pos: 120, squadra: "A.S.D. PODISTICA GROTTAGLIE", punti: 246 },
    { pos: 121, squadra: "A.S.D. PODISTI ALTO SANNIO", punti: 243 },
    { pos: 122, squadra: "ATLETICA TALSANO", punti: 242 },
    { pos: 123, squadra: "ATLETICA GROTTAGLIE", punti: 240 },
    { pos: 124, squadra: "ASD RUNNING CASSANO VENTI18", punti: 235 },
    { pos: 125, squadra: "A.S.D. A.N.B. FIAMME CREMISI", punti: 231 },
    { pos: 126, squadra: "US ATLETICA S GIOVANNI ROTONDO", punti: 224 },
    { pos: 127, squadra: "POLISPORTIVA BPP", punti: 223 },
    { pos: 128, squadra: "MARATHON CLUB MINERVINO", punti: 219 },
    { pos: 129, squadra: "ASD RUNNINGZEN", punti: 215 },
    { pos: 130, squadra: "SALENTO IN CORSA VEGLIE", punti: 212 },
    { pos: 131, squadra: "STRARUNNERS BARI", punti: 208 },
    { pos: 132, squadra: "A.S.D. ATL. PADRE PIO S.G.R.", punti: 199 },
    { pos: 133, squadra: "A.S.D. ATLETICA GALLIPOLI", punti: 171 },
    { pos: 134, squadra: "A.S. ATL SPRINT  BARLETTA", punti: 151 },
    { pos: 135, squadra: "ASD MARATHON COSENZA", punti: 149 },
    { pos: 136, squadra: "A.S. TRANI MARATHON", punti: 149 },
    { pos: 137, squadra: "ASD MISTERCAMP CASTELFRENTANO", punti: 146 },
    { pos: 138, squadra: "A.S.D. URBAN RUNNER", punti: 139 },
    { pos: 139, squadra: "TEAM NUOVA PODISTICA MASSAFRA", punti: 136 },
    { pos: 140, squadra: "TREPUZZI RUNNING A.S.D.", punti: 135 },
    { pos: 141, squadra: "ASD MARATHON CL. ARIANO IRPINO", punti: 126 },
    { pos: 142, squadra: "GSBR", punti: 125 },
    { pos: 143, squadra: "RUNNING CLUB TORREMAGGIORE", punti: 122 },
    { pos: 144, squadra: "A.S. QUELLI DELLA PINETA", punti: 121 },
    { pos: 145, squadra: "ASD  ATLETICA SAN MICHELE SALENTINO", punti: 121 },
    { pos: 146, squadra: "PODISTICA AMATORI POTENZA", punti: 120 },
    { pos: 147, squadra: "C.A.SPORTLEADER CORRERE E' VIT", punti: 119 },
    { pos: 148, squadra: "A.S.D. I BITLOSSI-MONTERUN", punti: 119 },
    { pos: 149, squadra: "BERGAMO STARS ATLETICA", punti: 117 },
    { pos: 150, squadra: "BRAMEA VULTUR RUNNERS", punti: 117 },
    { pos: 151, squadra: "A.S. ATLETICA LATIANO", punti: 116 },
    { pos: 152, squadra: "OLIMPO LATIANO", punti: 115 },
    { pos: 153, squadra: "PR FUTURA ATLETICA CASAMASSIMA", punti: 115 },
    { pos: 154, squadra: "A.S. TEAM FRANCAVILLA", punti: 115 },
    { pos: 155, squadra: "A.S.D. RUNNING ACADEMY LUCERA", punti: 114 },
    { pos: 156, squadra: "ASD SPORTIVAMENTE - MAGLIE", punti: 113 },
    { pos: 157, squadra: "S.S.D. A.R.L. DYNAMYK FITNESS", punti: 112 },
    { pos: 158, squadra: "ABACUS VILLA BALDASSARRI", punti: 112 },
    { pos: 159, squadra: "TEAM SEMPREDICORSA ASD", punti: 111 },
    { pos: 160, squadra: "A.S.D. CAVALLI DI RAZZA", punti: 110 },
    { pos: 161, squadra: "BIO AMBRA NEW AGE", punti: 108 },
    { pos: 162, squadra: "SMART RUNNERS GRAVINA", punti: 103 },
    { pos: 163, squadra: "A.S.D. FOGGIA RUNNING", punti: 100 },
    { pos: 164, squadra: "A.S.D. RISORGIVE APS", punti: 98 },
    { pos: 165, squadra: "SPORT RUNNING PORTOSELVAGGIO", punti: 96 },
    { pos: 166, squadra: "TARANTO SPORTIVA", punti: 95 },
    { pos: 167, squadra: "ASD SAN GIUSEPPE MADONNELLA", punti: 92 },
    { pos: 168, squadra: "A.S.D. ROAD RUNNING MOLFETTA", punti: 91 },
    { pos: 169, squadra: "A.S.D. RUN & FUN SAN SEVERO", punti: 90 },
    { pos: 170, squadra: "IKKOS ATLETI TARANTO A.S.D.", punti: 89 },
    { pos: 171, squadra: "A.S PODISTICA TARAS", punti: 83 }
  ];

  const renderIconaPosizione = (pos) => {
    if (pos === 1) return <Trophy className="text-amber-500 w-5 h-5" />;
    if (pos === 2) return <Medal className="text-slate-400 w-5 h-5" />;
    if (pos === 3) return <Medal className="text-amber-700 w-5 h-5" />;
    return <span className="text-xs font-bold text-slate-400">#{pos}</span>;
  };

  return (
    <section className="py-20 bg-white w-full font-sans"> {/* RIPRISTINATO SFONDO SEZIONE BIANCO */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Intestazione Minimal Profonda */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-1.5 text-orange-600 text-xs font-black uppercase tracking-widest mb-2">
              <Star size={12} fill="currentColor" /> Live Campionato PugliaTrail 2026
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-slate-900">
              RANKING <span className="text-orange-600 italic">SOCIETÀ</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider">
            Scorri per vedere tutte le posizioni <ArrowDown size={14} className="animate-bounce text-orange-500" />
          </div>
        </div>

        {/* La sola scatola della classifica rimane scura in stile Dashboard Sportiva */}
        <div className="bg-slate-900 rounded-[2rem] border border-slate-800 shadow-2xl overflow-hidden flex flex-col">
          
          {/* Header Statico e Fisso */}
          <div className="grid grid-cols-12 bg-slate-950 text-slate-400 px-6 py-4.5 text-xs font-black uppercase tracking-widest border-b border-white/5">
            <div className="col-span-2 text-center">Pos</div>
            <div className="col-span-7 sm:col-span-8">Club / Società</div>
            <div className="col-span-3 sm:col-span-2 text-right">Punti</div>
          </div>

          {/* CONTENITORE AD SCORRIMENTO INTERNO MOUSE (Altezza fissa) */}
          <div className="max-h-[520px] overflow-y-auto divide-y divide-white/5 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
            {datiClassifica.map((riga) => {
              const isParabita = riga.squadra === "A.S. PODISTICA PARABITA";

              return (
                <div 
                  key={riga.pos}
                  ref={isParabita ? rigaParabitaRef : null}
                  className={`grid grid-cols-12 items-center px-6 py-4 transition-all duration-150 ${
                    isParabita 
                      ? 'bg-orange-600/20 text-white shadow-inner relative z-15 border-y-2 border-orange-500 py-5.5' 
                      : 'hover:bg-white/5 text-slate-300 bg-slate-900/40'
                  }`}
                >
                  {/* Posizione */}
                  <div className="col-span-2 flex justify-center items-center">
                    {isParabita ? (
                      <div className="bg-orange-600 text-white px-2.5 py-1 rounded-lg font-black text-xs uppercase tracking-wider shadow-sm flex items-center gap-1 border border-orange-400/30">
                        Top 3
                      </div>
                    ) : (
                      renderIconaPosizione(riga.pos)
                    )}
                  </div>

                  {/* Nome Squadra */}
                  <div className="col-span-7 sm:col-span-8 truncate font-bold text-sm sm:text-base">
                    {isParabita ? (
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                        <span className="text-xl font-black uppercase tracking-tight text-orange-400">
                          {riga.squadra}
                        </span>
                        <span className="inline-block bg-orange-500/10 text-orange-400 border border-orange-500/20 text-[9px] font-black tracking-widest uppercase px-2 py-0.5 rounded-md w-max">
                          La nostra squadra ⭐
                        </span>
                      </div>
                    ) : (
                      <span className="font-semibold">{riga.squadra}</span>
                    )}
                  </div>

                  {/* Punteggio */}
                  <div className={`col-span-3 sm:col-span-2 text-right font-black text-sm sm:text-base ${isParabita ? 'text-2xl text-white' : 'text-slate-400'}`}>
                    {riga.punti.toLocaleString('it-IT')}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer Informativo Scuro */}
          <div className="px-6 py-3 bg-slate-950 border-t border-white/5 text-center text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            Totale Società Competitrici: {datiClassifica.length}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Classifica;