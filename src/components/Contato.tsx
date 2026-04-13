interface InfoContato {
    icone: string
    titulo: string
    valor: string
    link?: string
}

const infos: InfoContato[] = [
    {
        icone: '📍',
        titulo: 'Localização',
        valor: 'Palmas, Tocantins'
    },
    {
        icone: '📱',
        titulo: 'WhatsApp',
        valor: '+55(63) 99225-6085',
        link: 'https://wa.me/5563992256085'
    },
    {
        icone: '📸',
        titulo: 'Instagram',
        valor: '@geovana_.teles',
        link: 'https://www.instagram.com/geovana_.teles/',
    },
]

export default function Contato() {
     return (
    <section className="py-24 px-6 bg-rose-50">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-rose-400 text-sm font-medium tracking-widest uppercase mb-4">
            Contato
          </p>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Fale comigo
          </h2>
          <p className="text-gray-500">
            Tire suas dúvidas ou agende direto pelo WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {infos.map((info) => (
            <div
              key={info.titulo}
              className="bg-white rounded-2xl p-8 flex flex-col items-center text-center gap-3 border border-rose-100"
            >
              <span className="text-3xl">{info.icone}</span>

              <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">
                {info.titulo}
              </p>

              {info.link ? (
                <a
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-400 font-medium hover:text-rose-500 transition-colors"
                >
                  {info.valor}
                </a>
              ) : (
                <p className="text-gray-700 font-medium">{info.valor}</p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}