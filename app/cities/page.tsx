import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cidades",
  description:
    "A BAZA opera em Luanda. Em preparação: Benguela, Huambo, Lobito. Junte-se à lista de espera para a sua cidade.",
};

const ZONES = [
  "Talatona",
  "Maianga",
  "Ingombota",
  "Miramar",
  "Kilamba",
  "Viana",
  "Cazenga",
  "Cacuaco",
  "Belas",
  "Marginal",
  "Ilha de Luanda",
  "Cidade Alta",
];

const SOON = [
  { name: "Benguela", note: "Costa central · em estudo de mercado" },
  { name: "Huambo", note: "Cidade-planalto · candidaturas abertas" },
  { name: "Lobito", note: "Costa central · próxima expansão" },
];

export default function Cities() {
  return (
    <main className="flex-1 bg-[var(--color-background)]">
      <Header />

      {/* Hero */}
      <section className="px-6 sm:px-10 pt-32 sm:pt-40 pb-16">
        <div className="max-w-4xl mx-auto">
          <p className="eyebrow">Cidades</p>
          <h1 className="mt-3 text-5xl sm:text-7xl font-extrabold -tracking-[0.035em] leading-[0.95] text-[var(--color-text-primary)]">
            Começámos em Luanda.
          </h1>
          <p className="mt-6 max-w-2xl text-lg sm:text-xl text-[var(--color-text-secondary)] leading-[1.5]">
            Cobertura total da área metropolitana, com tempos de espera abaixo
            de 5 minutos no horário diurno. A caminho: Benguela, Huambo, Lobito.
          </p>
        </div>
      </section>

      {/* Luanda card with bairro grid */}
      <section className="px-6 sm:px-10 pb-12">
        <div className="max-w-7xl mx-auto bg-[var(--color-ink)] text-white rounded-[var(--radius-2xl)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-0">
            <div className="p-10 sm:p-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] text-[var(--color-ink)] px-3 py-1.5 text-[11px] font-semibold tracking-[0.18em] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-ink)]" />
                <span>Disponível agora</span>
              </div>
              <h2 className="mt-6 text-6xl sm:text-7xl font-extrabold -tracking-[0.035em] leading-[0.95]">
                Luanda
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-[1.5] text-white/75">
                Cobertura em toda a área metropolitana — do centro à
                periferia, sete dias por semana, das 6h às 2h.
              </p>

              <div className="mt-10 grid grid-cols-3 gap-6">
                <Stat k="< 5 min" v="Tempo médio" />
                <Stat k="7 dias" v="Operação" />
                <Stat k="20h" v="Janela diária" />
              </div>
            </div>

            <div className="bg-white/[0.04] p-10 sm:p-12 border-t lg:border-t-0 lg:border-l border-white/10">
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-accent)]">
                Bairros cobertos
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-[15px] font-medium">
                {ZONES.map((z) => (
                  <li
                    key={z}
                    className="flex items-center gap-2.5 text-white/90"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]"
                      aria-hidden
                    />
                    {z}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Coming soon */}
      <section className="px-6 sm:px-10 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto">
          <p className="eyebrow">A caminho</p>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold -tracking-[0.025em] text-[var(--color-text-primary)] max-w-3xl">
            As próximas cidades BAZA.
          </h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {SOON.map((c) => (
              <article
                key={c.name}
                className="bg-[var(--color-surface)] rounded-[var(--radius-2xl)] p-8 border border-[var(--color-border-light)] hover:border-[var(--color-ink)]/20 transition"
              >
                <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-text-tertiary)]">
                  Em preparação
                </p>
                <h3 className="mt-3 text-3xl font-bold -tracking-[0.025em] text-[var(--color-text-primary)]">
                  {c.name}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                  {c.note}
                </p>
                <a
                  href={`https://wa.me/244946124639?text=Quero%20a%20BAZA%20em%20${encodeURIComponent(c.name)}.`}
                  className="mt-6 inline-flex items-center justify-center h-11 px-5 rounded-full bg-[var(--color-ink)] text-white font-semibold text-sm hover:translate-y-[-1px] transition"
                >
                  Lista de espera →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <p className="text-2xl sm:text-3xl font-bold -tracking-[0.02em] text-[var(--color-accent)] leading-none">
        {k}
      </p>
      <p className="mt-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-white/55">
        {v}
      </p>
    </div>
  );
}
