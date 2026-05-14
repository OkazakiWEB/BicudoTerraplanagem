import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Differentials from './components/Differentials.jsx'
import CTAFinal from './components/CTAFinal.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-anim]')
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          observer.unobserve(e.target)
        }
      }),
      { threshold: 0.12 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Differentials />
        <CTAFinal />
      </main>
      <Footer />
    </>
  )
}
