import Cal, { getCalApi } from "@calcom/embed-react"
import { useEffect, useState } from "react"

interface AgendamentoProps {
  slugSelecionado?: string
}

export default function Agendamento({ slugSelecionado = '' }: AgendamentoProps) {
  const calUsername = 'geovana-teles'
  const MEU_NUMERO_WHATSAPP = '556392858922'

  const [agendamentoConcluido, setAgendamentoConcluido] = useState(false)
  const [detalhesAgendamento, setDetalhesAgendamento] = useState<any>(null)

  useEffect(() => {
    (async function () {
      const cal = await getCalApi()
      cal("on", {
        action: "bookingSuccessful",
        callback: (e) => {
          setAgendamentoConcluido(true)
          setDetalhesAgendamento(e.detail.data)
        }
      })
    })()
  }, [])

  const calLink = slugSelecionado
    ? `${calUsername}/${slugSelecionado}`
    : calUsername

  const textoZap = detalhesAgendamento
    ? `Olá! Acabei de fazer um agendamento pelo site para o dia ${new Date(detalhesAgendamento.date).toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' })}. Gostaria de confirmar!`
    : `Olá! Acabei de fazer um agendamento pelo site e gostaria de confirmar!`

  const linkDoZap = `https://wa.me/${MEU_NUMERO_WHATSAPP}?text=${encodeURIComponent(textoZap)}`

  return (
    <section id="agendamento" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-golden-400" />
            <p className="text-golden-600 text-xs font-medium tracking-[0.3em] uppercase">
              Agendamento
            </p>
            <div className="w-12 h-px bg-golden-400" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-mauve-900 mb-4">
            {agendamentoConcluido ? "Reserva Solicitada!" : "Agende seu horário"}
          </h2>
          <p className="text-mauve-800 font-light opacity-60">
            {agendamentoConcluido
              ? "Quase lá! Falta apenas um passo para confirmar seu horário."
              : slugSelecionado
                ? "Serviço selecionado! Escolha o melhor dia e horário abaixo."
                : "Escolha um serviço acima ou selecione um horário livre."}
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-bordeaux-100 bg-white">

          {!agendamentoConcluido ? (
            <Cal
              key={calLink}
              calLink={calLink}
              style={{ width: "100%", height: "100%", minHeight: "600px" }}
              config={{ layout: 'month_view' }}
            />
          ) : (
            <div className="flex flex-col items-center justify-center p-12 text-center min-h-[400px]">
              <div className="w-20 h-20 bg-golden-50 text-golden-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h3 className="font-display text-3xl font-medium text-mauve-900 mb-3">
                Tudo certo com o agendamento!
              </h3>

              <p className="text-mauve-800 font-light opacity-60 mb-8 max-w-md">
                Para que a sua vaga seja garantida, por favor clique no botão abaixo e nos envie uma mensagem no WhatsApp confirmando os dados.
              </p>

              <a
                href={linkDoZap}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#22c35e] text-white font-medium py-4 px-8 rounded-full transition-all duration-300 flex items-center gap-3 shadow-lg shadow-green-200 hover:-translate-y-1"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.012c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                Confirmar no WhatsApp
              </a>
            </div>
          )}

        </div>
      </div>
    </section>
  )
}