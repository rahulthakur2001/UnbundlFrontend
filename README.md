# Whistle — Frontend Assessment Submission

Three page sections from the Whistle Figma design, rebuilt as React functional
components with plain CSS (no UI libraries, no Tailwind).

## Sections included

1. **Hero + lead-capture form** — static recreation matching the Figma layout,
   spacing, and typography (`HeroSection.jsx`).
2. **"Why Whistle?" cards** — dynamic data from the
   [Fake Store API](https://fakestoreapi.com/products) (`WhyWhistleSection.jsx`).
3. **FAQ accordion** — dynamic data from
   [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts), with a
   working expand/collapse interaction (`FaqSection.jsx`).

## Setup

```bash
npm install
npm run dev
```

Vite will start a local dev server (usually `http://localhost:5173`).

## API choices and why

- **Why Whistle? → Fake Store API.** The Figma cards are image + bold title +
  short description, which is exactly the shape of a Fake Store product
  (`title`, `description`, `image`). The product photos themselves don't match
  the dental aesthetic, so per the brief's note on placeholder images, card
  thumbnails use `picsum.photos` (seeded by product id, sized to the Figma's
  280×200 slot) while the title/description text is the real API data.
- **FAQ → JSONPlaceholder.** Each post's `title` is reformatted into a question
  and `body` becomes the answer, populating the accordion with real fetched
  content rather than hardcoded copy.
- Both sections handle the full fetch lifecycle with `useEffect` + `useState`:
  a shimmer skeleton while loading, and a plain-language error message (no
  blank screen) if the request fails.

## Interaction (Task C)

The FAQ accordion expands/collapses one item at a time on click, matching the
`+` / `−` toggle shown in the Figma frame. Cards in the "Why Whistle?" section
also lift slightly on hover as a secondary, design-consistent touch.

## Approach

Built each section as an isolated component with its own CSS file so styles
stay scoped and readable. Kept all colors/typography as CSS variables in
`index.css` so the palette is defined once and reused consistently across
sections, matching the Figma's purple/lavender/blue system.

## Notes before submitting

This was put together with AI assistance as a reference/starting point, which
the brief allows — but the brief also asks for the **submitted code to be your
own**. Before pushing, read through every file, make sure you understand each
piece, and adjust naming/structure/comments so the final repo genuinely
reflects how you'd write it. Also remember the assessment's own requirements:
at least 3 separate commits during development (not one at the end), repo set
to Public, and a `node_modules`-free push (this project already has a
`.gitignore` for that).
