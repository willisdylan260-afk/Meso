# App Finalization Ideas

## 1. Theme

### Dark Mode (refine current)
- **True black base** — keep `--bg:#111` but optionally offer `#0a0a0a` for OLED punch
- **Card layering** — tighten the 3-level card stack (bg → card → card2) so depth reads clearly without looking muddy
- **Accent glow** — add a subtle `box-shadow: 0 0 12px rgba(79,196,168,.15)` on active cards/banners to give the teal life
- **Reduced-noise borders** — current `#252525` borders can dissolve into a single hairline `rgba(255,255,255,.06)` for a cleaner feel
- **Gold PR highlight** — the gold accent is underused; consider a faint gold shimmer on PR badges

### Light Mode (needs the most work)
- **Warm off-white base** — swap `#f2f2f7` for a very slightly warm `#f5f4f0` so it doesn't read as a stock iOS clone
- **Card warmth** — cards at pure `#fff` against a warm bg look stark; nudge to `#fdfcfa`
- **Accent desaturation in light** — `--accent:#2d9e86` can go slightly more saturated (`#1e9d80`) so it pops against the light ground
- **Border softness** — `#c6c6c8` is too cold; `#dedad5` gives a linen-adjacent softness
- **Text hierarchy** — run the full text scale through a warm gray family (e.g. `#1a1a18`, `#4a4845`, `#7a7672`) instead of the current iOS gray chain
- **Shadow depth** — light mode needs card shadows (`0 1px 4px rgba(0,0,0,.06)`) since it can't rely on dark-on-dark border contrast

### Accent Color Options to Try
| Name | Dark accent | Light accent | Mood |
|------|-------------|-------------|------|
| Teal (current) | `#4fc4a8` | `#1e9d80` | Clean, athletic |
| Electric blue | `#4fa8e8` | `#1a7fc4` | Techy, focused |
| Coral | `#e8704f` | `#c45030` | Energetic, warm |
| Violet | `#a87de8` | `#7a50c4` | Premium, calm |
| Lime | `#9ed44f` | `#6aaa18` | Fresh, outdoorsy |

---

## 2. Main Active Routine Card

### Current pain points
- Card feels like a flat list item — no visual hierarchy between routine name, week/day info, and the CTA
- The "Start workout" button is the most important element but doesn't feel primary
- No at-a-glance sense of progress through the mesocycle

### Ideas
- **Progress arc** — a thin circular arc around or behind the routine avatar/initial badge showing week progress (e.g. week 3 of 4 = 75% arc). Subtle, not a full progress ring.
- **Day chips row** — show all days as small labeled chips (M · Tu · W · Fr), highlighting today's chip in accent and greying out completed ones. Gives instant "where am I" context.
- **Muscle preview tags** — below the routine name, 2–3 pill tags for today's primary muscles (Chest · Triceps · Shoulders) pulled from the day's exercises.
- **Last session ghost text** — a single line in muted text: "Last: Tue · 45 min · 4 exercises" gives motivation to beat it.
- **Week badge** — a small "Wk 3" chip in the top-right corner of the card using the gold color to make the mesocycle position feel like a milestone.
- **Swipe to change day** — swipe left/right on the card to preview other days without opening the routine.
- **Two-state card** — compact state (just name + start button) that expands on tap to show today's exercise list as a preview before starting.
- **Rest day variant** — on rest days the card should look distinctly different (calmer, softer) with a recovery tip or mobility suggestion.

---

## 3. Nutrition Tab

### Current state
- Tab exists but appears to be a placeholder / minimal

### Ideas

#### Tracking approach options
- **Macro wheel** — large circular dial split into protein / carbs / fat arcs. Tap a segment to log that macro. Clean and visual.
- **Daily target bar** — horizontal bar with a sliding fill for calories, 3 sub-bars for macros below. Simple and scannable.
- **Meal cards** — Breakfast / Lunch / Dinner / Snacks as card rows. Each shows macros logged. Tap to add items.

#### Feature set (pick a scope)
**Minimal (v1):**
- Set daily calorie + protein target in Settings
- One tap to log a meal (free-form: name, calories, protein)
- Simple daily progress bar on the home tab card

**Mid (v2):**
- Meal cards with item search (basic food library or barcode)
- Macro breakdown per meal
- Weekly adherence chart in Progress tab

**Full (v3):**
- Food database search + barcode scanner
- Recipe builder
- AI meal suggestions based on training day type (heavy vs. light vs. rest)
- Water intake tracker alongside meals

#### Visual direction
- Use a warm palette for nutrition (amber / terracotta) to visually separate it from the cool teal of the workout side
- Keep it card-based, consistent with the rest of the app
- Macro colors: Protein = teal (brand), Carbs = gold, Fat = coral/red — familiar to gym users
