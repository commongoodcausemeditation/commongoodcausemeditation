---
phase: 2
plan: 2
wave: 1
---

# Plan 2.2: Antigravity Time Engine & Dynamic Rendering

## Objective
Build the client-side JavaScript engine to convert UTC meditation times to local times and render the Hero/Grid cards.

## Context
- .gsd/SPEC.md
- layouts/index.html (to be created)

## Tasks

<task type="auto">
  <name>Antigravity Engine Implementation</name>
  <files>assets/js/antigravity.js</files>
  <action>
    - Write logic to find all elements with `data-utc-time`.
    - Convert UTC strings to local time using `Intl.DateTimeFormat`.
    - Update the text content with the local format (HH:MM AM/PM Region).
    - Implement a countdown function for the Hero section.
  </action>
  <verify>test -f assets/js/antigravity.js</verify>
  <done>UTC to Local conversion works dynamically on the page.</done>
</task>

<task type="auto">
  <name>Dynamic Index Page Layout</name>
  <files>layouts/index.html</files>
  <action>
    - Implement the Hero Section: Large card for the latest "event".
    - Implement the Cause Grid: All content of type "cause".
    - Use "ui-ux-pro-max" glassmorphism cards for the grid elements.
  </action>
  <verify>test -f layouts/index.html</verify>
  <done>Index page renders content cards with responsive grid columns.</done>
</task>

## Success Criteria
- [ ] Special Events appear in the Hero section.
- [ ] Cause Meditations appear in a clean grid.
- [ ] All meditation times reflect the visitor's detected timezone.
