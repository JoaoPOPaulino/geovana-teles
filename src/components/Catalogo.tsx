import { useRef, useEffect } from "react";
import geovana from "../assets/geovana.jpg";

const servicos = [
  // ── SERVIÇOS AVULSOS ────────────────────────────────────────────────────
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
      "Máscara hidratante",
      "Protetor solar",
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
    slug: "criolipólise",
    inclusos: [
      "Avaliação da área tratada",
      "Aplicação do aparelho de criolipolise",
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
      "Estimula o colágeno e melhora a flacidez da pele com energia térmica profunda, proporcionando rejuvenescimento facial e corporal.",
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

  // ── PACOTES ─────────────────────────────────────────────────────────────
  {
    numero: "P1",
    titulo: "Pacote Massagem Relaxante",
    descricao:
      "10 sessões de massagem relaxante para um relaxamento profundo e duradouro. Ideal para quem busca bem-estar constante.",
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
      "5 sessões de massagem redutora no abdômen combinadas com 5 sessões de Heccus para resultados visíveis e duradouros.",
    duracao: "45 min / sessão",
    preco: "R$ 799",
    slug: "protocolo-verao",
    pacote: true,
    destaque: false,
    inclusos: [
      "5 sessões de massagem redutora abdominal",
      "5 sessões de Heccus",
      "Redução de medidas",
      "Contorno corporal",
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
      "10 min de drenagem linfática por sessão (brinde)",
      "Firmeza e contorno corporal",
    ],
  },
];

// Largura real do catálogo em px (210mm a 96dpi)
const CATALOGO_WIDTH_PX = 794;

export default function Catalogo() {
  const catalogoRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // ── Escala responsiva no mobile ──────────────────────────────────────────
  useEffect(() => {
    const el = catalogoRef.current;
    const wrapper = wrapperRef.current;
    if (!el || !wrapper) return;

    const adjust = () => {
      if (window.innerWidth < 860) {
        const scale = window.innerWidth / CATALOGO_WIDTH_PX;
        el.style.transform = `scale(${scale})`;
        el.style.transformOrigin = "top left";
        el.style.width = `${CATALOGO_WIDTH_PX}px`;

        // Ajusta a altura do wrapper para não criar espaço vazio
        // (scale() não altera o layout flow, então precisamos fazer isso manualmente)
        const naturalHeight = el.scrollHeight;
        wrapper.style.height = `${naturalHeight * scale}px`;
        wrapper.style.overflow = "hidden";
      } else {
        el.style.transform = "";
        el.style.transformOrigin = "";
        el.style.width = "";
        wrapper.style.height = "";
        wrapper.style.overflow = "";
      }
    };

    // Aguarda fontes e imagens carregarem antes de calcular alturas
    const timeout = setTimeout(adjust, 300);
    window.addEventListener("resize", adjust);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", adjust);
    };
  }, []);

  return (
    <>
      <style>{`
        /* ── FORCE BACKGROUNDS & COLORS ON PRINT ── */
        #catalogo-print,
        #catalogo-print * {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
          color-adjust: exact !important;
        }



        @media screen and (max-width: 860px) {
          /*
           * O JS aplica o scale() e ajusta a altura do wrapper.
           * Aqui apenas evitamos scroll horizontal na página.
           */
          body {
            overflow-x: hidden;
          }
        }
      `}</style>

      {/* Botão de download — aponta para o PDF estático em /public */}
      <div className="fixed bottom-24 right-6 z-50">
        <a
          href="/catalogo-geovana-teles.pdf"
          download="Catalogo_Geovana_Teles.pdf"
          className="flex items-center gap-3 bg-bordeaux-600 text-white px-7 py-4 rounded-full text-sm font-medium tracking-wide shadow-xl shadow-bordeaux-100 hover:bg-bordeaux-800 hover:-translate-y-0.5 transition-all duration-300"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          Baixar catálogo (PDF)
        </a>
      </div>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/*  WRAPPER — controla a altura quando escalonado no mobile          */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <div ref={wrapperRef}>
        {/* ════════════════════════════════════════════════════════════════ */}
        {/*  DOCUMENTO DO CATÁLOGO                                          */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <div
          id="catalogo-print"
          ref={catalogoRef}
          style={{
            fontFamily: "'Inter', sans-serif",
            maxWidth: "210mm",
            margin: "0 auto",
            display: "block",
          }}
        >
          {/* ───────────────────────────────────────────────────────────── */}
          {/* PÁGINA 1 — CAPA                                               */}
          {/* ───────────────────────────────────────────────────────────── */}
          <div
            className="catalogo-page"
            style={{
              backgroundColor: "#650033",
              minHeight: "297mm",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Blobs decorativos */}
            <div
              style={{
                position: "absolute",
                top: "-80px",
                right: "-80px",
                width: "320px",
                height: "320px",
                borderRadius: "50%",
                backgroundColor: "#8B0044",
                opacity: 0.5,
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "-60px",
                left: "-60px",
                width: "260px",
                height: "260px",
                borderRadius: "50%",
                backgroundColor: "#3D001F",
                opacity: 0.7,
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "38%",
                left: "-20px",
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                backgroundColor: "#C8973A",
                opacity: 0.15,
              }}
            />

            {/* Barra superior */}
            <div
              style={{
                padding: "40px 56px 0",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                position: "relative",
                zIndex: 1,
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <div
                  style={{
                    width: "28px",
                    height: "1px",
                    backgroundColor: "#C8973A",
                  }}
                />
                <span
                  style={{
                    color: "#C8973A",
                    fontSize: "10px",
                    fontWeight: 500,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  Catálogo de Serviços
                </span>
              </div>
              <span
                style={{
                  color: "#8B0044",
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                }}
              >
                2026 · 2027
              </span>
            </div>

            {/* Hero: texto à esquerda / foto à direita */}
            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                padding: "48px 56px",
                position: "relative",
                zIndex: 1,
                gap: "48px",
              }}
            >
              {/* Esquerda: texto */}
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    width: "48px",
                    height: "2px",
                    backgroundColor: "#C8973A",
                    marginBottom: "28px",
                  }}
                />
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "68px",
                    fontWeight: 300,
                    lineHeight: 1,
                    color: "#FFFFFF",
                    letterSpacing: "-1px",
                  }}
                >
                  Geovana
                </div>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "68px",
                    fontWeight: 500,
                    lineHeight: 1,
                    color: "#F7DFB5",
                    fontStyle: "italic",
                    marginBottom: "32px",
                  }}
                >
                  Teles
                </div>
                <p
                  style={{
                    color: "#E8C0D3",
                    fontSize: "13px",
                    fontWeight: 300,
                    lineHeight: 1.75,
                    maxWidth: "280px",
                    marginBottom: "40px",
                    opacity: 0.9,
                  }}
                >
                  Estética facial e corporal profissional em Palmas, TO. Cuidado
                  com a pele que transforma.
                </p>

                {/* Stats */}
                <div style={{ display: "flex", gap: "36px" }}>
                  {[
                    { n: "3+", label: "anos de experiência" },
                    { n: "200+", label: "clientes atendidas" },
                    { n: "5★", label: "avaliação média" },
                  ].map((s) => (
                    <div key={s.label}>
                      <div
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: "28px",
                          fontWeight: 500,
                          color: "#F7DFB5",
                        }}
                      >
                        {s.n}
                      </div>
                      <div
                        style={{
                          fontSize: "9px",
                          color: "#E8C0D3",
                          opacity: 0.65,
                          marginTop: "2px",
                          lineHeight: 1.3,
                        }}
                      >
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direita: foto */}
              <div style={{ flexShrink: 0, position: "relative" }}>
                {/* Moldura dourada deslocada */}
                <div
                  style={{
                    position: "absolute",
                    top: "-10px",
                    right: "-10px",
                    width: "200px",
                    height: "270px",
                    borderRadius: "120px",
                    border: "1px solid rgba(200,151,58,0.45)",
                  }}
                />
                <img
                  src={geovana}
                  alt="Geovana Teles"
                  style={{
                    width: "200px",
                    height: "270px",
                    objectFit: "cover",
                    objectPosition: "top",
                    borderRadius: "120px",
                    display: "block",
                    position: "relative",
                    zIndex: 1,
                  }}
                />
                {/* Badge */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "-13px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "#C8973A",
                    color: "#FFFFFF",
                    fontSize: "9px",
                    fontWeight: 500,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    padding: "5px 16px",
                    borderRadius: "999px",
                    whiteSpace: "nowrap",
                    zIndex: 2,
                  }}
                >
                  Esteticista
                </div>
              </div>
            </div>

            {/* Barra inferior */}
            <div
              style={{
                borderTop: "1px solid rgba(200,151,58,0.2)",
                padding: "22px 56px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                position: "relative",
                zIndex: 1,
              }}
            >
              <div style={{ display: "flex", gap: "28px" }}>
                <span
                  style={{ color: "#E8C0D3", fontSize: "11px", opacity: 0.7 }}
                >
                  📍 Palmas, Tocantins
                </span>
                <span
                  style={{ color: "#E8C0D3", fontSize: "11px", opacity: 0.7 }}
                >
                  📱 (63) 9 9285-8922
                </span>
              </div>
              <span
                style={{ color: "#E8C0D3", fontSize: "11px", opacity: 0.7 }}
              >
                @geovana_.teles
              </span>
            </div>
          </div>

          {/* ───────────────────────────────────────────────────────────── */}
          {/* PÁGINA 2 — SERVIÇOS                                          */}
          {/* ───────────────────────────────────────────────────────────── */}
          <div
            className="catalogo-page"
            style={{ backgroundColor: "#FAFAF9", minHeight: "297mm" }}
          >
            <div
              style={{
                backgroundColor: "#F5E6EE",
                padding: "44px 56px 36px",
                borderBottom: "1px solid #E8C0D3",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "14px",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "1px",
                    backgroundColor: "#C8973A",
                  }}
                />
                <span
                  style={{
                    color: "#9A6E20",
                    fontSize: "10px",
                    fontWeight: 500,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  Serviços
                </span>
              </div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "44px",
                  fontWeight: 500,
                  color: "#1A0A12",
                  margin: 0,
                  lineHeight: 1.1,
                }}
              >
                O que eu ofereço
              </h2>
            </div>

            <div
              style={{
                padding: "36px 56px",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "20px",
              }}
            >
              {servicos.map((s) => (
                <div
                  key={s.slug}
                  style={{
                    backgroundColor: s.destaque ? "#650033" : "#FFFFFF",
                    border: s.destaque ? "none" : "1px solid #E8C0D3",
                    borderRadius: "16px",
                    padding: "26px",
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                  }}
                >
                  {s.destaque && (
                    <div
                      style={{
                        position: "absolute",
                        top: "-14px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        backgroundColor: "#C8973A",
                        color: "#FFFFFF",
                        fontSize: "9px",
                        fontWeight: 500,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        padding: "5px 16px",
                        borderRadius: "999px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Destaque
                    </div>
                  )}

                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "44px",
                      fontWeight: 400,
                      lineHeight: 1,
                      color: s.destaque ? "#8B0044" : "#E8C0D3",
                    }}
                  >
                    {s.numero}
                  </span>

                  <div>
                    <h3
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "21px",
                        fontWeight: 500,
                        color: s.destaque ? "#FFFFFF" : "#1A0A12",
                        margin: "0 0 7px",
                      }}
                    >
                      {s.titulo}
                    </h3>
                    <p
                      style={{
                        fontSize: "11.5px",
                        lineHeight: 1.6,
                        fontWeight: 300,
                        color: s.destaque ? "#E8C0D3" : "#4A3840",
                        opacity: s.destaque ? 1 : 0.7,
                        margin: 0,
                      }}
                    >
                      {s.descricao}
                    </p>
                  </div>

                  <div
                    style={{
                      borderTop: `1px solid ${s.destaque ? "#8B0044" : "#F5E6EE"}`,
                      borderBottom: `1px solid ${s.destaque ? "#8B0044" : "#F5E6EE"}`,
                      padding: "10px 0",
                      display: "flex",
                      flexDirection: "column",
                      gap: "5px",
                    }}
                  >
                    {s.inclusos.map((item) => (
                      <div
                        key={item}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <div
                          style={{
                            width: "4px",
                            height: "4px",
                            borderRadius: "50%",
                            backgroundColor: s.destaque ? "#C8973A" : "#8B0044",
                            flexShrink: 0,
                          }}
                        />
                        <span
                          style={{
                            fontSize: "10.5px",
                            fontWeight: 300,
                            color: s.destaque ? "#E8C0D3" : "#4A3840",
                            opacity: s.destaque ? 0.9 : 0.65,
                          }}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "11px",
                        color: s.destaque ? "#E8C0D3" : "#4A3840",
                        opacity: 0.5,
                      }}
                    >
                      {s.duracao}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "26px",
                        fontWeight: 500,
                        color: s.destaque ? "#F7DFB5" : "#650033",
                      }}
                    >
                      {s.preco}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ───────────────────────────────────────────────────────────── */}
          {/* PÁGINA 3 — CONTRACAPA                                        */}
          {/* ───────────────────────────────────────────────────────────── */}
          <div
            className="catalogo-page"
            style={{
              backgroundColor: "#1A0A12",
              minHeight: "297mm",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-40px",
                right: "80px",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                backgroundColor: "#3D001F",
                opacity: 0.8,
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "80px",
                left: "-40px",
                width: "160px",
                height: "160px",
                borderRadius: "50%",
                backgroundColor: "#650033",
                opacity: 0.5,
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "-20px",
                right: "30%",
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                backgroundColor: "#C8973A",
                opacity: 0.1,
              }}
            />

            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "80px 56px",
                position: "relative",
                zIndex: 1,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "24px",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "1px",
                    backgroundColor: "#C8973A",
                  }}
                />
                <span
                  style={{
                    color: "#C8973A",
                    fontSize: "10px",
                    fontWeight: 500,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  Contato & Agendamento
                </span>
              </div>

              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "52px",
                  fontWeight: 400,
                  color: "#FFFFFF",
                  lineHeight: 1.1,
                  margin: "0 0 14px",
                }}
              >
                Vamos conversar?
              </h2>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "22px",
                  fontStyle: "italic",
                  color: "#F7DFB5",
                  margin: "0 0 52px",
                }}
              >
                Agende seu horário e cuide da sua pele.
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                  maxWidth: "420px",
                }}
              >
                {[
                  {
                    label: "WhatsApp",
                    value: "(63) 9 9285-8922",
                    sub: "Respondemos rapidamente",
                    accent: "#25D366",
                  },
                  {
                    label: "Instagram",
                    value: "@geovana_.teles",
                    sub: "Acompanhe os resultados",
                    accent: "#C8973A",
                  },
                  {
                    label: "Localização",
                    value: "Palmas, Tocantins",
                    sub: "Atendimento presencial",
                    accent: "#E8C0D3",
                  },
                ].map((c) => (
                  <div
                    key={c.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                      backgroundColor: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "12px",
                      padding: "18px 22px",
                    }}
                  >
                    <div
                      style={{
                        width: "4px",
                        height: "38px",
                        borderRadius: "2px",
                        backgroundColor: c.accent,
                        flexShrink: 0,
                      }}
                    />
                    <div>
                      <div
                        style={{
                          fontSize: "9px",
                          letterSpacing: "0.25em",
                          textTransform: "uppercase",
                          color: "rgba(255,255,255,0.35)",
                          marginBottom: "4px",
                        }}
                      >
                        {c.label}
                      </div>
                      <div
                        style={{
                          fontSize: "14px",
                          fontWeight: 500,
                          color: "#FFFFFF",
                          marginBottom: "2px",
                        }}
                      >
                        {c.value}
                      </div>
                      <div
                        style={{
                          fontSize: "11px",
                          color: "rgba(255,255,255,0.4)",
                          fontWeight: 300,
                        }}
                      >
                        {c.sub}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,0.08)",
                padding: "22px 56px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                position: "relative",
                zIndex: 1,
              }}
            >
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "17px",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.25)",
                  letterSpacing: "0.05em",
                }}
              >
                Geovana Teles · Estética
              </span>
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <div
                  style={{
                    width: "24px",
                    height: "1px",
                    backgroundColor: "#C8973A",
                    opacity: 0.5,
                  }}
                />
                <span
                  style={{ color: "#C8973A", fontSize: "10px", opacity: 0.6 }}
                >
                  Palmas, TO
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
