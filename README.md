# BAZA Web

Marketing, admin panel, and (eventually) account portal for the BAZA
moto-táxi platform in Luanda, Angola.

- Live site: deploys to Vercel from `main` (see BAZA-API/OPS.md §5)
- Companion to the BAZA Android apps (`com.baza.taxi`, `com.baza.driver`)
- Backend: shared with the apps at `bazza-taxi-api.onrender.com`

## Stack

- Next.js 16 (Turbopack) + React 19 + TypeScript
- Tailwind 4 with `@theme` tokens mirroring the Android design system
- Inter font, full SEO metadata, fully static marketing pages

## Routes

### Public marketing
- `/` — editorial landing
- `/about` — mission + 85/15 split + stats
- `/how-it-works` — four-step explainer
- `/drivers` — recruitment landing
- `/cities` — Luanda flagship + a-caminho list
- `/legal/terms`, `/legal/privacy` — Angola Lei 22/11 compliant

### Admin (X-Admin-Token gated)
- `/admin/login` — token paste
- `/admin` — five-stat dashboard
- `/admin/drivers` — list with approve/ban
- `/admin/payouts` — history + "Correr lote semanal" button

## v2 backlog

### Account portal (Task #93)

Deferred until email auth ships in the BAZA-API + apps. The schema
(`EmailCredential`, `EmailVerificationToken`) is already in place but
intentionally dormant in v1 — passenger onboarding stays phone-keyed
anonymous. When auth flips on:

1. Build `/[locale]/account/*` shell per `CLAUDE.md` §8
2. Pages: dashboard, trips, wallet, profile, settings, saved-places
3. Read-only views of the same data the app shows (book-a-ride stays
   in the app per `CLAUDE.md` §1 rule 13)

Until then, no portal is shipped — better than a dead "Sign in" page.

### i18n (Tasks #87–88 follow-up)

Marketing pages are pt-AO only. `next-intl` setup is missing.
Translations exist on the Android side (en/fr/es/ar machine-assist;
umb/kmb/kg/ln stubbed waiting for human translators). When ready,
move pages under `/[locale]/` and add `messages/{locale}.json`.

## Develop

```bash
npm install
npm run dev
```

## Deploy

Pushes to `main` auto-deploy to Vercel once `NEXT_PUBLIC_BAZA_API_URL`
is set in the Vercel project settings (see BAZA-API/OPS.md §5).

## Operational items still blocked on Leonel

See BAZA-API/OPS.md — uptime monitor, Firebase Crashlytics, BAZA
keystore, secret rotation, payouts cron schedule, Vercel project link.
