import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cidades",
  description:
    "A BAZA começou em Luanda. Estamos a preparar a expansão para Benguela, Huambo e Lobito.",
};

export default function Cities() {
  return (
    <main className="flex-1 bg-[var(--color-background)]">
      <Header />

      <section className="px-6 sm:px-12 pt-32 sm:pt-40 pb-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--color-text-tertiary)]">
            Cidades
          </p>
          <h1 className="mt-3 text-5xl sm:text-7xl font-bold -tracking-[0.03em] leading-[0.95] text-[var(--color-text-primary)]">
            Começámos em Luanda.
          </h1>
        </div>
      </section>

      <section className="px-6 sm:px-12 pb-12">
        <div className="max-w-4xl mx-auto">
          <article className="bg-[var(--color-text-primary)] text-white rounded-[var(--radius-xl)] p-10 sm:p-16">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--color-accent)]">
              Disponível agora
            </p>
            <h2 className="mt-3 text-5xl sm:text-7xl font-bold -tracking-[0.03em] leading-[0.95]">
              Luanda
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-[1.5] text-white/80">
              Cobertura em toda a área metropolitana — Talatona, Maianga,
              Ingombota, Viana, Cazenga, Kilamba, Cacuaco e Belas. Tempo
              médio de espera abaixo de 5 minutos no horário diurno.
            </p>
          </article>
        </div>
      </section>

      <section className="px-6 sm:px-12 pb-24 sm:pb-32">
        <div className="max-w-4xl mx-auto">
          <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--color-text-tertiary)] mt-12">
            A caminho
          </p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {["Benguela", "Huambo", "Lobito"].map((city) => (
              <article
                key={city}
                className="bg-[var(--color-surface)] rounded-[var(--radius-xl)] p-8 border border-[var(--color-border-light)]"
              >
                <h3 className="text-3xl font-bold -tracking-[0.02em] text-[var(--color-text-primary)]">
                  {city}
                </h3>
                <p className="mt-3 text-sm text-[var(--color-text-tertiary)]">
                  Em preparação. Junte-se à lista de espera.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
