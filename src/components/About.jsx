const highlights = [
  {
    icon: '🚜',
    title: 'Equipamentos Modernos',
    desc: 'Frota própria com escavadeiras, motoniveladoras e caminhões de última geração.',
  },
  {
    icon: '👷',
    title: 'Equipe Especializada',
    desc: 'Profissionais certificados com décadas de experiência em obras de grande porte.',
  },
]

export default function About() {
  return (
    <section id="sobre" className="bg-white py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image side */}
          <div className="relative" data-anim="left">
            {/* Gold accent block */}
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-[#F4C430] rounded-2xl z-0" />
            {/* Navy accent block */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#0E2347] rounded-2xl z-0" />
            {/* Image */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
              <img
                src="/img-02.jpg"
                alt="Equipe Bicudo em obra"
                className="w-full h-full object-cover"
              />
              {/* Year badge */}
              <div className="absolute bottom-6 left-6 bg-[#0E2347] text-white rounded-xl px-5 py-4">
                <div
                  className="text-[#F4C430]"
                  style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '2rem', letterSpacing: '-1px', lineHeight: 1 }}
                >
                  +10
                </div>
                <div className="text-xs text-white/60 uppercase tracking-widest mt-1" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Anos de experiência
                </div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div data-anim="right">
            {/* Section tag */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#F4C430]" />
              <span
                className="text-[#F4C430] text-xs font-bold tracking-[4px] uppercase"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                Quem Somos
              </span>
            </div>

            <h2
              className="text-[#0E2347] mb-6"
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(32px, 4vw, 52px)',
                letterSpacing: '-1.5px',
                lineHeight: 1.0,
              }}
            >
              BICUDO<br />
              <span className="text-[#F4C430]">TERRA</span>PLANAGEM
            </h2>

            <p className="text-gray-500 text-base lg:text-lg leading-relaxed mb-5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
              A Bicudo Terraplanagem é uma empresa com mais de 10 anos de atuação no mercado paulista,
              especializada em terraplanagem, escavação, compactação de solo e movimentação de terra
              para obras industriais, residenciais e de infraestrutura.
            </p>
            <p className="text-gray-500 text-base lg:text-lg leading-relaxed mb-10" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
              Com frota própria de equipamentos modernos e equipe altamente capacitada, entregamos
              mais de 300 obras com qualidade, segurança e pontualidade. Nossa estrutura sólida
              garante a execução de projetos de qualquer porte na Grande São Paulo.
            </p>

            {/* Highlight cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#F4C430] hover:shadow-md transition-all duration-300 group"
                >
                  <div className="text-3xl mb-3">{h.icon}</div>
                  <div
                    className="text-[#0E2347] font-bold mb-2 text-sm uppercase tracking-wide"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {h.title}
                  </div>
                  <div className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {h.desc}
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
