"use client";

import { useEffect, useState } from "react";
import { adminFetch, type AdminDriver } from "@/lib/admin";
import { AdminShell } from "@/components/AdminShell";

export default function AdminDrivers() {
  const [drivers, setDrivers] = useState<AdminDriver[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);

  function load() {
    adminFetch<AdminDriver[]>("/admin/drivers")
      .then(setDrivers)
      .catch((e) => setError((e as Error).message));
  }

  useEffect(load, []);

  async function act(id: string, action: "approve" | "ban" | "unban") {
    setBusyId(id);
    try {
      await adminFetch(`/admin/drivers/${id}/${action}`, {
        method: "PATCH",
        body: action === "ban" ? JSON.stringify({ reason: "admin_panel" }) : undefined,
      });
      load();
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusyId(null);
    }
  }

  return (
    <AdminShell>
      <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--color-text-tertiary)]">
        Motoristas
      </p>
      <h1 className="mt-2 text-4xl sm:text-5xl font-bold -tracking-[0.02em] text-[var(--color-text-primary)]">
        {drivers ? `${drivers.length} registado${drivers.length === 1 ? "" : "s"}` : "—"}
      </h1>

      {error && (
        <p className="mt-6 text-sm text-[var(--color-danger)]">{error}</p>
      )}

      <div className="mt-10 space-y-3">
        {drivers?.map((d) => (
          <article
            key={d.id}
            className="bg-[var(--color-surface)] rounded-[var(--radius-xl)] border border-[var(--color-border-light)] p-6 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4 items-center"
          >
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h2 className="text-lg font-semibold -tracking-[0.01em] text-[var(--color-text-primary)]">
                  {d.name}
                </h2>
                {d.isGhost && (
                  <span className="text-[10px] font-medium tracking-[0.12em] uppercase px-2 py-0.5 rounded-[var(--radius-pill)] bg-[var(--color-text-primary)] text-[var(--color-accent)]">
                    Ghost
                  </span>
                )}
                <StatusPill status={d.status} />
              </div>
              <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                <span className="font-mono">{d.plate}</span> · {d.bike} ·{" "}
                {d.phone}
              </p>
              <p className="mt-1 text-xs text-[var(--color-text-tertiary)]">
                IBAN <span className="font-mono">{d.iban}</span>
                {d.bankName ? ` · ${d.bankName}` : ""}
              </p>
              <p className="mt-1 text-xs text-[var(--color-text-tertiary)]">
                {d.totalRides} viagens · {d.ratingAvg.toFixed(1)} ★
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {d.status === "PENDING_REVIEW" && (
                <button
                  onClick={() => act(d.id, "approve")}
                  disabled={busyId === d.id}
                  className="h-10 px-4 rounded-[var(--radius-md)] bg-[var(--color-accent)] text-[var(--color-text-primary)] text-sm font-semibold disabled:opacity-40"
                >
                  Aprovar
                </button>
              )}
              {d.status !== "BANNED" && (
                <button
                  onClick={() => act(d.id, "ban")}
                  disabled={busyId === d.id}
                  className="h-10 px-4 rounded-[var(--radius-md)] border-[1.5px] border-[var(--color-danger)] text-[var(--color-danger)] text-sm font-semibold disabled:opacity-40"
                >
                  Banir
                </button>
              )}
              {d.status === "BANNED" && (
                <button
                  onClick={() => act(d.id, "unban")}
                  disabled={busyId === d.id}
                  className="h-10 px-4 rounded-[var(--radius-md)] bg-[var(--color-text-primary)] text-white text-sm font-semibold disabled:opacity-40"
                >
                  Desbanir
                </button>
              )}
            </div>
          </article>
        ))}
        {drivers && drivers.length === 0 && (
          <p className="text-sm text-[var(--color-text-tertiary)]">
            Nenhum motorista registado ainda.
          </p>
        )}
      </div>
    </AdminShell>
  );
}

function StatusPill({ status }: { status: string }) {
  const map: Record<string, { bg: string; fg: string; label: string }> = {
    ONLINE: { bg: "var(--color-success)", fg: "white", label: "Online" },
    OFFLINE: { bg: "var(--color-border-strong)", fg: "var(--color-text-primary)", label: "Offline" },
    BUSY: { bg: "var(--color-warning)", fg: "var(--color-text-primary)", label: "Em viagem" },
    PENDING_REVIEW: { bg: "var(--color-text-primary)", fg: "var(--color-accent)", label: "Pendente" },
    APPROVED: { bg: "var(--color-accent)", fg: "var(--color-text-primary)", label: "Aprovado" },
    BANNED: { bg: "var(--color-danger)", fg: "white", label: "Banido" },
  };
  const s = map[status] ?? { bg: "var(--color-border)", fg: "var(--color-text-primary)", label: status };
  return (
    <span
      className="text-[10px] font-medium tracking-[0.08em] uppercase px-2 py-0.5 rounded-[var(--radius-pill)]"
      style={{ background: s.bg, color: s.fg }}
    >
      {s.label}
    </span>
  );
}
