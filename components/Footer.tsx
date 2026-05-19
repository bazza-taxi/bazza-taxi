import Link from "next/link";

export function Footer() {
  const sections = [
    {
      label: "Produto",
      links: [
        { href: "/how-it-works", text: "Como funciona" },
        { href: "/cities", text: "Cidades" },
        { href: "/pricing", text: "Preços" },
        { href: "/safety", text: "Segurança" },
      ],
    },
    {
      label: "Motoristas",
      links: [
        { href: "/drivers", text: "Quero ser motorista" },
        { href: "/drivers/requirements", text: "Requisitos" },
        { href: "/drivers/earnings", text: "Ganhos" },
        { href: "/drivers/apply", text: "Candidatar" },
      ],
    },
    {
      label: "Empresa",
      links: [
        { href: "/about", text: "Sobre a BAZA" },
        { href: "/press", text: "Imprensa" },
        { href: "/careers", text: "Carreiras" },
        { href: "/contact", text: "Contacto" },
      ],
    },
    {
      label: "Legal",
      links: [
        { href: "/legal/terms", text: "Termos" },
        { href: "/legal/privacy", text: "Privacidade" },
        { href: "/legal/cookies", text: "Cookies" },
        { href: "/legal/driver-terms", text: "Termos motorista" },
      ],
    },
  ];

  return (
    <footer className="bg-[var(--color-text-primary)] text-white px-6 sm:px-12 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 sm:gap-6">
          {sections.map((s) => (
            <div key={s.label}>
              <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--color-accent)] opacity-90">
                {s.label}
              </p>
              <ul className="mt-4 space-y-3">
                {s.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/80 hover:text-white transition"
                    >
                      {l.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-white/15 flex flex-col sm:flex-row justify-between gap-4 text-sm text-white/55">
          <div className="flex items-center gap-3">
            <span className="bg-[var(--color-accent)] w-7 h-7 flex items-center justify-center -rotate-6">
              <span className="rotate-6 text-[var(--color-text-primary)] font-bold text-sm leading-none">
                B
              </span>
            </span>
            <span>© 2026 BAZA. Feito em Luanda, Angola.</span>
          </div>
          <div className="flex gap-6">
            <a href="https://wa.me/244946124639" className="hover:text-white">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
