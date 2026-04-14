import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-mauve-900 text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">

          {/* Brand */}
          <div className="flex flex-col gap-4 max-w-xs">
            <div>
              <p className="font-display text-2xl font-medium text-white">
                Geovana Teles
              </p>
              <p className="text-xs text-golden-400 tracking-[0.2em] uppercase">
                Estética Facial
              </p>
            </div>
            <p className="text-bordeaux-100 text-sm font-light leading-relaxed opacity-60">
              Cuidando da sua pele com carinho e profissionalismo em Palmas, Tocantins.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <p className="text-xs text-bordeaux-200 opacity-50 uppercase tracking-widest mb-2">
              Navegação
            </p>
            <Link to="/" className="text-sm text-bordeaux-100 opacity-60 hover:opacity-100 hover:text-golden-400 transition-colors">
              Início
            </Link>
            <Link to="/agendamento" className="text-sm text-bordeaux-100 opacity-60 hover:opacity-100 hover:text-golden-400 transition-colors">
              Agendamento
            </Link>
            <Link to="/contato" className="text-sm text-bordeaux-100 opacity-60 hover:opacity-100 hover:text-golden-400 transition-colors">
              Contato
            </Link>
          </div>

          {/* Contato */}
          <div className="flex flex-col gap-3">
            <p className="text-xs text-bordeaux-200 opacity-50 uppercase tracking-widest mb-2">
              Contato
            </p>
            <a
              href="https://wa.me/556392858922"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-bordeaux-100 opacity-60 hover:opacity-100 hover:text-golden-400 transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="https://instagram.com/geovana_.teles"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-bordeaux-100 opacity-60 hover:opacity-100 hover:text-golden-400 transition-colors"
            >
              Instagram
            </a>
            <p className="text-sm text-bordeaux-100 opacity-60">
              Palmas, Tocantins
            </p>
          </div>

        </div>

        {/* Linha divisória */}
        <div className="border-t border-bordeaux-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-bordeaux-200 opacity-30">
            © {new Date().getFullYear()} Geovana Teles · Todos os direitos reservados
          </p>
          <p className="text-xs text-bordeaux-200 opacity-30">
            Palmas, TO · Brasil
          </p>
        </div>

      </div>
    </footer>
  )
}