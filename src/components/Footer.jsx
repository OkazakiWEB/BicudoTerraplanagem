const WA = 'https://wa.me/5511999999999?text=Olá!'

const LogoIcon = () => (
  <svg width="40" height="28" viewBox="0 0 56 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 28 L20 10 L30 14" stroke="#F4C430" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M27 12 L34 10 L36 17 L29 19 Z" stroke="#F4C430" strokeWidth="2.5" strokeLinejoin="round"/>
    <path d="M6 30 C6 26 10 23 14 25 C18 27 20 32 24 32 C28 32 32 28 32 24 C32 20 28 17 24 19 C20 21 18 26 14 27"
      stroke="#F4C430" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <ellipse cx="40" cy="32" rx="8" ry="4" stroke="#F4C430" strokeWidth="2.5" fill="none"/>
    <line x1="32" y1="32" x2="48" y2="32" stroke="#F4C430" strokeWidth="2" opacity="0.5"/>
  </svg>
)

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0E2347] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Top */}
        <div className="grid md:grid-cols-3 gap-12 pb-12 border-b border-white/8">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <LogoIcon />
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

          {/* Links */}
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

          {/* Contact */}
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
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-base group-hover:bg-[#F4C430]/10 transition-colors">💬</span>
                (11) 99999-9999
              </a>
              <a
                href="mailto:contato@bicudoterraplanagem.com.br"
                className="flex items-center gap-3 text-white/45 text-sm hover:text-[#F4C430] transition-colors duration-200 group"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-base group-hover:bg-[#F4C430]/10 transition-colors">✉️</span>
                contato@bicudo<br className="hidden" />terraplanagem.com.br
              </a>
              <a
                href="https://instagram.com/bicudoterraplanagem"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/45 text-sm hover:text-[#F4C430] transition-colors duration-200 group"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-base group-hover:bg-[#F4C430]/10 transition-colors">📸</span>
                @bicudoterraplanagem
              </a>
              <div
                className="flex items-center gap-3 text-white/45 text-sm"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-base">📍</span>
                São Paulo — SP
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
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
