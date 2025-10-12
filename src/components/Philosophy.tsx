import { Shield, Heart, Users, Zap } from 'lucide-react';
import philosophyImage from '@/assets/philosophy-section.jpg';

const Philosophy = () => {
  const values = [
    {
      icon: Shield,
      title: 'Disciplina',
      description: 'Treinamento constante para aprimorar corpo e mente através da prática dedicada.',
    },
    {
      icon: Heart,
      title: 'Respeito',
      description: 'Honra aos mestres, colegas e à tradição milenar do Wing Chun.',
    },
    {
      icon: Users,
      title: 'Comunidade',
      description: 'Crescimento coletivo onde cada aluno contribui para a evolução de todos.',
    },
    {
      icon: Zap,
      title: 'Eficiência',
      description: 'Movimentos diretos e economia de energia - a essência do Wing Chun.',
    },
  ];

  return (
    <section id="filosofia" className="py-24 px-4 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-secondary text-sm font-bold tracking-widest uppercase">Nossos Valores</span>
          <h2 className="text-4xl md:text-5xl font-black font-heading mt-4">
            <span className="text-gradient-primary">Filosofia</span> Wing Shu
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Mais do que técnicas de combate, ensinamos valores que transformam guerreiros em seres humanos completos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="bg-card p-8 rounded-lg border border-border hover:border-secondary/50 transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-lg group-hover:scale-110 transition-transform duration-300 glow-red">
                  <value.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold font-heading mb-2 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative rounded-lg overflow-hidden shadow-elegant animate-scale-in">
          <img 
            src={philosophyImage} 
            alt="Filosofia Wing Chun" 
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent flex items-end">
            <div className="p-8">
              <blockquote className="text-2xl md:text-3xl font-bold text-foreground italic">
                "Um golpe não precisa ser forte, precisa ser preciso."
              </blockquote>
              <p className="text-secondary mt-2">— Grão-Mestre Ip Man</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
