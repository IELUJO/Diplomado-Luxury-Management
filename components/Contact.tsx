import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    const phoneNumber = "5215561039849";
    const text = `Deseo recibir información a mi correo ${email}, sobre el programa detallado, costes y formas de pago`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const emailSubject = "Solicito información sobre el diplomado Luxury Management 2026";
  const emailBody = "Hola, solicito información detallada del programa del diplomado Luxury Management 2026 así como de costes y opciones de pago";
  const mailtoUrl = `mailto:contacto@ielujo.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  return (
    <section id="inscribete-hoy" className="bg-white min-h-[calc(100vh-140px)] flex flex-col justify-between scroll-mt-32">
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <div className="inline-block px-3 py-1 mb-4 border border-brand-gold/50 rounded-full">
                <span className="text-brand-gold text-xs font-bold uppercase tracking-widest">Inscripciones Abiertas</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-navy mb-6">Inscríbete hoy</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Forma parte de la 10ª generación de líderes en la industria del lujo. 
            </p>
            
            <div className="space-y-4">
              <a 
                href="https://wa.me/525561039849" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 group p-3 rounded-lg hover:bg-green-50 transition-colors border border-gray-100 hover:border-green-200 cursor-pointer"
              >
                <div className="bg-[#25D366] text-white p-2 rounded-full shadow-md flex items-center justify-center">
                  <svg 
                    viewBox="0 0 24 24" 
                    width="24" 
                    height="24" 
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">WhatsApp Business</p>
                  <p className="text-lg font-serif text-brand-navy font-bold">+52 55 6103 9849</p>
                </div>
              </a>

              <a 
                href={mailtoUrl}
                className="flex items-center gap-4 group p-3 rounded-lg hover:bg-blue-50 transition-colors border border-gray-100 hover:border-blue-200 cursor-pointer"
              >
                <div className="bg-brand-navy text-white p-2.5 rounded-full shadow-md">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Email</p>
                  <p className="text-lg font-serif text-brand-navy font-bold">contacto@ielujo.com</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-brand-cream p-8 rounded-lg text-center shadow-inner relative overflow-hidden border border-white mt-8 lg:mt-0">
             <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl"></div>
             <img 
               src="https://www.ielujo.com/wp-content/uploads/2025/12/Logo-Educacion-comntinua-sin-fondo.png" 
               alt="Anahuac Educación Continua" 
               className="h-16 mx-auto mb-6 object-contain"
             />
             <h3 className="font-serif text-xl text-brand-navy mb-2">Reserva tu lugar</h3>
             <p className="text-xs text-gray-500 mb-6">
               Recibe el brochure oficial 2026 y facilidades de pago.
             </p>
             <form onSubmit={handleSubmit} className="space-y-4 relative z-10 text-left">
               <input 
                  type="email" 
                  required
                  placeholder="tu@correo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-4 bg-brand-navy text-white placeholder:text-white/40 border border-brand-gold/30 rounded focus:ring-2 focus:ring-brand-gold outline-none transition-all shadow-lg font-medium"
               />
               <button 
                  type="submit" 
                  className="w-full bg-brand-navy hover:bg-brand-navy-dark text-white font-black py-5 rounded shadow-xl transition-all flex justify-center items-center gap-2 uppercase tracking-[0.2em] text-[11px] border border-white/10"
               >
                 <Send size={18} />
                 <span>Solicitar Brochure</span>
               </button>
             </form>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 py-10 px-4 border-t border-gray-100 text-center text-gray-400 text-[10px]">
          <p className="uppercase tracking-[0.2em]">&copy; 2026 Instituto Europeo del Lujo. Todos los derechos reservados.</p>
      </div>
    </section>
  );
};

export default Contact;