import Link from "next/link";

export function Header({ light = false }: { light?: boolean }) {
  const textColor = light
    ? "text-[var(--color-text-primary)]"
    : "text-[var(--color-text-primary)]";
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <nav className="max-w-6xl mx-auto px-6 sm:px-12 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="bg-[var(--color-text-primary)] w-9 h-9 flex items-center justify-center -rotate-6">
            <span className="rotate-6 text-[var(--color-accent)] font-bold text-xl leading-none">
              B
            </span>
          </span>
          <span className={`font-bold text-lg -tracking-[0.02em] ${textColor}`}>
            BAZA
          </span>
        </Link>

        <div className={`hidden sm:flex items-center gap-8 text-sm font-medium ${textColor}`}>
          <Link href="/how-it-works" className="opacity-80 hover:opacity-100 transition">
            Como funciona
          </Link>
          <Link href="/drivers" className="opacity-80 hover:opacity-100 transition">
            Motoristas
          </Link>
          <Link href="/cities" className="opacity-80 hover:opacity-100 transition">
            Cidades
          </Link>
          <Link href="/about" className="opacity-80 hover:opacity-100 transition">
            Sobre
          </Link>
        </div>

        <Link
          href="#download"
          className="inline-flex items-center justify-center h-11 px-5 rounded-[var(--radius-lg)] bg-[var(--color-text-primary)] text-[var(--color-accent)] font-semibold text-sm"
        >
          Descarregar
        </Link>
      </nav>
    </header>
  );
}
