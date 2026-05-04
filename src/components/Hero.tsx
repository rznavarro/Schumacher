import { motion } from 'motion/react';
import { Search, MapPin, Home, Key, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-brand-navy/60 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/80 via-transparent to-brand-paper"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 text-left text-white pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-[1.05] tracking-tighter max-w-4xl">
            Encuentra, arrienda <br/> o vende tu propiedad <br/>
            <span className="gold-text italic">con total tranquilidad.</span>
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-70 max-w-xl mb-12 leading-relaxed">
            15 años de experiencia. Proceso 100% digital. Acompañamiento personalizado en el mercado chileno.
          </p>
        </motion.div>

        {/* Search Bar - Minimalist Version */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white p-2 md:p-3 rounded-xl shadow-2xl max-w-4xl flex flex-col md:flex-row items-center gap-3 text-brand-navy"
        >
          <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <div className="px-6 py-3 flex flex-col items-start gap-1">
              <label className="text-[10px] uppercase font-bold text-gray-400">Operación</label>
              <select className="w-full bg-transparent font-semibold focus:outline-none appearance-none">
                <option>Venta</option>
                <option>Arriendo</option>
              </select>
            </div>
            <div className="px-6 py-3 flex flex-col items-start gap-1">
              <label className="text-[10px] uppercase font-bold text-gray-400">Propiedad</label>
              <select className="w-full bg-transparent font-semibold focus:outline-none appearance-none">
                <option>Casa</option>
                <option>Departamento</option>
                <option>Oficina</option>
              </select>
            </div>
            <div className="px-6 py-3 flex flex-col items-start gap-1">
              <label className="text-[10px] uppercase font-bold text-gray-400">Ubicación</label>
              <input 
                type="text" 
                placeholder="Región / Comuna" 
                className="w-full bg-transparent font-semibold focus:outline-none placeholder:text-gray-300"
              />
            </div>
          </div>
          <button className="w-full md:w-auto bg-brand-navy text-white px-10 py-5 rounded-lg font-bold uppercase tracking-widest text-[11px] hover:bg-slate-800 transition-all active:scale-95 shadow-xl">
            Buscar propiedades
          </button>
        </motion.div>

        {/* Rapid Stats - Gold Highlighted */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 flex flex-wrap gap-16"
        >
          <div className="flex items-center gap-4">
            <span className="text-4xl font-bold gold-text">2.000+</span>
            <p className="text-[10px] uppercase tracking-[0.2em] opacity-50 leading-tight">Transacciones<br/>Exitosas</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl font-bold gold-text">99%</span>
            <p className="text-[10px] uppercase tracking-[0.2em] opacity-50 leading-tight">Arrendatarios<br/>Puntuales</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl font-bold gold-text">4.7★</span>
            <p className="text-[10px] uppercase tracking-[0.2em] opacity-50 leading-tight">Google Rating<br/>(240 reseñas)</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
