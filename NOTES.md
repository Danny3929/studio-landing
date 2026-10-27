# NOTES: studio-landing (Task 1)

Working notes. The "Explain it" answers in the README come from here.

## What the AI got wrong
- 2026-10-24: The AI told Dan to invent a studio name and said nothing was chosen, because it had not read an earlier proposal (Udongo Studio) saved by another session. Dan noticed ("I thought you had already chosen it?"). Fix: read the saved chat file before answering about earlier messages.

- 2026-10-24: My first "fonts blocked" test looked fine only because the browser had cached the fonts from earlier runs, so it proved nothing. Rule: run offline/failure tests with a fresh browser profile. Redone: the page falls back to Georgia and system sans and stays readable.

- 2026-10-27: My first Hero "blank headline" break test proved nothing: the screenshot came from the wrong server (a leftover preview on another port), so it showed the real page. Rule: before trusting a failure test, confirm the server is serving the broken copy (the built file must lack the text). Redone on a clean port: the headline vanished, so the check can fail.
- 2026-10-27: The Hero drawing was added without the README rule "every outline is 3px on screen at any size", so its lines got thinner on phones. Fixed with `vector-effect: non-scaling-stroke` in `hero.css`.

- 2026-10-27: My first nav keyboard test failed two checks about the skip link. The cause was the test, not the page: an earlier step had followed a link, and Chrome starts Tab from the last link target. Rule: reload the page before testing "first Tab stop".
- 2026-10-27: In the break copy (keyboard rules removed) the "Shift+Tab wraps" check still passed, because the check before it had left focus in a spot where Shift+Tab happened to land on the right link. Rule: each keyboard check must start from a known focus position. Fixed; the broken copy now fails 5 checks.

- 2026-10-27: My Services brick layout placed bricks 1 to 4 by fixed column numbers. A break test with a fifth service in the data showed the fifth brick squeezed into 234px and the others changing width, because it spilled into an extra grid column. Fixed by repeating a width pattern (span 7 / 5 / 5 / 7) and letting a lone last brick fill the row. Rule: break tests must change the data, not just the code.
- 2026-10-27: Services nav-link check failed at first because the page was too short to scroll the section up to the bar. The page was fine; the test needed a shorter window. Also found the sticky bar is 69px (68 plus its border) while the scroll offset was 68px; now `calc(var(--nav-height) + 1px)`.

- 2026-10-27: Work grid: break tests done with changed data, not only changed code. A new filter with no projects shows "No projects in this category yet." and "Showing 0 of 4 projects"; a project with an unknown drawing name still gets a tile (no picture, no crash). Then two code breaks, to prove the checks can fail: removing `aria-pressed` failed 3 checks; matching only a project's first category failed the "a project can be in two categories" check.
- 2026-10-27: Tech debt noticed: the eyebrow text style is copied in `hero.css`, `services.css` and `work.css`, and the section title style in two of them. To share in one refactor later (with the tests re-run).

- 2026-10-27: My Hero test script had two bugs of its own: a shell heredoc turned my double backslashes into single ones, which changed the patterns (the text check and the colour parser both failed). Rule: write test patterns without backslashes, or write the file with the editor tool, not a heredoc.

## Accessibility problems found
- 2026-10-27: Work filter built as toggle buttons with `aria-pressed` (not ARIA tabs, because there is one grid that changes, not separate panels). Status line is a live region ("Showing 2 of 3 projects"). Tiles that do not match are removed from the page so Tab cannot reach them. Focus stays on the pressed button. Measured contrast: buttons 8.81:1, tile text 11.31:1, status 13.57:1. Drawings are centred (within 0.2 units) and hidden from screen readers; the caption carries the meaning.
- 2026-10-27: Services: heading order h1 > h2 > h3, services are a real list (4 items), icons hidden from screen readers (the text carries the meaning). Contrast measured from the rendered page: terracotta brick 4.59:1 (text and lines), sand 11.31:1, green 8.81:1, charcoal 13.57:1; icon accents all at least 3.83:1 (graphics need 3:1). An empty `benefit` no longer leaves an empty paragraph.
- 2026-10-27: Nav built with Joy's three menu rules (opens with a button, closes with Escape, traps focus) plus: focus returns to the Menu button on close, a click outside closes it, growing to laptop width closes it, closed links are hidden so Tab skips them, `aria-expanded`/`aria-controls` on the button, 44px touch targets, and a "Skip to content" link as the first Tab stop. Checked with 21 keyboard and layout checks in a real browser.
- 2026-10-27: If the headline text is ever empty, the Hero renders an empty `<h1>`, so screen readers get a heading with no words. Nothing in the code guards against it yet. Content now lives in `src/data/hero.js`; a test or check for empty text should be added later.
- 2026-10-24: My README rule banned terracotta icons on sand, but graphics only need 3:1 (3.83:1 passes). Text needs 4.5:1. Rule corrected to apply to text only.

## Bugs and their causes
- 2026-10-24 (mockup): service icons on coloured bricks were turned white with a CSS filter. Pure white is not in the palette. Fix: recolour with palette tokens. My first fix recoloured the child shapes but not the icon's own stroke, so two icons nearly vanished. Found only by looking at the screenshot.
- 2026-10-24 (mockup): work pictures were cropped (`preserveAspectRatio="slice"`), cutting off the cup handle and the knife. Fix: `meet`.
- 2026-10-24 (mockup): a cup fill used cream at 15% opacity, a blended colour outside the palette. Fix: solid palette green.

## Decisions (what we chose, what we rejected)
- 2026-10-27: Hero wording changed to "Build a brand people trust. Build a business that lasts." Dan chose it over his first draft because of length. Measured: old wording 6 lines at 390px and 1280px, buttons at 822px of 800px (below the fold); new wording 4 lines at both, buttons at 686px of 800px. The hero test fails on the old wording (4 of 10 checks) and passes on the new one (10 of 10).
- 2026-10-24: Studio is **Jenga Studios** (Dan's choice). A first draft called "Udongo Studio" was proposed and replaced.
- 2026-10-24: Dan let the AI draft the services, reference sites, fonts and colours and said he will correct anything he dislikes. The README marks them as drafts for Dan to confirm.
- 2026-10-24: Plain CSS with variables, not Tailwind (one fewer library to justify). Stack: React + Vite.
- 2026-10-24: Layout direction **B (Bricks)** chosen over A (Editorial) and C (Immersive green). Dan accepted the AI's recommendation, so he must be able to say why B fits (the name Jenga means build). C was rejected partly because it drops the tower illustration.
- 2026-10-24: Contrast script found terracotta text on sand fails (3.83:1). Rule: no terracotta text on sand.
- 2026-10-26: Asked Gemini (via Chrome) to critique the B mockup. It claimed low text contrast on dark cards and sand captions. Measured instead: cream on green 8.81:1, cream on charcoal 13.57:1, charcoal on sand 11.31:1, cream on terracotta 4.59:1 (all pass 4.5:1). Its claim was wrong. It also misread the dress as "on a hanger". Rule: AI critique is a checklist to verify with numbers, not a verdict. Gemini's drawings were reference only (nothing used); ideas noted: zigzag trim on the dress, food on the plate.
