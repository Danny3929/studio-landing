import { useState } from 'react'
import { limits, messages } from '../data/contact.js'

const emptyValues = { name: '', email: '', service: '', message: '' }

// Checks the values and returns an object of error texts. An empty object means the form is valid.
// Exported on its own so it can be tested without a browser.
export function validate(values) {
  const errors = {}
  const name = values.name.trim()
  const email = values.email.trim()
  const message = values.message.trim()

  if (!name) errors.name = messages.nameEmpty
  else if (name.length > limits.nameMax) errors.name = messages.nameLong

  if (!email) errors.email = messages.emailEmpty
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors.email = messages.emailBad

  if (!message) errors.message = messages.messageEmpty
  else if (message.length < limits.messageMin) errors.message = messages.messageShort(message.length)
  else if (message.length > limits.messageMax) errors.message = messages.messageLong

  return errors
}

// The form's behaviour: values, which fields were left ("touched"), errors, and submit.
// An error only shows for a field after the visitor leaves it, or after they press Send.
export function useContactForm() {
  const [values, setValues] = useState(emptyValues)
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [sent, setSent] = useState(false)

  const errors = validate(values)
  const visibleErrors = {}
  for (const field of Object.keys(errors)) {
    if (submitted || touched[field]) visibleErrors[field] = errors[field]
  }

  function change(event) {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  function blur(event) {
    const { name } = event.target
    setTouched((current) => ({ ...current, [name]: true }))
  }

  function submit(event) {
    event.preventDefault()
    if (sent) return // a second click cannot send twice
    setSubmitted(true)
    const found = Object.keys(errors)
    if (found.length > 0) {
      // Move focus to the first field with a problem, in page order.
      const first = ['name', 'email', 'service', 'message'].find((field) => errors[field])
      document.getElementById(`contact-${first}`)?.focus()
      return
    }
    // Demo only: nothing is sent. A real endpoint would be called here, and `setSent(true)` would wait for its answer.
    setSent(true)
    setValues(emptyValues)
    setTouched({})
    setSubmitted(false)
  }

  function reset() {
    setSent(false)
  }

  return { values, errors, visibleErrors, submitted, sent, change, blur, submit, reset }
}
