// One pricing tier. The project price is one-off; the care price follows the billing choice.
export default function PricingCard({ tier, careLabel, careAmount, careUnit, projectAmount }) {
  return (
    <li className={`tier${tier.featured ? ' tier--featured' : ''}`}>
      {tier.featured ? <p className="tier__badge">Most chosen</p> : null}
      <h3 className="tier__name">{tier.name}</h3>
      <p className="tier__blurb">{tier.blurb}</p>

      <p className="tier__price">
        <span className="tier__label">Project, one-off</span>
        <span className="tier__amount">{projectAmount}</span>
      </p>
      <p className="tier__price tier__price--care">
        <span className="tier__label">{careLabel}</span>
        <span className="tier__amount tier__amount--small">
          {careAmount}
          <span className="tier__unit">{careUnit}</span>
        </span>
      </p>

      <ul className="tier__features">
        {tier.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      <a className="btn btn--primary tier__cta" href="#contact">
        Choose {tier.name}
      </a>
    </li>
  )
}
