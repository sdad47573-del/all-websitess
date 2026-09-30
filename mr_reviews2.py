import re

s = open('mr.tmp.txt', encoding='utf-8', errors='replace').read()

# every quoted string containing spaces, dump those that look like review prose
pat = re.compile(r'"((?:[^"\\]|\\.){60,1500}?)"')
seen = set()
out = []
for m in pat.finditer(s):
    t = m.group(1)
    if 'gstatic' in t or 'googleusercontent' in t or 'http' in t:
        continue
    if '\\u00' in t:
        continue
    txt = t.replace('\\n', ' ').replace('\\"', '"')
    # needs at least 8 words of prose
    words = re.findall(r"[A-Za-zÀ-ÿáéíóúñÁÉÍÓÚÑ][A-Za-zÀ-ÿáéíóúñÁÉÍÓÚÑ']{2,}", txt)
    if len(words) < 12:
        continue
    if re.search(r'\\u[0-9a-f]{4}', txt):
        continue
    if txt in seen:
        continue
    seen.add(txt)
    out.append(txt)

with open('mr_reviews2.txt', 'w', encoding='utf-8') as f:
    f.write('\n--------------------\n'.join(out))
print('candidates:', len(out))
