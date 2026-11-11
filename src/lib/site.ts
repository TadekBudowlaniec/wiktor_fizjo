/**
 * Wszystkie dane gabinetu w jednym miejscu.
 * UZUPEŁNIJ pola oznaczone "TODO" przed publikacją strony.
 * Puste pola ("" lub []) po prostu nie wyświetlają się na stronie.
 */
export const site = {
  name: "Wiktor",
  brand: "Wiktor · Fizjoterapia",
  role: "Fizjoterapeuta",
  url: "https://example.com", // TODO: docelowa domena
  phone: "+48 000 000 000", // TODO: numer telefonu
  email: "kontakt@example.com", // TODO: adres e-mail (trafiają tu zapytania z formularza)
  city: "", // TODO: np. "Warszawa"
  address: "", // TODO: np. "ul. Leśna 12/3, 00-001 Warszawa"
  mapsUrl: "", // TODO: link do Map Google
  hours: [] as { days: string; time: string }[], // TODO: np. { days: "Pon.–Pt.", time: "9:00–19:00" }
  bookingUrl: "", // TODO: opcjonalnie link do Booksy / Znanego Lekarza
  instagram: "", // TODO: opcjonalnie
  year: 2026,
};

export type Service = {
  id: string;
  title: string;
  lead: string;
  description: string;
  goodFor: string[];
  duration: string; // TODO: np. "50 min"
  price: string; // TODO: np. "180 zł"
};

export const services: Service[] = [
  {
    id: "akupunktura",
    title: "Akupunktura",
    lead: "Precyzyjna praca igłą tam, gdzie napięcie siedzi najgłębiej.",
    description:
      "Cienkie, jednorazowe igły wprowadzane w dokładnie dobrane punkty. Pomagają rozluźnić nadmiernie napięte mięśnie i zmniejszyć dolegliwości bólowe, także tam, gdzie sam masaż nie wystarcza.",
    goodFor: ["Ból karku i barków", "Napięte, zbite mięśnie", "Przeciążenia"],
    duration: "",
    price: "",
  },
  {
    id: "masaz-przeciwbolowy",
    title: "Masaż przeciwbólowy",
    lead: "Celowana praca na tkankach, które odpowiadają za ból.",
    description:
      "Skupiam się na źródle dolegliwości, a nie tylko na miejscu, które boli. Siłę i tempo dobieram do tego, co czujesz w trakcie zabiegu.",
    goodFor: ["Ból pleców", "Ból karku", "Bóle napięciowe"],
    duration: "",
    price: "",
  },
  {
    id: "masaz-mobilnosc",
    title: "Masaż poprawiający mobilność",
    lead: "Masaż, rozciąganie i mobilizacje w jednym zabiegu.",
    description:
      "Dla osób, które czują sztywność po godzinach przy biurku albo chcą swobodniej poruszać się na treningu. Pracujemy nad zakresem ruchu bioder, barków i kręgosłupa.",
    goodFor: ["Sztywność po siedzeniu", "Sportowcy", "Ograniczony zakres ruchu"],
    duration: "",
    price: "",
  },
  {
    id: "masaz-relaksacyjny",
    title: "Masaż relaksacyjny",
    lead: "Spokojny, płynny masaż, przy którym naprawdę odpoczywasz.",
    description:
      "Wycisza, rozluźnia i pozwala odpuścić napięcie po wymagającym tygodniu. Bez pośpiechu i bez mocnego ucisku.",
    goodFor: ["Stres i zmęczenie", "Problemy z wyciszeniem", "Chwila dla siebie"],
    duration: "",
    price: "",
  },
  {
    id: "masaz-tradycyjny",
    title: "Masaż tradycyjny",
    lead: "Klasyczny masaż całego ciała lub wybranej okolicy.",
    description:
      "Sprawdzona, uniwersalna forma pracy z ciałem. Dobry wybór na początek, jeśli nie masz pewności, czego dokładnie potrzebujesz.",
    goodFor: ["Ogólne napięcie", "Regeneracja", "Pierwsza wizyta"],
    duration: "",
    price: "",
  },
];

/** Opinie pacjentów. TODO: wklej prawdziwe opinie (np. z Google). Pusta lista ukrywa sekcję. */
export const reviews: { author: string; text: string }[] = [];

export const faq = [
  {
    q: "Czy akupunktura boli?",
    a: "Igły są bardzo cienkie, więc samo wkłucie jest zwykle ledwo wyczuwalne. W trakcie zabiegu możesz poczuć krótkie rozpieranie lub drgnięcie mięśnia. Cały czas jesteśmy w kontakcie i w każdej chwili możemy zmienić intensywność.",
  },
  {
    q: "Nie wiem, który zabieg wybrać. Co wtedy?",
    a: "To zupełnie normalne. Zadzwoń lub napisz i opisz krótko, co Ci dolega. Na pierwszej wizycie rozmawiamy, oceniam ruch i napięcie, a potem proponuję formę terapii, która ma najwięcej sensu w Twoim przypadku.",
  },
  {
    q: "Czy potrzebuję skierowania?",
    a: "Nie. Na wizytę prywatną możesz umówić się bez skierowania. Jeśli masz wyniki badań lub opisy od lekarza, zabierz je ze sobą.",
  },
  {
    q: "Jak przygotować się do wizyty?",
    a: "Weź wygodny strój, który nie krępuje ruchów. Dobrze jest nie przychodzić tuż po obfitym posiłku. Resztę zapewniam na miejscu.",
  },
  {
    q: "Ile wizyt będę potrzebować?",
    a: "To zależy od problemu i tego, jak długo trwa. Po pierwszej wizycie mówię wprost, czego możesz się spodziewać i jaki plan proponuję. Bez naciągania na pakiety.",
  },
  {
    q: "Czy są przeciwwskazania do zabiegów?",
    a: "Tak, jak przy każdej terapii. Dlatego przed zabiegiem pytam o stan zdrowia, przyjmowane leki i przebyte urazy. Jeśli coś budzi wątpliwości, powiem o tym otwarcie i zasugeruję konsultację z lekarzem.",
  },
];

export const telHref = `tel:${site.phone.replace(/[^+\d]/g, "")}`;
