import { eventos } from "./data";
import { findPlace } from "./place-details";

export const eventSlugs = {
  "Virada Cultural": "virada-cultural",
  "Mostra de Arte Moderna": "mostra-de-arte-moderna",
  "Feira Gastronômica": "feira-gastronomica",
  "Concerto de Câmara": "concerto-de-camara",
  "Piquenique Cultural": "piquenique-cultural",
  "Roteiro de Arte Urbana": "roteiro-de-arte-urbana",
} as const;

const placeForEvent = {
  "Virada Cultural": "centro-historico",
  "Mostra de Arte Moderna": "masp",
  "Feira Gastronômica": "liberdade",
  "Concerto de Câmara": "theatro-municipal",
  "Piquenique Cultural": "parque-ibirapuera",
  "Roteiro de Arte Urbana": "beco-do-batman",
} as const;

export function getEventSlug(name: keyof typeof eventSlugs) {
  return eventSlugs[name];
}

export const eventDetails = eventos.map((evento) => ({
  ...evento,
  slug: getEventSlug(evento.nome),
  descricao: `${evento.nome}: ${evento.categoria.toLocaleLowerCase("pt-BR")} em ${evento.local}. ${evento.gratuito ? "Evento cadastrado como gratuito." : "Evento cadastrado como pago; valor não informado."}`,
  lugar: findPlace(placeForEvent[evento.nome]),
}));

export type EventDetails = (typeof eventDetails)[number];

export function findEvent(slug: string) {
  return eventDetails.find((evento) => evento.slug === slug);
}