import React from 'react';
import { PROFESSORS } from '../constants';

const Faculty: React.FC = () => {
  return (
    <section id="claustro" className="py-24 bg-brand-navy-dark relative overflow-hidden scroll-mt-32">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl text-white mt-4 mb-6 italic">Claustro Académico</h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto mb-10"></div>
          <p className="text-brand-gold-light text-xl md:text-2xl max-w-3xl mx-auto font-serif italic leading-relaxed">
            "Líderes que transforman la industria del lujo comparten su visión y experiencia."
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16 max-w-7xl mx-auto">
          {PROFESSORS.map((prof, index) => {
             const CardContent = () => (
                <>
                  <div className="relative inline-block mb-6 group-hover:scale-105 transition-transform duration-500">
                    <div className="absolute inset-0 rounded-full border border-brand-gold/20 scale-110 group-hover:scale-100 transition-transform duration-500"></div>
                    <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-brand-gold/30 group-hover:border-brand-gold transition-colors duration-500 relative z-10 bg-brand-navy shadow-2xl">
                      <img 
                        src={prof.image} 
                        alt={prof.name} 
                        className="w-full h-full object-cover filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700"
                      />
                    </div>
                  </div>
                  
                  <h3 className="font-serif text-xl text-white mb-2 transition-colors group-hover:text-brand-gold">{prof.name}</h3>
                  <div className="h-0.5 w-6 bg-brand-gold mx-auto mb-3"></div>
                  <p className="text-brand-gold text-[10px] font-black uppercase tracking-widest mb-1">{prof.role}</p>
                  <p className="text-gray-400 text-xs font-serif italic">{prof.company}</p>
                </>
             );

             return (
                <div key={index} className="group text-center">
                  {prof.linkedin ? (
                    <a href={prof.linkedin} target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
                        <CardContent />
                    </a>
                  ) : (
                    <div className="block">
                        <CardContent />
                    </div>
                  )}
                </div>
             );
          })}
        </div>
        
        {/* Bloque del Máster */}
        <div className="mt-32 pt-20 border-t border-white/10">
            <div id="master" className="max-w-6xl mx-auto relative scroll-mt-32">
                <div className="absolute -inset-4 bg-brand-gold/20 rounded-sm blur-2xl opacity-30"></div>
                <div className="relative p-12 md:p-20 bg-brand-navy-dark border-2 border-brand-gold rounded-sm shadow-[0_30px_60px_-12px_rgba(0,0,0,0.8)]">
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-brand-gold text-brand-navy px-12 py-1.5 mb-10 rounded-full">
                            <span className="text-[11px] font-black tracking-[0.4em] uppercase">Ecosistema Académico IELujo</span>
                        </div>
                        <p className="text-white text-xl md:text-3xl leading-relaxed font-serif mb-12 max-w-5xl">
                            El <span className="text-brand-gold font-bold">Diplomado Luxury Management</span> forma parte del <span className="text-brand-gold-light italic underline decoration-brand-gold/30 underline-offset-8">Máster en Creación y Gestión de Marcas de Lujo</span> junto con los diplomados 
                            <br className="hidden md:block" />
                            <span className="text-brand-gold font-bold"> Creación de Marcas de Lujo y Procesos de Luxurización (30 mayo 2026)</span> y 
                            <span className="text-brand-gold font-bold"> Luxury Sales (5 de Septiembre 2026)</span>.
                        </p>
                        <div className="w-24 h-px bg-brand-gold/50 mb-10"></div>
                        <div className="bg-brand-gold/5 p-8 md:p-12 border border-brand-gold/30 rounded-sm backdrop-blur-sm">
                            <p className="text-gray-200 text-lg md:text-2xl leading-relaxed font-light">
                                Cada diplomado otorga una <span className="text-brand-gold font-bold">certificación independiente</span> y al cursar los 3 se obtiene añadidamente el título:
                            </p>
                            <span className="text-brand-gold-light font-serif italic text-4xl md:text-6xl block mt-8 drop-shadow-[0_2px_10px_rgba(197,160,89,0.3)]">
                                Máster en Creación y Gestión de Marcas de Lujo
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Faculty;