import { motion } from 'motion/react';
import { ShoppingBag, Key, Upload, ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Comprar una propiedad",
    description: "Te asesoramos en cada paso, desde la búsqueda estratégica hasta la firma de la escritura, asegurando una inversión sólida.",
    icon: ShoppingBag,
    cta: "Quiero comprar",
    color: "bg-blue-50"
  },
  {
    title: "Arrendar una propiedad",
    description: "Proceso 100% online, rápido y seguro. Encontramos el lugar ideal para ti con la mejor gestión del mercado.",
    icon: Key,
    cta: "Quiero arrendar",
    color: "bg-amber-50"
  },
  {
    title: "Vender o Poner en Arriendo",
    description: "Publicamos en todos los portales premium y gestionamos visitas profesionales para conseguirte el mejor precio.",
    icon: Upload,
    cta: "Publicar mi propiedad",
    color: "bg-emerald-50"
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding border-t border-white/5">
      <div className="text-left mb-20">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white italic">¿Qué puedo hacer con Schumacher?</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card group p-10 flex flex-col items-start border-white/5 hover:border-brand-gold/30 hover:bg-white/10"
          >
            <div className={`w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
              <service.icon className="w-8 h-8 gold-text" />
            </div>
            
            <h3 className="font-bold text-2xl mb-4 text-white">
              {service.title}
            </h3>
            
            <p className="text-white/50 leading-relaxed mb-10 text-sm font-light">
              {service.description}
            </p>
            
            <button className="mt-auto inline-flex items-center gap-3 font-bold uppercase tracking-[0.25em] text-[10px] gold-text group-hover:text-white transition-all">
              {service.cta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
