import { useRef, useEffect } from "react";
import geovana from "../assets/geovana.jpg";
import html2pdf from "html2pdf.js";

const avulsos = [
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
      "Protocolo personalizado por tipo de pele",
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
      "Alívio de tensões musculares",
      "Redução do estresse e ansiedade",
      "Melhora da qualidade do sono",
      "Sensação de leveza e bem-estar",
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
      "Redução de inchaço e retenção hídrica",
      "Melhora da circulação sanguínea",
      "Eliminação de toxinas",
      "Sensação de leveza nas pernas",
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
      "Redução de medidas progressiva",
      "Combate à celulite",
      "Modelagem e contorno corporal",
      "Melhora da textura da pele",
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
];

const pacotes = [
  {
    numero: "P1",
    titulo: "Ritual Anti-Stress",
    descricao:
      "10 massagens relaxantes com 1 sessão bônus inclusa. Para quem busca bem-estar constante com economia real.",
    duracao: "1h / sessão",
    preco: "R$ 997",
    slug: "ritual-anti-stress",
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
    slug: "projeto-desinchar",
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
    slug: "protocolo-barriga-zero",
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
    slug: "pacote-premium-corporal",
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
    slug: "pele-sempre-limpa",
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
    slug: "tratamento-pele-perfeita",
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
    preco: "R$ 250/mês",
    slug: "plano-mensal",
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
      "Tecnologia + drenagem para acelerar resultados visíveis no corpo.",
    duracao: "45 min / sessão",
    preco: "R$ 700",
    slug: "firmeza-contorno",
    inclusos: [
      "5 sessões de Heccus",
      "5 sessões de radiofrequência",
      "🎁 10 min de drenagem em cada sessão",
      "Melhora da firmeza e redução de medidas",
    ],
  },
];

const CATALOGO_WIDTH_PX = 794;

