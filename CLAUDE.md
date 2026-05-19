# CLAUDE.md — BAZA Website Design & Implementation Bible

> **You are working on the BAZA web companion — a marketing, registration, and account portal. NOT a web version of the app. The website lives at the public-facing URL and serves: (1) explaining services to new visitors, (2) handling registration and onboarding for passengers and drivers, (3) giving existing users a basic account/trip dashboard. Design must be flawless. Same DNA as the Kotlin app but DIFFERENT grammar. Read Section 12 for the explicit differences before writing any code.**

---

## 0. Mission & Context

**Product:** BAZA web — public marketing + account portal, companion to the BAZA Android apps.

**Repos:**
- `BAZA-WEB` → this project (Next.js)
- `BAZA-API` → shared backend on Render with Neon Postgres
- `BAZA-APP` / `BAZA-DRIVER` → the native mobile apps (separate, do not touch)

**Primary purpose:**
1. **Marketing:** explain BAZA to first-time visitors (services, cities, safety, how it works)
2. **Conversion:** drive app downloads + driver applications
3. **Auth:** account creation, sign-in, password reset
4. **Account portal:** logged-in users can view trip history, manage profile, see receipts. Heavy transactions (book a ride, payment) happen IN THE APP — the web is a companion, not a replacement.

**Tech stack (recommended, matches existing GEOSSTORE pattern):**
- Next.js 16 with Turbopack
- TypeScript (strict mode)
- Tailwind CSS for styling
- next-intl for i18n
- React Server Components for marketing pages (SEO)
- React Client Components for forms and interactive elements
- Vercel for deployment
- Same `BAZA-API` backend

**Primary language:** Portuguese (Angolan variant — `pt-AO`).
**Locales supported:** 10 additional (see Section 9) for 11 total.

**Design DNA inherited from the app:** calm, premium, confident, restrained. Whitespace as luxury. One accent color. Sentence case. Inter typeface. 4dp/4px base spacing scale.

**Design DNA NEW to the web:** editorial-scale typography, full-bleed hero sections, real photography, long-form scroll, asymmetric layouts, generous container max-widths, large persistent footer.

---

## 1. NON-NEGOTIABLE RULES

Violating any of these produces work that must be rejected and rewritten.

1. **The website must NOT look like the mobile app.** No bottom sheets. No map-as-background patterns. No app-style card grids everywhere. The website is editorial-marketing-fintech, not an app dashboard. See Section 12 for the explicit differences.
2. **All UI strings live in locale JSON files** under `messages/{locale}.json` — never hardcoded. Always reference via `t('namespace.key')`.
3. **All 11 locales must have entries for every key.** Missing keys are build errors.
4. **One accent color.** Period. Define once in `tailwind.config.ts` and `globals.css`. Never inline a hex.
5. **Use the design tokens.** Spacing (3.1), typography (3.2), color (3.3), radius (3.4), shadow (3.5). No off-grid values.
6. **Sentence case for all labels, headings, buttons, navigation.** Never Title Case. Never ALL CAPS (except small uppercase section labels per 3.2).
7. **Mobile-first responsive.** Design for 360px width first, scale up. Every page must work flawlessly on phone.
8. **Accessibility WCAG AA minimum.** Every image has `alt`. Every interactive has keyboard nav. Color contrast verified. Focus rings visible. Semantic HTML throughout.
9. **Performance budget:** LCP < 2.5s, CLS < 0.1, FID < 100ms. Lazy-load all below-fold images. Use `next/image` everywhere. Inline critical CSS.
10. **SEO is mandatory on marketing pages.** Proper `<title>`, `<meta description>`, OpenGraph, Twitter card, JSON-LD structured data, semantic HTML, sitemap.xml, robots.txt.
11. **Match the page inventory in Section 8.** Don't invent pages. If something is missing, ask before adding.
12. **No emojis in UI labels.** Use Lucide React icons. Emojis only allowed in informal contexts like the in-app status banners — those are app-territory, not web.
13. **No registering, no auth-completing, no payment-handling on the web that bypasses the app's primary flow.** The web supports the journey, doesn't replace the app for ride-booking.

---

## 2. Project Structure

