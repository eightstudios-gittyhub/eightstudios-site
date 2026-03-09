# Task Prompt: Unify Phone Number Styling on Member/Join Pages

Please update the site so phone number styling is **fully consistent** across the two member/join pages.

## Objective
Match both pages to the **existing preferred purple-glow phone number treatment already in this codebase**. Reuse existing styling exactly (no new colors, no new glow recipe, no new sizing scale).

## Scope
- Target the two member/join experiences currently in this project:
  - `app/ambassador-access/page.jsx`
  - `app/inquire/page.jsx`
- Only update the phone/contact-number display portions.
- Set all visible phone numbers to: `888-888-8888` (temporary placeholder).

## Implementation Requirements
1. **Find the source of truth** for the existing purple-glow phone number style already used in the project.
2. Reuse the same:
   - utility/class names
   - tokens/variables
   - font size and weight
   - letter spacing / line height
   - text-shadow / glow values
   - spacing and responsive behavior
3. Apply that same treatment to phone-number areas on both target pages.
4. If styles differ today, normalize both to the existing preferred version.
5. Preserve current brand palette and visual language.
6. Do not restyle unrelated elements.
7. Do not break layout, button spacing, links, or responsiveness.

## Reuse-First Rule
- If a reusable class/component already exists for this phone treatment, use it.
- If not, extract the cleanest reusable solution and apply it to both pages without duplicating one-off styles.

## Acceptance Criteria
- Both member/join pages show the same purple-glow phone styling.
- Phone number text is `888-888-8888` on both pages.
- Mobile + desktop rendering remains clean and aligned with the current theme.
- No regressions to layout or interaction.

## Deliverables
- Implement the code changes directly.
- List exactly which files were changed.
- Briefly state which existing style source was reused for the purple glow treatment.
