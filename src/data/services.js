// The four services Jenga Studios offers. Content lives here, not in the JSX, so the cards
// can change without touching a component.
//  - `benefit` says what the service does for the client.
//  - `icon` names a drawing in components/ServiceIcon.jsx.
//  - `tone` is the brick colour: terracotta, sand, green or charcoal (see styles/services.css).
export const servicesIntro = {
  eyebrow: 'What we do',
  heading: 'Four building blocks for a business that gets chosen',
}

export const services = [
  {
    id: 'brand-identity',
    title: 'Logo and brand identity',
    benefit: 'People recognise you.',
    icon: 'badge',
    tone: 'terracotta',
  },
  {
    id: 'guidelines-packaging',
    title: 'Brand guidelines and packaging',
    benefit: 'You look consistent everywhere.',
    icon: 'box',
    tone: 'sand',
  },
  {
    id: 'websites',
    title: 'Websites and landing pages',
    benefit: 'People can find you.',
    icon: 'browser',
    tone: 'green',
  },
  {
    id: 'online-shops',
    title: 'Online shops',
    benefit: 'You can sell around the clock.',
    icon: 'basket',
    tone: 'charcoal',
  },
]
