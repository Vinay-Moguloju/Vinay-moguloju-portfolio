# Deploy portfolio API + Postgres for GitHub Pages

GitHub Pages hosts **only** the React app. To load nav/landing text from Postgres on  
https://vinay-moguloju.github.io/Vinay-moguloju-portfolio/ you must:

1. Deploy the **Java API + Postgres** to Render (free tier)
2. Set GitHub variable **`VITE_API_BASE_URL`**
3. Redeploy GitHub Pages

---

## Part 1 — Deploy API + Postgres on Render (~10 min)

### 1. Push this repo to GitHub

Make sure `master` has the latest code (Dockerfile, `render.yaml`, Flyway migrations).

### 2. Create a Render account

Sign up at [render.com](https://render.com) (free tier works).

### 3. Deploy from Blueprint

1. Render Dashboard → **New** → **Blueprint**
2. Connect your GitHub repo `Vinay-moguloju-portfolio`
3. Render reads `render.yaml` and creates:
   - **portfolio-db** — PostgreSQL
   - **portfolio-api** — Spring Boot Docker service
4. Click **Apply** and wait until **portfolio-api** status is **Live** (first deploy ~5–10 min)

### 4. Copy your API URL

Open **portfolio-api** → note the public URL, e.g.:

```text
https://portfolio-api-xxxx.onrender.com
```

### 5. Test the API

```bash
curl https://portfolio-api-xxxx.onrender.com/api/portfolio-nav-content
curl https://portfolio-api-xxxx.onrender.com/api/portfolio-landing-page-content
```

You should get JSON (not 404).  
First request after idle may take ~30s (free tier cold start).

---

## Part 2 — Set GitHub variable (~2 min)

1. GitHub repo → **Settings** → **Secrets and variables** → **Actions** → **Variables** tab
2. **New repository variable**
   - **Name:** `VITE_API_BASE_URL`
   - **Value:** `https://portfolio-api-xxxx.onrender.com/api`  
     (replace with **your** Render URL + `/api` — must be `https://`, must end with `/api`)
3. Save

---

## Part 3 — Redeploy GitHub Pages

Push any commit to `master`, or:

1. GitHub → **Actions** → **Deploy portfolio to GitHub Pages** → **Run workflow**

Wait for the workflow to finish.

### Verify production

1. Open https://vinay-moguloju.github.io/Vinay-moguloju-portfolio/
2. Hard refresh (Cmd+Shift+R)
3. DevTools → **Network** → filter **Fetch/XHR**
4. Requests should go to `https://portfolio-api-xxxx.onrender.com/api/...` (not `github.io`)
5. Status **200** with JSON in **Response**

---

## How it fits together

```text
Browser (GitHub Pages)
  → https://portfolio-api-xxxx.onrender.com/api/portfolio-nav-content
  → Spring Boot on Render
  → Postgres on Render (Flyway migrations on startup)
```

| Environment | `VITE_API_BASE_URL` |
|-------------|---------------------|
| Local dev | `http://localhost:8080/api` (`.env.development`) |
| GitHub Pages | `https://YOUR-RENDER-URL.onrender.com/api` (GitHub variable) |

---

## Troubleshooting

### Still 404 to `github.io/portfolio-nav-content`

- GitHub variable not set or wrong — must be full `https://.../api`
- Redeploy Pages **after** setting the variable
- Hard refresh the browser

### API 502 / timeout on Render

- Free tier sleeps after ~15 min idle — retry after 30s
- Check **portfolio-api** logs in Render dashboard

### CORS error in browser

- `PORTFOLIO_CORS_ALLOWED_ORIGINS` must include `https://vinay-moguloju.github.io` (set in `render.yaml`)

### Database empty / 404 from API

- Check Render logs for Flyway errors
- Redeploy **portfolio-api** (migrations run on startup)

---

## Alternative: Railway

1. [railway.app](https://railway.app) → New project → **Deploy from GitHub repo**
2. Add **PostgreSQL** plugin → link to service
3. Set service **Root Directory** = `backend`, use **Dockerfile**
4. Variables:
   - `SPRING_PROFILES_ACTIVE=production`
   - `PORTFOLIO_CORS_ALLOWED_ORIGINS=https://vinay-moguloju.github.io`
   - `DATABASE_URL` (auto from Postgres plugin)
5. Copy public URL → set GitHub `VITE_API_BASE_URL=https://YOUR-APP.up.railway.app/api`

---

## Local vs production summary

| | Local | Production |
|--|--------|------------|
| UI | `npm run dev` | GitHub Pages |
| API | `mvn spring-boot:run` | Render / Railway |
| DB | Docker `postgres` | Render / Railway Postgres |
| Content source | API → local Postgres | API → cloud Postgres |
