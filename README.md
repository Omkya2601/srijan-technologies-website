# Srijan Technologies — Company Website

A production-quality software development company website built on a **PERN** stack
(PostgreSQL, Express, React, Node.js) with Prisma as the ORM. It includes a full
marketing site (23 pages), a working contact form backed by a real database, public
content APIs for services/industries/portfolio, and a JWT-protected admin panel for
managing inbound leads.

## Tech Stack

**Frontend:** React 19 + Vite, Tailwind CSS, React Router, Framer Motion, lucide-react,
Axios, react-helmet-async, react-hot-toast.

**Backend:** Node.js + Express, Prisma ORM, PostgreSQL, JWT auth, bcrypt, helmet, CORS,
express-rate-limit, express-validator.

## Project Structure

```
own_startup_website/
  backend/     Express API + Prisma schema/migrations/seed
  frontend/    Vite React app
```

## Prerequisites

- Node.js 20+ (22 recommended) and npm
- PostgreSQL 13+ running locally or a managed instance (e.g. Neon, Supabase, Railway, RDS)

## 1. Backend Setup

```bash
cd backend
npm install
cp .env.example .env
```

Edit `backend/.env`:

```
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/srijan_dev?schema=public"
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173
JWT_SECRET=replace_with_a_long_random_string
JWT_EXPIRES_IN=1d
ADMIN_NAME="Site Admin"
ADMIN_EMAIL=admin@srijantechnologies.com
ADMIN_PASSWORD=ChangeMe123!
```

Generate a strong `JWT_SECRET` with:

```bash
node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"
```

Create the database (adjust for your Postgres setup):

```bash
psql -U postgres -c "CREATE DATABASE srijan_dev;"
```

Run migrations and seed the database (services, industries, portfolio content, and the
admin user come from `prisma/seed.js`):

```bash
npx prisma migrate dev --name init
npm run seed
```

Start the API:

```bash
npm run dev      # nodemon, auto-reload
# or
npm start        # plain node
```

The API runs at `http://localhost:5000`. Health check: `GET /api/health`.

## 2. Frontend Setup

```bash
cd frontend
npm install
cp .env.example .env
```

`frontend/.env`:

```
VITE_API_URL=http://localhost:5000/api
```

Start the dev server:

```bash
npm run dev
```

The site runs at `http://localhost:5173`.

## Admin Panel

Visit `http://localhost:5173/admin/login` and sign in with the `ADMIN_EMAIL` /
`ADMIN_PASSWORD` you set in `backend/.env` (seeded into the database by `npm run seed`).
From the dashboard you can filter leads by status, view lead details, update status, and
delete leads.

**Change the admin password** by updating `ADMIN_PASSWORD` in `.env` and re-running
`npm run seed` (it upserts the admin user).

## API Endpoints

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| GET | `/api/health` | — | Health check |
| POST | `/api/contact` | — | Submit a contact/lead form |
| GET | `/api/services` | — | List all services |
| GET | `/api/services/:slug` | — | Get one service |
| GET | `/api/industries` | — | List all industries |
| GET | `/api/industries/:slug` | — | Get one industry |
| GET | `/api/portfolio` | — | List all case studies |
| GET | `/api/portfolio/:slug` | — | Get one case study |
| POST | `/api/auth/login` | — | Admin login, returns JWT |
| GET | `/api/auth/me` | JWT | Current admin user |
| GET | `/api/admin/leads` | JWT | List leads (optional `?status=`) |
| GET | `/api/admin/leads/:id` | JWT | Get one lead |
| PATCH | `/api/admin/leads/:id` | JWT | Update lead status |
| DELETE | `/api/admin/leads/:id` | JWT | Delete a lead |

## Database Models (Prisma)

- **User** — admin account (name, email, passwordHash, role)
- **ContactLead** — form submissions (name, email, phone, company, service, budget, message, status, timestamps)
- **Service** — the 8 service pages (slug, title, hero copy, benefits, process, technologies, FAQs)
- **Industry** — the 7 industry pages (slug, title, hero copy, feature list)
- **Portfolio** — 6 sample case studies (problem, solution, features, technologies, results)

## Production Build

```bash
# Frontend
cd frontend
npm run build      # outputs to frontend/dist
npm run preview    # preview the production build locally

# Backend
cd backend
npm start
```

## Deployment (GitHub → Render + Vercel)

The backend + database go on **Render** (via `render.yaml`), the frontend on **Vercel**
(via `frontend/vercel.json`). Deploy the backend first — the frontend needs its URL.

### 1. Push to GitHub

Create an empty repo on GitHub (no README/.gitignore), then:

```bash
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

`.env` files are git-ignored — never commit them. Only `.env.example` is tracked.

### 2. Backend + database on Render

1. Render dashboard → **New → Blueprint** → pick the GitHub repo. It reads `render.yaml`
   and creates `srijan-api` (web service, root `backend/`) and `srijan-db` (PostgreSQL).
2. It will ask for the values marked `sync: false`:
   - `CLIENT_URL` — your Vercel URL, e.g. `https://srijan.vercel.app` (comma-separate
     several origins; you can fill this in after step 3 and redeploy)
   - `ADMIN_EMAIL` / `ADMIN_PASSWORD` — the admin panel login
3. `DATABASE_URL` and `JWT_SECRET` are wired up automatically. Each deploy runs
   `prisma migrate deploy` and the (idempotent) seed during the build.
4. Check `https://<your-service>.onrender.com/api/health` returns `{"success":true,...}`.

> Free-tier notes: the service sleeps after ~15 min idle (first request takes ~30–60 s),
> and free Render Postgres databases expire after 30 days — upgrade or point
> `DATABASE_URL` at Neon/Supabase for anything long-lived.

### 3. Frontend on Vercel

1. Vercel → **Add New → Project** → import the repo.
2. Set **Root Directory** to `frontend` (framework auto-detects as Vite).
3. Add environment variable `VITE_API_URL` = `https://<your-service>.onrender.com/api`.
4. Deploy. `vercel.json` rewrites all routes to `index.html` so deep links and refreshes
   on pages like `/services/website-development` work.
5. Copy the Vercel URL back into Render's `CLIENT_URL` (step 2) so CORS allows it.

`VITE_API_URL` is baked in at build time — redeploy on Vercel after changing it.

## Rebranding

All branding, contact info, social links and stats live in one file:
[`frontend/src/config/site.js`](frontend/src/config/site.js). Update it to rebrand the
site without touching component code. Marketing copy for services/industries/portfolio
lives in [`backend/prisma/seed.js`](backend/prisma/seed.js) — edit and re-run
`npm run seed` to update it.
