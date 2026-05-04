import { motion } from 'motion/react';
import { Send, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  return (
    <section id="contact" className="section-padding border-t border-white/5">
      <div className="glass-card overflow-hidden flex flex-col lg:flex-row border-white/10 shadow-2xl">
        <div className="lg:w-[40%] p-10 md:p-20 flex flex-col justify-center bg-brand-gold text-brand-navy">
          <h2 className="text-5xl font-bold mb-8 tracking-tighter">
            ¿Listo para dar el siguiente paso?
          </h2>
          <p className="text-brand-navy/70 mb-12 leading-relaxed text-lg font-light">
            Nuestro equipo de expertos está listo para asesorarte en tu próxima inversión inmobiliaria.
          </p>
          
          <ul className="space-y-8">
            {[
              "Asesoría personalizada",
              "Tasación inmediata",
              "Proceso 100% digital"
            ].map(item => (
              <li key={item} className="flex items-center gap-4 border-b border-brand-navy/10 pb-4">
                <div className="w-2 h-2 rounded-full bg-brand-navy"></div>
                <span className="font-bold text-[10px] uppercase tracking-widest">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="lg:w-[60%] p-10 md:p-20 flex flex-col justify-center bg-white text-brand-navy">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Nombre Completo</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-50 border-b-2 border-gray-100 p-4 text-brand-navy focus:outline-none focus:border-brand-gold transition-colors font-medium"
                  placeholder="Juan Pérez"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Teléfono</label>
                <input 
                  type="tel" 
                  className="w-full bg-gray-50 border-b-2 border-gray-100 p-4 text-brand-navy focus:outline-none focus:border-brand-gold transition-colors font-medium"
                  placeholder="+56 9 1234 5678"
                />
              </div>
            </div>
            
            <div className="space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Email</label>
              <input 
                type="email" 
                className="w-full bg-gray-50 border-b-2 border-gray-100 p-4 text-brand-navy focus:outline-none focus:border-brand-gold transition-colors font-medium"
                placeholder="juan@email.com"
              />
            </div>
            
            <div className="space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Servicio de Interés</label>
              <select className="w-full bg-gray-50 border-b-2 border-gray-100 p-4 text-brand-navy focus:outline-none focus:border-brand-gold transition-colors font-medium appearance-none">
                <option>Comprar una propiedad</option>
                <option>Arrendar una propiedad</option>
                <option>Vender mi propiedad</option>
                <option>Administración</option>
              </select>
            </div>
            
            <button className="w-full bg-brand-navy text-white py-6 rounded-lg font-bold uppercase tracking-widest text-xs hover:bg-slate-800 transition-all flex items-center justify-center gap-4">
              Enviar solicitud
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
