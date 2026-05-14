import { useState, useEffect } from 'react'
import { WA } from '../constants.js'

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
          <div className="bg-[#0E2347] rounded-lg p-1.5 flex items-center justify-center">
            <img src="/logo-mark.svg" alt="Bicudo Terraplanagem" width="46" height="28" className="block" />
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
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.118 1.528 5.845L.057 23.476a.5.5 0 0 0 .608.61l5.82-1.526A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.871 9.871 0 0 1-5.031-1.376l-.361-.214-3.733.979.995-3.638-.235-.374A9.877 9.877 0 0 1 2.118 12C2.118 6.533 6.533 2.118 12 2.118S21.882 6.533 21.882 12 17.467 21.882 12 21.882z"/>
          </svg>
          Solicitar Orçamento
        </a>

        {/* Mobile menu button */}
        <button
          className={`lg:hidden p-2 transition-colors ${scrolled ? 'text-[#0E2347]' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
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
