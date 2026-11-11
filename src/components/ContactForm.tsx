"use client";

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
      `Zabieg: ${d.get("usluga")}`,
      "",
      `${d.get("wiadomosc") ?? ""}`,
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
        Zabieg
        <select
          name="usluga"
          defaultValue="Nie wiem, proszę o poradę"
          className={`${field} [&>option]:text-ink`}
        >
          <option>Nie wiem, proszę o poradę</option>
          {services.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-1.5 text-sm font-medium text-cream/80">
        Co Ci dolega?
        <textarea
          name="wiadomosc"
          rows={3}
          placeholder="Kilka słów o problemie i pasujące terminy (opcjonalnie)"
          className={field}
        />
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
