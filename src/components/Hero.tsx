import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center text-center px-6 bg-bordeaux-50 overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-48 md:w-72 h-48 md:h-72 rounded-full bg-bordeaux-100 opacity-40 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 md:w-96 h-64 md:h-96 rounded-full bg-golden-50 opacity-60 translate-x-1/3 translate-y-1/3" />
      <div className="hidden md:block absolute top-1/2 left-8 w-px h-32 bg-bordeaux-200 opacity-50" />
      <div className="hidden md:block absolute top-1/2 right-8 w-px h-32 bg-bordeaux-200 opacity-50" />
      {/* Linha decorativa superior */}
      <div className="flex items-center gap-3 mb-6 md:mb-8">
        <div className="w-8 md:w-12 h-px bg-golden-400" />
        <p className="text-golden-600 text-xs font-medium tracking-[0.2em] md:tracking-[0.3em] uppercase">
          Estética Facial
        </p>
        <div className="w-8 md:w-12 h-px bg-golden-400" />
      </div>
      {/* Título */}
      <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-medium text-mauve-900 mb-4 leading-tight max-w-3xl">
        Cuide da sua pele com{" "}
        <span className="text-bordeaux-600 italic block sm:inline">
          quem entende de você
        </span>
      </h1>
      {/* Subtítulo */}
      <p className="text-mauve-800 text-sm md:text-lg max-w-xs md:max-w-sm mt-4 mb-8 md:mb-10 leading-relaxed font-light opacity-70">
        Limpeza de pele profissional em Palmas, TO. Agende seu horário de forma
        rápida e simples.
      </p>
      {/* Botões */}
      {/* Botões */}
      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-65 sm:max-w-none sm:w-auto">
        <Link
          to="/agendamento"
          className="bg-bordeaux-600 text-white px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-bordeaux-800 transition-all hover:shadow-lg hover:-translate-y-0.5 text-center"
        >
          Agendar agora
        </Link>
        <a
          href="https://wa.me/556392858922"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-golden-400 text-golden-800 px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-golden-50 transition-all hover:shadow-md hover:-translate-y-0.5 text-center"
        >
          Falar no WhatsApp
        </a>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 flex flex-col items-center gap-2 opacity-30">
        <p className="text-xs tracking-widest text-mauve-800 uppercase">
          Role para baixo
        </p>
        <div className="w-px h-8 md:h-10 bg-bordeaux-400 animate-bounce" />
      </div>
    </section>
  );
}