```
baza-web/
├── app/                                  # Next.js App Router
│   ├── [locale]/                         # i18n routing
│   │   ├── layout.tsx                    # Root layout with nav + footer
│   │   ├── page.tsx                      # Home / landing
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── how-it-works/
│   │   │   └── page.tsx
│   │   ├── safety/
│   │   │   └── page.tsx
│   │   ├── cities/
│   │   │   ├── page.tsx                  # List of cities
│   │   │   └── [city]/page.tsx           # Per-city landing
│   │   ├── pricing/
│   │   │   └── page.tsx
│   │   ├── drivers/                      # Driver recruitment
│   │   │   ├── page.tsx
│   │   │   ├── earnings/page.tsx
│   │   │   ├── requirements/page.tsx
│   │   │   └── apply/page.tsx
│   │   ├── press/page.tsx
│   │   ├── careers/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx           # Per-job listing
│   │   ├── contact/page.tsx
│   │   │
│   │   ├── (auth)/                       # Auth routes
│   │   │   ├── sign-in/page.tsx
│   │   │   ├── sign-up/
│   │   │   │   ├── page.tsx              # Phone entry
│   │   │   │   ├── otp/page.tsx
│   │   │   │   ├── profile/page.tsx
│   │   │   │   └── email/page.tsx
│   │   │   ├── forgot-password/page.tsx
│   │   │   └── reset-password/page.tsx
│   │   │
│   │   ├── account/                      # Logged-in shell
│   │   │   ├── layout.tsx                # Dashboard shell with sidebar
│   │   │   ├── page.tsx                  # Overview
│   │   │   ├── trips/
│   │   │   │   ├── page.tsx              # History list
│   │   │   │   └── [id]/page.tsx         # Trip detail + receipt
│   │   │   ├── wallet/page.tsx           # View only (no transactions)
│   │   │   ├── profile/page.tsx
│   │   │   ├── settings/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── password/page.tsx
│   │   │   │   ├── notifications/page.tsx
│   │   │   │   └── language/page.tsx
│   │   │   └── saved-places/page.tsx
│   │   │
│   │   ├── help/
│   │   │   ├── page.tsx                  # FAQ landing
│   │   │   ├── [category]/page.tsx
│   │   │   └── articles/[slug]/page.tsx
│   │   │
│   │   └── legal/
│   │       ├── terms/page.tsx
│   │       ├── privacy/page.tsx
│   │       ├── cookies/page.tsx
│   │       └── driver-terms/page.tsx
│   │
│   ├── api/                              # API routes (proxies to BAZA-API)
│   │   ├── auth/
│   │   ├── trips/
│   │   └── contact/
│   │
│   ├── globals.css                       # Tailwind + CSS variables
│   ├── opengraph-image.tsx               # Default OG image
│   └── icon.tsx                          # Favicon
│
├── components/
│   ├── marketing/                        # Marketing-specific
│   │   ├── HeroSection.tsx
│   │   ├── FeatureGrid.tsx
│   │   ├── TestimonialCarousel.tsx
│   │   ├── CityShowcase.tsx
│   │   ├── AppDownloadCTA.tsx
│   │   ├── DriverCTA.tsx
│   │   ├── StatsBanner.tsx
│   │   └── PartnerLogos.tsx
│   ├── auth/
│   │   ├── AuthShell.tsx                 # Centered form layout
│   │   ├── PhoneInput.tsx                # With country flag selector
│   │   ├── OtpInput.tsx                  # 6-digit pin
│   │   └── AuthFooter.tsx
│   ├── account/
│   │   ├── DashboardShell.tsx            # Sidebar + main content
│   │   ├── DashboardSidebar.tsx
│   │   ├── TripHistoryRow.tsx
│   │   ├── ReceiptCard.tsx
│   │   └── ProfileForm.tsx
│   ├── ui/                               # Primitives
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Select.tsx
│   │   ├── Checkbox.tsx
│   │   ├── RadioGroup.tsx
│   │   ├── Switch.tsx
│   │   ├── Textarea.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Alert.tsx
│   │   ├── Modal.tsx
│   │   ├── Tabs.tsx
│   │   ├── Accordion.tsx
│   │   ├── Dropdown.tsx
│   │   ├── Tooltip.tsx
│   │   ├── Skeleton.tsx
│   │   ├── Avatar.tsx
│   │   └── Container.tsx                 # Max-width wrapper
│   └── layout/
│       ├── Navbar.tsx                    # Top sticky nav
│       ├── Footer.tsx                    # Large multi-column footer
│       ├── MobileMenu.tsx                # Hamburger overlay
│       ├── LocaleSwitcher.tsx
│       └── ThemeToggle.tsx
│
├── lib/
│   ├── api.ts                            # BAZA-API client
│   ├── auth.ts                           # Auth helpers
│   ├── seo.ts                            # SEO helpers
│   └── utils.ts                          # cn(), formatters
│
├── messages/                             # i18n
│   ├── pt-AO.json                        # PRIMARY (source of truth)
│   ├── pt-BR.json
│   ├── en.json
│   ├── fr.json
│   ├── es.json
│   ├── ar.json                           # RTL
│   ├── umb.json                          # Umbundu
│   ├── kmb.json                          # Kimbundu
│   ├── kg.json                           # Kikongo
│   ├── ln.json                           # Lingala
│   └── sw.json                           # Swahili
│
├── public/
│   ├── images/                           # Real photography, optimized
│   │   ├── hero/
│   │   ├── cities/
│   │   ├── drivers/
│   │   └── testimonials/
│   ├── illustrations/                    # SVG illustrations if any
│   └── fonts/                            # Inter variable font
│
├── tailwind.config.ts
├── next.config.ts
├── i18n.ts
├── middleware.ts                         # Locale + auth middleware
└── package.json
```

---

## 3. Design Tokens

### 3.1 Spacing

Base unit: **4px**. Tailwind already follows this scale — use Tailwind utilities directly.

```typescript
// tailwind.config.ts spacing extension if needed
spacing: {
  '4.5': '18px',
  '13': '52px',
  '15': '60px',
  '17': '68px',
  '18': '72px',
  '22': '88px',
  '30': '120px',
}
```

**Rules:**
- Use Tailwind classes: `p-4` (16px), `gap-6` (24px), `mt-12` (48px)
- Standard section vertical padding: `py-16 md:py-24 lg:py-32`
- Container horizontal padding: `px-6 md:px-8 lg:px-12`
- When in doubt, choose larger spacing — claustrophobia is worse than airy
- Web spacing is GENEROUSLY larger than app spacing — sections breathe

### 3.2 Typography

**Family:** Inter (variable font). Self-host in `/public/fonts/`. Load via `next/font/local` with `display: 'swap'`.

```typescript
// Display sizes are WEB-ONLY — much larger than the app
// Used for hero headlines, section intros

const typeScale = {
  // Hero & marketing display
  'display-2xl': { fontSize: '4.5rem',  lineHeight: '1.05', fontWeight: 700, letterSpacing: '-0.02em' }, // 72px
  'display-xl':  { fontSize: '3.75rem', lineHeight: '1.05', fontWeight: 700, letterSpacing: '-0.02em' }, // 60px
  'display-lg':  { fontSize: '3rem',    lineHeight: '1.1',  fontWeight: 700, letterSpacing: '-0.02em' }, // 48px
  'display-md':  { fontSize: '2.25rem', lineHeight: '1.15', fontWeight: 700, letterSpacing: '-0.02em' }, // 36px
  'display-sm':  { fontSize: '1.875rem',lineHeight: '1.2',  fontWeight: 700, letterSpacing: '-0.01em' }, // 30px

  // Editorial headings
  'heading-xl':  { fontSize: '1.5rem',  lineHeight: '1.3',  fontWeight: 600, letterSpacing: '-0.01em' }, // 24px
  'heading-lg':  { fontSize: '1.25rem', lineHeight: '1.4',  fontWeight: 600 },                            // 20px
  'heading-md':  { fontSize: '1.125rem',lineHeight: '1.4',  fontWeight: 600 },                            // 18px
  'heading-sm':  { fontSize: '1rem',    lineHeight: '1.5',  fontWeight: 600 },                            // 16px

  // Body
  'body-xl':     { fontSize: '1.25rem', lineHeight: '1.6',  fontWeight: 400 },                            // 20px — hero subtitles
  'body-lg':     { fontSize: '1.125rem',lineHeight: '1.6',  fontWeight: 400 },                            // 18px — long-form body
  'body-md':     { fontSize: '1rem',    lineHeight: '1.6',  fontWeight: 400 },                            // 16px — default body
  'body-sm':     { fontSize: '0.875rem',lineHeight: '1.5',  fontWeight: 400 },                            // 14px — supporting
  'body-xs':     { fontSize: '0.8125rem',lineHeight: '1.5', fontWeight: 400 },                            // 13px — captions, fine print

  // Labels & UI
  'label-md':    { fontSize: '0.875rem',lineHeight: '1.4',  fontWeight: 500 },
  'label-sm':    { fontSize: '0.75rem', lineHeight: '1.4',  fontWeight: 500 },
  'label-xs':    { fontSize: '0.6875rem',lineHeight: '1.4', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase' }, // section labels
};
```

