import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Plus, Minus } from 'lucide-react';

const faqs = [
  {
    category: "Propietarios",
    q: "¿Cuánto tiempo tarda en arrendarse mi propiedad?",
    a: "En promedio, nuestras propiedades se arriendan en 15 a 21 días. Esto gracias a nuestra amplia base de datos y la publicación en portales premium con fotos profesionales."
  },
  {
    category: "Propietarios",
    q: "¿Cómo calculan el valor de administración?",
    a: "El valor se calcula como un porcentaje del canon de arriendo mensual. Por ejemplo, si tu arriendo es de $500.000 y tienes el plan Plata (6%), el costo es de $30.000 + IVA mensuales."
  },
  {
    category: "Arrendatarios",
    q: "¿Qué documentos necesito para postular a un arriendo?",
    a: "Normalmente solicitamos: 3 últimas liquidaciones de sueldo, certificado de cotizaciones AFP, CI vigente por ambos lados y certificado Dicom Platinum 360."
  },
  {
    category: "Administración",
    q: "¿Cómo funciona el seguro de arriendo?",
    a: "Es una cobertura adicional que protege al propietario ante el no pago por parte del arrendatario. Nosotros gestionamos todo el cobro y, de ser necesario, el proceso legal de desalojo sin costo extra para ti."
  },
  {
    category: "Vendedores",
    q: "¿Qué comisión cobran por la venta de una propiedad?",
    a: "Nuestra comisión estándar es del 2% + IVA sobre el valor de venta final de la propiedad, la cual incluye asesoría legal completa hasta la entrega material."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-left mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 italic">FAQ</h2>
          <p className="text-white/30 font-light max-w-xl">Despeja tus dudas para comenzar tu próximo paso inmobiliario con Schumacher.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="glass-card overflow-hidden border-white/5 bg-white/[0.02]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-8 text-left hover:bg-white/[0.05] transition-colors"
                id={`faq-button-${index}`}
              >
                <div className="flex flex-col gap-2">
                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] gold-text opacity-70">{faq.category}</span>
                  <span className="font-bold text-lg text-white leading-tight tracking-tight">{faq.q}</span>
                </div>
                <div className={`transition-transform duration-500 ${openIndex === index ? 'rotate-180 gold-text' : 'text-white/20'}`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-8 pb-8 text-white/40 text-sm leading-relaxed font-light border-t border-white/5 pt-6">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
