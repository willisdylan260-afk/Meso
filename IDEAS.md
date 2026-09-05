# App Ideas & Future Implementations

## Already Built
- Progress chart per exercise (Track over time — in add sheet)

---

## High Value / Relatively Quick

### PR Wall / Badge Screen
A dedicated screen showing each exercise's all-time best weight, reps, and date. Feels rewarding and gives users a reason to open the app on rest days. Pull from existing `getAllTimePRs()`.

### Weekly Volume Heatmap
Sets per muscle group per week displayed as a grid (like a GitHub contribution chart). Great at-a-glance way to spot training imbalances and overtraining.

### Repeat Last Workout
One-tap to clone a completed workout session as today's workout, pre-loaded with all weights and sets from last time. Common user need, saves setup time.

---

## Medium Lift / Higher Value

### Client Profiles
A profile switcher to log workouts under different client names. Currently everything is one user — this is the most differentiating feature for a trainer managing multiple people. Extend the existing client routine system.

### Warmup Set Calculator
Given a working weight, auto-generate 3–4 warmup sets (e.g. 45% → 65% → 80% → work). Small feature, saves mental math before every session. Show in the workout exercise card.

### Body Weight Log + Trend Line
Simple daily weigh-in input with a 7-day and 30-day rolling average. Pairs naturally with the %1RM data already in the app. Store in `bodyweightLog`.

---

## Bigger Swings

### Routine Sharing via Link / QR Code
Export a routine as a shareable URL or QR code. Practical for a trainer handing a program to a client without them needing an account. Extend the existing share-routine flow.

### Auto-Progression Rules
If a user hits all target reps at a given weight X sessions in a row, suggest adding weight next session. Configurable per exercise — basically a built-in linear or double-progression model.
