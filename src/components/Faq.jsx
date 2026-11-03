import { useState } from 'react'
import { faqIntro, faqs } from '../data/faq.js'
import FaqItem from './FaqItem.jsx'
import '../styles/faq.css'

// The FAQ section. It remembers which questions are open (a list of ids), so several can be open at once.
export default function Faq() {
  const [openIds, setOpenIds] = useState([])

  function toggle(id) {
    setOpenIds((current) => (current.includes(id) ? current.filter((x) => x !== id) : [...current, id]))
  }

  return (
    <section data-reveal id="faq" className="faq" aria-labelledby="faq-title">
      <div className="container faq__grid">
        <div className="faq__head">
          <p className="faq__eyebrow">{faqIntro.eyebrow}</p>
          <h2 id="faq-title" className="faq__title">
            {faqIntro.heading}
          </h2>
        </div>
        <ul className="faq__list">
          {faqs.map((item) => (
            <FaqItem key={item.id} item={item} open={openIds.includes(item.id)} onToggle={toggle} />
          ))}
        </ul>
      </div>
    </section>
  )
}
