import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Header />

      {/* ─────────────────────────── HERO ───────────────────────────
          Calm-premium hero: yellow brand wash on the left with the
          editorial headline + CTAs, a stylised phone mockup on the
          right. No skew, no rotated B blocks, no brutalism. */}
      <section className="relative pt-28 sm:pt-32 pb-20 sm:pb-28 overflow-hidden bg-[var(--color-accent)] grain">
        {/* Soft radial highlight in the corner — gives the flat yellow
            wall a sense of light without breaking the calm. */}
        <div
          aria-hidden
          className="absolute -top-40 -right-40 w-[640px] h-[640px] rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 60%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] text-white text-[11px] font-semibold tracking-[0.16em] uppercase px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
              <span>Luanda — Online agora</span>
            </div>

            <h1 className="mt-6 text-[clamp(2.75rem,7.5vw,5.75rem)] font-extrabold leading-[0.95] tracking-[-0.035em] text-[var(--color-ink)]">
              A moto-táxi
              <br />
              de Luanda.
            </h1>

            <p className="mt-6 max-w-xl text-lg sm:text-xl leading-[1.5] text-[var(--color-ink)]/80">
              Em segundos, do mapa para a moto. Preço justo para si e para
              o motorista. Pagamento em dinheiro ou IBAN. Sem cartões
              internacionais.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Link
                href="/download"
                className="inline-flex items-center justify-center gap-2 h-14 px-7 rounded-full bg-[var(--color-ink)] text-white font-semibold text-base shadow-lg shadow-[var(--color-ink)]/10 hover:translate-y-[-1px] transition"
              >
                <PlayStoreGlyph />
                Descarregar para Android
              </Link>
              <Link
                href="/drivers"
                className="inline-flex items-center justify-center h-14 px-7 rounded-full border-[1.5px] border-[var(--color-ink)]/85 text-[var(--color-ink)] font-semibold text-base hover:bg-[var(--color-ink)]/5 transition"
              >
                Quero ser motorista →
              </Link>
            </div>

            {/* Trust microcopy under CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-[var(--color-ink)]/70 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckGlyph /> Motoristas verificados
              </span>
              <span className="flex items-center gap-1.5">
                <CheckGlyph /> Preço antes de pedir
              </span>
              <span className="flex items-center gap-1.5">
                <CheckGlyph /> 100% angolana
              </span>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </section>

      {/* ──────────────────── TRUST MARQUEE STRIP ──────────────────── */}
      <section className="border-y border-[var(--color-border-light)] bg-[var(--color-surface)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-5 flex items-center gap-6 overflow-hidden">
          <p className="eyebrow shrink-0 hidden md:block">
            Cobertura
          </p>
          <div className="overflow-hidden">
            <ul className="marquee-track flex shrink-0 items-center gap-10 whitespace-nowrap text-sm font-medium text-[var(--color-text-secondary)]">
              {[
                "Talatona",
                "Ingombota",
                "Maianga",
                "Miramar",
                "Kilamba",
                "Viana",
                "Cazenga",
                "Cacuaco",
                "Belas",
                "Ilha de Luanda",
                "Marginal",
                "Cidade Alta",
              ]
                .concat([
                  "Talatona",
                  "Ingombota",
                  "Maianga",
                  "Miramar",
                  "Kilamba",
                  "Viana",
                  "Cazenga",
                  "Cacuaco",
                  "Belas",
                  "Ilha de Luanda",
                  "Marginal",
                  "Cidade Alta",
                ])
                .map((bairro, i) => (
                  <li
                    key={`${bairro}-${i}`}
                    className="flex items-center gap-3"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]"
                      aria-hidden
                    />
                    {bairro}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ──────────────────── HOW IT WORKS ──────────────────── */}
      <section className="px-6 sm:px-10 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="eyebrow">Como funciona</p>
            <h2 className="mt-3 text-4xl sm:text-6xl font-bold -tracking-[0.025em] leading-[1] text-[var(--color-text-primary)]">
              Três passos, zero fricção.
            </h2>
            <p className="mt-5 text-lg sm:text-xl text-[var(--color-text-secondary)] leading-[1.5] max-w-2xl">
              Construímos a BAZA para ser tão directa como apanhar um candongueiro
              — só que confortável, com preço fechado e a moto a aparecer no mapa.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                n: "01",
                title: "Diga onde vai",
                body: "Pesquise o local ou toque directamente no mapa. Vemos o preço antes de confirmar.",
                icon: <PinGlyph />,
              },
              {
                n: "02",
                title: "Aceitamos em segundos",
                body: "O motorista mais próximo aceita o pedido. Vê a moto a aproximar-se em tempo real.",
                icon: <RouteGlyph />,
              },
              {
                n: "03",
                title: "Paga como quiser",
                body: "Dinheiro no fim da viagem ou transferência IBAN. Sem cartões internacionais, sem apps de pagamento.",
                icon: <CashGlyph />,
              },
            ].map((step) => (
              <article
                key={step.n}
                className="relative bg-[var(--color-surface)] rounded-[var(--radius-2xl)] p-8 sm:p-10 border border-[var(--color-border-light)] hover:border-[var(--color-ink)]/20 transition"
              >
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--color-accent-soft)] flex items-center justify-center text-[var(--color-ink)]">
                    {step.icon}
                  </div>
                  <span className="font-mono text-sm text-[var(--color-text-tertiary)]">
                    {step.n}
                  </span>
                </div>
                <h3 className="mt-8 text-2xl font-semibold -tracking-[0.015em] text-[var(--color-text-primary)]">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-[1.55] text-[var(--color-text-secondary)]">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────── BIG STAT BAND ──────────────────── */}
      <section className="px-6 sm:px-10 pb-24 sm:pb-32">
        <div className="max-w-7xl mx-auto bg-[var(--color-ink)] text-white rounded-[var(--radius-2xl)] px-8 sm:px-16 py-16 sm:py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {[
              {
                k: "85%",
                v: "Para o motorista",
                d: "Comissão BAZA fica em 15%. Sem mensalidade, sem cláusulas.",
              },
              {
                k: "< 5 min",
                v: "Tempo médio de chegada",
                d: "Em hora diurna na zona central de Luanda.",
              },
              {
                k: "0 ¢",
                v: "Cartões internacionais",
                d: "Paga em kwanzas, em dinheiro ou IBAN angolano.",
              },
            ].map((s) => (
              <div key={s.v}>
                <p className="text-5xl sm:text-7xl font-bold -tracking-[0.03em] text-[var(--color-accent)] leading-none">
                  {s.k}
                </p>
                <p className="mt-4 text-lg font-semibold">{s.v}</p>
                <p className="mt-2 text-sm text-white/65 leading-[1.55] max-w-xs">
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────── DRIVER RECRUITMENT ──────────────────── */}
      <section className="bg-[var(--color-surface-muted)] px-6 sm:px-10 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-16 items-center">
          <div>
            <p className="eyebrow">Motoristas</p>
            <h2 className="mt-3 text-4xl sm:text-6xl font-bold -tracking-[0.03em] leading-[0.98] text-[var(--color-text-primary)]">
              Tem moto?
              <br />
              Tem trabalho.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-[1.5] text-[var(--color-text-secondary)]">
              Ganhe nos seus horários. Recebe direto no IBAN angolano todas
              as sextas-feiras. Suporte humano por WhatsApp.
            </p>
            <Link
              href="/drivers"
              className="mt-9 inline-flex items-center justify-center h-13 h-13 px-7 py-3.5 rounded-full bg-[var(--color-ink)] text-white font-semibold text-base hover:translate-y-[-1px] transition"
            >
              Saber como começar →
            </Link>
          </div>

          <div className="bg-[var(--color-surface)] rounded-[var(--radius-2xl)] border border-[var(--color-border-light)] p-8 sm:p-10">
            <p className="eyebrow">Exemplo de semana</p>
            <p className="mt-4 text-5xl sm:text-6xl font-bold -tracking-[0.025em] text-[var(--color-text-primary)]">
              Kz 78&nbsp;500
            </p>
            <p className="mt-1 text-sm text-[var(--color-text-tertiary)]">
              após comissão BAZA · 6 dias · ~40 viagens
            </p>
            <ul className="mt-8 space-y-4 text-base text-[var(--color-text-secondary)]">
              {[
                "Sem mensalidade — só paga quando há viagem",
                "Pagamento todas as sextas no seu IBAN",
                "Você escolhe a hora e a zona",
                "Suporte em português por WhatsApp",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircleGlyph />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ──────────────────── FAQ ──────────────────── */}
      <section className="px-6 sm:px-10 py-24 sm:py-32">
        <div className="max-w-4xl mx-auto">
          <p className="eyebrow text-center">Perguntas frequentes</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold -tracking-[0.025em] text-center text-[var(--color-text-primary)]">
            Tudo o que precisa de saber.
          </h2>

          <div className="mt-14 divide-y divide-[var(--color-border-light)]">
            {FAQ.map((qa) => (
              <details
                key={qa.q}
                className="group py-6 [&[open]>summary>span:last-child]:rotate-45"
              >
                <summary className="flex cursor-pointer items-start justify-between gap-6 list-none">
                  <span className="text-lg sm:text-xl font-semibold -tracking-[0.01em] text-[var(--color-text-primary)]">
                    {qa.q}
                  </span>
                  <span
                    aria-hidden
                    className="shrink-0 w-9 h-9 rounded-full bg-[var(--color-surface-muted)] flex items-center justify-center text-[var(--color-ink)] text-xl font-bold transition-transform duration-200"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 pr-12 text-base leading-[1.6] text-[var(--color-text-secondary)]">
                  {qa.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────── DOWNLOAD ──────────────────── */}
      <section
        id="download"
        className="relative bg-[var(--color-accent)] px-6 sm:px-10 py-24 sm:py-32 grain overflow-hidden"
      >
        <div className="relative max-w-7xl mx-auto text-center">
          <p className="eyebrow text-[var(--color-ink)]/70">Descarregar</p>
          <h2 className="mt-3 text-5xl sm:text-7xl font-bold -tracking-[0.03em] leading-[0.95] text-[var(--color-ink)]">
            Próxima moto, um toque.
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-lg leading-[1.5] text-[var(--color-ink)]/80">
            Descarregue a app BAZA para Android. App do motorista
            separadamente.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/download"
              className="inline-flex items-center justify-center gap-2 h-14 px-7 rounded-full bg-[var(--color-ink)] text-white font-semibold text-base hover:translate-y-[-1px] transition"
            >
              <PlayStoreGlyph />
              Ver opções de descarga
            </Link>
            <Link
              href="/drivers"
              className="inline-flex items-center justify-center gap-2 h-14 px-7 rounded-full border-[1.5px] border-[var(--color-ink)] text-[var(--color-ink)] font-semibold text-base hover:bg-[var(--color-ink)]/5 transition"
            >
              Quero ser motorista →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* ─────────────────────────── DATA ─────────────────────────── */

const FAQ = [
  {
    q: "Quanto custa uma viagem na BAZA?",
    a: "Mostramos o preço antes de pedir. O cálculo combina a distância pelo trajecto real e o tempo estimado — sem surge pricing nem multiplicadores escondidos.",
  },
  {
    q: "Como pago?",
    a: "Em dinheiro ao motorista, no fim da viagem, ou por transferência IBAN. No fim mostramos-lhe o IBAN angolano do motorista para usar na app do seu banco. Não pedimos cartões internacionais.",
  },
  {
    q: "Em que cidades está disponível?",
    a: "A BAZA opera em Luanda — incluindo Talatona, Maianga, Ingombota, Miramar, Viana, Cazenga, Kilamba, Cacuaco, Belas e Marginal. Benguela, Huambo e Lobito estão em preparação.",
  },
  {
    q: "Como me torno motorista BAZA?",
    a: "Precisa de uma moto registada no seu nome, carta de condução A, conta bancária angolana e um Android. Toque em ‘Quero ser motorista’ e candidata-se em minutos.",
  },
  {
    q: "É seguro?",
    a: "Todos os motoristas são verificados (BI, carta, documentos da moto). Vê a foto, o nome, a matrícula e a moto antes de embarcar — e pode partilhar a viagem com alguém em tempo real.",
  },
];

/* ─────────────────────────── GLYPHS ───────────────────────────
   Tiny inline SVGs — kept here so the page is one file and avoids
   the icon-library bloat. Stroke 1.75 keeps weight consistent
   with Material rounded set used in the Android app. */

function CheckGlyph() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12.5L9.5 18L20 7" />
    </svg>
  );
}

function CheckCircleGlyph() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="text-[var(--color-ink)] shrink-0 mt-0.5"
    >
      <circle cx="12" cy="12" r="11" fill="var(--color-accent)" />
      <path
        d="M7 12.5L10.5 16L17 9"
        stroke="var(--color-ink)"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlayStoreGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M3.6 2.3c-.4.3-.6.7-.6 1.2v17c0 .5.2.9.6 1.2l9.8-9.8L3.6 2.3z" opacity=".9" />
      <path d="M14.4 12.7l2.7 2.7 3.5-2c.7-.4.7-1.4 0-1.8l-3.5-2-2.7 3.1z" />
      <path d="M13.4 11.7l3.3-3.3-9.7-5.5c-.6-.4-1.4 0-1.4.7v.1l7.8 8z" />
      <path d="M13.4 13.1l-7.8 8v.1c0 .8.8 1.1 1.4.7l9.7-5.5-3.3-3.3z" />
    </svg>
  );
}

function PinGlyph() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s-7-6.5-7-12a7 7 0 1 1 14 0c0 5.5-7 12-7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function RouteGlyph() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="6" cy="19" r="2.5" />
      <circle cx="18" cy="5" r="2.5" />
      <path d="M8.5 19H14a4 4 0 0 0 0-8h-4a4 4 0 0 1 0-8h5.5" />
    </svg>
  );
}

