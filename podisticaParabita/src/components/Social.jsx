import React, { useState, useRef } from 'react';
import { Award, ChevronRight } from 'lucide-react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

const Social = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const socialLinks = [
    {
      name: "Instagram",
      handle: "@podisticaparabita",
      desc: "Foto, video e aggiornamenti live dalle gare.",
      href: "https://www.instagram.com/podisticaparabita",
      cardBg: "bg-gradient-to-br from-[#ffdc80] via-[#ff3377] to-[#800080]",
      borderColor: "border-[#ff3377]/20",
      titleColor: "text-white",
      handleColor: "text-white",
      handleBg: "bg-black/15",
      descColor: "text-white/90",
      iconColor: "text-[#dc2743]",
      btnBg: "bg-white",
      btnTextColor: "text-[#dc2743]",
      icon: <FaInstagram size={30} />,
      btnLabel: "Vedi Profilo"
    },
    {
      name: "Facebook",
      handle: "Podistica Parabita",
      desc: "Community, eventi e notizie sulla squadra.",
      href: "https://www.facebook.com/podisticaparabita",
      cardBg: "bg-gradient-to-br from-[#4488ff] to-[#0044cc]",
      borderColor: "border-[#4488ff]/20",
      titleColor: "text-white",
      handleColor: "text-white",
      handleBg: "bg-black/15",
      descColor: "text-white/90",
      iconColor: "text-[#1877F2]",
      btnBg: "bg-white",
      btnTextColor: "text-[#1877F2]",
      icon: <FaFacebookF size={26} />,
      btnLabel: "Visita Pagina"
    },
    {
      name: "Pagina FIDAL",
      handle: "Codice LE605",
      desc: "Risultati ufficiali e scheda tecnica federale.",
      href: "https://www.fidal.it/societa/A.S.D.-PODISTICA-PARABITA/LE605",
      cardBg: "bg-gradient-to-br from-slate-900 via-blue-950 to-black",
      borderColor: "border-blue-900/50",
      titleColor: "text-white",
      handleColor: "text-white",
      handleBg: "bg-blue-600/30",
      descColor: "text-slate-300",
      iconColor: "text-slate-900",
      btnBg: "bg-blue-600",
      btnTextColor: "text-white",
      icon: <Award size={30} />,
      btnLabel: "Scheda Tecnica"
    }
  ];

  const handleScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const width = e.target.offsetWidth;
    const index = Math.round(scrollLeft / (width * 0.85)); // Calcolo basato sulla larghezza mobile
    if (index !== activeIndex) setActiveIndex(index);
  };

  return (
    /* Ridotto il padding inferiore (pb-6 / pb-12) */
    <section className="bg-white pt-16 pb-6 md:pt-24 md:pb-12 px-4 md:px-6 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="mb-10 text-center md:text-left">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-blue-600"></span>
            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px]">Community</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter leading-none">
            Seguici sulle varie <span className="text-blue-600">piattaforme</span>
          </h2>
        </div>

        <div className="relative">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto pb-6 gap-6 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible scrollbar-hide pr-10 md:pr-0"
          >
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`relative group min-w-[85vw] md:min-w-0 h-[400px] rounded-[3rem] ${social.cardBg} border ${social.borderColor} shadow-2xl shadow-slate-300/60 snap-center shrink-0 transition-all duration-500 md:hover:-translate-y-3`}
              >
                <div className="relative h-full p-10 flex flex-col items-center md:items-start z-10">
                  <div className="mb-8 p-5 rounded-2xl bg-white shadow-xl text-slate-900">
                    <div className={social.iconColor}>{social.icon}</div>
                  </div>

                  <div className="space-y-2 text-center md:text-left">
                    <h3 className={`text-2xl font-black uppercase tracking-tighter leading-none ${social.titleColor}`}>
                      {social.name}
                    </h3>
                    <div className={`inline-block px-3 py-1 rounded-full ${social.handleBg} ${social.handleColor} text-[10px] font-black tracking-widest uppercase`}>
                      {social.handle}
                    </div>
                  </div>

                  <p className={`mt-6 ${social.descColor} text-sm font-semibold text-center md:text-left italic`}>
                    "{social.desc}"
                  </p>

                  <div className="mt-auto w-full">
                    <div className={`flex items-center justify-between p-5 rounded-2xl ${social.btnBg} ${social.btnTextColor} shadow-lg shadow-black/10`}>
                      <span className="text-[11px] font-black uppercase tracking-[0.2em]">
                        {social.btnLabel}
                      </span>
                      <ChevronRight size={18} />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Indicatori accostati di più alle card (mt-2) */}
          <div className="flex md:hidden justify-center items-center gap-3 mt-2">
            {socialLinks.map((_, index) => (
              <div 
                key={index}
                className={`transition-all duration-300 rounded-full ${
                  activeIndex === index 
                    ? "w-10 h-1.5 bg-blue-600" 
                    : "w-1.5 h-1.5 bg-slate-200"
                }`}
              />
            ))}
          </div>

          <div className="md:hidden text-center mt-3">
             <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">
               {activeIndex + 1} / {socialLinks.length}
             </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;