**Rules:**
- Hero headlines on desktop use `display-2xl` or `display-xl`. On mobile they downsize to `display-md` or `display-lg`. Use Tailwind responsive prefixes: `text-4xl md:text-6xl lg:text-7xl`.
- Body copy default is `body-md` (16px). Long-form articles use `body-lg` (18px) for readability.
- Numbers, prices, currency: weight 600 even in body contexts.
- Line-height: 1.6 for body (web reads from further away than mobile), 1.05–1.2 for headings.
- Left-aligned default. Center only for short hero titles, single-line section intros, or testimonials.
- Never use Title Case. Never ALL CAPS except `label-xs` section dividers.

### 3.3 Color — Placeholder Tokens

**The user has their own brand colors. Replace these placeholders.** Define in `tailwind.config.ts` AND `globals.css` for CSS variable access.

```typescript
// tailwind.config.ts
colors: {
  // === REPLACE THESE WITH BAZA BRAND COLORS ===
  accent: {
    50:  '#EFF6FF',
    100: '#DBEAFE',
    200: '#BFDBFE',
    400: '#60A5FA',
    500: '#3B82F6',   // ← primary accent placeholder
    600: '#2563EB',   // ← default accent (BAZA brand goes here)
    700: '#1D4ED8',   // ← pressed/active state
    800: '#1E40AF',
    900: '#1E3A8A',
  },

  // Neutrals (keep as is unless brand requires adjustment)
  bg: {
    primary:   '#FFFFFF',     // page background light mode
    secondary: '#FAFAFA',     // section alternate
    tertiary:  '#F5F5F5',     // subtle surfaces
    inverse:   '#0A0A0A',     // dark sections
  },
  surface: {
    DEFAULT: '#FFFFFF',
    alt:     '#FAFAFA',
    raised:  '#FFFFFF',       // cards
  },
  text: {
    primary:   '#0A0A0A',     // near black, not pure
    secondary: '#525252',     // muted body
    tertiary:  '#A3A3A3',     // captions, hints
    inverse:   '#FFFFFF',     // on dark
    onAccent:  '#FFFFFF',     // text on accent fills
  },
  border: {
    light:    '#F0F0F0',
    DEFAULT:  '#E5E5E5',
    strong:   '#D4D4D4',
    focus:    '#000000',      // focus ring base
  },

  // Semantic — used sparingly
  success: { DEFAULT: '#16A34A', tint: '#DCFCE7', border: '#86EFAC' },
  warning: { DEFAULT: '#D97706', tint: '#FEF3C7', border: '#FCD34D' },
  danger:  { DEFAULT: '#DC2626', tint: '#FEE2E2', border: '#FECACA' },
  info:    { DEFAULT: '#0EA5E9', tint: '#E0F2FE', border: '#7DD3FC' },
}
```

```css
/* globals.css */
@layer base {
  :root {
    --accent: #2563EB;           /* ← REPLACE */
    --accent-pressed: #1D4ED8;   /* ← REPLACE */
    --accent-tint: rgba(37, 99, 235, 0.08);

    --bg-primary: #FFFFFF;
    --bg-secondary: #FAFAFA;
    --bg-inverse: #0A0A0A;

    --text-primary: #0A0A0A;
    --text-secondary: #525252;
    --text-tertiary: #A3A3A3;

    --border-light: #F0F0F0;
    --border: #E5E5E5;

    --focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.3); /* ← REPLACE accent rgba */
  }

  [data-theme="dark"] {
    --bg-primary: #0A0A0A;
    --bg-secondary: #171717;
    --bg-inverse: #FFFFFF;

    --text-primary: #FAFAFA;
    --text-secondary: #A3A3A3;
    --text-tertiary: #737373;

    --border-light: #262626;
    --border: #404040;
  }
}
```

**Rules:**
- One accent. Never introduce a second.
- Dark mode parity required. Define every color in both modes.
- Semantic colors used sparingly — only for actual status meaning (success messages, error states).
- Tint backgrounds (`accent-tint`, `success-tint`) used for icon container backgrounds and active states.

### 3.4 Border Radius

```typescript
borderRadius: {
  'none': '0',
  'sm':   '0.375rem',   // 6px — tags, badges
  'md':   '0.5rem',     // 8px — small inputs
  'lg':   '0.75rem',    // 12px — secondary cards, buttons
  'xl':   '1rem',       // 16px — primary cards (SIGNATURE)
  '2xl':  '1.5rem',     // 24px — large feature cards
  '3xl':  '2rem',       // 32px — hero panels
  'full': '9999px',     // pills, avatars
}
```

**Rules:**
- Primary cards: `rounded-xl` (16px) — matches app signature
- Buttons: `rounded-lg` (12px) — slightly tighter than cards
- Pills, badges, avatars: `rounded-full`
- Hero panels with photography: `rounded-2xl` or `rounded-3xl`

### 3.5 Shadows

```typescript
boxShadow: {
  'xs':  '0 1px 2px 0 rgba(0, 0, 0, 0.04)',
  'sm':  '0 2px 8px 0 rgba(0, 0, 0, 0.06)',     // cards default
  'md':  '0 4px 16px 0 rgba(0, 0, 0, 0.08)',    // raised, dropdowns
  'lg':  '0 8px 32px 0 rgba(0, 0, 0, 0.1)',     // modals, popovers
  'xl':  '0 16px 48px 0 rgba(0, 0, 0, 0.12)',   // sticky CTAs floating
  'focus': '0 0 0 3px rgba(37, 99, 235, 0.3)',  // focus ring (replace rgba)
}
```

