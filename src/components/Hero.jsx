import { WA } from '../constants.js'

const stats = [
  { value: '+10',  label: 'Anos de experiência' },
  { value: '+300', label: 'Obras realizadas' },
  { value: 'SP',   label: 'Atendimento São Paulo' },
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
          background:
            'linear-gradient(115deg, rgba(14,35,71,0.94) 0%, rgba(14,35,71,0.72) 55%, rgba(14,35,71,0.25) 100%)',
        }}
      />

      {/* Decorative gold left bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#F4C430]" />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 pt-28 pb-44 w-full">
        <div className="max-w-2xl">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8" data-anim="up">
            <div className="w-6 h-px bg-[#F4C430]" />
            <span
              className="text-[#F4C430] text-[11px] font-bold tracking-[5px] uppercase"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              São Paulo &bull; Desde 2005
            </span>
          </div>

          {/* Headline — two clean lines, controlled size */}
          <h1
            className="text-white mb-7"
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(40px, 5.5vw, 72px)',
              letterSpacing: '-1.5px',
              lineHeight: 1.05,
            }}
            data-anim="up"
          >
            SOLUÇÕES EM<br />
            <span style={{ color: '#F4C430' }}>TERRAPLANAGEM</span>
          </h1>

          {/* Separator line */}
          <div className="flex items-center gap-4 mb-7" data-anim="up">
            <div className="w-10 h-px bg-[#F4C430]/60" />
            <div className="h-px flex-1 max-w-[160px] bg-white/10" />
          </div>

          {/* Subheadline */}
          <p
            className="text-white/60 mb-10 leading-[1.75]"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 300,
              fontSize: 'clamp(15px, 1.2vw, 18px)',
              maxWidth: '420px',
            }}
            data-anim="up"
          >
            Equipamentos modernos e equipe especializada
            para obras industriais, residenciais e de infraestrutura
            em São Paulo.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3" data-anim="up">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#F4C430] text-[#0E2347] font-black uppercase text-xs tracking-[2px] px-7 py-3.5 rounded-full transition-all duration-200 hover:bg-[#d4a820] hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(244,196,48,0.35)]"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Solicitar Orçamento
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-white/75 font-semibold uppercase text-xs tracking-[2px] px-7 py-3.5 rounded-full border border-white/20 transition-all duration-200 hover:border-white/50 hover:text-white hover:bg-white/5"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Ver Serviços
            </a>
          </div>
        </div>
      </div>

      {/* Stats bar — anchored to bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div
            className="grid grid-cols-2 lg:grid-cols-4"
            style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
          >
            {stats.map((s, i) => (
              <div
                key={i}
                className="px-6 py-5 lg:py-7"
                style={{
                  background: 'rgba(14,35,71,0.70)',
                  backdropFilter: 'blur(16px)',
                  borderRight: i < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                  borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                }}
                data-anim="up"
              >
                <div
                  className="text-[#F4C430] mb-1"
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: 900,
                    fontSize: 'clamp(22px, 2.5vw, 32px)',
                    letterSpacing: '-0.5px',
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </div>
                <div
                  className="text-white/40 uppercase tracking-widest"
                  style={{ fontFamily: 'Outfit, sans-serif', fontSize: '10px', fontWeight: 600 }}
                >
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
