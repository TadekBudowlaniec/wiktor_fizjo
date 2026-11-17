"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

const field =
  "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-base text-cream placeholder:text-cream/40 outline-none transition focus:border-amber focus:bg-white/10";

export function ContactForm({
  email,
  services,
}: {
  email: string;
  services: string[];
}) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const subject = `Wizyta: ${d.get("usluga")}`;
    const body = [
      `Imię: ${d.get("imie")}`,
      `Telefon: ${d.get("telefon")}`,
      `Masaż: ${d.get("usluga")}`,
      "",
      `${d.get("wiadomosc") ?? ""}`,
      "",
      "Zgoda na przetwarzanie danych zgodnie z polityką prywatności: tak",
    ].join("\n");
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-medium text-cream/80">
          Imię
          <input
            name="imie"
            required
            autoComplete="given-name"
            placeholder="Jak masz na imię?"
            className={field}
          />
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-cream/80">
          Telefon
          <input
            name="telefon"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            placeholder="Oddzwonię"
            className={field}
          />
        </label>
      </div>
      <label className="grid gap-1.5 text-sm font-medium text-cream/80">
        Masaż
        <select
          name="usluga"
          defaultValue="Jeszcze nie wiem"
          className={`${field} [&>option]:text-ink`}
        >
          <option>Jeszcze nie wiem</option>
          {services.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-1.5 text-sm font-medium text-cream/80">
        Wiadomość
        <textarea
          name="wiadomosc"
          rows={3}
          placeholder="Preferowany termin lub pytanie (opcjonalnie)"
          className={field}
        />
      </label>
      <label className="flex items-start gap-3 text-sm text-cream/75">
        <input
          type="checkbox"
          name="zgoda"
          required
          className="mt-0.5 size-5 shrink-0 accent-amber"
        />
        <span>
          Wyrażam zgodę na przetwarzanie moich danych w celu odpowiedzi na
          zapytanie i umówienia wizyty. Szczegóły w{" "}
          <Link
            href="/polityka-prywatnosci"
            className="font-semibold text-cream underline underline-offset-4"
          >
            polityce prywatności
          </Link>
          .
        </span>
      </label>
      <button
        type="submit"
        className="mt-1 inline-flex min-h-13 items-center justify-center rounded-full bg-amber px-7 text-base font-semibold text-pine-950 transition hover:bg-amber-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
      >
        Wyślij zapytanie
      </button>
      <p aria-live="polite" className="min-h-5 text-sm text-cream/60">
        {sent
          ? "Otworzył się Twój program pocztowy z gotową wiadomością. Wystarczy kliknąć Wyślij."
          : "Odpowiadam zwykle tego samego dnia."}
      </p>
    </form>
  );
}
