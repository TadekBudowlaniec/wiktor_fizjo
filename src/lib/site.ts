/**
 * Wszystkie dane gabinetu w jednym miejscu.
 * UZUPEŁNIJ pola oznaczone "TODO" przed publikacją strony.
 * Puste pola ("" lub []) po prostu nie wyświetlają się na stronie.
 */
export const site = {
  name: "Wiktor",
  brand: "Wiktor · Fizjoterapia",
  role: "Fizjoterapeuta",
  url: "https://domenaplusy.pl",
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
    lead: "Metoda medycyny tradycyjnej i komplementarnej.",
    description:
      "Cienkie, jednorazowe, sterylne igły wprowadzane w dobrane punkty. Akupunkturę oferuję jako metodę medycyny tradycyjnej i komplementarnej. Może uzupełniać dbanie o zdrowie, ale nie zastępuje leczenia ani konsultacji lekarskiej.",
    goodFor: ["Medycyna tradycyjna", "Metoda komplementarna", "Jednorazowe igły"],
    duration: "",
    price: "",
  },
  {
    id: "masaz-klasyczny",
    title: "Masaż klasyczny relaksacyjny",
    lead: "Klasyczny masaż całego ciała w spokojnym tempie.",
    description:
      "Pełny masaż klasyczny, przy którym możesz się wyciszyć i odpocząć po wymagającym tygodniu. Bez pośpiechu, z uciskiem dopasowanym do Twoich odczuć.",
    goodFor: ["Całe ciało", "Relaks", "Wellness"],
    duration: "",
    price: "",
  },
  {
    id: "masaz-plecow",
    title: "Masaż pleców",
    lead: "Relaksacyjny masaż całego grzbietu.",
    description:
      "Rozluźniający masaż pleców, karku i barków. Dobry wybór, gdy masz mniej czasu, a chcesz chwili odprężenia.",
    goodFor: ["Grzbiet", "Relaks", "Wellness"],
    duration: "",
    price: "",
  },
  {
    id: "masaz-konczyn-gornych",
    title: "Masaż kończyn górnych",
    lead: "Odprężający masaż rąk i ramion.",
    description:
      "Spokojny masaż dłoni, przedramion i ramion. Przyjemna chwila dla rąk, które cały dzień pracują przy komputerze lub fizycznie.",
    goodFor: ["Ręce", "Relaks", "Wellness"],
    duration: "",
    price: "",
  },
  {
    id: "masaz-konczyn-dolnych",
    title: "Masaż kończyn dolnych",
    lead: "Relaksacyjny masaż nóg i stóp.",
    description:
      "Rozluźniający masaż stóp, łydek i ud. Daje uczucie lekkości po długim dniu na nogach.",
    goodFor: ["Nogi", "Relaks", "Wellness"],
    duration: "",
    price: "",
  },
  {
    id: "masaz-brzucha",
    title: "Masaż brzucha",
    lead: "Delikatny masaż relaksacyjny okolicy brzucha.",
    description:
      "Łagodne, płynne ruchy wykonywane w spokojnym rytmie. Sprzyja wyciszeniu i odprężeniu.",
    goodFor: ["Brzuch", "Relaks", "Wellness"],
    duration: "",
    price: "",
  },
  {
    id: "masaz-klatki-piersiowej",
    title: "Masaż klatki piersiowej",
    lead: "Relaksacyjny masaż w zakresie masażu klasycznego.",
    description:
      "Masaż klatki piersiowej wykonywany w zakresie techniki masażu klasycznego. Można go połączyć z masażem pleców lub całego ciała.",
    goodFor: ["Klatka piersiowa", "Relaks", "Wellness"],
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
