#!/bin/bash
cd /c/Users/F-society/Desktop/all-websites
: > .tmp-build.log
for f in apps/*/src/components/Galeria.astro; do
  grep -q "LocalGaleria" "$f" || continue
  a=$(echo "$f" | cut -d/ -f2)
  start=$(date +%s)
  if (cd "apps/$a" && bun run build >/dev/null 2>&1); then
    echo "OK $a $(( $(date +%s) - start ))s" >> .tmp-build.log
  else
    echo "FAIL $a" >> .tmp-build.log
  fi
done
echo "DONE" >> .tmp-build.log
