import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Work from './components/Work.jsx'
import Pricing from './components/Pricing.jsx'
import Contact from './components/Contact.jsx'

// The page is built one section at a time. Sections still to come: trust strip,
// testimonials, FAQ and footer.
export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Services />
        <Work />
        <Pricing />
        <Contact />
      </main>
    </>
  )
}
