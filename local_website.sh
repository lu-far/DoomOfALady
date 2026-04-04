#!/usr/bin/env sh
set -eu

# Serve this website locally for testing.
# Usage: ./local_website.sh [PORT]

cd "$(dirname "$0")"

if command -v python3 >/dev/null 2>&1; then
  PYTHON=python3
elif command -v python >/dev/null 2>&1; then
  PYTHON=python
else
  echo "Error: Python is required to run this script." >&2
  exit 1
fi

PORT="${1:-8000}"

echo "Serving local website at http://localhost:${PORT}"
exec "$PYTHON" -m http.server "$PORT"
