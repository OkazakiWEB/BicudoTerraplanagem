import { WA, PHONE_DISPLAY, PHONE_RAW, EMAIL, INSTAGRAM } from '../constants.js'


const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
)

const MailIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
)

const InstaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
)

const PinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
)

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0E2347] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid md:grid-cols-3 gap-12 pb-12 border-b border-white/8">

          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src="/logo-mark.svg" alt="Bicudo Terraplanagem" width="46" height="28" className="block" />
              <div>
                <div
                  className="text-white text-sm"
                  style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900 }}
                >
                  <span className="text-[#F4C430]">BICUDO</span> TERRAPLANAGEM
                </div>
              </div>
            </div>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
              Terraplanagem, escavação, compactação e movimentação de terra em São Paulo desde 2005.
            </p>
          </div>

          <div>
            <div
              className="text-white/25 text-xs uppercase tracking-widest mb-6"
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
            >
              Navegação
            </div>
            <div className="space-y-3">
              {[
                { href: '#sobre', label: 'Quem Somos' },
                { href: '#servicos', label: 'Serviços' },
                { href: '#diferenciais', label: 'Diferenciais' },
                { href: '#faq', label: 'Dúvidas Frequentes' },
                { href: '#contato', label: 'Contato' },
              ].map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  className="block text-white/45 text-sm hover:text-[#F4C430] transition-colors duration-200"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div
              className="text-white/25 text-xs uppercase tracking-widest mb-6"
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
            >
              Contato
            </div>
            <div className="space-y-4">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/45 text-sm hover:text-[#F4C430] transition-colors duration-200 group"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/45 group-hover:bg-[#F4C430]/10 group-hover:text-[#F4C430] transition-colors">
                  <PhoneIcon />
                </span>
                {PHONE_DISPLAY}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 text-white/45 text-sm hover:text-[#F4C430] transition-colors duration-200 group"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/45 group-hover:bg-[#F4C430]/10 group-hover:text-[#F4C430] transition-colors">
                  <MailIcon />
                </span>
                {EMAIL}
              </a>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/45 text-sm hover:text-[#F4C430] transition-colors duration-200 group"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/45 group-hover:bg-[#F4C430]/10 group-hover:text-[#F4C430] transition-colors">
                  <InstaIcon />
                </span>
                @bicudoterraplanagem
              </a>
              <div
                className="flex items-center gap-3 text-white/45 text-sm"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/45">
                  <PinIcon />
                </span>
                São Paulo — SP
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
            © {year} Bicudo Terraplanagem. Todos os direitos reservados.
          </p>
          <p className="text-white/15 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
            CNPJ: 00.000.000/0001-00
          </p>
        </div>
      </div>
    </footer>
  )
}
