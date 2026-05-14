const WA = 'https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.'

const stats = [
  { value: '+10', label: 'Anos de experiência' },
  { value: '+300', label: 'Obras realizadas' },
  { value: 'SP', label: 'Atendimento São Paulo' },
  { value: '24/7', label: 'Suporte operacional' },
]

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/img-01.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(110deg, rgba(14,35,71,0.96) 0%, rgba(14,35,71,0.78) 50%, rgba(14,35,71,0.35) 100%)',
        }}
      />

      {/* Decorative gold line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#F4C430]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-40 w-full">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <div
            className="flex items-center gap-3 mb-6"
            data-anim="up"
          >
            <div className="w-8 h-px bg-[#F4C430]" />
            <span
              className="text-[#F4C430] text-xs font-bold tracking-[4px] uppercase"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              São Paulo · Desde 2005
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-white leading-[0.85] mb-8"
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(64px, 12vw, 128px)',
              letterSpacing: '-3px',
            }}
            data-anim="up"
          >
            TERRA<br />
            <span className="text-[#F4C430]">PLANE</span><br />
            AGEM
          </h1>

          {/* Subheadline */}
          <p
            className="text-white/65 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
            data-anim="up"
          >
            Terraplanagem de alta performance para obras industriais, residenciais e de infraestrutura.
            Equipamentos modernos, equipe especializada, entrega no prazo.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4" data-anim="up">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#F4C430] text-[#0E2347] font-black uppercase text-sm tracking-widest px-8 py-4 rounded-full transition-all duration-200 hover:bg-[#d4a820] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(244,196,48,0.4)]"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Solicitar Orçamento
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-white font-bold uppercase text-sm tracking-widest px-8 py-4 rounded-full border-2 border-white/30 transition-all duration-200 hover:border-white/70 hover:bg-white/10"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Conheça Nossos Serviços
            </a>
          </div>
        </div>
      </div>

      {/* Stat cards */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-white/10">
            {stats.map((s, i) => (
              <div
                key={i}
                className="px-6 py-6 lg:py-8 border-r border-white/10 last:border-r-0"
                style={{
                  background: 'rgba(14,35,71,0.75)',
                  backdropFilter: 'blur(20px)',
                  borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                }}
                data-anim="up"
              >
                <div
                  className="text-[#F4C430] mb-1"
                  style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 'clamp(24px,3vw,40px)', letterSpacing: '-1px' }}
                >
                  {s.value}
                </div>
                <div className="text-white/50 text-xs uppercase tracking-widest" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
