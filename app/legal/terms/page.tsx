import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Termos e condições",
  description:
    "Termos de utilização da plataforma BAZA — moto-táxi em Luanda, Angola.",
};

export default function Terms() {
  return (
    <main className="flex-1 bg-[var(--color-background)]">
      <Header />

      <article className="px-6 sm:px-12 pt-32 sm:pt-40 pb-24 sm:pb-32">
        <div className="max-w-3xl mx-auto">
          <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--color-text-tertiary)]">
            Legal
          </p>
          <h1 className="mt-3 text-4xl sm:text-6xl font-bold -tracking-[0.03em] leading-[0.95] text-[var(--color-text-primary)]">
            Termos e condições
          </h1>
          <p className="mt-3 text-sm text-[var(--color-text-tertiary)]">
            Última actualização: 19 de Maio de 2026
          </p>

          <div className="mt-12 space-y-8 text-base leading-[1.65]">
            <Section title="1. Aceitação">
              Ao utilizar a app BAZA ou o site, aceita estes termos. Se não
              concorda, não use a plataforma.
            </Section>

            <Section title="2. O que é a BAZA">
              A BAZA é uma plataforma tecnológica que liga passageiros a
              motoristas independentes em Luanda. NÃO somos uma empresa de
              transporte — os motoristas são profissionais independentes.
            </Section>

            <Section title="3. Conta">
              Para usar a BAZA fornece o seu nome e número de telefone. É
              responsável por manter o seu número actualizado. Pode apagar
              a conta a qualquer momento.
            </Section>

            <Section title="4. Pagamentos">
              Os pagamentos são feitos directamente ao motorista — em
              dinheiro no fim da viagem ou por transferência bancária
              para o IBAN do motorista, mostrado no fim da corrida. A
              BAZA não processa cartões nem retém saldos de passageiros.
            </Section>

            <Section title="5. Comportamento">
              <p>É proibido:</p>
              <ul className="list-disc list-outside ml-5 mt-2 space-y-1">
                <li>Assediar, discriminar ou ameaçar motoristas ou passageiros.</li>
                <li>Transportar objectos ilegais ou perigosos.</li>
                <li>Usar contas falsas ou de terceiros.</li>
                <li>Tentar quebrar, contornar ou abusar da plataforma.</li>
              </ul>
            </Section>

            <Section title="6. Responsabilidade">
              A BAZA não é responsável pelos actos dos motoristas ou dos
              passageiros. Em caso de incidente, contacte directamente as
              autoridades (113 — Polícia Nacional / 112 — Emergência) e
              depois informe-nos via WhatsApp.
            </Section>

            <Section title="7. Lei aplicável">
              Estes termos regem-se pela lei angolana. Qualquer litígio
              será resolvido nos tribunais de Luanda.
            </Section>

            <Section title="8. Contacto">
              <a
                href="https://wa.me/244946124639"
                className="text-[var(--color-text-primary)] underline underline-offset-4"
              >
                WhatsApp +244 946 124 639
              </a>
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
