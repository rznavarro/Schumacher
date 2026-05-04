import { motion } from 'motion/react';
import { Bed, Bath, Square, MapPin, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const properties = [
  {
    id: 1,
    title: "Penthouse Santa María Manquehue",
    price: "UF 24.500",
    location: "Vitacura, RM",
    type: "Venta",
    beds: 4,
    baths: 5,
    sqm: 320,
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Casa Mediterránea en La Dehesa",
    price: "UF 32.000",
    location: "Lo Barnechea, RM",
    type: "Venta",
    beds: 5,
    baths: 6,
    sqm: 450,
    image: "https://images.unsplash.com/photo-1600585154340-be6191dae10c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Depto Full Amoblado El Golf",
    price: "CLP 1.850.000",
    location: "Las Condes, RM",
    type: "Arriendo",
    beds: 2,
    baths: 2,
    sqm: 110,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Loft Industrial Barrio Italia",
    price: "CLP 950.000",
    location: "Providencia, RM",
    type: "Arriendo",
    beds: 1,
    baths: 1,
    sqm: 75,
    image: "https://images.unsplash.com/photo-1536376074432-bf12177d4f4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Casa de Campo en Chicureo",
    price: "UF 18.200",
    location: "Colina, RM",
    type: "Venta",
    beds: 4,
    baths: 3,
    sqm: 280,
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Oficina Centro de Negocios Apoquindo",
    price: "UF 140",
    location: "Las Condes, RM",
    type: "Arriendo",
    beds: 0,
    baths: 2,
    sqm: 150,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export default function FeaturedProperties() {
  const [filter, setFilter] = useState('Todos');

  const filteredProperties = filter === 'Todos' 
    ? properties 
    : properties.filter(p => p.type === filter);

  return (
    <section id="featured" className="section-padding">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2">Propiedades Destacadas</h2>
        </div>
        
        {/* Filters - Minimalist */}
        <div className="flex space-x-8 text-[11px] font-bold uppercase tracking-[0.2em]">
          {['Todos', 'Venta', 'Arriendo'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`pb-1 border-b-2 transition-all ${
                filter === f ? 'gold-text border-brand-gold' : 'text-white/40 border-transparent hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProperties.map((property, index) => (
          <motion.div
            key={property.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card group cursor-pointer overflow-hidden p-0 bg-white/5 border-white/10"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={property.image} 
                alt={property.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-brand-navy/60 backdrop-blur-md text-brand-gold px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10">
                  {property.type}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-base text-white/90 group-hover:gold-text transition-colors leading-tight">
                  {property.title}
                </h3>
                <span className="gold-text font-bold text-sm shrink-0 ml-4">{property.price}</span>
              </div>
              
              <div className="flex space-x-6 text-[10px] text-white/40 uppercase tracking-[0.1em] font-medium pt-4 border-t border-white/5">
                <span className="flex items-center gap-2 italic">{property.beds} Dorm.</span>
                <span className="flex items-center gap-2 italic">{property.baths} Baños</span>
                <span className="flex items-center gap-2 italic">{property.sqm} m²</span>
              </div>
            </div>
          </motion.div>
        ))}

        {/* "View All" as a Minimalist Dash Card */}
        <div className="glass-card border-dashed border-white/20 flex flex-col items-center justify-center p-12 text-center group cursor-pointer">
          <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-6 group-hover:border-brand-gold group-hover:bg-brand-gold/10 transition-all duration-500">
            <ArrowRight className="w-5 h-5 text-white group-hover:gold-text transition-all group-hover:translate-x-1" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50 group-hover:text-white transition-colors">Ver todas las propiedades</span>
        </div>
      </div>
    </section>
  );
}
