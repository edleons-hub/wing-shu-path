import { useState } from 'react';
import { MapPin, Phone, Mail, Instagram, Send, Clock, MessageCircle } from 'lucide-react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contato = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio - em produção, conectar com backend
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Redirecionar para WhatsApp com a mensagem
    const message = `Olá! Meu nome é ${formData.nome}.%0A%0AEmail: ${formData.email}%0ATelefone: ${formData.telefone}%0A%0AMensagem: ${formData.mensagem}`;
    window.open(`https://wa.me/5521982112164?text=${message}`, '_blank');

    toast({
      title: "Mensagem enviada!",
      description: "Você será redirecionado para o WhatsApp.",
    });

    setFormData({ nome: '', email: '', telefone: '', mensagem: '' });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <PageHeader 
        title="Contato"
        subtitle="Entre em contato conosco e dê o primeiro passo na sua jornada"
      />

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Informações de Contato */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Informações de Contato</h2>
                <p className="text-muted-foreground">
                  Estamos prontos para responder suas dúvidas e ajudá-lo a iniciar sua jornada no Ving Tsun.
                </p>
              </div>

              <div className="space-y-6">
                {/* Endereço */}
                <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:border-secondary/50 transition-all">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Endereço</h3>
                    <p className="text-muted-foreground">
                      Rua Dias da Cruz, 148 – Sala 303<br />
                      Méier – Rio de Janeiro, RJ
                    </p>
                    <a 
                      href="https://maps.google.com/?q=Rua+Dias+da+Cruz,+148+-+Sala+303+-+Meier+-+RJ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary text-sm hover:underline mt-2 inline-block"
                    >
                      Ver no Google Maps →
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <a 
                  href="https://wa.me/5521982112164"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:border-green-500/50 transition-all group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">WhatsApp</h3>
                    <p className="text-muted-foreground">(21) 98211-2164</p>
                    <p className="text-green-500 text-sm mt-1">Clique para enviar mensagem</p>
                  </div>
                </a>

                {/* Telefone */}
                <a 
                  href="tel:+5521982112164"
                  className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:border-secondary/50 transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Telefone</h3>
                    <p className="text-muted-foreground">(21) 98211-2164</p>
                  </div>
                </a>

                {/* Email */}
                <a 
                  href="mailto:cristianogoldmanijc@gmail.com"
                  className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:border-secondary/50 transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">E-mail</h3>
                    <p className="text-muted-foreground">cristianogoldmanijc@gmail.com</p>
                  </div>
                </a>

                {/* Instagram */}
                <a 
                  href="https://instagram.com/vingtsunkungfuflow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:border-pink-500/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Instagram className="w-6 h-6 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Instagram</h3>
                    <p className="text-muted-foreground">@vingtsunkungfuflow</p>
                  </div>
                </a>

                {/* Horários */}
                <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Horários de Aula</h3>
                    <p className="text-muted-foreground">
                      Segundas, Quartas ou Sextas<br />
                      Manhã: 9h às 10h<br />
                      Noite: 20h às 21h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulário */}
            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-2">Envie uma Mensagem</h2>
              <p className="text-muted-foreground mb-8">
                Preencha o formulário abaixo e entraremos em contato o mais breve possível.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-foreground mb-2">
                    Nome Completo *
                  </label>
                  <Input
                    id="nome"
                    name="nome"
                    type="text"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    className="bg-muted border-border"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-mail *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="bg-muted border-border"
                  />
                </div>

                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-foreground mb-2">
                    Telefone / WhatsApp *
                  </label>
                  <Input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    required
                    value={formData.telefone}
                    onChange={handleChange}
                    placeholder="(21) 99999-9999"
                    className="bg-muted border-border"
                  />
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-foreground mb-2">
                    Mensagem *
                  </label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    required
                    value={formData.mensagem}
                    onChange={handleChange}
                    placeholder="Como podemos ajudá-lo?"
                    rows={5}
                    className="bg-muted border-border resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                >
                  {isSubmitting ? (
                    'Enviando...'
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Mensagem
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-12 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.0563012436366!2d-43.28384!3d-22.9036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997bf3e4f5a39f%3A0x0!2sRua%20Dias%20da%20Cruz%2C%20148%20-%20M%C3%A9ier%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Escola"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-black font-heading">
              Quer Começar <span className="text-gradient-primary">Ainda Esta Semana</span>?
            </h2>
            <p className="text-muted-foreground">
              Clique abaixo e fale diretamente com o Mestre Cristiano Goldman
            </p>
            <a 
              href="https://wa.me/5521982112164?text=Olá! Quero iniciar meu treinamento de Ving Tsun."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-12 py-7 glow-red"
              >
                Quero Iniciar Meu Treinamento
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;
