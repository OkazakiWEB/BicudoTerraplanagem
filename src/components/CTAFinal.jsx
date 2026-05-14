const WA = 'https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.'

export default function CTAFinal() {
  return (
    <section id="contato" className="bg-[#F4C430] py-28 lg:py-36 relative overflow-hidden">
      {/* Decorative elements */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: '#0E2347', transform: 'translate(30%, -30%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 pointer-events-none"
        style={{ background: '#0E2347', transform: 'translate(-30%, 30%)' }}
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">

        <div className="flex items-center justify-center gap-3 mb-8" data-anim="up">
          <div className="w-8 h-px bg-[#0E2347]/30" />
          <span
            className="text-[#0E2347]/60 text-xs font-bold tracking-[4px] uppercase"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Vamos trabalhar juntos
          </span>
          <div className="w-8 h-px bg-[#0E2347]/30" />
        </div>

        <h2
          className="text-[#0E2347] mb-6"
          style={{
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(36px, 6vw, 76px)',
            letterSpacing: '-2px',
            lineHeight: 1.0,
          }}
          data-anim="up"
        >
          PRONTO PARA<br />
          INICIAR SUA OBRA?
        </h2>

        <p
          className="text-[#0E2347]/70 text-lg lg:text-xl leading-relaxed mb-12 max-w-xl mx-auto"
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
          data-anim="up"
        >
          Fale com nossa equipe agora e receba um orçamento personalizado em até 48 horas.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4" data-anim="up">
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#0E2347] text-white font-black uppercase text-sm tracking-widest px-10 py-5 rounded-full transition-all duration-200 hover:bg-[#0a1b38] hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(14,35,71,0.35)]"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.118 1.528 5.845L.057 23.476a.5.5 0 0 0 .608.61l5.82-1.526A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.871 9.871 0 0 1-5.031-1.376l-.361-.214-3.733.979.995-3.638-.235-.374A9.877 9.877 0 0 1 2.118 12C2.118 6.533 6.533 2.118 12 2.118S21.882 6.533 21.882 12 17.467 21.882 12 21.882z"/>
            </svg>
            Falar pelo WhatsApp
          </a>

          <div className="text-[#0E2347]/50 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
            ou ligue para{' '}
            <a href="tel:+5511999999999" className="font-bold text-[#0E2347] hover:underline">
              (11) 99999-9999
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
