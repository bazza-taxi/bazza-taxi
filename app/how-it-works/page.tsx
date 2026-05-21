import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Como funciona",
  description:
    "Quatro passos para pedir uma BAZA em Luanda. Como funciona a app, o pagamento e o suporte.",
};

const STEPS = [
  {
    n: "01",
    title: "Abra a app, escolha o destino",
    body: "Pesquise pelo nome do local ou toque directamente no mapa. A BAZA usa a sua localização automaticamente. Lugares recomendados em Luanda aparecem na busca, mesmo sem escrever nada.",
  },
  {
    n: "02",
    title: "Confirme o preço",
    body: "Mostramos a distância, o tempo estimado e o preço final ANTES de pedir. Sem surge pricing, sem multiplicadores. Escolha pagar em dinheiro ou por transferência IBAN.",
  },
  {
    n: "03",
    title: "O motorista chega em minutos",
    body: "Vê a moto a aproximar-se em tempo real no mapa. O nome do motorista, a foto, a matrícula e o modelo aparecem antes de embarcar — pode partilhar a viagem com alguém de confiança.",
  },
  {
    n: "04",
    title: "Pague e avalie",
    body: "No fim, paga ao motorista: dinheiro entregue na hora, ou IBAN angolano que mostramos para usar na app do seu banco. Depois avalia o motorista de 1 a 5.",
  },
];

export default function HowItWorks() {
  return (
    <main className="flex-1 bg-[var(--color-background)]">
      <Header />

      <section className="px-6 sm:px-10 pt-32 sm:pt-40 pb-20">
        <div className="max-w-4xl mx-auto">
          <p className="eyebrow">Como funciona</p>
          <h1 className="mt-3 text-5xl sm:text-7xl font-extrabold -tracking-[0.035em] leading-[0.95] text-[var(--color-text-primary)]">
            Quatro passos.
            <br />
            Sai daqui.
          </h1>
          <p className="mt-6 max-w-2xl text-lg sm:text-xl text-[var(--color-text-secondary)] leading-[1.5]">
            Do pedido à viagem em menos de cinco minutos. Veja como a BAZA
            torna mais simples andar de moto-táxi em Luanda.
          </p>
        </div>
      </section>

      <section className="px-6 sm:px-10 pb-20 sm:pb-32">
        <div className="max-w-4xl mx-auto space-y-5">
          {STEPS.map((step) => (
            <article
              key={step.n}
              className="bg-[var(--color-surface)] rounded-[var(--radius-2xl)] p-8 sm:p-12 border border-[var(--color-border-light)] grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-6"
            >
              <p className="text-5xl font-extrabold -tracking-[0.03em] text-[var(--color-accent)] leading-none">
                {step.n}
              </p>
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold -tracking-[0.015em] text-[var(--color-text-primary)]">
                  {step.title}
                </h2>
                <p className="mt-4 text-lg leading-[1.6] text-[var(--color-text-secondary)]">
                  {step.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Soft CTA */}
      <section className="px-6 sm:px-10 pb-24 sm:pb-32">
        <div className="max-w-4xl mx-auto bg-[var(--color-accent)] rounded-[var(--radius-2xl)] p-10 sm:p-16 grain">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-ink)]/70">
            Pronto?
          </p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold -tracking-[0.025em] text-[var(--color-ink)] max-w-2xl">
            Próxima moto, um toque.
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/download"
              className="inline-flex items-center justify-center h-13 px-7 py-3.5 rounded-full bg-[var(--color-ink)] text-white font-semibold text-base hover:translate-y-[-1px] transition"
            >
              Descarregar a app
            </Link>
            <Link
              href="/drivers"
              className="inline-flex items-center justify-center h-13 px-7 py-3.5 rounded-full border-[1.5px] border-[var(--color-ink)] text-[var(--color-ink)] font-semibold text-base hover:bg-[var(--color-ink)]/5 transition"
            >
              Quero ser motorista
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
