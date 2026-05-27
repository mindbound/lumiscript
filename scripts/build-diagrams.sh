#!/usr/bin/env bash
#
# build-diagrams.sh
#
# Regenerate every Typst-source diagram in `docs/diagrams/` to its SVG output.
# Run from the repo root, or invoke as `scripts/build-diagrams.sh` from any
# subdirectory — the script `cd`s to the repo root first.
#
# Requires `typst` on PATH. Install via:
#   - Binary release: https://github.com/typst/typst/releases
#   - winget:         winget install Typst.Typst
#   - Homebrew:       brew install typst
#   - Cargo:          cargo install --locked typst-cli
#
# The `@preview/fletcher:0.5.8` package is auto-fetched from Typst Universe
# on first compile and cached locally — no extra install step needed.
#
# See `docs/diagrams/README.md` for the palette + style convention used
# by every `.typ` source in this repo.

set -euo pipefail

# Resolve repo root regardless of where the script was invoked from.
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"
cd "${REPO_ROOT}"

DIAGRAM_DIR="docs/diagrams"

if ! command -v typst >/dev/null 2>&1; then
  echo "error: 'typst' binary not found on PATH." >&2
  echo "see ${DIAGRAM_DIR}/README.md for install instructions." >&2
  exit 1
fi

shopt -s nullglob
sources=("${DIAGRAM_DIR}"/*.typ)
shopt -u nullglob

if [[ ${#sources[@]} -eq 0 ]]; then
  echo "no .typ sources found in ${DIAGRAM_DIR}/"
  exit 0
fi

echo "Regenerating ${#sources[@]} diagram(s)…"
for src in "${sources[@]}"; do
  out="${src%.typ}.svg"
  printf "  %-45s → %s\n" "${src}" "${out}"
  typst compile --format svg "${src}" "${out}"
done
echo "done."
