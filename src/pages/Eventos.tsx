import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';

const Eventos = () => {
  const proximosEventos = [
    {
      titulo: 'Workshop de Chi Sao',
      data: 'Em breve',
      horario: 'A definir',
      local: 'Escola Cristiano Goldman',
      descricao: 'Workshop intensivo focado no desenvolvimento da sensibilidade e técnicas de Chi Sao.',
      status: 'em_breve',
    },
    {
      titulo: 'Seminário de Fundamentos',
      data: 'Em breve',
      horario: 'A definir',
      local: 'Escola Cristiano Goldman',
      descricao: 'Seminário para alunos iniciantes sobre os fundamentos essenciais do Ving Tsun.',
      status: 'em_breve',
    },
    {
      titulo: 'Encontro da Família Moy Ke Yuek',
      data: 'Em breve',
      horario: 'A definir',
      local: 'A definir',
      descricao: 'Encontro anual da família kung fu para troca de experiências e treinamento conjunto.',
      status: 'em_breve',
    },
  ];

  const artigos = [
    {
      titulo: 'A Importância da Linha Central no Ving Tsun',
      categoria: 'Técnicas',
      resumo: 'Descubra por que a linha central é o conceito mais fundamental do sistema Ving Tsun.',
      status: 'em_breve',
    },
    {
      titulo: 'Kung Fu e Saúde Mental',
      categoria: 'Saúde',
      resumo: 'Como a prática regular do Ving Tsun pode beneficiar sua saúde mental e emocional.',
      status: 'em_breve',
    },
    {
      titulo: 'A Filosofia por Trás das Artes Marciais',
      categoria: 'Filosofia',
      resumo: 'Entenda os princípios filosóficos que guiam a prática do Ving Tsun.',
      status: 'em_breve',
    },
    {
      titulo: 'Dicas para Maximizar Seu Treino',
      categoria: 'Dicas',
      resumo: 'Estratégias práticas para aproveitar ao máximo cada sessão de treinamento.',
      status: 'em_breve',
    },
  ];

  return (
    <Layout>
      <PageHeader 
        title="Eventos e Notícias"
        subtitle="Fique por dentro dos próximos eventos, workshops e conteúdos da nossa escola"
      />

      {/* Próximos Eventos */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Agenda</span>
            <h2 className="text-3xl md:text-4xl font-black font-heading">
              <span className="text-gradient-primary">Próximos Eventos</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto grid gap-6">
            {proximosEventos.map((evento, index) => (
              <div 
                key={index}
                className="p-8 bg-card rounded-2xl border border-border hover:border-secondary/50 transition-all group"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Calendar className="w-10 h-10 text-secondary" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-secondary/20 text-secondary text-xs font-semibold rounded-full">
                        {evento.status === 'em_breve' ? 'EM BREVE' : 'CONFIRMADO'}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{evento.titulo}</h3>
                    <p className="text-muted-foreground">{evento.descricao}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {evento.data} • {evento.horario}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {evento.local}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Quer ser avisado sobre os próximos eventos?
            </p>
            <a 
              href="https://wa.me/5521982112164?text=Olá! Gostaria de ser avisado sobre os próximos eventos da escola."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                Receber Avisos de Eventos
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Artigos e Conteúdos */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Conteúdos</span>
            <h2 className="text-3xl md:text-4xl font-black font-heading">
              <span className="text-gradient-primary">Artigos e Dicas</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Em breve, conteúdos exclusivos sobre técnicas, saúde, nutrição, filosofia das artes marciais e muito mais.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {artigos.map((artigo, index) => (
              <div 
                key={index}
                className="p-6 bg-card rounded-xl border border-border hover:border-secondary/30 transition-all group opacity-60"
              >
                <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
                  {artigo.categoria}
                </span>
                <h3 className="text-lg font-bold text-foreground mt-2 mb-3 group-hover:text-secondary transition-colors">
                  {artigo.titulo}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{artigo.resumo}</p>
                <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                  Em breve <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6 bg-gradient-to-br from-primary/10 to-secondary/10 p-12 rounded-3xl">
            <h2 className="text-2xl md:text-3xl font-black font-heading">
              Não Perca Nenhuma <span className="text-gradient-primary">Novidade</span>
            </h2>
            <p className="text-muted-foreground">
              Siga-nos no Instagram para acompanhar os treinos, eventos e conteúdos exclusivos da escola.
            </p>
            <a 
              href="https://instagram.com/vingtsunkungfuflow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                @vingtsunkungfuflow
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Eventos;
