import React, { useState, useMemo } from 'react';
import { Search, Trophy } from 'lucide-react';

import Pierluigi from '../assets/PierluigiToma.png';
import Schiattino from '../assets/schiattino.jpeg';
import Lorenzo from '../assets/fototo.jpeg';
import Buffo from '../assets/buffo.png';
import stefanoSecli from '../assets/stefanoSecli.png';
import Fiorentino from '../assets/fiorentino.png';
import Giaffreda from '../assets/giaffreda.png';
import Camisa from '../assets/camisa.png';
import Bleve from '../assets/bleve1.png';
import Carmelo from '../assets/carmelo.png';
import Gatto from '../assets/gatto.png';
import Riccardo from '../assets/risultati/riccardo.png';
import Piera from '../assets/risultati/piera.png';

import AntonioLeopizzi from '../assets/atleti/AntonioLeopizzi.png';
import BiagioCarlino from '../assets/atleti/BiagioCarlino.png';
import BiagioCataldo from '../assets/atleti/BiagioCataldo.png';
import ClaudiaTempesta from '../assets/atleti/ClaudiaTempesta.png';
import CristinaPrimiceri from '../assets/atleti/CristinaPrimiceri.png';
import GianniGarzia from '../assets/atleti/GianniGarzia.png';
import GiovanniTornesello from '../assets/atleti/GiovanniTornesello.png';
import LuigiaCataldo from '../assets/atleti/LuigiaCataldo.png';
import LuigiSansone from '../assets/atleti/LuigiSansone.png';
import MassimoAntonaci from '../assets/atleti/MassimoAntonaci.png';
import PaolaZingarelli from '../assets/atleti/PaolaZingarelli.png';
import RiccardoTornesello from '../assets/atleti/RiccardoTornesello.png';
import TommasoNicoletti from '../assets/atleti/TommasoNicoletti.png';



