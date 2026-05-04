import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X, MessageCircle } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Comprar', href: '#' },
    { name: 'Arrendar', href: '#' },
    { name: 'Vender', href: '#' },
    { name: 'Administración', href: '#' },
    { name: 'Quiénes Somos', href: '#' },
  ];

  return (
    <nav 
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'nav-blur py-4 shadow-2xl' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center text-white">
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <span className="text-3xl font-bold tracking-tighter transition-transform group-hover:scale-105">
            <span className="gold-text">S</span>chumacher
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.25em] text-white/70">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-brand-gold transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-8">
          <a 
            href="https://api.whatsapp.com/send?phone=56998438003&text=Hola!" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="gold-bg px-7 py-3 rounded-full font-bold text-[10px] uppercase tracking-widest hover:brightness-110 transition-all active:scale-95 flex items-center gap-2"
          >
            Habla con un ejecutivo
            <MessageCircle className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-brand-navy z-40 lg:hidden flex flex-col justify-center items-center gap-8 text-white font-serif text-3xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-brand-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="mt-4 bg-brand-gold text-brand-navy px-8 py-4 rounded-sm font-bold text-lg uppercase tracking-widest">
              Habla con un ejecutivo
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
