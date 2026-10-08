# jehannedussert.com

Vue 3 + Vite, prerendered with [vite-ssg](https://github.com/antfu-collective/vite-ssg), deployed on Vercel.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + prerender the 6 routes into dist/
```

## Structure

```
src/
├── data/site.ts              # all copy, links and section colours
├── App.vue                   # the shell: menu ⇄ sidebar, panel, head tags
├── composables/
│   ├── useShell.ts           # home ⇄ section choreography (timers, fast clicks)
│   └── useTheme.ts           # dark / light toggle
├── components/
│   ├── SectionContent.vue    # picks the content of the open section
│   ├── ProjectSheet.vue      # Underlaid and GovLLM sheets ("figures first")
│   ├── SheetHead.vue         # colour rule, tag, title
│   ├── ListRows.vue          # Path and Talks & writing rows
│   ├── CountUp.vue           # 0 → 17 counter
│   ├── UnderlaidMap.vue      # light and dark maps, cross-faded
│   └── VideoEmbed.vue        # click-to-load YouTube player
└── assets/css/main.css       # tokens, font, keyframes
public/
├── fonts/                    # Plus Jakarta Sans (variable, OFL), self-hosted
├── img/underlaid-map-*       # generated, see below
└── media/                    # GovLLM video poster
```

Routes: `/`, `/underlaid`, `/govllm`, `/path`, `/talks`, `/commitments`. They all render the same shell;
the route only says which section is open. Each one is prerendered to `dist/<route>/index.html`,
which Vercel serves before the SPA rewrite in `vercel.json`.

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
