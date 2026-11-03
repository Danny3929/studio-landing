# Jenga Studios: landing page (Crepton Task 1)

A landing page for a fictional digital studio. Everything here is invented: no real client, company or asset.

> Status (2026-11-01): the page is built and checked (see "Final checks"). Built: navigation bar with theme button, Hero, trust strip, Services, Work (with filter), Testimonials carousel, Pricing (with monthly/annual toggle), FAQ accordion, Contact form (validates, demo only, tap-to-call number), footer, light/dark theme, favicon, `robots.txt`, scroll fade-in (off for reduced motion). Still to do: put the code on GitHub, deploy to Vercel, test the live URL on a real phone, and re-measure Lighthouse on the live URL.

## Design decisions

### The studio
- **Name:** Jenga Studios. *Jenga* is Swahili for "build".
- **Why this name:** the studio builds brands and websites, and "jenga" means build. It also names a stacking game, so the name, the brick-style layout and the tower-of-bricks drawing in the Hero all say the same thing.
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

Why B and not A or C: A (Editorial) is calm and elegant but could belong to any studio, and C (Immersive green) is bold but drops the tower drawing. Only B makes the name visible in the layout itself: a visitor sees bricks stacking up as they scroll, which is the idea of the business (build something solid, piece by piece).


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

Measured on 2026-11-01 against the final build (`npm run build`), served locally with `npx vite preview`, mobile preset, Lighthouse 13.6.0 via Node. Seven runs.

| Category | Score (range over 7 runs) | Target |
|---|---|---|
| Performance | **94 to 97** | 90 |
| Accessibility | **100** | 90 |
| Best Practices | **100** | 90 |
| SEO | **100** | 90 |

Key speed numbers: First Contentful Paint 1.8 to 2.1 s · Largest Contentful Paint 1.8 to 2.1 s · Total Blocking Time 0 to 40 ms · Cumulative Layout Shift 0 to 0.095.

The full report of the last run is saved at `docs/lighthouse-report.html`. A screenshot of it (Performance 94, the lowest of the seven runs):

![Lighthouse mobile report](docs/lighthouse-mobile-report.webp)

**How to read these numbers honestly**
- **All seven runs measured the dark theme.** Lighthouse's headless Chrome follows this PC's colour setting, which is dark. I tried a Chrome flag to ask for the light theme, but Lighthouse's own screenshot of those runs still shows the dark page. The light theme was checked for contrast with our own script (every visible text at least 4.5:1) but not with Lighthouse.
- **Layout shift is close to the limit.** In three runs it was 0; in the other four it was 0.093 to 0.095, and the "good" limit is 0.1. The only element Lighthouse reports as moving is the Hero drawing, which shifts when the web fonts finish loading and the text above it changes height. The likely fix is to host the two fonts on the site instead of loading them from Google Fonts (Lighthouse also lists the Google Fonts stylesheet as render-blocking, an estimated 1.4 s). That is not done.
- Before the favicon and `robots.txt` were added (28 October), Best Practices was 96 (a 404 for `favicon.ico`) and SEO was 91 (no valid `robots.txt`).
- Lighthouse 13.6 also shows an extra "Agentic Browsing" category (2/4). It is not one of the four categories in the task, so it is not part of this table.
- These are local numbers (no HTTPS, no server compression or caching). Run Lighthouse or PageSpeed Insights again on the live URL after the deploy and update this table.

**To rerun:**

```
npm run build
npx vite preview --port 4815
# in a second terminal, from %TEMP%\lh-tool:
node node_modules/lighthouse/cli/index.js http://127.0.0.1:4815/ --output html --output-path docs/lighthouse-report.html --form-factor mobile --chrome-flags="--headless --no-sandbox"
```

## Explain-it

> DRAFT written by the AI assistant from `NOTES.md` and checked against the code. Dan: read each answer, change it into your own words, then delete this line before you submit.

### 1. Why did you structure your components the way you did? What would you split further?

Every section of the page is its own component (Nav, Hero, Services, Work, Testimonials, Pricing, Faq, Contact, TrustStrip, Footer), and each section's words and numbers live in an array in `src/data/`, not inside the JSX. That means a price, a service or a FAQ question can be changed in one data file and the page updates with no component edit. I tested this by adding a fifth service, a seventh FAQ question and a new filter in temporary copies. Behaviour sits in five small hooks (`useMenuKeys`, `useTheme`, `useCarousel`, `useContactForm`, `useScrollReveal`), so the rules that need careful accessibility (the focus trap, pause on focus, reduced motion) can be read and tested on their own. Parts that repeat are their own components (WorkCard, PricingCard, FaqItem, Field, ServiceIcon). None of the 22 components is longer than 103 lines (the guide's limit is about 150). Colours, spacing and fonts come only from `src/styles/tokens.css`: there are no hard-coded colours in the components or stylesheets.

What I would split further: `Hero.jsx` is 89 lines and 58 of them are the brick-tower drawing, so the drawing should be its own `HeroArt` component. `WorkArt.jsx` holds three drawings in one file; each should be its own file. `ContactForm.jsx` (103 lines, the largest) mixes the form and the thank-you view. And the small "eyebrow" label style is copied into seven stylesheets; it should be one shared class.

### 2. Which accessibility problem did you find and fix, and how did you find it?

The clearest one was the keyboard focus ring in the footer. The green ring used everywhere else measures only 1.54:1 against the charcoal footer, which is almost invisible, so a keyboard user would lose their place. It was found by measuring, not by eye: a script read the real colours of every focus ring and background in a browser and calculated the contrast ratio (a ring needs at least 3:1). The fix is a cream 3px ring in the footer, which measures 13.57:1. The same measuring found two more: error text in terracotta on the sand form was 3.83:1 (text needs 4.5:1), so error text is now charcoal and only the "!" sign and border are terracotta; and in the dark theme terracotta text was 3.45:1, so small terracotta text uses a lighter shade there.

