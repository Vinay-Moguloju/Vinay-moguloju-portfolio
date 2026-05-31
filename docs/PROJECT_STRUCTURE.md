# Project structure (by category)

This document groups every project file by **category** and **purpose**. Use it to navigate the repo and know where to add new code.

---

## Repository overview

```
Vinay-moguloju-portfolio/
├── docs/                    # Documentation
├── frontend/                # React UI (implemented)
├── backend/                 # Spring Boot API (planned)
├── .gitignore               # Repo-wide ignore rules
└── README.md                # Quick start
```

| Category | Path | Purpose |
|----------|------|---------|
| **Documentation** | `docs/` | Architecture, structure guides |
| **Frontend** | `frontend/` | React + Vite application |
| **Backend** | `backend/` | Java REST API (not created yet) |
| **Tooling** | `.tools/` | Local Node binary (gitignored; optional) |

---

## Documentation (`docs/`)

| File | Type | Purpose |
|------|------|---------|
| [ARCHITECTURE.md](ARCHITECTURE.md) | System design | Stack, DB schema, APIs, dependencies, dev workflow |
| [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) | Reference | This file — categorized file map |

---

## Frontend (`frontend/`)

### Category map

| Category | Folder | Purpose | Rules |
|----------|--------|---------|-------|
| **Build & config** | Root (`package.json`, `vite.config.ts`, `tsconfig*.json`) | Tooling, scripts, path aliases | No app logic |
| **Environment** | `.env.development` | API base URL for local dev | No secrets in git |
| **Public static** | `public/` | Files served as-is (favicon, icons) | No imports from `src/` |
| **App shell** | `src/app/` | Router, top-level layout wiring | Imports pages from `webservices` |
| **Global styles** | `src/styles/` | Site-wide CSS variables and resets | Not page-specific |
| **UI layer** | `src/webservices/` | Pages, components, layouts, UI assets | **No** HTTP / Axios |
| **Data layer** | `src/dataservices/` | API client, config, TypeScript types | **No** JSX / page layout |
| **Entry** | `src/main.tsx` | React DOM bootstrap | Minimal code only |

### Path aliases (imports)

| Alias | Points to | Example |
|-------|-----------|---------|
| `@app` | `src/app/` | `import App from '@app/App'` |
| `@webservices` | `src/webservices/` | `import { HomePage } from '@webservices/pages/home/HomePage'` |
| `@dataservices` | `src/dataservices/` | `import { apiClient } from '@dataservices/api'` |
| `@styles` | `src/styles/` | `import '@styles/global.css'` |
| `@` | `src/` | General fallback |

---

### Build & configuration (frontend root)

| File | Purpose |
|------|---------|
| `package.json` | Dependencies and npm scripts (`dev`, `build`, `lint`, `preview`) |
| `package-lock.json` | Locked dependency versions |
| `vite.config.ts` | Vite dev server, React plugin, path aliases |
| `tsconfig.json` | TypeScript project references |
| `tsconfig.app.json` | App source compiler options + path mapping |
| `tsconfig.node.json` | Vite config file compiler options |
| `eslint.config.js` | ESLint rules for TS/React |
| `index.html` | HTML shell; loads `src/main.tsx` |
| `.env.development` | `VITE_API_BASE_URL` for dataservices |
| `.gitignore` | Ignores `node_modules`, `dist`, logs |

---

### Public assets (`frontend/public/`)

| File | Purpose |
|------|---------|
| `favicon.svg` | Browser tab icon |
| `icons.svg` | Sprite sheet for UI icons (docs, social) |

---

### Application shell (`frontend/src/app/`)

| File | Purpose |
|------|---------|
| `App.tsx` | Root component; wraps `BrowserRouter` |
| `routes.tsx` | Route table (`path` → page component) |

---

### Global styles (`frontend/src/styles/`)

| File | Purpose |
|------|---------|
| `global.css` | CSS variables, `#root` layout, typography (imported in `main.tsx`) |

---

### UI layer — webservices (`frontend/src/webservices/`)

| Path | Purpose |
|------|---------|
| `pages/home/HomePage.tsx` | Home route (`/`) — Vite + React starter UI |
| `pages/home/HomePage.css` | Styles scoped to `HomePage` |
| `assets/react.svg` | React logo (bundled import) |
| `assets/vite.svg` | Vite logo (bundled import) |
| `assets/hero.png` | Optional hero image (if present) |
| `components/` | Reusable UI pieces (Button, Card, Navbar) — *add here* |
| `layouts/` | Page wrappers (header/footer shells) — *add here* |

---

### Data layer — dataservices (`frontend/src/dataservices/`)

| Path | Purpose |
|------|---------|
| `config/constants.ts` | `API_BASE_URL` from Vite env |
| `api/client.ts` | Shared Axios instance + error handling |
| `api/index.ts` | Re-exports API utilities |
| `types/index.ts` | Shared TypeScript types / DTOs |
| `api/profileApi.ts` | *Planned* — GET profile |
| `api/projectsApi.ts` | *Planned* — GET projects |
| `api/skillsApi.ts` | *Planned* — GET skills |
| `api/experienceApi.ts` | *Planned* — GET experience |
| `api/contactApi.ts` | *Planned* — POST contact |

---

### Entry point

| File | Purpose |
|------|---------|
| `src/main.tsx` | Mounts React app; imports global CSS and `App` |

---

### Generated / not committed

| Path | Purpose |
|------|---------|
| `frontend/node_modules/` | Installed npm packages |
| `frontend/dist/` | Production build output |
| `.tools/` | Local Node.js toolchain (optional) |

---

## Backend (`backend/`) — planned

| Category | Path | Purpose |
|----------|------|---------|
| Build | `pom.xml` | Maven dependencies |
| Config | `src/main/resources/application.yml` | DB URL, server port |
| Migrations | `src/main/resources/db/migration/` | Flyway SQL |
| API | `src/main/java/.../controller/` | REST controllers |
| Domain | `entity/`, `repository/`, `service/`, `dto/` | JPA and business logic |

See [ARCHITECTURE.md](ARCHITECTURE.md) for the full backend layout.

---

## Where to add new files

| You are building… | Add file under… |
|-------------------|-----------------|
| A new page | `frontend/src/webservices/pages/<name>/` |
| A reusable button/card | `frontend/src/webservices/components/` |
| A shared header/footer shell | `frontend/src/webservices/layouts/` |
| A new API call | `frontend/src/dataservices/api/<name>Api.ts` |
| A DTO / response type | `frontend/src/dataservices/types/` |
| A new route | `frontend/src/app/routes.tsx` |
| REST endpoint | `backend/.../controller/` (when backend exists) |
| DB table change | `backend/.../db/migration/V2__....sql` |

---

## Related docs

- [ARCHITECTURE.md](ARCHITECTURE.md) — technical stack and API design
- [README.md](../README.md) — install and run commands
