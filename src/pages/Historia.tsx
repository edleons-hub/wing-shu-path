import { Flame, Bird, Sword, Target, Brain, Heart, Shield, Zap, BookOpen, Award, Users } from 'lucide-react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Historia = () => {
  const caracteristicas = [
    { icon: Target, title: 'Linha Central', desc: 'Proteção e ataque direcionados ao eixo vital do oponente.' },
    { icon: Zap, title: 'Economia de Movimento', desc: 'Menos esforço, mais resultado.' },
    { icon: Shield, title: 'Estrutura e Biomecânica', desc: 'Força gerada por alinhamento, não por força física.' },
    { icon: Sword, title: 'Ataque e Defesa Simultâneos', desc: 'Praticidade e objetividade.' },
    { icon: Brain, title: 'Sensibilidade e Adaptação', desc: 'Leitura do movimento através do contato.' },
    { icon: Heart, title: 'Simplicidade e Inteligência Tática', desc: 'Nada supérfluo; tudo é funcional.' },
  ];

  const beneficiosFisicos = [
    'Coordenação motora refinada',
    'Força funcional e postura melhorada',
    'Agilidade, equilíbrio e mobilidade',
    'Condicionamento progressivo',
    'Reeducação de movimentos naturais',
  ];

  const beneficiosMentais = [
    'Foco, atenção e clareza mental',
    'Gestão emocional e controle sob pressão',
    'Autoconfiança e autoestima',
    'Redução do estresse',
    'Disciplina, constância e autocontrole',
  ];

  const niveis = [
    {
      nivel: '1',
      nome: 'Siu Nin Tao',
      subtitulo: 'Nível Básico (Pequena Ideia Inicial)',
      conteudo: ['Estrutura', 'Alinhamento', 'Movimento interno', 'Linha central', 'Mobilização da energia', 'Princípios essenciais que sustentam o sistema'],
      destaque: 'É o fundamento de tudo.',
    },
    {
      nivel: '2',
      nome: 'Chum Kiu',
      subtitulo: 'Nível Intermediário (Buscar a Ponte)',
      conteudo: ['Mobilidade estratégica', 'Coordenação entre braço, quadril e corpo', 'Mais equilíbrio corporal', 'Conexão e quebra de distância', 'Controle da ponte e transições'],
      destaque: 'É a ponte entre a base e a aplicação.',
    },
    {
      nivel: '3',
      nome: 'Biu Je',
      subtitulo: 'Nível Avançado (Dedo que Espeta / Dedo que Projeta)',
      conteudo: ['Recuperação da linha central', 'Limites e expansão técnica', 'Potência e precisão extrema', 'Técnica inteligente sob pressão'],
      destaque: 'É o domínio que amplia o sistema para situações reais.',
    },
    {
      nivel: '4-6',
      nome: 'Níveis Superiores',
      subtitulo: 'Inicial, Medial e Final',
      conteudo: [
        'Mui Faa Jong (Boneco de Madeira) – Refinamento de estrutura, energia e aplicações.',
        'Luk Dim Bun Gwan (Bastão Longo) – Força estrutural, extensão da linha central.',
        'Bat Jaan Do (Facas duplas) – Estratégia avançada, precisão e domínio completo.',
      ],
      destaque: 'Esses níveis representam o domínio superior da arte.',
    },
  ];

  return (
    <Layout>
      <PageHeader 
        title="História do Ving Tsun"
        subtitle="Da resistência à sobrevivência: a arte marcial que nasceu da observação, simplicidade e necessidade"
      />

      {/* Origem */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Origens</span>
              <h2 className="text-3xl md:text-4xl font-black font-heading">
                <span className="text-gradient-primary">A Origem do Ving Tsun</span>
              </h2>
            </div>

            <div className="prose prose-lg prose-invert mx-auto space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                A história do Ving Tsun Kung Fu remonta ao período final da <strong className="text-foreground">dinastia 
                Ming</strong> e início da <strong className="text-foreground">dinastia Qing</strong>, um dos momentos 
                mais turbulentos da história chinesa. Naquele tempo, o Templo Shaolin do Sul se tornou um refúgio para 
                praticantes, monges e aqueles que resistiam às invasões e às mudanças políticas impostas pela nova dinastia.
              </p>
              <p className="text-lg leading-relaxed">
                O Ving Tsun nasce dentro desse contexto de <strong className="text-secondary">resistência, simplicidade 
                e necessidade real de sobrevivência</strong>.
              </p>
            </div>

            {/* Incêndio do Templo */}
            <div className="bg-card p-8 md:p-12 rounded-2xl border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                  <Flame className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">O Incêndio do Templo Shaolin</h3>
              </div>
              <div className="prose prose-lg prose-invert space-y-4 text-muted-foreground">
                <p>
                  A lenda conta que, temendo a influência dos monges e seu envolvimento com movimentos revolucionários, 
                  o governo Qing ordenou a destruição do Templo Shaolin. Guerreiros e tropas invadiram o local e 
                  provocaram um grande incêndio, forçando a dispersão de muitos mestres que ali viviam.
                </p>
                <p>
                  Entre os poucos sobreviventes estava a monja budista <strong className="text-secondary">Ng Mui</strong>, 
                  uma das Cinco Anciãs do Shaolin, reconhecida por sua habilidade extraordinária e profundo conhecimento marcial.
                </p>
                <p className="text-foreground font-medium italic">
                  Foi essa fuga — esse renascimento — que plantou a semente do Ving Tsun.
                </p>
              </div>
            </div>

            {/* Ng Mui e a Observação */}
            <div className="bg-card p-8 md:p-12 rounded-2xl border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Bird className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Ng Mui e a Criação do Sistema</h3>
              </div>
              <div className="prose prose-lg prose-invert space-y-4 text-muted-foreground">
                <p>
                  Segundo a tradição, após o incêndio, Ng Mui se refugiou no Templo da Garça Branca, no Monte Tai Leung. 
                  Ali, observando a natureza, ela presenciou um combate entre uma <strong className="text-secondary">garça 
                  branca</strong> e uma <strong className="text-secondary">cobra</strong>.
                </p>
                <p>
                  A garça usava movimentos curtos, diretos e precisos, enquanto a cobra respondia com economia de 
                  movimentos e ataques rápidos e retos.
                </p>
                <p>
                  Dessa observação, Ng Mui percebeu a eficiência de uma estratégia baseada em:
                </p>
                <ul className="grid md:grid-cols-2 gap-2 list-none pl-0">
                  <li className="flex items-center gap-2"><span className="text-secondary">•</span> Simplicidade</li>
                  <li className="flex items-center gap-2"><span className="text-secondary">•</span> Economia de energia</li>
                  <li className="flex items-center gap-2"><span className="text-secondary">•</span> Linha central</li>
                  <li className="flex items-center gap-2"><span className="text-secondary">•</span> Ataque direto e objetivo</li>
                  <li className="flex items-center gap-2"><span className="text-secondary">•</span> Defesa simultânea</li>
                </ul>
                <p className="text-foreground">
                  E assim começou a desenvolver um novo sistema: um estilo eficiente, enxuto, acessível e estruturado, 
                  ideal para pessoas que precisavam se defender, mesmo sem força física ou treinamento prolongado.
                </p>
              </div>
            </div>

            {/* Yim Wing Tsun */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 md:p-12 rounded-2xl border border-secondary/30">
              <h3 className="text-2xl font-bold text-foreground mb-6">O Encontro com Yim Ving Tsun</h3>
              <div className="prose prose-lg prose-invert space-y-4 text-muted-foreground">
                <p>
                  Durante sua jornada, Ng Mui conheceu uma jovem chamada <strong className="text-secondary">Yim Ving Tsun</strong>. 
                  Yim Ving Tsun sofria ameaças constantes de um bandido local que queria forçá-la a se casar com ele.
                </p>
                <p>
                  Sensível à situação e percebendo a determinação da jovem, Ng Mui decidiu ensiná-la o kung fu que havia 
                  desenvolvido. A jovem aprendeu o estilo com dedicação e o utilizou para derrotar seu agressor, garantindo sua liberdade.
                </p>
                <p>
                  No passar do tempo, Yim Ving Tsun transformou todo o conhecimento recebido em um sistema Marcial chamado 
                  <strong className="text-secondary"> Ving Tsun Kung Fu</strong> e ao fazer isso passou todo o sistema para 
                  seu marido, o Patriarca Leung Bok To.
                </p>
                <p>
                  Seguindo a nossa linhagem, o sistema chegou ao Patriarca <strong className="text-foreground">Yip Man</strong>, 
                  que passou todo seu conhecimento para o Patriarca <strong className="text-secondary">Moy Yat</strong>, 
                  que trouxe o sistema completo para os Estados Unidos em 1973 — e foi aluno na mesma turma de seu irmão 
                  kung fu <strong className="text-foreground">Bruce Lee</strong>.
                </p>
              </div>
              <div className="mt-8 p-6 bg-card/50 rounded-xl text-center">
                <p className="text-lg text-foreground font-medium">
                  <strong className="text-secondary">Ving Tsun (Wing Chun)</strong> — "Primavera Eterna"
                </p>
                <p className="text-muted-foreground mt-2">
                  Por isso, o símbolo é uma <strong className="text-secondary">flor de ameixa</strong>, pois simboliza o início da primavera.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Características Principais */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Sistema</span>
            <h2 className="text-3xl md:text-4xl font-black font-heading">
              <span className="text-gradient-primary">Características Principais</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              O Ving Tsun é uma arte marcial distinta, marcada por lógica, estratégia e eficiência.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {caracteristicas.map((item, index) => (
              <div 
                key={item.title}
                className="p-6 bg-card rounded-xl border border-border hover:border-secondary/50 transition-all duration-300 group"
              >
                <item.icon className="w-10 h-10 text-secondary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
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
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              O Ving Tsun treina corpo, estratégia e mente simultaneamente
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 bg-card rounded-2xl border border-border">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Físicos</h3>
              </div>
              <ul className="space-y-3">
                {beneficiosFisicos.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-card rounded-2xl border border-border">
              <div className="flex items-center gap-3 mb-6">
                <Brain className="w-8 h-8 text-secondary" />
                <h3 className="text-xl font-bold text-foreground">Mentais e Emocionais</h3>
              </div>
              <ul className="space-y-3">
                {beneficiosMentais.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0"></span>
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
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Programa Tradicional</span>
            <h2 className="text-3xl md:text-4xl font-black font-heading">
              <span className="text-gradient-primary">Níveis de Aprendizado</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              O sistema tradicional é estruturado em domínios, cada um com sua função no desenvolvimento do praticante.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {niveis.map((nivel) => (
                <AccordionItem 
                  key={nivel.nivel} 
                  value={nivel.nivel}
                  className="bg-card rounded-xl border border-border px-6 data-[state=open]:border-secondary/50"
                >
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex items-center gap-4 text-left">
                      <span className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-sm font-bold text-primary-foreground">
                        {nivel.nivel}
                      </span>
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{nivel.nome}</h3>
                        <p className="text-sm text-muted-foreground">{nivel.subtitulo}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <ul className="space-y-2 mb-4 ml-14">
                      {nivel.conteudo.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-secondary mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="ml-14 text-secondary font-medium italic">{nivel.destaque}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Programa Fundamental */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Para Iniciantes</span>
              <h2 className="text-3xl md:text-4xl font-black font-heading">
                <span className="text-gradient-primary">Programa Fundamental</span>
              </h2>
            </div>

            <div className="bg-gradient-to-br from-card to-muted p-8 md:p-12 rounded-3xl border border-border space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">O Que É?</h3>
                  <p className="text-muted-foreground">12 aulas teórico-práticas estruturadas</p>
                </div>
              </div>

              <div className="prose prose-lg prose-invert space-y-4 text-muted-foreground">
                <p>
                  O Programa Fundamental é um percurso de <strong className="text-secondary">12 aulas</strong> especialmente 
                  criado para introduzir o praticante ao universo do Ving Tsun Kung Fu de forma estruturada, acessível e clara.
                </p>
                <p>
                  É a porta de entrada ideal para iniciantes, pois apresenta os principais fundamentos que sustentam todo 
                  o sistema, permitindo que o aluno desenvolva base, consciência corporal, entendimento técnico e preparação mental.
                </p>
                <p>
                  Esse programa foi criado pelo <strong className="text-foreground">Mestre Sênior Júlio Camacho</strong> e 
                  desenvolvido por <strong className="text-secondary">Cristiano Goldman</strong>, Mestre Qualificado de 
                  Ving Tsun Kung Fu.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card/50 p-6 rounded-xl">
                  <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-secondary" />
                    O Programa Serve Para:
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Preparar o aluno para uma jornada marcial consistente</li>
                    <li>• Ensinar os pilares do Ving Tsun</li>
                    <li>• Desenvolver consciência corporal e mental</li>
                    <li>• Corrigir posturas e alinhamentos</li>
                    <li>• Ensinar a lógica do sistema</li>
                  </ul>
                </div>

                <div className="bg-card/50 p-6 rounded-xl">
                  <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-secondary" />
                    Ao Concluir, o Aluno Estará Apto a:
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Compreender os fundamentos do Ving Tsun</li>
                    <li>• Entrar no Programa Tradicional com segurança</li>
                    <li>• Evoluir mais rápido</li>
                    <li>• Ter postura, consciência e base corretas</li>
                    <li>• Saber exatamente o que está fazendo e por quê</li>
                  </ul>
                </div>
              </div>

              <div className="bg-secondary/20 p-6 rounded-xl text-center">
                <p className="text-lg text-foreground font-medium mb-4">
                  Após o Programa Fundamental, o aluno é convidado a seguir para o <strong className="text-secondary">Programa 
                  Tradicional</strong> e fazer parte da <strong className="text-secondary">família Kung Fu Moy Ke Yuek</strong>.
                </p>
                <a 
                  href="https://wa.me/5521982112164?text=Olá! Gostaria de saber mais sobre o Programa Fundamental."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                    Quero Começar o Programa Fundamental
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Historia;
