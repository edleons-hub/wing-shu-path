import { ArrowDown, Shield, Brain, Heart, Target, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import heroImage from '@/assets/hero-training.jpg';
import trainingImage from '@/assets/Treino_001.png';
const Index = () => {
  const benefits = [{
    icon: Shield,
    title: 'Tradição',
    desc: 'Linhagem autêntica do Ving Tsun'
  }, {
    icon: Brain,
    title: 'Mental',
    desc: 'Foco, clareza e disciplina'
  }, {
    icon: Heart,
    title: 'Emocional',
    desc: 'Equilíbrio e autoconfiança'
  }, {
    icon: Target,
    title: 'Técnica',
    desc: 'Precisão e eficiência'
  }, {
    icon: Users,
    title: 'Comunidade',
    desc: 'Família Kung Fu unida'
  }, {
    icon: Award,
    title: 'Excelência',
    desc: 'Desenvolvimento contínuo'
  }];
  return <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden -mt-20">
        <div className="absolute inset-0 z-0" style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background"></div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center pt-20">
          <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
            {/* Chinese Character */}
            <div className="text-8xl md:text-9xl font-black text-secondary/30 animate-pulse">
              詠春
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-heading leading-tight">
              <span className="text-gradient-primary">VING TSUN</span>
              <br />
              <span className="text-foreground">KUNG FU</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-secondary font-semibold">
              Tradição, Técnica e Desenvolvimento Humano
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Bem-vindo à nossa escola de Ving Tsun Kung Fu no Méier. 
Ensinamos o Kung Fu  como um caminho completo de desenvolvimento físico, mental e emocional, preservando a essência do sistema e sua lógica de combate inteligente.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <a href="https://wa.me/5521982112164?text=Olá! Gostaria de agendar uma aula experimental gratuita." target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-10 py-7 glow-red w-full sm:w-auto">
                  Aula Experimental Gratuita
                </Button>
              </a>
              <Link to="/historia">
                <Button size="lg" variant="outline" className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all text-lg px-10 py-7 w-full sm:w-auto">
                  Conheça Nossa História
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <a href="#sobre" className="text-secondary">
            <ArrowDown size={32} />
          </a>
        </div>
      </section>


      {/* About Preview Section */}
      <section id="sobre" className="py-24 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-up">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Nosso Método</span>
            <h2 className="text-3xl md:text-5xl font-black font-heading">
              <span className="text-gradient-primary">Programa Fundamental</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nosso método une tradição, clareza e progressão, iniciando pelo <strong className="text-secondary">Programa 
              Fundamental</strong>, um módulo de 12 aulas teórico-práticas. Nele, o aluno aprende os principais fundamentos do Ving Tsun, 
              mantendo o conceito da linha central e os nomes tradicionais das técnicas em chinês no sistema tradicional.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Após essa base sólida, o aluno é convidado a seguir para o <strong className="text-secondary">Programa 
              Tradicional</strong>, que abrange os seis domínios clássicos: <em>Siu Nin Tao, Chum Kiu, Biu Je, Muy Faa Jong, 
              Luk Dim Bon Gwan e Bat Jaan Do</em>.
            </p>
          </div>
        </div>
      </section>

      
      <div className="container mx-auto mt-12">
        <div className="max-w-4xl mx-auto">
          <img src={trainingImage} alt="Treino de Kung Fu" className="w-full rounded-2xl shadow-lg object-cover" />
        </div>
      </div>

      {/* Benefits Grid */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Benefícios</span>
            <h2 className="text-3xl md:text-4xl font-black font-heading">
              <span className="text-gradient-primary">Mais Que Uma Arte Marcial</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => <div key={benefit.title} className="p-8 bg-card rounded-2xl border border-border hover:border-secondary/50 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/5 animate-fade-in" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <benefit.icon className="w-12 h-12 text-secondary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.desc}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="text-6xl text-secondary/30">梅</div>
            <blockquote className="text-2xl md:text-3xl font-heading italic text-foreground leading-relaxed">
              "Somos mais que uma escola de artes marciais: somos um espaço de crescimento humano, 
              onde cada praticante desenvolve foco, equilíbrio, resiliência e confiança — dentro e fora do tatame."
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-8 bg-card p-12 rounded-3xl border border-border shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-black font-heading">
              Dê o <span className="text-gradient-primary">Primeiro Passo</span> Agora
            </h2>
            <p className="text-lg text-muted-foreground">
              Agende uma aula experimental gratuita e vivencie o Ving Tsun na prática
            </p>
            <a href="https://wa.me/5521982112164?text=Olá! Gostaria de agendar uma aula experimental gratuita." target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-12 py-7 glow-red">
                Quero Iniciar Meu Treinamento
              </Button>
            </a>
            <p className="text-sm text-muted-foreground">
              Fale diretamente com o Mestre Cristiano Goldman
            </p>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Index;