import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Como funciona",
  description:
    "Quatro passos para pedir uma BAZA em Luanda. Veja como funciona a app, o pagamento e o suporte.",
};

const STEPS = [
  {
    n: "01",
    title: "Abra a app, escolha o destino",
    body: "Na BAZA app, toque na barra de pesquisa, escreva o nome do local ou toque diretamente no mapa. Vamos buscar a sua localização automaticamente.",
  },
  {
    n: "02",
    title: "Confirme o preço",
    body: "Mostramos a distância, o tempo estimado e o preço final ANTES de pedir. Sem surpresas no fim da viagem. Escolha pagar em dinheiro ou por transferência IBAN.",
  },
  {
    n: "03",
    title: "O motorista chega em minutos",
    body: "Mostramos a moto a aproximar-se no mapa em tempo real. Veja o nome do motorista, a foto, a matrícula e o modelo da moto antes de embarcar.",
  },
  {
    n: "04",
    title: "Pague e avalie",
    body: "No fim da viagem, paga ao motorista: se escolheu dinheiro, entrega no momento; se escolheu IBAN, mostramos o número para transferir pela app do seu banco. Depois avalia o motorista de 1 a 5.",
  },
];

export default function HowItWorks() {
  return (
    <main className="flex-1 bg-[var(--color-background)]">
      <Header />

      <section className="px-6 sm:px-12 pt-32 sm:pt-40 pb-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--color-text-tertiary)]">
            Como funciona
          </p>
          <h1 className="mt-3 text-5xl sm:text-7xl font-bold -tracking-[0.03em] leading-[0.95] text-[var(--color-text-primary)]">
            Quatro passos.
            <br />
            Sai daqui.
          </h1>
        </div>
      </section>

      <section className="px-6 sm:px-12 pb-24 sm:pb-32">
        <div className="max-w-4xl mx-auto space-y-6">
          {STEPS.map((step) => (
            <article
              key={step.n}
              className="bg-[var(--color-surface)] rounded-[var(--radius-xl)] p-8 sm:p-12 border border-[var(--color-border-light)] grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-6"
            >
              <p className="text-5xl font-bold -tracking-[0.03em] text-[var(--color-accent)]">
                {step.n}
              </p>
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold -tracking-[0.01em] text-[var(--color-text-primary)]">
                  {step.title}
                </h2>
                <p className="mt-4 text-lg leading-[1.55] text-[var(--color-text-secondary)]">
                  {step.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
