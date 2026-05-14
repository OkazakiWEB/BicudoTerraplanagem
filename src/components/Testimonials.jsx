const testimonials = [
  {
    name: 'Ricardo Almeida',
    role: 'Engenheiro Civil — Construtora Almeida',
    text: 'Contratamos a Bicudo para terraplanagem de um condomínio de 40 mil m². Prazo cumprido, solo compactado com laudo técnico e zero intercorrências. Recomendo sem hesitar.',
    stars: 5,
  },
  {
    name: 'Fernanda Moura',
    role: 'Proprietária — Empreendimento Residencial SP',
    text: 'Recebi o orçamento em menos de 24h. A equipe é séria, profissional e o preço foi muito justo. O terreno ficou perfeitamente nivelado. Já indiquei para dois vizinhos.',
    stars: 5,
  },
  {
    name: 'Carlos Eduardo',
    role: 'Sócio — Galpão Industrial Guarulhos',
    text: 'Precisávamos de escavação profunda para fundação industrial. A Bicudo trouxe os equipamentos certos e entregou dentro do prazo. Nota fiscal, ART, tudo certinho.',
    stars: 5,
  },
]

const Stars = ({ count }) => (
  <div className="flex gap-0.5 mb-4">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} viewBox="0 0 20 20" className="w-4 h-4 fill-[#F4C430]">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
    ))}
  </div>
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
              Depoimentos
            </span>
            <div className="w-8 h-px bg-[#F4C430]" />
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

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#F4C430]/30 transition-all duration-300"
              data-anim="up"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <Stars count={t.stars} />
              <p
                className="text-gray-600 text-sm leading-relaxed mb-6"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
              >
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 pt-6 border-t border-gray-100">
                <div
                  className="w-10 h-10 rounded-full bg-[#0E2347] flex items-center justify-center text-[#F4C430] font-black text-sm flex-shrink-0"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <div
                    className="text-[#0E2347] text-sm font-bold"
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
          ))}
        </div>
      </div>
    </section>
  )
}
