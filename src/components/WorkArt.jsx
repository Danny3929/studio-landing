// The three drawings on the work tiles. `name` comes from src/data/work.js.
// Every colour is a design token. Outlines are 3px on screen at any size (see work.css); shapes drawn with a
// thick stroke (the cutlery) are 6px. Each drawing is already centred in its 300 x 190 frame.
const drawings = {
  coffee: (
    <g transform="translate(-8 0)">
      <g fill="none" stroke="var(--cream)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M170 40h80v70a30 30 0 0 1-30 30h-20a30 30 0 0 1-30-30z" fill="var(--green)" />
        <path d="M250 58h12a14 14 0 0 1 0 38h-12" />
        <path d="M185 12c-8 8 8 12 0 22M210 12c-8 8 8 12 0 22M235 12c-8 8 8 12 0 22" />
      </g>
      <ellipse cx="82" cy="140" rx="30" ry="46" fill="var(--charcoal)" transform="rotate(-25 82 140)" />
      <path d="M62 160c14-24 28-42 42-60" stroke="var(--terracotta)" strokeWidth="3" strokeLinecap="round" fill="none" />
    </g>
  ),
  dress: (
    <>
      <path
        d="M122 22h8q20 32 40 0h8l-8 62 28 88q-48 12-96 0l28-88z"
        fill="var(--terracotta)"
        stroke="var(--cream)"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M130 84h40" stroke="var(--cream)" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M150 84l-13-8v16zM150 84l13-8v16z" fill="var(--cream)" stroke="var(--cream)" strokeWidth="3" strokeLinejoin="round" />
      {/* Kitenge-style trim at the hem: a straight line above a zigzag */}
      <path d="M109 150h82" stroke="var(--cream)" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path
        d="M114 163l9-9 9 9 9-9 9 9 9-9 9 9 9-9"
        stroke="var(--cream)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </>
  ),
  table: (
    <g transform="translate(-24 0)">
      <circle cx="170" cy="92" r="52" fill="var(--sand)" />
      <circle cx="170" cy="92" r="38" fill="var(--cream)" />
      <circle cx="160" cy="86" r="13" fill="var(--terracotta)" />
      <circle cx="181" cy="101" r="10" fill="var(--green)" />
      <circle cx="176" cy="76" r="6" fill="var(--green)" />
      <g stroke="var(--sand)" strokeWidth="6" strokeLinecap="round" fill="none">
        <path d="M92 40v32M101 40v32M110 40v32M92 72h18M101 72v78" />
      </g>
      <path d="M228 34c20 6 24 36 22 62h-22z" fill="var(--sand)" transform="translate(6 0)" />
      <rect x="228" y="102" width="12" height="50" rx="6" fill="var(--sand)" transform="translate(6 0)" />
    </g>
  ),
}

export default function WorkArt({ name }) {
  const shapes = drawings[name]
  // An unknown name draws nothing instead of crashing the page.
  if (!shapes) return null

  return (
    <svg
      className="work-card__art"
      viewBox="0 0 300 190"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      focusable="false"
    >
      {shapes}
    </svg>
  )
}
