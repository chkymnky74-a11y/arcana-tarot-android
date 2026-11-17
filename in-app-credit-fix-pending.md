# In-app credit fix, ready to apply, NOT applied yet

Status 2026-11-17: APPLIED. Shelley chose MizzFitt App Studio for the in-app credit on Nov 17. Applied in the v3 source and in this build draft, www/ and android/app/src/main/assets/public/.

## The exact change (2 lines)

File 1: `www/index.html`, line 229
- Before: `<p class="small credit">Fate &amp; Feather Tarot artwork and meanings designed by Shelley Gregory.</p>`
- After:  `<p class="small credit">Fate &amp; Feather Tarot artwork and meanings designed by MizzFitt App Studio.</p>`

File 2: `www/deck.js`, line 1
- Before: `// Fate & Feather Tarot, designed by Shelley Gregory.`
- After:  `// Fate & Feather Tarot, designed by MizzFitt App Studio.`

Apply the same 2 lines in BOTH places:
- the live v3 source (`~/workspace/arcana-v3-test-site/`)
- this build draft (`arcana-v3-android-build/www/`)
- and the permanent test site at https://arcana-tarot-v3-test.netlify.app/
  (republish after the fix, so the test site matches what ships)

## Why it matters

If the AAB is built with the old lines, the released app will show her personal
name inside the app, even though the Play images no longer do. That would undo
part of the Nov 17 credit revision.

## Verification after applying

- `grep -rn "Shelley Gregory" www/` returns nothing.
- `grep -rn "MizzFitt App Studio" www/index.html www/deck.js` shows both lines.
- Re-test home, a full reading and saved readings on the test site.
