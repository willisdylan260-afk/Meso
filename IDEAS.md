# Forge Fitness — Ideas & Feature Backlog

~~Strikethrough~~ = already in the app. Plain text = not yet built.
Move new ideas under the right section and cross them off when shipped.

---

## Core Principles

### Data & Tracking
- ~~Every workout logged shows progress — volume, PRs, streaks~~
- ~~PR detection — badge shown on exercise when a personal record is hit~~
- ~~Streak tracking — streak pill on the routines tab~~
- ~~Offline-first — single HTML file, works fully without internet~~
- ~~Data backup — export/import JSON covers device loss; cloud sync is a future phase~~
- ~~Auto-recover a workout session if the app crashes or is closed mid-set~~

### Motivation & Retention
- ~~Streaks keep people coming back — streak pill displayed~~
- Milestone celebrations — first workout, 7-day streak, 100th set, 1000 lbs volume (pop-up moment, not just a badge)
- Push notifications for streaks about to break ("You haven't trained today — keep your 5-day streak!")
- ~~Friction reduction — set logging is fast, a few taps~~

### Progression
- ~~Progressive overload suggestions — app tells you when to add weight based on recent performance~~
- Week-over-week volume comparison — "You lifted 12% more than last week"
- Month-over-month strength graph per exercise (e.g. bench press trend over time)
- ~~Basic progress charts — volume and bodyweight tracked on the Progress tab~~

### Personalization
- ~~Experience level collected in onboarding — routine recommended accordingly~~
- ~~Training goal collected in onboarding (muscle, strength, fat loss, general)~~
- ~~Rep ranges set per exercise~~
- ~~Rest timer — adjustable during workout~~
- RPE (Rate of Perceived Exertion) tracking per set — lets advanced users track effort, not just weight
- Custom rest time per exercise (not just a global timer)
- Bodyweight exercise tracking — rep-only sets with no weight (pull-ups, dips, push-ups)

### Social
- ~~Friends tab — activity feed, friend requests, reactions~~
- ~~Weekly leaderboard — workout count ranking among friends~~
- ~~PR sharing — when you hit a PR, a shareable card is generated (image with lift, weight, date)~~
- Challenge system — send a friend a "beat my 7-day streak" challenge
- ~~Workout sharing — send a routine to a friend directly in-app~~

### Design
- ~~Dark mode — entire app is dark themed~~
- ~~Large tap targets — designed for use mid-workout~~
- ~~Fast performance — single HTML file, instant load~~
- ~~Status bar removed — real phone OS status bar shows through~~
- ~~Haptic feedback on set completion (phone vibration)~~
- ~~Keep screen awake during an active workout (prevent auto-lock)~~
- Home screen widget — glanceable tile showing today's session, streak, and a one-tap start button without opening the app

### Trust & Safety
- ~~No paywalls or surprise subscriptions~~
- Data transparency — clear explanation of what is stored and where
- Export your data — let users download their full log as CSV or JSON
- Account deletion — full data wipe option in settings

### Settings
- ~~Dedicated settings screen — slide-in panel or fifth tab, eventually replacing the Account section crammed in Progress~~
- ~~Move account management (sign out, phone number, email display) into Settings~~
- ~~Move data export/import into Settings~~
- ~~Default weight unit toggle (lbs / kg) in Settings instead of buried in onboarding~~
- ~~Rest timer default — set your preferred rest duration once, applies to all workouts~~
- ~~Notification preferences — toggle which alerts you receive (streak reminders, friend activity, PR milestones)~~
- ~~Username change — let users pick a new @handle from Settings~~

---

## Feature Ideas

### Routines
- ~~Superset support — link two exercises to alternate sets~~
- ~~Warm-up sets — mark sets as warm-up so they don't count toward volume~~
- Deload week — auto-reduce weight by 10% every 4th week
- Exercise notes — per-exercise notes visible during the workout
- Routine templates library — browse community-made routines (PPL, 5/3/1, StrongLifts) and one-tap clone them
- ~~Rest day scheduling — mark which days are intentional rest so the streak doesn't break~~

### Log
- Photo logging — attach a progress photo to a log entry
- Mood/energy rating on workout finish (1–5 scale, tracked over time)
- Nutrition log — basic calorie/protein tracking alongside workouts
- Workout notes — free-text field on finish screen ("slept bad, felt weak today")
- Session history per exercise — tap any exercise in the library to see every time you've done it
- Recipe page — save multi-ingredient meals as a single recipe; log the whole meal at once and have macros auto-totaled from its ingredients

### Progress
- 1-rep max calculator — estimate max from any set logged
- Body measurements tracker (chest, waist, arms, etc.)
- Progress photos with comparison slider (before/after)
- Personal records wall — dedicated screen showing all-time PRs across every exercise
- Volume heatmap — calendar view color-coded by total volume, like GitHub's contribution graph

### Search / Exercise Library
- Video demos for each exercise (short looping clip)
- Custom exercises — user can add exercises not in the library
- Equipment filter — filter exercises by what's available (barbell, dumbbells, cables, bodyweight)
- Muscle group focus filter on the workout screen — tap a muscle to see only those exercises when adding

### Workout Experience
- Plate calculator — enter target weight, app shows exactly which plates to load per side
- Countdown to workout start — "Next workout in 2 days" nudge on the home screen
- Mid-workout swap — replace an exercise during a session without losing completed sets
- Quick-log mode — log a freeform workout without a routine, just pick exercises on the fly

---

## In Progress

- Previous session data on workout screen — while logging, show "Last time: 135 × 8" under each exercise so users can target progressive overload without guessing
- PWA / installable app — web app manifest + service worker so users can add Forge to their home screen, get an app icon, and use it offline like a native app

---

## Completed
- Friends tab Phase 1 — activity feed, requests, reactions, leaderboard, discover
- Muscle map demo — holographic SVG anatomy overlay
- Status bar removed (time, WiFi, battery hidden on phone)
