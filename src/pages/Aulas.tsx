import { Clock, Calendar, MapPin, CheckCircle2, Sparkles } from 'lucide-react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';

const Aulas = () => {
  const horarios = [
    { dias: 'Segundas, Quartas ou Sextas', periodo: 'Manhã', horario: '9h às 10h' },
    { dias: 'Segundas, Quartas ou Sextas', periodo: 'Noite', horario: '20h às 21h' },
  ];

  const inclusos = [
    'Acompanhamento personalizado',
    'Material didático sobre o sistema',
    'Acesso à teoria e história do Ving Tsun',
    'Integração à família Kung Fu',
    'Ambiente seguro e acolhedor',
    'Progressão estruturada',
  ];

  return (
    <Layout>
      <PageHeader 
        title="Aulas e Horários"
        subtitle="Encontre o melhor horário para iniciar sua jornada no Ving Tsun"
      />

      {/* Horários */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Horários</span>
              <h2 className="text-3xl md:text-4xl font-black font-heading">
                <span className="text-gradient-primary">Grade de Horários</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {horarios.map((item, index) => (
                <div 
                  key={index}
                  className="p-8 bg-card rounded-2xl border border-border hover:border-secondary/50 transition-all group"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Clock className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{item.periodo}</h3>
                      <p className="text-muted-foreground text-sm">{item.dias}</p>
                    </div>
                  </div>
                  <div className="text-center py-6 bg-muted/50 rounded-xl">
                    <p className="text-4xl font-black text-gradient-primary">{item.horario}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Localização */}
            <div className="p-8 bg-card rounded-2xl border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Localização</h3>
                  <p className="text-muted-foreground">Méier – Rio de Janeiro</p>
                </div>
              </div>
              <p className="text-lg text-muted-foreground mb-4">
                <strong className="text-foreground">Rua Dias da Cruz, 148 – Sala 303</strong><br />
                Méier – Rio de Janeiro, RJ
              </p>
              <p className="text-muted-foreground">
                Ambiente amplo, profissional e equipado para aulas de Ving Tsun, workshops e treinamentos especiais.
              </p>
              <a 
                href="https://maps.google.com/?q=Rua+Dias+da+Cruz,+148+-+Sala+303+-+Meier+-+RJ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-secondary hover:underline"
              >
                Ver no Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Aula Experimental */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-block p-4 bg-secondary/20 rounded-full">
              <Sparkles className="w-12 h-12 text-secondary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black font-heading">
              Aula Experimental <span className="text-gradient-primary">100% Gratuita</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Venha conhecer nossa escola, o Mestre Cristiano Goldman e vivencie o Ving Tsun na prática. 
              Sem compromisso, sem pressão — apenas uma experiência transformadora.
            </p>
            <a 
              href="https://wa.me/5521982112164?text=Olá! Gostaria de agendar uma aula experimental gratuita."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-12 py-7 glow-red"
              >
                Agendar Minha Aula Gratuita
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Planos e Valores */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Investimento</span>
            <h2 className="text-3xl md:text-4xl font-black font-heading">
              <span className="text-gradient-primary">Planos e Valores</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Programa Fundamental */}
            <div className="p-8 bg-card rounded-3xl border-2 border-secondary shadow-lg shadow-secondary/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-secondary text-secondary-foreground text-xs font-bold px-4 py-1 rounded-bl-lg">
                RECOMENDADO
              </div>
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-8 h-8 text-secondary" />
                <h3 className="text-xl font-bold text-foreground">Programa Fundamental</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Ideal para iniciantes e para quem deseja aprender a base estruturada do estilo.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  Aulas teórico-práticas
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  12 aulas + convite para o Programa Tradicional
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  Duração média: 3 meses
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  Acesso aos fundamentos essenciais
                </li>
              </ul>
              <div className="text-center mb-6">
                <span className="text-muted-foreground text-sm">Investimento</span>
                <p className="text-4xl font-black text-gradient-primary">R$ 195<span className="text-lg text-muted-foreground">/mês</span></p>
              </div>
              <a 
                href="https://wa.me/5521982112164?text=Olá! Gostaria de saber mais sobre o Programa Fundamental."
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                  Quero Me Inscrever
                </Button>
              </a>
            </div>

            {/* Kung-Fu Combat */}
            <div className="p-8 bg-card rounded-3xl border border-border relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-muted text-muted-foreground text-xs font-bold px-4 py-1 rounded-bl-lg">
                EM BREVE
              </div>
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-8 h-8 text-muted-foreground" />
                <h3 className="text-xl font-bold text-foreground">Kung-Fu Combat</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Programa de condicionamento, reflexos e combate técnico.
              </p>
              <ul className="space-y-3 mb-8 opacity-60">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  Condicionamento físico intenso
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  Técnicas de combate aplicado
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  Desenvolvimento de reflexos
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  Vagas limitadas
                </li>
              </ul>
              <div className="text-center mb-6">
                <span className="text-muted-foreground text-sm">Valores</span>
                <p className="text-2xl font-bold text-muted-foreground">Anunciados para lista VIP</p>
              </div>
              <a 
                href="https://wa.me/5521982112164?text=Olá! Gostaria de entrar na lista VIP do Kung-Fu Combat."
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                  Entrar na Lista VIP
                </Button>
              </a>
            </div>
          </div>

          {/* O que está incluso */}
          <div className="max-w-3xl mx-auto mt-16">
            <h3 className="text-xl font-bold text-center mb-8 text-foreground">O Que Está Incluso</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {inclusos.map((item, index) => (
                <div key={index} className="flex items-center gap-2 p-4 bg-card rounded-lg border border-border">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Aulas;
