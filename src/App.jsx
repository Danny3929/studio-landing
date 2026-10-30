import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Work from './components/Work.jsx'
import Pricing from './components/Pricing.jsx'
import Faq from './components/Faq.jsx'
import Contact from './components/Contact.jsx'
import TrustStrip from './components/TrustStrip.jsx'
import Footer from './components/Footer.jsx'
import Testimonials from './components/Testimonials.jsx'
import useScrollReveal from './hooks/useScrollReveal.js'
import './styles/reveal.css'

// Sections below the first screen fade in once as they scroll into view.
export default function App() {
  useScrollReveal()
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main" tabIndex={-1}>
        <Hero />
        <TrustStrip />
        <Services />
        <Work />
        <Testimonials />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