A second problem was about order, not colour. The pricing cards were first built to show the middle tier first on phones using CSS `order`, which changes what sighted users see but not the Tab order, so keyboard users would start on a different card. A test in a real browser caught it, and the reordering was removed instead of weakening the test. Finally, I walked through the whole page with only the Tab key (40 stops on a laptop, 36 on a phone, in both light and dark): every stop has a visible ring, none is hidden behind the sticky bar, and there is no trap. Details are in "Final checks" below.

### 3. What did the AI get wrong, and how did you notice?

Several things; each is recorded with a date in `NOTES.md`.
1. **The brick layout placed each service by a fixed column number.** When a fifth service was added to the data as a test, the fifth brick shrank to 234px and the others changed width. Real data would never have shown it; a test with changed data did. It now repeats a width pattern, so any number of services fits.
2. **The carousel's Next and Previous buttons used the old value from the last render,** so three quick presses moved it only once. It showed up because a screenshot said "Quote 2 of 4" after three clicks. It now updates from the previous value.
3. **Several of the AI's own tests proved nothing:** a "fonts blocked" test passed only because the browser had cached the fonts; a "blank headline" test looked at the wrong server; some checks passed on an empty list. These were noticed by asking "can this test fail?" and breaking the page on purpose.
4. **Another AI (Gemini) claimed our text contrast was too low,** and it misread the dress drawing as hanging on a hanger. Measuring showed every text pair passes (the lowest is 4.59:1), so its claim was wrong. AI feedback is treated as a checklist to verify with numbers, not a verdict.
5. **Early on, the AI told me nothing had been chosen for the studio name,** because it had not read the earlier proposal saved by another session. I noticed because I remembered it had been chosen.

## Final checks (2026-11-01)

Run on the final production build, in a real Chrome driven by scripts. The numbers below are from those runs.

**Secrets, packages and files**
- No `.env`, key or credential file is tracked in git, and `.gitignore` keeps `.env` files out (`.env.example` would be allowed). A scan for key-like text (AWS, Stripe, GitHub tokens, private keys, `api_key = "..."`) found nothing in the current files or in any of the 76 commits. The only phone number and email in the source are invented (`+254 700 000 000` and `hello@jengastudios.example`).
- No unused packages: the project has four (`react`, `react-dom`, `vite`, `@vitejs/plugin-react`) and each is used. `npm audit` reports 0 vulnerabilities and `npm outdated` lists nothing.
- No unused files: all 52 files in `src/` are reachable from `main.jsx` by following imports.
- No hard-coded colours outside `src/styles/tokens.css` (0 found).

**Console errors:** in four full runs (1280px and 390px, light and dark) I scrolled the whole page, used every filter, toggle, carousel button and FAQ question, and sent the contact form empty and filled in. Result: 0 console errors, 0 warnings, 0 exceptions and 0 failed network requests.

**Keyboard-only walkthrough:** from a freshly loaded page I pressed Tab through everything: 40 stops at 1280px and 36 at 390px. Every stop has a solid 3px focus outline, is scrolled into view (a tall text box needs its top edge and at least half of itself), is not hidden behind the sticky bar or covered by anything, has a readable name, and follows reading order (top to bottom, left column before right). Focus leaves the page at the end, so there is no trap, and Shift+Tab visits the same stops in exactly the opposite order. Each control also works from the keyboard: theme button (Enter and Space), work filter, billing toggle, carousel Next and Pause, FAQ questions (Enter opens, Space closes), and the contact form (Enter on Send shows the errors and moves focus to the first problem; a filled form shows the thank-you message).

**Test suites on the final build:** navigation 21 checks, services 18, work 22, hero 10, carousel 10 (it changes quote every 5000 ms, and pauses on focus, on hover and with the Pause button; with reduced motion it never rotates), and the keyboard and console walkthrough 24 checks in each of the four runs. Every check passed. The checks can fail: with the focus outline removed and a deliberate console error added in a temporary copy, the walkthrough failed 2 checks. Not re-run in detail: the older suites for pricing, FAQ, contact form, theme and footer (their scripts were not in my working folder). The walkthrough above covers their keyboard use and console output in both themes.

**Known gaps:** the page has not yet been tested on a real phone or at a live URL (that needs the deploy). The contact form is a demo (nothing is sent). Nothing in the code guards against empty text in the data files (for example an empty Hero headline would leave an empty heading). Lighthouse measured only the dark theme, and layout shift is close to its limit (see "Lighthouse").

## Scroll animations
Services, Work, Testimonials, Pricing, FAQ and Contact fade in and rise 16px once (0.5 s) as they scroll into view. The Hero, trust strip and footer do not animate. Sections stay fully visible when the visitor prefers reduced motion, when `IntersectionObserver` is missing, when scripts fail, and in print. Keyboard focus or a link jump into a hidden section reveals it at once. Only opacity and transform change, so nothing moves in the layout. Code: `src/hooks/useScrollReveal.js` and `src/styles/reveal.css`.
Checked in a real browser (14 checks, all pass), including: no layout shift, reveal on focus and on a nav jump, reduced motion, no `IntersectionObserver`, print. Break test: removing both reduced-motion safeguards made the reduced-motion and print checks fail. The earlier section suites and Lighthouse were re-run afterwards on the final build (see "Final checks" and "Lighthouse").
