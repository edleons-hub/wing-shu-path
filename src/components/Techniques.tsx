import { Hand, Eye, Activity, Target, Footprints, Swords } from 'lucide-react';

const Techniques = () => {
  const techniques = [
    {
      icon: Hand,
      title: 'Chi Sao',
      description: 'Mãos coladas - desenvolve sensibilidade tátil e reflexos instantâneos através do contato constante.',
    },
    {
      icon: Target,
      title: 'Siu Nim Tao',
      description: 'Pequena ideia - forma básica que estabelece estrutura, postura e energia interna fundamental.',
    },
    {
      icon: Activity,
      title: 'Chum Kiu',
      description: 'Buscar a ponte - movimentos avançados integrando deslocamento, rotação e técnicas de ataque.',
    },
    {
      icon: Eye,
      title: 'Biu Jee',
      description: 'Dedos que perfuram - técnicas de emergência para situações extremas e recuperação de posição.',
    },
    {
      icon: Footprints,
      title: 'Footwork',
      description: 'Trabalho de pernas - movimentação triangular única que garante estabilidade e mobilidade.',
    },
    {
      icon: Swords,
      title: 'Muk Yan Jong',
      description: 'Boneco de madeira - treinamento avançado que aperfeiçoa timing, precisão e potência.',
    },
  ];

  return (
    <section id="tecnicas" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-secondary text-sm font-bold tracking-widest uppercase">O Que Você Vai Aprender</span>
          <h2 className="text-4xl md:text-5xl font-black font-heading mt-4">
            <span className="text-gradient-primary">Técnicas</span> Fundamentais
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Domine as técnicas essenciais do Wing Chun, desde os fundamentos até os movimentos avançados.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techniques.map((technique, index) => (
            <div
              key={technique.title}
              className="group bg-card p-8 rounded-lg border border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-elegant animate-scale-in"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="mb-6">
                <div className="inline-flex p-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <technique.icon className="w-8 h-8 text-secondary" strokeWidth={2} />
                </div>
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-foreground group-hover:text-gradient-primary transition-all">
                {technique.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {technique.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Techniques;
