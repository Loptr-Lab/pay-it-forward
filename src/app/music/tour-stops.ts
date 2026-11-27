export type TourStop = {
  region: "EUROPE" | "NORTH AMERICA";
  city: string;
  country: string;
  date: string;
  venue: string;
  area: string;
};

export const tourStops: TourStop[] = [
  { region: "EUROPE", city: "Glasgow", country: "UK", date: "NOV 23, 2026", venue: "The Garage", area: "Sauchiehall Street" },
  { region: "EUROPE", city: "Manchester", country: "UK", date: "NOV 24, 2026", venue: "Academy 2", area: "Oxford Road" },
  { region: "EUROPE", city: "London", country: "UK", date: "NOV 26, 2026", venue: "O2 Shepherd's Bush Empire", area: "Shepherd's Bush Green" },
  { region: "EUROPE", city: "Paris", country: "France", date: "NOV 29, 2026", venue: "Le Trianon", area: "Pigalle / Montmartre" },
  { region: "EUROPE", city: "Brussels", country: "Belgium", date: "NOV 30, 2026", venue: "Ancienne Belgique", area: "Central Brussels" },
  { region: "EUROPE", city: "Cologne", country: "Germany", date: "DEC 2, 2026", venue: "Carlswerk Victoria", area: "Mülheim" },
  { region: "EUROPE", city: "Prague", country: "Czechia", date: "DEC 4, 2026", venue: "ROXY Prague", area: "Old Town" },
  { region: "EUROPE", city: "Vienna", country: "Austria", date: "DEC 5, 2026", venue: "Flex", area: "Donaukanal" },
  { region: "EUROPE", city: "Berlin", country: "Germany", date: "DEC 7, 2026", venue: "ASTRA Kulturhaus", area: "Friedrichshain" },
  { region: "EUROPE", city: "Hamburg", country: "Germany", date: "DEC 8, 2026", venue: "Fabrik", area: "Altona" },
  { region: "EUROPE", city: "Utrecht", country: "Netherlands", date: "DEC 9, 2026", venue: "TivoliVredenburg", area: "Utrecht Centraal / city centre" },
  { region: "EUROPE", city: "Hamburg", country: "Germany", date: "DEC 10, 2026", venue: "Fabrik", area: "Altona" },
  { region: "NORTH AMERICA", city: "Los Angeles", country: "USA", date: "JAN 29, 2027", venue: "Moroccan Lounge", area: "Arts District" },
  { region: "NORTH AMERICA", city: "Denver", country: "USA", date: "FEB 13, 2027", venue: "Globe Hall", area: "Globeville" },
];

