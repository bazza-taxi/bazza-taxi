import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center bg-[var(--color-accent)] min-h-[100svh] px-6 text-center">
      <div className="-rotate-6 bg-[var(--color-text-primary)] w-32 h-32 sm:w-44 sm:h-44 flex items-center justify-center">
        <span className="rotate-6 text-[var(--color-accent)] font-bold text-8xl sm:text-9xl leading-none -tracking-[0.04em]">
          ?
        </span>
      </div>
      <h1 className="mt-12 text-5xl sm:text-7xl font-bold -tracking-[0.03em] leading-[0.95] text-[var(--color-text-primary)]">
        Página não encontrada
      </h1>
      <p className="mt-4 max-w-md text-lg text-[var(--color-text-primary)]/80">
        Talvez tenha sido movida. Volte ao início para pedir uma BAZA.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center justify-center h-14 px-8 rounded-[var(--radius-lg)] bg-[var(--color-text-primary)] text-[var(--color-accent)] font-semibold text-base transition hover:bg-[var(--color-text-primary)]/90"
      >
        Voltar ao início
      </Link>
    </main>
  );
}
