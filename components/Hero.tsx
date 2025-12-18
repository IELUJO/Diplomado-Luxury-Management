import React from 'react';
import { PROGRAM_INFO } from '../constants';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-start md:justify-center overflow-hidden pt-64 md:pt-20 pb-12">
      {/* Background Image with High Contrast Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://www.ielujo.com/wp-content/uploads/2025/12/IMG_20240413_112303-scaled.jpg" 
          alt="Luxury Education Background" 
          className="w-full h-full object-cover animate-fade-in scale-105"
        />
        {/* Darker overlay for better text readability */}
        <div className="absolute inset-0 bg-brand-navy/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-brand-navy/30 opacity-90"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center text-white relative">
        <div className="animate-fade-in-up flex flex-col items-center">
          {/* Top Logos - Extra spacing to guarantee visibility under fixed header and device notch */}
          <div className="flex justify-center items-center gap-4 md:gap-8 mb-8 md:mb-12 mt-4 md:mt-0">
             <img 
               src="https://www.ielujo.com/wp-content/uploads/2025/12/0a0233b6-e5e5-4399-80ff-a83af1012adc.png" 
               alt="IELujo" 
               className="h-14 md:h-24 w-auto object-contain drop-shadow-lg hover:scale-105 transition-transform duration-500"
             />
             <div className="h-8 md:h-12 w-px bg-white/20"></div>
             <img 
               src="https://www.ielujo.com/wp-content/uploads/2025/12/Logo-Qnahuac-Mexico-sin-fondo-c.png" 
               alt="Universidad Anáhuac" 
               className="h-12 md:h-20 w-auto object-contain drop-shadow-lg hover:scale-105 transition-transform duration-500" 
             />
          </div>

          {/* Prominent Generation Badge */}
          <div className="inline-block mb-6 md:mb-8 px-6 md:px-8 py-2 md:py-3 bg-brand-gold/20 backdrop-blur-md border border-brand-gold/50 rounded-sm">
            <h3 className="text-brand-gold font-black tracking-[0.3em] md:tracking-[0.5em] uppercase text-xs md:text-xl">
              {PROGRAM_INFO.generation}
            </h3>
          </div>
          
          <h1 className="font-serif text-3xl md:text-8xl font-medium mb-6 md:mb-10 leading-tight text-shadow-lg">
            Diplomado <br/>
            <span className="italic text-white">
              Luxury Management
            </span>
          </h1>

          {/* Info Grid - More compact on mobile */}
          <div className="w-full max-w-3xl mx-auto border-t border-b border-white/10 py-4 md:py-8 mb-8 md:mb-12">
             <div className="grid grid-cols-3 gap-2 md:gap-8 text-center divide-x divide-white/10">
                <div className="px-1 md:px-4">
                    <p className="text-brand-gold text-[8px] md:text-[10px] uppercase tracking-widest mb-1 md:mb-2 font-black">Inicio</p>
                    <p className="font-serif text-sm md:text-2xl whitespace-nowrap">7 marzo 2026</p>
                </div>
                <div className="px-1 md:px-4">
                    <p className="text-brand-gold text-[8px] md:text-[10px] uppercase tracking-widest mb-1 md:mb-2 font-black">Duración</p>
                    <p className="font-serif text-sm md:text-2xl">{PROGRAM_INFO.duration}</p>
                </div>
                <div className="px-1 md:px-4">
                    <p className="text-brand-gold text-[8px] md:text-[10px] uppercase tracking-widest mb-1 md:mb-2 font-black">Modalidad</p>
                    <p className="font-serif text-sm md:text-2xl">Híbrida</p>
                </div>
             </div>
          </div>

          <a 
            href="https://wa.me/525561039849?text=Hola%2C%20quiero%20que%20me%20env%C3%ADen%20una%20brochure%20del%20Diplomado%20Luxury%20Management%202026.%20Gracias"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-10 md:px-16 py-4 md:py-5 text-[10px] md:text-xs font-black text-white transition-all duration-300 bg-brand-gold font-sans tracking-[0.2em] md:tracking-[0.3em] hover:bg-white hover:text-brand-navy focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-gold shadow-2xl hover:shadow-brand-gold/50 uppercase rounded-sm"
          >
            <span>SOLICITAR BROCHURE</span>
            <div className="absolute inset-0 border border-white/20 group-hover:border-brand-navy/20 pointer-events-none transform scale-[1.03] transition-transform duration-300"></div>
          </a>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on very small heights to save space */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50 hidden sm:block">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;