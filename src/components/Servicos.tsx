interface Servico {
  numero: string
  titulo: string
  descricao: string
  duracao: string
  preco: string
  destaque?: boolean
  slug: string
}

const servicos: Servico[] = [
  {
    numero: '01',
    titulo: 'Limpeza de Pele Simples',
    descricao: 'Higienização profunda, extração de cravos e hidratação. Ideal para manutenção mensal da pele.',
    duracao: '60 min',
    preco: 'R$ 120',
    slug: 'limpeza-de-pele-simples',
  },
  {
    numero: '02',
    titulo: 'Limpeza de Pele Profunda',
    descricao: 'Esfoliação, vapor, extração completa e máscara calmante. Recomendada para peles com mais impurezas.',
    duracao: '90 min',
    preco: 'R$ 180',
    destaque: true,
    slug: 'limpeza-de-pele-profunda',
  },
  {
    numero: '03',
    titulo: 'Limpeza de Pele com Peeling',
    descricao: 'Inclui peeling químico para renovação celular. Resultado mais intenso com pele visivelmente mais uniforme.',
    duracao: '120 min',
    preco: 'R$ 250',
    slug: 'limpeza-de-pele-com-peeling',
  },
]

interface ServicosProps {
  onSelectServico: (slug: string) => void
}

export default function Servicos({ onSelectServico }: ServicosProps) {
  return (
    <section className="py-32 px-6 bg-white relative overflow-hidden">
      {/* Elemento decorativo de fundo */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-rose-50 opacity-60 translate-x-1/2" />

      <div className="max-w-4xl mx-auto relative">
        {/* Cabeçalho */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-rose-300" />
            <p className="text-rose-400 text-xs font-medium tracking-[0.3em] uppercase">
              Serviços
            </p>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-gray-800">
            O que eu ofereço
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicos.map((servico) => (
            <div
              key={servico.titulo}
              onClick={() => onSelectServico(servico.slug)}
              className={`
                cursor-pointer relative rounded-2xl p-8 flex flex-col gap-6 transition-all duration-300 hover:-translate-y-1
                ${servico.destaque
                  ? 'bg-rose-400 text-white shadow-xl shadow-rose-200'
                  : 'bg-white border border-rose-100 hover:border-rose-200 hover:shadow-lg hover:shadow-rose-50'
                }
              `}
            >
              {/* Badge destaque */}
              {servico.destaque && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-4 py-1 rounded-full tracking-widest uppercase">
                  Mais popular
                </div>
              )}

              {/* Número */}
              <span className={`font-display text-5xl font-medium leading-none ${servico.destaque ? 'text-rose-200' : 'text-rose-100'}`}>
                {servico.numero}
              </span>

              {/* Título e descrição */}
              <div className="flex flex-col gap-3 flex-1">
                <h3 className={`font-medium text-lg leading-snug ${servico.destaque ? 'text-white' : 'text-gray-800'}`}>
                  {servico.titulo}
                </h3>
                <p className={`text-sm leading-relaxed ${servico.destaque ? 'text-rose-100' : 'text-gray-400'}`}>
                  {servico.descricao}
                </p>
              </div>

              {/* Rodapé do card */}
              <div className={`flex items-center justify-between pt-6 border-t ${servico.destaque ? 'border-rose-300' : 'border-rose-50'}`}>
                <span className={`text-sm ${servico.destaque ? 'text-rose-200' : 'text-gray-300'}`}>
                  {servico.duracao}
                </span>
                <span className={`font-display text-2xl font-medium ${servico.destaque ? 'text-white' : 'text-rose-400'}`}>
                  {servico.preco}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}