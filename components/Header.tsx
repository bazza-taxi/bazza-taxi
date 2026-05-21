"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Mode = "light" | "dark";

export function Header({ mode = "light" }: { mode?: Mode }) {
  // Stick + glass-blur the header once the user scrolls past the hero.
  // Plain "absolute top" on a yellow hero looks fine, but as soon as the
  // user scrolls the content underneath, we want the nav to read on white.
  const [stuck, setStuck] = useState(false);
  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDark = mode === "dark";
  const inkClass = isDark
    ? "text-white"
    : "text-[var(--color-text-primary)]";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        stuck
          ? isDark
            ? "bg-[var(--color-ink)]/85 backdrop-blur-md border-b border-white/10"
            : "bg-white/85 backdrop-blur-md border-b border-[var(--color-border-light)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-10 h-16 sm:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group" aria-label="BAZA">
          <span
            className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent)] transition-transform group-hover:scale-125"
            aria-hidden
          />
          <span className={`font-bold text-[17px] tracking-[-0.02em] ${inkClass}`}>
            BAZA
          </span>
        </Link>

        <div
          className={`hidden md:flex items-center gap-9 text-[14px] font-medium ${inkClass}`}
        >
          <Link
            href="/how-it-works"
            className="opacity-80 hover:opacity-100 transition"
          >
            Como funciona
          </Link>
          <Link
            href="/drivers"
            className="opacity-80 hover:opacity-100 transition"
          >
            Motoristas
          </Link>
          <Link
            href="/cities"
            className="opacity-80 hover:opacity-100 transition"
          >
            Cidades
          </Link>
          <Link
            href="/about"
            className="opacity-80 hover:opacity-100 transition"
          >
            Sobre
          </Link>
        </div>

        <Link
          href="#download"
          className={`inline-flex items-center justify-center h-10 sm:h-11 px-5 rounded-full text-[13px] sm:text-sm font-semibold transition ${
            isDark
              ? "bg-[var(--color-accent)] text-[var(--color-ink)] hover:bg-[var(--color-accent-pressed)]"
              : "bg-[var(--color-ink)] text-white hover:bg-[var(--color-ink)]/90"
          }`}
        >
          Descarregar
        </Link>
      </nav>
    </header>
  );
}
