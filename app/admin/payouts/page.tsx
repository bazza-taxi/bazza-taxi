"use client";

import { useEffect, useState } from "react";
import { adminFetch } from "@/lib/admin";
import { AdminShell } from "@/components/AdminShell";

interface Payout {
  id: string;
  driverId: string;
  amountKz: number;
  periodStart: string;
  periodEnd: string;
  paidAt: string | null;
  driver?: { id: string; name: string; phone: string };
}

interface RunResult {
  drivers: number;
  totalAmountKz: number;
  payouts: { driverId: string; amountKz: number; earnings: number }[];
}

export default function AdminPayouts() {
  const [list, setList] = useState<Payout[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [running, setRunning] = useState(false);
  const [lastRun, setLastRun] = useState<RunResult | null>(null);

  function load() {
    adminFetch<Payout[]>("/admin/payouts")
      .then(setList)
      .catch((e) => setError((e as Error).message));
  }

  useEffect(load, []);

  async function runWeekly() {
    if (!confirm("Correr o lote de pagamentos semanal agora?")) return;
    setRunning(true);
    try {
      const result = await adminFetch<RunResult>("/admin/payouts/run", {
        method: "POST",
      });
      setLastRun(result);
      load();
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setRunning(false);
    }
  }

  return (
    <AdminShell>
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--color-text-tertiary)]">
            Pagamentos
          </p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-bold -tracking-[0.02em] text-[var(--color-text-primary)]">
            Histórico
          </h1>
        </div>
        <button
          onClick={runWeekly}
          disabled={running}
          className="h-12 px-6 rounded-[var(--radius-lg)] bg-[var(--color-accent)] text-[var(--color-text-primary)] font-semibold text-sm disabled:opacity-40"
        >
          {running ? "A correr…" : "Correr lote semanal"}
        </button>
      </div>

      {error && <p className="mt-6 text-sm text-[var(--color-danger)]">{error}</p>}

      {lastRun && (
        <article className="mt-8 bg-[var(--color-accent-tint)] rounded-[var(--radius-xl)] p-6">
          <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--color-text-primary)]">
            Lote concluído
          </p>
          <p className="mt-2 text-lg text-[var(--color-text-primary)]">
            <strong>{lastRun.drivers}</strong> motoristas ·{" "}
            <strong>{formatKz(lastRun.totalAmountKz)}</strong> no total
          </p>
        </article>
      )}

      <div className="mt-10 space-y-3">
        {list?.map((p) => (
          <article
            key={p.id}
            className="bg-[var(--color-surface)] rounded-[var(--radius-xl)] border border-[var(--color-border-light)] p-6 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3"
          >
            <div>
              <h2 className="font-semibold text-[var(--color-text-primary)]">
                {p.driver?.name ?? p.driverId}
              </h2>
              <p className="mt-1 text-xs text-[var(--color-text-tertiary)]">
                {p.driver?.phone} · {new Date(p.periodStart).toLocaleDateString("pt-PT")} →{" "}
                {new Date(p.periodEnd).toLocaleDateString("pt-PT")}
              </p>
              <p className="mt-1 text-xs text-[var(--color-text-tertiary)]">
                {p.paidAt
                  ? `Pago a ${new Date(p.paidAt).toLocaleDateString("pt-PT")}`
                  : "Aguarda transferência manual"}
              </p>
            </div>
            <p className="text-xl font-bold -tracking-[0.02em] text-[var(--color-text-primary)] sm:text-right">
              {formatKz(p.amountKz)}
            </p>
          </article>
        ))}
        {list && list.length === 0 && (
          <p className="text-sm text-[var(--color-text-tertiary)]">
            Sem pagamentos registados ainda.
          </p>
        )}
      </div>
    </AdminShell>
  );
}

function formatKz(v: number): string {
  return `${new Intl.NumberFormat("pt-PT").format(v)} Kz`;
}
