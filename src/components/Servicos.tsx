interface Servico {
  numero: string;
  titulo: string;
  descricao: string;
  duracao: string;
  preco: string;
  destaque?: boolean;
  pacote?: boolean;
  slug: string;
  inclusos: string[];
}

const servicos: Servico[] = [
  // ── SERVIÇOS AVULSOS ──────────────────────────────────────────────────
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
  {
    numero: "05",
    titulo: "Criolipólise",
    descricao:
      "Tratamento não invasivo que elimina gordura localizada através do resfriamento controlado das células de gordura.",
    duracao: "60 min",
    preco: "R$ 499",
    slug: "criolipolise",
    inclusos: [
      "Avaliação da área tratada",
      "Aplicação do aparelho de criolipólise",
      "Massagem pós-procedimento",
      "Orientações de cuidados",
    ],
  },
  {
    numero: "06",
    titulo: "Heccus",
    descricao:
      "Tecnologia de ultrassom microfocado que promove firmeza, contorno corporal e redução de medidas com resultados progressivos.",
    duracao: "45 min",
    preco: "Consulte",
    slug: "heccus",
    inclusos: [
      "Ultrassom microfocado",
      "Firmeza e contorno corporal",
      "Redução de medidas",
      "Sem tempo de recuperação",
    ],
  },
  {
    numero: "07",
    titulo: "Radiofrequência",
    descricao:
      "Estimula o colágeno e melhora a flacidez com energia térmica profunda, proporcionando rejuvenescimento facial e corporal.",
    duracao: "45 min",
    preco: "Consulte",
    slug: "radiofrequencia",
    inclusos: [
      "Estimulação de colágeno",
      "Melhora da flacidez",
      "Rejuvenescimento",
      "Resultado progressivo",
    ],
  },

  // ── PACOTES ───────────────────────────────────────────────────────────
  {
    numero: "P1",
    titulo: "Pacote Massagem Relaxante",
    descricao:
      "10 sessões de massagem relaxante de 1 hora cada. Ideal para quem busca bem-estar constante com economia.",
    duracao: "1h / sessão",
    preco: "R$ 967",
    slug: "pacote-massagem-relaxante",
    pacote: true,
    inclusos: [
      "10 sessões de 1 hora",
      "Óleos essenciais premium",
      "Ambiente climatizado",
      "Técnica de relaxamento profundo",
    ],
  },
  {
    numero: "P2",
    titulo: "Protocolo Verão",
    descricao:
      "5 sessões de massagem redutora abdominal + 5 sessões de Heccus para resultados visíveis antes do verão.",
    duracao: "45 min / sessão",
    preco: "R$ 799",
    slug: "protocolo-verao",
    pacote: true,
    inclusos: [
      "5 sessões de massagem redutora abdominal",
      "5 sessões de Heccus",
      "Redução de medidas",
      "Contorno corporal definido",
    ],
  },
  {
    numero: "P3",
    titulo: "Heccus + Radiofrequência",
    descricao:
      "Combinação poderosa de 5 sessões de Heccus e 5 de Radiofrequência para firmeza, contorno e rejuvenescimento.",
    duracao: "45 min / sessão",
    preco: "R$ 699",
    slug: "heccus-radiofrequencia",
    pacote: true,
    inclusos: [
      "5 sessões de Heccus",
      "5 sessões de Radiofrequência",
      "🎁 Brinde: 10 min de drenagem por sessão",
      "Firmeza e contorno corporal",
    ],
  },
];

interface ServicosProps {
  onSelectServico: (slug: string) => void;
}

