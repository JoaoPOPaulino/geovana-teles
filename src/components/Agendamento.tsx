export default function Agendamento() {
  const calUsername = 'geovana-teles'
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-rose-400 text-sm font-medium tracking-widest uppercase mb-4">
            Agendamento
          </p>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Agende seu horário
          </h2>
          <p className="text-gray-500">
            Escolha o melhor dia e horário para você. A confirmação é imediata.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-rose-100">
          <iframe
            src={`https://cal.com/${calUsername}?embed=true`}
            className="w-full min-h-[600px]"
            frameBorder="0"
          />
        </div>

      </div>
    </section>
  )
}