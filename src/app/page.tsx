import Image from "next/image";
import type { ReactNode } from "react";
import Link from "next/link";
import mobilizacja from "@/assets/mobilizacja.jpg";
import terapia from "@/assets/terapia.jpg";
import { ContactForm } from "@/components/ContactForm";
import { disclaimer, faq, reviews, services, site, telHref, type Service } from "@/lib/site";

const nav = [
  { href: "#oferta", label: "Oferta" },
  { href: "#wizyta", label: "Jak pracuję" },
  { href: "#o-mnie", label: "O mnie" },
  { href: "#faq", label: "Pytania" },
];

const moments = [
  {
    title: "Napięte barki i kark",
    text: "Barki pod uszami i uczucie, że całe napięcie dnia siedzi w karku.",
  },
  {
    title: "Długie godziny przy biurku",
    text: "Osiem godzin na krześle i ciało, które prosi o chwilę ulgi.",
  },
  {
    title: "Zmęczenie po treningu",
    text: "Mięśnie, które po wysiłku chcą się po prostu rozluźnić.",
  },
  {
    title: "Długi dzień na nogach",
    text: "Ciężkie nogi i stopy po całym dniu w ruchu.",
  },
  {
    title: "Stres i przemęczenie",
    text: "Zmęczenie, którego nie da się już przespać.",
  },
  {
    title: "Chwila tylko dla siebie",
    text: "Godzina spokoju, bez telefonu i bez pośpiechu.",
  },
];

const steps = [
  {
    title: "Krótka rozmowa",
    text: "Pytam, czego oczekujesz od masażu, jaki ucisk lubisz i czy nie ma przeciwwskazań. Przy dolegliwościach zdrowotnych odsyłam do lekarza lub fizjoterapeuty.",
  },
  {
    title: "Masaż dopasowany do Ciebie",
    text: "Wybierasz zakres: całe ciało albo wybraną partię. Tempo i siłę ucisku dopasowuję na bieżąco do Twoich odczuć.",
  },
  {
    title: "Czas na odpoczynek",
    text: "Po masażu masz chwilę, żeby spokojnie wstać i wrócić do swojego dnia rozluźniony.",
  },
];

const principles = [
  "Cała wizyta jest tylko dla Ciebie. Jeden klient, pełna uwaga.",
  "Pytam o komfort i dopasowuję ucisk do Twoich odczuć.",
  "Czysty, spokojny gabinet i świeże podkłady dla każdego klienta.",
  "Ukończony kurs masażu klasycznego I stopnia.",
];

const btnPrimary =
  "inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-amber px-7 text-base font-semibold text-pine-950 transition hover:bg-amber-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber";
const btnGhost =
  "inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-cream/25 px-7 text-base font-semibold text-cream transition hover:border-cream/60 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream";

function PhoneIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-amber">
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-4 transition group-hover:translate-x-1">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p className={`mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] ${dark ? "text-amber" : "text-amber-deep"}`}>
      <span className="h-px w-8 bg-current" aria-hidden="true" />
      {children}
    </p>
  );
}

function ServiceMeta({ s, dark = false }: { s: Service; dark?: boolean }) {
  if (!s.duration && !s.price) return null;
  return (
    <p className={`text-sm font-semibold ${dark ? "text-cream" : "text-pine-800"}`}>
      {[s.duration, s.price].filter(Boolean).join(" · ")}
    </p>
  );
}

