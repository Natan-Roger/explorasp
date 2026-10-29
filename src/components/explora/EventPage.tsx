import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, CalendarDays, Clock3, Compass, Instagram, MapPin, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { EventDetails } from "./event-details";

export function EventPage({ evento }: { evento: EventDetails }) {
  const lugar = evento.lugar;
  const mapa = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${evento.local}, São Paulo`)}`;
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-5 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 font-display text-lg font-extrabold"><Compass className="h-6 w-6" aria-hidden="true" /><span>Explora<span className="text-rose-light">SP</span></span></Link>
          <Button asChild variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><Link to="/" hash="eventos"><ArrowLeft aria-hidden="true" />Voltar aos eventos</Link></Button>
        </div>
      </header>
      <main>
        <section className="relative isolate flex min-h-96 items-end overflow-hidden sm:min-h-[30rem]">
          <img src={evento.imagem} alt={`Local de referência: ${evento.local}`} width={1024} height={768} className="absolute inset-0 -z-20 h-full w-full object-cover" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
          <div className="mx-auto w-full max-w-7xl px-5 pt-32 pb-12 lg:px-8">
            <p className="mb-3 font-heading text-sm font-semibold text-primary-foreground/90">São Paulo · {evento.categoria} · {evento.gratuito ? "Gratuito" : "Pago"}</p>
            <h1 className="max-w-4xl break-words text-4xl leading-tight tracking-normal text-primary-foreground sm:text-6xl">{evento.nome}</h1>
            <p className="mt-4 flex items-center gap-2 text-base text-primary-foreground/90"><MapPin className="h-5 w-5 shrink-0" aria-hidden="true" />{evento.local}</p>
            <p className="mt-4 text-xs text-primary-foreground/75">Imagem do local de referência, não do evento.</p>
          </div>
        </section>
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-16 lg:px-8 lg:py-16">
          <div className="min-w-0 space-y-12">
            <section aria-labelledby="sobre-evento">
              <p className="mb-3 font-heading text-xs font-semibold tracking-wide text-accent uppercase">Eventos em destaque</p>
              <h2 id="sobre-evento" className="text-2xl tracking-normal sm:text-3xl">Sobre o evento</h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">{evento.descricao}</p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">A edição, a data e a programação detalhada ainda não foram informadas. O cadastro não confirma uma próxima realização.</p>
            </section>
            <section aria-labelledby="local-evento">
              <h2 id="local-evento" className="text-2xl tracking-normal sm:text-3xl">Localização</h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">Local cadastrado: {evento.local}. O ponto exato de encontro ou acesso ao evento ainda não foi informado.</p>
              {lugar ? <>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Referência do local: {lugar.endereco}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{lugar.metro}</p>
                <Button asChild variant="outline" className="mt-6"><Link to="/lugares/$slug" params={{ slug: lugar.slug }}>Conheça {lugar.nome}<ArrowRight aria-hidden="true" /></Link></Button>
              </> : null}
            </section>
            <section aria-labelledby="antes-evento">
              <h2 id="antes-evento" className="text-2xl tracking-normal sm:text-3xl">Antes de visitar</h2>
              <ul className="mt-5 list-disc space-y-3 pl-5 text-base leading-relaxed text-muted-foreground">
                <li>Confirme a data, os horários e o ponto de acesso com a organização antes de sair.</li>
                <li>{evento.gratuito ? "Verifique se o acesso gratuito exige retirada de ingresso ou inscrição." : "Consulte o valor e o canal oficial de ingressos antes de comprar."}</li>
                <li>Os horários e ingressos do local não substituem as informações específicas do evento.</li>
              </ul>
            </section>
          </div>
          <aside aria-label="Informações do evento" className="min-w-0 self-start border-t border-border pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
            <h2 className="text-2xl tracking-normal">Informações do evento</h2>
            <dl className="mt-6 space-y-7">
              <div><dt className="flex items-center gap-2 font-heading font-semibold"><CalendarDays className="h-5 w-5 text-accent" aria-hidden="true" />Data e edição</dt><dd className="mt-2 text-sm leading-relaxed text-muted-foreground">Não informadas.</dd></div>
              <div><dt className="flex items-center gap-2 font-heading font-semibold"><Clock3 className="h-5 w-5 text-accent" aria-hidden="true" />Horários</dt><dd className="mt-2 text-sm leading-relaxed text-muted-foreground">Não informados para este evento.</dd></div>
              <div><dt className="flex items-center gap-2 font-heading font-semibold"><Ticket className="h-5 w-5 text-accent" aria-hidden="true" />Entrada</dt><dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{evento.gratuito ? "Gratuito, conforme o cadastro. Regras de acesso não informadas." : "Pago, conforme o cadastro. Preço e canal de venda não informados."}</dd></div>
              <div><dt className="flex items-center gap-2 font-heading font-semibold"><MapPin className="h-5 w-5 text-accent" aria-hidden="true" />Local</dt><dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{evento.local}</dd></div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild><a href={mapa} target="_blank" rel="noopener noreferrer">Ver região no mapa<ArrowUpRight aria-hidden="true" /></a></Button>
              <Button asChild variant="outline"><a href="https://www.instagram.com/explorassp" target="_blank" rel="noopener noreferrer"><Instagram aria-hidden="true" />ExploraSP</a></Button>
            </div>
          </aside>
        </div>
      </main>
      <footer className="border-t border-border bg-muted"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-8 lg:px-8"><p className="font-display font-extrabold text-primary">ExploraSP</p><Button asChild variant="outline"><Link to="/" hash="eventos"><ArrowLeft aria-hidden="true" />Voltar aos eventos</Link></Button></div></footer>
    </div>
  );
}