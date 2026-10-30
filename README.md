# Jenga Studios: landing page (Crepton Task 1)

A landing page for a fictional digital studio. Everything here is invented: no real client, company or asset.

> Status (2026-10-28): Lighthouse and screenshots complete. Built and checked: navigation bar, Hero, Services, Work (with filter), Pricing (with monthly/annual toggle), FAQ accordion, Contact form (validates, demo only), trust strip, footer, light/dark theme toggle, testimonials carousel, favicon, robots.txt. Still to do: scroll animations (reduced motion), deploy.

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

### Hero wording (chosen 2026-10-27)
- **Headline:** "Build a brand people trust. Build a business that lasts."
- **Supporting line:** "Jenga Studios helps Kenyan businesses build a brand people remember and a website that brings them customers."
- **Why this wording:** the first draft ("Build a brand that commands respect. Build a digital presence that converts.") was replaced because of its length. Measured in a real browser: the first draft took 6 lines on both a 390px phone and a 1280px laptop, and on a standard 1280 x 800 laptop window the "Start your project" button ended below the bottom of the screen (822px of 800px). The chosen wording takes 4 lines on both, and the buttons end at 686px of 800px. It also avoids marketing words ("converts", "scale") and claims we cannot prove yet ("high-performance", "commands respect").

### Fonts (both free on Google Fonts)
- Headings: **Fraunces**, a warm serif.
- Body: **DM Sans**, clean and readable at small sizes.

### Colours (light theme; dark theme below)
| Job | Colour | Hex |
|---|---|---|
| Page background | Cream | `#FAF3E8` |
| Main text | Charcoal | `#2B2623` |
| Call-to-action button | Terracotta (cream text) | `#B5502F` |
| Accent (links, tags, icons) | Deep green | `#2F4A3A` |
| Soft background (cards, strips) | Sand | `#EADFC8` |

The dark theme is described in the next section, with its measured contrast.

### Dark theme (added 2026-10-28)
The theme follows the visitor's system setting until they press the button; then their choice is saved in the browser (`localStorage`, key `jenga-theme`, value `light` or `dark`) and wins. A small script in `index.html` sets the theme before the page paints, so there is no white flash.

The dark theme only changes the *role* tokens in `src/styles/tokens.css` (`[data-theme='dark']`). Our five palette colours stay. Two lighter shades were added so that text passes 4.5:1 on a dark page, and one very dark page colour:

| Job | Dark value | Contrast on the dark page (#1d1917) |
|---|---|---|
| Page background | #1d1917 (a darker charcoal) | n/a |
| Text | cream #faf3e8 | 15.83:1 |
| Cards and form | charcoal #2b2623 | cream text on it 13.57:1 |
| Accent (links, eyebrows, buttons) | #9cc4ab (a lighter green) | 9.05:1 |
| Highlight (terracotta used as text) | #d9714d (a lighter terracotta) | 5.33:1 |
| Call-to-action button | terracotta #b5502f with cream text | 4.59:1 (unchanged) |

Terracotta text directly on the dark page is only 3.45:1, which is why the highlight shade exists. The services bricks, work tiles and footer keep their palette colours in both themes. The Hero drawing uses an `--color-ink` outline (charcoal in light, cream in dark).

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

Desktop (1280 px, light theme — full page):

![Desktop screenshot](docs/laptop-1280-light.webp)

Mobile (390 px, light theme — full page):

![Mobile screenshot](docs/phone-390-light.webp)

Dark theme (hero section, 1440 px):

![Dark theme desktop](docs/screenshot-desktop.png)

## Lighthouse

Measured on 2026-10-28, mobile preset, against the production build (`npm run build`), served locally with `npx vite preview`. Tool: Lighthouse 13.6.0 via Node.

| Category | Score | Target |
|---|---|---|
| Performance | **99** | 90 |
| Accessibility | **100** | 90 |
| Best Practices | **100** | 90 |
| SEO | **100** | 90 |

Key speed numbers: First Contentful Paint 1.8 s · Largest Contentful Paint 1.8 s · Total Blocking Time 0 ms · Cumulative Layout Shift 0.

The full report is saved at `docs/lighthouse-report.html`. A screenshot of one report (the first of three runs):

![Lighthouse mobile report](docs/lighthouse-mobile-report.webp)

**How to read these numbers honestly**
- Repeated runs vary a little: Performance was 97 to 99 across nine runs, and the other three categories were 100 every time after the favicon and `robots.txt` were added. Before those two files, Best Practices was 96 (a 404 for `favicon.ico`) and SEO was 91 (no valid `robots.txt`).
- Lighthouse's headless Chrome follows the computer's colour setting, and this PC is set to dark, so **these runs measured the dark theme**. The light theme was checked for contrast with our own script (every visible text at least 4.5:1) but not with Lighthouse itself.
- These are local numbers (no HTTPS, no server compression or caching). Run Lighthouse or PageSpeed Insights again on the live URL after the deploy and update this table.

**To rerun:**

```
npm run build
npx vite preview --port 4815
# in a second terminal, from %TEMP%\lh-tool:
node node_modules/lighthouse/cli/index.js http://127.0.0.1:4815/ --output html --output-path docs/lighthouse-report.html --form-factor mobile --chrome-flags="--headless --no-sandbox"
```

## Explain-it
TODO. The three questions from the task guide:
1. Why did you structure your components the way you did? What would you split further?
2. Which accessibility problem did you find and fix, and how did you find it?
3. What did the AI get wrong, and how did you notice?
