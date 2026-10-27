// Content and rules for the contact section. Wording lives here so it can change without touching a component.
//  - `limits` are the rules the form checks (also used for the counter and the `maxLength` attribute).
//  - `messages` are the error texts. Each one says what to do, not just "invalid".
export const contactIntro = {
  eyebrow: 'Contact',
  heading: 'Tell us what you want to build',
  note: 'Share a few lines about your business. We reply within two working days.',
  required: 'Fields marked (required) must be filled in.',
  notSure: 'Not sure yet',
  submit: 'Send message',
  success: {
    heading: 'Thank you, your message is ready to go',
    text: 'This demo site does not send email. In a real build the form would post to a service such as Formspree.',
    again: 'Write another message',
  },
}

export const limits = {
  nameMax: 80,
  messageMin: 20,
  messageMax: 1000,
}

export const messages = {
  nameEmpty: 'Enter your name so we know who to reply to.',
  nameLong: `Use ${limits.nameMax} characters or fewer for your name.`,
  emailEmpty: 'Enter your email so we can reply.',
  emailBad: 'Enter your email like name@example.com.',
  messageEmpty: 'Tell us a little about your project.',
  messageShort: (have) => `Write at least ${limits.messageMin} characters (you have ${have}).`,
  messageLong: `Keep your message to ${limits.messageMax} characters or fewer.`,
}

export const fieldLabels = {
  name: 'Your name',
  email: 'Email address',
  service: 'Service you are interested in',
  message: 'Your message',
}
