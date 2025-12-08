import { MapPin, Phone, Mail, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { href: '/', label: 'Início' },
    { href: '/sobre', label: 'Sobre Nós' },
    { href: '/historia', label: 'História' },
    { href: '/aulas', label: 'Aulas e Horários' },
    { href: '/eventos', label: 'Eventos' },
    { href: '/combate', label: 'Kung-Fu Combate' },
    { href: '/contato', label: 'Contato' },
    { href: '/faq', label: 'FAQ' },
  ];

  return (
    <footer className="bg-card border-t border-border py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-2xl font-black text-primary-foreground">梅</span>
              </div>
              <div>
                <h3 className="text-xl font-black font-heading text-gradient-primary">VING TSUN</h3>
                <p className="text-sm text-muted-foreground">Família Moy Ke Yuek</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Escola de Ving Tsun Kung Fu no Méier. Tradição, técnica e desenvolvimento humano integral.
            </p>
            <p className="text-sm text-muted-foreground">
              Afiliada ao Instituto Julio Camacho e Moy Yat Ving Tsun Federation
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-foreground border-b border-secondary/30 pb-2">Contato</h4>
            <div className="space-y-4">
              <a 
                href="https://maps.google.com/?q=Rua+Dias+da+Cruz,+148+-+Sala+303+-+Meier+-+RJ" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-muted-foreground hover:text-secondary transition-colors group"
              >
                <MapPin size={20} className="mt-0.5 flex-shrink-0 group-hover:text-secondary" />
                <span>Rua Dias da Cruz, 148 – Sala 303<br />Méier – Rio de Janeiro, RJ</span>
              </a>
              <a 
                href="https://wa.me/5521982112164" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-secondary transition-colors"
              >
                <Phone size={20} />
                <span>(21) 98211-2164</span>
              </a>
              <a 
                href="mailto:cristianogoldmanijc@gmail.com" 
                className="flex items-center gap-3 text-muted-foreground hover:text-secondary transition-colors"
              >
                <Mail size={20} />
                <span>cristianogoldmanijc@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-foreground border-b border-secondary/30 pb-2">Links Rápidos</h4>
            <div className="grid grid-cols-1 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-muted-foreground hover:text-secondary transition-colors hover:translate-x-1 transform duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social & CTA */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-foreground border-b border-secondary/30 pb-2">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/vingtsunkungfuflow"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-muted rounded-xl hover:bg-gradient-to-br hover:from-primary hover:to-secondary transition-all group"
              >
                <Instagram size={24} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
            <div className="pt-4">
              <a 
                href="https://wa.me/5521982112164?text=Olá! Gostaria de agendar uma aula experimental gratuita."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center py-3 px-6 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Agende Sua Aula Gratuita
              </a>
            </div>
          </div>
        </div>

        {/* Linhagem */}
        <div className="py-8 border-t border-b border-border text-center">
          <p className="text-sm text-muted-foreground mb-2">Linhagem</p>
          <p className="text-sm text-foreground/80">
            Yim Ving Tsun → Leung Bok To → ... → Yip Man → <span className="text-secondary">Moy Yat</span> → Grão Mestre Leo Imamura → Mestre Sênior Julio Camacho → <span className="text-secondary">Mestre Cristiano Goldman</span>
          </p>
        </div>

        {/* Bottom */}
        <div className="pt-8 text-center text-muted-foreground">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Escola Cristiano Goldman – Ving Tsun Kung Fu | Família Moy Ke Yuek
          </p>
          <p className="text-xs mt-2 text-muted-foreground/60">
            Instituto Julio Camacho • Moy Yat Ving Tsun Federation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
