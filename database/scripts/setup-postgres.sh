#!/usr/bin/env bash
# One-command PostgreSQL setup for the portfolio (Docker preferred).
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
cd "$ROOT_DIR"

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

log() { echo -e "${GREEN}==>${NC} $*"; }
warn() { echo -e "${YELLOW}==>${NC} $*"; }
fail() { echo -e "${RED}ERROR:${NC} $*" >&2; exit 1; }

if [[ ! -f .env ]]; then
  log "Creating .env from .env.example"
  cp .env.example .env
  warn "Using default password in .env — change POSTGRES_PASSWORD for anything beyond local dev."
fi

# shellcheck disable=SC1091
source .env

setup_with_docker() {
  log "Starting PostgreSQL with Docker Compose..."
  docker compose up -d postgres

  log "Waiting for database to be healthy (up to 60s)..."
  for _ in $(seq 1 60); do
    if docker compose exec -T postgres pg_isready -U "${POSTGRES_USER}" -d "${POSTGRES_DB}" >/dev/null 2>&1; then
      break
    fi
    sleep 1
  done

  docker compose exec -T postgres pg_isready -U "${POSTGRES_USER}" -d "${POSTGRES_DB}" \
    || fail "Postgres did not become ready. Run: docker compose logs postgres"

  log "Verifying tables and seed data..."
  docker compose exec -T postgres psql -U "${POSTGRES_USER}" -d "${POSTGRES_DB}" <<'SQL'
\dt portfolio_*_content
SELECT 'portfolio_nav_content' AS table_name, id, hire_me_label, section_links FROM portfolio_nav_content;
SELECT 'portfolio_landing_page_content' AS table_name, id, availability_badge, headline_accent, headline_muted FROM portfolio_landing_page_content;
SQL

  echo ""
  log "Done. Postgres is running in Docker."
  echo "  Connect: docker compose exec postgres psql -U ${POSTGRES_USER} -d ${POSTGRES_DB}"
  echo "  Stop:    docker compose down"
  echo "  Reset:   docker compose down -v && ./database/scripts/setup-postgres.sh"
}

setup_with_local_psql() {
  local psql_bin="${PSQL_BIN:-psql}"
  local createdb_bin="${CREATEDB_BIN:-createdb}"

  log "Using local PostgreSQL (${psql_bin})..."

  if ! command -v "${createdb_bin}" >/dev/null 2>&1; then
    fail "createdb not found. Install Postgres or use Docker Desktop."
  fi

  if ! "${createdb_bin}" "${POSTGRES_DB}" 2>/dev/null; then
    warn "Database ${POSTGRES_DB} may already exist (that's OK)."
  fi

  PSQL_BIN="${psql_bin}" POSTGRES_DB="${POSTGRES_DB}" POSTGRES_USER="${POSTGRES_USER:-$(whoami)}" \
    ./database/scripts/run-migrations-local.sh

  log "Verifying tables..."
  PGPASSWORD="${POSTGRES_PASSWORD:-}" "${psql_bin}" -d "${POSTGRES_DB}" -c '\dt portfolio_*_content'
  PGPASSWORD="${POSTGRES_PASSWORD:-}" "${psql_bin}" -d "${POSTGRES_DB}" -c 'SELECT * FROM portfolio_nav_content;'
  PGPASSWORD="${POSTGRES_PASSWORD:-}" "${psql_bin}" -d "${POSTGRES_DB}" -c 'SELECT id, availability_badge, headline_accent, headline_muted FROM portfolio_landing_page_content;'

  log "Done. Local Postgres is ready."
}

print_install_help() {
  fail "$(cat <<EOF

Neither Docker nor psql was found on this Mac.

Easiest path — install Docker Desktop, then run this script again:

  1. Download: https://www.docker.com/products/docker-desktop/
  2. Open Docker Desktop and wait until it says "Docker is running"
  3. In Terminal:

     cd ${ROOT_DIR}
     ./database/scripts/setup-postgres.sh

Alternative — Homebrew Postgres (no Docker):

  brew install postgresql@16
  brew services start postgresql@16
  echo 'export PATH="/opt/homebrew/opt/postgresql@16/bin:\$PATH"' >> ~/.zshrc
  source ~/.zshrc
  ./database/scripts/setup-postgres.sh

EOF
)"
}

if command -v docker >/dev/null 2>&1; then
  setup_with_docker
elif command -v psql >/dev/null 2>&1; then
  setup_with_local_psql
else
  # Homebrew postgres often not on PATH until linked
  for candidate in \
    /opt/homebrew/opt/postgresql@16/bin/psql \
    /usr/local/opt/postgresql@16/bin/psql \
    /opt/homebrew/opt/postgresql/bin/psql; do
    if [[ -x "${candidate}" ]]; then
      export PATH="$(dirname "${candidate}"):${PATH}"
      setup_with_local_psql
      exit 0
    fi
  done
  print_install_help
fi
