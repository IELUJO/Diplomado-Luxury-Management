
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Programa', href: '#plan-estudios' },
    { name: 'Claustro', href: '#claustro' },
    { name: 'Contacto', href: '#inscribete-hoy' },
  ];

  const masterUrl = "https://educacioncontinua.anahuac.mx/products/master-en-creacion-y-gestion-de-marcas-de-lujo?variant=51760858038582";
  const brandUrl = "https://www.ielujo.com";

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: { name: string, href: string }) => {
    if (link.href.startsWith('#')) {
      e.preventDefault();
      
      if (link.name === 'Inicio') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const targetId = link.href.substring(1);
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-brand-navy shadow-2xl py-3 border-b border-brand-gold/20' 
          : 'bg-brand-navy/90 md:bg-brand-navy/60 backdrop-blur-xl py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo Area */}
        <a 
          href={brandUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-3 group"
        >
            <img 
              src="https://www.ielujo.com/wp-content/uploads/2025/12/0a0233b6-e5e5-4399-80ff-a83af1012adc.png" 
              alt="IELujo" 
              className={`transition-all duration-300 object-contain drop-shadow-2xl ${isScrolled ? 'h-8 md:h-10' : 'h-10 md:h-12'}`}
            />
            <div className="flex flex-col border-l border-white/30 pl-3">
              <span className="text-[8px] md:text-[10px] tracking-[0.15em] md:tracking-[0.2em] uppercase font-black text-white leading-none mb-0.5">
                INSTITUTO EUROPEO
              </span>
              <span className="text-[8px] md:text-[10px] tracking-[0.15em] md:tracking-[0.2em] uppercase font-black text-white leading-none">
                DEL LUJO - IELujo
              </span>
            </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link)}
              className="text-[11px] font-black uppercase tracking-[0.25em] text-white hover:text-brand-gold transition-all duration-300 relative group/link"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover/link:w-full"></span>
            </a>
          ))}
          <a 
            href={masterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-gold hover:bg-white hover:text-brand-navy text-white text-[10px] font-black uppercase tracking-[0.2em] px-8 py-3 rounded-sm transition-all duration-500 shadow-xl border border-brand-gold"
          >
            MÁSTER
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <img 
            src="https://www.ielujo.com/wp-content/uploads/2025/12/Logo-Qnahuac-Mexico-sin-fondo-c.png" 
            alt="Anáhuac" 
            className="h-8 w-auto brightness-110"
          />
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-brand-gold transition-colors p-2"
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Secondary Brand Logo (Desktop) */}
        <div className="hidden md:block">
             <img 
               src="https://www.ielujo.com/wp-content/uploads/2025/12/Logo-Qnahuac-Mexico-sin-fondo-c.png" 
               alt="Anáhuac" 
               className={`transition-all duration-300 object-contain brightness-110 ${isScrolled ? 'h-8' : 'h-10'}`}
             />
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-brand-navy border-t border-brand-gold/20 transition-all duration-500 overflow-hidden shadow-2xl ${
          isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col p-10 gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link)}
              className="text-lg font-black uppercase tracking-[0.2em] text-white hover:text-brand-gold transition-colors border-b border-white/10 pb-4"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={masterUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="bg-brand-gold text-white text-center text-sm font-black uppercase tracking-[0.2em] py-5 mt-4 shadow-2xl"
          >
            MÁSTER
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