const AtletiData = [
  { id: 1, nome: "Antonio", cognome: "Alibrando", genere: "Maschio", foto: "" },
  { id: 2, nome: "Massimo", cognome: "Antonaci", genere: "Maschio", foto: MassimoAntonaci },
  { id: 3, nome: "Rodolfo", cognome: "Antonucci", genere: "Maschio", foto: "" },
  { id: 4, nome: "Alberto", cognome: "Bianco", genere: "Maschio", foto: "" },
  { id: 5, nome: "Claudio", cognome: "Bray", genere: "Maschio", foto: "" },
  { id: 7, nome: "Gianluca", cognome: "Barbaro", genere: "Maschio", foto: "" },
  { id: 8, nome: "Maria Rita", cognome: "Buffo", genere: "Femmina", foto: Buffo },
  { id: 9, nome: "Oliviero", cognome: "Bove", genere: "Maschio", foto: "" },
  { id: 10, nome: "Rosaria", cognome: "Bleve", genere: "Femmina", foto: Bleve },
  { id: 11, nome: "Biagio", cognome: "Cataldo", genere: "Maschio", foto: BiagioCataldo },
  { id: 12, nome: "Andrea", cognome: "Contaldo", genere: "Maschio", foto: "" },
  { id: 13, nome: "Biagio", cognome: "Carlino", genere: "Maschio", foto: BiagioCarlino },
  { id: 14, nome: "Daniela", cognome: "Cataldo", genere: "Femmina", foto: "" },
  { id: 15, nome: "Daniele", cognome: "Cataldo", genere: "Maschio", foto: "" },
  { id: 16, nome: "Elena", cognome: "Coppola", genere: "Femmina", foto: "" },
  { id: 17, nome: "Emanuele", cognome: "Cataldi", genere: "Maschio", foto: "" },
  { id: 18, nome: "Fabio", cognome: "Cataldo", genere: "Maschio", foto: "" },
  { id: 19, nome: "Giovanni", cognome: "Cazzato", genere: "Maschio", foto: "" },
  { id: 20, nome: "Luciana", cognome: "Camisa", genere: "Femmina", foto: Camisa },
  { id: 21, nome: "Luigi", cognome: "Camisa", genere: "Femmina", foto: "" },
  { id: 22, nome: "Luigia", cognome: "Cataldo", genere: "Femmina", foto: LuigiaCataldo },
  { id: 23, nome: "Marco", cognome: "Cataldo", genere: "Maschio", foto: "" },
  { id: 24, nome: "Maria Claudia", cognome: "Costa", genere: "Femmina", foto: "" },
  { id: 25, nome: "Mario", cognome: "Cataldo", genere: "Maschio", foto: "" },
  { id: 26, nome: "Massimo", cognome: "Cataldi", genere: "Maschio", foto: "" },
  { id: 27, nome: "Pina", cognome: "Camisa", genere: "Femmina", foto: "" },
  { id: 28, nome: "Rosanna", cognome: "Cataldo", genere: "Femmina", foto: "" },
  { id: 29, nome: "Stefano", cognome: "Cataldo", genere: "Maschio", foto: "" },
  { id: 30, nome: "Vincenzo", cognome: "Cataldi", genere: "Maschio", foto: "" },
  { id: 31, nome: "Vincenzo", cognome: "Cataldo", genere: "Maschio", foto: "" },
  { id: 32, nome: "Carmelo", cognome: "De Matteis", genere: "Maschio", foto: Carmelo },
  { id: 33, nome: "Pasquale", cognome: "De Donno", genere: "Maschio", foto: "" },
  { id: 34, nome: "Patrizia", cognome: "D’Aprile", genere: "Femmina", foto: "" },
  { id: 35, nome: "Antonio", cognome: "Fiorentino", genere: "Maschio", foto: Fiorentino },
  { id: 36, nome: "Luigi", cognome: "Finolezzi", genere: "Maschio", foto: "" },
  { id: 37, nome: "Mauro", cognome: "Federico", genere: "Maschio", foto: "" },
  { id: 38, nome: "Riccardo", cognome: "Fiorenza", genere: "Maschio", foto: "" },
  { id: 39, nome: "Antonietta", cognome: "Gatto", genere: "Femmina", foto: Gatto },
  { id: 40, nome: "Gianni", cognome: "Garzia", genere: "Maschio", foto: GianniGarzia },
  { id: 41, nome: "Giulio", cognome: "Giaffreda", genere: "Maschio", foto: Giaffreda },
  { id: 42, nome: "Raffaele", cognome: "Gatto", genere: "Maschio", foto: "" },
  { id: 43, nome: "Giovanna", cognome: "Rizzello", genere: "Femmina", foto: "" },
  { id: 45, nome: "Stefano", cognome: "Greco", genere: "Maschio", foto: "" },
  { id: 46, nome: "Scoot", cognome: "Howe", genere: "Maschio", foto: "" },
  { id: 47, nome: "Antonio", cognome: "Leopizzi", genere: "Maschio", foto: AntonioLeopizzi },
  { id: 48, nome: "Enzo", cognome: "Leopizzi", genere: "Maschio", foto: "" },
  { id: 49, nome: "Lorenzo", cognome: "Leopizzi", genere: "Maschio", foto: "" },
  { id: 50, nome: "Mimmo", cognome: "Leopizzi", genere: "Maschio", foto: "" },
  { id: 51, nome: "Alessandro", cognome: "Mariano", genere: "Maschio", foto: "" },
  { id: 52, nome: "Andrea", cognome: "Marsano", genere: "Maschio", foto: "" },
  { id: 54, nome: "Antonio", cognome: "Margarito", genere: "Maschio", foto: "" },
  { id: 55, nome: "Carlo", cognome: "Milelli", genere: "Maschio", foto: "" },
  { id: 56, nome: "Giuseppe", cognome: "Marzano", genere: "Maschio", foto: "" },
  { id: 57, nome: "Marcello", cognome: "Margari", genere: "Maschio", foto: "" },
  { id: 58, nome: "Matteo", cognome: "Mazzotta", genere: "Maschio", foto: "" },
  { id: 59, nome: "Maurizio", cognome: "Marrella", foto: "" },
  { id: 60, nome: "Michele", cognome: "Maggio", genere: "Maschio", foto: "" },
  { id: 61, nome: "Michele", cognome: "Marra", genere: "Maschio", foto: "" },
  { id: 62, nome: "Mimino", cognome: "Martignano", genere: "Maschio", foto: "" },
  { id: 63, nome: "Tiziano", cognome: "Moscatello", genere: "Maschio", foto: "" },
  { id: 64, nome: "Luigi", cognome: "Nicoletti", genere: "Maschio", foto: "" },
  { id: 65, nome: "Antonio", cognome: "Notaro", genere: "Maschio", foto: "" },
  { id: 66, nome: "Pasquale", cognome: "Napoleone", genere: "Maschio", foto: "" },
  { id: 67, nome: "Tommaso", cognome: "Nicoletti", genere: "Maschio", foto: TommasoNicoletti },
  { id: 68, nome: "Giuseppe", cognome: "Provenzano", genere: "Maschio", foto: "" },
  { id: 69, nome: "Antonella", cognome: "Pellico", genere: "Femmina", foto: "" },
  { id: 70, nome: "Biagio", cognome: "Potenza", genere: "Maschio", foto: "" },
  { id: 71, nome: "Cristina", cognome: "Primiceri", genere: "Femmina", foto: "" },
  { id: 72, nome: "Fabiola", cognome: "Parlati", genere: "Femmina", foto: "" },
  { id: 73, nome: "Giovanni", cognome: "Patera", genere: "Maschio", foto: "" },
  { id: 74, nome: "Letizia", cognome: "Leopizzi", genere: "Femmina", foto: "" },
  { id: 75, nome: "Luigi", cognome: "Pasanisi", genere: "Maschio", foto: "" },
  { id: 76, nome: "Marianna", cognome: "Pasanisi", genere: "Femmina", foto: "" },
  { id: 77, nome: "Paola", cognome: "Zingarelli", genere: "Femmina", foto: PaolaZingarelli },
  { id: 78, nome: "Piera", cognome: "Pastore", genere: "Femmina", foto: Piera },
  { id: 79, nome: "Rosy", cognome: "Piccinno", genere: "Femmina", foto: "" },
  { id: 80, nome: "Stefano", cognome: "Provenzano", genere: "Maschio", foto: "" },
  { id: 81, nome: "Fernando", cognome: "Quarta", genere: "Maschio", foto: "" },
  { id: 82, nome: "Riccardo", cognome: "Tornesello", genere: "Maschio", foto: Riccardo },
  { id: 83, nome: "Antonio", cognome: "Ria", genere: "Maschio", foto: "" },
  { id: 84, nome: "Antonio", cognome: "Romano", genere: "Maschio", foto: "" },
  { id: 85, nome: "Carmelo", cognome: "Romano", genere: "Maschio", foto: "" },
  { id: 86, nome: "Francesco", cognome: "Romano", genere: "Maschio", foto: "" },
  { id: 87, nome: "Giuseppe", cognome: "Ruberto", genere: "Maschio", foto: "" },
  { id: 88, nome: "Giusy", cognome: "Romano Maggio", genere: "Femmina", foto: "" },
  { id: 89, nome: "Laura", cognome: "Rimo", genere: "Femmina", foto: "" },
  { id: 90, nome: "Mimma", cognome: "Ria", genere: "Femmina", foto: "" },
  { id: 91, nome: "Tommaso", cognome: "Romano", genere: "Maschio", foto: Lorenzo },
  { id: 92, nome: "Antonio", cognome: "Schiattino", genere: "Maschio", foto: "" },
  { id: 93, nome: "Carmelo", cognome: "Schirinzi", genere: "Maschio", foto: "" },
  { id: 94, nome: "Filippo", cognome: "Schiattino", genere: "Maschio", foto: "" },
  { id: 95, nome: "Francesca", cognome: "Sergi", genere: "Femmina", foto: "" },
  { id: 96, nome: "Luigi", cognome: "Sansone", genere: "Maschio", foto: LuigiSansone },
  { id: 97, nome: "Luigi", cognome: "Solidoro", genere: "Maschio", foto: "" },
  { id: 98, nome: "Maria Cristina", cognome: "Silvano", genere: "Femmina", foto: "" },
  { id: 99, nome: "Paola", cognome: "De Santis", genere: "Femmina", foto: "" },
  { id: 100, nome: "Raffaele", cognome: "Seclì", genere: "Maschio", foto: "" },
  { id: 102, nome: "Stefano", cognome: "Seclì", genere: "Maschio", foto: stefanoSecli },
  { id: 103, nome: "Tiziano", cognome: "Schirinzi", genere: "Maschio", foto: "" },
  { id: 104, nome: "Tommaso", cognome: "Sabato", genere: "Maschio", foto: "" },
  { id: 105, nome: "Pierluigi", cognome: "Toma", genere: "Maschio", foto: Pierluigi },
  { id: 106, nome: "Biagio", cognome: "Tedesco", genere: "Maschio", foto: "" },
  { id: 107, nome: "Biagio", cognome: "Tornesello", genere: "Maschio", foto: "" },
  { id: 108, nome: "Claudia", cognome: "Tempesta", genere: "Femmina", foto: ClaudiaTempesta },
  { id: 109, nome: "Giovanni", cognome: "Tornesello", genere: "Maschio", foto: GiovanniTornesello },
  { id: 110, nome: "Piero", cognome: "Tempesta", genere: "Maschio", foto: "" },
  { id: 111, nome: "Antonio", cognome: "Vitartali", genere: "Maschio", foto: "" },
  { id: 112, nome: "Marina", cognome: "Verardi", genere: "Femmina", foto: "" },
  { id: 113, nome: "Rosanna", cognome: "Venuti", genere: "Femmina", foto: "" },
  { id: 114, nome: "Carmine", cognome: "Negro", genere: "Maschio", foto: "" },
  { id: 115, nome: "Antonio", cognome: "Tornesello", genere: "Maschio", foto: "" },
  { id: 116, nome: "Mimino", cognome: "Barone", genere: "Maschio", foto: "" },
  { id: 117, nome: "Carmela", cognome: "Cataldo", genere: "Femmina", foto: "" },
  { id: 118, nome: "Lorenzo", cognome: "Leopizzi Jr", genere: "Maschio", foto: Lorenzo },
  { id: 119, nome: "Totò", cognome: "Leopizzi", genere: "Maschio", foto: "" },
];

