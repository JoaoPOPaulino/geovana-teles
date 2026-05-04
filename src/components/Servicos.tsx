function calcularDesconto(original: string, atual: string) {
  const o = parseFloat(original.replace(/[^\d]/g, ""));
  const a = parseFloat(atual.replace(/[^\d]/g, ""));

  if (!o || !a) return "";

  const economia = o - a;

  return `R$ ${economia}`;
}
interface Promocao {
  titulo: string;
  badge: string;
  precoPromocional?: string;
  descricao?: string;
  validade?: string;
  ativo: boolean;
}

interface Servico {
  numero: string;
  titulo: string;
  descricao: string;
  duracao: string;
  preco: string;
  precoOriginal?: string;
  destaque?: boolean;
  pacote?: boolean;
  slug: string;
  inclusos: string[];
  promocao?: Promocao;
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
    promocao: {
      titulo: "Especial Dia das Mães",
      badge: "🌷 Dia das Mães",
      precoPromocional: "R$ 99",
      descricao:
        "O melhor presente não é algo que se guarda, é algo que se sente.",
      validade: "Válido até o Dia das Mães (12/05/2026)",
      ativo: true,
    },
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
      "Eliminação de gordura localizada",
      "Redução de medidas sem cirurgia",
      "Resultados progressivos e duradouros",
      "Sem downtime — retorne às atividades imediatamente",
    ],
  },

  // ── PACOTES ───────────────────────────────────────────────────────────
  {
    numero: "P1",
    titulo: "Ritual Anti-Stress",
    descricao:
      "10 massagens relaxantes com 1 sessão bônus inclusa. Para quem busca bem-estar constante com economia real.",
    duracao: "1h / sessão",
    preco: "R$ 997",
    precoOriginal: "R$ 1.650",
    slug: "ritual-anti-stress",
    pacote: true,
    inclusos: [
      "10 sessões de 1 hora",
      "🎁 1 sessão bônus",
      "Óleos essenciais premium",
      "Ambiente climatizado",
    ],
  },
  {
    numero: "P2",
    titulo: "Projeto Desinchar 30 Dias",
    descricao:
      "6 drenagens linfáticas + 2 massagens relaxantes + avaliação personalizada. Resultados em 30 dias.",
    duracao: "1h / sessão",
    preco: "R$ 750",
    precoOriginal: "R$ 1.200",
    slug: "projeto-desinchar",
    pacote: true,
    inclusos: [
      "6 sessões de drenagem linfática",
      "2 massagens relaxantes",
      "Avaliação personalizada",
      "Redução de inchaço e melhora da circulação",
    ],
  },
  {
    numero: "P3",
    titulo: "Protocolo Barriga Zero",
    descricao:
      "5 massagens redutoras + 5 sessões de Heccus para eliminar gordura localizada e definir o abdômen.",
    duracao: "45 min / sessão",
    preco: "R$ 950",
    precoOriginal: "R$ 1.500",
    slug: "protocolo-barriga-zero",
    pacote: true,
    inclusos: [
      "5 massagens redutoras",
      "5 sessões de Heccus",
      "🎁 Bônus: drenagem por sessão",
      "Redução de medidas e definição abdominal",
    ],
  },
  {
    numero: "P4",
    titulo: "Pacote Premium Corporal",
    descricao:
      "O protocolo mais completo: criolipólise + drenagens + massagens redutoras para transformação total do corpo.",
    duracao: "Variável",
    preco: "R$ 1.300",
    precoOriginal: "R$ 1.900",
    slug: "pacote-premium-corporal",
    pacote: true,
    inclusos: [
      "1 sessão de criolipólise",
      "5 drenagens linfáticas",
      "3 massagens redutoras",
      "Protocolo personalizado de transformação",
    ],
  },
  {
    numero: "P5",
    titulo: "Pele Sempre Limpa",
    descricao:
      "3 limpezas de pele mensais + avaliação personalizada. Manutenção contínua para uma pele sempre saudável.",
    duracao: "1h / sessão",
    preco: "R$ 330",
    precoOriginal: "R$ 360",
    slug: "pele-sempre-limpa",
    pacote: true,
    inclusos: [
      "3 limpezas de pele (1 por mês)",
      "Avaliação personalizada",
      "Higienização e extração profissional",
      "Protocolo adaptado ao seu tipo de pele",
    ],
  },
  {
    numero: "P6",
    titulo: "Tratamento Pele Perfeita",
    descricao:
      "5 limpezas de pele + 1 limpeza bônus + protocolo personalizado. O caminho completo para uma pele renovada.",
    duracao: "1h / sessão",
    preco: "R$ 550",
    precoOriginal: "R$ 720",
    slug: "tratamento-pele-perfeita",
    pacote: true,
    inclusos: [
      "5 limpezas de pele",
      "🎁 1 limpeza bônus",
      "Protocolo personalizado",
      "Acompanhamento da evolução da pele",
    ],
  },
  {
    numero: "P7",
    titulo: "Plano Mensal",
    descricao:
      "1 limpeza de pele + 1 drenagem ou massagem por mês. Cuidado regular com o melhor custo-benefício.",
    duracao: "2h / mês",
    preco: "R$ 250 / mês",
    precoOriginal: "R$ 300",
    slug: "plano-mensal",
    pacote: true,
    inclusos: [
      "1 limpeza de pele por mês",
      "1 drenagem linfática ou massagem",
      "Atendimento personalizado",
      "Parcelamento facilitado",
    ],
  },
  {
    numero: "P8",
    titulo: "Firmeza & Contorno",
    descricao:
      "Protocolo completo para redução de gordura localizada e melhora da flacidez, deixando o corpo mais firme e definido.",
    duracao: "45 min / sessão",
    preco: "R$ 700",
    precoOriginal: "R$ 1.000",
    slug: "firmeza-contorno",
    pacote: true,
    inclusos: [
      "5 sessões de Heccus",
      "5 sessões de radiofrequência",
      "🎁 Bônus: 10 min de drenagem por sessão",
      "Melhora da firmeza e redução de medidas",
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
      {servico.promocao?.ativo ? (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-pink-500 text-white text-xs px-5 py-1 rounded-full tracking-widest uppercase whitespace-nowrap">
          {servico.promocao.badge}
        </div>
      ) : servico.destaque ? (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-golden-400 text-white text-xs px-5 py-1 rounded-full tracking-widest uppercase whitespace-nowrap">
          Serviço em destaque
        </div>
      ) : servico.pacote ? (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-golden-400 text-white text-xs px-5 py-1 rounded-full tracking-widest uppercase whitespace-nowrap">
          Pacote
        </div>
      ) : null}

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
          {servico.promocao?.ativo && servico.promocao.descricao
            ? servico.promocao.descricao
            : servico.descricao}
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
      {servico.promocao?.ativo && servico.promocao.validade && (
        <span className="text-xs text-golden-200">
          ⏳ {servico.promocao.validade}
        </span>
      )}
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
          {servico.promocao?.ativo ? (
            <div className="flex flex-col items-end">
              <span className="text-xs line-through opacity-60">
                {servico.preco}
              </span>
              <span className="font-display text-3xl font-medium text-golden-300">
                {servico.promocao.precoPromocional}
              </span>
            </div>
          ) : (
            <div className="flex flex-col items-end">
              {servico.precoOriginal && (
                <span className="text-xs line-through opacity-50">
                  {servico.precoOriginal}
                </span>
              )}

              <span className="font-display text-3xl font-medium">
                {servico.preco}
              </span>

              {servico.precoOriginal && (
                <span className="text-xs text-green-500 font-medium">
                  Economize{" "}
                  {calcularDesconto(servico.precoOriginal, servico.preco)}
                </span>
              )}
            </div>
          )}
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
        {servico.promocao?.ativo ? "Garantir promoção" : "Agendar agora"}
      </button>
    </div>
  );
}
