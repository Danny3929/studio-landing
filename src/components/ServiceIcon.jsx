// The small drawings on the service bricks. `name` comes from src/data/services.js.
// Colours come from two CSS variables set by each brick in services.css:
// --icon-line (the outline) and --icon-accent (the touch of colour), so one drawing fits every brick colour.
const ACCENT = 'var(--icon-accent)'

const drawings = {
  badge: (
    <>
      <circle cx="24" cy="24" r="18" />
      <path d="M24 11l4 9 9 1-7 6 2 9-8-5-8 5 2-9-7-6 9-1z" fill={ACCENT} />
    </>
  ),
  box: (
    <>
      <path d="M6 16l18-8 18 8v22l-18 8-18-8z" />
      <path d="M6 16l18 8 18-8M24 24v22" />
      <path d="M15 12l18 8" stroke={ACCENT} />
    </>
  ),
  browser: (
    <>
      <rect x="5" y="8" width="38" height="32" rx="5" />
      <path d="M5 17h38" />
      <circle cx="11" cy="12.5" r="1.5" fill={ACCENT} stroke="none" />
      <circle cx="17" cy="12.5" r="1.5" fill={ACCENT} stroke="none" />
      <rect x="11" y="23" width="14" height="10" rx="2" fill={ACCENT} stroke="none" />
      <path d="M30 24h8M30 30h8" />
    </>
  ),
  basket: (
    <>
      <path d="M8 18h32l-3 22H11z" />
      <path d="M16 18l5-10M32 18l-5-10" />
      <path d="M19 27v6M29 27v6" stroke={ACCENT} />
    </>
  ),
}

export default function ServiceIcon({ name }) {
  const shapes = drawings[name]
  // An unknown name draws nothing instead of crashing the page.
  if (!shapes) return null

  return (
    <svg className="service__icon" viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      {shapes}
    </svg>
  )
}
