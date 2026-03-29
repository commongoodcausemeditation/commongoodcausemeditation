---
phase: 1
plan: 2
wave: 1
---

# Plan 1.2: Global Scaffold & Navigation

## Objective
Build the HTML foundation of the site using Hugo layouts, ensuring responsive design and PWA readiness.

## Context
- .gsd/SPEC.md
- assets/css/zen-modern.css

## Tasks

<task type="auto">
  <name>Base Layout Implementation</name>
  <files>layouts/_default/baseof.html</files>
  <action>
    - Create a robust `baseof.html` with proper `<head>` metadata (SEO, viewport).
    - Link the `zen-modern.css` file using Hugo pipes for minification.
    - Include slots for `header`, `main`, and `footer` partials.
  </action>
  <verify>test -f layouts/_default/baseof.html</verify>
  <done>Base Hugo layout is implemented and correctly pulling in stylesheets.</done>
</task>

<task type="auto">
  <name>Global Header & Footer Partials</name>
  <files>layouts/partials/header.html, layouts/partials/footer.html</files>
  <action>
    - Implement Header: Lotus Logo placeholder (SVG or emoji), Navigation (Upcoming, Archive, Impact, Community), and slots for Clock/Toggle.
    - Implement Footer: Links (Privacy, Community Map), rotating "Intention of the Moment" placeholder.
  </action>
  <verify>test -f layouts/partials/header.html && test -f layouts/partials/footer.html</verify>
  <done>Header and footer partials are structured per the PRD.</done>
</task>

## Success Criteria
- [ ] Site shell is visible when running `hugo server`.
- [ ] Navigation is correctly placed and responsive.
