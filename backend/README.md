# Portfolio backend (Spring Boot)

Java REST API for the portfolio. Package folders mirror `database/` and React content modules.

## Structure

```
backend/
├── pom.xml
└── src/main/java/com/vinaymoguloju/portfolio/
    ├── PortfolioApplication.java
    ├── config/                          # CORS, shared web config
    ├── common/exception/                # API error handling
    ├── portfolio_nav_content/           # PORTFOLIO_NAV_CONTENT / PortfolioNav
    │   ├── controller/
    │   ├── dto/
    │   ├── entity/
    │   ├── repository/
    │   └── service/
    └── portfolio_landing_page_content/  # PORTFOLIO_LANDING_PAGE_CONTENT / PortfolioLandingPage
        ├── controller/
        ├── dto/
        ├── entity/
        ├── repository/
        └── service/
```

## API endpoints (v1)

| API name | Method | Path | Optional query | React source |
|----------|--------|------|----------------|--------------|
| portfolio-nav-content | GET | `/api/portfolio-nav-content` | `id` | `PORTFOLIO_NAV_CONTENT` |
| portfolio-landing-page-content | GET | `/api/portfolio-landing-page-content` | `id` | `PORTFOLIO_LANDING_PAGE_CONTENT` |

Full request/response examples: [docs/API.md](../docs/API.md)

---

## Run locally

### Prerequisites

- **PostgreSQL** running — see [database/README.md](../database/README.md)
- **Java 21** (or 17+): `java -version`
- **Maven**: `mvn -v` (install with `brew install maven` if needed)
- Repo root `.env` with DB credentials

### Start backend

**Terminal 1** — database (repo root, if not already running):

```bash
cd /path/to/Vinay-moguloju-portfolio
docker compose up -d postgres
```

**Terminal 2** — Spring Boot API:

```bash
cd backend
export $(grep -v '^#' ../.env | xargs)
mvn spring-boot:run
```

Wait for:

```text
Tomcat started on port 8080
```

### Test APIs

In another terminal:

```bash
curl http://localhost:8080/api/portfolio-nav-content
curl http://localhost:8080/api/portfolio-landing-page-content
```

With optional row id:

```bash
curl "http://localhost:8080/api/portfolio-nav-content?id=1"
curl "http://localhost:8080/api/portfolio-landing-page-content?id=1"
```

### Stop backend

Press **Ctrl+C** in the terminal where `mvn spring-boot:run` is running.

---

## Troubleshooting

### Port 8080 already in use

Another process (often a previous `mvn spring-boot:run`) is still running:

```bash
lsof -i :8080
kill <PID>
```

Then run `mvn spring-boot:run` again.

Or use another port:

```bash
SERVER_PORT=8081 mvn spring-boot:run
```

Update `frontend/.env.development`:

```env
VITE_API_BASE_URL=http://localhost:8081/api
```

### Cannot connect to database

1. Confirm Postgres is up: `docker compose ps` (from repo root)
2. Check `.env` matches `SPRING_DATASOURCE_*` values
3. Re-run [database setup](../database/README.md) if tables are missing

### Browser shows red X but status 200 (no response body)

Usually **CORS** — the API responded but the browser blocked the response. Restart the backend after pulling latest `PortfolioWebCorsConfig`. In DevTools → Network → select the request → **Headers** → look for `Access-Control-Allow-Origin`.

Your frontend origin must be listed in `application.yml` under `portfolio.cors.allowed-origins` (e.g. `http://localhost.vinaykumar-portfolio.com:5173`).

---

## Configuration

`src/main/resources/application.yml` reads:

| Variable | Default |
|----------|---------|
| `SPRING_DATASOURCE_URL` | `jdbc:postgresql://localhost:5432/portfolio_db` |
| `SPRING_DATASOURCE_USERNAME` | `portfolio_user` |
| `SPRING_DATASOURCE_PASSWORD` | `change_me_locally` |

Flyway is **disabled** in the backend — schema is owned by `database/` Docker migrations.

| Service | Local URL |
|---------|-----------|
| API base | http://localhost:8080/api |

---

## Next step

Start the React UI — see [frontend/README.md](../frontend/README.md).
