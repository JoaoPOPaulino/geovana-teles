import geovana from '../assets/geovana.jpg'

export default function Sobre() {
  return (
    <section className="py-32 px-6 bg-rose-50 relative overflow-hidden">

      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-rose-200 opacity-20 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-rose-200 opacity-20 -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-4xl mx-auto relative">
        <div className="flex flex-col md:flex-row items-center gap-16">

          {/* Foto */}
          <div className="w-full md:w-2/5 relative">

            {/* Moldura decorativa */}
            <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border border-rose-200" />

            <img
              src={geovana}
              alt="Geovana Teles, esteticista"
              className="relative w-full rounded-2xl object-cover object-top aspect-[3/4]"
            />

            {/* Card flutuante */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl px-6 py-4 shadow-lg shadow-rose-100 border border-rose-50">
              <p className="font-display text-3xl font-medium text-rose-400">+200</p>
              <p className="text-xs text-gray-400 tracking-wide">clientes atendidas</p>
            </div>

          </div>

          {/* Texto */}
          <div className="w-full md:w-3/5">

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-rose-300" />
              <p className="text-rose-400 text-xs font-medium tracking-[0.3em] uppercase">
                Sobre mim
              </p>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-medium text-gray-800 mb-8 leading-snug">
              Cuidado com a pele
              <br />
              <span className="italic text-rose-400">que transforma</span>
            </h2>

            <p className="text-gray-500 leading-relaxed mb-6 font-light">
              Olá! Sou Geovana Teles, especializada em limpeza de pele
              profissional. Acredito que cuidar da pele vai além da estética — é
              um ato de amor próprio.
            </p>

            <p className="text-gray-500 leading-relaxed mb-10 font-light">
              Trabalho com técnicas modernas e produtos de qualidade para garantir
              resultados visíveis e duradouros, sempre priorizando o conforto e
              bem-estar de cada cliente.
            </p>

            {/* Diferenciais */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { numero: '3+', label: 'anos de experiência' },
                { numero: '200+', label: 'clientes atendidas' },
                { numero: '100%', label: 'produtos naturais' },
                { numero: '5★', label: 'avaliação média' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-px h-8 bg-rose-300" />
                  <div>
                    <p className="font-display text-2xl font-medium text-rose-400">{item.numero}</p>
                    <p className="text-xs text-gray-400">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}