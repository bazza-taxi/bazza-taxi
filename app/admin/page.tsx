"use client";

import { useEffect, useState } from "react";
import { adminFetch, type AdminDashboard } from "@/lib/admin";
import { AdminShell } from "@/components/AdminShell";

export default function AdminHome() {
  const [data, setData] = useState<AdminDashboard | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    adminFetch<AdminDashboard>("/admin/dashboard")
      .then(setData)
      .catch((e) => setError((e as Error).message));
  }, []);

  return (
    <AdminShell>
      <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--color-text-tertiary)]">
        Resumo
      </p>
      <h1 className="mt-2 text-4xl sm:text-5xl font-bold -tracking-[0.02em] text-[var(--color-text-primary)]">
        Hoje
      </h1>

      {error && (
        <p className="mt-6 text-sm text-[var(--color-danger)]">{error}</p>
      )}

      <div className="mt-10 grid grid-cols-2 sm:grid-cols-5 gap-4">
        <Stat label="Motoristas" value={data?.totalDrivers} />
        <Stat label="Online" value={data?.onlineDrivers} />
        <Stat label="Viagens totais" value={data?.totalRides} />
        <Stat label="Concluídas hoje" value={data?.completedToday} />
        <Stat label="Tickets abertos" value={data?.openTickets} />
      </div>
    </AdminShell>
  );
}

function Stat({ label, value }: { label: string; value: number | undefined }) {
  return (
    <div className="bg-[var(--color-surface)] rounded-[var(--radius-xl)] p-6 border border-[var(--color-border-light)]">
      <p className="text-4xl font-bold -tracking-[0.02em] text-[var(--color-text-primary)]">
        {value ?? "—"}
      </p>
      <p className="mt-2 text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--color-text-tertiary)]">
        {label}
      </p>
    </div>
  );
}
