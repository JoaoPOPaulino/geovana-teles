interface Servico {
  numero: string;
  titulo: string;
  descricao: string;
  duracao: string;
  preco: string;
  destaque?: boolean;
  slug: string;
  inclusos: string[];
}

const servicos: Servico[] = [
  {
    numero: "01",
    titulo: "Limpeza de Pele",
    descricao:
      "Higienização profunda, extração de cravos e hidratação. Ideal para manutenção mensal da pele.",
    duracao: "60 min",
    preco: "R$ 120",
    slug: "limpeza-de-pele-simples",
    destaque: true,
    inclusos: [
      "Higienização profunda",
      "Extração de cravos",
      "Recuperação da barreira cutânea",
      "Personalização do protocolo conforme o tipo de pele",
    ],
  },
  {
    numero: "02",
    titulo: "Massagem Relaxante",
    descricao:
      "Técnica suave que alivia tensões musculares e promove bem-estar. Perfeita para quem busca relaxamento profundo.",
    duracao: "60 min",
    preco: "R$ 150",
    slug: "massagem-relaxante",
    inclusos: [
      "Óleos essenciais",
      "Ambiente climatizado",
      "Técnica de relaxamento",
      "Alívio de tensões",
    ],
  },
  {
    numero: "03",
    titulo: "Drenagem Linfática",
    descricao:
      "Massagem especializada que estimula o sistema linfático, reduz inchaço e melhora a circulação.",
    duracao: "60 min",
    preco: "R$ 150",
    slug: "drenagem-linfatica",
    inclusos: [
      "Manobras linfáticas",
      "Redução de inchaço",
      "Melhora da circulação",
      "Relaxamento corporal",
    ],
  },
  {
    numero: "04",
    titulo: "Massagem Redutora",
    descricao:
      "Técnica intensiva focada na eliminação de medidas e combate à celulite com resultados visíveis.",
    duracao: "60 min",
    preco: "R$ 150",
    slug: "massagem-redutora",
    inclusos: [
      "Técnica modeladora",
      "Combate à celulite",
      "Redução de medidas",
      "Creme redutor",
    ],
  },
];
interface ServicosProps {
  onSelectServico: (slug: string) => void;
}

export default function Servicos({ onSelectServico }: ServicosProps) {
  return (
    <section className="py-32 px-6 bg-mauve-50 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-golden-50 opacity-60 translate-x-1/2" />
      <div className="absolute left-0 bottom-0 w-48 h-48 rounded-full bg-bordeaux-50 opacity-40 -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-4xl mx-auto relative">
        {/* Cabeçalho */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-golden-400" />
            <p className="text-golden-600 text-xs font-medium tracking-[0.3em] uppercase">
              Serviços
            </p>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-mauve-900">
            O que eu ofereço
          </h2>
        </div>

        {/* Layout adaptativo — centralizado quando há poucos itens */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${servicos.length === 1 ? "grid-cols-1 max-w-md" : servicos.length === 2 ? "grid-cols-1 md:grid-cols-1 max-w-2xl" : "grid-cols-1 md:grid-cols-3"}`}
        >
          {servicos.map((servico) => (
            <div
              key={servico.slug}
              onClick={() => onSelectServico(servico.slug)}
              className={`
                cursor-pointer relative rounded-2xl p-10 flex flex-col gap-6 transition-all duration-300 hover:-translate-y-1
                ${
                  servico.destaque
                    ? "bg-bordeaux-600 text-white shadow-xl shadow-bordeaux-100"
                    : "bg-white border border-bordeaux-100 hover:border-bordeaux-200 hover:shadow-lg hover:shadow-bordeaux-50"
                }
              `}
            >
              {servico.destaque && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-golden-400 text-white text-xs px-5 py-1 rounded-full tracking-widest uppercase whitespace-nowrap">
                  Serviço em destaque
                </div>
              )}

              {/* Número */}
              <span
                className={`font-display text-6xl font-medium leading-none ${servico.destaque ? "text-bordeaux-400" : "text-bordeaux-100"}`}
              >
                {servico.numero}
              </span>

              {/* Conteúdo */}
              <div className="flex flex-col gap-3 flex-1">
                <h3
                  className={`font-display text-2xl font-medium leading-snug ${servico.destaque ? "text-white" : "text-mauve-900"}`}
                >
                  {servico.titulo}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${servico.destaque ? "text-bordeaux-100" : "text-mauve-800 opacity-60"}`}
                >
                  {servico.descricao}
                </p>
              </div>

              {/* O que está incluído */}
              <div
                className={`flex flex-col gap-2 py-6 border-y ${servico.destaque ? "border-bordeaux-400" : "border-bordeaux-50"}`}
              >
                {servico.inclusos.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div
                      className={`w-1 h-1 rounded-full ${servico.destaque ? "bg-golden-400" : "bg-bordeaux-300"}`}
                    />
                    <span
                      className={`text-xs ${servico.destaque ? "text-bordeaux-100" : "text-mauve-800 opacity-60"}`}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Rodapé */}
              <div className="flex items-center justify-between">
                <span
                  className={`text-sm ${servico.destaque ? "text-bordeaux-200" : "text-mauve-800 opacity-40"}`}
                >
                  {servico.duracao}
                </span>
                <span
                  className={`font-display text-3xl font-medium ${servico.destaque ? "text-golden-200" : "text-bordeaux-600"}`}
                >
                  {servico.preco}
                </span>
              </div>

              {/* Botão */}
              <button
                className={`w-full py-3 rounded-full text-sm font-medium tracking-wide transition-all ${servico.destaque ? "bg-white text-bordeaux-600 hover:bg-golden-50" : "bg-bordeaux-600 text-white hover:bg-bordeaux-800"}`}
              >
                Agendar agora
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
