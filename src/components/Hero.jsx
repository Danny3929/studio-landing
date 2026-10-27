import { hero } from '../data/hero.js'
import '../styles/hero.css'

// Hero: headline, supporting line, two calls to action and the brick-tower drawing.
// All words come from src/data/hero.js; all colours come from the design tokens.
export default function Hero() {
  const [first, second] = hero.headline

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="hero__eyebrow">{hero.eyebrow}</p>
          <h1 id="hero-title" className="hero__title">
            {first} <span className="hero__title-second">{second}</span>
          </h1>
          <p className="hero__lead">{hero.supporting}</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </a>
            <a className="btn btn--ghost" href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>

        <svg
          className="hero__art"
          viewBox="0 0 420 380"
          role="img"
          aria-label={hero.illustrationLabel}
        >
          <circle cx="320" cy="90" r="46" fill="var(--terracotta)" />
          <circle
            cx="320"
            cy="90"
            r="64"
            fill="none"
            stroke="var(--terracotta)"
            strokeWidth="2"
            strokeDasharray="3 9"
            strokeLinecap="round"
          />
          <rect x="0" y="331" width="420" height="49" fill="var(--sand)" />
          <path d="M0 330h420" stroke="var(--color-ink)" strokeWidth="3" />
          <path
            d="M330 330c2-40 0-70-6-100m6 40c14-20 30-30 48-36"
            stroke="var(--color-ink)"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
          />
          <ellipse cx="318" cy="214" rx="70" ry="20" fill="var(--green)" />
          <ellipse cx="368" cy="226" rx="38" ry="12" fill="var(--green)" />
          <g stroke="var(--color-ink)" strokeWidth="3" strokeLinejoin="round">
            <rect x="40" y="298" width="64" height="32" rx="5" fill="var(--terracotta)" />
            <rect x="108" y="298" width="64" height="32" rx="5" fill="var(--sand)" />
            <rect x="176" y="298" width="64" height="32" rx="5" fill="var(--green)" />
            <rect x="52" y="264" width="176" height="32" rx="5" fill="var(--cream)" />
            <rect x="40" y="230" width="64" height="32" rx="5" fill="var(--green)" />
            <rect x="108" y="230" width="64" height="32" rx="5" fill="var(--terracotta)" />
            <rect x="176" y="230" width="64" height="32" rx="5" fill="var(--sand)" />
            <rect x="52" y="196" width="176" height="32" rx="5" fill="var(--terracotta)" />
            <rect x="40" y="162" width="64" height="32" rx="5" fill="var(--sand)" />
            <rect x="108" y="162" width="64" height="32" rx="5" fill="var(--green)" />
            <rect
              x="64"
              y="128"
              width="128"
              height="32"
              rx="5"
              fill="var(--cream)"
              transform="rotate(-6 128 144)"
            />
          </g>
          <path d="M150 112V70" stroke="var(--color-ink)" strokeWidth="3" strokeLinecap="round" />
          <path
            d="M150 70l36 12-36 12z"
            fill="var(--terracotta)"
            stroke="var(--color-ink)"
            strokeWidth="3"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  )
}
