# feltkart-landing

Statisk landingsside for **FeltKart** — bygd som ren HTML/CSS uten build-step. Deployes til Vercel.

App-en (innloggingen) ligger på `app.feltkart.no` og er et separat prosjekt.

---

## Filstruktur

```
feltkart-landing/
├── index.html              # Forsiden
├── styles.css              # Hovedstilark — brukes av alle sider
├── mockups.css             # Stiler for in-page UI-mockups (dashboard, kart osv.)
├── pages/                  # Undersider
│   ├── funksjoner.html
│   ├── hvordan.html
│   ├── priser.html
│   ├── bestill.html        # Bestillingsflyt (Stripe-mockup, 3 steg)
│   ├── kontakt.html
│   ├── support.html
│   ├── vilkar.html
│   ├── personvern.html
│   └── sikkerhet.html
├── emails/
│   └── velkommen.html      # Velkomstmail-template (variabler: {{firstname}}, {{tenant_slug}}, …)
├── screenshots/            # Skjermbilder fra app.feltkart.no
├── logo/                   # Logo-eksperimenter
├── video/                  # Animasjons-prototyper (admin-onboarding)
└── vercel.json             # Deploy-config (clean URLs, redirects, cache headers)
```

---

## Lokal utvikling

Ingen build, ingen dependencies. Bare server fila statisk:

```bash
# Med Python (innebygd)
python3 -m http.server 8000

# Eller med Node
npx serve .

# Eller bare åpne index.html i nettleseren
open index.html
```

Deretter: <http://localhost:8000>

---

## Deploy til Vercel

Repoet er koblet til Vercel-prosjektet `feltkart-landing`. Auto-deploy ved push til `main`:

```bash
git add .
git commit -m "Beskrivelse av endring"
git push
```

Vercel bygger ikke noe — kopierer filene rett til CDN. Første deploy går på under 30 sekunder.

### Domener

- **Produksjon:** `feltkart.no` (peker til hovedgren)
- **App:** `app.feltkart.no` (annet Vercel-prosjekt — ikke rør)

### Clean URLs

`vercel.json` aktiverer `cleanUrls`, så `/pages/funksjoner.html` blir `/pages/funksjoner`. Det er også redirects for top-level paths:

- `feltkart.no/priser` → `/pages/priser`
- `feltkart.no/kontakt` → `/pages/kontakt`
- osv.

---

## Innholdsendringer

- **Tekst og layout:** rediger HTML-filene direkte. Footer + nav er per fil (duplisert) — søk og bytt på tvers.
- **Logo, farger, typografi:** sentralt i `styles.css`.
- **Kontakt/firmainfo:** `+47 952 38 689` og `Org.nr 933 973 719` ligger i footer på alle sider + i `emails/velkommen.html`.
- **Velkomstmail:** `emails/velkommen.html` — koble inn fra backend (Resend/Postmark) og erstatt `{{firstname}}`, `{{company}}`, `{{tenant_slug}}`, `{{admin_email}}`, `{{user_count}}`.

---

## Stripe (TODO)

`pages/bestill.html` er foreløpig en mockup av kjøpsflyten (3 steg, kort/Vipps/EHF). For ekte betaling:

1. **Enkleste vei:** Stripe Payment Links — opprett i dashboard, lim inn URL som "Bestill"-knapp.
2. **Anbefalt:** Stripe Checkout + Subscriptions — ~50 linjer kode i en serverless function (`/api/checkout`), webhook til `/api/stripe-webhook` som oppretter tenant via Supabase.
3. **Stripe Elements** (det som er mock'et nå) — egen UI, krever PCI-skjema og 3DS-håndtering selv.

Når dette er på plass, fjern mockup-skjemaet og koble "Bestill"-knappen direkte til Stripe Checkout.

---

## Kontakt

- **Org:** FeltKart AS · Org.nr 933 973 719
- **Adresse:** Kanalveien 107, 5068 Bergen
- **E-post:** post@feltkart.no
- **Telefon:** +47 952 38 689
