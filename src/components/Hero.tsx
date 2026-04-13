import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6 bg-rose-50">

      <p className="text-rose-400 text-sm font-medium tracking-widest uppercase mb-4">
        Estética Facial
      </p>

      <h1 className="text-4xl md:text-6xl font-semibold text-gray-800 mb-6 leading-tight">
        Cuide da sua pele com<br />
        <span className="text-rose-400">quem entende de você</span>
      </h1>

      <p className="text-gray-500 text-lg max-w-md mb-10">
        Limpeza de pele profissional em Palmas, TO.
        Agende seu horário de forma rápida e simples.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/agendamento"
          className="bg-rose-400 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-rose-500 transition-colors"
        >
          Agendar agora
        </Link>

        <a
          href="https://wa.me/5563992256085"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-rose-300 text-rose-400 px-8 py-3 rounded-full text-sm font-medium hover:bg-rose-50 transition-colors">
          Falar no WhatsApp
        </a>
      </div>

    </section>
  )
}