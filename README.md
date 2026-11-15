# jehannedussert.com

Vue 3 + Vite, prerendered with [vite-ssg](https://github.com/antfu-collective/vite-ssg), deployed on Vercel.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + prerender the 10 routes into dist/
```

## Structure

```
src/
├── content/{en,fr}.ts        # all copy and links, one file per language
├── data/site.ts              # routes, slugs and section colours
├── data/redirects.ts         # old URLs and where they now go (mirrored in vercel.json)
├── App.vue                   # the shell: menu ⇄ sidebar, panel, head tags
├── composables/
│   ├── useShell.ts           # home ⇄ section choreography (timers, fast clicks)
│   └── useTheme.ts           # dark / light toggle
├── components/
│   ├── SectionContent.vue    # picks the content of the open section
│   ├── ProjectSheet.vue      # Underlaid and GovLLM sheets ("figures first")
│   ├── SheetHead.vue         # colour rule, tag, title
│   ├── ListRows.vue          # Path and Talks & writing rows
│   ├── OrganisersFacts.vue   # "For event organisers" on the Talks page
│   ├── CountUp.vue           # 0 → 17 counter
│   ├── UnderlaidMap.vue      # light and dark maps, cross-faded
│   └── VideoEmbed.vue        # click-to-load YouTube player
└── assets/css/main.css       # tokens, font, keyframes
public/
├── fonts/                    # Plus Jakarta Sans (variable, OFL), self-hosted
├── img/underlaid-map-*       # generated, see below
└── media/                    # GovLLM video poster
```

Routes: English at the root (`/`, `/underlaid`, `/govllm`, `/path`, `/talks`), French under `/fr`
(`/fr`, `/fr/underlaid`, `/fr/govllm`, `/fr/parcours`, `/fr/interventions`). They all render the same shell;
the route only says which language and which section are open. Each one is prerendered to `dist/<route>/index.html`,
which Vercel serves before the SPA rewrite in `vercel.json`.

Old URLs (French pages at the root, English pages under `/en`, the removed Commitments page) are listed in
`src/data/redirects.ts` and answered with a 301 by the `redirects` in `vercel.json`: keep both lists in step.

Talks with a `date` (ISO) on or after the day of the build are listed under "Upcoming": rebuild the site
after an event for it to move to the main list.

## Underlaid map

The two maps on `/underlaid` are drawn from the published Underlaid data
([JehanneDussert/underlaid](https://github.com/JehanneDussert/underlaid), `frontend/public/data/`),
downloaded at run time — nothing from that repository is stored here.

```bash
python -m venv .venv
.venv/Scripts/pip install -r scripts/requirements.txt    # macOS / Linux: .venv/bin/pip
.venv/Scripts/python scripts/underlaid_map.py            # macOS / Linux: .venv/bin/python
```

It writes `public/img/underlaid-map-{light,dark}.{webp,png}` (1600 px wide) and an 800 px webp of each for phones. Commit the result.

If the download fails with `CERTIFICATE_VERIFY_FAILED` (an antivirus intercepting HTTPS),
install `truststore` in the venv and run
`python -c "import truststore; truststore.inject_into_ssl(); import runpy; runpy.run_path('scripts/underlaid_map.py', run_name='__main__')"`.

## Analytics

Vercel Web Analytics (only on the deployed domain) and Microsoft Clarity (loaded once the page is idle).
