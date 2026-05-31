# portfolio

Personal portfolio for **Vinay Moguloju** — React UI, Spring Boot REST API, and PostgreSQL (full-stack per [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)).

## Project status

| Part | Status |
|------|--------|
| Architecture docs | Done |
| React frontend (`frontend/`) | Done — Vite 5 + React 18 starter running locally |
| Java backend (`backend/`) | Not started |
| PostgreSQL + Flyway | Not started (schema defined in architecture doc) |

## Repository layout

```
Vinay-moguloju-portfolio/
├── docs/
│   ├── ARCHITECTURE.md        # System design
│   └── PROJECT_STRUCTURE.md   # Files by category & purpose
├── frontend/                  # React + Vite + TypeScript
│   └── src/
│       ├── app/               # Router & shell
│       ├── webservices/       # UI (pages, components, assets)
│       ├── dataservices/      # API client & types
│       └── styles/            # Global CSS
├── backend/                   # (planned) Spring Boot
└── README.md
```

**File guide:** [docs/PROJECT_STRUCTURE.md](docs/PROJECT_STRUCTURE.md) — every folder explained by category.

## Architecture

- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) — stack, APIs, database, dependencies
- [docs/PROJECT_STRUCTURE.md](docs/PROJECT_STRUCTURE.md) — **every file by category and purpose**

## Frontend (React)

**Requirements:** Node.js **20 LTS** (or newer) and npm.

### Install and run

```bash
cd frontend
npm install
npm run setup:host   # one-time: maps localhost.vinaykumar-portfolio.com → 127.0.0.1
npm run dev
```

Open **http://localhost.vinaykumar-portfolio.com:5173/** — blank white starter page (portfolio content to be added).

If the custom URL is not set up yet, `npm run dev` prints instructions. You can also use **http://127.0.0.1:5173/** as a fallback.

### npm scripts

| Script | Description |
|--------|-------------|
| `npm run setup:host` | One-time `/etc/hosts` entry for the dev URL |
| `npm run dev` | Dev server at http://localhost.vinaykumar-portfolio.com:5173 |
| `npm run build` | Type-check + production build to `dist/` |
| `npm run preview` | Preview production build |
| `npm run lint` | ESLint |

### Frontend structure (by category)

| Category | Path | Role |
|----------|------|------|
| App shell | `src/app/` | `App.tsx`, `routes.tsx` |
| UI | `src/webservices/pages/home/` | `HomePage.tsx` + `HomePage.css` |
| UI assets | `src/webservices/assets/` | Logos, images |
| API | `src/dataservices/api/` | Axios `client.ts` |
| Config | `src/dataservices/config/` | `constants.ts` (API URL) |
| Types | `src/dataservices/types/` | Shared DTO types |
| Global CSS | `src/styles/global.css` | Site-wide variables |

**Rule:** No `fetch`/Axios in `webservices/` — all HTTP calls go in `dataservices/api/`.

### Environment

`frontend/.env.development`:

```env
VITE_API_BASE_URL=http://localhost:8080/api
```

Used when the Spring Boot backend is running on port **8080**.

### Tech versions (installed)

- React 18, Vite 5, TypeScript 5.6
- react-router-dom 6, axios 1.7

## Backend (planned)

Not scaffolded yet. When added:

```bash
cd backend
mvn spring-boot:run
```

API base: `http://localhost:8080/api` — see [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for endpoints and PostgreSQL setup.

## What to do next

1. Scaffold Spring Boot `backend/` with Flyway migrations
2. Add `dataservices/api/profileApi.ts`, `projectsApi.ts`, etc.
3. Replace starter `HomePage` with portfolio pages (About, Projects, Contact)
