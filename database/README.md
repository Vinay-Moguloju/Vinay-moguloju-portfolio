# Portfolio PostgreSQL

Each React content area has its own folder and migrations. Nav and landing are **never combined** in one SQL file.

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

## Quick start

```bash
./database/scripts/setup-postgres.sh
```

Requires [Docker Desktop](https://www.docker.com/products/docker-desktop/) (or local Postgres via Homebrew).

### Verify

```bash
docker compose exec postgres psql -U portfolio_user -d portfolio_db
```

```sql
SELECT * FROM portfolio_nav_content;
SELECT * FROM portfolio_landing_page_content;
```

## Reset (new schema)

```bash
docker compose down -v
./database/scripts/setup-postgres.sh
```

## Connection

| Setting | Default |
|---------|---------|
| Host | `localhost` |
| Port | `5432` |
| Database | `portfolio_db` |
| User | `portfolio_user` |
| Password | `POSTGRES_PASSWORD` in `.env` |

JDBC: `jdbc:postgresql://localhost:5432/portfolio_db`
