import { useState } from 'react'
import { billingOptions, monthsFree, pricingIntro, tiers } from '../data/pricing.js'
import BillingToggle from './BillingToggle.jsx'
import PricingCard from './PricingCard.jsx'
import '../styles/pricing.css'

const money = new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES', maximumFractionDigits: 0 })

// Months paid per year on the annual plan. Never below 1, so a bad value cannot give a zero or negative price.
const monthsPaid = Math.min(12, Math.max(1, 12 - monthsFree))

// The pricing section. It remembers the billing choice and works out each care price from the data.
export default function Pricing() {
  const [billing, setBilling] = useState('monthly')
  const annual = billing === 'annual'
  const saveNote = monthsFree > 0 ? `${monthsFree} months free` : ''

  return (
    <section data-reveal id="pricing" className="pricing" aria-labelledby="pricing-title">
      <div className="container">
        <div className="pricing__head">
          <p className="pricing__eyebrow">{pricingIntro.eyebrow}</p>
          <h2 id="pricing-title" className="pricing__title">
            {pricingIntro.heading}
          </h2>
          <p className="pricing__note">{pricingIntro.note}</p>
        </div>

        <BillingToggle options={billingOptions} active={billing} onChange={setBilling} saveNote={saveNote} />

        {/* role="status" is read out politely when the billing choice changes */}
        <p className="pricing__status" role="status">
          Showing {annual ? 'annual' : 'monthly'} care plan prices
        </p>

        <ul className="pricing__grid">
          {tiers.map((tier) => (
            <PricingCard
              key={tier.id}
              tier={tier}
              projectAmount={money.format(tier.projectPrice)}
              careLabel={annual ? 'Care plan, yearly' : 'Care plan, monthly'}
              careAmount={money.format(annual ? tier.carePerMonth * monthsPaid : tier.carePerMonth)}
              careUnit={annual ? '/yr' : '/mo'}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}
