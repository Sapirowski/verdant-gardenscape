
import { Shovel, TreeDeciduous, Flower2, Shrub, Droplet } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  slug: string;
  icon: any;
  fullDescription: string[];
  imageSrc: string;
  benefits: string[];
  process: {
    title: string;
    description: string;
  }[];
}

export const serviceItems: ServiceItem[] = [
  {
    title: "Kompleksowa aranżacja ogrodów",
    description: "Projektujemy i realizujemy kompleksowe projekty ogrodów, terenów zielonych i przestrzeni publicznych.",
    slug: "kompleksowa-aranzacja-ogrodow",
    icon: TreeDeciduous,
    fullDescription: [
      "Nasza firma oferuje kompleksową aranżację ogrodów, która łączy w sobie projektowanie, wykonawstwo i dbałość o każdy detal. Tworzymy przestrzenie ogrodowe harmonijnie współgrające z architekturą budynku i otaczającym krajobrazem.",
      "Pracujemy zarówno przy nowych założeniach ogrodowych, jak i przy rewitalizacji istniejących przestrzeni. Nasze projekty zawsze uwzględniają indywidualne preferencje klienta, funkcjonalność przestrzeni oraz lokalne warunki glebowe i klimatyczne."
    ],
    imageSrc: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    benefits: [
      "Indywidualne podejście do każdego projektu",
      "Harmonijne połączenie elementów roślinnych i architektonicznych",
      "Wykorzystanie roślin dostosowanych do lokalnego klimatu",
      "Realizacja projektów energooszczędnych i przyjaznych środowisku",
      "Profesjonalne doradztwo w doborze materiałów i roślin"
    ],
    process: [
      {
        title: "Konsultacja i analiza potrzeb",
        description: "Poznajemy Twoje oczekiwania, analizujemy teren i warunki glebowe."
      },
      {
        title: "Projekt koncepcyjny",
        description: "Przygotowujemy wstępny projekt uwzględniający układ przestrzenny i dobór roślin."
      },
      {
        title: "Projekt wykonawczy",
        description: "Opracowujemy szczegółowy plan realizacji z uwzględnieniem wszystkich elementów ogrodu."
      },
      {
        title: "Realizacja projektu",
        description: "Profesjonalnie wykonujemy wszystkie prace zgodnie z projektem."
      },
      {
        title: "Pielęgnacja i wsparcie",
        description: "Oferujemy usługi pielęgnacyjne oraz wsparcie po zakończeniu realizacji."
      }
    ]
  },
  {
    title: "Pielęgnacja trawników i żywopłotów",
    description: "Regularne strzyżenie, nawożenie, wertykulacja, aeracja i odchwaszczanie trawników oraz żywopłotów.",
    slug: "pielegnacja-trawnikow-i-zywoplowow",
    icon: Shrub,
    fullDescription: [
      "Profesjonalna pielęgnacja trawników i żywopłotów to klucz do utrzymania ich w doskonałej kondycji przez cały rok. Nasza firma oferuje kompleksowe usługi pielęgnacyjne, które zapewniają zdrowy rozwój i estetyczny wygląd Twojej zieleni.",
      "W ramach pielęgnacji trawników wykonujemy regularne koszenie, aerację, wertykulację, nawożenie oraz zwalczanie chwastów i mchu. Dla żywopłotów oferujemy precyzyjne strzyżenie, formowanie, nawożenie oraz zabiegi ochronne przeciwko chorobom i szkodnikom."
    ],
    imageSrc: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    benefits: [
      "Regularna pielęgnacja dostosowana do pór roku",
      "Zdrowy i gęsty trawnik odporny na choroby",
      "Estetycznie uformowane żywopłoty",
      "Dobór odpowiednich środków nawozowych i ochronnych",
      "Profesjonalny sprzęt gwarantujący wysoką jakość usług"
    ],
    process: [
      {
        title: "Diagnostyka stanu obecnego",
        description: "Oceniamy stan trawnika i żywopłotów, identyfikujemy problemy."
      },
      {
        title: "Plan pielęgnacji",
        description: "Tworzymy harmonogram prac pielęgnacyjnych dostosowany do potrzeb."
      },
      {
        title: "Regularne zabiegi",
        description: "Wykonujemy systematyczne prace zgodnie z ustalonym planem."
      },
      {
        title: "Monitoring i korekty",
        description: "Na bieżąco monitorujemy efekty i w razie potrzeby modyfikujemy plan."
      },
      {
        title: "Raportowanie",
        description: "Informujemy o wykonanych pracach i stanie Twojej zieleni."
      }
    ]
  },
  {
    title: "Usługi minikoparką i frezem",
    description: "Profesjonalne prace ziemne, wykopy, wyrównanie terenu, usuwanie pni za pomocą specjalistycznego sprzętu.",
    slug: "uslugi-minikoparka-i-frezem",
    icon: Shovel,
    fullDescription: [
      "Oferujemy profesjonalne usługi z wykorzystaniem minikoparki i frezu do pni, które są niezbędne przy wielu pracach ogrodniczych i ziemnych. Nasz specjalistyczny sprzęt pozwala na efektywne i precyzyjne wykonanie nawet najtrudniejszych zadań.",
      "Minikoparka sprawdza się doskonale przy wykopach pod oczka wodne, fundamenty altan czy systemów nawadniających. Frez do pni umożliwia bezpieczne i szybkie usunięcie pozostałości po ściętych drzewach, bez konieczności pracochłonnego wykopywania korzeni."
    ],
    imageSrc: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    benefits: [
      "Szybkie i precyzyjne wykonanie prac ziemnych",
      "Dostęp do miejsc trudno dostępnych dzięki kompaktowym wymiarom sprzętu",
      "Minimalna ingerencja w otaczający teren",
      "Efektywne usuwanie pni bez uszkadzania otoczenia",
      "Doświadczeni operatorzy gwarantujący bezpieczeństwo"
    ],
    process: [
      {
        title: "Wizja lokalna i wycena",
        description: "Dokonujemy oględzin terenu i przedstawiamy dokładną wycenę."
      },
      {
        title: "Przygotowanie terenu",
        description: "Zabezpieczamy obszar prac i otaczającą roślinność."
      },
      {
        title: "Realizacja prac ziemnych",
        description: "Wykonujemy prace zgodnie z ustaleniami, z dbałością o detale."
      },
      {
        title: "Frezowanie pni",
        description: "Usuwamy pnie drzew do odpowiedniej głębokości poniżej poziomu gruntu."
      },
      {
        title: "Uporządkowanie terenu",
        description: "Pozostawiamy miejsce prac w czystości, gotowe do dalszych działań."
      }
    ]
  },
  {
    title: "Opieka nad ogrodami cmentarnymi",
    description: "Kompleksowa pielęgnacja, porządkowanie, sadzenie roślin i dbanie o ogrody cmentarne przez cały rok.",
    slug: "opieka-nad-ogrodami-cmentarnymi",
    icon: Droplet,
    fullDescription: [
      "Świadczymy specjalistyczne usługi opieki nad ogrodami cmentarnymi, zapewniając ich odpowiednią pielęgnację przez cały rok. Nasze usługi to idealne rozwiązanie dla osób, które z różnych powodów nie mogą regularnie odwiedzać miejsc pochówku swoich bliskich.",
      "W ramach naszych usług oferujemy systematyczne porządkowanie nagrobków, pielęgnację nasadzeń, wymianę kwiatów stosownie do pory roku, a także mycie pomników i uzupełnianie zniczy. Wszystkie prace wykonujemy z należytym szacunkiem dla miejsca i pamięci o zmarłych."
    ],
    imageSrc: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    benefits: [
      "Regularna opieka niezależnie od pory roku",
      "Indywidualnie dobrane kompozycje roślinne",
      "Dokumentacja fotograficzna wykonanych prac",
      "Możliwość zamówienia usługi jednorazowej lub abonamentowej",
      "Dyskrecja i poszanowanie miejsca pochówku"
    ],
    process: [
      {
        title: "Ustalenie zakresu usług",
        description: "Określamy Twoje oczekiwania i częstotliwość prac."
      },
      {
        title: "Pierwszy porządek",
        description: "Wykonujemy gruntowne uporządkowanie i przygotowanie nagrobka."
      },
      {
        title: "Regularne wizyty",
        description: "Systematycznie odwiedzamy miejsce i wykonujemy prace zgodnie z planem."
      },
      {
        title: "Dokumentacja",
        description: "Przesyłamy zdjęcia po każdej wizycie, potwierdzające wykonanie usługi."
      },
      {
        title: "Raporty sezonowe",
        description: "Informujemy o stanie nagrobka i proponujemy ewentualne dodatkowe prace."
      }
    ]
  },
  {
    title: "Innowacyjne rozwiązania dla parków",
    description: "Wdrażanie nowoczesnych rozwiązań dla przestrzeni publicznych, parków i skwerów miejskich.",
    slug: "innowacyjne-rozwiazania-dla-parkow",
    icon: Flower2,
    fullDescription: [
      "Specjalizujemy się w projektowaniu i wdrażaniu innowacyjnych rozwiązań dla parków i przestrzeni publicznych, łącząc funkcjonalność, estetykę i zrównoważony rozwój. Nasze projekty uwzględniają najnowsze trendy w architekturze krajobrazu i potrzeby współczesnych użytkowników terenów zielonych.",
      "Tworzymy przestrzenie, które służą lokalnym społecznościom, wspierają bioróżnorodność i są odporne na zmiany klimatyczne. Projektujemy systemy małej retencji, ogrody deszczowe, łąki kwietne oraz strefy rekreacji i edukacji ekologicznej."
    ],
    imageSrc: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    benefits: [
      "Rozwiązania przyjazne środowisku i wspierające bioróżnorodność",
      "Tworzenie przestrzeni łączących funkcje rekreacyjne i edukacyjne",
      "Implementacja systemów małej retencji i gospodarki wodnej",
      "Wykorzystanie roślin rodzimych i odpornych na zmiany klimatu",
      "Projekty uwzględniające potrzeby różnych grup użytkowników"
    ],
    process: [
      {
        title: "Analiza potrzeb i możliwości",
        description: "Badamy specyfikę terenu i potrzeby społeczności lokalnej."
      },
      {
        title: "Koncepcja funkcjonalno-przestrzenna",
        description: "Tworzymy wizję przestrzeni z uwzględnieniem aspektów ekologicznych."
      },
      {
        title: "Projekt szczegółowy",
        description: "Opracowujemy dokumentację techniczną i plan nasadzeń."
      },
      {
        title: "Realizacja",
        description: "Nadzorujemy lub wykonujemy prace związane z wdrożeniem projektu."
      },
      {
        title: "Ewaluacja i monitoring",
        description: "Oceniamy efektywność rozwiązań i wprowadzamy ewentualne korekty."
      }
    ]
  }
];
