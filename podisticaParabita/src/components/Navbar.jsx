import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Trophy, BarChart3, Star, Footprints, Info, MessageCircle, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const whatsappNumber = "393471922260";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Ciao! Vorrei iscrivermi alla Podistica Parabita, posso ricevere ulteriori informazioni?")}`;

  const navLinks = [
    { name: 'Home', href: '/', icon: <Home size={24} /> },
    { name: 'Risultati', href: '/risultati', icon: <BarChart3 size={24} /> },
    { name: 'Scalata delle Veneri', href: '/scalata', icon: <Star size={24} /> },
    { name: 'Sponsor', href: '/sponsor', icon: <Info size={24} /> },
    { name: 'Migliori Momenti', href: '/miglioriMomenti', icon: <Info size={24} /> },
    { name: 'Walking', href: '/walking', icon: <Footprints size={24} /> },
    { name: 'Curraturi', href: '/curraturi', icon: <Footprints size={24} /> }   
  ];

  return (
    <>
      {/* 1. BARRA SUPERIORE FISSA */}
      <nav className={`fixed top-0 left-0 right-0 h-20 z-[200] transition-all duration-300 ${
        isMenuOpen ? 'bg-slate-900 border-transparent' : 'bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
          
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="relative z-[210]">
            <div className={`text-xl font-black tracking-tighter leading-none ${isMenuOpen ? 'text-white' : 'text-blue-600'}`}>
              PODISTICA<br/>
              <span className={`${isMenuOpen ? 'text-slate-500' : 'text-slate-400'} text-sm font-light tracking-widest uppercase`}>Parabita</span>
            </div>
          </Link>

          <div className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="px-4 py-2 rounded-full text-sm font-bold text-slate-600 hover:text-blue-600 transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="xl:hidden flex items-center gap-3 relative z-[210]">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-3 rounded-2xl transition-all ${isMenuOpen ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-600'}`}
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          <div className="hidden lg:block">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-black uppercase tracking-wider shadow-lg shadow-blue-100">
              Iscriviti
            </a>
          </div>
        </div>
      </nav>

      {/* DISTANZIATORE: Occupa lo spazio fisico sotto la navbar fixed */}
      {!isMenuOpen && <div className="h-20 w-full flex-shrink-0"></div>}

      {/* 2. MENU MOBILE OVERLAY */}
      <div className={`fixed inset-0 z-[150] bg-slate-900 transition-transform duration-500 ease-in-out xl:hidden ${
        isMenuOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="h-full flex flex-col px-6 pt-28 pb-10 overflow-y-auto">
          
          <div className="flex-1 space-y-3">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                style={{ transitionDelay: `${index * 50}ms` }}
                className={`flex items-center justify-between p-5 rounded-[1.5rem] bg-white/5 border border-white/10 text-slate-200 transition-all duration-500 ${
                  isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                } active:bg-white/10`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-blue-500">
                    {link.icon}
                  </span>
                  <span className="text-xl font-black uppercase tracking-tight">{link.name}</span>
                </div>
                <ChevronRight size={20} className="opacity-20 text-white" />
              </Link>
            ))}
          </div>

          <div className={`mt-10 space-y-6 transition-all duration-700 delay-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
            <div className="h-px bg-white/10 w-full" />
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-green-500 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-center flex items-center justify-center gap-3 shadow-xl shadow-green-900/40 active:scale-95 transition-transform"
            >
              <MessageCircle size={24} />
              Scrivici su WhatsApp
            </a>
            <p className="text-center text-slate-500 text-[10px] font-bold tracking-widest uppercase italic">
              &copy; 2026 ASD Podistica Parabita
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;