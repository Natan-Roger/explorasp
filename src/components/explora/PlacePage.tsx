import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Clock3, Compass, Lightbulb, MapPin, Ticket, TrainFront } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { PlaceDetails } from "./place-types";

export function PlacePage({ lugar }: { lugar: PlaceDetails }) {
  const mapa = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${lugar.nome}, ${lugar.endereco}`)}`;

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-5 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 font-display text-lg font-extrabold">
            <Compass className="h-6 w-6" aria-hidden="true" />
            <span>Explora<span className="text-rose-light">SP</span></span>
          </Link>
          <Button asChild variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
            <Link to="/" hash="lugares"><ArrowLeft aria-hidden="true" />Voltar aos lugares</Link>
          </Button>
        </div>
      </header>

      <main>
        <section className="relative isolate flex min-h-96 items-end overflow-hidden sm:min-h-[30rem]">
          <img src={lugar.imagem} alt={lugar.nome} width={1024} height={768} className="absolute inset-0 -z-20 h-full w-full object-cover" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
          <div className="mx-auto w-full max-w-7xl px-5 pt-32 pb-12 lg:px-8">
            <p className="mb-3 font-heading text-sm font-semibold text-primary-foreground/90">São Paulo · {lugar.categoria}</p>
            <h1 className="max-w-4xl break-words text-4xl leading-tight tracking-normal text-primary-foreground sm:text-6xl">{lugar.nome}</h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/90 sm:text-lg">{lugar.descricao}</p>
          </div>
        </section>

        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-16 lg:px-8 lg:py-16">
          <div className="min-w-0 space-y-12">
            <section aria-labelledby="historia">
              <p className="mb-3 font-heading text-xs font-semibold tracking-wide text-accent uppercase">Conheça o lugar</p>
              <h2 id="historia" className="text-2xl tracking-normal text-foreground sm:text-3xl">História e descrição</h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
                {lugar.historia.map((paragrafo) => <p key={paragrafo}>{paragrafo}</p>)}
              </div>
            </section>
            <section aria-labelledby="atracoes">
              <h2 id="atracoes" className="text-2xl tracking-normal text-foreground sm:text-3xl">Principais atrações</h2>
              <ul className="mt-5 divide-y divide-border border-y border-border">
                {lugar.atracoes.map((atracao, i) => (
                  <li key={atracao} className="flex gap-4 py-4">
                    <span className="shrink-0 font-display text-lg font-extrabold text-accent">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-base leading-relaxed text-foreground">{atracao}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section aria-labelledby="dicas">
              <h2 id="dicas" className="flex items-center gap-3 text-2xl tracking-normal text-foreground sm:text-3xl"><Lightbulb className="h-6 w-6 shrink-0 text-accent" aria-hidden="true" />Dicas para visitantes</h2>
              <ul className="mt-5 list-disc space-y-3 pl-5 text-base leading-relaxed text-muted-foreground">
                {lugar.dicas.map((dica) => <li key={dica}>{dica}</li>)}
              </ul>
            </section>
          </div>

          <aside aria-label="Informações para a visita" className="min-w-0 self-start border-t border-border pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
            <h2 className="text-2xl tracking-normal text-foreground">Planeje sua visita</h2>
            <dl className="mt-6 space-y-7">
              <div>
                <dt className="flex items-center gap-2 font-heading text-base font-semibold"><MapPin className="h-5 w-5 text-accent" aria-hidden="true" />Endereço e localização</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{lugar.endereco}</dd>
                <dd className="mt-3 flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"><TrainFront className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />{lugar.metro}</dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 font-heading text-base font-semibold"><Clock3 className="h-5 w-5 text-accent" aria-hidden="true" />Horários de funcionamento</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{lugar.horarios}</dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 font-heading text-base font-semibold"><Ticket className="h-5 w-5 text-accent" aria-hidden="true" />Preços de entrada</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{lugar.precos}</dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild><a href={mapa} target="_blank" rel="noopener noreferrer">Abrir no mapa<ArrowUpRight aria-hidden="true" /></a></Button>
              <Button asChild variant="outline"><a href={lugar.fonte} target="_blank" rel="noopener noreferrer">Consultar fonte<ArrowUpRight aria-hidden="true" /></a></Button>
            </div>
            <p className="mt-5 text-xs leading-relaxed text-muted-foreground">Horários, ingressos e atrações podem mudar em feriados e eventos especiais. Confirme na fonte antes da visita.</p>
          </aside>
        </div>
      </main>

      <footer className="border-t border-border bg-muted">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-8 lg:px-8">
          <p className="font-display font-extrabold text-primary">ExploraSP</p>
          <Button asChild variant="outline"><Link to="/" hash="lugares"><ArrowLeft aria-hidden="true" />Voltar aos lugares</Link></Button>
        </div>
      </footer>
    </div>
  );
}