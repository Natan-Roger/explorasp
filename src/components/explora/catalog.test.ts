import { describe, expect, test } from "bun:test";
import { eventos, lugares } from "./data";
import { eventDetails, findEvent } from "./event-details";
import { findPlace, placeDetails } from "./place-details";

describe("Catálogo solicitado", () => {
  test("os oito lugares cadastrados possuem páginas próprias sem novos lugares", () => {
    expect(placeDetails).toHaveLength(8);
    expect(placeDetails.map((lugar) => lugar.nome)).toEqual(lugares.map((lugar) => lugar.nome));
    expect(new Set(placeDetails.map((lugar) => lugar.slug)).size).toBe(8);
    for (const lugar of placeDetails) expect(findPlace(lugar.slug)?.nome).toBe(lugar.nome);
  });
  test("os seis eventos cadastrados possuem páginas próprias sem novos eventos", () => {
    expect(eventDetails).toHaveLength(6);
    expect(eventDetails.map((evento) => evento.nome)).toEqual(eventos.map((evento) => evento.nome));
    expect(new Set(eventDetails.map((evento) => evento.slug)).size).toBe(6);
    for (const evento of eventDetails) expect(findEvent(evento.slug)?.nome).toBe(evento.nome);
  });
  test("as páginas preservam a classificação gratuita ou paga dos seis eventos", () => {
    expect(eventDetails.filter((e) => e.gratuito).map((e) => e.nome)).toEqual(["Virada Cultural", "Feira Gastronômica", "Piquenique Cultural"]);
    expect(eventDetails.filter((e) => !e.gratuito).map((e) => e.nome)).toEqual(["Mostra de Arte Moderna", "Concerto de Câmara", "Roteiro de Arte Urbana"]);
  });
  test("endereços desconhecidos não recebem conteúdo de outro lugar ou evento", () => {
    expect(findPlace("desconhecido")).toBeUndefined();
    expect(findEvent("desconhecido")).toBeUndefined();
  });
});