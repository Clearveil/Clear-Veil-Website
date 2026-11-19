# QA tools

Local checks run before every push. Not part of the website build.

## Setup (once)
```bash
cd tools/qa
npm install
```

## Start a headless browser (each session)
Git Bash, from `tools/qa` (uses Edge, which ships with Windows):
```bash
"/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe" --headless=new --disable-gpu --hide-scrollbars --remote-debugging-port=9444 --user-data-dir="$(cygpath -w "$PWD/.edge-profile")" about:blank &
```
Stop it afterwards (PowerShell):
```powershell
Get-NetTCPConnection -LocalPort 9444 -State Listen | ForEach-Object { Stop-Process -Id $_.OwningProcess -Force }
```

## Scripts (dev server running on :4321)
- `node snap.mjs <url> <name> [width] [sliceH] [mobile]`: full-page screenshot in slices
- `node sec.mjs <url> <selector> <out.png> [width]`: screenshot one section
- `node ovf.mjs /,/contractors`: phone sideways-scroll audit at 375 px
- `MSYS_NO_PATHCONV=1 node pass.mjs /,/contractors`: Meta Pixel pass (Contact / BookCallClick / Lead with lead_source); no emails are sent

## Notes
- Edge's tracking prevention blocks real `facebook.com/tr` beacons. To confirm events reach Meta on the **live** site, use the Claude in-app browser (Chromium) and read `performance.getEntriesByType('resource')`.
- Screenshots and `.edge-profile` are git-ignored.
