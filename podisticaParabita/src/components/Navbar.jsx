import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Trophy, BarChart3, Star, Footprints, Info, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Impedisce lo scroll della pagina quando il menu mobile è aperto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const whatsappNumber = "393471922260";
  const messaggioPredefinito = encodeURIComponent(
    "Ciao! Vorrei iscrivermi alla Podistica Parabita, posso ricevere ulteriori informazioni?"
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${messaggioPredefinito}`;

  const navLinks = [
    { name: 'Home', href: '/', icon: <Home size={20} /> },
    { name: 'Gare', href: '/gare', icon: <Trophy size={20} /> },
    { name: 'Risultati', href: '/risultati', icon: <BarChart3 size={20} /> },
    { name: 'Scalata delle Veneri', href: '/scalata', highlight: true, icon: <Star size={20} /> },
    { name: 'Sponsor', href: '/sponsor', icon: <Info size={20} /> },
    { name: 'Walking', href: '/walking', icon: <Footprints size={20} /> },
    { name: 'Curraturi', href: '/curraturia', icon: <Footprints size={20} /> }   
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-[100] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0 z-[110]">
            <div className="text-xl font-black tracking-tighter text-blue-600 leading-none">
              PODISTICA<br/>
              <span className="text-slate-400 text-sm font-light tracking-widest">PARABITA</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                  link.highlight 
                  ? 'text-blue-600 bg-blue-50 hover:bg-blue-100' 
                  : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Pulsante Iscriviti (Desktop) */}
          <div className="hidden lg:flex items-center">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-black hover:bg-blue-700 transition shadow-lg shadow-blue-200 uppercase tracking-wider"
            >
              <MessageCircle size={18} />
              Iscriviti
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden flex items-center z-[110]">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-3 rounded-full transition-all ${isMenuOpen ? 'bg-slate-100 text-blue-600' : 'text-slate-600 bg-slate-50'}`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-[105] transition-all duration-500 ease-in-out xl:hidden ${
        isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        <div className="flex flex-col h-full pt-24 pb-10 px-6">
          
          {/* Links Mobile */}
          <div className="flex-1 space-y-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                style={{ transitionDelay: `${index * 50}ms` }}
                className={`flex items-center gap-4 px-6 py-4 rounded-2xl text-xl font-black uppercase tracking-tight transition-all ${
                  isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                } ${
                  link.highlight ? 'bg-blue-600 text-white shadow-xl shadow-blue-200' : 'bg-slate-50 text-slate-800 active:bg-slate-100'
                }`}
              >
                <span className={link.highlight ? 'text-white' : 'text-blue-600'}>
                  {link.icon}
                </span>
                {link.name}
              </Link>
            ))}
          </div>

          {/* Sezione Inferiore Mobile (Contatti/Social) */}
          <div className={`space-y-6 transition-all duration-700 delay-300 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="h-px bg-slate-100 w-full" />
            <p className="text-center text-slate-400 text-sm font-medium uppercase tracking-widest">Contattaci per iscriverti</p>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-green-500 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-center flex items-center justify-center gap-3 shadow-xl shadow-green-100 active:scale-95 transition-transform"
            >
              <MessageCircle size={24} />
              Scrivici su WhatsApp
            </a>
            
            <footer className="text-center text-slate-300 text-xs font-bold">
              &copy; 2026 PODISTICA PARABITA
            </footer>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;