import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/56987654321"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
      className="fixed bottom-8 right-8 z-[60] bg-green-500 text-white p-4 rounded-full shadow-[0_10px_30px_rgba(34,197,94,0.4)] flex items-center gap-2 group cursor-pointer"
    >
      <div className="absolute right-full mr-4 bg-white text-brand-navy px-4 py-2 rounded-lg shadow-xl text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        ¿Cómo podemos ayudarte?
        <div className="absolute top-1/2 -translate-y-1/2 left-full border-[6px] border-transparent border-l-white"></div>
      </div>
      <MessageCircle className="w-8 h-8" />
    </motion.a>
  );
}
