import { Link } from "react-router-dom";

export default function Header() {
    return (
    <header className="w-full px-6 py-4 flex items-center justify-between border-b border-rose-100 bg-white">
      <Link to="/" className="text-xl font-semibold text-rose-400 tracking-wide">
        Geovana Teles
      </Link>

      <nav className="flex gap-6 text-sm text-gray-600">
        <Link to="/" className="hover:text-rose-400 transition-colors">
          Início
        </Link>
        <Link to="/agendamento" className="hover:text-rose-400 transition-colors">
          Agendamento
        </Link>
        <Link to="/contato" className="hover:text-rose-400 transition-colors">
          Contato
        </Link>
      </nav>
    </header>
  )
}