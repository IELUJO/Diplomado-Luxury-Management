import React from 'react';
import { MODULES } from '../constants';
import { Star, PlayCircle } from 'lucide-react';

const Modules: React.FC = () => {
  return (
    <section id="plan-estudios" className="py-24 bg-white scroll-mt-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-brand-gold text-[10px] font-black tracking-[0.3em] uppercase">Excelencia Académica</span>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-navy mt-4 mb-6 italic">Plan de Estudios</h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto"></div>
          <p className="text-gray-500 font-light text-lg mt-6">Un recorrido integral por la cadena de valor del lujo, diseñado por expertos activos en la industria.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {MODULES.map((module) => (
            <div key={module.id} className="group relative bg-brand-cream/30 hover:bg-brand-navy border border-gray-100 hover:border-brand-navy rounded-sm p-8 transition-all duration-500 shadow-sm hover:shadow-2xl">
              {/* Number Background Effect */}
              <div className="absolute top-4 right-4 text-6xl font-serif text-brand-gold/10 group-hover:text-white/10 font-bold transition-colors">
                {module.id}
              </div>
              
              <div className="relative z-10">
                <div className="w-8 h-0.5 bg-brand-gold mb-6 group-hover:bg-white/50 transition-colors"></div>
                
                <h3 className="font-serif text-2xl text-brand-navy group-hover:text-white leading-tight mb-6 min-h-[3.5rem] flex items-center transition-colors">
                  {module.title}
                </h3>
                
                <ul className="space-y-3">
                  {module.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-start text-xs text-gray-600 group-hover:text-gray-300 transition-colors">
                      <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                      <span className="font-medium">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* Bloque de Valoración */}
          <div className="group relative bg-brand-navy border-2 border-brand-gold rounded-sm p-8 flex flex-col justify-center items-center text-center transition-all duration-500 shadow-xl overflow-hidden min-h-[320px]">
             <div className="absolute top-0 right-0 w-48 h-48 bg-brand-gold/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
             
             <div className="relative z-10 w-full">
                 <div className="flex justify-center mb-6 text-brand-gold">
                    {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" className="mx-0.5 animate-pulse" />)}
                 </div>
                 
                 <div className="mb-8">
                    <p className="text-white font-serif text-xl leading-snug">
                      Valoración por <br/>
                      <span className="text-brand-gold font-bold">Cuestionario Anónimo</span>
                    </p>
                    <div className="text-5xl md:text-6xl font-bold text-white mt-2">9,46<span className="text-2xl text-brand-gold">/10</span></div>
                 </div>

                 <a 
                   href="https://www.ielujo.com/pf/luxury-management-diplomado-anahuac/"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center gap-3 bg-brand-gold hover:bg-white text-brand-navy px-6 py-5 rounded-sm font-black transition-all duration-300 w-full justify-center group-hover:shadow-brand-gold/50 shadow-lg transform group-hover:-translate-y-1 uppercase tracking-widest text-[11px]"
                 >
                    <PlayCircle size={22} />
                    <span>revisa nuestros video testimoniales</span>
                 </a>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modules;