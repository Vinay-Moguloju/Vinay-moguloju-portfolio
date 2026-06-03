# Portfolio PostgreSQL

Each React content area has its own folder and migrations. Nav and landing are **never combined** in one SQL file.

## Folder layout

```
database/
├── 00-run-migrations.sh              # Docker: runs nav, then landing
├── portfolio_nav_content/
│   └── migrations/
│       ├── 001_create_portfolio_nav_content.sql
│       └── 002_seed_portfolio_nav_content.sql
├── portfolio_landing_page_content/
│   └── migrations/
│       ├── 001_create_portfolio_landing_page_content.sql
│       └── 002_seed_portfolio_landing_page_content.sql
└── scripts/
    ├── setup-postgres.sh
    └── run-migrations-local.sh     # Homebrew Postgres only
```

| Folder | Table | React constant | Component |
|--------|-------|----------------|-----------|
| `portfolio_nav_content/` | `portfolio_nav_content` | `PORTFOLIO_NAV_CONTENT` | `PortfolioNav` |
| `portfolio_landing_page_content/` | `portfolio_landing_page_content` | `PORTFOLIO_LANDING_PAGE_CONTENT` | `PortfolioLandingPage` |

---

## Run locally

### Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and **running**
- Repo root `.env` (copy from `.env.example` once)

### First-time setup

From the **repository root**:

```bash
cp .env.example .env
./database/scripts/setup-postgres.sh
```

This starts Postgres, runs migrations, and prints seed rows from both tables.

### Start database (every day)

From the **repository root**:

```bash
docker compose up -d postgres
```

Check status:

```bash
docker compose ps
```

`portfolio-postgres` should be **running** / **healthy**.

### Verify data

```bash
docker compose exec postgres psql -U portfolio_user -d portfolio_db
```

```sql
SELECT * FROM portfolio_nav_content;
SELECT * FROM portfolio_landing_page_content;
\q
```

### Stop database

From the **repository root**:

```bash
docker compose down
```

Keeps data. To wipe and recreate from migrations:

```bash
docker compose down -v
./database/scripts/setup-postgres.sh
```

---

## Connection details

| Setting | Default |
|---------|---------|
| Host | `localhost` |
| Port | `5432` (`POSTGRES_PORT` in `.env`) |
| Database | `portfolio_db` |
| User | `portfolio_user` |
| Password | `POSTGRES_PASSWORD` in `.env` |

JDBC (used by `backend/`):

```
jdbc:postgresql://localhost:5432/portfolio_db
```

---

## Next step

Start the Java API — see [backend/README.md](../backend/README.md).
