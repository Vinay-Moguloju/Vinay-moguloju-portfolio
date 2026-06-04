# Portfolio REST API (v1)

| Environment | Base URL |
|-------------|----------|
| Local | `http://localhost:8080/api` |
| Production | Your hosted API URL + `/api` (set `VITE_API_BASE_URL` in GitHub) |

---

## 1. portfolio-nav-content

Navigation copy for `PortfolioNav` / `PORTFOLIO_NAV_CONTENT`.

### Request

| Item | Value |
|------|--------|
| **Method** | `GET` |
| **Path** | `/api/portfolio-nav-content` |
| **Body** | None |

**Query parameters (optional)**

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | number (long) | No | Load a specific row by primary key. If omitted, returns the first row (`id` ascending). |

**Examples**

```bash
# Default — first nav row
curl "http://localhost:8080/api/portfolio-nav-content"

# Specific row
curl "http://localhost:8080/api/portfolio-nav-content?id=1"
```

### Response (200)

```json
{
  "hireMeLabel": "Hire me",
  "navBrandName": "Vinay Kumar Moguloju",
  "sectionLinks": [
    { "label": "About", "sectionId": "about" },
    { "label": "Work", "sectionId": "work" },
    { "label": "Skills", "sectionId": "skills" },
    { "label": "Contact", "sectionId": "contact" }
  ]
}
```

### Response (404)

```json
{
  "message": "Portfolio nav content was not found."
}
```

---

## 2. portfolio-landing-page-content

Landing copy for `PortfolioLandingPage` / `PORTFOLIO_LANDING_PAGE_CONTENT`.

### Request

| Item | Value |
|------|--------|
| **Method** | `GET` |
| **Path** | `/api/portfolio-landing-page-content` |
| **Body** | None |

**Query parameters (optional)**

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | number (long) | No | Load a specific row by primary key. If omitted, returns the first row (`id` ascending). |

**Examples**

```bash
# Default — first landing row
curl "http://localhost:8080/api/portfolio-landing-page-content"

# Specific row
curl "http://localhost:8080/api/portfolio-landing-page-content?id=1"
```

### Response (200)

```json
{
  "availabilityBadge": "Open to senior Fullstack opportunities",
  "headlineAccent": "Builds Things",
  "headlineDisplayName": "Mr.Moguloju",
  "headlineMuted": "That Matter.",
  "intro": "Senior Fullstack Engineer building scalable SPAs and micro-frontends across e-commerce, retail, and telecom — focused on React, Next.js, performance, and WCAG 2.1 AA accessibility.",
  "primaryActionLabel": "View my work",
  "roleWords": [
    "Senior Fullstack",
    "React / Next.js",
    "Micro-Frontends"
  ],
  "secondaryActionLabel": "Hire me"
}
```

### Response (404)

```json
{
  "message": "Portfolio landing page content was not found."
}
```

---

## Local vs GitHub Pages

| Piece | Local | GitHub Pages |
|-------|--------|----------------|
| React UI | `npm run dev` | Static site from `frontend/dist` |
| Java API | `mvn spring-boot:run` on your Mac | **Not on GitHub Pages** — host API separately (Railway, Render, etc.) |
| Postgres | Docker on your Mac | Hosted DB in production |

The React app uses `VITE_API_BASE_URL`:

- **Local:** `http://localhost:8080/api` (in `frontend/.env.development`)
- **Production:** set GitHub repo variable `VITE_API_BASE_URL` to your public API URL before deploy

If the API is unreachable, the UI falls back to `portfolioContent.ts` so the site still works on GitHub Pages.

### GitHub production API URL

1. Deploy `backend/` + Postgres to a host (e.g. Railway).
2. In GitHub: **Settings → Secrets and variables → Actions → Variables**
3. Add `VITE_API_BASE_URL` = `https://your-api.example.com/api`
4. Push to `master` — the Pages workflow passes it into `npm run build`.

Ensure production CORS includes `https://vinay-moguloju.github.io` (already in `application.yml`).
