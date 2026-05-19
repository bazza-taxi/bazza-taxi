import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description:
    "Como a BAZA recolhe, usa e protege os seus dados pessoais. Lei nº 22/11 (Protecção de Dados, Angola).",
};

export default function Privacy() {
  return (
    <main className="flex-1 bg-[var(--color-background)]">
      <Header />

      <article className="px-6 sm:px-12 pt-32 sm:pt-40 pb-24 sm:pb-32">
        <div className="max-w-3xl mx-auto">
          <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--color-text-tertiary)]">
            Legal
          </p>
          <h1 className="mt-3 text-4xl sm:text-6xl font-bold -tracking-[0.03em] leading-[0.95] text-[var(--color-text-primary)]">
            Política de privacidade
          </h1>
          <p className="mt-3 text-sm text-[var(--color-text-tertiary)]">
            Última actualização: 19 de Maio de 2026
          </p>

          <div className="mt-12 space-y-8 text-base leading-[1.65] text-[var(--color-text-primary)]">
            <Section title="1. Quem somos">
              A BAZA é uma plataforma de moto-táxi operada em Luanda, Angola.
              Esta política descreve como recolhemos, usamos e protegemos
              dados pessoais ao abrigo da Lei nº 22/11 (Lei de Protecção
              de Dados Pessoais de Angola).
            </Section>

            <Section title="2. Dados que recolhemos">
              <p>
                Para usar a app como passageiro recolhemos: nome, número
                de telefone, localização GPS durante a viagem, histórico
                de viagens e avaliações dadas.
              </p>
              <p className="mt-3">
                Para usar a app como motorista recolhemos adicionalmente:
                matrícula, modelo da moto, IBAN, banco, foto (futura
                versão), carta de condução (futura versão).
              </p>
            </Section>

            <Section title="3. Como usamos os dados">
              <ul className="list-disc list-outside ml-5 space-y-2">
                <li>Encontrar a moto-táxi mais próxima de si.</li>
                <li>Calcular preço, tempo e distância da viagem.</li>
                <li>Permitir comunicação entre passageiro e motorista.</li>
                <li>
                  Processar pagamentos por transferência IBAN (mostrar IBAN
                  do motorista ao passageiro no fim da viagem).
                </li>
                <li>Resolver disputas e suportar pedidos de ajuda.</li>
                <li>Cumprir obrigações fiscais e legais em Angola.</li>
              </ul>
            </Section>

            <Section title="4. Partilha de dados">
              Não vendemos os seus dados. Partilhamos apenas com: (i) o
              outro lado da viagem (motorista ↔ passageiro), nos campos
              estritamente necessários para a corrida; (ii) autoridades
              angolanas, quando legalmente exigido.
            </Section>

            <Section title="5. Os seus direitos">
              Pode aceder, corrigir, exportar ou apagar os seus dados a
              qualquer momento — directamente na app (Apagar dados deste
              telefone) ou contactando-nos via WhatsApp.
            </Section>

            <Section title="6. Contacto">
              Para qualquer questão sobre esta política:{" "}
              <a
                href="https://wa.me/244946124639"
                className="text-[var(--color-text-primary)] underline underline-offset-4"
              >
                WhatsApp +244 946 124 639
              </a>
              .
            </Section>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-semibold -tracking-[0.01em] text-[var(--color-text-primary)]">
        {title}
      </h2>
      <div className="mt-3 text-[var(--color-text-secondary)]">{children}</div>
    </section>
  );
}
