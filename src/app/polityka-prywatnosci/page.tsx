import type { Metadata } from "next";
import Link from "next/link";
import { disclaimer, site, telHref } from "@/lib/site";

export const metadata: Metadata = {
  title: `Polityka prywatności | ${site.brand}`,
  description: `Jak ${site.brand} przetwarza dane osobowe przekazane przez formularz, e-mail i telefon.`,
  alternates: { canonical: "/polityka-prywatnosci" },
};

const admin = site.legalName || site.name;

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-10 font-display text-2xl text-pine-900">{children}</h2>;
}

export default function PrivacyPolicy() {
  return (
    <main className="bg-cream py-16 sm:py-24">
      <article className="mx-auto max-w-3xl px-5 text-pine-900 sm:px-8 [&_li]:mt-2 [&_p]:mt-4 [&_p]:text-pretty [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6">
        <Link href="/" className="text-sm font-semibold text-pine-700 underline underline-offset-4">
          ← Wróć na stronę główną
        </Link>
        <h1 className="mt-6 font-display text-4xl leading-tight tracking-tight sm:text-5xl">Polityka prywatności</h1>
        <p className="text-muted">Obowiązuje od 17 listopada 2026 r.</p>

        <H2>Kto jest administratorem danych</H2>
        <p>
          Administratorem Twoich danych osobowych jest {admin}
          {site.nip && `, NIP ${site.nip}`}
          {site.address ? `, ${site.address}` : site.city && `, ${site.city}`}. W sprawach danych osobowych możesz się kontaktować:
        </p>
        <ul>
          <li>
            e-mail:{" "}
            <a href={`mailto:${site.email}`} className="font-semibold underline underline-offset-4">
              {site.email}
            </a>
          </li>
          <li>
            telefon:{" "}
            <a href={telHref} className="font-semibold underline underline-offset-4">
              {site.phone}
            </a>
          </li>
        </ul>

        <H2>Jakie dane zbieram i po co</H2>
        <p>
          Zbieram tylko dane, które sam(a) mi przekazujesz przez formularz kontaktowy, e-mail, SMS lub telefon:
          imię, numer telefonu, adres e-mail (jeśli piszesz e-mailem) i treść wiadomości, np. preferowany termin.
          Używam ich wyłącznie po to, żeby:
        </p>
        <ul>
          <li>odpowiedzieć na Twoje zapytanie i umówić wizytę (art. 6 ust. 1 lit. a i b RODO),</li>
          <li>skontaktować się w sprawie umówionej wizyty, np. przy zmianie terminu (art. 6 ust. 1 lit. b RODO),</li>
          <li>prowadzić wymagane prawem rozliczenia, jeśli skorzystasz z usługi (art. 6 ust. 1 lit. c RODO).</li>
        </ul>
        <p>
          Nie wpisuj w formularzu informacji o stanie zdrowia. Jeśli przed masażem trzeba porozmawiać o
          przeciwwskazaniach, robimy to na miejscu.
        </p>

        <H2>Jak długo przechowuję dane</H2>
        <ul>
          <li>Dane z zapytań, po których nie doszło do wizyty: do 12 miesięcy od ostatniego kontaktu.</li>
          <li>Dane klientów: przez czas współpracy, a potem do 12 miesięcy od ostatniej wizyty.</li>
          <li>Dane potrzebne do rozliczeń: przez okres wymagany przepisami podatkowymi (zwykle 5 lat).</li>
        </ul>

        <H2>Komu przekazuję dane</H2>
        <p>
          Nie sprzedaję ani nie udostępniam Twoich danych w celach marketingowych. Dostęp do nich mogą mieć tylko
          dostawcy usług, z których korzystam przy prowadzeniu działalności: dostawca poczty e-mail i telefonu oraz
          firma hostingowa (Netlify), która utrzymuje stronę i może zapisywać techniczne logi serwera, np. adres IP.
        </p>

        <H2>Twoje prawa</H2>
        <p>Masz prawo:</p>
        <ul>
          <li>uzyskać dostęp do swoich danych i ich kopię,</li>
          <li>poprawić dane,</li>
          <li>usunąć dane („prawo do bycia zapomnianym”),</li>
          <li>ograniczyć przetwarzanie lub sprzeciwić się mu,</li>
          <li>przenieść dane,</li>
          <li>w każdej chwili wycofać zgodę. Nie wpływa to na zgodność z prawem przetwarzania przed jej wycofaniem,</li>
          <li>złożyć skargę do Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa).</li>
        </ul>
        <p>
          Żeby skorzystać z tych praw albo poprosić o usunięcie danych, napisz na{" "}
          <a href={`mailto:${site.email}`} className="font-semibold underline underline-offset-4">
            {site.email}
          </a>{" "}
          lub zadzwoń. Odpowiem najpóźniej w ciągu miesiąca.
        </p>
        <p>Podanie danych jest dobrowolne, ale bez nich nie mogę odpowiedzieć na zapytanie ani umówić wizyty.</p>

        <H2>Pliki cookies</H2>
        <p>
          Strona nie używa plików cookies do analityki, reklamy ani śledzenia. Nie korzysta z narzędzi typu Google
          Analytics ani pikseli reklamowych. Jeśli to się zmieni, zaktualizuję tę politykę i poproszę o zgodę.
        </p>

        <H2>Zastrzeżenie</H2>
        <p>{disclaimer}</p>
      </article>
    </main>
  );
}
