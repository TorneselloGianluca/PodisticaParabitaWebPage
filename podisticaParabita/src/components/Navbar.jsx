import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Gare', href: '/gare' },
    { name: 'Risultati', href: '/risultati' },
    { name: 'Scalata delle Veneri 2026', href: '/scalata', highlight: true },
    { name: 'Sponsor', href: '/sponsor' },
    { name: 'Walking', href: '/walking' },
  ];

  return (
    <nav className="bg-white border-b border-slate-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
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
                className={`px-3 py-2 rounded-md text-sm font-bold transition-colors ${
                  link.highlight 
                  ? 'text-blue-600 bg-blue-50/50 hover:bg-blue-100/50' 
                  : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Pulsante Iscriviti */}
          <div className="hidden lg:flex items-center">
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-black hover:bg-blue-700 transition shadow-lg shadow-blue-200 uppercase tracking-wider">
              Iscriviti
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 p-2 hover:bg-slate-50 rounded-lg transition"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="xl:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-6 space-y-1 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-3 rounded-xl text-base font-bold ${
                link.highlight ? 'text-blue-600 bg-blue-50' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="px-4 pt-4">
              <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-black uppercase tracking-widest">
              Iscriviti Ora
              </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;