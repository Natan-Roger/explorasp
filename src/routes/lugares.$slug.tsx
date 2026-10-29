import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PlacePage } from "@/components/explora/PlacePage";
import { findPlace } from "@/components/explora/place-details";

export const Route = createFileRoute("/lugares/$slug")({
  loader: ({ params }) => {
    const lugar = findPlace(params.slug);
    if (!lugar) throw notFound();
    return lugar;
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.nome} | ExploraSP` : "Lugar não encontrado | ExploraSP";
    const description = loaderData ? `${loaderData.descricao} História, atrações, localização e informações para visitar com o ExploraSP.` : "Explore os lugares de São Paulo com o ExploraSP.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        ...(loaderData ? [{ property: "og:url", content: `https://explorasp.lovable.app/lugares/${loaderData.slug}` }] : [{ name: "robots", content: "noindex" }]),
      ],
      links: loaderData ? [{ rel: "canonical", href: `https://explorasp.lovable.app/lugares/${loaderData.slug}` }] : [],
    };
  },
  component: LugarRoute,
  errorComponent: ({ reset }) => (
    <main className="mx-auto max-w-7xl px-5 py-20"><h1 className="text-3xl">Não foi possível carregar este lugar</h1><Button onClick={reset} className="mt-6">Tentar novamente</Button><Button asChild variant="outline" className="mt-6 ml-3"><Link to="/" hash="lugares">Voltar aos lugares</Link></Button></main>
  ),
  notFoundComponent: () => (
    <main className="mx-auto max-w-7xl px-5 py-20"><h1 className="text-3xl">Lugar não encontrado</h1><Button asChild className="mt-6"><Link to="/" hash="lugares">Voltar aos lugares</Link></Button></main>
  ),
});

function LugarRoute() {
  const lugar = Route.useLoaderData();
  return <PlacePage lugar={lugar} />;
}