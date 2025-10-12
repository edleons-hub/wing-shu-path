import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-black font-heading">
              <span className="text-gradient-primary">WING SHU</span>
            </h3>
            <p className="text-muted-foreground">
              Escola tradicional de Wing Chun. Transformando vidas através da arte marcial chinesa.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-foreground">Contato</h4>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors">
                <MapPin size={18} />
                <span>Rua dos Mestres, 123 - São Paulo</span>
              </a>
              <a href="tel:+551199999999" className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors">
                <Phone size={18} />
                <span>(11) 99999-9999</span>
              </a>
              <a href="mailto:contato@wingshu.com.br" className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors">
                <Mail size={18} />
                <span>contato@wingshu.com.br</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-foreground">Links Rápidos</h4>
            <div className="space-y-2">
              {['História', 'Filosofia', 'Técnicas', 'Horários', 'Depoimentos'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-muted-foreground hover:text-secondary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-foreground">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 bg-muted rounded-lg hover:bg-secondary hover:text-secondary-foreground transition-all"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="p-3 bg-muted rounded-lg hover:bg-secondary hover:text-secondary-foreground transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-3 bg-muted rounded-lg hover:bg-secondary hover:text-secondary-foreground transition-all"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Wing Shu Kung-Fu. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
