import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sobre a BAZA",
  description:
    "BAZA é a moto-táxi de Luanda — feita em Angola, para Angola. Conheça a equipa, a missão e como começámos.",
};

export default function About() {
  return (
    <main className="flex-1 bg-[var(--color-background)]">
      <Header />

      <section className="px-6 sm:px-12 pt-32 sm:pt-40 pb-20 sm:pb-28">
        <div className="max-w-4xl mx-auto">
          <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--color-text-tertiary)]">
            Sobre
          </p>
          <h1 className="mt-3 text-5xl sm:text-7xl font-bold -tracking-[0.03em] leading-[0.95] text-[var(--color-text-primary)]">
            Luanda merecia
            <br />
            uma BAZA.
          </h1>
          <p className="mt-8 max-w-2xl text-lg sm:text-xl leading-[1.45] text-[var(--color-text-secondary)]">
            Construímos a BAZA porque pedir uma moto-táxi em Luanda devia ser
            simples — para quem viaja e para quem conduz. Sem mensalidades,
            sem app de pagamentos importada, sem fricção. Só um pedido, uma
            moto, um preço justo.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-surface)] px-6 sm:px-12 py-24 sm:py-32">
        <div className="max-w-4xl mx-auto">
          <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--color-text-tertiary)]">
            Missão
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold -tracking-[0.02em] text-[var(--color-text-primary)]">
            Mobilidade local, justa, sem intermediários.
          </h2>
          <div className="mt-10 space-y-6 text-lg leading-[1.55] text-[var(--color-text-secondary)] max-w-2xl">
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

      <section className="px-6 sm:px-12 py-24 sm:py-32">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
          {[
            { stat: "100%", label: "Pertença local" },
            { stat: "85/15", label: "Para o motorista / BAZA" },
            { stat: "Luanda", label: "Cidade-piloto" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-5xl font-bold -tracking-[0.03em] text-[var(--color-text-primary)]">
                {item.stat}
              </p>
              <p className="mt-2 text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--color-text-tertiary)]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
