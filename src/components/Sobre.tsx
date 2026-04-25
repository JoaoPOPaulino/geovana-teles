import geovana from "../assets/geovana.jpg";

export default function Sobre() {
  return (
    <section className="py-24 md:py-32 px-6 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-golden-50 opacity-80 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-bordeaux-50 opacity-60 -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-4xl mx-auto relative">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Foto */}
          <div className="w-full max-w-sm mx-auto md:mx-0 md:w-2/5 relative">
            <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border border-golden-200" />
            <img
              src={geovana}
              alt="Geovana Teles, esteticista"
              className="relative w-full rounded-2xl object-cover object-top aspect-[3/4]"
            />
            {/* Card flutuante — no mobile fica embaixo centralizado */}
            <div className="absolute -bottom-5 right-4 md:-bottom-6 md:-right-6 bg-white rounded-2xl px-5 py-3 shadow-lg border border-golden-100">
              <p className="font-display text-2xl md:text-3xl font-medium text-bordeaux-600">
                +200
              </p>
              <p className="text-xs text-mauve-800 opacity-60 tracking-wide">
                clientes atendidas
              </p>
            </div>
          </div>

          {/* Texto */}
          <div className="w-full md:w-3/5 pt-6 md:pt-0">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-golden-400" />
              <p className="text-golden-600 text-xs font-medium tracking-[0.3em] uppercase">
                Sobre mim
              </p>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium text-mauve-900 mb-6 md:mb-8 leading-snug">
              Cuidado com a pele{" "}
              <span className="italic text-bordeaux-600 block sm:inline">
                que transforma
              </span>
            </h2>

            <p className="text-mauve-800 leading-relaxed mb-4 md:mb-6 font-light opacity-80 text-sm md:text-base">
              Olá! Sou Geovana Teles, especializada em limpeza de pele
              profissional. Acredito que cuidar da pele vai além da estética — é
              um ato de amor próprio.
            </p>

            <p className="text-mauve-800 leading-relaxed mb-8 md:mb-10 font-light opacity-80 text-sm md:text-base">
              Trabalho com técnicas modernas e produtos de qualidade para
              garantir resultados visíveis e duradouros, sempre priorizando o
              conforto e bem-estar de cada cliente.
            </p>

            {/* Diferenciais */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {[
                { numero: "3+", label: "anos de experiência" },
                { numero: "200+", label: "clientes atendidas" },
                { numero: "100%", label: "produtos naturais" },
                { numero: "5★", label: "avaliação média" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-px h-8 bg-golden-400 shrink-0" />
                  <div>
                    <p className="font-display text-xl md:text-2xl font-medium text-bordeaux-600">
                      {item.numero}
                    </p>
                    <p className="text-xs text-mauve-800 opacity-60">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
