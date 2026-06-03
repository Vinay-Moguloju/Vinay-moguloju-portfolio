# Frontend

React 18 + Vite 5 + TypeScript portfolio UI.

## Source layout (by category)

| Category | Folder | Purpose |
|----------|--------|---------|
| Entry | `src/main.tsx` | Bootstrap React |
| App shell | `src/app/` | Router (`routes.tsx`, `App.tsx`) |
| Global styles | `src/styles/` | Tailwind, SCSS, theme |
| UI | `src/webservices/` | Pages, components, layouts, assets |
| Data | `src/dataservices/` | API client, config, types, hooks |

See [../docs/PROJECT_STRUCTURE.md](../docs/PROJECT_STRUCTURE.md) for the full file map.

---

## Run locally

### Prerequisites

- **Node.js 20+** and npm
- **API + database** (optional but recommended for live DB content):
  - [database/README.md](../database/README.md) — start Postgres
  - [backend/README.md](../backend/README.md) — start Spring Boot on port 8080

Without the API, the UI falls back to static copy in `portfolioContent.ts`.

### First-time setup

```bash
cd frontend
npm install
npm run setup:host   # one-time: maps localhost.vinaykumar-portfolio.com → 127.0.0.1
```

### Start frontend (every day)

**Recommended:** run database and backend first (see linked READMEs above).

```bash
cd frontend
npm run dev
```

Open:

- http://localhost.vinaykumar-portfolio.com:5173/
- or http://127.0.0.1:5173/

### Environment

`frontend/.env.development`:

```env
VITE_API_BASE_URL=http://localhost:8080/api
```

Change this if the backend runs on a different port (e.g. `8081`).

### Other commands

| Command | Description |
|---------|-------------|
| `npm run build` | Type-check + production build → `dist/` |
| `npm run preview` | Preview production build |
| `npm run lint` | ESLint |

### Stop frontend

Press **Ctrl+C** in the terminal where `npm run dev` is running.

---

## Full local stack (3 terminals)

| Terminal | Where | Command |
|----------|-------|---------|
| 1 — Database | repo root | `docker compose up -d postgres` |
| 2 — API | `backend/` | `export $(grep -v '^#' ../.env \| xargs) && mvn spring-boot:run` |
| 3 — UI | `frontend/` | `npm run dev` |

| Service | URL |
|---------|-----|
| Frontend | http://localhost.vinaykumar-portfolio.com:5173/ |
| API | http://localhost:8080/api |
| Postgres | `localhost:5432` / `portfolio_db` |

---

## Import aliases

`@`, `@app`, `@webservices`, `@dataservices`, `@styles` — configured in `vite.config.ts`.

**Rule:** No `fetch`/Axios in `webservices/` — use `src/dataservices/api/*` and hooks.
