# Atom Time Machine AR Website

A Grade 8 web-based Augmented Reality website about the historical development of atomic models.

## What's included

- Darker student-friendly theme
- Mobile-friendly layout with the 3D/AR viewer placed above the lesson description
- Five atomic model buttons
- Description, strength, limitation, and guide question for every model
- 15-item multiple choice practice quiz with automatic scoring
- `model-viewer` setup for Android Scene Viewer and iPhone Quick Look

## Files

- `index.html` - main webpage
- `style.css` - responsive design and dark theme
- `script.js` - model switching, AR button behavior, and quiz scoring
- `models/` - GLB files for Android and web preview

## Important for GitHub Pages

Your homepage should contain an `index.html` file.

If your repository is named like this:

- `fakedexzkie.github.io`

then your site is usually:

- `https://fakedexzkie.github.io/`

If your repository has another name, for example:

- `atom-ar-site`

then your site is usually:

- `https://fakedexzkie.github.io/atom-ar-site/`

Do not open only `https://fakedexzkie.github.io/` unless your repository is exactly `fakedexzkie.github.io`.

## How to make iPhone AR work

Android uses the `.glb` files. iPhone and iPad need `.usdz` files.

Convert each `.glb` file into `.usdz`, then upload the `.usdz` files into the same `models` folder.

Use these exact filenames:

- `dalton-solid-sphere.usdz`
- `thomson-plum-pudding.usdz`
- `rutherford-nuclear.usdz`
- `bohr-planetary.usdz`
- `schrodinger-quantum-cloud.usdz`

The filenames must match exactly because GitHub Pages is case-sensitive.

## GitHub upload steps

1. Create or open your GitHub repository.
2. Upload `index.html`, `style.css`, `script.js`, and the full `models` folder.
3. Go to **Settings** → **Pages**.
4. Under **Build and deployment**, choose:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/root**
5. Wait 1–5 minutes.
6. Open the correct GitHub Pages link.

## Phone testing tips

- Android: use Chrome.
- iPhone: use Safari for best Quick Look support.
- Messenger's in-app browser may not fully support AR. Open the link in Safari or Chrome.
