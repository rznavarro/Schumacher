import { motion } from 'motion/react';
import { MousePointer2, ClipboardCheck, LayoutList, Users, PenTool, Handshake } from 'lucide-react';

const steps = [
  {
    title: "Nos contactas",
    desc: "A través de Whatsapp, formulario o llamada. Te asignamos un ejecutivo experto.",
    icon: MousePointer2
  },
  {
    title: "Evaluamos",
    desc: "Realizamos una tasación comercial y técnica de tu propiedad sin costo.",
    icon: ClipboardCheck
  },
  {
    title: "Publicamos",
    desc: "Sesión fotográfica pro y difusión en los portales más importantes de Chile.",
    icon: LayoutList
  },
  {
    title: "Gestionamos",
    desc: "Filtramos interesados y gestionamos todas las visitas de forma segura.",
    icon: Users
  },
  {
    title: "Firman",
    desc: "Firma electrónica notarial, sin trámites presenciales ni filas.",
    icon: PenTool
  },
  {
    title: "Cobras",
    desc: "Recibes tu dinero puntualmente con respaldo total de Schumacher.",
    icon: Handshake
  }
];

export default function DigitalProcess() {
  return (
    <section id="process" className="section-padding border-t border-white/5">
      <div className="text-left mb-20">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4 italic">Proceso Digital</h2>
        <p className="text-white/40 max-w-2xl font-light">
          Gestiona todo desde tu dispositivo, sin trámites presenciales lentos ni pérdida de tiempo.
        </p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-8 group"
            >
              <div className="shrink-0 relative">
                <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-brand-gold transition-all duration-500">
                  <step.icon className="w-6 h-6 gold-text" />
                </div>
                <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full gold-bg text-brand-navy text-[10px] font-bold flex items-center justify-center">
                  0{index + 1}
                </div>
              </div>
              
              <div>
                <h3 className="font-bold text-xl mb-2 text-white group-hover:gold-text transition-colors">
                  {step.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
