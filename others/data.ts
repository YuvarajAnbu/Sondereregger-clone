export interface Data {
  id: number;
  products: string[];
  name: string;
  ref: string;
  img: number;
  filters: string[];
}

const data: Data[] = [
  {
    id: 0,
    products: ["corporate", "packaging"],
    name: "B",
    ref: "B1353",
    img: 1,
    filters: ["pop", "embossing"],
  },
  {
    id: 1,
    products: ["corporate"],
    name: "GF Smith",
    ref: "A7441",
    img: 2,
    filters: ["ambitious", "embossing"],
  },
  {
    id: 2,
    products: ["image", "packaging", "point of sale"],
    name: "Aramedes",
    ref: "B2067-B",
    img: 3,
    filters: ["contemporary", "laser cut"],
  },
  {
    id: 3,
    products: ["corporate", "packaging"],
    name: "Thomas De Monaco",
    ref: "B1170",
    img: 4,
    filters: ["contemporary", "embossing"],
  },
  {
    id: 4,
    products: ["corporate"],
    name: "Microembossing",
    ref: "A9529",
    img: 5,
    filters: ["pop", "embossing"],
  },
  {
    id: 5,
    products: ["corporate"],
    name: "Bauhinia Monandra",
    ref: "A6947",
    img: 6,
    filters: ["classic", "laser cut"],
  },
  {
    id: 6,
    products: ["image", "point of sale"],
    name: "Multilayer",
    ref: "T2428",
    img: 7,
    filters: ["pop", "embossing"],
  },
  {
    id: 7,
    products: ["image"],
    name: "Collection Cahiers d'Artistes",
    ref: "A9275",
    img: 8,
    filters: ["pop", "laser-gravur"],
  },
  {
    id: 8,
    products: ["image", "packaging", "point of sale"],
    name: "Poly",
    ref: "B1935-5",
    img: 9,
    filters: ["recycled", "hot foil stamping"],
  },
  {
    id: 9,
    products: ["image", "packaging"],
    name: "Mondi",
    ref: "A9871",
    img: 10,
    filters: ["classic", "laser cut"],
  },
  {
    id: 10,
    products: ["image", "packaging"],
    name: "Soeder",
    ref: "T4302",
    img: 11,
    filters: ["minimalist", "laser cut"],
  },
  {
    id: 11,
    products: ["corporate", "packaging"],
    name: "_",
    ref: "B1102",
    img: 12,
    filters: ["ambitious", "embossing"],
  },
  {
    id: 12,
    products: ["image", "packaging"],
    name: "pOLY",
    ref: "B1935",
    img: 13,
    filters: ["minimalist", "laser cut"],
  },
  {
    id: 13,
    products: ["image", "wraping", "packaging"],
    name: "Sonderegger",
    ref: "S1187",
    img: 14,
    filters: ["ambitious", "laser-gravur"],
  },
  {
    id: 14,
    products: ["corporate", "wraping"],
    name: "Omega",
    ref: "B2227",
    img: 15,
    filters: ["classic", "laser cut"],
  },
  {
    id: 15,
    products: ["wraping"],
    name: "Finishing",
    ref: "A9416",
    img: 16,
    filters: ["ambitious", "embossing"],
  },
];

export default data;
