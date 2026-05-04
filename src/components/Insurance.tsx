import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Insurance() {
  return (
    <section id="insurance" className="section-padding overflow-hidden">
      <div className="glass-card overflow-hidden flex flex-col lg:flex-row border-white/5 relative">
        <div className="lg:w-1/2 p-8 md:p-16 lg:p-20 flex flex-col justify-center relative z-10">
          <div className="w-16 h-16 bg-white/5 border border-brand-gold/20 rounded-2xl flex items-center justify-center mb-8 shadow-2xl">
            <ShieldCheck className="w-8 h-8 gold-text" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
            ¿Te preocupa que <br/> no te paguen el arriendo?
          </h2>
          <p className="text-white/50 text-lg mb-8 leading-relaxed font-light">
            Nuestro <span className="gold-text font-bold">Seguro de Arriendo</span> exclusivo cubre hasta 6 meses de no pago, garantizando tu tranquilidad con solo un 2%+IVA.
          </p>
          
          <ul className="space-y-4 mb-10 text-white/70">
            {[
              "Cobertura hasta 6 meses de renta",
              "Asesoría legal en juicio de desalojo incluida",
              "Sin deducibles ni trámites burocráticos"
            ].map(item => (
              <li key={item} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full gold-bg"></div>
                <span className="text-xs font-bold uppercase tracking-widest leading-none">{item}</span>
              </li>
            ))}
          </ul>
          
          <button className="gold-bg px-10 py-5 rounded-full font-bold uppercase tracking-widest text-[10px] hover:brightness-110 transition-all flex items-center justify-center gap-2 group w-fit">
            Proteger mi inversión
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1" />
          </button>
        </div>
        
        <div className="lg:w-1/2 relative h-80 lg:h-auto">
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Real estate protection" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/60 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
