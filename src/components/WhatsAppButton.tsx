import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5521982112164?text=Olá! Gostaria de saber mais sobre as aulas de Ving Tsun."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group animate-bounce hover:animate-none"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={28} className="text-white group-hover:scale-110 transition-transform" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-card px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
        Fale conosco!
      </span>
    </a>
  );
};

export default WhatsAppButton;
