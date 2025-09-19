#!/usr/bin/env bash
set -e

REPO_URL="https://github.com/6hax/Icons.git"

git clone "$REPO_URL" .

if [[ "$OSTYPE" == "linux-gnu"* ]]; then
  xdg-open . >/dev/null 2>&1 &
elif [[ "$OSTYPE" == "msys" ]] || [[ "$OSTYPE" == "cygwin" ]]; then
  explorer .
elif [[ "$OSTYPE" == "darwin"* ]]; then
  open .
else
  echo "Unknown OS type: $OSTYPE"
fi

