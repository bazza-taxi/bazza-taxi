import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Segurança",
  description:
    "Como a BAZA mantém passageiros e motoristas seguros em Luanda — verificação de identidade, partilha de viagem, suporte humano.",
};

export default function Safety() {
  return (
    <main className="flex-1 bg-[var(--color-background)]">
      <Header />

      <section className="px-6 sm:px-10 pt-32 sm:pt-40 pb-16">
        <div className="max-w-4xl mx-auto">
          <p className="eyebrow">Segurança</p>
          <h1 className="mt-3 text-5xl sm:text-7xl font-extrabold -tracking-[0.035em] leading-[0.95] text-[var(--color-text-primary)]">
            Cada viagem.
            <br />
            Verificada.
          </h1>
          <p className="mt-6 max-w-2xl text-lg sm:text-xl leading-[1.5] text-[var(--color-text-secondary)]">
            Cada motorista BAZA passou por verificação manual. Cada viagem é
            registada em tempo real. E há sempre alguém em português, em Luanda,
            do outro lado.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="px-6 sm:px-10 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {PILLARS.map((p) => (
            <article
              key={p.t}
              className="bg-[var(--color-surface)] rounded-[var(--radius-2xl)] border border-[var(--color-border-light)] p-8 sm:p-10"
            >
              <div className="w-12 h-12 rounded-2xl bg-[var(--color-accent-soft)] flex items-center justify-center text-[var(--color-ink)]">
                {p.icon}
              </div>
              <h3 className="mt-8 text-2xl font-semibold -tracking-[0.015em] text-[var(--color-text-primary)]">
                {p.t}
              </h3>
              <p className="mt-3 text-base leading-[1.55] text-[var(--color-text-secondary)]">
                {p.b}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Identity verification */}
      <section className="bg-[var(--color-ink)] text-white px-6 sm:px-10 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 items-start">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-accent)]">
              Verificação de motorista
            </p>
            <h2 className="mt-3 text-3xl sm:text-5xl font-bold -tracking-[0.025em] max-w-2xl">
              Cinco documentos. Validação manual.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-[1.55] text-white/70">
              Antes de qualquer motorista entrar online na BAZA, validamos
              manualmente cinco documentos contra o registo angolano.
            </p>
          </div>
          <ul className="space-y-3">
            {[
              "Bilhete de identidade angolano",
              "Carta de condução A (moto)",
              "Documentos da moto + matrícula",
              "Comprovativo de IBAN no nome do motorista",
              "Foto do motorista para o perfil",
            ].map((doc) => (
              <li
                key={doc}
                className="flex items-center gap-3 bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4"
              >
                <span className="w-7 h-7 rounded-full bg-[var(--color-accent)] text-[var(--color-ink)] flex items-center justify-center shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M5 12.5L10 17.5L19 7" />
                  </svg>
                </span>
                <span className="text-base font-medium">{doc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* In-app safety features */}
      <section className="px-6 sm:px-10 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto">
          <p className="eyebrow">Na app</p>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold -tracking-[0.025em] text-[var(--color-text-primary)] max-w-3xl">
            O que faz no momento.
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl">
            {FEATURES.map((f) => (
              <div key={f.t}>
                <h3 className="text-xl font-semibold -tracking-[0.01em] text-[var(--color-text-primary)]">
                  {f.t}
                </h3>
                <p className="mt-2 text-base leading-[1.55] text-[var(--color-text-secondary)]">
                  {f.b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="px-6 sm:px-10 pb-24 sm:pb-32">
        <div className="max-w-4xl mx-auto bg-[var(--color-accent)] rounded-[var(--radius-2xl)] p-10 sm:p-16 grain">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-ink)]/70">
            Está em apuros?
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold -tracking-[0.025em] text-[var(--color-ink)]">
            Falamos consigo em segundos.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-[1.55] text-[var(--color-ink)]/80">
            Suporte humano por WhatsApp, em português, do nosso escritório
            em Luanda. Resposta dentro de 5 minutos durante o dia.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/244946124639?text=Preciso%20de%20ajuda%20BAZA"
              className="inline-flex items-center justify-center h-13 px-7 py-3.5 rounded-full bg-[var(--color-ink)] text-white font-semibold text-base hover:translate-y-[-1px] transition"
            >
              WhatsApp suporte →
            </a>
            <Link
              href="/about"
              className="inline-flex items-center justify-center h-13 px-7 py-3.5 rounded-full border-[1.5px] border-[var(--color-ink)] text-[var(--color-ink)] font-semibold text-base hover:bg-[var(--color-ink)]/5 transition"
            >
              Saber mais sobre nós
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const PILLARS = [
  {
    t: "Identidade real",
    b: "Cada motorista tem foto, nome e matrícula visível antes de embarcar. Sem perfis anónimos.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <circle cx="12" cy="9" r="3.5" />
        <path d="M5 20c0-3.5 3.1-6 7-6s7 2.5 7 6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    t: "GPS em tempo real",
    b: "Toda a viagem é registada em tempo real, com a posição do motorista visível no mapa.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path d="M12 22s-7-6.5-7-12a7 7 0 1 1 14 0c0 5.5-7 12-7 12z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  },
  {
    t: "Partilhe a viagem",
    b: "Envia um link a alguém de confiança que mostra a sua localização até chegar ao destino.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <circle cx="6" cy="12" r="2.5" />
        <circle cx="18" cy="6" r="2.5" />
        <circle cx="18" cy="18" r="2.5" />
        <path d="M8.2 11L16 7M8.2 13L16 17" strokeLinecap="round" />
      </svg>
    ),
  },
];

const FEATURES = [
  {
    t: "Identidade do motorista",
    b: "Foto, nome, matrícula e modelo da moto antes de embarcar. Toque no perfil para ver a avaliação média.",
  },
  {
    t: "Partilha de viagem",
    b: "Envie por WhatsApp um link em tempo real que mostra a sua localização durante a viagem inteira.",
  },
  {
    t: "Pagamento sem dinheiro extra",
    b: "Quando paga por IBAN, não precisa de andar com troco. Reduz risco de assalto antes e depois.",
  },
  {
    t: "Avaliação obrigatória",
    b: "Após cada viagem avalia o motorista. Motoristas abaixo de 4.3 são suspensos automaticamente.",
  },
  {
    t: "Suporte humano",
    b: "WhatsApp de suporte em português, com escritório em Luanda. Resposta em menos de 5 minutos.",
  },
  {
    t: "Histórico permanente",
    b: "Cada viagem fica gravada no seu histórico — útil para reclamações ou para refazer o trajecto.",
  },
];
