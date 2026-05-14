const services = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="4" y="28" width="40" height="8" rx="2" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M8 28V20C8 18.9 8.9 18 10 18H38C39.1 18 40 18.9 40 20V28" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M16 18V12H32V18" stroke="currentColor" strokeWidth="2.5"/>
        <circle cx="14" cy="38" r="4" stroke="currentColor" strokeWidth="2.5"/>
        <circle cx="34" cy="38" r="4" stroke="currentColor" strokeWidth="2.5"/>
        <line x1="18" y1="38" x2="30" y2="38" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    number: '01',
    title: 'Terraplanagem',
    desc: 'Preparação e nivelamento preciso de terrenos para construção civil, industrial e agropecuária. Execução eficiente com controle topográfico.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M6 38L14 20L22 26L30 12L38 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M38 22L42 38H6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="6" y1="38" x2="42" y2="38" stroke="currentColor" strokeWidth="2.5"/>
      </svg>
    ),
    number: '02',
    title: 'Escavações',
    desc: 'Escavação de fundações, rebaixamentos e valas com precisão e segurança. Equipamentos adequados para cada tipo de solo e profundidade.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2.5"/>
        <circle cx="24" cy="24" r="7" stroke="currentColor" strokeWidth="2" strokeDasharray="4 3"/>
        <path d="M24 10V6M24 42V38M10 24H6M42 24H38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="2" fill="currentColor"/>
      </svg>
    ),
    number: '03',
    title: 'Compactação',
    desc: 'Compactação de aterros com controle rigoroso de densidade. Garantia de estabilidade estrutural para todas as camadas do solo.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M6 36L16 28L24 32L38 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M38 20H42V36H6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M12 36V32M20 36V28M28 36V30M36 36V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    number: '04',
    title: 'Movimentação de Terra',
    desc: 'Transporte e redistribuição de grandes volumes de terra com eficiência logística. Corte e aterro equilibrado para otimizar custos.',
  },
]

export default function Services() {
  return (
    <section id="servicos" className="py-28 lg:py-36" style={{ background: '#F8F8F6' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 lg:mb-20">
          <div data-anim="up">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#F4C430]" />
              <span
                className="text-[#F4C430] text-xs font-bold tracking-[4px] uppercase"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                O que fazemos
              </span>
            </div>
            <h2
              className="text-[#0E2347]"
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(32px, 4.5vw, 56px)',
                letterSpacing: '-2px',
                lineHeight: 1.0,
              }}
            >
              NOSSOS<br />SERVIÇOS
            </h2>
          </div>
          <p
            className="text-gray-500 max-w-sm text-base leading-relaxed lg:text-right"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
            data-anim="up"
          >
            Soluções completas em terraplanagem para obras de qualquer porte,
            com equipamentos modernos e equipe especializada.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E8E8E4]">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white p-8 lg:p-10 group cursor-default hover:bg-[#0E2347] transition-colors duration-500 relative overflow-hidden"
              data-anim="up"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Number */}
              <div
                className="text-gray-100 group-hover:text-[#0a1b38] absolute top-6 right-6 transition-colors duration-500 select-none"
                style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '4rem', lineHeight: 1, letterSpacing: '-2px' }}
              >
                {s.number}
              </div>

              {/* Icon */}
              <div className="text-[#0E2347] group-hover:text-[#F4C430] mb-8 transition-colors duration-500 relative z-10">
                {s.icon}
              </div>

              {/* Gold top border */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#F4C430] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <h3
                className="text-[#0E2347] group-hover:text-white mb-3 transition-colors duration-500 relative z-10"
                style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.15rem', letterSpacing: '-0.3px' }}
              >
                {s.title}
              </h3>
              <p
                className="text-gray-400 group-hover:text-white/60 text-sm leading-relaxed transition-colors duration-500 relative z-10"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
