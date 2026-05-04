import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

const agents = [
  {
    name: "Andrea Schumacher",
    role: "Fundadora & CEO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Ricardo Valdés",
    role: "Director de Operaciones",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Carla Pizarro",
    role: "Ejecutiva Senior - Ventas",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Mateo Rodríguez",
    role: "Ejecutivo Senior - Arriendos",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  }
];

export default function Team() {
  return (
    <section id="team" className="section-padding border-t border-white/5">
      <div className="text-left mb-20">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4 italic">El Equipo</h2>
        <p className="text-white/40 max-w-2xl font-light">
          Los mejores ejecutivos inmobiliarios a tu disposición para hacer realidad tu operación.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {agents.map((agent, index) => (
          <motion.div
            key={agent.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-6 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 border border-white/5">
              <img 
                src={agent.image} 
                alt={agent.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-transparent flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <a 
                  href="https://api.whatsapp.com/send?phone=56998438003&text=Hola!" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="gold-bg text-brand-navy w-full py-4 rounded-full flex items-center justify-center gap-2 font-bold text-[10px] uppercase tracking-widest transition-all shadow-xl"
                >
                  Contactar
                </a>
              </div>
            </div>
            
            <div className="text-left">
              <h3 className="font-bold text-lg text-white mb-1">{agent.name}</h3>
              <p className="gold-text text-[10px] font-bold uppercase tracking-[0.2em]">{agent.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
