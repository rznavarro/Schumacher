import { motion } from 'motion/react';
import { Check, Info } from 'lucide-react';

const plans = [
  {
    name: "Bronce",
    price: "3%",
    description: "Gestión básica para propietarios que buscan tranquilidad al mejor precio.",
    features: [
      "Publicación en portales básicos",
      "Selección rigurosa de arrendatarios",
      "Cobranza mensual",
      "Informes de gestión trimestrales",
    ],
    popular: false
  },
  {
    name: "Plata",
    price: "6%",
    description: "Gestión integral con prioridad y visibilidad aumentada en portales.",
    features: [
      "Todo lo del Plan Bronce",
      "Publicación en Portales Premium",
      "Gestión de reparaciones menores",
      "Asesoría legal básica",
      "Acceso a portal de propietarios",
    ],
    popular: true
  },
  {
    name: "Oro",
    price: "8%",
    description: "Atención personalizada 24/7 y cobertura total de tu propiedad.",
    features: [
      "Todo lo del Plan Plata",
      "Seguro de Arriendo incluido",
      "Servicio de limpieza anual",
      "Asesoría tributaria inmobiliaria",
      "Concierge inmobiliario dedicado",
    ],
    popular: false
  }
];

export default function PricingPlans() {
  return (
    <section id="pricing" className="section-padding border-t border-white/5 relative">
      <div>
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Administración Profesional</h2>
          <p className="text-white/40 italic font-light">
            Soluciones desde un <span className="gold-text font-bold">3% + IVA</span> para rentabilizar tu inversión.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`glass-card p-10 flex flex-col border-white/5 group ${
                plan.popular 
                  ? 'border-brand-gold/40 bg-brand-gold/5 shadow-[0_20px_50px_rgba(197,160,89,0.1)]' 
                  : 'hover:border-white/20'
              }`}
            >
              <div className="mb-8">
                <h3 className="font-bold text-2xl mb-2 gold-text">{plan.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold tracking-tighter text-white">{plan.price}</span>
                  <span className="text-xs text-white/30 font-bold uppercase tracking-widest">+ IVA</span>
                </div>
              </div>

              <div className="space-y-4 mb-12 flex-1">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-4">
                    <Check className="w-4 h-4 shrink-0 mt-1 gold-text" />
                    <span className="text-xs text-white/60 leading-relaxed font-light">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-5 rounded-full font-bold uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-2 ${
                plan.popular 
                  ? 'gold-bg border-transparent' 
                  : 'border border-white/20 text-white hover:border-brand-gold hover:gold-text'
              }`}>
                Contratar Plan {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
