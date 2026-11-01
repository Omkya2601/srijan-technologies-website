# Srijan Technologies — Company Website

A fast, fully static company website for Srijan Technologies: 20+ marketing pages
(services, industries, portfolio case studies, contact, legal) built with React and
deployed on Vercel. No server or database is needed — content lives in the frontend, and form
submissions are emailed to you through [Web3Forms](https://web3forms.com).

## Tech Stack

React 19 + Vite, Tailwind CSS, React Router, Framer Motion, lucide-react,
react-helmet-async, react-hot-toast.

## Project Structure

```
own_startup_website/
  frontend/    The website (Vite + React) — this is what gets deployed
  backend/     Optional Express + PostgreSQL API (not used by the site; kept for later)
```

## Run Locally

Requires Node.js 20+ (22 recommended).

```bash
cd frontend
npm install
cp .env.example .env      # optional: add VITE_WEB3FORMS_KEY
npm run dev               # http://localhost:5173
```

`npm run build` outputs the production site to `frontend/dist`.

## Where Things Live

| What | File |
|---|---|
| Branding, contact details, social links, stats | [`frontend/src/config/site.js`](frontend/src/config/site.js) |
| Services, industries, portfolio, FAQs | [`frontend/src/data/content.js`](frontend/src/data/content.js) |
| Testimonials, technologies, estimates, nav | [`frontend/src/data/`](frontend/src/data/) |
| Form submission logic | [`frontend/src/services/api.js`](frontend/src/services/api.js) |

## Forms (Contact & Project Estimator)

Submissions are sent to Web3Forms, which emails them to the address you registered with.

1. Go to [web3forms.com](https://web3forms.com), enter your email, and copy the access key
   it emails you.
2. Set it as `VITE_WEB3FORMS_KEY` — in `frontend/.env` locally, and in Vercel's environment
   variables for the live site (then redeploy).

Until a key is set, forms open a WhatsApp chat (to `whatsappNumber` in `site.js`) with the
visitor's details pre-filled, so no enquiry is lost.

## Deploy on Vercel

1. Push this repo to GitHub.
2. Vercel → **Add New → Project** → import the repo.
3. Set **Root Directory** to `frontend` (framework auto-detects as Vite).
4. Add environment variable `VITE_WEB3FORMS_KEY` (see above). Optional but recommended.
5. Deploy. Every push to `main` redeploys automatically.

`frontend/vercel.json` rewrites all routes to `index.html`, so deep links and page refreshes
(e.g. `/services/website-development`) work. Env vars are baked in at build time — redeploy
after changing them.
