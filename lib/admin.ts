"use client";

const STORAGE_KEY = "baza_admin_token";
const API_BASE =
  process.env.NEXT_PUBLIC_BAZA_API_URL ??
  "https://bazza-taxi-api.onrender.com";

export function getAdminToken(): string {
  if (typeof window === "undefined") return "";
  return window.localStorage.getItem(STORAGE_KEY) ?? "";
}

export function setAdminToken(token: string): void {
  window.localStorage.setItem(STORAGE_KEY, token.trim());
}

export function clearAdminToken(): void {
  window.localStorage.removeItem(STORAGE_KEY);
}

export async function adminFetch<T>(
  path: string,
  init: RequestInit = {},
): Promise<T> {
  const token = getAdminToken();
  if (!token) throw new Error("UNAUTHORIZED");
  const res = await fetch(`${API_BASE}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      "X-Admin-Token": token,
      ...(init.headers ?? {}),
    },
  });
  if (res.status === 401) {
    clearAdminToken();
    throw new Error("UNAUTHORIZED");
  }
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  return res.json() as Promise<T>;
}

export interface AdminDashboard {
  totalDrivers: number;
  onlineDrivers: number;
  totalRides: number;
  completedToday: number;
  openTickets: number;
}

export interface AdminDriver {
  id: string;
  name: string;
  phone: string;
  plate: string;
  bike: string;
  status: string;
  iban: string;
  bankName: string | null;
  totalRides: number;
  ratingAvg: number;
  isGhost: boolean;
  createdAt: string;
}
