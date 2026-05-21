import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Motoristas",
  description:
    "Tem moto em Luanda? Trabalhe com a BAZA. Sem mensalidade. 85% de cada viagem é seu. Pagamento todas as sextas-feiras no seu IBAN.",
};

export default function Drivers() {
  return (
    <main className="flex-1">
      <Header mode="dark" />

      {/* Dark hero — calm + premium, no skewed B block */}
      <section className="relative bg-[var(--color-ink)] text-white px-6 sm:px-10 pt-32 sm:pt-44 pb-24 overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(255,199,0,0.6) 0%, rgba(255,199,0,0) 60%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1.5 text-[11px] font-semibold tracking-[0.18em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
              <span>Estamos a recrutar</span>
            </div>
            <h1 className="mt-6 text-5xl sm:text-7xl font-extrabold -tracking-[0.035em] leading-[0.95]">
              Tem moto?
              <br />
              Tem trabalho.
            </h1>
            <p className="mt-7 max-w-xl text-lg sm:text-xl leading-[1.5] text-white/75">
              Ganhe nos seus horários, com viagens em toda a Luanda.
              Sem mensalidade. Recebe direto no IBAN todas as sextas-feiras.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/244946124639?text=Ol%C3%A1%20BAZA%2C%20quero%20ser%20motorista."
                className="inline-flex items-center justify-center h-14 px-7 rounded-full bg-[var(--color-accent)] text-[var(--color-ink)] font-semibold text-base hover:bg-[var(--color-accent-pressed)] transition"
              >
                Candidatar pelo WhatsApp →
              </a>
              <a
                href="#requirements"
                className="inline-flex items-center justify-center h-14 px-7 rounded-full border-[1.5px] border-white/25 text-white font-semibold text-base hover:bg-white/10 transition"
              >
                Ver requisitos
              </a>
            </div>
          </div>

          {/* Earnings card */}
          <div className="bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-[var(--radius-2xl)] p-8">
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-accent)]">
              Exemplo de semana
            </p>
            <p className="mt-3 text-6xl font-extrabold -tracking-[0.025em] text-white">
              Kz 78.500
            </p>
            <p className="mt-1 text-sm text-white/55">
              após comissão BAZA · 6 dias · ~40 viagens
            </p>
            <div className="mt-8 space-y-3 text-sm text-white/80">
              <Row label="Bruto da semana" value="Kz 92.350" />
              <Row label="Comissão BAZA (15%)" value="− Kz 13.850" />
              <Row label="Líquido para si" value="Kz 78.500" strong />
            </div>
          </div>
        </div>
      </section>

      {/* ─── EARNINGS / WHY ─── */}
      <section id="earnings" className="px-6 sm:px-10 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto">
          <p className="eyebrow">Como ganha</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold -tracking-[0.025em] text-[var(--color-text-primary)] max-w-3xl">
            85% de cada viagem é seu.
          </h2>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                t: "Sem mensalidade",
                b: "Nada a pagar antes. Só descontamos a comissão BAZA (15%) quando há viagem.",
                icon: <ZeroGlyph />,
              },
              {
                t: "Recebe à sexta-feira",
                b: "Todas as sextas, transferimos o que ganhou na semana directo para o seu IBAN angolano.",
                icon: <CalendarGlyph />,
              },
              {
                t: "Escolha a hora",
                b: "Entra online quando quiser. Sem turnos. Sem mínimo de viagens.",
                icon: <ClockGlyph />,
              },
            ].map((c) => (
              <article
                key={c.t}
                className="bg-[var(--color-surface)] rounded-[var(--radius-2xl)] p-8 border border-[var(--color-border-light)] hover:border-[var(--color-ink)]/20 transition"
              >
                <div className="w-12 h-12 rounded-2xl bg-[var(--color-accent-soft)] flex items-center justify-center text-[var(--color-ink)]">
                  {c.icon}
                </div>
                <h3 className="mt-8 text-2xl font-semibold -tracking-[0.015em] text-[var(--color-text-primary)]">
                  {c.t}
                </h3>
                <p className="mt-3 text-base leading-[1.55] text-[var(--color-text-secondary)]">
                  {c.b}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── REQUIREMENTS ─── */}
      <section
        id="requirements"
        className="bg-[var(--color-surface-muted)] px-6 sm:px-10 py-24 sm:py-32"
      >
        <div className="max-w-4xl mx-auto">
          <p className="eyebrow">Requisitos</p>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold -tracking-[0.025em] text-[var(--color-text-primary)]">
            Precisa de quatro coisas:
          </h2>
          <ul className="mt-12 space-y-4">
            {REQUIREMENTS.map((r) => (
              <li
                key={r.title}
                className="bg-[var(--color-surface)] rounded-[var(--radius-2xl)] border border-[var(--color-border-light)] p-6 sm:p-8 flex gap-5 items-start"
              >
                <span className="w-11 h-11 rounded-full bg-[var(--color-ink)] text-[var(--color-accent)] flex items-center justify-center shrink-0">
                  {r.icon}
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold -tracking-[0.01em] text-[var(--color-text-primary)]">
                    {r.title}
                  </h3>
                  <p className="mt-1.5 text-base leading-[1.55] text-[var(--color-text-secondary)]">
                    {r.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── STEPS ─── */}
      <section className="px-6 sm:px-10 py-24 sm:py-32">
        <div className="max-w-4xl mx-auto">
          <p className="eyebrow">Como começar</p>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold -tracking-[0.025em] text-[var(--color-text-primary)]">
            Três passos. Em horas.
          </h2>

          <ol className="mt-12 space-y-5">
            {[
              {
                n: "01",
                t: "Fale connosco",
                b: "WhatsApp: +244 946 124 639. Confirmamos requisitos e marcamos uma reunião curta.",
              },
              {
                n: "02",
                t: "Envie os documentos",
                b: "BI, carta A, documentos da moto e IBAN. Validamos no mesmo dia.",
              },
              {
                n: "03",
                t: "Comece a conduzir",
                b: "Recebe o login para a app motorista. Vai online quando quiser.",
              },
            ].map((s) => (
              <li
                key={s.n}
                className="grid grid-cols-[60px_1fr] sm:grid-cols-[80px_1fr] gap-5 items-start"
              >
                <span className="text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] text-[var(--color-accent)]">
                  {s.n}
                </span>
                <div className="border-l border-[var(--color-border-light)] pl-5 sm:pl-8">
                  <h3 className="text-xl sm:text-2xl font-semibold -tracking-[0.01em] text-[var(--color-text-primary)]">
                    {s.t}
                  </h3>
                  <p className="mt-2 text-base leading-[1.55] text-[var(--color-text-secondary)]">
                    {s.b}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-14 flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/244946124639?text=Ol%C3%A1%20BAZA%2C%20quero%20ser%20motorista."
              className="inline-flex items-center justify-center h-14 px-7 rounded-full bg-[var(--color-ink)] text-white font-semibold text-base hover:translate-y-[-1px] transition"
            >
              Candidatar pelo WhatsApp →
            </a>
            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center h-14 px-7 rounded-full border-[1.5px] border-[var(--color-ink)]/85 text-[var(--color-ink)] font-semibold text-base hover:bg-[var(--color-ink)]/5 transition"
            >
              Como funciona para o passageiro
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Row({
  label,
  value,
  strong,
}: {
  label: string;
  value: string;
  strong?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between py-2 ${
        strong ? "border-t border-white/15 pt-3 text-white text-base font-semibold" : ""
      }`}
    >
      <span className="text-white/60">{label}</span>
      <span className={strong ? "text-[var(--color-accent)]" : ""}>
        {value}
      </span>
    </div>
  );
}

const REQUIREMENTS = [
  {
    title: "Moto registada no seu nome",
    body: "Com matrícula angolana válida e em dia.",
    icon: <BikeGlyph />,
  },
  {
    title: "Carta de condução A",
    body: "Original e válida. Verificamos contra o registo.",
    icon: <CardGlyph />,
  },
  {
    title: "Conta bancária angolana",
    body: "IBAN começando em AO06… no seu nome para receber os pagamentos.",
    icon: <BankGlyph />,
  },
  {
    title: "Smartphone Android",
    body: "Android 7.0 ou superior, com ligação à internet.",
    icon: <PhoneGlyph />,
  },
];

/* Inline glyphs (stroke 1.75) */
function ZeroGlyph() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M6 18L18 6" strokeLinecap="round" />
    </svg>
  );
}
function CalendarGlyph() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <rect x="3.5" y="5.5" width="17" height="15" rx="2.5" />
      <path d="M3.5 10h17M8 3v4M16 3v4" strokeLinecap="round" />
    </svg>
  );
}
function ClockGlyph() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function BikeGlyph() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <circle cx="5.5" cy="17.5" r="3" />
      <circle cx="18.5" cy="17.5" r="3" />
      <path d="M5.5 17.5L10 9h5l2 4M13 5h3M9.5 13.5h5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function CardGlyph() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M3 10h18M7 15h4" strokeLinecap="round" />
    </svg>
  );
}
function BankGlyph() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M3 10l9-5 9 5M5 10v8m4-8v8m6-8v8m4-8v8M3 20h18" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function PhoneGlyph() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
      <path d="M11 18.5h2" strokeLinecap="round" />
    </svg>
  );
}
