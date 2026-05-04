import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Javier M. - Propietario",
    text: "Increíble la rapidez. Arrendaron mi departamento en Las Condes en menos de una semana y se encargaron de toda la burocracia. El plan de administración es una maravilla.",
    stars: 5
  },
  {
    name: "Sofía L. - Arrendataria",
    text: "El proceso fue 100% digital, firmamos todo desde el celular. Muy profesionales y transparentes con los gastos y condiciones. Recomiendo totalmente a Schumacher.",
    stars: 5
  },
  {
    name: "Bernardo R. - Vendedor",
    text: "Vendí mi casa en Vitacura con ellos. Siempre estuvieron presentes, dándome feedback después de cada visita. Se nota la experiencia de 15 años.",
    stars: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding border-t border-white/5 relative overflow-hidden">
      <div className="relative z-10">
        <div className="text-left mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />)}
            </div>
            <span className="text-white font-bold opacity-40 uppercase tracking-[0.2em] text-[10px]">4.7 / 5 en Google Reviews</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-white italic tracking-tight">Lo que dicen <br/> de nosotros</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-10 flex flex-col border-white/5 hover:border-brand-gold/20 transition-all duration-500"
            >
              <div className="flex gap-1 mb-8 opacity-50">
                {[...Array(t.stars)].map((_, i) => <Star key={i} className="w-3 h-3 fill-brand-gold text-brand-gold" />)}
              </div>
              <p className="text-white/60 italic leading-relaxed mb-10 font-light text-sm">
                "{t.text}"
              </p>
              <div className="mt-auto flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-bold gold-text text-[10px]">
                  {t.name.charAt(0)}
                </div>
                <h4 className="font-bold text-white text-[10px] uppercase tracking-[0.2em] opacity-40">{t.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
