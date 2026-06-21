# Image Folder Guide

Drop your real photographed artwork files here, then update the matching
`image:` field in `src/data/artworks.js` (or the relevant component) to
import from this folder instead of a URL.

## Folders
- `hero/` — the large featured image/video shown on the homepage
- `about/` — artist portrait / studio photos used on the About page and homepage About preview
- `artworks/` — every gallery piece (Portraits, Religious Art, Blood Art, Canvas Paintings, Pencil Sketches)

## How to swap a placeholder for a real photo

1. Save your photo into the right folder, e.g. `src/assets/images/artworks/quiet-gaze.jpg`
2. At the top of `src/data/artworks.js`, import it:
   ```js
   import quietGaze from "../assets/images/artworks/quiet-gaze.jpg";
   ```
3. Replace that artwork's `image: "https://images.unsplash.com/..."` line with:
   ```js
   image: quietGaze,
   ```

Repeat for each artwork. Vite will bundle the image automatically — no other
code changes needed. Recommended size: 1200px on the longest edge, JPG or
WEBP, under 500KB each for fast loading.
