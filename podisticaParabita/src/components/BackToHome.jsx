import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const BackToHome = () => {
  const location = useLocation();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // 1. Gestione apertura/chiusura Menu Navbar
    const handleMenuToggle = (e) => {
      setIsNavbarOpen(e.detail.isMenuOpen);
    };

    // 2. Gestione Scroll: scompare se scendiamo oltre 50px
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('menuToggle', handleMenuToggle);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('menuToggle', handleMenuToggle);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Nasconde se: 
  // - Siamo in Home Page
  // - Il menu Navbar è aperto
  // - L'utente ha scrollato verso il basso
  if (location.pathname === '/' || isNavbarOpen || isScrolled) return null;

  return (
    <div className="fixed top-24 left-4 z-[9999] animate-in fade-in slide-in-from-left-4 duration-500">
      <Link 
        to="/" 
        className="
          flex items-center gap-2 
          bg-orange-600 backdrop-blur-md 
          text-white px-5 py-2.5 
          rounded-full text-[10px] font-black uppercase tracking-[0.2em] 
          border border-white/30 
          hover:bg-orange-700 hover:scale-105 
          transition-all duration-300 shadow-xl shadow-orange-900/20
        "
      >
        <svg 
          width="14" 
          height="14" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6"/>
        </svg>
        Home Page
      </Link>
    </div>
  );
};

export default BackToHome;