export default function Catalogo() {
  const catalogoRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

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

    const timeout = setTimeout(adjust, 300);
    window.addEventListener("resize", adjust);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", adjust);
    };
  }, []);

  const cardStyle = (destaque: boolean, pacote: boolean) => ({
    backgroundColor: destaque ? "#650033" : pacote ? "#1A0A12" : "#FFFFFF",
    border: destaque || pacote ? "none" : "1px solid #E8C0D3",
    borderRadius: "16px",
    padding: "22px",
    position: "relative" as const,
    display: "flex",
    flexDirection: "column" as const,
    gap: "12px",
  });

  const numColor = (destaque: boolean, pacote: boolean) =>
    destaque ? "#8B0044" : pacote ? "#3D001F" : "#E8C0D3";
  const titleColor = (destaque: boolean, pacote: boolean) =>
    destaque || pacote ? "#FFFFFF" : "#1A0A12";
  const descColor = (destaque: boolean, pacote: boolean) =>
    destaque ? "#E8C0D3" : pacote ? "rgba(255,255,255,0.6)" : "#4A3840";
  const dividerColor = (destaque: boolean, pacote: boolean) =>
    destaque ? "#8B0044" : pacote ? "#2A1020" : "#F5E6EE";
  const dotColor = (destaque: boolean, pacote: boolean) =>
    destaque || pacote ? "#C8973A" : "#8B0044";
  const itemColor = (destaque: boolean, pacote: boolean) =>
    destaque ? "#E8C0D3" : pacote ? "rgba(255,255,255,0.55)" : "#4A3840";
  const durationColor = (destaque: boolean, pacote: boolean) =>
    destaque ? "#E8C0D3" : pacote ? "rgba(255,255,255,0.4)" : "#4A3840";
  const priceColor = (destaque: boolean, pacote: boolean) =>
    destaque ? "#F7DFB5" : pacote ? "#C8973A" : "#650033";

  const Card = ({
    s,
    destaque = false,
    pacote = false,
  }: {
    s: (typeof avulsos)[0];
    destaque?: boolean;
    pacote?: boolean;
  }) => (
    <div style={cardStyle(destaque, pacote)}>
      {destaque && (
        <div
          style={{
            position: "absolute",
            top: "-11px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#C8973A",
            color: "#FFF",
            fontSize: "8px",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            padding: "3px 12px",
            borderRadius: "999px",
            whiteSpace: "nowrap",
          }}
        >
          Destaque
        </div>
      )}
      {pacote && (
        <div
          style={{
            position: "absolute",
            top: "-11px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#C8973A",
            color: "#FFF",
            fontSize: "8px",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            padding: "3px 12px",
            borderRadius: "999px",
            whiteSpace: "nowrap",
          }}
        >
          Pacote
        </div>
      )}

      <span
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "40px",
          fontWeight: 400,
          lineHeight: 1,
          color: numColor(destaque, pacote),
        }}
      >
        {s.numero}
      </span>

      <div>
        <h3
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "19px",
            fontWeight: 500,
            color: titleColor(destaque, pacote),
            margin: "0 0 6px",
          }}
        >
          {s.titulo}
        </h3>
        <p
          style={{
            fontSize: "10.5px",
            lineHeight: 1.6,
            fontWeight: 300,
            color: descColor(destaque, pacote),
            opacity: destaque ? 1 : 0.75,
            margin: 0,
          }}
        >
          {s.descricao}
        </p>
      </div>

      <div
        style={{
          borderTop: `1px solid ${dividerColor(destaque, pacote)}`,
          borderBottom: `1px solid ${dividerColor(destaque, pacote)}`,
          padding: "8px 0",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        {s.inclusos.map((item) => (
          <div
            key={item}
            style={{ display: "flex", alignItems: "flex-start", gap: "7px" }}
          >
            <div
              style={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                backgroundColor: dotColor(destaque, pacote),
                flexShrink: 0,
                marginTop: "4px",
              }}
            />
            <span
              style={{
                fontSize: "10px",
                fontWeight: 300,
                color: itemColor(destaque, pacote),
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
            fontSize: "10px",
            color: durationColor(destaque, pacote),
            opacity: 0.6,
          }}
        >
          {s.duracao}
        </span>
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "24px",
            fontWeight: 500,
            color: priceColor(destaque, pacote),
          }}
        >
          {s.preco}
        </span>
      </div>
    </div>
  );

  const handleDownload = () => {
    const el = catalogoRef.current;
    if (!el) return;

    const prevTransform = el.style.transform;
    const prevWidth = el.style.width;
    el.style.transform = "";
    el.style.width = "";

    html2pdf()
      .set({
        margin: 0,
        filename: "Catalogo_Geovana_Teles.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, allowTaint: true },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      })
      .from(el)
      .save()
      .then(() => {
        el.style.transform = prevTransform;
        el.style.width = prevWidth;
      });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500&display=swap');

        #catalogo-print, #catalogo-print * {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
          color-adjust: exact !important;
        }

        @media screen and (max-width: 860px) {
          body { overflow-x: hidden; }
        }
      `}</style>

      {/* Botão download */}
      <div className="fixed bottom-24 right-6 z-50">
        <button
          onClick={handleDownload}
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
        </button>
      </div>

      <div ref={wrapperRef}>
        <div
          id="catalogo-print"
          ref={catalogoRef}
          style={{
            fontFamily: "'Inter', sans-serif",
            maxWidth: "210mm",
            margin: "0 auto",
          }}
        >
          {/* ══════════════════════════════════════════════════════════════ */}
          {/* PÁGINA 1 — CAPA                                               */}
          {/* ══════════════════════════════════════════════════════════════ */}
          <div
            style={{
              backgroundColor: "#650033",
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

              <div style={{ flexShrink: 0, position: "relative" }}>
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
                  crossOrigin="anonymous"
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
                <div
                  style={{
                    position: "absolute",
                    bottom: "-13px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "#C8973A",
                    color: "#FFF",
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
                  Estética facial e corporal
                </div>
              </div>
            </div>

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

          {/* ══════════════════════════════════════════════════════════════ */}
          {/* PÁGINA 2 — SERVIÇOS AVULSOS                                   */}
          {/* ══════════════════════════════════════════════════════════════ */}
          <div style={{ backgroundColor: "#FAFAF9", minHeight: "297mm" }}>
            <div
              style={{
                backgroundColor: "#F5E6EE",
                padding: "36px 56px 28px",
                borderBottom: "1px solid #E8C0D3",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "10px",
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
                  fontSize: "40px",
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
                padding: "28px 48px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "16px",
              }}
            >
              {avulsos.map((s) => (
                <Card key={s.slug} s={s} destaque={!!s.destaque} />
              ))}
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════ */}
          {/* PÁGINA 3 — PACOTES                                            */}
          {/* ══════════════════════════════════════════════════════════════ */}
          <div style={{ backgroundColor: "#FAFAF9", minHeight: "297mm" }}>
            <div
              style={{
                backgroundColor: "#1A0A12",
                padding: "36px 56px 28px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "10px",
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
                  Pacotes
                </span>
              </div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "40px",
                  fontWeight: 500,
                  color: "#FFFFFF",
                  margin: "0 0 6px",
                  lineHeight: 1.1,
                }}
              >
                Mais resultado, melhor preço
              </h2>
              <p
                style={{
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.45)",
                  fontWeight: 300,
                  margin: 0,
                }}
              >
                Combine tratamentos e potencialize os resultados com economia.
              </p>
            </div>

            <div
              style={{
                padding: "28px 48px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "16px",
              }}
            >
              {pacotes.map((s) => (
                <Card key={s.slug} s={s} pacote />
              ))}
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════ */}
          {/* PÁGINA 4 — CONTRACAPA                                         */}
          {/* ══════════════════════════════════════════════════════════════ */}
          <div
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
