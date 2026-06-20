# Whistle — Frontend Assessment Submission

Full Whistle landing page rebuilt from the Figma design as React functional
components with plain CSS (no UI libraries, no Tailwind).

## Sections included

1. **Header + Hero + lead-capture form** (`Header.jsx`, `HeroSection.jsx`) —
   announcement bar, nav, hero banner, the gap/crooked-teeth form, the Clove
   Dental banner, the scrolling benefits marquee, and the "Dream smiles"
   pricing card.
2. **Results You'll Love** (`Result.jsx`) — before/after grid for the four
   treatment concerns (Gaps, Crooked Teeth, Open Bite, Protruding Teeth).
3. **Why Whistle?** (`WhyWhistleSection.jsx`) — the four supporting-photo
   cards (Custom-made, Predictable results, Clove partnership, Unlimited
   Aligners).
4. **The Whistle Difference** (`WhistleDifferenceSection.jsx`) — Next-Gen /
   Hassle-Free / Transparent Pricing, each with a `react-icons` line icon,
   next to the 3D-printer photo.
5. **What sets Whistle apart?** (`CompareSection.jsx`) — the dark
   feature-comparison table against "Other Brands".
6. **Four simple steps** (`StepsSection.jsx`) — Scan / Plan / Fabricate /
   Wear, with the video-thumbnail card.
7. **Doctor-led** (`DoctorSection.jsx`) — split layout with the "Get a
   Callback" CTA.
8. **Happy Smilers!** (`TestimonialsSection.jsx`) — horizontally scrollable
   testimonial strip.
9. **FAQ accordion** (`FaqSection.jsx`) — expand/collapse interaction, one
   item open at a time.
10. **Footer** (`Footer.jsx`) — quick links, contact, social, legal.

All copy, data, and image references live in `src/Data.js` so content is
defined once and reused by the components that need it.

## Setup

```bash
npm install
npm run dev
```

Vite will start a local dev server (usually `http://localhost:5173`).

## Responsiveness

Every section has its own breakpoints (in its companion `.css` file) tested
at common desktop, tablet, and mobile widths: grids collapse from 4 → 2 → 1
columns, the lead-capture form stacks vertically on narrow screens, the
comparison table tightens its columns instead of overflowing, and the
testimonials strip scrolls horizontally on touch devices.

## Interaction

The FAQ accordion expands/collapses one item at a time on click, matching
the `+` / `−` toggle shown in the Figma frame. The lead-capture form's
radio buttons and consent checkbox are fully controlled React state. The
"Why Whistle?" cards lift slightly on hover as a secondary, design-consistent
touch.

## Approach

Built each section as an isolated component with its own CSS file so styles
stay scoped and readable. Kept all colors/typography as CSS variables in
`index.css` so the palette is defined once and reused consistently across
sections, matching the Figma's purple/lavender/blue/near-black system.

## Notes before submitting

This was put together with AI assistance as a reference/starting point, which
the brief allows — but the brief also asks for the **submitted code to be your
own**. Before pushing, read through every file, make sure you understand each
piece, and adjust naming/structure/comments so the final repo genuinely
reflects how you'd write it. Also remember the assessment's own requirements:
at least 3 separate commits during development (not one at the end), repo set
to Public, and a `node_modules`-free push (this project already has a
`.gitignore` for that).