**Rules:**
- Cards default to `shadow-sm`
- Dropdowns, popovers, modals: `shadow-md` to `shadow-lg`
- Hero panels usually have NO shadow — they sit on the page
- Never stack shadows on shadows
- Focus ring is the ONLY shadow used for accessibility (3px offset, accent color at 30% alpha)

### 3.6 Container & Grid

```typescript
// tailwind.config.ts
container: {
  center: true,
  padding: {
    DEFAULT: '1.5rem',   // 24px
    sm: '1.5rem',
    md: '2rem',          // 32px
    lg: '3rem',          // 48px
    xl: '4rem',          // 64px
  },
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1440px',     // cap max-width here
  },
}
```

**Layout sizes:**
- Full-bleed sections: `w-full`
- Standard content: `container mx-auto` (max 1440px)
- Long-form articles: `max-w-3xl` (768px)
- Centered auth forms: `max-w-md` (448px)
- Dashboard content: `max-w-7xl`

**Grid:**
- 12-column responsive grid via Tailwind (`grid grid-cols-12 gap-6 lg:gap-8`)
- Mobile: stack everything vertically
- Tablet (md): 2-column where appropriate
- Desktop (lg+): use 12-col grid for asymmetric layouts

### 3.7 Iconography

**Library:** Lucide React (`lucide-react`). Same as the GEOSSTORE stack pattern.

**Rules:**
- Stroke width: `1.5` consistent app-wide (set via prop or wrapper)
- Sizes:
  - `16` — inline with `body-sm` text
  - `20` — default size, inline with `body-md`
  - `24` — buttons, headers
  - `32–48` — feature icons in marketing sections
- Color: inherit text color by default, accent when active
- All decorative icons: `aria-hidden="true"`
- All icon-only buttons: `aria-label` describing the action

### 3.8 Photography & Imagery

**This is web-specific. The app uses minimal imagery. The website needs photography.**

**Style direction:**
- Real photography of real people in Luanda contexts (with consent and model release)
- Natural lighting, documentary feel — NOT studio glossy
- Diverse representation across Angolan demographics
- Cars: clean, modern, but realistic for Luanda (not Range Rovers — actual fleet)
- City context: Marginal, Talatona, Maianga, Miramar, Mutamba — recognisable Luanda
- Consistent color treatment: warm but not over-saturated, true blacks, natural skin tones

**Technical:**
- All images via `next/image` with `priority` on above-fold hero only
- WebP format preferred, AVIF where supported
- Aspect ratios for consistency:
  - Hero full-bleed: 16:9 or 21:9
  - Feature cards: 4:3
  - Avatars / testimonials: 1:1
  - City cards: 4:5 portrait
- Always provide `alt` text describing the scene meaningfully
- Lazy-load below-fold images
- Use `sizes` prop on responsive images

**Illustrations (when used sparingly):**
- Geometric, minimal, single-color or 2-color
- Never stocky 3D characters
- Custom illustrations preferred over generic stock

---

## 4. Component Library

All components in `components/ui/` are unstyled primitives that consume tokens. Composition happens at the page level.

### 4.1 Button

Variants: `primary`, `secondary`, `outline`, `ghost`, `destructive`
Sizes: `sm` (32px), `md` (40px), `lg` (48px), `xl` (56px — hero CTAs)

```tsx
<Button variant="primary" size="lg">
  {t('home.cta.download')}
</Button>
```

```tsx
// Primary
className="bg-accent-600 hover:bg-accent-700 text-white font-semibold rounded-lg
           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500
           focus-visible:ring-offset-2 transition-colors"

// Secondary
className="bg-transparent hover:bg-accent-50 text-accent-600 border-1.5 border-accent-600
           font-semibold rounded-lg ..."

// Outline (neutral)
className="bg-transparent hover:bg-bg-secondary text-text-primary border border-border
           font-medium rounded-lg ..."

// Ghost
className="bg-transparent hover:bg-bg-secondary text-text-primary font-medium rounded-lg ..."

// Destructive
className="bg-transparent hover:bg-danger-tint text-danger border-1.5 border-danger-border
           font-semibold rounded-lg ..."
```

Hover state: 100ms ease-out. Active state: scale-[0.98].

### 4.2 Input

Single-line text input. Variants: `default`, `error`, `success`.

```tsx
<Input
  label={t('auth.signIn.phoneLabel')}
  placeholder={t('auth.signIn.phonePlaceholder')}
  type="tel"
  error={fieldErrors.phone}
/>
```

Anatomy:
- Label above (label-md, color text-primary)
- Input field: 48px height, 1px border-default, rounded-md, px-4
- Focus: 2px accent border + focus ring shadow
- Error: 2px danger border + helper text below in danger color
- Helper text below: body-sm, color text-secondary

### 4.3 Card

```tsx
<Card variant="default" className="p-6">
  {/* content */}
</Card>
```

Variants: `default` (white surface, 1px border, rounded-xl), `feature` (no border, larger padding, gradient or photo), `outline` (transparent + thicker border), `interactive` (hover lift + cursor pointer)

### 4.4 Container

Max-width wrapper, centered, with responsive horizontal padding.

```tsx
<Container size="default">  // max-w-7xl (1280px)
<Container size="narrow">   // max-w-3xl (768px) — articles
<Container size="wide">     // max-w-screen-2xl (1440px) — full marketing pages
<Container size="fluid">    // w-full — for full-bleed sections inside content sections
```

### 4.5 Section

Vertical section spacing primitive.

```tsx
<Section background="default" spacing="default">
  <Container>
    {/* section content */}
  </Container>
</Section>
```

- `background`: `default` (white), `alt` (subtle gray), `inverse` (dark), `accent` (accent tint)
- `spacing`: `compact` (`py-12 md:py-16`), `default` (`py-16 md:py-24 lg:py-32`), `loose` (`py-24 md:py-32 lg:py-40`)

### 4.6 Navbar (top sticky nav)

- Height: 64px mobile, 72px desktop
- Background: `bg-primary` with `backdrop-blur-md` and `bg-opacity-80` when scrolled
- Bottom border on scroll: 1px `border-light`
- Logo left, nav links center (desktop) or hamburger (mobile), CTA buttons right
- Sticky position with `z-50`

Anatomy desktop:
```
[ LOGO ]  Como funciona  Cidades  Para motoristas  Segurança  Ajuda    [Iniciar sessão] [Descarregar app]
```

