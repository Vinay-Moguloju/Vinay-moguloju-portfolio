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

## Local development setup (step by step)

Do these once, then use **Run everything daily** below.

### Step 1 — Docker Desktop

1. Install [Docker Desktop for Mac](https://www.docker.com/products/docker-desktop/).
2. Open it and wait until it says **Docker is running**.

### Step 2 — PostgreSQL (database + tables)

```bash
cd /Users/aishwaryachintaluru/Vinay-moguloju-portfolio
cp .env.example .env
./database/scripts/setup-postgres.sh
```

You should see rows from `portfolio_nav_content` and `portfolio_landing_page_content`.

**Reset DB (fresh migrations):**

```bash
docker compose down -v
./database/scripts/setup-postgres.sh
```

More detail: [database/README.md](database/README.md)

### Step 3 — Homebrew on your PATH (if `brew` not found)

Homebrew is often installed at `/opt/homebrew` but missing from PATH:

```bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zshrc
source ~/.zshrc
brew --version
```

### Step 4 — Java

Check:

```bash
java -version
```

Use **Java 21** (or 17+). Oracle JDK or Homebrew OpenJDK both work.

### Step 5 — Maven

```bash
brew install maven
mvn -v
```

If `mvn` is not found, use:

```bash
/opt/homebrew/bin/mvn -v
```

### Step 6 — Run the Java API

```bash
cd backend
export $(grep -v '^#' ../.env | xargs)
mvn spring-boot:run
```

Test in another terminal:

```bash
curl http://localhost:8080/api/portfolio-nav-content
curl http://localhost:8080/api/portfolio-landing-page-content
```

Backend details: [backend/README.md](backend/README.md)

### Step 7 — Run the React app

```bash
cd frontend
npm install
npm run setup:host   # one-time: custom dev hostname
npm run dev
```

Open **http://localhost.vinaykumar-portfolio.com:5173/** (or http://127.0.0.1:5173/)

---

## Run everything daily

Use **three terminals**:

| Terminal | Command |
|----------|---------|
| 1 — Database | `docker compose up -d postgres` |
| 2 — API | `cd backend && export $(grep -v '^#' ../.env \| xargs) && mvn spring-boot:run` |
| 3 — UI | `cd frontend && npm run dev` |

| Service | URL |
|---------|-----|
| Frontend | http://localhost.vinaykumar-portfolio.com:5173/ |
| API | http://localhost:8080/api |
| Postgres | `localhost:5432` / DB `portfolio_db` |

---

## Architecture

- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) — stack, APIs, database
- [docs/PROJECT_STRUCTURE.md](docs/PROJECT_STRUCTURE.md) — files by category

## Frontend (React)

**Requirements:** Node.js **20+** and npm.

| Script | Description |
|--------|-------------|
| `npm run dev` | Dev server |
| `npm run build` | Production build → `dist/` |
| `npm run lint` | ESLint |

`frontend/.env.development`:

```env
VITE_API_BASE_URL=http://localhost:8080/api
```

**Rule:** HTTP calls only in `frontend/src/dataservices/api/`, not in `webservices/`.

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

**GitHub Pages:** set repo variable `VITE_API_BASE_URL` to your hosted API (e.g. `https://your-api.railway.app/api`). Without it, the site uses static fallback copy.

## Deployment note

GitHub Pages hosts **only** the static React build. The live site does **not** use Postgres until you also deploy the API + hosted database and point `VITE_API_BASE_URL` at production.

## What to do next

1. Wire `frontend/src/dataservices/api/` to the new GET endpoints
2. Add more tables/APIs (about, work, skills, contact)
3. Host API + Postgres for production
