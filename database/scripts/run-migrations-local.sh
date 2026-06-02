#!/usr/bin/env bash
# Applies portfolio_nav_content then portfolio_landing_page_content migrations via local psql.
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
cd "$ROOT_DIR"

if [[ ! -f .env ]]; then
  echo "Missing .env — run: cp .env.example .env" >&2
  exit 1
fi

# shellcheck disable=SC1091
source .env

PSQL_BIN="${PSQL_BIN:-psql}"
export DATABASE_ROOT="${ROOT_DIR}/database"
export POSTGRES_DB
export POSTGRES_USER

run_feature_migrations() {
  local feature_folder_name=$1
  local migrations_dir="${DATABASE_ROOT}/${feature_folder_name}/migrations"

  local migration_file
  for migration_file in "${migrations_dir}"/*.sql; do
    echo "Applying ${feature_folder_name}/$(basename "${migration_file}")..."
    PGPASSWORD="${POSTGRES_PASSWORD:-}" "${PSQL_BIN}" \
      -d "${POSTGRES_DB}" \
      -h localhost \
      -U "${POSTGRES_USER}" \
      -f "${migration_file}" \
      || PGPASSWORD="${POSTGRES_PASSWORD:-}" "${PSQL_BIN}" \
        -d "${POSTGRES_DB}" \
        -f "${migration_file}"
  done
}

run_feature_migrations portfolio_nav_content
run_feature_migrations portfolio_landing_page_content
