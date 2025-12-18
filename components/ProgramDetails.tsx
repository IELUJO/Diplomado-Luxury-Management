import React from 'react';
import { OBJECTIVES, PROGRAM_INFO } from '../constants';
import { Target, Award, Users, Calendar, Clock, DollarSign, BookOpen, GraduationCap } from 'lucide-react';

const ProgramDetails: React.FC = () => {
  return (
    <section id="program-details" className="py-20 bg-brand-cream relative scroll-mt-20">
      <div className="container mx-auto px-4">
        
        {/* About Intro */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-navy mb-6">Excelencia Académica en el Lujo</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            El <strong>Instituto Europeo del Lujo (IELujo)</strong>, líder en la educación sobre el lujo en Iberoamérica, en alianza estratégica con la <strong>Universidad Anáhuac México</strong>, presenta la 10ª edición de su programa insignia. 
            Con cerca de 400 alumnos certificados desde 2017, este diplomado responde a las necesidades reales de los empresarios y responsables de marcas de lujo en la región.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
             <a 
               href="https://educacioncontinua.anahuac.mx/products/diplomado-luxury-management?variant=51133729374518"
               target="_blank"
               rel="noopener noreferrer"
               className="bg-white p-4 shadow-sm border-l-4 border-brand-navy rounded flex items-center gap-3 hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer group"
             >
                <Award className="text-brand-gold group-hover:scale-110 transition-transform" />
                <span className="text-brand-navy font-semibold group-hover:text-brand-gold transition-colors">Certificación Oficial Universitaria</span>
             </a>
             <a 
               href="https://educacioncontinua.anahuac.mx/products/master-en-creacion-y-gestion-de-marcas-de-lujo?variant=51760858038582"
               target="_blank"
               rel="noopener noreferrer"
               className="bg-white p-4 shadow-sm border-l-4 border-brand-navy rounded flex items-center gap-3 hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer group"
             >
                <GraduationCap className="text-brand-gold group-hover:scale-110 transition-transform" />
                <span className="text-brand-navy font-semibold group-hover:text-brand-gold transition-colors">Forma parte de un Máster</span>
             </a>
          </div>
        </div>

        {/* Two Column Layout: Objectives & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Objectives */}
          <div className="bg-white p-8 md:p-10 rounded-sm shadow-xl border-t-4 border-brand-gold">
            <h3 className="font-serif text-2xl text-brand-navy mb-6 flex items-center gap-3">
              <Target className="text-brand-gold" />
              Objetivos del Programa
            </h3>
            <ul className="space-y-4">
              {OBJECTIVES.map((obj, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <span className="bg-brand-navy/10 text-brand-navy font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs mt-1">
                    {index + 1}
                  </span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 pt-6 border-t border-gray-100">
                <h4 className="font-serif text-xl text-brand-navy mb-3">¿A quién va dirigido?</h4>
                <p className="text-gray-600 text-sm">
                    Managers, directivos y emprendedores que desean adquirir competencias modernas para gestionar marcas de lujo, aspiracionales o posicionar sus empresas en el segmento de alto poder adquisitivo.
                </p>
            </div>
          </div>

          {/* Right: Technical Details Grid */}
          <div className="space-y-6">
             <h3 className="font-serif text-3xl text-brand-navy mb-6">Detalles de la 10ª Generación</h3>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-brand-navy p-6 rounded text-white transform hover:-translate-y-1 transition-transform">
                    <Calendar className="text-brand-gold w-8 h-8 mb-3" />
                    <p className="text-brand-gold text-xs uppercase font-bold tracking-wider">Fechas</p>
                    <p className="text-lg font-semibold">{PROGRAM_INFO.startDate}</p>
                    <p className="text-sm opacity-70">al {PROGRAM_INFO.endDate}</p>
                </div>

                <div className="bg-white p-6 rounded shadow border border-gray-100 transform hover:-translate-y-1 transition-transform">
                    <Clock className="text-brand-navy w-8 h-8 mb-3" />
                    <p className="text-gray-500 text-xs uppercase font-bold tracking-wider">Horario</p>
                    <p className="text-brand-navy text-lg font-semibold">Sábados</p>
                    <p className="text-gray-600 text-sm">8:00 A.M. - 3:00 P.M.</p>
                </div>

                <div className="bg-white p-6 rounded shadow border border-gray-100 transform hover:-translate-y-1 transition-transform">
                    <BookOpen className="text-brand-navy w-8 h-8 mb-3" />
                    <p className="text-gray-500 text-xs uppercase font-bold tracking-wider">Formato</p>
                    <p className="text-brand-navy text-lg font-semibold">Híbrido</p>
                    <p className="text-gray-600 text-sm">11 sesiones (3 de ellas son presenciales y online simultáneamente)</p>
                </div>

                <div className="bg-white p-6 rounded shadow border border-gray-100 transform hover:-translate-y-1 transition-transform">
                    <DollarSign className="text-brand-navy w-8 h-8 mb-3" />
                    <p className="text-gray-500 text-xs uppercase font-bold tracking-wider">Inversión</p>
                    <p className="text-brand-navy text-lg font-semibold">{PROGRAM_INFO.price}</p>
                    <p className="text-gray-600 text-sm">Facilidades de pago</p>
                </div>
             </div>
             
             <div className="bg-brand-gold/10 p-6 rounded border border-brand-gold text-brand-navy mt-4">
                 <p className="font-serif italic text-center">
                     "Incluye 2 sesiones exclusivas de Mentoring para apoyar tus objetivos profesionales."
                 </p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProgramDetails;