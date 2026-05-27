import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Descarregar",
  description:
    "Descarregue a app BAZA para Android — passageiro ou motorista. APK directo, sem Play Store.",
};

export default function Download() {
  return (
    <main className="flex-1 bg-[var(--color-background)]">
      <Header />

      <section className="px-6 sm:px-10 pt-32 sm:pt-40 pb-16">
        <div className="max-w-4xl mx-auto">
          <p className="eyebrow">Descarregar</p>
          <h1 className="mt-3 text-5xl sm:text-7xl font-extrabold -tracking-[0.035em] leading-[0.95] text-[var(--color-text-primary)]">
            Próxima moto,
            <br />
            um toque.
          </h1>
          <p className="mt-6 max-w-2xl text-lg sm:text-xl leading-[1.5] text-[var(--color-text-secondary)]">
            A BAZA é uma app Android. Está disponível para descarga directa
            como APK. A versão Play Store está em revisão.
          </p>
        </div>
      </section>

      <section className="px-6 sm:px-10 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
          <DownloadCard
            kind="Passageiro"
            title="App BAZA"
            description="Para quem precisa de uma moto-táxi. Pede no mapa, vê o preço antes, paga em kwanzas."
            primaryHref="https://github.com/bazza-taxi/bazza-taxi/releases/latest/download/baza.apk"
            primaryLabel="Descarregar APK"
            releasesHref="https://github.com/bazza-taxi/bazza-taxi/releases"
            accent
          />
          <DownloadCard
            kind="Motorista"
            title="App BAZA Motorista"
            description="Para quem tem moto e quer fazer dinheiro. Vai online, recebe pedidos, paga-se à sexta."
            primaryHref="https://github.com/bazza-taxi/bazza-taxi/releases/latest/download/baza.apk"
            primaryLabel="Descarregar APK"
            releasesHref="https://github.com/bazza-taxi/bazza-taxi/releases"
          />
        </div>
      </section>

      {/* Install instructions */}
      <section className="px-6 sm:px-10 pb-24 sm:pb-32">
        <div className="max-w-4xl mx-auto bg-[var(--color-surface)] rounded-[var(--radius-2xl)] border border-[var(--color-border-light)] p-8 sm:p-12">
          <p className="eyebrow">Como instalar</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold -tracking-[0.02em] text-[var(--color-text-primary)]">
            Em quatro passos.
          </h2>

          <ol className="mt-10 space-y-6">
            {[
              {
                t: "Descarregue o APK",
                b: "Toque no botão acima. O ficheiro chama-se baza.apk.",
              },
              {
                t: "Permita instalação por fontes externas",
                b: "O Android vai pedir permissão para instalar APKs de fora da Play Store. Toque em ‘Definições’ → active para o navegador → volte.",
              },
              {
                t: "Instale",
                b: "Toque no ficheiro descarregado. A instalação demora cerca de 10 segundos.",
              },
              {
                t: "Abra a BAZA",
                b: "Confirme o seu número, verifique o código por SMS e está dentro. Conceda permissão de localização para a app saber onde vai.",
              },
            ].map((s, i) => (
              <li key={s.t} className="flex gap-5">
                <span className="shrink-0 w-9 h-9 rounded-full bg-[var(--color-accent)] text-[var(--color-ink)] font-bold flex items-center justify-center text-sm">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold -tracking-[0.01em] text-[var(--color-text-primary)]">
                    {s.t}
                  </h3>
                  <p className="mt-1 text-base leading-[1.55] text-[var(--color-text-secondary)]">
                    {s.b}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 pt-8 border-t border-[var(--color-border-light)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm text-[var(--color-text-tertiary)]">
              Problemas na instalação? Falamos consigo no WhatsApp em
              português.
            </p>
            <a
              href="https://wa.me/244946124639?text=Preciso%20de%20ajuda%20a%20instalar%20a%20BAZA"
              className="inline-flex items-center justify-center h-11 px-5 rounded-full bg-[var(--color-ink)] text-white font-semibold text-sm hover:translate-y-[-1px] transition shrink-0"
            >
              Falar no WhatsApp →
            </a>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="px-6 sm:px-10 pb-24 sm:pb-32">
        <div className="max-w-7xl mx-auto">
          <p className="eyebrow">Requisitos</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold -tracking-[0.02em] text-[var(--color-text-primary)] max-w-3xl">
            O que precisa para correr a BAZA.
          </h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { t: "Android 7.0+", d: "Funciona em telemóveis a partir de 2017." },
              { t: "Internet móvel", d: "3G chega, 4G é mais rápido." },
              { t: "Permissão de localização", d: "Para sabermos onde o vamos buscar." },
            ].map((r) => (
              <article
                key={r.t}
                className="bg-[var(--color-surface)] rounded-[var(--radius-2xl)] border border-[var(--color-border-light)] p-8"
              >
                <h3 className="text-xl font-semibold -tracking-[0.01em] text-[var(--color-text-primary)]">
                  {r.t}
                </h3>
                <p className="mt-2 text-base text-[var(--color-text-secondary)] leading-[1.55]">
                  {r.d}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-10 text-sm text-[var(--color-text-tertiary)] max-w-2xl">
            iOS ainda não. A maior parte do mercado angolano corre Android — o
            iOS chegará quando justificar a manutenção dupla.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function DownloadCard({
  kind,
  title,
  description,
  primaryHref,
  primaryLabel,
  releasesHref,
  accent,
}: {
  kind: string;
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  releasesHref: string;
  accent?: boolean;
}) {
  const bg = accent
    ? "bg-[var(--color-accent)] text-[var(--color-ink)]"
    : "bg-[var(--color-ink)] text-white";
  const subtle = accent ? "text-[var(--color-ink)]/70" : "text-white/65";
  const primaryCta = accent
    ? "bg-[var(--color-ink)] text-white"
    : "bg-[var(--color-accent)] text-[var(--color-ink)]";
  const secondaryCta = accent
    ? "border border-[var(--color-ink)] text-[var(--color-ink)] hover:bg-[var(--color-ink)]/5"
    : "border border-white/25 text-white hover:bg-white/10";
  return (
    <article
      className={`${bg} rounded-[var(--radius-2xl)] p-10 sm:p-12 grain relative overflow-hidden`}
    >
      <p
        className={`text-[11px] font-semibold tracking-[0.18em] uppercase ${subtle}`}
      >
        {kind}
      </p>
      <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold -tracking-[0.025em] leading-[1]">
        {title}
      </h2>
      <p className={`mt-4 text-base leading-[1.55] max-w-md ${subtle}`}>
        {description}
      </p>
      <div className="mt-9 flex flex-col sm:flex-row gap-3">
        <a
          href={primaryHref}
          className={`inline-flex items-center justify-center h-13 px-7 py-3.5 rounded-full font-semibold text-base hover:translate-y-[-1px] transition ${primaryCta}`}
        >
          {primaryLabel} ↓
        </a>
        <a
          href={releasesHref}
          className={`inline-flex items-center justify-center h-13 px-7 py-3.5 rounded-full font-semibold text-base transition ${secondaryCta}`}
        >
          Ver todas as versões
        </a>
      </div>
    </article>
  );
}
