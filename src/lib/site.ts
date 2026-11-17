/**
 * Wszystkie dane gabinetu w jednym miejscu.
 * UZUPEŁNIJ pola oznaczone "TODO" przed publikacją strony.
 * Puste pola ("" lub []) po prostu nie wyświetlają się na stronie.
 */
export const site = {
  name: "Wiktor",
  brand: "Wiktor · Masaż",
  role: "Masaż klasyczny i relaksacyjny",
  legalName: "Wiktor Krywczuk",
  nip: "", // TODO: NIP, gdy zarejestrujesz firmę (przy działalności nierejestrowanej zostaw puste)
  url: "https://domenaplusy.pl",
  phone: "+48 000 000 000", // TODO: numer telefonu
  email: "wiktorkrywczuk@gmail.com",
  city: "Lublin",
  address: "", // TODO: np. "ul. Leśna 12/3, 00-001 Warszawa"
  mapsUrl: "", // TODO: link do Map Google
  hours: [] as { days: string; time: string }[], // TODO: np. { days: "Pon.–Pt.", time: "9:00–19:00" }
  bookingUrl: "", // TODO: opcjonalnie link do Booksy
  instagram: "", // TODO: opcjonalnie
  year: 2026,
};

/** Zastrzeżenie wyświetlane w ofercie, w stopce i w polityce prywatności. */
export const disclaimer =
  "Masaż nie jest zabiegiem leczniczym. Przy dolegliwościach skonsultuj się z lekarzem lub fizjoterapeutą.";

export type Service = {
  id: string;
  title: string;
  lead: string;
  description: string;
  goodFor: string[];
  duration: string; // TODO: np. "60 min"
  price: string; // TODO: np. "150 zł"
};

export const services: Service[] = [
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
    id: "masaz-rozluzniajacy",
    title: "Masaż rozluźniający napięte mięśnie",
    lead: "Mocniejszy masaż dla spiętych pleców, karku i barków.",
    description:
      "Dla osób, które czują napięcie po pracy przy biurku albo po treningu. Pracuję wolniej i głębiej, a siłę ucisku dobieram na bieżąco.",
    goodFor: ["Kark i barki", "Po treningu", "Praca przy biurku"],
    duration: "",
    price: "",
  },
  {
    id: "masaz-plecow",
    title: "Masaż pleców",
    lead: "Relaksacyjny masaż całego grzbietu.",
    description:
      "Rozluźniający masaż pleców, karku i barków. Dobry wybór, gdy masz mniej czasu, a chcesz chwili odprężenia.",
    goodFor: ["Grzbiet", "Relaks"],
    duration: "",
    price: "",
  },
  {
    id: "masaz-konczyn-gornych",
    title: "Masaż kończyn górnych",
    lead: "Odprężający masaż rąk i ramion.",
    description:
      "Spokojny masaż dłoni, przedramion i ramion. Przyjemna chwila dla rąk, które cały dzień pracują przy komputerze lub fizycznie.",
    goodFor: ["Ręce", "Relaks"],
    duration: "",
    price: "",
  },
  {
    id: "masaz-konczyn-dolnych",
    title: "Masaż kończyn dolnych",
    lead: "Relaksacyjny masaż nóg i stóp.",
    description:
      "Rozluźniający masaż stóp, łydek i ud. Daje uczucie lekkości po długim dniu na nogach.",
    goodFor: ["Nogi", "Relaks"],
    duration: "",
    price: "",
  },
  {
    id: "masaz-brzucha",
    title: "Masaż brzucha",
    lead: "Delikatny masaż relaksacyjny okolicy brzucha.",
    description:
      "Łagodne, płynne ruchy wykonywane w spokojnym rytmie. Sprzyja wyciszeniu i odprężeniu.",
    goodFor: ["Brzuch", "Relaks"],
    duration: "",
    price: "",
  },
  {
    id: "masaz-klatki-piersiowej",
    title: "Masaż klatki piersiowej",
    lead: "Relaksacyjny masaż w zakresie masażu klasycznego.",
    description:
      "Wykonywany techniką masażu klasycznego. Można go połączyć z masażem pleców lub całego ciała.",
    goodFor: ["Klatka piersiowa", "Relaks"],
    duration: "",
    price: "",
  },
];

/** Opinie klientów. TODO: wklej prawdziwe opinie (np. z Google). Pusta lista ukrywa sekcję. */
export const reviews: { author: string; text: string }[] = [];

export const faq = [
  {
    q: "Czy masaż to zabieg leczniczy?",
    a: "Nie. Masaże w mojej ofercie mają charakter relaksacyjny i wellness. Przy dolegliwościach skonsultuj się z lekarzem lub fizjoterapeutą.",
  },
  {
    q: "Nie wiem, który masaż wybrać. Co wtedy?",
    a: "Zadzwoń lub napisz, czego oczekujesz: odprężenia całego ciała czy rozluźnienia wybranej partii. Jeśli nie masz pewności, na początek dobrze sprawdza się klasyczny masaż relaksacyjny całego ciała.",
  },
  {
    q: "Jak przygotować się do wizyty?",
    a: "Nie musisz niczego przynosić. Dobrze jest nie przychodzić tuż po obfitym posiłku. Ręczniki i podkłady zapewniam na miejscu.",
  },
  {
    q: "Czy są przeciwwskazania do masażu?",
    a: "Tak. Przed masażem pytam o samopoczucie i stan zdrowia. Przy gorączce, infekcji, świeżym urazie, zmianach skórnych w miejscu masażu albo w ciąży masażu nie wykonam lub poproszę wcześniej o zgodę lekarza.",
  },
  {
    q: "Jak często można przychodzić na masaż?",
    a: "Tak często, jak Ci to służy. Wiele osób wraca co 2–4 tygodnie, żeby regularnie odpoczywać od codziennego napięcia.",
  },
];

export const telHref = `tel:${site.phone.replace(/[^+\d]/g, "")}`;
