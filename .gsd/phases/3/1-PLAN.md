---
phase: 3
plan: 1
wave: 1
---

# Plan 3.1: Immersive Meditation Timer Overlay

## Objective
Create a fullscreen immersive overlay that activates when a user starts a meditation, featuring a countdown and a breathing animation.

## Context
- .gsd/SPEC.md
- assets/css/zen-modern.css (breathing-circle defined)

## Tasks

<task type="auto">
  <name>Immersive Timer Component</name>
  <files>layouts/partials/timer-overlay.html, assets/js/timer.js</files>
  <action>
    - Create a partial for the fullscreen overlay.
    - Implement `timer.js` to:
        - Handle the "Join Meditation" / "Start" button clicks.
        - Show the overlay and hide page scroll.
        - Run a 20-min (default) or session-specific countdown.
        - Trigger the "Breathing Circle" CSS animation (8-16s cycle).
        - Add a "Close" / "Finish" button to exit the overlay.
  </action>
  <verify>test -f assets/js/timer.js</verify>
  <done>Fullscreen immersive timer activates and runs a visible countdown with breathing animation.</done>
</task>

<task type="auto">
  <name>Breathing Rhythm Control</name>
  <files>assets/css/zen-modern.css</files>
  <action>
    - Refine the `@keyframes breathe` to be smoother (possibly 12s cycle by default).
    - Ensure the breathing circle is centered and beautifully blurred as per "Zen-Modern" aesthetics.
  </action>
  <verify>Check assets/css/zen-modern.css for refined animation.</verify>
  <done>Breathing animation feels deep and calming.</done>
</task>

## Success Criteria
- [ ] Clicking "Join Meditation" triggers a fullscreen experience.
- [ ] Breathing circle pulses consistently.
- [ ] Countdown is functional.
