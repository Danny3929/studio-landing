import { services, servicesIntro } from '../data/services.js'
import ServiceIcon from './ServiceIcon.jsx'
import '../styles/services.css'

// The services section: a heading and one coloured "brick" per service in src/data/services.js.
// Adding a service means adding an entry to that file; this component does not change.
export default function Services() {
  return (
    <section id="services" className="services" aria-labelledby="services-title">
      <div className="container">
        <div className="services__head">
          <p className="services__eyebrow">{servicesIntro.eyebrow}</p>
          <h2 id="services-title" className="services__title">
            {servicesIntro.heading}
          </h2>
        </div>

        <ul className="services__grid">
          {services.map((service) => (
            <li key={service.id} className={`service service--${service.tone}`}>
              <ServiceIcon name={service.icon} />
              <h3 className="service__title">{service.title}</h3>
              {service.benefit && <p className="service__benefit">{service.benefit}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
