import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Carlos Silva',
      role: 'Aluno há 3 anos',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      quote: 'O Wing Shu transformou minha vida. Além da defesa pessoal, ganhei disciplina, foco e uma família de guerreiros.',
    },
    {
      name: 'Ana Rodrigues',
      role: 'Aluna há 2 anos',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      quote: 'Como mulher, me sinto muito mais confiante e segura. Os mestres são excepcionais e o ambiente é acolhedor.',
    },
    {
      name: 'Pedro Santos',
      role: 'Aluno há 5 anos',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      quote: 'A técnica do Wing Chun é fascinante. Cada aula é uma descoberta. Evoluí muito como praticante e como pessoa.',
    },
    {
      name: 'Mariana Costa',
      role: 'Aluna há 1 ano',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      quote: 'Procurava uma arte marcial eficiente e encontrei muito mais. A filosofia Wing Shu mudou minha perspectiva de vida.',
    },
  ];

  return (
    <section id="depoimentos" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-secondary text-sm font-bold tracking-widest uppercase">Histórias de Transformação</span>
          <h2 className="text-4xl md:text-5xl font-black font-heading mt-4">
            O Que Nossos <span className="text-gradient-primary">Alunos</span> Dizem
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Conheça as experiências de quem já faz parte da família Wing Shu.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card p-6 rounded-lg border border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-elegant animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="text-secondary/30 w-10 h-10 mb-4" />
              
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-secondary"
                />
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-secondary">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Testimonials;
