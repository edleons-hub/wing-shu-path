import { Target, Eye, Heart, Award, Users, Shield, Sparkles, BookOpen } from 'lucide-react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';

const Sobre = () => {
  const valores = [
    { icon: Shield, text: 'Tradição e autenticidade' },
    { icon: Award, text: 'Disciplina e compromisso' },
    { icon: Sparkles, text: 'Desenvolvimento contínuo' },
    { icon: Target, text: 'Precisão e excelência em tudo que for feito' },
    { icon: Users, text: 'Respeito à linhagem e ao indivíduo' },
    { icon: BookOpen, text: 'Clareza técnica e pedagógica' },
    { icon: Heart, text: 'Desenvolvimento humano integral' },
  ];

  return (
    <Layout>
      <PageHeader 
        title="Sobre Nós"
        subtitle="Conheça nossa história, nossa família e os valores que nos guiam"
      />

      {/* História da Família */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Nossa Família</span>
              <h2 className="text-3xl md:text-4xl font-black font-heading">
                <span className="text-gradient-primary">História da Família Kung Fu</span>
              </h2>
            </div>
            
            <div className="prose prose-lg prose-invert mx-auto space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Em julho de 2024, iniciamos a nossa família Kung Fu de Ving Tsun (Wing Chun) no Méier — 
                a <strong className="text-secondary">família Moy Ke Yuek</strong> da linhagem do Patriarca Moy Yat, 
                mestre de Grão Mestre Leo Imamura, que é mestre do Mestre Sênior Julio Camacho e que é mestre 
                do Mestre Qualificado <strong className="text-secondary">Cristiano Goldman</strong>.
              </p>
              
              <p className="text-muted-foreground leading-relaxed text-lg">
                Representamos no Méier o <strong className="text-foreground">Instituto Julio Camacho</strong>, 
                fundado pelo Mestre Sênior Julio Camacho, afiliado à <strong className="text-foreground">Moy Yat 
                Ving Tsun Federation</strong>.
              </p>
              
              <p className="text-muted-foreground leading-relaxed text-lg">
                A tradição que seguimos nasce da linhagem do Ving Tsun, um sistema conhecido por sua eficiência, 
                lógica e simplicidade. Carregamos os princípios transmitidos de geração em geração, preservando 
                a essência do estilo e sua metodologia original.
              </p>
              
              <p className="text-muted-foreground leading-relaxed text-lg">
                A história da família e da linhagem que seguimos é marcada pela <strong className="text-secondary">disciplina, 
                respeito e compromisso com o desenvolvimento humano</strong> — valores que mantemos vivos em cada aula.
              </p>
            </div>

            {/* Linhagem Visual */}
            <div className="mt-16 p-8 bg-card rounded-2xl border border-border">
              <h3 className="text-xl font-bold text-center mb-8 text-secondary">Nossa Linhagem</h3>
              <div className="flex flex-wrap justify-center items-center gap-4 text-sm md:text-base">
                <span className="text-muted-foreground">Yip Man</span>
                <span className="text-secondary">→</span>
                <span className="px-4 py-2 bg-secondary/20 rounded-lg text-secondary font-semibold">Moy Yat</span>
                <span className="text-secondary">→</span>
                <span className="text-muted-foreground">Leo Imamura</span>
                <span className="text-secondary">→</span>
                <span className="text-muted-foreground">Julio Camacho</span>
                <span className="text-secondary">→</span>
                <span className="px-4 py-2 bg-primary/20 rounded-lg text-primary font-semibold">Cristiano Goldman</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* História da Escola */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Fundação</span>
              <h2 className="text-3xl md:text-4xl font-black font-heading">
                <span className="text-gradient-primary">História da Escola</span>
              </h2>
            </div>
            
            <div className="prose prose-lg prose-invert mx-auto space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Nossa escola foi fundada a partir da paixão de seu Mestre <strong className="text-secondary">Cristiano 
                Goldman</strong>, que iniciou sua jornada no Kung Fu Ving Tsun (Wing Chun) em <strong className="text-foreground">28 
                de julho de 2000</strong>. Desde então, foram anos de prática, estudo, dedicação e aperfeiçoamento, 
                tanto no Ving Tsun quanto em áreas complementares, como psicologia, comportamento humano e práticas integrativas.
              </p>
              
              <p className="text-muted-foreground leading-relaxed text-lg">
                Com essa vivência, a escola foi criada em <strong className="text-foreground">2024</strong>, com o 
                intuito de unir <strong className="text-secondary">tradição e ciência</strong>, proporcionando ao 
                aluno um treinamento profundo, estruturado e transformador.
              </p>
              
              <p className="text-muted-foreground leading-relaxed text-lg">
                Ao longo desse tempo, a escola se consolidou como um espaço de seriedade, respeito e desenvolvimento 
                físico, emocional e mental. Buscando sempre o <strong className="text-secondary">desenvolvimento humano</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Missão */}
            <div className="p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all group">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Missão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Transmitir o Ving Tsun de forma tradicional, técnica e acessível, promovendo evolução física, 
                mental e emocional aos praticantes. Respeitando sempre os valores pessoais de cada um.
              </p>
            </div>

            {/* Visão */}
            <div className="p-8 bg-card rounded-2xl border border-border hover:border-secondary/50 transition-all group">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Eye className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Visão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser referência no Rio de Janeiro na formação de praticantes conscientes, buscando sempre 
                excelência em tudo que fizerem, preparados para a luta do dia a dia e alinhados à essência do Ving Tsun.
              </p>
            </div>

            {/* Valores */}
            <div className="p-8 bg-card rounded-2xl border border-border hover:border-accent/50 transition-all group lg:row-span-2">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Valores</h3>
              <ul className="space-y-4">
                {valores.map((valor, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <valor.icon className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>{valor.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;
