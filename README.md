# Jenga Studios: landing page (Crepton Task 1)

A landing page for a fictional digital studio. Everything here is invented: no real client, company or asset.

> Status: design decisions only. Nothing is built yet. Sections below marked "TODO" are filled in as the work is done.

## Design decisions

### The studio
- **Name:** Jenga Studios. *Jenga* is Swahili for "build".
- **Why this name:** TODO (Dan: write one or two sentences in your own words).
- **Idea:** a brand identity and web studio for small businesses in Kenya, so they look as good as they work.
- **Services (4):**
  1. Logo and brand identity
  2. Brand guidelines and packaging
  3. Websites and landing pages
  4. Online shops
- **Pricing:** three tiers (Starter, Growth, Full). Project work is a one-off price. The monthly/annual toggle applies to a care plan (hosting and updates).

### Three reference sites (draft, to be confirmed by Dan)
| Site | What I will borrow | What I will not copy |
|---|---|---|
| Aesop | Calm serif headings, warm tones, generous white space | Its heavy product photography |
| Pentagram | A confident, simple featured-work grid | Its very plain navigation |
| Stripe | Three pricing cards with the middle one highlighted | Its busy gradients |

### Fonts (both free on Google Fonts)
- Headings: **Fraunces**, a warm serif.
- Body: **DM Sans**, clean and readable at small sizes.

### Colours (light theme)
| Job | Colour | Hex |
|---|---|---|
| Page background | Cream | `#FAF3E8` |
| Main text | Charcoal | `#2B2623` |
| Call-to-action button | Terracotta (cream text) | `#B5502F` |
| Accent (links, tags, icons) | Deep green | `#2F4A3A` |
| Soft background (cards, strips) | Sand | `#EADFC8` |

The dark theme is not designed yet (TODO). It will be checked the same way.

### Contrast check (light theme)
Calculated with the WCAG contrast formula (script run on 2026-10-24). Body text needs at least 4.5:1.

| Text on background | Ratio | Result |
|---|---|---|
| Charcoal on cream | 13.57:1 | Pass |
| Charcoal on sand | 11.31:1 | Pass |
| Cream on terracotta (button) | 4.59:1 | Pass, but close to the limit |
| Terracotta on cream | 4.59:1 | Pass, but close to the limit |
| Deep green on cream | 8.81:1 | Pass |
| Deep green on sand | 7.35:1 | Pass |
| Cream on deep green | 8.81:1 | Pass |
| **Terracotta on sand** | **3.83:1** | **Fail** |

**Rule from this check:** never put terracotta **text** on the sand background (needs 4.5:1, gets 3.83:1). Use deep green or charcoal for text there. Terracotta **graphics** (icon accents, shapes) on sand are allowed, because graphics only need 3:1 and 3.83:1 passes. Only the real page, checked in Lighthouse, will prove the final result.

### Drawings (illustration rules)
Checked on 2026-10-24 against the tokens above, for the hero tower, the four service icons and the three featured-work pictures:
- **Colours:** only the five palette colours, written as tokens (`var(--green)`), never hex values or blended tints. On dark or terracotta backgrounds, icons use cream outlines and sand accents. Pure white is not allowed.
- **Line weight:** every outline is 3px on screen at any size (the SVGs use `vector-effect: non-scaling-stroke`). Shapes drawn with a stroke (the acacia trunk, the cutlery) are 6px. Fine dashes are 2px.
- **No cropping:** pictures are fitted inside their frame (`preserveAspectRatio="xMidYMid meet"`), never cut off.
- **Accessibility:** purely decorative drawings (icons, featured-work pictures) are hidden from screen readers with `aria-hidden="true"`. The hero tower has a text label. The caption under each picture carries the meaning.

### Layout direction: "Bricks" (chosen 2026-10-24)
Three directions were sketched: A (Editorial), B (Bricks) and C (Immersive green). **B was chosen** because the layout itself carries the name *Jenga* (build, stack, blocks):
- a brick-course band under the hero;
- services shown as coloured bricks of different widths;
- featured work in a staggered grid;
- pricing as a staircase that grows with each tier.

Why B and not A or C: TODO (Dan: write this in your own words, it is an Explain-it answer).

### Spacing
An 8px scale: 8, 16, 24, 32, 48, 64, 96.

## Screenshots
TODO (desktop and mobile).

## Lighthouse
TODO (mobile, all four scores 90+, with a screenshot).

## Explain-it
TODO. The three questions from the task guide:
1. Why did you structure your components the way you did? What would you split further?
2. Which accessibility problem did you find and fix, and how did you find it?
3. What did the AI get wrong, and how did you notice?
