# Study: offline study app for iPad

A web app that installs to your iPad Home Screen and works with no internet once installed.

- **Library:** your study guides (.md) and course PDFs, stored on the iPad.
- **Flashcards:** built automatically from each guide's numbered "Self-quiz" section (or any `Q:` / `A:` lines). Tap "Got it" or "Again", and cards you miss come back sooner.
- **Pomodoro:** a 25-minute focus / 5-minute break timer in the top bar, with a chime.

## One-time setup (about 10 minutes)

### 1. Put it online with GitHub Pages (free)
1. Sign in at github.com and create a **New repository** named `study`. Choose **Public**, since free Pages needs that.
2. On the new repository's page, click **uploading an existing file**. Drag in **everything inside this folder** (not the folder itself): `index.html`, `sw.js`, `manifest.webmanifest`, and the `icons`, `vendor` and `materials` folders. Click **Commit changes**.
3. Go to **Settings → Pages**. Under *Branch*, pick `main` and `/ (root)`, then click **Save**.
4. After about a minute your app is live at `https://YOUR-USERNAME.github.io/study/`.

> The repo is public, so don't upload the course PDFs to it. Add those inside the app on the iPad (step 3 below), where they stay private on the device.

### 2. Install it on the iPad
1. Open that link in **Safari** on the iPad.
2. Tap **Share → Add to Home Screen → Add**.
3. Open **Study** from the Home Screen once while you're online. After that it works offline.

### 3. Add your materials (inside the Home Screen app)
Tap **+ Add files** and pick .md study guides or PDFs from the Files app. They're saved on the iPad for offline use.

To get files from your PC onto the iPad, use iCloud Drive, OneDrive or Google Drive (the Files app can see all three), or email them to yourself and save the attachments.

> Add files from inside the **Home Screen app**, not from a Safari tab. iPadOS keeps the two storage areas separate.

## Adding new study guides later
- **Quickest:** tap **+ Add files** in the app.
- **Or ship it with the app:** upload the .md file to the repository's `materials` folder and add its file name to `materials/index.json`. The app picks it up the next time it opens online.

If you change `index.html` or `sw.js`, bump `VERSION` at the top of `sw.js` so the iPad downloads the new version.
