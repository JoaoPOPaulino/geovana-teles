interface Servico {
    titulo: string
    descricao: string
    duracao: string
    preco: string
}

const servicos: Servico[] = [
    {
        titulo: 'Limpeza de Pele Simples',
        descricao: 'Higienização profunda, extração de cravos e hidratação. Ideal para manutenção mensal de pele.',
        duracao: '60 minutos',
        preco: 'R$ 120',
    },
    {
        titulo: 'Limpeza de Pele Completa',
        descricao: 'Esfoliação, vapor, extração completa e mácara calmante. Recomendada para peles com mais impurezas.',
        duracao: '90 minutos',
        preco: 'R$ 180',
    }
]

export default function Servicos() {
    return (
    <section className="py-24 px-6 bg-rose-50">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-rose-400 text-sm font-medium tracking-widest uppercase mb-4">
            Serviços
          </p>
          <h2 className="text-3xl font-semibold text-gray-800">
            O que eu ofereço
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicos.map((servico) => (
            <div
              key={servico.titulo}
              className="bg-white rounded-2xl p-6 flex flex-col gap-4 border border-rose-100"
            >
              <h3 className="text-gray-800 font-medium text-lg">
                {servico.titulo}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed flex-1">
                {servico.descricao}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-rose-100">
                <span className="text-sm text-gray-400">{servico.duracao}</span>
                <span className="text-rose-400 font-medium">{servico.preco}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}