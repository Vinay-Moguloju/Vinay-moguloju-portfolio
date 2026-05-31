# Webservices (UI layer)

**Category:** Presentation  
**Purpose:** Everything the user sees and interacts with.

| Subfolder | Purpose |
|-----------|---------|
| `pages/` | Full screens (e.g. `pages/home/`) |
| `components/` | Reusable UI (buttons, cards, nav) |
| `layouts/` | Shared page shells (header, footer) |
| `assets/` | Images and icons imported into components |

**Do not** import Axios or call `fetch` here. Load data in pages via `dataservices/api/*`, then pass props to child components.
