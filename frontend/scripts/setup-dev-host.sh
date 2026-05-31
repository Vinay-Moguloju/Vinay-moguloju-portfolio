#!/usr/bin/env bash
set -euo pipefail

DEV_HOST="localhost.vinaykumar-portfolio.com"
HOSTS_LINE="127.0.0.1 ${DEV_HOST}"

if grep -q "${DEV_HOST}" /etc/hosts 2>/dev/null; then
  echo "Already in /etc/hosts: ${DEV_HOST}"
  exit 0
fi

echo "Adding to /etc/hosts (macOS will ask for your password):"
echo "${HOSTS_LINE}"
echo "${HOSTS_LINE}" | sudo tee -a /etc/hosts >/dev/null
echo "Done. Start the app with: npm run dev"
echo "Open: http://${DEV_HOST}:5173/"
