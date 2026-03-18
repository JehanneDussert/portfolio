# Portfolio — Jehanne Dussert

Stack : **Vue 3 + TypeScript + Vite** (frontend) · **FastAPI + Python** (backend)

---

## Démarrage rapide

### Backend

```bash
cd backend
python -m venv .venv && source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

API disponible sur `http://localhost:8000`  
Docs interactives : `http://localhost:8000/docs`

### Frontend

```bash
cd frontend
npm install
npm run dev
```

App disponible sur `http://localhost:5173`

Le proxy Vite redirige `/api/*` → `http://localhost:8000` automatiquement.

---

## Structure

```
portfolio/
├── backend/
│   ├── main.py               # FastAPI app + CORS
│   ├── requirements.txt
│   ├── models/__init__.py    # Pydantic models
│   └── routers/
│       ├── contact.py        # POST /api/contact
│       └── analytics.py      # POST /api/analytics/track · GET /api/analytics
└── frontend/
    ├── index.html
    ├── vite.config.ts        # proxy /api → :8000
    └── src/
        ├── main.ts
        ├── App.vue
        ├── router/
        ├── types/            # interfaces TypeScript
        ├── assets/css/       # design tokens
        ├── composables/
        │   ├── useApi.ts           # contact + analytics
        │   └── usePortfolioData.ts # données CV
        ├── components/
        │   ├── AppNav.vue
        │   ├── AppFooter.vue
        │   ├── HeroSection.vue
        │   ├── PositioningSection.vue
        │   ├── ExperienceSection.vue
        │   ├── ProjectSection.vue
        │   └── SkillsSection.vue
        └── views/
            ├── HomeView.vue
            └── ContactView.vue
```

---

## Configuration

### Email (contact form)

Dans `backend/routers/contact.py`, décommenter et configurer le bloc SMTP :

```python
import smtplib
from email.message import EmailMessage
# ...
```

Ou utiliser un service comme [Resend](https://resend.com) / [FastMail](https://fastmail.com).

### Analytics

L'implémentation actuelle utilise un store en mémoire (remis à zéro au redémarrage).  
Pour la persistance : remplacer `_views` par Redis ou une base de données dans `backend/routers/analytics.py`.

### CORS en production

Mettre à jour `allow_origins` dans `backend/main.py` avec votre domaine de production.

---

## Build production

```bash
# Frontend
cd frontend && npm run build   # → dist/

# Backend
uvicorn main:app --host 0.0.0.0 --port 8000
```

Servir le dossier `frontend/dist/` via nginx ou en ajoutant `StaticFiles` à FastAPI.
