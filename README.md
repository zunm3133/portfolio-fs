# Zun Myat Hsu — Portfolio (React / Vite)

## Run locally
```bash
npm install
npm run dev
```
Opens at http://localhost:5173

## Build for production
```bash
npm run build
```
Outputs static files to `dist/` — deploy that folder to Vercel, Netlify, or GitHub Pages.

## Structure
- `src/data.js` — all content (profile, projects, experience, skills, etc.) in one place. Edit this file to update the site without touching any component.
- `src/components/` — one component per section (Hero, About, Skills, Projects, Experience, Education, Contact).
- `src/index.css` — design tokens and all styling (dark terminal/tech theme, cyan + amber accents).

## To do
- Add your LinkedIn URL in `src/data.js` and `Hero.jsx` / `Contact.jsx` if you'd like it linked.
- Swap in real screenshots for projects if you want visuals beyond text.
