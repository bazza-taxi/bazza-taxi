import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cookies",
  description:
    "Política de cookies da BAZA — o que usamos no site e na app, e como pode controlar.",
};

const UPDATED = "21 de Maio de 2026";

export default function Cookies() {
  return (
    <main className="flex-1 bg-[var(--color-background)]">
      <Header />

      <article className="px-6 sm:px-10 pt-32 sm:pt-40 pb-24 sm:pb-32">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow">Legal</p>
          <h1 className="mt-3 text-4xl sm:text-6xl font-extrabold -tracking-[0.03em] leading-[0.98] text-[var(--color-text-primary)]">
            Política de cookies
          </h1>
          <p className="mt-3 text-sm text-[var(--color-text-tertiary)]">
            Última actualização · {UPDATED}
          </p>

          <div className="mt-12 space-y-10 text-base sm:text-lg leading-[1.65] text-[var(--color-text-secondary)]">
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold -tracking-[0.01em] text-[var(--color-text-primary)]">
                1. O que são cookies
              </h2>
              <p className="mt-3">
                Cookies são pequenos ficheiros de texto que um site coloca no
                seu telemóvel ou computador quando o visita. Servem para
                lembrar preferências e medir como o site é usado.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold -tracking-[0.01em] text-[var(--color-text-primary)]">
                2. O que a BAZA usa
              </h2>
              <p className="mt-3">
                O site marketing da BAZA (este site) usa apenas cookies
                essenciais — para servir as páginas e cachear conteúdo
                estático. Não usamos cookies de publicidade, de tracking
                cross-site, ou de redes sociais.
              </p>
              <p className="mt-3">
                A app BAZA não usa cookies (não é um browser). Guarda apenas
                preferências locais no seu próprio armazenamento, descritas
                na <a className="underline text-[var(--color-text-primary)]" href="/legal/privacy">política de privacidade</a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold -tracking-[0.01em] text-[var(--color-text-primary)]">
                3. Cookies de terceiros
              </h2>
              <p className="mt-3">
                Este site é servido por GitHub Pages, que pode definir
                cookies técnicos próprios para load balancing. Não temos
                controlo sobre esses cookies, mas também não recebemos os
                dados deles.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold -tracking-[0.01em] text-[var(--color-text-primary)]">
                4. Controlar cookies
              </h2>
              <p className="mt-3">
                Pode bloquear ou apagar cookies a qualquer momento nas
                definições do seu browser. O site continua a funcionar sem
                cookies — apenas pode notar uma pequena perda de
                performance no carregamento de imagens.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold -tracking-[0.01em] text-[var(--color-text-primary)]">
                5. Contacto
              </h2>
              <p className="mt-3">
                Dúvidas? Fale connosco no WhatsApp{" "}
                <a className="underline text-[var(--color-text-primary)]" href="https://wa.me/244946124639">
                  +244 946 124 639
                </a>{" "}
                ou por email para bazaangola54@gmail.com.
              </p>
            </section>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
