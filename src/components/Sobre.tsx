import geovana from '../assets/geovana.jpg'

export default function Sobre() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">

        <div className="w-full md:w-1/2">
          <img
            src={geovana}
            alt="Geovana Teles, esteticista"
            className="w-full rounded-2xl object-cover object-top aspect-square"
            />
        </div>

        <div className="w-full md:w-1/2">
          <p className="text-rose-400 text-sm font-medium tracking-widest uppercase mb-4">
            Sobre mim
          </p>

          <h2 className="text-3xl font-semibold text-gray-800 mb-6 leading-snug">
            Cuidado com a pele que transforma
          </h2>

          <p className="text-gray-500 leading-relaxed mb-4">
            Olá! Sou Geovana Teles, esteticista especializada em limpeza de pele
            profissional. Acredito que cuidar da pele vai além da estética — é
            um ato de amor próprio.
          </p>

          <p className="text-gray-500 leading-relaxed">
            Trabalho com técnicas modernas e produtos de qualidade para garantir
            resultados visíveis e duradouros, sempre priorizando o conforto e
            bem-estar de cada cliente.
          </p>
        </div>

      </div>
    </section>
  )
}