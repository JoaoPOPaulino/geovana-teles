import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const links = [
  { label: "Início", to: "/" },
  { label: "Serviços", to: "/servicos" },
  { label: "Agendamento", to: "/agendamento" },
  { label: "Contato", to: "/contato" },
  { label: "Catálogo", to: "/catalogo" },
];

export default function Header() {
  const { pathname } = useLocation();
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-6 py-4 flex items-center justify-between bg-white/80 backdrop-blur-md border-b border-bordeaux-100/50">
      {/* Logo */}
      <Link to="/" className="flex flex-col leading-none">
        <span className="font-display text-xl font-medium text-mauve-900 tracking-wide">
          Geovana Teles
        </span>
        <span className="text-xs text-golden-600 tracking-[0.2em] uppercase font-light">
          Estética & Bem-estar
        </span>
      </Link>

      {/* Nav desktop */}
      <nav className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`text-sm transition-colors relative py-1
              ${
                pathname === link.to
                  ? "text-bordeaux-600"
                  : "text-mauve-800 opacity-60 hover:opacity-100 hover:text-bordeaux-600"
              }
            `}
          >
            {link.label}
            {pathname === link.to && (
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-golden-400" />
            )}
          </Link>
        ))}
      </nav>

      {/* Botão CTA desktop */}
      <div className="hidden md:flex items-center gap-4">
        <Link
          to="/agendamento"
          className="bg-bordeaux-600 text-white text-sm px-6 py-2.5 rounded-full hover:bg-bordeaux-800 transition-all hover:-translate-y-0.5 hover:shadow-md hover:shadow-bordeaux-100"
        >
          Agendar agora
        </Link>
      </div>

      {/* Botão menu mobile */}
      <button
        onClick={() => setMenuAberto(!menuAberto)}
        className="md:hidden flex flex-col gap-1.5 p-1"
        aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
      >
        <span
          className={`w-6 h-px bg-mauve-800 transition-all duration-300 ${menuAberto ? "rotate-45 translate-y-2" : ""}`}
        />
        <span
          className={`w-6 h-px bg-mauve-800 transition-all duration-300 ${menuAberto ? "opacity-0" : ""}`}
        />
        <span
          className={`w-6 h-px bg-mauve-800 transition-all duration-300 ${menuAberto ? "-rotate-45 -translate-y-2" : ""}`}
        />
      </button>

      {/* Menu mobile */}
      {menuAberto && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-bordeaux-100 px-6 py-6 flex flex-col gap-4 md:hidden shadow-lg shadow-bordeaux-50">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuAberto(false)}
              className={`text-sm py-2 border-b border-bordeaux-50 last:border-0
                ${pathname === link.to ? "text-bordeaux-600" : "text-mauve-800"}
              `}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/agendamento"
            onClick={() => setMenuAberto(false)}
            className="bg-bordeaux-600 text-white text-sm px-6 py-3 rounded-full text-center mt-2"
          >
            Agendar agora
          </Link>
        </div>
      )}
    </header>
  );
}
