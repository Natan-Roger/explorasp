import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { EventPage } from "@/components/explora/EventPage";
import { findEvent } from "@/components/explora/event-details";

export const Route = createFileRoute("/eventos/$slug")({
  loader: ({ params }) => {
    const evento = findEvent(params.slug);
    if (!evento) throw notFound();
    return evento;
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.nome} | Eventos ExploraSP` : "Evento não encontrado | ExploraSP";
    const description = loaderData?.descricao ?? "Conheça os eventos cadastrados no ExploraSP.";
    return {
      meta: [
        { title }, { name: "description", content: description },
        { property: "og:title", content: title }, { property: "og:description", content: description },
        { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
        ...(loaderData ? [{ property: "og:url", content: `https://explorasp.lovable.app/eventos/${loaderData.slug}` }] : [{ name: "robots", content: "noindex" }]),
      ],
      links: loaderData ? [{ rel: "canonical", href: `https://explorasp.lovable.app/eventos/${loaderData.slug}` }] : [],
    };
  },
  component: EventoRoute,
  errorComponent: ({ reset }) => <main className="mx-auto max-w-7xl px-5 py-20"><h1 className="text-3xl">Não foi possível carregar este evento</h1><Button onClick={reset} className="mt-6">Tentar novamente</Button><Button asChild variant="outline" className="mt-6 ml-3"><Link to="/" hash="eventos">Voltar aos eventos</Link></Button></main>,
  notFoundComponent: () => <main className="mx-auto max-w-7xl px-5 py-20"><h1 className="text-3xl">Evento não encontrado</h1><Button asChild className="mt-6"><Link to="/" hash="eventos">Voltar aos eventos</Link></Button></main>,
});

function EventoRoute() {
  const evento = Route.useLoaderData();
  return <EventPage evento={evento} />;
}