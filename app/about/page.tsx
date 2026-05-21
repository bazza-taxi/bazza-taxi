import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "BAZA é a moto-táxi de Luanda — feita em Angola, para Angola. Pertença local, comissão justa, pagamento em moeda nacional.",
};

export default function About() {
  return (
    <main className="flex-1 bg-[var(--color-background)]">
      <Header />

      {/* Hero */}
      <section className="px-6 sm:px-10 pt-32 sm:pt-40 pb-16 sm:pb-24">
        <div className="max-w-4xl mx-auto">
          <p className="eyebrow">Sobre</p>
          <h1 className="mt-3 text-5xl sm:text-7xl font-extrabold -tracking-[0.035em] leading-[0.95] text-[var(--color-text-primary)]">
            Luanda merecia
            <br />
            uma BAZA.
          </h1>
          <p className="mt-8 max-w-2xl text-lg sm:text-xl leading-[1.5] text-[var(--color-text-secondary)]">
            Construímos a BAZA porque pedir uma moto-táxi em Luanda devia ser
            simples — para quem viaja e para quem conduz. Sem mensalidades,
            sem app de pagamentos importada, sem fricção. Só um pedido, uma
            moto, um preço justo.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[var(--color-surface-muted)] px-6 sm:px-10 py-24 sm:py-32">
        <div className="max-w-4xl mx-auto">
          <p className="eyebrow">Missão</p>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold -tracking-[0.025em] text-[var(--color-text-primary)]">
            Mobilidade local, justa, sem intermediários.
          </h2>
          <div className="mt-10 space-y-6 text-lg leading-[1.6] text-[var(--color-text-secondary)] max-w-2xl">
            <p>
              Os motoristas BAZA ficam com 85% de cada viagem. A BAZA fica com
              15% para manter a plataforma, a app e o suporte. Sem taxa
              mensal, sem cláusulas escondidas.
            </p>
            <p>
              Os passageiros vêem o preço antes de pedir e pagam directo ao
              motorista — em dinheiro, ou por transferência IBAN com o número
              que aparece no fim da viagem. Nada de cartões internacionais.
            </p>
            <p>
              É a moto-táxi como sempre foi feita em Luanda, com a tecnologia
              que faz hoje sentido.
            </p>
          </div>
        </div>
      </section>

      {/* Stats grid */}
      <section className="px-6 sm:px-10 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6">
          {[
            { stat: "100%", label: "Pertença angolana" },
            { stat: "85 / 15", label: "Motorista / BAZA" },
            { stat: "Luanda", label: "Cidade-piloto" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-[var(--color-surface)] rounded-[var(--radius-2xl)] border border-[var(--color-border-light)] p-10"
            >
              <p className="text-5xl sm:text-6xl font-extrabold -tracking-[0.03em] text-[var(--color-text-primary)] leading-none">
                {item.stat}
              </p>
              <p className="mt-4 text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-text-tertiary)]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-[var(--color-ink)] text-white px-6 sm:px-10 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-accent)]">
            Princípios
          </p>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold -tracking-[0.025em] max-w-3xl">
            Como tomamos cada decisão.
          </h2>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl">
            {[
              {
                t: "Preço primeiro, depois o pedido",
                b: "Nunca há surpresa no fim da viagem. O passageiro vê o valor antes de aceitar.",
              },
              {
                t: "Pagar em kwanzas",
                b: "Toda a economia da BAZA fica em Angola. Não dependemos de processadoras internacionais.",
              },
              {
                t: "Motorista é parceiro",
                b: "85% de cada viagem é do motorista. Quem trabalha leva a maior parte.",
              },
              {
                t: "Suporte humano",
                b: "Atendimento por WhatsApp em português, com pessoas reais em Luanda.",
              },
            ].map((v) => (
              <div key={v.t}>
                <h3 className="text-xl font-semibold -tracking-[0.01em]">
                  {v.t}
                </h3>
                <p className="mt-2 text-base text-white/70 leading-[1.55]">
                  {v.b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
