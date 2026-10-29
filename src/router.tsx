import { QueryClient } from "@tanstack/react-query";
import { createRouter, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: () => (
      <main className="mx-auto max-w-7xl px-5 py-20">
        <h1 className="text-3xl">Não foi possível carregar a página</h1>
        <Button asChild variant="outline" className="mt-6"><Link to="/">Voltar ao ExploraSP</Link></Button>
      </main>
    ),
  });

  return router;
};
