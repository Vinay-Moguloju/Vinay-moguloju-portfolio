# portfolio

Personal portfolio for **Vinay Moguloju** — React UI, Spring Boot REST API, and PostgreSQL (full-stack per [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)).

## Project status

| Part | Status |
|------|--------|
| Architecture docs | Done |
| React frontend (`frontend/`) | Done |
| PostgreSQL + Docker (`database/`) | Done |
| Java backend (`backend/`) | Done — nav + landing GET APIs |
| Frontend wired to API | Done — fetches API, falls back to `portfolioContent.ts` |

## Repository layout

```
Vinay-moguloju-portfolio/
├── backend/                   # Spring Boot REST API
├── database/                  # Per-feature SQL (nav / landing)
├── docker-compose.yml         # PostgreSQL 16
├── docs/
├── frontend/                  # React + Vite + TypeScript
└── README.md
```

**File guide:** [docs/PROJECT_STRUCTURE.md](docs/PROJECT_STRUCTURE.md)

---

## Run locally

Each part has its own guide:

| Part | README |
|------|--------|
| **Database** (Docker Postgres) | [database/README.md](database/README.md) |
| **Backend** (Spring Boot API) | [backend/README.md](backend/README.md) |
| **Frontend** (React + Vite) | [frontend/README.md](frontend/README.md) |

### Quick start (3 terminals)

**1 — Database** (repo root):

```bash
docker compose up -d postgres
```

First time only: `cp .env.example .env` then `./database/scripts/setup-postgres.sh`

**2 — Backend** (`backend/`):

```bash
export $(grep -v '^#' ../.env | xargs)
mvn spring-boot:run
```

**3 — Frontend** (`frontend/`):

```bash
npm run dev
```

| Service | URL |
|---------|-----|
| Frontend | http://localhost.vinaykumar-portfolio.com:5173/ |
| API | http://localhost:8080/api |
| Postgres | `localhost:5432` / `portfolio_db` |

### One-time tools

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- Java 21+: `java -version`
- Maven: `brew install maven` (if `brew` missing: `eval "$(/opt/homebrew/bin/brew shellenv)"`)

---

## Architecture

- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) — stack, APIs, database
- [docs/PROJECT_STRUCTURE.md](docs/PROJECT_STRUCTURE.md) — files by category

## PostgreSQL tables

| Table | React constant |
|-------|----------------|
| `portfolio_nav_content` | `PORTFOLIO_NAV_CONTENT` |
| `portfolio_landing_page_content` | `PORTFOLIO_LANDING_PAGE_CONTENT` |

## Backend API (v1)

| API | GET path | Optional query |
|-----|----------|----------------|
| portfolio-nav-content | `/api/portfolio-nav-content` | `?id=1` |
| portfolio-landing-page-content | `/api/portfolio-landing-page-content` | `?id=1` |

Request/response formats: [docs/API.md](docs/API.md)

**GitHub Pages + live DB:** deploy API to Render, set `VITE_API_BASE_URL`, redeploy Pages — **[docs/DEPLOY_PRODUCTION.md](docs/DEPLOY_PRODUCTION.md)** (step-by-step).

## Deployment note

GitHub Pages hosts **only** the static React build. For DB-driven content on the live site, follow [docs/DEPLOY_PRODUCTION.md](docs/DEPLOY_PRODUCTION.md).

## What to do next

1. **[Deploy API + Postgres for GitHub Pages](docs/DEPLOY_PRODUCTION.md)** — Render + `VITE_API_BASE_URL`
2. Add more tables/APIs (about, work, skills, contact)
