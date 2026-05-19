import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Header />
      {/* Hero — full-bleed editorial */}
      <section className="relative min-h-[100svh] bg-[var(--color-accent)] overflow-hidden">
        {/* Skewed brand mark */}
        <div className="absolute top-12 right-8 sm:top-16 sm:right-16 -rotate-6">
          <div className="bg-[var(--color-text-primary)] w-28 h-28 sm:w-44 sm:h-44 flex items-center justify-center">
            <span className="rotate-6 text-[var(--color-accent)] font-bold text-7xl sm:text-[10rem] leading-none -tracking-[0.04em]">
              B
            </span>
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12 pt-32 sm:pt-48 pb-20">
          <p className="text-[11px] font-medium tracking-[0.18em] uppercase opacity-75 text-[var(--color-text-primary)]">
            Moto-táxi · Luanda
          </p>

          <h1 className="mt-3 max-w-3xl text-[clamp(2.75rem,8vw,6.5rem)] font-bold leading-[0.95] -tracking-[0.03em] text-[var(--color-text-primary)]">
            Sai daqui, ali e além.
            <br />
            Em segundos.
          </h1>

          <p className="mt-6 max-w-xl text-lg sm:text-xl leading-[1.45] text-[var(--color-text-primary)]/85">
            BAZA é a moto-táxi de Luanda. Preços justos para si e
            para o motorista, pagamento em dinheiro ou transferência,
            cobertura em toda a cidade.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a
              href="#download"
              className="inline-flex items-center justify-center h-14 px-8 rounded-[var(--radius-lg)] bg-[var(--color-text-primary)] text-[var(--color-accent)] font-semibold text-base transition hover:bg-[var(--color-text-primary)]/90"
            >
              Descarregar a app
            </a>
            <a
              href="/drivers"
              className="inline-flex items-center justify-center h-14 px-8 rounded-[var(--radius-lg)] border-[1.5px] border-[var(--color-text-primary)] text-[var(--color-text-primary)] font-semibold text-base transition hover:bg-[var(--color-text-primary)]/5"
            >
              Quero ser motorista
            </a>
          </div>
        </div>

        {/* Bottom ink stripe (signature pattern) */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--color-text-primary)]" />
      </section>

      {/* Value props */}
      <section className="bg-[var(--color-background)] py-24 sm:py-32 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto">
          <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--color-text-tertiary)]">
            Como funciona
          </p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold -tracking-[0.02em] max-w-2xl text-[var(--color-text-primary)]">
            Pedir uma BAZA é simples.
          </h2>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                n: "01",
                title: "Diga onde vai",
                body: "Toque no destino no mapa ou pesquise pelo nome. Vemos o preço antes de pedir.",
              },
              {
                n: "02",
                title: "Aceitamos em segundos",
                body: "O motorista mais próximo apanha o pedido. Vê a moto a aproximar-se no mapa, em tempo real.",
              },
              {
                n: "03",
                title: "Paga como quiser",
                body: "Dinheiro no fim da viagem ou transferência IBAN com o número do motorista. Sem app de pagamentos.",
              },
            ].map((step) => (
              <article
                key={step.n}
                className="bg-[var(--color-surface)] rounded-[var(--radius-xl)] p-8 border border-[var(--color-border-light)]"
              >
                <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--color-text-tertiary)]">
                  {step.n}
                </p>
                <h3 className="mt-3 text-2xl font-semibold -tracking-[0.01em] text-[var(--color-text-primary)]">
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

      {/* Driver recruitment band */}
      <section className="bg-[var(--color-text-primary)] py-24 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8">
          <div>
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--color-accent)] opacity-90">
              Motoristas
            </p>
            <h2 className="mt-3 text-4xl sm:text-6xl font-bold -tracking-[0.03em] text-white max-w-2xl">
              Tem moto?
              <br />
              Tem trabalho.
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-[1.5] text-white/70">
              Ganhe dinheiro nos seus horários. Sem mensalidade. Recebe
              direto na sua conta todas as sextas-feiras.
            </p>
          </div>
          <a
            href="/drivers"
            className="inline-flex items-center justify-center h-14 px-8 rounded-[var(--radius-lg)] bg-[var(--color-accent)] text-[var(--color-text-primary)] font-semibold text-base transition hover:bg-[var(--color-accent-pressed)]"
          >
            Saber mais
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
