# Profile Page — Project Notes

Static personal portfolio site for GitHub Pages.

## Stack
- Plain HTML / CSS / vanilla JS — no build tools, no framework
- GitHub Pages (deploy from `main` branch root)

## Structure
```
index.html              — full single-page layout
css/styles.css          — all styles; coffee-theme via CSS custom properties
js/main.js              — card renderer, mobile nav, scroll reveal
data/projects.json      — edit this to add/update projects (no HTML change needed)
assets/images/          — profile photo goes here (replace profile-placeholder.svg)
assets/resume.pdf       — drop your resume PDF here
CNAME                   — set your custom domain here (one line, no protocol)
```

## Customization Checklist
- [ ] Replace `[Your Name]` in `index.html` (nav logo, `<title>`, `<h1>`, footer, `alt` text)
- [ ] Replace `yourusername` in GitHub and LinkedIn URLs (index.html, ×4)
- [ ] Replace `you@example.com` with your real email
- [ ] Replace `assets/images/profile-placeholder.svg` with a real square photo
- [ ] Add `assets/resume.pdf`
- [ ] Update `data/projects.json` with your real projects
- [ ] Update `CNAME` with your domain (or delete the file if using `username.github.io`)
- [ ] Update `<meta name="description">` in `<head>` with your real name

## Adding a Project
Edit `data/projects.json` — add an object following this shape:
```json
{
  "name": "Project Name",
  "description": "One or two sentences describing what it does and the impact.",
  "tags": ["Go", "PostgreSQL", "Docker"],
  "codeUrl": "https://github.com/yourusername/repo",
  "demoUrl": null
}
```
Set `"demoUrl"` to `null` to hide the demo link.

## Local Preview
Open `index.html` directly in a browser for layout/style work.
For project cards (uses `fetch`), run a local server:
```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

## GitHub Pages Deploy
1. Create repo `<username>.github.io` on GitHub
2. Push this directory as the repo root
3. Settings → Pages → Source: `main` branch, `/(root)`
4. Live at `https://<username>.github.io` within ~90 seconds

## CSS Theme Tokens (css/styles.css `:root`)
| Variable | Value | Role |
|---|---|---|
| `--color-bg` | `#faf7f4` | Page background |
| `--color-surface` | `#f0ebe4` | Card / section background |
| `--color-accent` | `#6f4e37` | Coffee brown — buttons, links |
| `--color-accent-light` | `#a07850` | Hover states |
| `--color-text` | `#2d1b0e` | Body text |
| `--color-muted` | `#7a6355` | Secondary text |
