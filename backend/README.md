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

## Run locally

**1.** Postgres must be running (repo root):

```bash
docker compose up -d postgres
```

**2.** Load credentials from repo `.env` and start the API:

```bash
cd backend
export $(grep -v '^#' ../.env | xargs)
mvn spring-boot:run
```

**3.** Test:

```bash
curl http://localhost:8080/api/portfolio-nav-content
curl "http://localhost:8080/api/portfolio-nav-content?id=1"
curl http://localhost:8080/api/portfolio-landing-page-content
curl "http://localhost:8080/api/portfolio-landing-page-content?id=1"
```

## Configuration

`src/main/resources/application.yml` reads:

| Variable | Default |
|----------|---------|
| `SPRING_DATASOURCE_URL` | `jdbc:postgresql://localhost:5432/portfolio_db` |
| `SPRING_DATASOURCE_USERNAME` | `portfolio_user` |
| `SPRING_DATASOURCE_PASSWORD` | `change_me_locally` |

Flyway is **disabled** here — schema is owned by `database/` Docker migrations.