Anatomy mobile:
```
[ LOGO ]                                                                                          [ ☰ ]
```

### 4.7 Footer (large, multi-column)

Lives at the bottom of every page. NOT a sticky element — just a generous closing section.

- Background: `bg-inverse` (near-black) with light text
- Padding: `py-16 md:py-24 px-6 md:px-12`
- Grid: 5 columns on desktop, stacked on mobile
  - Col 1: Logo + tagline + app download buttons
  - Col 2: Company (About, Press, Careers, Contact)
  - Col 3: Product (How it works, Cities, Pricing, Safety)
  - Col 4: For drivers (Drive with BAZA, Earnings, Requirements, Apply)
  - Col 5: Legal & Support (Terms, Privacy, Help)
- Bottom bar: copyright + locale switcher + social icons
- Social icons: Instagram, Facebook, LinkedIn, X (Twitter), YouTube — outline Lucide icons at 20px

### 4.8 Hero Section

Full-bleed section, used on landing pages.

Variants:
- **Hero with photo**: large editorial photo right, copy left (or full-bleed photo with overlay text)
- **Hero with illustration**: minimal SVG illustration right, copy left
- **Hero text-only**: centered copy, single CTA, lots of whitespace

Anatomy:
- Eyebrow label (optional, label-xs uppercase)
- Display heading (display-xl on desktop, display-md on mobile)
- Body subtitle (body-xl, max-width ~600px)
- 1-2 CTA buttons (primary + secondary)
- Hero visual (photo or illustration)

### 4.9 Feature Grid

3-4 column grid on desktop, 2 on tablet, 1 on mobile. Each cell:
- Icon at top (32–40px, accent color)
- Title (heading-md)
- Body copy (body-md, text-secondary)
- Optional "Learn more" link

### 4.10 Testimonial / Quote Card

```tsx
<TestimonialCard>
  <Quote>"Texto do testemunho aqui..."</Quote>
  <Avatar src="..." />
  <Author>Nome</Author>
  <Role>Motorista BAZA, Luanda</Role>
</TestimonialCard>
```

- Large quote marks decorative (subtle, color text-tertiary)
- Quote text in body-lg or body-xl
- Author info below: avatar + name + role

### 4.11 City Card

For the cities page.

- Aspect ratio 4:5 portrait
- City photo as background
- Dark gradient overlay bottom-up
- City name + "Disponível" badge or "Em breve" badge
- Hover: subtle scale (1.02) + brightness increase

### 4.12 Form (composite)

```tsx
<Form onSubmit={handleSubmit}>
  <FormField name="phone">
    <FormLabel>...</FormLabel>
    <Input type="tel" />
    <FormDescription>...</FormDescription>
    <FormMessage />  {/* error or success message */}
  </FormField>
  <Button type="submit">...</Button>
</Form>
```

Validation:
- Client-side via `react-hook-form` + `zod`
- Real-time validation on blur
- Show errors below field after first interaction
- Success state: green checkmark icon at field end

### 4.13 Modal / Dialog

- Backdrop: black at 50% opacity, `backdrop-blur-sm`
- Content: white card, rounded-2xl, shadow-lg, max-w-md
- Close button top-right (icon button)
- Focus trap inside while open
- Escape key closes
- Click outside closes (configurable)

### 4.14 Alert / Banner

Inline contextual messages. NOT toasts.

```tsx
<Alert variant="info">
  <Info className="h-5 w-5" />
  <AlertTitle>...</AlertTitle>
  <AlertDescription>...</AlertDescription>
</Alert>
```

Variants: `info`, `success`, `warning`, `danger` — each with matching icon and color tint.

### 4.15 Tabs

For pages with sectioned content (e.g., Help center, Account settings).

- Underline-style tabs by default
- Active tab: accent color text + 2px accent underline
- Inactive: text-secondary + transparent underline
- Hover: text-primary

### 4.16 Accordion (for FAQ)

- Question row: full-width tappable, body-lg, chevron-down icon right
- Answer expands smoothly with body-md text
- Border-bottom on each row (border-light)
- One accordion item open at a time (or multiple — configurable)

### 4.17 Dashboard Sidebar (account portal)

- Width: 240px desktop, full-overlay on mobile
- Background: `bg-secondary`
- Items: icon + label, 48px height
- Active item: accent tint background + accent text color
- Hover: subtle bg change

---

## 5. Layout Patterns

### Pattern W1 — Marketing Landing (Hero + Sections)

**Use for:** Home, About, How it works, Safety, Cities overview, Pricing, Drivers landing

Structure:
1. Navbar (sticky)
2. Hero section (full-bleed, photo or illustration)
3. Trust/stats banner (small horizontal strip — "Operating in 5 cities", "10,000+ riders")
4. Feature grid (3-4 features)
5. Editorial section with photo + text (alternating left/right)
6. Testimonial section
7. Secondary feature/explanation section
8. Final CTA section (download app or sign up)
9. Footer

Vertical rhythm: `py-16 md:py-24 lg:py-32` between major sections. Backgrounds alternate `bg-primary` / `bg-secondary` for visual rhythm.

### Pattern W2 — Centered Auth Form

**Use for:** Sign in, Sign up, OTP, Forgot password, Reset password

Structure:
- Minimal navbar (just logo, no nav links)
- Full-height centered card on `bg-secondary` background
- Card content:
  - Heading (display-sm)
  - Subtitle (body-md, text-secondary)
  - Form fields stacked
  - Primary CTA full-width
  - Secondary text link below (e.g., "Já tem conta? Iniciar sessão")
- Minimal footer (legal links only)

Card width: 448px on desktop, full-width with `px-6` on mobile.

### Pattern W3 — Dashboard Shell

**Use for:** Account portal (overview, trips, wallet, profile, settings)

Structure:
- Navbar (with account avatar dropdown instead of sign-in button)
- Two-column layout below navbar:
  - Sidebar (240px, sticky, `bg-secondary`)
  - Main content area (`bg-primary`, `max-w-5xl mx-auto`, generous padding)
- No footer on dashboard pages (or minimal footer)
- Mobile: sidebar becomes top tab bar OR drawer triggered by hamburger

Important: This is NOT app-like. The dashboard has web conventions — proper sidebar, breadcrumbs, page headers, not bottom sheets.

