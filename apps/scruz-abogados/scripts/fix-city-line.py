"""Sustituye líneas de un fichero localizándolas por patrón, no por número.

Los índices de línea fallan en cuanto una línea se inserta o se borra, y varias
veces eso dejó archivos a medias. Este script busca la línea por su contenido,
así que da igual que el número haya cambiado.

Uso:
  python scripts/fix-city-line.py <fichero> <regex> <texto-nuevo> [--all]
"""
import io
import re
import sys

path, pattern, replacement = sys.argv[1], sys.argv[2], sys.argv[3]
replace_all = '--all' in sys.argv

lines = io.open(path, encoding='utf-8').read().split('\n')
hits = [i for i, l in enumerate(lines) if re.search(pattern, l)]

if not hits:
    print('SIN COINCIDENCIAS para', pattern)
    sys.exit(1)
if not replace_all and len(hits) > 1:
    print(f'ATENCION: {len(hits)} lineas coinciden ({[h + 1 for h in hits]}); usa --all')
    sys.exit(1)

for i in hits:
    # Conserva la sangria de la linea original.
    indent = re.match(r'\t*', lines[i]).group(0)
    lines[i] = f'{indent}{replacement}'
    print(f'linea {i + 1} reemplazada')

io.open(path, 'w', encoding='utf-8').write('\n'.join(lines))