function CashGlyph() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="6" width="18" height="12" rx="2.5" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M6 9.5h.01M18 14.5h.01" />
    </svg>
  );
}

/* Phone mockup — stylised, hand-built. Shows a tiny preview of the
   passenger Home screen (yellow top bar + sheet card) so people get
   what they're downloading. */
function PhoneMockup() {
  return (
    <div className="relative w-[280px] sm:w-[340px] aspect-[9/19] reveal">
      {/* Phone body */}
      <div className="absolute inset-0 rounded-[44px] bg-[var(--color-ink)] shadow-2xl shadow-[var(--color-ink)]/30" />
      <div className="absolute inset-[6px] rounded-[40px] bg-[var(--color-background)] overflow-hidden">
        {/* Status bar */}
        <div className="h-7 flex items-center justify-between px-6 text-[10px] font-semibold text-[var(--color-text-primary)]">
          <span>9:41</span>
          <span className="flex items-center gap-1">
            <span className="w-3 h-1.5 rounded-sm bg-[var(--color-text-primary)]" />
          </span>
        </div>

        {/* "Map" surface */}
        <div className="relative h-[68%] bg-[#E9F2EC] overflow-hidden">
          {/* Faux street lines */}
          <svg
            viewBox="0 0 300 400"
            className="absolute inset-0 w-full h-full"
            aria-hidden
          >
            <path
              d="M0 120 Q 80 100 180 140 T 320 200"
              stroke="#FFFFFF"
              strokeWidth="14"
              fill="none"
            />
            <path
              d="M0 240 Q 100 220 200 260 T 320 300"
              stroke="#FFFFFF"
              strokeWidth="10"
              fill="none"
            />
            <path
              d="M50 0 Q 80 100 130 180 T 200 400"
              stroke="#FFFFFF"
              strokeWidth="10"
              fill="none"
            />
            <path
              d="M0 60 L 320 80"
              stroke="#DDE7DF"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M0 320 L 320 340"
              stroke="#DDE7DF"
              strokeWidth="2"
              fill="none"
            />

            {/* Route line yellow */}
            <path
              d="M70 280 Q 130 200 230 130"
              stroke="#0B0B0B"
              strokeWidth="10"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M70 280 Q 130 200 230 130"
              stroke="#FFC700"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
            />
          </svg>

          {/* Pickup + destination pins */}
          <div className="absolute left-[18%] top-[68%] flex flex-col items-center">
            <div className="w-6 h-6 rounded-full bg-[var(--color-accent)] border-[3px] border-white shadow-md" />
          </div>
          <div className="absolute right-[18%] top-[28%] flex flex-col items-center">
            <div className="w-7 h-7 rounded-full bg-[var(--color-ink)] border-[3px] border-white shadow-md" />
          </div>

          {/* Search pill */}
          <div className="absolute left-3 right-3 top-3 flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-[12px] font-bold text-[var(--color-ink)]">
              L
            </div>
            <div className="flex-1 h-9 rounded-full bg-white shadow-sm border border-[var(--color-border-light)] flex items-center px-3 text-[11px] text-[var(--color-text-tertiary)]">
              Para onde vai?
            </div>
          </div>
        </div>

        {/* Bottom sheet */}
        <div className="absolute left-0 right-0 bottom-0 bg-white rounded-t-3xl px-5 pt-3 pb-5 shadow-[0_-8px_24px_rgba(11,11,11,0.06)]">
          <div className="w-10 h-1 rounded-full bg-[var(--color-border-strong)] mx-auto" />
          <p className="mt-4 text-[10px] font-semibold tracking-[0.18em] uppercase text-[var(--color-text-tertiary)]">
            Estimativa
          </p>
          <p className="mt-1 text-2xl font-bold tracking-[-0.02em] text-[var(--color-text-primary)]">
            Kz 1.500
          </p>
          <div className="mt-1 text-[10px] text-[var(--color-text-tertiary)]">
            3.2 km · 8 min
          </div>
          <div className="mt-3 h-9 rounded-full bg-[var(--color-ink)] flex items-center justify-center text-[11px] font-semibold text-[var(--color-accent)]">
            Pedir BAZA
          </div>
        </div>
      </div>

      {/* Floating tag — "ETA 4 min" */}
      <div className="absolute -left-3 sm:-left-8 top-[28%] bg-white rounded-2xl shadow-xl px-3 py-2 flex items-center gap-2 border border-[var(--color-border-light)]">
        <span className="w-7 h-7 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-[10px] font-bold text-[var(--color-ink)]">
          4′
        </span>
        <div>
          <p className="text-[10px] font-semibold text-[var(--color-text-primary)] leading-none">
            Chegada
          </p>
          <p className="text-[10px] text-[var(--color-text-tertiary)] mt-0.5">
            4 min
          </p>
        </div>
      </div>
      <div className="absolute -right-3 sm:-right-6 top-[58%] bg-white rounded-2xl shadow-xl px-3 py-2 flex items-center gap-2 border border-[var(--color-border-light)]">
        <span className="w-2 h-2 rounded-full bg-emerald-500" />
        <p className="text-[10px] font-semibold text-[var(--color-text-primary)]">
          Pagamento confirmado
        </p>
      </div>
    </div>
  );
}
