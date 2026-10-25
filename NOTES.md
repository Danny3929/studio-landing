# NOTES: studio-landing (Task 1)

Working notes. The "Explain it" answers in the README come from here.

## What the AI got wrong
- 2026-10-24: The AI told Dan to invent a studio name and said nothing was chosen, because it had not read an earlier proposal (Udongo Studio) saved by another session. Dan noticed ("I thought you had already chosen it?"). Fix: read the saved chat file before answering about earlier messages.

- 2026-10-24: My first "fonts blocked" test looked fine only because the browser had cached the fonts from earlier runs, so it proved nothing. Rule: run offline/failure tests with a fresh browser profile. Redone: the page falls back to Georgia and system sans and stays readable.

## Accessibility problems found
- 2026-10-24: My README rule banned terracotta icons on sand, but graphics only need 3:1 (3.83:1 passes). Text needs 4.5:1. Rule corrected to apply to text only.

## Bugs and their causes
- 2026-10-24 (mockup): service icons on coloured bricks were turned white with a CSS filter. Pure white is not in the palette. Fix: recolour with palette tokens. My first fix recoloured the child shapes but not the icon's own stroke, so two icons nearly vanished. Found only by looking at the screenshot.
- 2026-10-24 (mockup): work pictures were cropped (`preserveAspectRatio="slice"`), cutting off the cup handle and the knife. Fix: `meet`.
- 2026-10-24 (mockup): a cup fill used cream at 15% opacity, a blended colour outside the palette. Fix: solid palette green.

## Decisions (what we chose, what we rejected)
- 2026-10-24: Studio is **Jenga Studios** (Dan's choice). A first draft called "Udongo Studio" was proposed and replaced.
- 2026-10-24: Dan let the AI draft the services, reference sites, fonts and colours and said he will correct anything he dislikes. The README marks them as drafts for Dan to confirm.
- 2026-10-24: Plain CSS with variables, not Tailwind (one fewer library to justify). Stack: React + Vite.
- 2026-10-24: Layout direction **B (Bricks)** chosen over A (Editorial) and C (Immersive green). Dan accepted the AI's recommendation, so he must be able to say why B fits (the name Jenga means build). C was rejected partly because it drops the tower illustration.
- 2026-10-24: Contrast script found terracotta text on sand fails (3.83:1). Rule: no terracotta text on sand.
- 2026-10-26: Asked Gemini (via Chrome) to critique the B mockup. It claimed low text contrast on dark cards and sand captions. Measured instead: cream on green 8.81:1, cream on charcoal 13.57:1, charcoal on sand 11.31:1, cream on terracotta 4.59:1 (all pass 4.5:1). Its claim was wrong. It also misread the dress as "on a hanger". Rule: AI critique is a checklist to verify with numbers, not a verdict. Gemini's drawings were reference only (nothing used); ideas noted: zigzag trim on the dress, food on the plate.
