# Assets

This folder is bundled into the production build and served from `/assets/...`.

## Where to drop your files

### `images/profile/`
Place your profile photo here:

- `profile-main.jpg` — used by the Hero avatar.
  - Recommended: square crop, 800×800 or larger, JPG/WebP.

If the file is missing, the UI falls back to `images/placeholders/profile-fallback.svg`.

### `images/projects/`
Place project preview images here. The expected filenames are:

**Featured (CV showcase):**

- `innapp.jpg`
- `e-recruitment.jpg`
- `football-statify.jpg`

**Other projects:**

- `live-chat.jpg`
- `tuition-media.jpg`
- `meeting-booking.jpg`
- `voucher-management.jpg`
- `car-booking.jpg`
- `student-management.jpg`
- `book-list.jpg`

Recommended: 16:10 aspect, 1280×800 or larger. JPG, PNG, or WebP.

If a project image is missing, the card falls back to `images/placeholders/project-fallback.svg`.

### `files/`
Drop your CV PDF here as:

- `Md_Kamrul_Hassan_Khan_CV.pdf`

This file is referenced by every "Download CV" / "Download Resume" button.

## Updating data

Source-of-truth content (project names, descriptions, paths, social links, etc.)
lives in `src/app/core/constants/portfolio-data.ts`. Edit that file to change
text or rearrange items — no template edits required.