### Pattern W4 — Long-form Editorial Content

**Use for:** Legal pages (Terms, Privacy), Help articles, Press releases, Blog posts

Structure:
- Navbar
- Article header section:
  - Optional eyebrow category label
  - H1 title (display-md)
  - Metadata (date, reading time, author)
- Two-column desktop:
  - Sidebar TOC (sticky, max-w-xs)
  - Article content (max-w-3xl, body-lg, line-height-1.7)
- Mobile: single column, TOC becomes top accordion
- Footer

Typography in articles: use full type hierarchy. H2/H3 generously spaced. Pull quotes can be styled distinctively.

### Pattern W5 — Conversion Landing (Driver/Marketing)

**Use for:** Drivers main page, Apply page, City-specific landings

Structure similar to W1 but more conversion-focused:
1. Navbar
2. Hero with strong CTA
3. Stats banner ("Earn up to X Kz/month")
4. How it works (numbered steps)
5. Earnings calculator (interactive)
6. Requirements checklist
7. Testimonials from drivers
8. FAQ accordion
9. Application CTA (large)
10. Footer

---

## 6. Responsive Breakpoints

Mobile-first. Default styles target ≤640px. Breakpoints:

```typescript
screens: {
  'sm':  '640px',    // small tablet
  'md':  '768px',    // tablet
  'lg':  '1024px',   // small desktop
  'xl':  '1280px',   // desktop
  '2xl': '1440px',   // large desktop (max)
}
```

**Rules:**
- All components designed mobile-first
- Test every page at: 360px, 768px, 1024px, 1440px
- Hero headlines downsize aggressively on mobile (display-xl on desktop → display-md on mobile)
- Multi-column grids collapse to single column on mobile
- Navigation collapses to hamburger ≤768px
- Sidebar in dashboard becomes overlay drawer on mobile

---

## 7. Animation & Interaction

**Philosophy:** subtle, purposeful, fast. The site should feel responsive and alive, never gimmicky.

### Page transitions
- None by default (default Next.js navigation)
- Optional fade-in for content on first load (200ms)

