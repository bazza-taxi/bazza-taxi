"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { clearAdminToken, getAdminToken } from "@/lib/admin";

const NAV = [
  { href: "/admin", label: "Resumo" },
  { href: "/admin/drivers", label: "Motoristas" },
  { href: "/admin/rides", label: "Viagens" },
  { href: "/admin/payouts", label: "Pagamentos" },
  { href: "/admin/support", label: "Suporte" },
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!getAdminToken()) {
      router.replace("/admin/login");
    } else {
      setReady(true);
    }
  }, [router]);

  if (!ready) {
    return (
      <main className="min-h-[100svh] flex items-center justify-center bg-[var(--color-background)]">
        <p className="text-sm text-[var(--color-text-tertiary)]">A carregar…</p>
      </main>
    );
  }

  return (
    <div className="min-h-[100svh] bg-[var(--color-background)] flex flex-col sm:flex-row">
      <aside className="sm:w-64 sm:min-h-[100svh] bg-[var(--color-text-primary)] text-white px-6 sm:px-8 py-8 sm:py-10">
        <Link href="/admin" className="flex items-center gap-3 mb-12">
          <span className="bg-[var(--color-accent)] w-9 h-9 flex items-center justify-center -rotate-6">
            <span className="rotate-6 text-[var(--color-text-primary)] font-bold text-xl leading-none">
              B
            </span>
          </span>
          <div>
            <p className="text-[10px] font-medium tracking-[0.18em] uppercase text-[var(--color-accent)] opacity-90">
              Admin
            </p>
            <p className="font-bold text-lg leading-none -tracking-[0.02em]">
              BAZA
            </p>
          </div>
        </Link>

        <nav className="space-y-1">
          {NAV.map((n) => {
            const active =
              pathname === n.href ||
              (n.href !== "/admin" && pathname.startsWith(n.href));
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`block px-3 py-2.5 rounded-[var(--radius-md)] text-sm transition ${
                  active
                    ? "bg-white/10 text-white font-semibold"
                    : "text-white/65 hover:text-white hover:bg-white/5"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <button
          onClick={() => {
            clearAdminToken();
            router.replace("/admin/login");
          }}
          className="mt-12 text-xs text-white/40 hover:text-white/80 transition"
        >
          Terminar sessão
        </button>
      </aside>

      <main className="flex-1 px-6 sm:px-12 py-10 sm:py-14">{children}</main>
    </div>
  );
}
