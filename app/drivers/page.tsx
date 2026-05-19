import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Motoristas",
  description:
    "Tem moto em Luanda? Trabalhe com a BAZA. Sem mensalidade, 85% do valor de cada viagem é seu, pagamento todas as sextas-feiras direto na sua conta.",
};

export default function Drivers() {
  return (
    <main className="flex-1">
      <Header />

      <section className="relative min-h-[80svh] bg-[var(--color-text-primary)] text-white overflow-hidden px-6 sm:px-12 pt-32 sm:pt-44 pb-20">
        <div className="absolute top-20 right-8 sm:top-32 sm:right-16 -rotate-6 opacity-90">
          <div className="bg-[var(--color-accent)] w-24 h-24 sm:w-36 sm:h-36 flex items-center justify-center">
            <span className="rotate-6 text-[var(--color-text-primary)] font-bold text-6xl sm:text-8xl leading-none -tracking-[0.04em]">
              B
            </span>
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--color-accent)] opacity-90">
            Motoristas
          </p>
          <h1 className="mt-3 text-5xl sm:text-7xl font-bold -tracking-[0.03em] leading-[0.95]">
            Tem moto?
            <br />
            Tem trabalho.
          </h1>
          <p className="mt-8 max-w-xl text-lg sm:text-xl leading-[1.45] text-white/80">
            Ganhe dinheiro nos seus horários, com viagens em toda a Luanda.
            Sem mensalidade. Recebe direto na sua conta todas as sextas-feiras.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link
              href="/drivers/apply"
              className="inline-flex items-center justify-center h-14 px-8 rounded-[var(--radius-lg)] bg-[var(--color-accent)] text-[var(--color-text-primary)] font-semibold text-base transition hover:bg-[var(--color-accent-pressed)]"
            >
              Candidatar agora
            </Link>
            <a
              href="https://wa.me/244946124639?text=Ol%C3%A1%20BAZA%2C%20quero%20ser%20motorista."
              className="inline-flex items-center justify-center h-14 px-8 rounded-[var(--radius-lg)] border-[1.5px] border-white/30 text-white font-semibold text-base transition hover:bg-white/10"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-background)] px-6 sm:px-12 py-24 sm:py-32">
        <div className="max-w-6xl mx-auto">
          <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--color-text-tertiary)]">
            Como ganha
          </p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold -tracking-[0.02em] text-[var(--color-text-primary)] max-w-2xl">
            85% de cada viagem é seu.
          </h2>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                t: "Sem mensalidade",
                b: "Nada para pagar antes. Só damos descontamos a comissão BAZA (15%) quando há viagem.",
              },
              {
                t: "Recebe à sexta-feira",
                b: "Todas as sextas-feiras transferimos o que ganhou na semana directo para o seu IBAN.",
              },
              {
                t: "Você escolhe a hora",
                b: "Entra online quando quiser, sai quando precisar. Sem turnos. Sem mínimo de viagens.",
              },
            ].map((c) => (
              <article
                key={c.t}
                className="bg-[var(--color-surface)] rounded-[var(--radius-xl)] p-8 border border-[var(--color-border-light)]"
              >
                <h3 className="text-2xl font-semibold -tracking-[0.01em] text-[var(--color-text-primary)]">
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

      <section className="bg-[var(--color-surface)] px-6 sm:px-12 py-24 sm:py-32">
        <div className="max-w-4xl mx-auto">
          <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--color-text-tertiary)]">
            Requisitos
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold -tracking-[0.02em] text-[var(--color-text-primary)]">
            Precisa de quatro coisas:
          </h2>
          <ul className="mt-10 space-y-5 text-lg leading-[1.5] text-[var(--color-text-secondary)] max-w-2xl">
            <li className="flex gap-4">
              <span className="text-[var(--color-accent)] font-bold">→</span>
              <span>
                <strong className="text-[var(--color-text-primary)]">
                  Moto registada no seu nome
                </strong>{" "}
                — com matrícula angolana válida.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-[var(--color-accent)] font-bold">→</span>
              <span>
                <strong className="text-[var(--color-text-primary)]">
                  Carta de condução A
                </strong>{" "}
                válida e em dia.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-[var(--color-accent)] font-bold">→</span>
              <span>
                <strong className="text-[var(--color-text-primary)]">
                  Conta bancária angolana
                </strong>{" "}
                no seu nome (IBAN AO06…) para receber os pagamentos.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-[var(--color-accent)] font-bold">→</span>
              <span>
                <strong className="text-[var(--color-text-primary)]">
                  Smartphone Android
                </strong>{" "}
                com Android 7.0 ou superior e ligação à internet.
              </span>
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  );
}
