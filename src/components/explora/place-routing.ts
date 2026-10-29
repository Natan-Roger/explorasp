export const placeSlugs = {
  MASP: "masp",
  "Parque Ibirapuera": "parque-ibirapuera",
  "Beco do Batman": "beco-do-batman",
  Pinacoteca: "pinacoteca",
  "Farol Santander": "farol-santander",
  Liberdade: "liberdade",
  "Centro Histórico": "centro-historico",
  "Theatro Municipal": "theatro-municipal",
} as const;

export function getPlaceSlug(name: keyof typeof placeSlugs) {
  return placeSlugs[name];
}