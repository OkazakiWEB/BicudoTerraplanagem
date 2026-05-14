const items = [
  {
    n: '01',
    title: 'Atendimento Rápido',
    desc: 'Visita técnica em até 24 horas. Orçamento detalhado em até 48 horas úteis, sem compromisso.',
  },
  {
    n: '02',
    title: 'Compromisso com Prazo',
    desc: 'Obras entregues dentro do cronograma com planejamento rigoroso e gestão de equipe eficiente.',
  },
  {
    n: '03',
    title: 'Máquinas Modernas',
    desc: 'Frota própria de equipamentos de última geração — escavadeiras, motoniveladoras, rolo compactador.',
  },
  {
    n: '04',
    title: 'Equipe Técnica',
    desc: 'Engenheiros, topógrafos e operadores certificados. ART por obra e nota fiscal em todos os serviços.',
  },
]

export default function Differentials() {
  return (
    <section id="diferenciais" className="bg-white py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — content */}
          <div data-anim="left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#F4C430]" />
              <span
                className="text-[#F4C430] text-xs font-bold tracking-[4px] uppercase"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                Por que nos escolher
              </span>
            </div>

            <h2
              className="text-[#0E2347] mb-12"
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(32px, 4vw, 52px)',
                letterSpacing: '-1.5px',
                lineHeight: 1.0,
              }}
            >
              NOSSOS<br />DIFERENCIAIS
            </h2>

            <div className="space-y-0 divide-y divide-gray-100">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-6 py-7 group cursor-default"
                >
                  <div
                    className="flex-shrink-0 w-10 text-[#F4C430] group-hover:text-[#0E2347] transition-colors duration-300"
                    style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '0.75rem', letterSpacing: '1px', paddingTop: '3px' }}
                  >
                    {item.n}
                  </div>
                  <div>
                    <h3
                      className="text-[#0E2347] mb-2 group-hover:text-[#F4C430] transition-colors duration-300"
                      style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1rem', letterSpacing: '-0.2px' }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-gray-500 text-sm leading-relaxed"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — image */}
          <div className="relative" data-anim="right">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]">
              <img
                src="/img-03.jpg"
                alt="Obras Bicudo Terraplanagem"
                className="w-full h-full object-cover"
              />
              {/* Overlay card */}
              <div
                className="absolute bottom-0 left-0 right-0 p-8"
                style={{
                  background: 'linear-gradient(0deg, rgba(14,35,71,0.96) 0%, rgba(14,35,71,0.0) 100%)',
                }}
              >
                <div
                  className="text-white/50 text-xs uppercase tracking-widest mb-2"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  Nossa estrutura
                </div>
                <div
                  className="text-white font-black text-xl"
                  style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '-0.5px' }}
                >
                  Empresa regularizada · CREA · ART por obra
                </div>
              </div>
            </div>

            {/* Gold corner accent */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-2 border-[#F4C430] rounded-xl z-0" />
          </div>
        </div>
      </div>
    </section>
  )
}
