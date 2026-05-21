import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Preços",
  description:
    "Como a BAZA calcula o preço de uma viagem em Luanda. Tarifa base, custo por km, custo por minuto. Sem surge pricing.",
};

export default function Pricing() {
  return (
    <main className="flex-1 bg-[var(--color-background)]">
      <Header />

      <section className="px-6 sm:px-10 pt-32 sm:pt-40 pb-16">
        <div className="max-w-4xl mx-auto">
          <p className="eyebrow">Preços</p>
          <h1 className="mt-3 text-5xl sm:text-7xl font-extrabold -tracking-[0.035em] leading-[0.95] text-[var(--color-text-primary)]">
            Preço fechado,
            <br />
            antes de pedir.
          </h1>
          <p className="mt-6 max-w-2xl text-lg sm:text-xl leading-[1.5] text-[var(--color-text-secondary)]">
            Mostramos o valor exacto da viagem na app, antes de aceitar. Sem
            multiplicadores em hora de ponta. Sem surpresas no fim.
          </p>
        </div>
      </section>

      {/* Fare breakdown */}
      <section className="px-6 sm:px-10 pb-20">
        <div className="max-w-4xl mx-auto bg-[var(--color-ink)] text-white rounded-[var(--radius-2xl)] p-10 sm:p-16">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-accent)]">
            Fórmula da tarifa
          </p>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold -tracking-[0.025em]">
            Base + km + minutos.
          </h2>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
            <FareLine k="Kz 500" v="Tarifa base" d="Cobra-se por viagem iniciada." />
            <FareLine k="Kz 250 / km" v="Distância" d="Calculada pelo trajecto real, não pela linha recta." />
            <FareLine k="Kz 60 / min" v="Tempo" d="Inclui o trânsito de Luanda no cálculo." />
          </div>

          <div className="mt-10 pt-8 border-t border-white/10">
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/55">
              Tarifa mínima
            </p>
            <p className="mt-2 text-3xl font-bold -tracking-[0.02em] text-white">
              Kz 800
            </p>
            <p className="mt-1 text-sm text-white/55 max-w-lg">
              Aplica-se a viagens muito curtas. O motorista nunca recebe
              menos do que esta tarifa por uma viagem confirmada.
            </p>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="px-6 sm:px-10 pb-20">
        <div className="max-w-4xl mx-auto">
          <p className="eyebrow">Exemplos reais</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold -tracking-[0.02em] text-[var(--color-text-primary)]">
            Quanto custa em Luanda.
          </h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { from: "Maianga", to: "Ilha de Luanda", km: 4.2, price: "Kz 1.800" },
              { from: "Talatona", to: "Aeroporto 4 de Fev.", km: 12.5, price: "Kz 4.200" },
              { from: "Kilamba", to: "Cidade Alta", km: 18.0, price: "Kz 5.900" },
            ].map((e) => (
              <article
                key={`${e.from}-${e.to}`}
                className="bg-[var(--color-surface)] rounded-[var(--radius-2xl)] p-8 border border-[var(--color-border-light)]"
              >
                <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-text-tertiary)]">
                  {e.km.toLocaleString("pt-AO", { minimumFractionDigits: 1 })} km
                </p>
                <p className="mt-2 text-base font-medium text-[var(--color-text-primary)]">
                  {e.from} → {e.to}
                </p>
                <p className="mt-6 text-3xl font-extrabold -tracking-[0.025em] text-[var(--color-accent)]">
                  {e.price}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm text-[var(--color-text-tertiary)]">
            Valores médios diurnos. Confirme o preço exacto na app antes
            de pedir.
          </p>
        </div>
      </section>

      {/* No surge */}
      <section className="bg-[var(--color-surface-muted)] px-6 sm:px-10 py-24 sm:py-32">
        <div className="max-w-4xl mx-auto">
          <p className="eyebrow">O que NÃO fazemos</p>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold -tracking-[0.025em] text-[var(--color-text-primary)]">
            Sem surge. Sem truques.
          </h2>
          <ul className="mt-10 space-y-4">
            {[
              "Sem multiplicador em hora de ponta",
              "Sem aumento em dias de chuva",
              "Sem tarifa nocturna agressiva",
              "Sem cláusulas escondidas no fim",
            ].map((t) => (
              <li
                key={t}
                className="bg-[var(--color-surface)] rounded-[var(--radius-xl)] border border-[var(--color-border-light)] px-6 py-5 flex items-center gap-4"
              >
                <span className="w-9 h-9 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-[var(--color-ink)] shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M5 6L19 18M19 6L5 18" />
                  </svg>
                </span>
                <span className="text-base sm:text-lg font-medium text-[var(--color-text-primary)]">
                  {t}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Payment methods */}
      <section className="px-6 sm:px-10 py-24 sm:py-32">
        <div className="max-w-4xl mx-auto">
          <p className="eyebrow">Como paga</p>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold -tracking-[0.025em] text-[var(--color-text-primary)]">
            Em kwanzas. Como cá se faz.
          </h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <article className="bg-[var(--color-surface)] rounded-[var(--radius-2xl)] p-8 sm:p-10 border border-[var(--color-border-light)]">
              <h3 className="text-2xl font-semibold -tracking-[0.015em] text-[var(--color-text-primary)]">
                Dinheiro
              </h3>
              <p className="mt-3 text-base leading-[1.55] text-[var(--color-text-secondary)]">
                Entrega ao motorista no fim da viagem. Confirme o valor mostrado
                na app — é o mesmo que viu antes de pedir.
              </p>
            </article>
            <article className="bg-[var(--color-surface)] rounded-[var(--radius-2xl)] p-8 sm:p-10 border border-[var(--color-border-light)]">
              <h3 className="text-2xl font-semibold -tracking-[0.015em] text-[var(--color-text-primary)]">
                Transferência IBAN
              </h3>
              <p className="mt-3 text-base leading-[1.55] text-[var(--color-text-secondary)]">
                No fim mostramos o IBAN angolano do motorista (AO06…) para
                copiar para a app do seu banco. Sem cartões internacionais.
              </p>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function FareLine({
  k,
  v,
  d,
}: {
  k: string;
  v: string;
  d: string;
}) {
  return (
    <div>
      <p className="text-3xl sm:text-4xl font-extrabold -tracking-[0.025em] text-[var(--color-accent)] leading-none">
        {k}
      </p>
      <p className="mt-3 text-base font-semibold">{v}</p>
      <p className="mt-1 text-sm text-white/55 leading-[1.55]">{d}</p>
    </div>
  );
}
