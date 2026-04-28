import React from 'react';
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

const Team = () => {
  const staff = [
    { nome: "Antonio Tornesello", ruolo: "Presidente", img: AntonioTornesello },
    { nome: "Cataldo Biagio", ruolo: "Vice Presidente", img: CataldoBiagio },
    { nome: "Provenzano Giuseppe", ruolo: "Vicepresidente", img: ProvenzanoGiuseppe },
    { nome: "Cataldo Vincenzo", ruolo: "Consigliere", img: VincenzoCataldo },
    { nome: "Nicoletti Luigi", ruolo: "Consigliere", img: NicolettiLuigi },
    { nome: "Toma Pierluigi", ruolo: "Segretario", img: PierluigiToma },
    { nome: "Marsano Andrea", ruolo: "Consigliere", img: AndreaMarsano },
    { nome: "Leopizzi Antonio", ruolo: "Presidente Onorario", img: AntonioLeopizzi },
    { nome: "Margarito Antonio", ruolo: "Tecnico Federale", img: AntonioMargarito },
    { nome: "Piera Pastore", ruolo: "Tecnico Federale", img: PieraPastore },
  ];

  return (
    <div className="bg-slate-900 py-20 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Testo Laterale */}
          <div className="lg:col-span-4 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase">
              Il Nostro <br className="hidden lg:block"/> <span className="text-blue-500">Team</span>
            </h2>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-400">
              Non ci unisce solo un pettorale, ma ogni singolo chilometro percorso insieme sotto il sole del Salento. Corriamo per superare i nostri limiti e condividere la gioia del traguardo.
            </p>
          </div>

          {/* Griglia Membri: 1 colonna su mobile, 2 su tablet/desktop */}
          <div className="lg:col-span-8">
            <ul role="list" className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {staff.map((membro, index) => (
                <li key={index} className="flex items-center gap-x-6 bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <img 
                    src={membro.img} 
                    alt={membro.nome} 
                    className="h-16 w-16 md:h-20 md:w-20 rounded-full object-cover border-2 border-blue-500/30" 
                  />
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-white tracking-tight">{membro.nome}</h3>
                    <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest">{membro.ruolo}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Team;