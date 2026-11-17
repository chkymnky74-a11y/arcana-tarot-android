# Arcana v3 Android build, draft (NOT pushed, NOT built, NOT signed, NOT submitted)

Prepared 2026-11-17 for Shelley to review. This is the missing Capacitor wrapper
for the v3 web app, copied from the proven free VibeLive cloud-build pattern.
Repo: https://github.com/chkymnky74-a11y/arcana-tarot-android (created 2026-11-17, public, $0).
Nothing here spends money, submits anything to Play Console, or contains any secret.

## What is in this folder

- `www/` : verbatim copy of the tested v3 web app
  (`~/workspace/arcana-v3-test-site/`, verified identical by diff on 2026-11-17).
  78 card images, index.html, deck.js, script.js, interpretation.js, style.css, fonts.
  No external URLs, no keys, no demo text. Home, readings, clarifier, saved
  readings and card lookup were tested working on the live test site on 2026-11-17.
- `capacitor.config.json` : appId `com.shelleywrites.arcanatarot`,
  appName `Tarot Card Reading Assistant`, webDir `www`.
- `android/` : Capacitor Android project, target SDK 36, min SDK 24,
  versionCode **10201**, versionName **1.3 (PROPOSED)**.
  Live is 1.2 / code 10200 (released Jun 15, 2026), so the next release must be
  above 10200. 10201 / 1.3 is the natural next step, but Shelley has not
  confirmed the version name yet. Confirm before building.
- Launcher icons in `android/app/src/main/res/mipmap-*` were made from the
  approved 512x512 Play icon (01-icon-512x512.png, revised-credit set).
- `AndroidManifest.xml` : INTERNET only. Camera and microphone were removed,
  Arcana does not use them (that was VibeLive's permission set).
- `.github/workflows/android.yml` : free GitHub Actions build. Builds a debug
  APK and an unsigned release AAB, same as VibeLive did on 2026-11-06.

## What is NOT done, and why

1. **No signed AAB exists yet.** The first cloud build runs on push and builds an UNSIGNED release AAB and a debug APK. Local Gradle cannot run here
   (Java cross-process loopback TCP is blocked in this VM; the VibeLive
   build notes record this, and the JDK on disk is 17.0.21 under the
   VibeLive android-build tools folder). The cloud build is the route.
2. **Signing is the hard blocker.** The workflow will STOP, on purpose,
   if there is no `android/upload-keystore.enc` in the repo. It does NOT
   create a new keystore. This app already exists in Play, so a brand-new
   upload key would be rejected. Two ways forward, Shelley decides:
   a. Find the ORIGINAL v1.2 upload keystore and use it, or
   b. Request a Play upload-key reset through Play Console support
      (free, same route as the Spiritual Reading Room key note).
   No keystore of any kind for Arcana was found in the workspace
   (searched 2026-11-17). Do not build a signed AAB until this is settled.
3. **In-app credit IS changed in this draft.** Shelley chose MizzFitt App Studio on 2026-11-17. `www/index.html:229` and `www/deck.js:1` now say "designed by MizzFitt App Studio". Version name 1.3 and versionCode 10201 are confirmed. See `in-app-credit-fix-pending.md`, now applied.
4. **Upload key: original not found, reset route verified.** Play App Signing is enabled, Request reset is permitted, no reset submitted. The workflow generates the NEW upload key only after Shelley sets the KEYSTORE_PASSWORD secret in the repo (Settings, Secrets and variables, Actions). It exports the PEM certificate for the reset request and does NOT sign the release AAB until Google approves the reset.

## Next steps, in order

1. Shelley picks: (a) in-app credit, change to MizzFitt App Studio or keep,
   (b) version name 1.3 or another, (c) upload-key route, original key or
   Play reset.
2. Apply the credit fix if she says yes (2 lines, file is ready).
3. Push this folder to a new GitHub repo (free, public or private).
4. GitHub Actions builds debug APK + unsigned AAB. Download both, check
   package, versionCode 10201, and that `assets/public/index.html` is inside.
5. Sign ONLY with the original key or after a Play key reset, then upload
   to Play Console as a new release on the EXISTING app. No submission
   without her explicit final approval.
6. Test the debug APK on a real phone first: install, open, do a full
   reading, save it, look up a card. Nothing here proves the app runs
   until a real device does.

## Files to check

- `www/index.html:229` and `www/deck.js:1` : credit lines, now MizzFitt App Studio.
- `android/app/build.gradle` : versionCode 10201, versionName "1.3".
- `android/variables.gradle` : targetSdkVersion 36, minSdkVersion 24.
- `.github/workflows/android.yml` : signing guard, stops without the
  original keystore.
