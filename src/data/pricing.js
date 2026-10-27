// Content for the pricing section. All prices are invented and in Kenyan shillings (KES).
//  - `projectPrice` is a one-off price for the build. It never changes with the billing toggle.
//  - `carePerMonth` is the monthly price of the care plan (hosting and updates).
//  - The annual care price is worked out in code: carePerMonth x (12 - monthsFree). One source of truth.
//  - `featured` marks the highlighted tier (shown with a text badge, not colour alone).
export const pricingIntro = {
  eyebrow: 'Pricing',
  heading: 'Pick the size that fits your business',
  note: 'Project prices are one-off. The care plan (hosting and updates) is billed monthly or yearly.',
}

export const billingOptions = [
  { id: 'monthly', label: 'Monthly' },
  { id: 'annual', label: 'Annual' },
]

export const monthsFree = 2

export const tiers = [
  {
    id: 'starter',
    name: 'Starter',
    blurb: 'A clear brand and a one-page site.',
    projectPrice: 45000,
    carePerMonth: 2500,
    features: ['Logo and colour palette', 'One-page website', 'Contact form', 'Mobile friendly'],
  },
  {
    id: 'growth',
    name: 'Growth',
    blurb: 'A full brand and a site that sells your work.',
    projectPrice: 120000,
    carePerMonth: 4500,
    featured: true,
    features: ['Everything in Starter', 'Brand guidelines', 'Up to 5 website pages', 'Search-friendly setup'],
  },
  {
    id: 'full',
    name: 'Full',
    blurb: 'Brand, packaging and an online shop.',
    projectPrice: 280000,
    carePerMonth: 8000,
    features: ['Everything in Growth', 'Packaging design', 'Online shop', 'Priority support'],
  },
]
