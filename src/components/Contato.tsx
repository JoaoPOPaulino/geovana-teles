import React from 'react'

interface InfoContato {
  titulo: string
  valor: string
  descricao: string
  link?: string
  icone: React.ReactNode
}

const infos: InfoContato[] = [
  {
    icone: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
    titulo: 'Localização',
    valor: 'Palmas, Tocantins',
    descricao: 'Atendimento presencial',
  },
  {
    icone: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
    ),
    titulo: 'WhatsApp',
    valor: '(63) 9 9285-8922',
    descricao: 'Respondemos rapidamente',
    link: 'https://wa.me/+556392858922',
  },
  {
    icone: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
      </svg>
    ),
    titulo: 'Instagram',
    valor: '@geovana_.teles',
    descricao: 'Acompanhe os resultados',
    link: 'https://instagram.com/geovana_.teles',
  },
]

export default function Contato() {
  return (
    <section className="py-32 px-6 bg-bordeaux-50 relative overflow-hidden">

      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-golden-50 opacity-80 -translate-x-1/2" />

      <div className="max-w-4xl mx-auto relative">

        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-golden-400" />
              <p className="text-golden-600 text-xs font-medium tracking-[0.3em] uppercase">
                Contato
              </p>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-mauve-900">
              Vamos conversar?
            </h2>
          </div>
          <p className="text-mauve-800 font-light opacity-60 max-w-xs leading-relaxed">
            Tire suas dúvidas ou agende direto pelo WhatsApp. Respondemos em instantes.
          </p>
        </div>

        {/* Cards de contato */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {infos.map((info) => (
            <div
              key={info.titulo}
              className="group border border-bordeaux-100 rounded-2xl p-8 flex flex-col gap-4 bg-white hover:border-bordeaux-200 hover:shadow-lg hover:shadow-bordeaux-50 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-bordeaux-50 flex items-center justify-center text-bordeaux-600 group-hover:bg-bordeaux-600 group-hover:text-white transition-all duration-300">
                {info.icone}
              </div>

              <div>
                <p className="text-xs text-mauve-800 opacity-40 uppercase tracking-widest mb-1">
                  {info.titulo}
                </p>
                {info.link ? (
                  <a
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-mauve-900 hover:text-bordeaux-600 transition-colors"
                  >
                    {info.valor}
                  </a>
                ) : (
                  <p className="font-medium text-mauve-900">{info.valor}</p>
                )}
                <p className="text-sm text-mauve-800 opacity-60 mt-1 font-light">{info.descricao}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA final */}
        <div className="relative rounded-3xl bg-bordeaux-600 p-12 text-center overflow-hidden">
          <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-bordeaux-400 opacity-30 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-56 h-56 rounded-full bg-bordeaux-800 opacity-30 translate-x-1/3 translate-y-1/3" />

          <div className="relative">
            <h3 className="font-display text-3xl md:text-4xl font-medium text-white mb-4">
              Pronta para transformar sua pele?
            </h3>
            <p className="text-bordeaux-100 font-light mb-8 max-w-md mx-auto">
              Agende seu horário agora e dê o primeiro passo para uma pele mais saudável e bonita.
            </p>
            <a
              href="https://wa.me/+556392858922"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-bordeaux-600 px-10 py-4 rounded-full text-sm font-medium tracking-wide hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Agendar pelo WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}