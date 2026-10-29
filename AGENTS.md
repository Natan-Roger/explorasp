<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Tourist place pages
- Use `/lugares/$slug` and `/eventos/$slug` routes with separate typed content registries and explicit stable slugs; this avoids duplicated pages while keeping the existing card data unchanged.
- Event detail pages derive identity, category, location and admission type from the existing event records; do not infer dates, editions, programs or ticket prices from the venue information.
- Local static place data is isomorphic and requires no backend; validate unknown slugs with `notFound()` and keep visitor information linked to its official sources.
