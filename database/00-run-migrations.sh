#!/usr/bin/env bash
# Runs feature migrations in order (Docker init + local setup reuse this layout).
set -euo pipefail

DATABASE_ROOT="${DATABASE_ROOT:-/docker-entrypoint-initdb.d}"

run_feature_migrations() {
  local feature_folder_name=$1
  local migrations_dir="${DATABASE_ROOT}/${feature_folder_name}/migrations"

  if [[ ! -d "${migrations_dir}" ]]; then
    echo "Missing migrations directory: ${migrations_dir}" >&2
    exit 1
  fi

  local migration_file
  for migration_file in "${migrations_dir}"/*.sql; do
    echo "Applying ${feature_folder_name}/$(basename "${migration_file}")..."
    psql -v ON_ERROR_STOP=1 \
      --dbname "${POSTGRES_DB}" \
      --username "${POSTGRES_USER}" \
      -f "${migration_file}"
  done
}

run_feature_migrations portfolio_nav_content
run_feature_migrations portfolio_landing_page_content
