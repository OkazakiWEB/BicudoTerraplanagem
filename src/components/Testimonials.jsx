const testimonials = [
  {
    name: 'Jeniffer Domingues',
    role: 'Google · 1 ano atrás',
    text: 'Equipe super profissional, trabalho bem feito e dentro do prazo! Dá pra confiar de olhos fechados. Recomendo demais!',
    stars: 5,
  },
  {
    name: 'Janaina Santos Silva',
    role: 'Google · 10 meses atrás',
    text: 'Estou muito feliz com trabalho da empresa Bicudo Terraplanagem, atualidade, dedicação, excelente atendimento e o melhor preço justo.',
    stars: 5,
  },
  {
    name: 'Maysa Cristina',
    role: 'Google · 1 ano atrás',
    text: 'Super recomendo! A empresa tem máquinas novas, caminhões em ótimo estado e oferece um serviço de terraplanagem rápido e com muita competência. Dá pra ver o cuidado e o profissionalismo em cada etapa do trabalho. Excelente atendimento e comprometimento com prazos. Parabéns pelo serviço de qualidade!',
    stars: 5,
  },
  {
    name: 'Milleny Vale',
    role: 'Google · 11 meses atrás',
    text: 'Serviço impecável da Bicudo Terraplanagem! Contratei a Bicudo Terraplanagem e não poderia estar mais satisfeita! Desde o atendimento inicial até a finalização do serviço, tudo foi feito com muita dedicação e profissionalismo.',
    stars: 5,
  },
  {
    name: 'Ulisses Franco',
    role: 'Google · Local Guide · 10 meses atrás',
    text: 'Excelente profissional, serviço e máquinas de primeira. Super rápido no serviço, e foi o melhor preço que consegui, fiquei impressionado.',
    stars: 5,
  },
]

const Stars = () => (
  <div className="flex gap-0.5 mb-4">
    {[1,2,3,4,5].map(i => (
      <svg key={i} viewBox="0 0 20 20" className="w-4 h-4 fill-[#F4C430]">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
    ))}
  </div>
)

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
)

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="text-center mb-16" data-anim="up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#F4C430]" />
            <span
              className="text-[#F4C430] text-xs font-bold tracking-[4px] uppercase"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Avaliações
            </span>
            <div className="w-8 h-px bg-[#F4C430]" />
          </div>
          <h2
            className="text-[#0E2347] mb-4"
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              letterSpacing: '-1px',
              lineHeight: 1.05,
            }}
          >
            O QUE DIZEM NOSSOS<br />
            <span className="text-[#F4C430]">CLIENTES</span>
          </h2>
          {/* Google badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-gray-100 rounded-full px-4 py-2 shadow-sm">
            <GoogleIcon />
            <span className="text-gray-500 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
              Avaliações verificadas no
            </span>
            <span className="text-gray-700 text-xs font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
              Google
            </span>
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => (
                <svg key={i} viewBox="0 0 20 20" className="w-3 h-3 fill-[#F4C430]">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            <span className="text-gray-500 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>5.0</span>
          </div>
        </div>

        {/* Horizontal scroll */}
        <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 lg:-mx-12 lg:px-12">
          {testimonials.map((t, i) => (
            <div key={i} className="snap-start flex-shrink-0 w-[80vw] sm:w-[360px]">
              <Card t={t} i={i} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

function Card({ t, i }) {
  return (
    <div
      className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#F4C430]/30 transition-all duration-300 flex flex-col"
      data-anim="up"
      style={{ transitionDelay: `${i * 0.08}s` }}
    >
      <div className="flex items-center justify-between mb-1">
        <Stars />
        <GoogleIcon />
      </div>
      <p
        className="text-gray-600 text-sm leading-relaxed mb-6 flex-1"
        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
      >
        "{t.text}"
      </p>
      <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
        <div
          className="w-9 h-9 rounded-full bg-[#0E2347] flex items-center justify-center text-[#F4C430] font-black text-sm flex-shrink-0"
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          {t.name[0]}
        </div>
        <div>
          <div
            className="text-[#0E2347] text-sm font-bold leading-tight"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            {t.name}
          </div>
          <div className="text-gray-400 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
            {t.role}
          </div>
        </div>
      </div>
    </div>
  )
}
