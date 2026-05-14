import { useState } from 'react'

const faqs = [
  {
    q: 'Quanto custa uma terraplanagem em São Paulo?',
    a: 'O custo varia conforme o volume de terra, tipo de solo, complexidade do terreno e acessibilidade para os equipamentos. Realizamos visita técnica gratuita e enviamos orçamento detalhado em até 48 horas úteis.',
  },
  {
    q: 'Quais regiões de São Paulo vocês atendem?',
    a: 'Atendemos toda a Grande São Paulo: Zona Norte, Zona Leste, Zona Sul, Zona Oeste, Guarulhos, ABC Paulista (Santo André, São Bernardo, São Caetano, Diadema), Osasco, Mogi das Cruzes e demais municípios da região metropolitana.',
  },
  {
    q: 'A empresa emite nota fiscal e ART?',
    a: 'Sim. Somos uma empresa regularizada com CNPJ ativo, emitimos nota fiscal para todos os serviços e ART (Anotação de Responsabilidade Técnica) por obra, garantindo total segurança jurídica ao contratante.',
  },
  {
    q: 'Qual é o prazo para receber um orçamento?',
    a: 'Realizamos visita técnica em até 24 horas após o contato e enviamos o orçamento detalhado em até 48 horas úteis, sem compromisso.',
  },
  {
    q: 'Vocês fazem terraplanagem para terrenos residenciais pequenos?',
    a: 'Sim, atendemos projetos de todos os portes: desde pequenos terrenos residenciais até grandes obras industriais e de infraestrutura. Nossa frota é dimensionada para cada tipo de projeto.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="bg-white py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">

        <div className="text-center mb-14" data-anim="up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#F4C430]" />
            <span
              className="text-[#F4C430] text-xs font-bold tracking-[4px] uppercase"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Dúvidas Frequentes
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
            PERGUNTAS FREQUENTES
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-100 rounded-2xl overflow-hidden"
              data-anim="up"
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span
                  className="text-[#0E2347] font-bold text-sm leading-snug"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  {faq.q}
                </span>
                <svg
                  viewBox="0 0 24 24"
                  className={`w-5 h-5 flex-shrink-0 fill-[#F4C430] transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
                >
                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p
                    className="text-gray-500 text-sm leading-relaxed"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
                  >
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
