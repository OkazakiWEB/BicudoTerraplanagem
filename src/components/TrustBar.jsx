const badges = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#F4C430]">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
      </svg>
    ),
    label: 'Empresa Regularizada',
    sub: 'CNPJ Ativo',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#F4C430]">
        <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
      </svg>
    ),
    label: 'Emite ART',
    sub: 'Anotação de Responsabilidade Técnica',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#F4C430]">
        <path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
      </svg>
    ),
    label: 'Emite Nota Fiscal',
    sub: 'Para pessoa física e jurídica',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#F4C430]">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    ),
    label: '+300 Obras Entregues',
    sub: 'Desde 2005 em São Paulo',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#F4C430]">
        <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
      </svg>
    ),
    label: 'Frota Própria',
    sub: 'Equipamentos modernos e revisados',
  },
]

export default function TrustBar() {
  return (
    <div className="bg-[#0a1b38] border-t border-b border-white/5 py-5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
          {badges.map((b, i) => (
            <div key={i} className="flex items-center gap-2.5">
              {b.icon}
              <div>
                <div
                  className="text-white text-xs font-bold uppercase tracking-wide leading-tight"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  {b.label}
                </div>
                <div className="text-white/30 text-[10px]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {b.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
