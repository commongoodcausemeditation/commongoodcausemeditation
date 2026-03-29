---
phase: 1
plan: 3
wave: 2
---

# Plan 1.3: Dual-Clock Widget & Mode Toggle

## Objective
Implement the core interactive components of the header: a persistent UTC/Local dual-clock and a robust mode switcher.

## Context
- .gsd/SPEC.md
- layouts/partials/header.html

## Tasks

<task type="auto">
  <name>Dual-Clock Logic (Antigravity Engine v1)</name>
  <files>assets/js/clocks.js, layouts/partials/dual-clock.html</files>
  <action>
    - Create a partial for the dual-clock display.
    - Write Vanilla JS to:
      - Display UTC time (HH:MM UTC).
      - Auto-detect local timezone and display Local time (HH:MM AM/PM).
      - Detect and display Country/City name if possible via `Intl.DateTimeFormat().resolvedOptions()`.
      - Update every minute.
  </action>
  <verify>test -f assets/js/clocks.js</verify>
  <done>Sticky dual-clock displays both UTC and Local time correctly.</done>
</task>

<task type="auto">
  <name>Advanced Mode Toggle</name>
  <files>assets/js/theme-toggle.js</files>
  <action>
    - Implement logic to cycle through Light -> Dark -> Zen modes.
    - Persist user preference via `localStorage`.
    - Apply `data-theme` attribute to the `<html>` or `<body>` tag.
    - Add a toggle button to the header with expressive icons.
  </action>
  <verify>test -f assets/js/theme-toggle.js</verify>
  <done>Users can toggle between all 3 modes, and their choice persists across page reloads.</done>
</task>

## Success Criteria
- [ ] Dual-Clock widget accurately shows real-time UTC/Local data.
- [ ] Viewing modes (Light, Dark, Zen) are manually switchable and persistent.
