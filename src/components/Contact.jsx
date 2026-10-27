import { contactIntro } from '../data/contact.js'
import ContactForm from './ContactForm.jsx'
import '../styles/contact.css'

// The contact section: heading, a short note and the form.
export default function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="container contact__grid">
        <div className="contact__head">
          <p className="contact__eyebrow">{contactIntro.eyebrow}</p>
          <h2 id="contact-title" className="contact__title">
            {contactIntro.heading}
          </h2>
          <p className="contact__note">{contactIntro.note}</p>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}