export default function Servicos({ onSelectServico }: ServicosProps) {
  const avulsos = servicos.filter((s) => !s.pacote);
  const pacotes = servicos.filter((s) => s.pacote);

  return (
    <section className="py-32 px-6 bg-mauve-50 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-golden-50 opacity-60 translate-x-1/2" />
      <div className="absolute left-0 bottom-0 w-48 h-48 rounded-full bg-bordeaux-50 opacity-40 -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-5xl mx-auto relative">
        {/* ── SERVIÇOS AVULSOS ─────────────────────────────────────────── */}
        <div className="mb-24">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {avulsos.map((servico) => (
              <ServicoCard
                key={servico.slug}
                servico={servico}
                onSelect={onSelectServico}
              />
            ))}
          </div>
        </div>

        {/* ── PACOTES ──────────────────────────────────────────────────── */}
        <div>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-golden-400" />
              <p className="text-golden-600 text-xs font-medium tracking-[0.3em] uppercase">
                Pacotes
              </p>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-mauve-900">
              Mais resultado, melhor preço
            </h2>
            <p className="text-mauve-800 opacity-60 text-sm mt-3 max-w-lg">
              Combine tratamentos e potencialize os resultados com economia.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pacotes.map((servico) => (
              <ServicoCard
                key={servico.slug}
                servico={servico}
                onSelect={onSelectServico}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Card extraído para evitar repetição ────────────────────────────────────
function ServicoCard({
  servico,
  onSelect,
}: {
  servico: Servico;
  onSelect: (slug: string) => void;
}) {
  return (
    <div
      onClick={() => onSelect(servico.slug)}
      className={`
        cursor-pointer relative rounded-2xl p-10 flex flex-col gap-6 transition-all duration-300 hover:-translate-y-1
        ${
          servico.destaque
            ? "bg-bordeaux-600 text-white shadow-xl shadow-bordeaux-100"
            : servico.pacote
              ? "bg-mauve-900 text-white shadow-xl shadow-mauve-100"
              : "bg-white border border-bordeaux-100 hover:border-bordeaux-200 hover:shadow-lg hover:shadow-bordeaux-50"
        }
      `}
    >
      {/* Badge */}
      {servico.destaque && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-golden-400 text-white text-xs px-5 py-1 rounded-full tracking-widest uppercase whitespace-nowrap">
          Serviço em destaque
        </div>
      )}
      {servico.pacote && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-golden-400 text-white text-xs px-5 py-1 rounded-full tracking-widest uppercase whitespace-nowrap">
          Pacote
        </div>
      )}

      {/* Número */}
      <span
        className={`font-display text-6xl font-medium leading-none ${
          servico.destaque
            ? "text-bordeaux-400"
            : servico.pacote
              ? "text-mauve-600"
              : "text-bordeaux-100"
        }`}
      >
        {servico.numero}
      </span>

      {/* Conteúdo */}
      <div className="flex flex-col gap-3 flex-1">
        <h3
          className={`font-display text-2xl font-medium leading-snug ${
            servico.destaque || servico.pacote ? "text-white" : "text-mauve-900"
          }`}
        >
          {servico.titulo}
        </h3>
        <p
          className={`text-sm leading-relaxed ${
            servico.destaque
              ? "text-bordeaux-100"
              : servico.pacote
                ? "text-mauve-200 opacity-80"
                : "text-mauve-800 opacity-60"
          }`}
        >
          {servico.descricao}
        </p>
      </div>

      {/* Inclusos */}
      <div
        className={`flex flex-col gap-2 py-6 border-y ${
          servico.destaque
            ? "border-bordeaux-400"
            : servico.pacote
              ? "border-mauve-700"
              : "border-bordeaux-50"
        }`}
      >
        {servico.inclusos.map((item) => (
          <div key={item} className="flex items-start gap-2">
            <div
              className={`w-1 h-1 rounded-full mt-1.5 shrink-0 ${
                servico.destaque || servico.pacote
                  ? "bg-golden-400"
                  : "bg-bordeaux-300"
              }`}
            />
            <span
              className={`text-xs ${
                servico.destaque
                  ? "text-bordeaux-100"
                  : servico.pacote
                    ? "text-mauve-200 opacity-80"
                    : "text-mauve-800 opacity-60"
              }`}
            >
              {item}
            </span>
          </div>
        ))}
      </div>

      {/* Rodapé */}
      <div className="flex items-center justify-between">
        <span
          className={`text-sm ${
            servico.destaque
              ? "text-bordeaux-200"
              : servico.pacote
                ? "text-mauve-300"
                : "text-mauve-800 opacity-40"
          }`}
        >
          {servico.duracao}
        </span>
        <span
          className={`font-display text-3xl font-medium ${
            servico.destaque
              ? "text-golden-200"
              : servico.pacote
                ? "text-golden-300"
                : "text-bordeaux-600"
          }`}
        >
          {servico.preco}
        </span>
      </div>

      {/* Botão */}
      <button
        className={`w-full py-3 rounded-full text-sm font-medium tracking-wide transition-all ${
          servico.destaque
            ? "bg-white text-bordeaux-600 hover:bg-golden-50"
            : servico.pacote
              ? "bg-golden-400 text-white hover:bg-golden-500"
              : "bg-bordeaux-600 text-white hover:bg-bordeaux-800"
        }`}
      >
        Agendar agora
      </button>
    </div>
  );
}
