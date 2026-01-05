import { Zap, Target, Shield, Brain, Heart, Trophy, Timer, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';

const Combate = () => {
  const pilares = [
    {
      icon: Target,
      titulo: 'Movimentação e Estratégia',
      itens: [
        'Padrões de deslocamento',
        'Controle de distância',
        'Criação e quebra de ritmo',
        'Posicionamento inteligente',
      ],
    },
    {
      icon: Shield,
      titulo: 'Aplicações Práticas com Segurança',
      itens: [
        'Golpes diretos e eficientes',
        'Combinações táticas',
        'Defesa pessoal aplicada',
        'Exercícios em dupla com proteção e controle',
        'Entendimento do timing e da leitura corporal',
      ],
    },
    {
      icon: Zap,
      titulo: 'Condicionamento Físico e Marcial',
      itens: [
        'Trabalhos de resistência e explosão',
        'Força funcional específica',
        'Reflexos, velocidade e coordenação',
        'Exercícios para estabilidade e postura',
      ],
    },
  ];

  const beneficiosFisicos = [
    'Melhora significativa do condicionamento',
    'Aumento de força, explosão e rapidez',
    'Resistência cardiovascular',
    'Estabilidade, equilíbrio e mobilidade',
    'Reação mais rápida e eficiente',
    'Desenvolvimento de habilidades de combate seguras e reais',
  ];

  const beneficiosMentais = [
    'Foco e atenção sob pressão',
    'Confiança e autocontrole',
    'Desenvolvimento de disciplina',
    'Superação de limites pessoais',
    'Capacidade de manter a calma em situações intensas',
    'Estratégia e tomada de decisão rápida',
  ];

  const niveis = [
    {
      nivel: 'Iniciante',
      itens: [
        'Introdução aos movimentos básicos',
        'Coordenação e postura',
        'Fundamentos do combate controlado',
        'Movimentação, ritmo e distância',
        'Golpes fundamentais com técnica e precisão',
      ],
    },
    {
      nivel: 'Intermediário',
      itens: [
        'Combinações de ataque e defesa',
        'Controle de tempo e leitura do oponente',
        'Movimentos de adaptação',
        'Intensidade progressiva',
        'Simulações de combate com segurança',
      ],
    },
    {
      nivel: 'Avançado',
      itens: [
        'Alto nível de condicionamento',
        'Estratégias complexas de combate',
        'Tomada de decisão rápida',
        'Cenários variados e aplicações reais',
        'Domínio técnico e mental',
      ],
    },
  ];

  return (
    <Layout>
      <PageHeader 
        title="Kung-Fu Combate"
        subtitle="Prepare-se para o próximo nível. Um treinamento intenso e transformador."
      />

      {/* Intro */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block px-6 py-2 bg-secondary/20 rounded-full">
              <span className="text-secondary font-semibold">EM BREVE</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black font-heading">
              <span className="text-gradient-primary">O Novo Programa da Escola</span>
            </h2>
            <div className="prose prose-lg prose-invert mx-auto text-muted-foreground space-y-6">
              <p>
                O <strong className="text-secondary">Kung-Fu combate</strong> será um programa exclusivo da nossa escola, 
                criado para quem deseja desenvolver habilidades de combate de forma segura, progressiva e estruturada.
              </p>
              <p>
                Enquanto o Ving Tsun trabalha a lógica técnica, a sensibilidade e a estratégia, o Kung-Fu combate será 
                focado em <strong className="text-foreground">condicionamento, aplicação prática, movimentação de combate 
                e adaptação realista</strong>, sempre com responsabilidade e dentro de um ambiente controlado.
              </p>
              <p className="text-xl text-foreground font-medium">
                Prepare-se para um treinamento físico e mental completo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Características Principais */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Pilares</span>
            <h2 className="text-3xl md:text-4xl font-black font-heading">
              <span className="text-gradient-primary">Características Principais</span>
            </h2>
            <p className="text-muted-foreground">O Kung-Fu combate será baseado em três pilares fundamentais</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pilares.map((pilar, index) => (
              <div 
                key={index}
                className="p-8 bg-card rounded-2xl border border-border hover:border-secondary/50 transition-all group"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <pilar.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{pilar.titulo}</h3>
                <ul className="space-y-2">
                  {pilar.itens.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-secondary mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 text-muted-foreground">
            <p>
              Tudo será ensinado com <strong className="text-foreground">metodologia clara, progressiva e acessível</strong>, 
              preservando o respeito, a responsabilidade e a integridade dos praticantes.
            </p>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Benefícios</span>
            <h2 className="text-3xl md:text-4xl font-black font-heading">
              <span className="text-gradient-primary">Benefícios Físicos e Mentais</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              O Kung-Fu Combate será um sistema completo de desenvolvimento físico e psicológico.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 bg-card rounded-2xl border border-border">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Benefícios Físicos</h3>
              </div>
              <ul className="space-y-3">
                {beneficiosFisicos.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-card rounded-2xl border border-border">
              <div className="flex items-center gap-3 mb-6">
                <Brain className="w-8 h-8 text-secondary" />
                <h3 className="text-xl font-bold text-foreground">Benefícios Mentais</h3>
              </div>
              <ul className="space-y-3">
                {beneficiosMentais.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Níveis de Aprendizado */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Progressão</span>
            <h2 className="text-3xl md:text-4xl font-black font-heading">
              <span className="text-gradient-primary">Níveis de Aprendizado</span>
            </h2>
            <p className="text-muted-foreground">O programa terá três níveis, cada um com objetivos claros</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {niveis.map((nivel, index) => (
              <div 
                key={index}
                className="p-8 bg-card rounded-2xl border border-border relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-sm font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-bold text-foreground">{nivel.nivel}</h3>
                </div>
                <ul className="space-y-2">
                  {nivel.itens.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <ArrowRight className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 p-6 bg-secondary/10 rounded-xl max-w-2xl mx-auto">
            <p className="text-foreground font-medium">
              Esse será o estágio de excelência, onde o praticante buscará <strong className="text-secondary">maturidade 
              marcial e controle total</strong> de suas habilidades.
            </p>
          </div>
        </div>
      </section>

      {/* CTA - Lista VIP */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-8 bg-gradient-to-br from-primary/20 to-secondary/20 p-12 rounded-3xl border border-secondary/30">
            <div className="text-6xl">🥋</div>
            <h2 className="text-3xl md:text-4xl font-black font-heading">
              Prepare-se para o <span className="text-gradient-primary">Próximo Nível</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Em breve: <strong className="text-foreground">Kung-Fu Combate</strong> – um treinamento intenso e transformador.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto text-left">
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-secondary" />
                <span>Condicionamento físico real</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-secondary" />
                <span>Reflexos rápidos e precisos</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-secondary" />
                <span>Confiança emocional sob pressão</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-secondary" />
                <span>Técnica aplicada em movimento</span>
              </div>
            </div>
            <div className="pt-4">
              <p className="text-secondary font-semibold mb-4">
                As vagas serão extremamente limitadas.
              </p>
              <p className="text-muted-foreground mb-6">
                Quer ser avisado antes de todos? Inscreva-se na lista de interesse e garanta prioridade no lançamento.
              </p>
              <a 
                href="https://wa.me/5521982112164?text=Olá! Quero entrar na lista VIP do Kung-Fu Combate e ser avisado sobre o lançamento."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-12 py-7 glow-red"
                >
                  Quero Ser Avisado
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Combate;
