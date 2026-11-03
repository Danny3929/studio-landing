import { useEffect, useRef } from 'react'
import { contactIntro, fieldLabels, limits } from '../data/contact.js'
import { services } from '../data/services.js'
import { useContactForm } from '../hooks/useContactForm.js'
import Field from './Field.jsx'

// The contact form, or the thank-you message after a (demo) send.
export default function ContactForm() {
  const form = useContactForm()
  const { values, visibleErrors, submitted, sent } = form
  const successRef = useRef(null)
  const problems = Object.keys(visibleErrors).length

  // After sending, move focus to the thank-you message so keyboard and screen reader users land on it.
  // When the visitor chooses to write another message, the button they pressed disappears, so focus goes to the Name field.
  const wasSent = useRef(false)
  useEffect(() => {
    if (sent) successRef.current?.focus()
    else if (wasSent.current) document.getElementById('contact-name')?.focus()
    wasSent.current = sent
  }, [sent])

  if (sent) {
    return (
      <div className="contact-success" ref={successRef} tabIndex={-1} role="status">
        <h3 className="contact-success__title">{contactIntro.success.heading}</h3>
        <p>{contactIntro.success.text}</p>
        <button type="button" className="btn btn--ghost" onClick={form.reset}>
          {contactIntro.success.again}
        </button>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={form.submit} noValidate>
      <p className="contact-form__note">{contactIntro.required}</p>

      {submitted && problems > 0 ? (
        <p className="contact-form__summary" role="alert">
          Please fix {problems} {problems === 1 ? 'field' : 'fields'} below.
        </p>
      ) : null}

      <Field
        id="contact-name"
        name="name"
        label={fieldLabels.name}
        required
        autoComplete="name"
        value={values.name}
        onChange={form.change}
        onBlur={form.blur}
        error={visibleErrors.name}
      />
      <Field
        id="contact-email"
        name="email"
        type="email"
        label={fieldLabels.email}
        required
        autoComplete="email"
        value={values.email}
        onChange={form.change}
        onBlur={form.blur}
        error={visibleErrors.email}
      />
      <Field
        id="contact-service"
        name="service"
        as="select"
        label={fieldLabels.service}
        value={values.service}
        onChange={form.change}
        onBlur={form.blur}
      >
        <option value="">{contactIntro.notSure}</option>
        {services.map((service) => (
          <option key={service.id} value={service.id}>
            {service.title}
          </option>
        ))}
      </Field>
      <Field
        id="contact-message"
        name="message"
        as="textarea"
        rows={5}
        label={fieldLabels.message}
        required
        hint={`${values.message.length} of ${limits.messageMax} characters (at least ${limits.messageMin})`}
        value={values.message}
        onChange={form.change}
        onBlur={form.blur}
        error={visibleErrors.message}
      />

      <button type="submit" className="btn btn--primary contact-form__submit">
        {contactIntro.submit}
      </button>
    </form>
  )
}
