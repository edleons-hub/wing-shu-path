import historyImage from '@/assets/history-section.jpg';

const History = () => {
  return (
    <section id="historia" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="text-secondary text-sm font-bold tracking-widest uppercase">Nossa Origem</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black font-heading">
              <span className="text-gradient-primary">História</span> do Wing Chun
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                O Wing Chun é uma arte marcial chinesa criada há mais de 300 anos no Templo Shaolin. 
                Desenvolvida pela monja budista Ng Mui, essa técnica revolucionária foi projetada para 
                permitir que pessoas menores e mais fracas derrotassem oponentes maiores e mais fortes.
              </p>
              <p>
                A Wing Shu preserva os ensinamentos tradicionais do Grão-Mestre Ip Man, tornando-se 
                referência mundial no ensino do autêntico Wing Chun. Nossa linhagem direta garante 
                a transmissão fiel das técnicas e da filosofia milenar.
              </p>
              <p>
                Cada movimento carrega séculos de sabedoria, cada golpe conta uma história de 
                superação e disciplina. Aqui, você não aprende apenas a lutar — você se conecta 
                com uma tradição que transforma corpo e mente.
              </p>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="relative rounded-lg overflow-hidden shadow-elegant">
              <img 
                src={historyImage} 
                alt="Tradição Wing Chun" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