const Album = () => {
  const [search, setSearch] = useState("");
  const [filtroGenere, setFiltroGenere] = useState("Tutti");

  const atletiFiltrati = useMemo(() => {
    return AtletiData.filter(atleta => {
      const fullNome = `${atleta.nome} ${atleta.cognome}`.toLowerCase();
      const matchNome = fullNome.includes(search.toLowerCase());
      const matchGenere = filtroGenere === "Tutti" || atleta.genere === filtroGenere;
      return matchNome && matchGenere;
    });
  }, [search, filtroGenere]);

  return (
    <div className="min-h-screen bg-[#020617] relative overflow-x-hidden font-sans">
      
      {/* === SFONDO DINAMICO ARANCIONE === */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-5" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30 L60 60 M0 60 L30 30 M30 0 L60 30 M0 30 L30 0' stroke='%23ea580c' stroke-width='1' fill='none' fill-rule='evenodd'/%3E%3C/svg%3E")` }}>
        </div>
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-orange-500/5 blur-[100px] rounded-full"></div>
      </div>

      <div className="relative z-10 pt-12 pb-20">
        
        {/* === HEADER === */}
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-orange-600 blur-2xl opacity-20 transform -rotate-3"></div>
            <h1 className="relative text-5xl md:text-8xl font-black text-white uppercase tracking-tighter italic">
              ALBUM <span className="text-orange-500 italic">FIGURINE</span>
            </h1>
            <div className="mt-2 bg-orange-600 text-slate-950 px-6 py-1 inline-block skew-x-[-12deg] font-black uppercase text-sm md:text-2xl shadow-xl shadow-orange-900/20">
              Podistica di Parabita
            </div>
          </div>
        </div>

        {/* === FILTRI === */}
        <div className="max-w-4xl mx-auto px-4 mb-16">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-500 transition-colors" size={20} />
              <input 
                type="text"
                placeholder="Cerca il tuo campione..."
                className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-xl border-2 border-white/10 rounded-2xl text-white font-bold focus:border-orange-500 transition-all outline-none"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <select 
              className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black uppercase text-xs border-2 border-white/10 outline-none hover:border-orange-500 cursor-pointer transition-all appearance-none"
              onChange={(e) => setFiltroGenere(e.target.value)}
            >
              <option value="Tutti">Tutti gli Atleti</option>
              <option value="Maschio">Uomini</option>
              <option value="Femmina">Donne</option>
            </select>
          </div>
        </div>

        {/* === GRIGLIA FIGURINE === */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-12">
            
            {atletiFiltrati.map((atleta) => (
              <div key={atleta.id} className="relative group perspective-1000">
                
                <div className="absolute inset-0 bg-black/60 rounded-2xl border-2 border-white/5 -m-2"></div>
                
                <div className="relative bg-white p-2 rounded-xl shadow-2xl transition-all duration-500 group-hover:rotate-[-4deg] group-hover:-translate-y-4 cursor-pointer">
                  
                  <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-slate-900 border-[3px] border-slate-100">
                    {atleta.foto ? (
                      <img 
                        src={atleta.foto} 
                        alt={`${atleta.nome} ${atleta.cognome}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-slate-800 text-slate-500 italic text-[10px] p-4 text-center">
                        <Trophy size={24} className="mb-2 opacity-20" />
                        Foto in arrivo
                      </div>
                    )}
                    
                    <div className="absolute bottom-2 right-2 bg-orange-600 backdrop-blur-md text-white text-[10px] px-2 py-0.5 rounded font-black">
                      #{String(atleta.id).padStart(3, '0')}
                    </div>
                  </div>

                  <div className="mt-4 px-1 pb-2">
                    <h3 className="mt-1 text-sm md:text-base font-black text-slate-900 uppercase leading-none truncate">
                      {atleta.nome} <span className="text-orange-600">{atleta.cognome}</span>
                    </h3>
                    <p className="text-[8px] text-slate-400 font-bold uppercase tracking-widest mt-1">Podistica Parabita</p>
                  </div>

                  {/* Effetto Riflesso Olografico Arancione */}
                  <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-[-100%] w-full h-[200%] bg-gradient-to-r from-transparent via-orange-400/20 to-transparent skew-x-[-20deg] group-hover:left-[100%] transition-all duration-1000"></div>
                  </div>
                </div>

                <div className="absolute -z-10 inset-0 bg-orange-600/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}

          </div>
        </div>

        {/* === FOOTER STATS === */}
        <div className="mt-24 max-w-xs mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-[#020617] p-6 rounded-3xl border border-white/10 text-center shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-2 opacity-5 group-hover:opacity-20 transition-opacity">
               <Trophy size={60} className="text-orange-500" />
            </div>
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Status Raccolta</p>
            <h4 className="text-white font-black text-3xl tracking-tighter">
              {atletiFiltrati.length} <span className="text-orange-500">/ {AtletiData.length}</span>
            </h4>
            
            <div className="mt-4 h-2 bg-white/5 rounded-full overflow-hidden">
               <div 
                 className="h-full bg-orange-600 transition-all duration-1000 ease-out" 
                 style={{ width: `${(atletiFiltrati.length / AtletiData.length) * 100}%` }}
               ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Album;