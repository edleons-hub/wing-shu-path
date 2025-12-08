import { HelpCircle } from 'lucide-react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      categoria: 'Sobre as Aulas',
      perguntas: [
        {
          pergunta: 'Preciso ter experiência prévia em artes marciais?',
          resposta: 'Não! O Programa Fundamental foi criado especialmente para iniciantes. Você não precisa de nenhuma experiência anterior. Nosso método é estruturado para que qualquer pessoa, independente de idade ou condicionamento físico, possa iniciar sua jornada no Ving Tsun.',
        },
        {
          pergunta: 'Qual a idade mínima para começar a treinar?',
          resposta: 'Aceitamos alunos a partir de 14 anos. Para menores de idade, é necessário autorização dos pais ou responsáveis. O Ving Tsun é uma arte marcial que trabalha técnica e estratégia, sendo adequada para diferentes faixas etárias.',
        },
        {
          pergunta: 'Como funciona a aula experimental gratuita?',
          resposta: 'A aula experimental é 100% gratuita e sem compromisso. Você vai conhecer a escola, o Mestre Cristiano Goldman, e vivenciar uma aula prática de Ving Tsun. É a oportunidade perfeita para sentir o ambiente e entender se o estilo é para você. Basta agendar pelo WhatsApp.',
        },
        {
          pergunta: 'Preciso de algum equipamento ou uniforme?',
          resposta: 'Para começar, você precisa apenas de roupas confortáveis (camiseta e calça de moletom ou similar) e estar descalço. Conforme avança no treinamento, o uniforme tradicional pode ser adquirido, mas não é obrigatório no início.',
        },
        {
          pergunta: 'Quantas vezes por semana devo treinar?',
          resposta: 'Recomendamos no mínimo 2 a 3 vezes por semana para um progresso consistente. Oferecemos aulas em dias alternados (segundas, quartas ou sextas) justamente para facilitar essa frequência. A regularidade é fundamental para o desenvolvimento no Ving Tsun.',
        },
      ],
    },
    {
      categoria: 'Sobre o Ving Tsun',
      perguntas: [
        {
          pergunta: 'O que é Ving Tsun (Wing Chun)?',
          resposta: 'Ving Tsun é um sistema de Kung Fu chinês conhecido por sua eficiência, lógica e simplicidade. Foi desenvolvido para combate real, focando em economia de movimento, linha central e aplicação prática. É uma arte marcial que trabalha corpo, mente e estratégia simultaneamente.',
        },
        {
          pergunta: 'Qual a diferença entre Ving Tsun e outras artes marciais?',
          resposta: 'O Ving Tsun se destaca pela sua lógica de combate baseada em princípios como linha central, economia de movimento e ataque/defesa simultâneos. Diferente de outras artes que focam em força física ou acrobacias, o Ving Tsun prioriza técnica, sensibilidade e eficiência — permitindo que qualquer pessoa, independente de porte físico, possa se defender efetivamente.',
        },
        {
          pergunta: 'O Ving Tsun é eficiente para defesa pessoal?',
          resposta: 'Sim! O Ving Tsun foi criado justamente para situações reais de defesa. Seus princípios de economia de movimento, ataque direto e defesa simultânea o tornam um dos sistemas mais práticos e eficientes para defesa pessoal. Além disso, trabalhamos a consciência situacional e o controle emocional.',
        },
        {
          pergunta: 'O que significa "linha central"?',
          resposta: 'A linha central é um dos conceitos fundamentais do Ving Tsun. É uma linha imaginária que passa pelo centro do corpo, onde estão os pontos vitais. O sistema ensina a proteger sua linha central enquanto ataca a linha central do oponente, garantindo máxima eficiência com mínimo esforço.',
        },
      ],
    },
    {
      categoria: 'Sobre a Escola',
      perguntas: [
        {
          pergunta: 'Quem é o Mestre Cristiano Goldman?',
          resposta: 'Mestre Cristiano Goldman iniciou sua jornada no Ving Tsun em 28 de julho de 2000. Ele é Mestre Qualificado pelo Instituto Julio Camacho, da linhagem do Patriarca Moy Yat. Além do Ving Tsun, possui formação em psicologia, comportamento humano e práticas integrativas, unindo tradição marcial com desenvolvimento humano integral.',
        },
        {
          pergunta: 'A escola é afiliada a alguma federação?',
          resposta: 'Sim! Somos afiliados ao Instituto Julio Camacho e à Moy Yat Ving Tsun Federation. Pertencemos à família Moy Ke Yuek, da linhagem do Patriarca Moy Yat, garantindo autenticidade e tradição no ensino do Ving Tsun.',
        },
        {
          pergunta: 'Onde fica a escola?',
          resposta: 'Estamos localizados na Rua Dias da Cruz, 148 – Sala 303, no Méier, Rio de Janeiro. O espaço é amplo, profissional e equipado especialmente para aulas de Ving Tsun, workshops e treinamentos especiais.',
        },
      ],
    },
    {
      categoria: 'Sobre Investimento',
      perguntas: [
        {
          pergunta: 'Qual o valor da mensalidade?',
          resposta: 'O Programa Fundamental tem investimento de R$ 195 mensais. Este programa inclui 12 aulas teórico-práticas, acesso aos fundamentos essenciais e, ao final, convite para integrar o Programa Tradicional e a família Kung Fu Moy Ke Yuek.',
        },
        {
          pergunta: 'Existe taxa de matrícula?',
          resposta: 'Consulte diretamente pelo WhatsApp para informações atualizadas sobre condições de matrícula e possíveis promoções vigentes.',
        },
        {
          pergunta: 'Quais são as formas de pagamento?',
          resposta: 'Aceitamos diversas formas de pagamento. Entre em contato pelo WhatsApp para saber as opções disponíveis e condições especiais.',
        },
      ],
    },
    {
      categoria: 'Outras Dúvidas',
      perguntas: [
        {
          pergunta: 'É possível fazer uma visita à escola antes de matricular?',
          resposta: 'Claro! Você pode agendar uma visita para conhecer o espaço, conversar com o Mestre Cristiano Goldman e tirar todas as suas dúvidas pessoalmente. Basta entrar em contato pelo WhatsApp.',
        },
        {
          pergunta: 'A escola oferece workshops ou eventos especiais?',
          resposta: 'Sim! Periodicamente realizamos workshops temáticos, seminários e encontros da família Kung Fu. Acompanhe nossas redes sociais (@vingtsunkungfuflow) ou entre na nossa lista de avisos para não perder nenhum evento.',
        },
        {
          pergunta: 'Posso treinar se tiver alguma limitação física?',
          resposta: 'O Ving Tsun é uma arte marcial que prioriza técnica sobre força física. Muitas pessoas com diferentes condições físicas praticam com sucesso. Recomendamos que você agende uma conversa com o Mestre Cristiano para avaliarmos juntos como adaptar o treinamento às suas necessidades.',
        },
        {
          pergunta: 'O que é o Kung-Fu Combat?',
          resposta: 'O Kung-Fu Combat é um novo programa que está sendo desenvolvido pela nossa escola, focado em condicionamento físico, aplicação prática de combate e desenvolvimento de reflexos. Em breve estará disponível! Você pode entrar na lista VIP para ser avisado sobre o lançamento.',
        },
      ],
    },
  ];

  return (
    <Layout>
      <PageHeader 
        title="Perguntas Frequentes"
        subtitle="Tire suas dúvidas sobre a escola, as aulas e o Ving Tsun"
      />

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqs.map((categoria, catIndex) => (
              <div key={catIndex}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <HelpCircle className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{categoria.categoria}</h2>
                </div>
                
                <Accordion type="single" collapsible className="space-y-3">
                  {categoria.perguntas.map((item, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`${catIndex}-${index}`}
                      className="bg-card rounded-xl border border-border px-6 data-[state=open]:border-secondary/50"
                    >
                      <AccordionTrigger className="hover:no-underline py-5 text-left">
                        <span className="font-medium text-foreground pr-4">{item.pergunta}</span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-5 text-muted-foreground leading-relaxed">
                        {item.resposta}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-black font-heading">
              Ainda Tem <span className="text-gradient-primary">Dúvidas</span>?
            </h2>
            <p className="text-muted-foreground">
              Fale diretamente com o Mestre Cristiano Goldman e tire todas as suas dúvidas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5521982112164?text=Olá! Tenho algumas dúvidas sobre as aulas de Ving Tsun."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity w-full sm:w-auto"
                >
                  Falar no WhatsApp
                </Button>
              </a>
              <a 
                href="mailto:cristianogoldmanijc@gmail.com"
              >
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground w-full sm:w-auto"
                >
                  Enviar E-mail
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