### Scroll-triggered
- Fade-in-up on section reveal (`framer-motion` or CSS `@keyframes` + IntersectionObserver)
- Stagger children with 80–120ms delays
- Trigger when 20% of element is visible
- Once per session per element (don't replay)

### Hover states
- Buttons: bg shift in 100ms ease-out
- Cards: subtle elevation increase (`shadow-sm` → `shadow-md`) + 1px scale up (1.0 → 1.01) in 150ms
- Links: underline appears in 100ms

### Active / Press states
- Scale 0.98 on click
- Background darker

### Focus states
- 3px focus ring in accent color at 30% alpha
- Visible only via keyboard (`:focus-visible`, not `:focus`)

### Loading states
- Skeleton screens for content loading (NOT spinners — except for inline button submissions)
- Skeleton: `bg-bg-secondary` with shimmer gradient animation

---

## 8. Page Inventory

### 8.A Marketing pages (public)

| Page | Path | Pattern | Translation namespace |
|---|---|---|---|
| Home / Landing | `/` | W1 | `home` |
| About / Story | `/about` | W1 | `about` |
| How it works (passenger) | `/how-it-works` | W1 | `howItWorks` |
| Safety | `/safety` | W1 | `safety` |
| Cities overview | `/cities` | W1 | `cities.overview` |
| Per-city landing | `/cities/[city]` | W5 | `cities.detail` |
| Pricing / Fares | `/pricing` | W1 | `pricing` |
| Drivers landing | `/drivers` | W5 | `drivers.landing` |
| Driver earnings | `/drivers/earnings` | W5 | `drivers.earnings` |
| Driver requirements | `/drivers/requirements` | W5 | `drivers.requirements` |
| Driver application | `/drivers/apply` | W2 (form) | `drivers.apply` |
| Press / News | `/press` | W4 | `press.list` |
| Careers list | `/careers` | W4 | `careers.list` |
| Job detail | `/careers/[slug]` | W4 | `careers.detail` |
| Contact | `/contact` | W2 (form) | `contact` |

### 8.B Authentication pages

| Page | Path | Pattern | Translation namespace |
|---|---|---|---|
| Sign in | `/sign-in` | W2 | `auth.signIn` |
| Sign up — phone | `/sign-up` | W2 | `auth.signUp.phone` |
| Sign up — OTP | `/sign-up/otp` | W2 | `auth.signUp.otp` |
| Sign up — profile | `/sign-up/profile` | W2 | `auth.signUp.profile` |
| Sign up — email | `/sign-up/email` | W2 | `auth.signUp.email` |
| Forgot password | `/forgot-password` | W2 | `auth.forgotPassword` |
| Reset password | `/reset-password` | W2 | `auth.resetPassword` |
| Email verification | `/verify-email` | W2 | `auth.verifyEmail` |

### 8.C Account portal (logged in)

| Page | Path | Pattern | Translation namespace |
|---|---|---|---|
| Overview | `/account` | W3 | `account.overview` |
| Trip history | `/account/trips` | W3 | `account.trips` |
| Trip detail | `/account/trips/[id]` | W3 | `account.tripDetail` |
| Wallet (view only) | `/account/wallet` | W3 | `account.wallet` |
| Profile | `/account/profile` | W3 | `account.profile` |
| Settings overview | `/account/settings` | W3 | `account.settings` |
| Change password | `/account/settings/password` | W3 | `account.settings.password` |
| Notifications | `/account/settings/notifications` | W3 | `account.settings.notifications` |
| Language | `/account/settings/language` | W3 | `account.settings.language` |
| Saved places | `/account/saved-places` | W3 | `account.savedPlaces` |

### 8.D Help & Support

| Page | Path | Pattern | Translation namespace |
|---|---|---|---|
| Help center | `/help` | W1 | `help.center` |
| Category | `/help/[category]` | W4 | `help.category` |
| Article | `/help/articles/[slug]` | W4 | `help.article` |

### 8.E Legal

| Page | Path | Pattern | Translation namespace |
|---|---|---|---|
| Terms of service | `/legal/terms` | W4 | `legal.terms` |
| Privacy policy | `/legal/privacy` | W4 | `legal.privacy` |
| Cookies policy | `/legal/cookies` | W4 | `legal.cookies` |
| Driver terms | `/legal/driver-terms` | W4 | `legal.driverTerms` |

### 8.F System pages

| Page | Path | Pattern | Translation namespace |
|---|---|---|---|
| 404 not found | `/404` | W2-ish | `errors.notFound` |
| 500 server error | `/500` | W2-ish | `errors.serverError` |
| Maintenance | `/maintenance` | W2-ish | `errors.maintenance` |

**Total: 41 pages.** Build in order: Marketing first (Home → About → How it works → Drivers) → Auth → Account portal → Help → Legal → System.

---

## 9. i18n Setup — 11 Locales

### 9.1 Supported locales

Same 11 as the mobile app. Configured via `next-intl`:

```typescript
// i18n.ts
import { getRequestConfig } from 'next-intl/server';

export const locales = [
  'pt-AO',   // PRIMARY
  'pt-BR',
  'en',
  'fr',
  'es',
  'ar',      // RTL
  'umb',     // Umbundu
  'kmb',     // Kimbundu
  'kg',      // Kikongo
  'ln',      // Lingala
  'sw',      // Swahili
] as const;

export const defaultLocale = 'pt-AO';

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`./messages/${locale}.json`)).default,
}));
```

```typescript
// middleware.ts
import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed',  // /sign-in for pt-AO, /en/sign-in for English
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
```

### 9.2 Message file structure (`messages/pt-AO.json`)

```json
{
  "common": {
    "back": "Voltar",
    "next": "Seguinte",
    "continue": "Continuar",
    "confirm": "Confirmar",
    "cancel": "Cancelar",
    "save": "Guardar",
    "edit": "Editar",
    "loading": "A carregar…",
    "tryAgain": "Tentar novamente",
    "currency": "Kz"
  },
  "nav": {
    "howItWorks": "Como funciona",
    "cities": "Cidades",
    "drivers": "Para motoristas",
    "safety": "Segurança",
    "help": "Ajuda",
    "signIn": "Iniciar sessão",
    "download": "Descarregar app"
  },
  "home": {
    "hero": {
      "eyebrow": "Mobilidade para Angola",
      "headline": "A sua viagem começa aqui",
      "subtitle": "Reserve uma viagem em segundos. Pague com facilidade. Chegue em segurança.",
      "ctaPrimary": "Descarregar a app",
      "ctaSecondary": "Conduza connosco"
    },
    "features": {
      "title": "Construído para Angola",
      "subtitle": "Pensado para a realidade do dia-a-dia em Luanda e arredores"
    }
  },
  "auth": {
    "signIn": {
      "title": "Bem-vindo de volta",
      "subtitle": "Inicie sessão para continuar",
      "phoneLabel": "Número de telefone",
      "phonePlaceholder": "Insira o seu número",
      "passwordLabel": "Palavra-passe",
      "submit": "Iniciar sessão",
      "forgotPassword": "Esqueceu a palavra-passe?",
      "noAccount": "Não tem conta?",
      "signUpLink": "Crie uma"
    }
  },
  "footer": {
    "tagline": "Mobilidade construída para Angola",
    "downloadApp": "Descarregar a app",
    "sections": {
      "company": "Empresa",
      "product": "Produto",
      "drivers": "Para motoristas",
      "legal": "Legal e suporte"
    },
    "copyright": "© 2026 BAZA. Todos os direitos reservados."
  }
}
```

### 9.3 RTL handling for Arabic

In `app/[locale]/layout.tsx`:

```tsx
import { NextIntlClientProvider } from 'next-intl';

export default async function LocaleLayout({
  children,
  params: { locale }
}) {
  const isRtl = locale === 'ar';
  return (
    <html lang={locale} dir={isRtl ? 'rtl' : 'ltr'}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
```

Tailwind logical properties:
- `ms-4` / `me-4` instead of `ml-4` / `mr-4`
- `ps-6` / `pe-6` instead of `pl-6` / `pr-6`
- `text-start` / `text-end` instead of `text-left` / `text-right`

Test every page with `?locale=ar`.

### 9.4 Translation workflow

1. **All new keys added to `pt-AO.json` first** (source of truth)
2. Propagate to all 10 other locale files
3. Flag for human review:
   - **Angolan local languages (`umb`, `kmb`, `kg`, `ln`)** — community translator needed
   - **Arabic** — RTL phrasing review
4. CI lint: fail build if keys missing from any locale

---

## 10. SEO Requirements

Every marketing page MUST have:

```tsx
// In page.tsx or as metadata export
export async function generateMetadata({ params, searchParams }): Promise<Metadata> {
  return {
    title: t('home.seo.title'),
    description: t('home.seo.description'),
    openGraph: {
      title: ...,
      description: ...,
      images: [{ url: '/images/og/home.jpg', width: 1200, height: 630 }],
      locale: params.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      ...
    },
    alternates: {
      canonical: `https://baza.ao/${params.locale}`,
      languages: { /* hreflang for all 11 locales */ },
    },
  };
}
```

Plus:
- JSON-LD structured data for organization, breadcrumbs, FAQs
- `sitemap.xml` (auto-generated by `next-sitemap`)
- `robots.txt` (allow all on production, disallow dashboard/auth)
- Open Graph images: 1200×630, branded, per-page when meaningful

Account portal pages: `noindex` (private).
Auth pages: `noindex` (not useful in search).

---

## 11. Performance Targets

| Metric | Target |
|---|---|
| Largest Contentful Paint (LCP) | < 2.5s |
| Cumulative Layout Shift (CLS) | < 0.1 |
| First Input Delay (FID) / INP | < 100ms / < 200ms |
| Time to Interactive (TTI) | < 3.5s |
| Total Blocking Time (TBT) | < 200ms |
| Bundle size (initial JS) | < 200KB gzipped |

**Tactics:**
- Server Components by default — only opt into Client Components when needed
- Lazy-load below-fold images via `next/image`
- Font display swap, self-hosted variable Inter
- Code-split by route (Next.js default)
- No third-party scripts unless essential (analytics excepted)
- Critical CSS inlined
- Defer non-essential JS

---

## 12. DIFFERENCES from the mobile app

**This is the most important section. The web is NOT the app. Read this twice.**

| Aspect | Mobile app | Website |
|---|---|---|
| **Primary surface** | Map with bottom sheet (Pattern 1) | Hero sections with editorial typography |
| **Card density** | High — most screens are stacked cards | Lower — cards used where appropriate, often replaced by sections |
| **Navigation** | Back button + activity stack | Sticky top navbar + footer; sidebar in dashboard |
| **Bottom CTA** | Almost always fixed at bottom of screen | Buttons inline with content; CTAs in hero and final sections |
| **Typography scale** | Caps at 32px display | Goes up to 72px+ for hero headlines |
| **Imagery** | Minimal — small product/avatar images | Heavy — real photography drives the marketing |
| **Spacing** | Compact, tight (mobile constraints) | Generous, editorial breathing room |
| **Animation** | Bottom sheet slide, card selection bumps | Scroll-triggered fade-ins, hover lifts |
| **Color usage** | Lots of white card surfaces | Alternating section backgrounds for rhythm |
| **Footer** | None | Large multi-column on every page |
| **Forms** | Inline in screens, often one-field-per-screen | Traditional web forms with label-above-input |
| **Status messages** | Floating pills with emojis | Inline Alert components, no emojis |
| **Map** | Central, always-on background | Optional accent in city pages; not central |
| **Bottom sheets** | Signature element | DO NOT USE on the web |
| **Tab bars** | Not used | Used for sectioned content (Help center) |
| **Avatars** | Used in driver/passenger contexts | Used in testimonials, account header |
| **Aspect ratios** | Vertical phone-shaped | Horizontal landscape dominant for marketing |
| **Scroll behavior** | App-like screens, occasional scroll | Long-scroll narrative is normal and expected |

**The vibe:** the app feels like a tool you use. The website feels like a brand you respect.

---

## 13. Build Checklist

Before declaring any page done, verify ALL of the following:

- [ ] All UI strings use `t('...')` — zero hardcoded text
- [ ] All translation keys present in ALL 11 locale files
- [ ] Page uses ONE of the five layout patterns from Section 5
- [ ] Spacing uses Tailwind tokens — no arbitrary values (`p-[13px]`)
- [ ] Typography uses defined scale — no inline `text-[42px]`
- [ ] Colors come ONLY from configured tokens — no hex strings
- [ ] All images use `next/image` with proper `alt` text
- [ ] All interactive elements keyboard accessible (Tab order verified)
- [ ] Focus rings visible on all interactive elements
- [ ] All icon-only buttons have `aria-label`
- [ ] Tested at 360px, 768px, 1024px, 1440px viewports
- [ ] Tested in `pt-AO` AND `ar` (RTL) locales
- [ ] SEO metadata complete (title, description, OG image)
- [ ] Lighthouse score: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95
- [ ] No console errors or warnings
- [ ] No emoji in UI strings (only Lucide icons)
- [ ] Sentence case for all labels and titles
- [ ] Dark mode parity (test with theme toggle)
- [ ] No `console.log` left in code

---

## 14. Anti-Patterns — NEVER DO THIS

- ❌ Making the website look like the mobile app (no bottom sheets, no map-as-background, no app-style stacked cards everywhere)
- ❌ Hardcoding strings: `<h1>Iniciar sessão</h1>` → use `t('auth.signIn.title')`
- ❌ Inline hex colors → use Tailwind tokens
- ❌ Arbitrary spacing values like `p-[17px]` → use Tailwind scale
- ❌ Inline font sizes like `text-[42px]` → use defined type scale
- ❌ Skipping `next/image` for `<img>` tags
- ❌ Using `<a>` for internal navigation → use Next.js `<Link>`
- ❌ Stocky 3D corporate-people illustrations
- ❌ Multiple accent colors competing — one accent only
- ❌ Heavy shadows / glow effects — keep elevation subtle
- ❌ Title Case headings — sentence case only
- ❌ Cramped padding — when in doubt, more whitespace
- ❌ Underlining text that isn't a link
- ❌ Justified text
- ❌ Stock photography that screams "stock photography" (smiling people in offices)
- ❌ Generic illustrations from undraw.co or similar — use original or none
- ❌ Carousel-heavy hero (auto-rotating slides without purpose)
- ❌ Pop-up modals on page load
- ❌ Adding pages not in the inventory without asking
- ❌ `ml-4`/`mr-4` — use `ms-4`/`me-4` for RTL safety
- ❌ Missing keys in any locale
- ❌ Forgetting metadata on marketing pages
- ❌ Animations longer than 300ms (feels sluggish)
- ❌ Scroll-jacking, parallax overload, marquee text
- ❌ Sticky elements that take more than 80px of vertical space (eats reading area on mobile)

---

## 15. Quick Decision Reference

When designing any new page, ask in order:

1. **What's the conversion goal?** Download app? Apply as driver? Sign up? Read information? That dictates the pattern.
2. **Is this marketing, auth, dashboard, article, or system?** Pick W1–W5 accordingly.
3. **What's the hero headline?** Lead with the most important benefit, not features.
4. **What's the primary CTA?** One per section. Repeat at top and bottom for long pages.
5. **What's the minimum information needed?** Cut everything else.
6. **Where does the reader's eye land?** That element should be the most important — biggest, boldest, or accent-colored.
7. **What can be removed?** Always something can be removed.
8. **Have I checked SEO metadata?** Title, description, OG image, alternates.
9. **Have I tested mobile, tablet, desktop, RTL?** No → not done.

---

## 16. Stack Setup Reference

```bash
# Initial setup
pnpm create next-app@latest baza-web --typescript --tailwind --app --src-dir=false --import-alias="@/*"

cd baza-web
pnpm add next-intl
pnpm add lucide-react
pnpm add @hookform/resolvers zod react-hook-form
pnpm add framer-motion           # for scroll animations (optional)
pnpm add next-sitemap            # for sitemap generation
```

Tailwind config: extend with the tokens defined in Section 3.
ESLint: strict rules, no unused vars, no `any` types.
Prettier: 2-space indent, single quotes, semicolons, trailing commas.

---

## 17. Final Words

If you are reading this and your next action would violate any rule above, STOP. Re-read the relevant section.

The website is the user's first impression of BAZA. It must feel premium, trustworthy, fast, and beautiful. The app is the tool — the website is the brand.

The goal: a flawless Portuguese-first marketing and account portal that respects users across 11 languages, drives conversions cleanly, and feels like it belongs in 2026 alongside Stripe, Linear, and Vercel.

Build accordingly.
