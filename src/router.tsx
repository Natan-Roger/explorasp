import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: ({ reset }) => (
      <main className="mx-auto max-w-7xl px-5 py-20">
        <h1 className="text-3xl">Não foi possível carregar a página</h1>
        <a href="/" className="mt-6 inline-block text-accent">Voltar ao ExploraSP</a>
      </main>
    ),
  });

  return router;
};