function ServiceCard({ s, index }: { s: Service; index: number }) {
  return (
    <article className="reveal group flex flex-col rounded-3xl border border-sand bg-white p-7 transition hover:-translate-y-1 hover:border-pine-300 hover:shadow-[0_24px_60px_-30px_rgba(18,38,30,0.45)] sm:p-8">
      <span className="font-display text-sm text-amber-deep">0{index + 1}</span>
      <h3 className="mt-3 font-display text-2xl leading-tight text-pine-900">{s.title}</h3>
      <p className="mt-2 font-medium text-pine-700">{s.lead}</p>
      <p className="mt-3 text-pretty text-muted">{s.description}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {s.goodFor.map((g) => (
          <li key={g} className="rounded-full bg-pine-100 px-3 py-1 text-sm font-medium text-pine-800">
            {g}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex items-center justify-between gap-4 pt-7">
        <a href="#kontakt" className="inline-flex items-center gap-2 font-semibold text-pine-800 underline-offset-4 hover:underline">
          Umów ten masaż <Arrow />
        </a>
        <ServiceMeta s={s} />
      </div>
    </article>
  );
}

export default function Home() {
  const [featured, ...rest] = services;
  const bookHref = site.bookingUrl || "#kontakt";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: site.brand,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    ...(site.address && { address: site.address }),
    ...(site.city && { areaServed: site.city }),
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, description: s.lead },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      {/* ───────── Nagłówek ───────── */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-pine-950/85 text-cream backdrop-blur-md">
        <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
          <a href="#top" className="flex items-baseline gap-2 font-display text-xl tracking-tight">
            {site.name}
            <span className="text-sm font-sans font-medium uppercase tracking-[0.16em] text-pine-300">Masaż</span>
          </a>
          <nav aria-label="Główna" className="hidden items-center gap-8 text-[0.95rem] font-medium text-cream/80 md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="transition hover:text-cream">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href={telHref} className="hidden items-center gap-2 text-[0.95rem] font-semibold text-cream lg:inline-flex">
              <PhoneIcon className="size-4 text-amber" />
              {site.phone}
            </a>
            <a href={bookHref} className="inline-flex min-h-11 items-center whitespace-nowrap rounded-full bg-amber px-5 text-sm font-semibold text-pine-950 transition hover:bg-amber-light">
              Umów wizytę
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* ───────── Hero ───────── */}
        <section className="relative isolate overflow-hidden bg-pine-950 text-cream">
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_85%_10%,rgba(47,106,82,0.55),transparent_70%),radial-gradient(40%_40%_at_0%_100%,rgba(227,168,87,0.14),transparent_70%)]" />
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-28 lg:pt-20">
            <div>
              <p className="rise mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-pine-300" style={{ "--i": 0 } as React.CSSProperties}>
                <span className="size-2 rounded-full bg-amber" aria-hidden="true" />
                {site.role}
                {site.city && ` · ${site.city}`}
              </p>
              <h1 className="rise font-display text-[2.75rem] leading-[1.04] tracking-tight text-balance sm:text-6xl lg:text-[4.25rem]" style={{ "--i": 1 } as React.CSSProperties}>
                Mniej napięcia. <em className="text-amber">Więcej spokoju</em>.
              </h1>
              <p className="rise mt-6 max-w-xl text-lg leading-relaxed text-cream/75 text-pretty sm:text-xl" style={{ "--i": 2 } as React.CSSProperties}>
                Masaż klasyczny i relaksacyjny dopasowany do Ciebie. Przychodzisz zmęczony i spięty, wychodzisz rozluźniony.
              </p>
              <div className="rise mt-9 flex flex-col gap-3 sm:flex-row" style={{ "--i": 3 } as React.CSSProperties}>
                <a href={bookHref} className={btnPrimary}>
                  Umów wizytę
                </a>
                <a href={telHref} className={btnGhost}>
                  <PhoneIcon /> {site.phone}
                </a>
              </div>
              <ul className="rise mt-10 grid gap-3 text-[0.95rem] text-cream/80 sm:grid-cols-3" style={{ "--i": 4 } as React.CSSProperties}>
                {["Masaż 1 na 1", "Spokojny, czysty gabinet", "Ucisk dopasowany do Ciebie"].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <Check /> {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rise relative mx-auto w-full max-w-md lg:max-w-none" style={{ "--i": 2 } as React.CSSProperties}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] ring-1 ring-white/10">
                <Image
                  src={terapia}
                  alt={`${site.name} podczas pracy z klientem w gabinecie`}
                  fill
                  preload
                  placeholder="blur"
                  sizes="(min-width: 1024px) 520px, (min-width: 640px) 448px, 92vw"
                  className="object-cover object-[58%_50%]"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-pine-950/55 via-transparent to-transparent" />
              </div>
              <div className="absolute -right-2 bottom-8 max-w-[13rem] rounded-2xl border border-white/15 bg-pine-900/80 p-4 shadow-2xl backdrop-blur-md sm:-right-5">
                <p className="font-display text-lg leading-tight">Jedna wizyta, jeden klient</p>
                <p className="mt-1 text-sm text-cream/70">Cały czas w gabinecie jest tylko dla Ciebie.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ───────── Problemy ───────── */}
        <section className="bg-cream py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="reveal max-w-2xl">
              <Eyebrow>Kiedy warto przyjść</Eyebrow>
              <h2 className="font-display text-4xl leading-tight tracking-tight text-pine-900 text-balance sm:text-5xl">
                Brzmi znajomo? Czas na chwilę odprężenia.
              </h2>
            </div>
            <ul className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-sand bg-sand sm:grid-cols-2 lg:grid-cols-3">
              {moments.map((p) => (
                <li key={p.title} className="reveal bg-paper p-7 sm:p-8">
                  <h3 className="font-display text-xl text-pine-900">{p.title}</h3>
                  <p className="mt-2 text-muted text-pretty">{p.text}</p>
                </li>
              ))}
            </ul>
            <div className="reveal mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xl text-lg text-pine-800">
                Nie wiesz, który masaż wybrać? Napisz, czego potrzebujesz, a doradzę przed wizytą.
              </p>
              <a href="#kontakt" className="group inline-flex min-h-13 items-center gap-2 rounded-full bg-pine-900 px-7 font-semibold text-cream transition hover:bg-pine-800">
                Zapytaj o termin <Arrow />
              </a>
            </div>
          </div>
        </section>

        {/* ───────── Oferta ───────── */}
        <section id="oferta" className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="reveal max-w-2xl">
              <Eyebrow>Oferta</Eyebrow>
              <h2 className="font-display text-4xl leading-tight tracking-tight text-pine-900 text-balance sm:text-5xl">
                Masaże relaksacyjne dla całego ciała
              </h2>
              <p className="mt-5 text-lg text-muted text-pretty">
                Masaż całego ciała albo wybranej partii. Wszystkie masaże mają charakter relaksacyjny i wellness.
              </p>
            </div>

            <article className="reveal relative isolate mt-12 overflow-hidden rounded-3xl bg-pine-900 text-cream">
              <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(60%_80%_at_100%_0%,rgba(47,106,82,0.6),transparent_70%),radial-gradient(40%_60%_at_0%_100%,rgba(227,168,87,0.14),transparent_70%)]" />
              <div className="flex max-w-3xl flex-col p-8 sm:p-12">
                <span className="w-fit rounded-full bg-amber px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-pine-950">
                  Najczęściej wybierany
                </span>
                <h3 className="mt-5 font-display text-3xl leading-tight sm:text-4xl">{featured.title}</h3>
                <p className="mt-3 text-lg font-medium text-pine-300">{featured.lead}</p>
                <p className="mt-4 text-cream/75 text-pretty">{featured.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {featured.goodFor.map((g) => (
                    <li key={g} className="rounded-full border border-white/15 px-3 py-1 text-sm font-medium text-cream/90">
                      {g}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap items-center gap-5">
                  <a href="#kontakt" className={btnPrimary}>
                    Umów masaż
                  </a>
                  <ServiceMeta s={featured} dark />
                </div>
              </div>
            </article>

            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((s, i) => (
                <ServiceCard key={s.id} s={s} index={i + 1} />
              ))}
            </div>

            <p className="reveal mt-8 max-w-3xl rounded-2xl border border-sand bg-cream px-6 py-4 text-sm text-muted text-pretty">
              {disclaimer}
            </p>
          </div>
        </section>

        {/* ───────── Przebieg wizyty ───────── */}
        <section id="wizyta" className="bg-sand/60 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="reveal max-w-2xl">
              <Eyebrow>Jak pracuję</Eyebrow>
              <h2 className="font-display text-4xl leading-tight tracking-tight text-pine-900 text-balance sm:text-5xl">
                Wiesz, co Cię czeka, zanim położysz się na stole
              </h2>
            </div>
            <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
              {steps.map((s, i) => (
                <li key={s.title} className="reveal border-t-2 border-pine-900 pt-6">
                  <span className="font-display text-6xl leading-none text-pine-300" aria-hidden="true">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-2xl text-pine-900">{s.title}</h3>
                  <p className="mt-3 text-muted text-pretty">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ───────── O mnie ───────── */}
        <section id="o-mnie" className="py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
            <div className="reveal relative">
              <div className="overflow-hidden rounded-[2rem]">
                <Image
                  src={mobilizacja}
                  alt={`${site.name} pracuje z klientem leżącym na stole do masażu`}
                  placeholder="blur"
                  sizes="(min-width: 1024px) 540px, 92vw"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div aria-hidden="true" className="absolute -bottom-5 -right-5 -z-10 hidden h-full w-full rounded-[2rem] bg-pine-100 sm:block" />
            </div>
            <div className="reveal">
              <Eyebrow>O mnie</Eyebrow>
              <h2 className="font-display text-4xl leading-tight tracking-tight text-pine-900 text-balance sm:text-5xl">
                Cześć, jestem {site.name}
              </h2>
              <p className="mt-5 text-lg text-muted text-pretty">
                Zajmuję się masażem klasycznym i relaksacyjnym. Zależy mi na tym, żebyś na stole naprawdę odpoczął, a z gabinetu wyszedł rozluźniony i w lepszym nastroju.
              </p>
              <ul className="mt-8 grid gap-4">
                {principles.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-pine-900">
                    <span className="mt-0.5 text-amber-deep [&>svg]:text-current">
                      <Check />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <a href="#kontakt" className="group mt-10 inline-flex min-h-13 items-center gap-2 rounded-full bg-pine-900 px-7 font-semibold text-cream transition hover:bg-pine-800">
                Umów pierwszy masaż <Arrow />
              </a>
            </div>
          </div>
        </section>

        {/* ───────── Opinie (widoczne po uzupełnieniu w site.ts) ───────── */}
        {reviews.length > 0 && (
          <section className="bg-cream py-20 sm:py-28">
            <div className="mx-auto max-w-6xl px-5 sm:px-8">
              <div className="reveal max-w-2xl">
                <Eyebrow>Opinie</Eyebrow>
                <h2 className="font-display text-4xl leading-tight tracking-tight text-pine-900 sm:text-5xl">Co mówią pacjenci</h2>
              </div>
              <div className="mt-12 grid gap-6 md:grid-cols-3">
                {reviews.map((r) => (
                  <figure key={r.author + r.text} className="reveal rounded-3xl border border-sand bg-white p-8">
                    <blockquote className="font-display text-xl leading-snug text-pine-900">{r.text}</blockquote>
                    <figcaption className="mt-5 text-sm font-semibold text-muted">{r.author}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ───────── FAQ ───────── */}
        <section id="faq" className="bg-cream py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="reveal">
              <Eyebrow>Pytania</Eyebrow>
              <h2 className="font-display text-4xl leading-tight tracking-tight text-pine-900 text-balance sm:text-5xl">
                Zanim się umówisz
              </h2>
              <p className="mt-5 text-lg text-muted">
                Nie ma tu Twojego pytania? Zadzwoń:{" "}
                <a href={telHref} className="whitespace-nowrap font-semibold text-pine-800 underline underline-offset-4">
                  {site.phone}
                </a>
              </p>
            </div>
            <div className="reveal divide-y divide-sand border-y border-sand">
              {faq.map((f) => (
                <details key={f.q} className="group py-1">
                  <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 font-display text-xl text-pine-900 transition hover:text-pine-600">
                    {f.q}
                    <span aria-hidden="true" className="grid size-9 shrink-0 place-items-center rounded-full border border-pine-300 text-xl font-sans leading-none transition group-open:rotate-45 group-open:bg-pine-900 group-open:text-cream">
                      +
                    </span>
                  </summary>
                  <p className="max-w-2xl pb-6 text-muted text-pretty">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ───────── Kontakt ───────── */}
        <section id="kontakt" className="relative isolate overflow-hidden bg-pine-950 py-20 text-cream sm:py-28">
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(50%_60%_at_100%_0%,rgba(47,106,82,0.5),transparent_70%)]" />
          <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
            <div className="reveal">
              <Eyebrow dark>Umów wizytę</Eyebrow>
              <h2 className="font-display text-4xl leading-tight tracking-tight text-balance sm:text-5xl">
                Zrób pierwszy krok. Resztą zajmiemy się razem.
              </h2>
              <p className="mt-5 max-w-lg text-lg text-cream/75 text-pretty">
                Najszybciej umówisz się telefonicznie. Jeśli nie odbieram, jestem w trakcie masażu i oddzwonię.
              </p>
              <a href={telHref} className="mt-8 inline-flex items-center gap-4 font-display text-3xl text-cream transition hover:text-amber sm:text-4xl">
                <span className="grid size-14 place-items-center rounded-full bg-amber text-pine-950">
                  <PhoneIcon className="size-6" />
                </span>
                {site.phone}
              </a>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={telHref.replace("tel:", "sms:")} className={btnGhost}>
                  Wyślij SMS
                </a>
                {site.bookingUrl && (
                  <a href={site.bookingUrl} className={btnGhost}>
                    Rezerwacja online
                  </a>
                )}
              </div>
              <dl className="mt-10 grid gap-6 text-cream/80 sm:grid-cols-2">
                {site.address && (
                  <div>
                    <dt className="text-sm font-semibold uppercase tracking-[0.14em] text-pine-300">Adres</dt>
                    <dd className="mt-2">
                      {site.mapsUrl ? (
                        <a href={site.mapsUrl} className="underline underline-offset-4 hover:text-cream">
                          {site.address}
                        </a>
                      ) : (
                        site.address
                      )}
                    </dd>
                  </div>
                )}
                {site.hours.length > 0 && (
                  <div>
                    <dt className="text-sm font-semibold uppercase tracking-[0.14em] text-pine-300">Godziny</dt>
                    <dd className="mt-2 grid gap-1">
                      {site.hours.map((h) => (
                        <span key={h.days}>
                          {h.days}: {h.time}
                        </span>
                      ))}
                    </dd>
                  </div>
                )}
              </dl>
            </div>
            <div className="reveal rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-9">
              <h3 className="font-display text-2xl">Wolisz napisać?</h3>
              <p className="mb-6 mt-2 text-cream/70">Zostaw numer, a oddzwonię z propozycją terminu.</p>
              <ContactForm email={site.email} services={services.map((s) => s.title)} />
            </div>
          </div>
        </section>
      </main>

      {/* ───────── Stopka ───────── */}
      <footer className="border-t border-white/10 bg-pine-950 pb-28 pt-10 text-sm text-cream/60 lg:pb-10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="mb-6 border-b border-white/10 pb-6 text-cream/70">{disclaimer}</p>
        </div>
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {site.year} {site.legalName || site.brand}
            {site.nip && ` · NIP ${site.nip}`}
          </p>
          <div className="flex flex-wrap gap-6">
            <Link href="/polityka-prywatnosci" className="hover:text-cream">
              Polityka prywatności
            </Link>
            {site.instagram && (
              <a href={site.instagram} className="hover:text-cream">
                Instagram
              </a>
            )}
            <a href={`mailto:${site.email}`} className="hover:text-cream">
              {site.email}
            </a>
            <a href={telHref} className="hover:text-cream">
              {site.phone}
            </a>
          </div>
        </div>
      </footer>

      {/* ───────── Pasek akcji na telefonie ───────── */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-pine-950/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md lg:hidden">
        <div className="mx-auto flex max-w-md gap-3">
          <a href={telHref} className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-cream/25 font-semibold text-cream">
            <PhoneIcon /> Zadzwoń
          </a>
          <a href={bookHref} className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full bg-amber font-semibold text-pine-950">
            Umów wizytę
          </a>
        </div>
      </div>
    </>
  );
}
