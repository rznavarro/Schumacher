import { motion } from 'motion/react';

const stats = [
  { label: "Transacciones Exitosas", value: "2.000+" },
  { label: "Pagos a Tiempo", value: "99%" },
  { label: "Años de Experiencia", value: "15" },
  { label: "Rating Google", value: "4.7★" }
];

export default function Stats() {
  return (
    <section className="bg-brand-navy py-32 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <span className="text-5xl md:text-7xl font-bold gold-text mb-4 tracking-tighter">
                {stat.value}
              </span>
              <span className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
