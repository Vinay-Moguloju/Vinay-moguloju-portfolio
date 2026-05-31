# Frontend

React 18 + Vite 5 + TypeScript portfolio UI.

## Source layout (by category)

| Category | Folder | Purpose |
|----------|--------|---------|
| Entry | `src/main.tsx` | Bootstrap React |
| App shell | `src/app/` | Router (`routes.tsx`, `App.tsx`) |
| Global styles | `src/styles/` | `global.css` |
| UI | `src/webservices/` | Pages, components, layouts, assets |
| Data | `src/dataservices/` | API client, config, types |

See [../docs/PROJECT_STRUCTURE.md](../docs/PROJECT_STRUCTURE.md) for the full file map.

## Commands

```bash
npm install
npm run setup:host   # one-time (password required)
npm run dev          # http://localhost.vinaykumar-portfolio.com:5173
npm run build
npm run lint
```

## Import aliases

`@app`, `@webservices`, `@dataservices`, `@styles` — configured in `vite.config.ts`.
