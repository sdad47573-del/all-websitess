# Project memory

## Generated Spanish prose corrupts — always sweep

When writing long-form Spanish content into this project (seed data, blurbs,
UI copy), the output reliably picks up corrupted tokens: stray CJK characters
(`小时`, `资产`, `独`, `后来`), mangled words (`Certificado ecological`,
`Vainas filled hasta arriba`), and English variable names bleeding into Spanish
prose (`se preparation con el camion`, `hanentries las fincas`).

This is not a one-off. It has hit in every round of content work, including
mid-sentence, and one attempt to repair it via `str_replace` made the text
longer before the fix landed.

**After any change that writes Spanish prose, run a sweep before considering it
done:**

```bash
python3 -c "
n=0
import glob
files=[f for f in glob.glob('src/**/*.ts*',recursive=True)+glob.glob('tests/*.ts') if '_generated' not in f]
for f in files:
    for i,l in enumerate(open(f,encoding='utf-8'),1):
        for ch in l:
            o=ord(ch)
            if 0x4E00<=o<=0x9FFF or 0x3000<=o<=0x303F or 0xFF00<=o<=0xFFEF:
                print('CJK',f,i,l.strip()[:80]); n+=1; break
print('cjk issues:',n)
"
```

CJK detection only catches the non-Latin junk. Mixed-language slips need a
manual read of any string you just added.

**Repairing it:** `str_replace` may fail to round-trip literal backslashes
through its escaping. When one match is skipped as "not found", submit several
candidate spellings of the same replacement in a single call — non-matches are
skipped and the correct one applies.

## Verification available here

`bun tsc -b --noEmit` and `bunx convex dev --once` both work and are worth
running. `bun test` covers the pure helpers in `src/convex/coopHelpers.ts` and
the catalog data in `src/convex/coopData.ts` (see `tests/coop.test.ts`).

Not available: running the app, reading `.env*`, or hitting the Convex
deployment directly. So mutations and rendering are only ever verified
statically.
