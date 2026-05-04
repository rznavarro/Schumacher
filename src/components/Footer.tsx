import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 pb-24">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 gold-bg flex items-center justify-center font-bold text-brand-navy text-xl rounded-lg">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl leading-none tracking-tighter">SCHUMACHER</span>
              <span className="text-[9px] uppercase tracking-[0.3em] opacity-40 font-bold">Propiedades</span>
            </div>
          </div>
          <p className="text-white/30 text-xs leading-relaxed mb-10 font-light max-w-xs">
            Liderando el mercado inmobiliario chileno con transparencia y tecnología. 15 años de transacciones exitosas.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/schumacher.propiedades/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:gold-text hover:border-brand-gold transition-all">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:gold-text hover:border-brand-gold transition-all">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:gold-text hover:border-brand-gold transition-all">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 mb-10">Servicios</h4>
          <ul className="space-y-4 text-xs font-light text-white/50">
            {['Venta de Propiedades', 'Arriendo de Propiedades', 'Administración de Arriendos', 'Tasaciones Comerciales', 'Asesoría Legal'].map(item => (
              <li key={item}><a href="#" className="hover:gold-text transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 mb-10">Empresa</h4>
          <ul className="space-y-4 text-xs font-light text-white/50">
            {['Sobre Nosotros', 'Nuestro Equipo', 'Portal Propietarios', 'Portal Arrendatarios', 'Preguntas Frecuentes'].map(item => (
              <li key={item}><a href="#" className="hover:gold-text transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 mb-10">Contacto</h4>
          <ul className="space-y-6 text-xs font-light text-white/50">
            <li className="flex items-start gap-4">
              <MapPin className="w-4 h-4 gold-text shrink-0" />
              <span>Av. Apoquindo 4501, Piso 12, <br/> Las Condes, Santiago.</span>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="w-4 h-4 gold-text shrink-0" />
              <span>+56 9 9843 8003</span>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="w-4 h-4 gold-text shrink-0" />
              <span>contacto@schumacher.cl</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] uppercase tracking-[0.3em] text-white/20 font-bold">
          <p>© 2024 Schumacher Propiedades. 15 años de excelencia.</p>
          <div className="flex gap-12 text-[10px]">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
