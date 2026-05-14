import { useState, useEffect } from 'react'

const WA = 'https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.'

const LogoIcon = () => (
  <svg width="44" height="32" viewBox="0 0 56 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 28 L20 10 L30 14" stroke="#F4C430" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M27 12 L34 10 L36 17 L29 19 Z" stroke="#F4C430" strokeWidth="2.5" strokeLinejoin="round"/>
    <path d="M6 30 C6 26 10 23 14 25 C18 27 20 32 24 32 C28 32 32 28 32 24 C32 20 28 17 24 19 C20 21 18 26 14 27"
      stroke="#F4C430" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <ellipse cx="40" cy="32" rx="8" ry="4" stroke="#F4C430" strokeWidth="2.5" fill="none"/>
    <line x1="32" y1="32" x2="48" y2="32" stroke="#F4C430" strokeWidth="2" opacity="0.5"/>
  </svg>
)

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { href: '#sobre', label: 'Quem Somos' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#diferenciais', label: 'Diferenciais' },
    { href: '#contato', label: 'Contato' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white shadow-[0_2px_24px_rgba(0,0,0,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="bg-[#0E2347] rounded-lg p-2 flex items-center justify-center">
            <LogoIcon />
          </div>
          <div className="flex flex-col leading-tight">
            <span
              className={`font-['Outfit'] font-900 text-sm tracking-tight transition-colors duration-300 ${
                scrolled ? 'text-[#0E2347]' : 'text-white'
              }`}
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900 }}
            >
              <span className="text-[#F4C430]">BICUDO</span> TERRAPLANAGEM
            </span>
            <span className={`text-[10px] tracking-widest uppercase transition-colors ${scrolled ? 'text-gray-400' : 'text-white/50'}`}>
              Serviços de Terraplanagem
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-semibold tracking-wide uppercase transition-colors duration-200 hover:text-[#F4C430] ${
                scrolled ? 'text-[#0E2347]' : 'text-white/80'
              }`}
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-2 bg-[#F4C430] text-[#0E2347] text-sm font-black uppercase tracking-wider px-6 py-3 rounded-full transition-all duration-200 hover:bg-[#d4a820] hover:-translate-y-0.5 hover:shadow-lg"
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          <span>📱</span> Solicitar Orçamento
        </a>

        {/* Mobile menu button */}
        <button
          className={`lg:hidden p-2 transition-colors ${scrolled ? 'text-[#0E2347]' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen
              ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0E2347] px-6 py-6 flex flex-col gap-4">
          {navLinks.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-white font-semibold uppercase text-sm tracking-wide py-2 border-b border-white/10 hover:text-[#F4C430] transition-colors"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 bg-[#F4C430] text-[#0E2347] font-black uppercase text-sm tracking-wide px-6 py-3 rounded-full text-center"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Solicitar Orçamento
          </a>
        </div>
      )}
    </header>
  )
}
