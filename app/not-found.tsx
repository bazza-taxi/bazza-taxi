import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center bg-[var(--color-accent)] min-h-[100svh] px-6 text-center grain">
      <p className="text-9xl sm:text-[12rem] font-extrabold -tracking-[0.04em] leading-none text-[var(--color-ink)]">
        404
      </p>
      <h1 className="mt-6 text-4xl sm:text-5xl font-bold -tracking-[0.025em] leading-[0.95] text-[var(--color-ink)]">
        Esta moto desapareceu.
      </h1>
      <p className="mt-4 max-w-md text-lg text-[var(--color-ink)]/75">
        A página que procura mudou de endereço ou nunca existiu.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center justify-center h-13 px-7 py-3.5 rounded-full bg-[var(--color-ink)] text-white font-semibold text-base hover:translate-y-[-1px] transition"
      >
        Voltar ao início →
      </Link>
    </main>
  );
}
