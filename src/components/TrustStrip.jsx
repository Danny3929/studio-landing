import { trust } from '../data/trust.js'
import '../styles/trust.css'

// A thin band of short promises under the Hero. It has a hidden heading so screen reader users can find it.
export default function TrustStrip() {
  return (
    <section className="trust" aria-labelledby="trust-title">
      <h2 id="trust-title" className="visually-hidden">
        {trust.heading}
      </h2>
      <div className="container">
        <ul className="trust__list">
          {trust.items.map((item) => (
            <li key={item.id} className="trust__item">
              <span className="trust__brick" aria-hidden="true" />
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
