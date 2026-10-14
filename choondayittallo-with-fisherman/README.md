# ചൂണ്ടയിട്ടല്ലോ — Kerala Fishing Life Simulator

An original browser fishing game starter built with React, TypeScript, Vite and Three.js. The current release is an offline-friendly playable MVP: a procedural Kerala-inspired river scene, movement/camera, casting, bite timing, hook/reel gameplay, fish inventory, freshness-adjusted selling, equipment purchases/equipping, location unlock progression, fish journal, and versioned local saves.

## Requirements
- Node.js 20.19+ or 22.12+ (current Vite 7 requirement)
- npm
- Modern Chrome, Edge, Firefox or Safari with WebGL enabled

## Run locally
```bash
npm install
npm run dev
```
Open the local URL Vite prints (usually `http://localhost:5173`).

## Tests and production build
```bash
npm test
npm run build
npm run preview
```
The production site is generated in `dist/`.

## Controls
- **W/A/S/D** or arrow keys: move along the riverbank
- **Mouse**: look around (click the 3D view to capture the mouse; press Esc to release)
- **Hold CAST LINE, then release**: charge and cast
- **HOOK NOW**: respond to a bite before it times out
- **REEL IN** or **F**: reel while fighting a fish; watch the tension meter
- **Esc**: close menus/release pointer lock
- **Basket / Journal / Travel / Equipment / Market**: use the left-side menu
- Mobile: touch the on-screen interface. The 3D scene is responsive, but a dedicated virtual joystick is a follow-up task.

## Save data
The local save uses `localStorage` key `choondayittallo-save-v1`, includes a version number and resets to a safe default if JSON is corrupt or unsupported. There is no account, cloud save, leaderboard, or server-authoritative economy in this MVP. Clear progress from Settings → Reset local save.

## Advertising
The current project intentionally does **not** load third-party advertisements. The scene and website are ready for a later approved-adapter implementation, but no fake ad clicks or impressions are generated. Google AdSense requires approval and publisher configuration; don't add ads that could overlap game controls. In-world sponsor textures should only use creatives you own or have permission to display.

## Publish on GitHub
1. Create a repository at https://github.com/new. Use `choondayittallo` as the repository name; public is easiest for a portfolio project.
2. Extract this ZIP, open a terminal in the `choondayittallo` folder, and run:
   ```bash
   git init
   git add .
   git commit -m "Initial playable Choondayittallo game"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/choondayittallo.git
   git push -u origin main
   ```
3. Replace `YOUR-USERNAME` with your GitHub username. GitHub Desktop is an alternative if you prefer a graphical interface.

## Deploy free on Vercel
1. Sign in at https://vercel.com/ with GitHub.
2. Select **Add New → Project**, then import the `choondayittallo` repository.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`. Install command: `npm install`.
4. No environment variables are required for this offline MVP.
5. Click **Deploy**. When deployment finishes, Vercel gives you a `*.vercel.app` URL. Open that URL and test the game on desktop and mobile.
6. Every push to the connected branch triggers a new deployment. Do not say it's live until Vercel reports deployment success.

## Other free static hosting
- **Netlify**: import the GitHub repository; build command `npm run build`; publish directory `dist`.
- **Cloudflare Pages**: connect GitHub; build command `npm run build`; build output directory `dist`.
- **GitHub Pages**: possible, but Vite needs a repository base path configured if the game is published at `username.github.io/repository/`. Vercel/Netlify/Cloudflare Pages are simpler for the first deployment.

## Architecture
- `src/game/World.ts`: Three.js scene, procedural environment, camera, movement and rendering loop.
- `src/game/data.ts`: centrally configured fish, equipment, bait and location data.
- `src/game/economy.ts`: pure economy/save helpers, selling and equipment purchase validation.
- `src/ui/App.tsx`: React HUD, fishing state machine, market, shop, journal, map and settings.
- `src/style.css`: responsive interface styling.
- `src/game/economy.test.ts`: automated economy/save tests.

## Current MVP limitations — read before publishing
- The river scene and fish silhouettes are procedural primitives, not final authored assets. Water animation and shadows are lightweight approximations, not a full physically based water simulation.
- Fish AI and line behavior are simplified game simulation, not full Rapier physics. Bite timing is probability-driven; reeling uses tension/progress controls.
- Only the river scene is currently implemented. Other locations are progression/menu entries, not separate finished 3D maps yet.
- Market and shop are functional UI panels; their world labels are clickable scene overlays, not walk-up NPC interactions.
- Audio, cloud saves, server-side economy validation, admin ad inventory, real sponsor texture management, daily/weekly challenges, NPC dialogue, and a dedicated mobile joystick remain future phases.
- The game has not been publicly deployed by this project. Run the commands and follow the deployment steps above to publish it.

## Suggested next development milestones
1. Add a dedicated touch joystick, mobile camera gestures, and full keyboard remapping.
2. Replace primitive environment/fish models with optimized original assets and add proper water shader/rod bending/landing animation.
3. Add Rapier or a fixed-step custom line/fish simulation and browser E2E tests.
4. Add soundscape, Malayalam font bundling/local fallback, and polish/tutorial flow.
5. Add Supabase auth and server-validated economy only if cloud saves/leaderboards are needed.
6. Implement approved sponsor inventory and website ad adapter separately, with privacy policy and consent as required.

## Graphics refresh (October 2026)

- Updated the world lighting, fog, water material and palm frond geometry for a more natural Kerala backwater atmosphere.
- Added `public/art-direction/kerala-backwater-target.png` as the visual direction reference for future model/animation work. It is a concept reference, not a live 3D scene or a replacement for interactive gameplay.
- The fisherman and vallam are still procedural models. For a genuinely realistic result, replace them with optimized, licensed/glTF models and skeletal animations; the reference image is not itself a playable 3D model.
