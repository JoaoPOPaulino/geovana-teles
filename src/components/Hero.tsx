import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center text-center px-6 bg-bordeaux-50 overflow-hidden">

      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-bordeaux-100 opacity-40 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-golden-50 opacity-60 translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 left-8 w-px h-32 bg-bordeaux-200 opacity-50" />
      <div className="absolute top-1/2 right-8 w-px h-32 bg-bordeaux-200 opacity-50" />

      {/* Linha decorativa superior */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-px bg-golden-400" />
        <p className="text-golden-600 text-xs font-medium tracking-[0.3em] uppercase">
          Estética Facial
        </p>
        <div className="w-12 h-px bg-golden-400" />
      </div>

      {/* Título */}
      <h1 className="font-display text-5xl md:text-7xl font-medium text-mauve-900 mb-4 leading-tight max-w-3xl">
        Cuide da sua pele com
        <br />
        <span className="text-bordeaux-600 italic">quem entende de você</span>
      </h1>

      {/* Subtítulo */}
      <p className="text-mauve-800 text-base md:text-lg max-w-sm mt-6 mb-10 leading-relaxed font-light opacity-70">
        Limpeza de pele profissional em Palmas, TO.
        <br />
        Agende seu horário de forma rápida e simples.
      </p>

      {/* Botões */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/agendamento"
          className="bg-bordeaux-600 text-white px-10 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-bordeaux-800 transition-all hover:shadow-lg hover:-translate-y-0.5"
        >
          Agendar agora
        </Link>
        <a
          href="https://wa.me/556392858922"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-golden-400 text-golden-800 px-10 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-golden-50 transition-all hover:shadow-md hover:-translate-y-0.5"
        >
          Falar no WhatsApp
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 flex flex-col items-center gap-2 opacity-30">
        <p className="text-xs tracking-widest text-mauve-800 uppercase">Role para baixo</p>
        <div className="w-px h-10 bg-bordeaux-400 animate-bounce" />
      </div>

    </section>
  )
}