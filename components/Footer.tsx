import Link from "next/link";

export function Footer() {
  const sections = [
    {
      label: "Produto",
      links: [
        { href: "/how-it-works", text: "Como funciona" },
        { href: "/cities", text: "Cidades" },
        { href: "/#pricing", text: "Preços" },
        { href: "/#safety", text: "Segurança" },
      ],
    },
    {
      label: "Motoristas",
      links: [
        { href: "/drivers", text: "Quero ser motorista" },
        { href: "/drivers#requirements", text: "Requisitos" },
        { href: "/drivers#earnings", text: "Ganhos" },
        {
          href: "https://wa.me/244946124639?text=Ol%C3%A1%20BAZA%2C%20quero%20ser%20motorista.",
          text: "Candidatar",
        },
      ],
    },
    {
      label: "Empresa",
      links: [
        { href: "/about", text: "Sobre a BAZA" },
        { href: "/about#press", text: "Imprensa" },
        {
          href: "https://wa.me/244946124639?text=Ol%C3%A1%20BAZA",
          text: "Contacto",
        },
      ],
    },
    {
      label: "Legal",
      links: [
        { href: "/legal/terms", text: "Termos" },
        { href: "/legal/privacy", text: "Privacidade" },
        { href: "/legal/cookies", text: "Cookies" },
      ],
    },
  ];

  return (
    <footer className="bg-[var(--color-ink)] text-white px-6 sm:px-10 pt-20 sm:pt-28 pb-10">
      <div className="max-w-7xl mx-auto">
        {/* CTA band — last chance to drive download from the foot of the page */}
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-10 md:gap-12 items-end pb-16 border-b border-white/10">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-accent)]">
              Próxima viagem
            </p>
            <h3 className="mt-3 text-3xl sm:text-5xl font-bold -tracking-[0.02em] leading-[1]">
              Está a um toque.
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 md:justify-end">
            <Link
              href="#download"
              className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-[var(--color-accent)] text-[var(--color-ink)] font-semibold text-sm hover:bg-[var(--color-accent-pressed)] transition"
            >
              Descarregar para Android
            </Link>
            <a
              href="https://wa.me/244946124639"
              className="inline-flex items-center justify-center h-12 px-6 rounded-full border border-white/25 text-white font-semibold text-sm hover:bg-white/10 transition"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 sm:gap-6 pt-16">
          {sections.map((s) => (
            <div key={s.label}>
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-accent)]">
                {s.label}
              </p>
              <ul className="mt-4 space-y-3">
                {s.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/70 hover:text-white transition"
                    >
                      {l.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-white/55">
          <div className="flex items-center gap-2.5">
            <span
              className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent)]"
              aria-hidden
            />
            <span className="font-bold tracking-[-0.02em] text-white">BAZA</span>
            <span className="opacity-50">·</span>
            <span>© 2026 · Feito em Luanda, Angola.</span>
          </div>
          <div className="flex gap-6">
            <a
              href="https://wa.me/244946124639"
              className="hover:text-white transition"
            >
              WhatsApp
            </a>
            <a
              href="mailto:bazaangola54@gmail.com"
              className="hover:text-white transition"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
