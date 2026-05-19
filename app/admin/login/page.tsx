"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { setAdminToken, adminFetch } from "@/lib/admin";

export default function AdminLogin() {
  const router = useRouter();
  const [token, setToken] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setBusy(true);
    setAdminToken(token);
    try {
      await adminFetch("/admin/dashboard");
      router.push("/admin");
    } catch (e) {
      setError(
        (e as Error).message === "UNAUTHORIZED"
          ? "Token inválido"
          : "Erro de ligação. Tente outra vez.",
      );
      setBusy(false);
    }
  }

  return (
    <main className="min-h-[100svh] flex flex-col items-center justify-center bg-[var(--color-text-primary)] px-6">
      <div className="w-full max-w-sm">
        <div className="-rotate-6 bg-[var(--color-accent)] w-20 h-20 flex items-center justify-center mb-10 mx-auto">
          <span className="rotate-6 text-[var(--color-text-primary)] font-bold text-5xl leading-none -tracking-[0.04em]">
            B
          </span>
        </div>

        <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--color-accent)] text-center">
          Administração
        </p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-bold -tracking-[0.02em] text-white text-center">
          Iniciar sessão
        </h1>
        <p className="mt-3 text-sm text-white/60 text-center">
          Cole o token de admin definido em Render → ENV → ADMIN_TOKEN.
        </p>

        <form onSubmit={submit} className="mt-10 space-y-4">
          <input
            type="password"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="X-Admin-Token"
            autoFocus
            className="w-full h-14 px-5 rounded-[var(--radius-lg)] bg-white/5 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:border-[var(--color-accent)] font-mono text-sm"
          />
          {error && (
            <p className="text-sm text-[var(--color-danger)]">{error}</p>
          )}
          <button
            type="submit"
            disabled={busy || !token.trim()}
            className="w-full h-14 rounded-[var(--radius-lg)] bg-[var(--color-accent)] text-[var(--color-text-primary)] font-semibold transition hover:bg-[var(--color-accent-pressed)] disabled:opacity-40"
          >
            {busy ? "A entrar…" : "Entrar"}
          </button>
        </form>
      </div>
    </main>
  );
}
