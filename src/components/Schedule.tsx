import { Clock, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Schedule = () => {
  const classes = [
    { day: 'Segunda-feira', beginner: '18:00 - 19:30', advanced: '19:30 - 21:00', level: 'Iniciante / Avançado' },
    { day: 'Terça-feira', beginner: '07:00 - 08:30', advanced: '18:00 - 19:30', level: 'Manhã / Noite' },
    { day: 'Quarta-feira', beginner: '18:00 - 19:30', advanced: '19:30 - 21:00', level: 'Iniciante / Avançado' },
    { day: 'Quinta-feira', beginner: '07:00 - 08:30', advanced: '18:00 - 19:30', level: 'Manhã / Noite' },
    { day: 'Sexta-feira', beginner: '18:00 - 19:30', advanced: '19:30 - 21:00', level: 'Iniciante / Avançado' },
    { day: 'Sábado', beginner: '09:00 - 10:30', advanced: '10:30 - 12:00', level: 'Todos os níveis' },
  ];

  const benefits = [
    { icon: Clock, text: 'Horários flexíveis para sua rotina' },
    { icon: Users, text: 'Turmas reduzidas para atenção individual' },
    { icon: Award, text: 'Aulas ministradas por instrutores certificados' },
  ];

  return (
    <section id="horarios" className="py-24 px-4 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-secondary text-sm font-bold tracking-widest uppercase">Planeje Seu Treino</span>
          <h2 className="text-4xl md:text-5xl font-black font-heading mt-4">
            <span className="text-gradient-primary">Horários</span> das Aulas
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Escolha o horário que melhor se encaixa na sua rotina e comece sua transformação.
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-card p-6 rounded-lg border border-border animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-lg glow-red">
                <benefit.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-foreground font-medium">{benefit.text}</span>
            </div>
          ))}
        </div>

        {/* Schedule Table */}
        <div className="bg-card rounded-lg border border-border overflow-hidden shadow-elegant animate-scale-in">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-primary to-secondary">
                <tr>
                  <th className="px-6 py-4 text-left text-primary-foreground font-bold">Dia da Semana</th>
                  <th className="px-6 py-4 text-left text-primary-foreground font-bold">Turma Iniciante</th>
                  <th className="px-6 py-4 text-left text-primary-foreground font-bold">Turma Avançada</th>
                  <th className="px-6 py-4 text-left text-primary-foreground font-bold">Nível</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {classes.map((classItem, index) => (
                  <tr
                    key={classItem.day}
                    className="hover:bg-muted/50 transition-colors"
                  >
                    <td className="px-6 py-4 font-semibold text-foreground">{classItem.day}</td>
                    <td className="px-6 py-4 text-muted-foreground">{classItem.beginner}</td>
                    <td className="px-6 py-4 text-muted-foreground">{classItem.advanced}</td>
                    <td className="px-6 py-4">
                      <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-secondary/20 text-secondary">
                        {classItem.level}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground mb-6 text-lg">
            Primeira aula gratuita para novos alunos!
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-12 py-6 glow-gold"
          >
            Agende Sua Aula Experimental
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
