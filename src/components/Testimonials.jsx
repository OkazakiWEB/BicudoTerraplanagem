import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

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
  <div className="flex gap-0.5">
    {[1,2,3,4,5].map(i => (
      <svg key={i} viewBox="0 0 20 20" className="w-[14px] h-[14px] fill-[#F4C430]">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
    ))}
  </div>
)

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] flex-shrink-0">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
)

const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current strokeWidth-2">
    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ChevronRight = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current">
    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 1 },
    },
  })

  const [prevDisabled, setPrevDisabled] = useState(false)
  const [nextDisabled, setNextDisabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevDisabled(!emblaApi.canScrollPrev())
    setNextDisabled(!emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <section className="bg-gray-50 py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12" data-anim="up">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#F4C430]" />
              <span
                className="text-[#F4C430] text-xs font-bold tracking-[4px] uppercase"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                Avaliações
              </span>
            </div>
            <h2
              className="text-[#0E2347]"
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
          </div>

          {/* Right side: badge + arrows */}
          <div className="flex flex-col items-start md:items-end gap-5">
            {/* Google badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-gray-100 rounded-full px-4 py-2 shadow-sm">
              <GoogleIcon />
              <span className="text-gray-500 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                Avaliações verificadas no
              </span>
              <span className="text-gray-700 text-xs font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                Google
              </span>
              <Stars />
              <span className="text-gray-600 text-xs font-bold" style={{ fontFamily: 'Outfit, sans-serif' }}>5.0</span>
            </div>

            {/* Nav arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={scrollPrev}
                aria-label="Anterior"
                className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-[#0E2347] hover:border-[#F4C430] hover:text-[#F4C430] transition-all duration-200 hover:shadow-md"
              >
                <ChevronLeft />
              </button>
              {/* Dots */}
              <div className="flex items-center gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => emblaApi?.scrollTo(i)}
                    aria-label={`Ir para avaliação ${i + 1}`}
                    className={`rounded-full transition-all duration-300 ${
                      i === selectedIndex
                        ? 'w-5 h-1.5 bg-[#F4C430]'
                        : 'w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={scrollNext}
                aria-label="Próximo"
                className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-[#0E2347] hover:border-[#F4C430] hover:text-[#F4C430] transition-all duration-200 hover:shadow-md"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel wrapper with fade edges */}
        <div className="relative">
          {/* Fade left */}
          <div className="absolute left-0 top-0 bottom-0 w-12 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #F5F5F3, transparent)' }} />
          {/* Fade right */}
          <div className="absolute right-0 top-0 bottom-0 w-12 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #F5F5F3, transparent)' }} />

          {/* Embla viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-5 py-4">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[85vw] sm:w-[380px] lg:w-[340px] xl:w-[360px]"
                >
                  <div className="h-full bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#F4C430]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col">

                    {/* Top row: stars + google */}
                    <div className="flex items-center justify-between mb-5">
                      <Stars />
                      <GoogleIcon />
                    </div>

                    {/* Quote */}
                    <div
                      className="text-[#F4C430] mb-2 leading-none select-none"
                      style={{ fontFamily: 'Georgia, serif', fontSize: '3rem', lineHeight: 1 }}
                      aria-hidden="true"
                    >
                      "
                    </div>

                    {/* Text */}
                    <p
                      className="text-gray-600 text-sm leading-[1.75] flex-1 mb-6"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
                    >
                      {t.text}
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                      <div
                        className="w-10 h-10 rounded-full bg-[#0E2347] flex items-center justify-center text-[#F4C430] font-black text-sm flex-shrink-0"
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
                        <div className="text-gray-400 text-xs mt-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {t.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
