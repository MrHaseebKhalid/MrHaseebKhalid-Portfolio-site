# mrhaseebkhalid.com — Portfolio Website

Personal portfolio for **Muhammad Haseeb Khalid** — Flutter MVP Developer. Built with pure HTML, CSS, and JavaScript. Deploys directly to GitHub Pages with no build step.

## Quick Start

1. Open `index.html` in your browser to preview locally.
2. Complete the setup steps below before going live.
3. Push to GitHub and enable GitHub Pages (see [Deploy to GitHub Pages](#deploy-to-github-pages)).

---

## Setup Checklist

### 1. Formspree Contact Form

1. Sign up at [https://formspree.io](https://formspree.io) (free tier available).
2. Create a new form and copy your Form ID (e.g. `xpzgkdnr`).
3. In `index.html`, find the contact form and replace:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
   with:
   ```html
   action="https://formspree.io/f/xpzgkdnr"
   ```
   (use your actual ID).

Submissions will be emailed to you automatically.

### 2. WhatsApp Number

In `index.html`, find the WhatsApp link:

```html
href="https://wa.me/YOUR_NUMBER"
```

Replace `YOUR_NUMBER` with your full international number **without** `+` or spaces.

Example for Pakistan `+92 300 1234567`:
```html
href="https://wa.me/923001234567"
```

### 3. Profile Photo

In the About section, replace the placeholder card with your photo:

```html
<div class="about__photo reveal">
  <img src="./assets/your-photo.jpg" alt="Haseeb Khalid — Flutter MVP Developer" style="width:100%; border-radius:4px; border:1px solid var(--border);">
</div>
```

Save your image in `assets/` (e.g. `assets/haseeb-photo.jpg`).

### 4. Portfolio Apps

See the comment block at the top of the Portfolio section in `index.html`. For each app:

1. Replace `[Your App Name Here]` with the real app name.
2. Update the description and tech stack tags.
3. Add a mockup image to `assets/apps/` (e.g. `app1-mockup.png`).
4. Replace the placeholder `<div class="mockup-placeholder">` with:
   ```html
   <img src="./assets/apps/app1-mockup.png" alt="App Name">
   ```
5. When live on Play Store, change the button to:
   ```html
   <a href="https://play.google.com/store/apps/details?id=YOUR_APP_ID" class="btn btn--primary" target="_blank" rel="noopener noreferrer">View on Play Store →</a>
   ```

### 5. Testimonials

Replace `[Client Name]` and update quote text with real client testimonials in `index.html`.

---

## File Structure

```
mrhaseebkhalid.com/
├── index.html          # Main page (all sections)
├── style.css           # Styles & responsive layout
├── script.js           # GSAP animations, navbar, mobile menu
├── README.md           # This file
└── assets/
    ├── apps/           # App mockup screenshots
    └── icons/          # Optional custom icons
```

---

## Deploy to GitHub Pages

1. Create a GitHub repository (e.g. `mrhaseebkhalid` or `mrhaseebkhalid.github.io`).
2. Push all files to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
3. Go to **Repository → Settings → Pages**.
4. Under **Source**, select **Deploy from a branch**.
5. Choose branch `main` and folder `/ (root)`.
6. Save. Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO/` within a few minutes.

For a user/organization site named `mrhaseebkhalid.github.io`, the repo must be named exactly `mrhaseebkhalid.github.io` and the site serves from the root URL.

---

## Custom Domain (mrhaseebkhalid.com)

1. In GitHub repo **Settings → Pages → Custom domain**, enter:
   ```
   mrhaseebkhalid.com
   ```
2. At your domain registrar (Namecheap, GoDaddy, Cloudflare, etc.), add DNS records:

   **Option A — Apex domain (`mrhaseebkhalid.com`):**
   | Type | Name | Value |
   |------|------|-------|
   | A | @ | `185.199.108.153` |
   | A | @ | `185.199.109.153` |
   | A | @ | `185.199.110.153` |
   | A | @ | `185.199.111.153` |

   **Option B — `www` subdomain:**
   | Type | Name | Value |
   |------|------|-------|
   | CNAME | www | `YOUR_USERNAME.github.io` |

3. Enable **Enforce HTTPS** in GitHub Pages settings after DNS propagates (can take up to 24–48 hours).
4. Optional: add a `CNAME` file in the repo root containing only:
   ```
   mrhaseebkhalid.com
   ```

---

## Tech Used

- HTML5, CSS3, Vanilla JavaScript
- [GSAP 3.12](https://greensock.com/gsap/) + ScrollTrigger (CDN)
- [Lucide Icons](https://lucide.dev/) (CDN)
- [Google Fonts](https://fonts.google.com/) — Syne & DM Sans
- [Formspree](https://formspree.io) — contact form backend

---

## License

© 2025 Muhammad Haseeb Khalid. All rights reserved.
