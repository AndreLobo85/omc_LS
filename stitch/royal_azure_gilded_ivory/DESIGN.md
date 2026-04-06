# Design System Strategy: The Editorial Clinic

## 1. Overview & Creative North Star
**Creative North Star: "The Clinical Atelier"**
The objective is to dismantle the cold, sterile, and "templated" reputation of dental healthcare. We are moving away from the generic medical grid in favor of a **High-End Editorial** experience. By combining the authority of a premium medical center with the sophisticated layout of a luxury lifestyle magazine, we create an environment that feels curated rather than processed.

This design system rejects the "standard" boxy UI. We utilize **intentional asymmetry**, overlapping imagery, and a radical approach to depth that favors tonal layering over structural lines. The result is a digital presence that feels "bespoke"—mirroring the precision and care of the clinic’s own dental work.

---

## 2. Colors: Depth & Soul
We use color not just for branding, but to define the "physicality" of the interface.

*   **Primary & Container (`#001754` / `#1A2E6C`):** Used to anchor the experience. These aren't just "blues"—they are the foundation of trust. Use `primary_container` for deep-section backgrounds to create high-contrast focal points.
*   **Secondary/Accent (`#735b28`):** Our Champagne/Gold. This is reserved strictly for moments of conversion and high-value highlights.
*   **The "No-Line" Rule:** Explicitly prohibit the use of 1px solid borders for sectioning. Boundaries must be defined through background color shifts. For example, a `surface_container_low` section sitting on a `surface` background provides all the separation needed without the visual "noise" of a line.
*   **Surface Hierarchy & Nesting:** Treat the UI as a series of stacked layers.
    *   **Level 0:** `surface` (The base canvas).
    *   **Level 1:** `surface_container_low` (In-page sections).
    *   **Level 2:** `surface_container_lowest` (White cards/content areas that need to "pop").
*   **The Glass & Gradient Rule:** For Hero sections and primary CTAs, use a subtle linear gradient transitioning from `primary` to `primary_container`. For floating navigation or modal overlays, apply **Glassmorphism**: use a semi-transparent `surface` color with a `20px` backdrop-blur to allow the rich background colors to bleed through.

---

## 3. Typography: Authoritative Precision
We balance the "editorial" look through a high-contrast scale.

*   **Display & Headlines (Inter):** Headlines use the `display-lg` to `headline-sm` range. Use tight letter-spacing (-0.02em) for large displays to give a "printed" feel. These should be bold, confident, and rare.
*   **Body (Manrope):** Chosen for its modern, geometric clarity. `body-lg` (16px) is our standard for readability. It feels "warm" and human, contrasting with the clinical precision of the headlines.
*   **Intentional Scale:** To achieve the editorial look, utilize extreme contrast. Pair a `display-md` headline with a `label-md` eyebrow text in `secondary` (Gold) for a premium, structured hierarchy.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are too "software-like." This design system uses light and tone to create volume.

*   **The Layering Principle:** Depth is achieved by "stacking" surface tiers. Place a `surface_container_lowest` card on a `surface_container_low` background. This creates a soft, natural lift that feels organic.
*   **Ambient Shadows:** When a float is required (e.g., a "Book Appointment" floating card), use a shadow tinted with the `on_surface` color at 4% opacity. 
    *   *Spec:* `0px 10px 40px rgba(26, 28, 28, 0.06)`. This mimics soft, natural ambient light.
*   **The "Ghost Border" Fallback:** If a container sits on a background of the same color, use a `1px` border of `outline_variant` at **20% opacity**. Never use a 100% opaque border.
*   **Glassmorphism Depth:** Elements like header bars should use `surface_bright` at 80% opacity with a `15px` blur. This integrates the UI into the photography behind it, making the clinic feel "open" and "bright."

---

## 5. Components

### Buttons: The Signature Touch
*   **Primary:** `primary_container` background with `on_primary` text. Use `lg` (16px) rounded corners. 
*   **CTA Accent:** Use `secondary` (Gold) for "Book Now" buttons to create an immediate visual hierarchy.
*   **State:** On hover, apply a subtle shift to `secondary_fixed_dim`.

### Cards: The Content Vessel
*   **Style:** No borders. Use `surface_container_lowest` (white) for the card body against a `surface_container_low` (soft cream/grey) background.
*   **Shadow:** Only use a shadow on hover to indicate interactivity.
*   **Asymmetry:** In editorial sections, cards should occasionally overlap the boundaries of a section or an image to break the "grid" feel.

### Input Fields: Clean & Welcoming
*   **Style:** Use `surface_container_high` as the background fill. 
*   **Border:** Only a bottom border (2px) of `outline_variant` that transitions to `primary` on focus. This keeps the form feeling "light" and less like a chore.

### Chips & Filters
*   **Style:** Pill-shaped (`rounded-full`). Use `secondary_container` for active states to keep the premium "Gold" thread running through the functionality.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use large amounts of white space (minimum 80px between major sections).
*   **Do** use "Editorial Breaks": An image that takes up 60% of the screen width with a headline that overlaps its edge.
*   **Do** use high-quality imagery of people. The focus should be on the *result* (the smile) and the *comfort* (the clinic interior), not the tools (drills/chairs).

### Don't:
*   **Don't** use 1px solid black or dark grey borders. Ever.
*   **Don't** use standard "Medical Blue" (#2196F3). Use our specific `primary` (#1A2E6C) for depth.
*   **Don't** use dividers or lines to separate list items. Use vertical spacing or subtle `surface` color shifts.
*   **Don't** use generic stock photos with "fake" smiles. Seek "warmth" and "authenticity" in the photography.

---

## 7. Signature Dental Elements
*   **The "Care" Timeline:** A bespoke vertical component using a soft `secondary_fixed` line and `primary` nodes to explain patient journeys.
*   **Treatment Overlays:** Use Glassmorphism cards to overlay treatment benefits directly onto high-quality interior photos of the clinic, creating an immersive "tour" feel.