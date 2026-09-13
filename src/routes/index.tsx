import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import {
  Building2,
  Camera,
  Compass,
  Footprints,
  Instagram,
  Landmark,
  MapPin,
  Music,
  Palette,
  Sparkles,
  Theater,
  Ticket,
  Trees,
  UtensilsCrossed,
  CalendarDays,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

import heroImg from "@/assets/hero-sp.jpg";
import { categorias, eventos, lugares } from "@/components/explora/data";
import { Reveal } from "@/components/explora/Reveal";
import { CountUp } from "@/components/explora/CountUp";

const INSTAGRAM = "https://www.instagram.com/explorassp";

const iconMap = {
  Ticket,
  Sparkles,
  Landmark,
  Theater,
  UtensilsCrossed,
  Trees,
  Building2,
  Footprints,
} as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ExploraSP | Cultura, Eventos e Lugares para Descobrir em São Paulo" },
      {
        name: "description",
        content:
          "Descubra eventos gratuitos e pagos, lugares culturais, turismo urbano, gastronomia e experiências únicas na cidade de São Paulo com o ExploraSP.",
      },
      {
        property: "og:title",
        content: "ExploraSP | Cultura, Eventos e Lugares para Descobrir em São Paulo",
      },
      {
        property: "og:description",
        content:
          "Eventos, museus, parques, gastronomia e experiências urbanas em São Paulo, reunidos em um só lugar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Lugares", href: "#lugares" },
  { label: "Eventos", href: "#eventos" },
  { label: "Cultura", href: "#cultura" },
  { label: "Sobre", href: "#sobre" },
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-primary-foreground/10 bg-primary/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#inicio" className="flex items-center gap-2 font-display text-lg font-extrabold tracking-tight text-primary-foreground">
          <Compass className="h-6 w-6" aria-hidden="true" />
          Explora<span className="text-rose-light">SP</span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-primary-foreground/85 transition-colors hover:text-primary-foreground"
            >
              {item.label}
            </a>
          ))}
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-rose px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.04] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-light"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
            Siga no Instagram
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="rounded-full p-2 text-primary-foreground lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <nav aria-label="Menu móvel" className="border-t border-primary-foreground/10 bg-primary/90 px-5 py-4 lg:hidden">
          <ul className="flex flex-col gap-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-1 text-base font-medium text-primary-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-rose px-5 py-3 text-sm font-semibold text-primary-foreground"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
                Siga no Instagram
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
      <motion.img
        src={heroImg}
        alt="Vista aérea da Avenida Paulista e do MASP ao entardecer em São Paulo"
        width={1920}
        height={1088}
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/92 via-primary/70 to-accent/60" />

      <div className="mx-auto w-full max-w-7xl px-5 pt-32 pb-20 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 font-heading text-xs font-semibold tracking-wide text-primary-foreground uppercase backdrop-blur"
        >
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          Cultura e turismo em São Paulo
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2 }}
          className="mt-6 max-w-4xl text-4xl leading-[1.05] text-primary-foreground sm:text-6xl lg:text-7xl"
        >
          Descubra São Paulo com o ExploraSP
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.32 }}
          className="mt-6 max-w-2xl text-base text-primary-foreground/85 sm:text-lg"
        >
          Uma São Paulo que vai muito além dos roteiros tradicionais: eventos, lugares culturais,
          experiências urbanas e os melhores pontos da cidade em um só lugar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.44 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row"
        >
          <a
            href="#categorias"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-rose px-7 py-3.5 font-heading text-sm font-semibold text-primary-foreground shadow-card transition-transform hover:scale-[1.04]"
          >
            Explorar Agora
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/40 px-7 py-3.5 font-heading text-sm font-semibold text-primary-foreground backdrop-blur transition-colors hover:bg-primary-foreground/15"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
            Seguir no Instagram
          </a>
        </motion.div>

        <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-primary-foreground/20 pt-8">
          {[
            { label: "Eventos", to: 320 },
            { label: "Lugares", to: 180 },
            { label: "Experiências", to: 95 },
          ].map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-display text-3xl font-extrabold text-primary-foreground sm:text-4xl">
                  <CountUp to={stat.to} suffix="+" />
                </span>
                <span className="mt-1 block font-heading text-sm text-primary-foreground/75">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Sobre() {
  const pilares = [
    { icone: Theater, label: "Cultura" },
    { icone: Compass, label: "Turismo" },
    { icone: UtensilsCrossed, label: "Gastronomia" },
    { icone: Palette, label: "Arte" },
    { icone: CalendarDays, label: "Eventos" },
  ];

  return (
    <section id="sobre" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <h2 className="max-w-3xl text-3xl text-foreground sm:text-5xl">
            O que é o <span className="text-gradient-wine">ExploraSP</span>?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            O ExploraSP nasceu para conectar pessoas à riqueza cultural da cidade de São Paulo,
            mostrando eventos, espaços e experiências que muitas vezes ficam fora dos roteiros mais
            conhecidos.
          </p>
        </Reveal>

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {pilares.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.08}>
              <li className="flex h-full flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center shadow-soft transition-transform hover:-translate-y-1">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-wine text-primary-foreground">
                  <p.icone className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-heading text-sm font-semibold text-foreground">{p.label}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Categorias() {
  return (
    <section id="cultura" className="bg-muted py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8" id="categorias">
        <Reveal>
          <h2 className="text-3xl text-foreground sm:text-5xl">Explore por categoria</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Do gratuito ao premiado, do parque ao museu: escolha o tipo de experiência e descubra o
            que São Paulo tem para hoje.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categorias.map((cat, i) => {
            const Icone = iconMap[cat.icone];
            return (
              <Reveal key={cat.titulo} delay={(i % 4) * 0.08}>
                <article className="group h-full overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={cat.imagem}
                      alt={cat.titulo}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <span className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-wine text-primary-foreground shadow-card">
                      <Icone className="h-4.5 w-4.5" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="flex flex-col gap-3 p-6">
                    <h3 className="text-lg text-foreground">{cat.titulo}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{cat.descricao}</p>
                    <a
                      href="#lugares"
                      className="mt-1 inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-accent transition-all hover:gap-3"
                    >
                      Explorar
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Eventos() {
  const filtros = ["Todos", "Música", "Exposição", "Gastronomia", "Ar livre"] as const;
  const [filtro, setFiltro] = useState<(typeof filtros)[number]>("Todos");
  const lista = eventos.filter((e) => filtro === "Todos" || e.categoria === filtro);

  return (
    <section id="eventos" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <h2 className="text-3xl text-foreground sm:text-5xl">Eventos em destaque</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Programação selecionada da semana, com opções gratuitas e pagas em toda a cidade.
          </p>
        </Reveal>

        <div className="mt-9 flex flex-wrap gap-2.5" role="group" aria-label="Filtrar eventos por categoria">
          {filtros.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFiltro(f)}
              aria-pressed={filtro === f}
              className={`rounded-full border px-5 py-2 font-heading text-sm font-semibold transition-all ${
                filtro === f
                  ? "border-transparent bg-gradient-wine text-primary-foreground shadow-soft"
                  : "border-border bg-card text-foreground hover:border-accent hover:text-accent"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {lista.map((ev, i) => (
            <motion.article
              key={ev.nome}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-shadow hover:shadow-card"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={ev.imagem}
                  alt={ev.nome}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span
                  className={`absolute top-3 right-3 rounded-full px-3 py-1 font-heading text-xs font-semibold ${
                    ev.gratuito
                      ? "bg-background text-accent"
                      : "bg-gradient-wine text-primary-foreground"
                  }`}
                >
                  {ev.gratuito ? "Gratuito" : "Pago"}
                </span>
              </div>
              <div className="space-y-2 p-6">
                <span className="inline-flex items-center gap-1.5 font-heading text-xs font-semibold tracking-wide text-accent uppercase">
                  <Music className="h-3.5 w-3.5" aria-hidden="true" />
                  {ev.categoria}
                </span>
                <h3 className="text-lg text-foreground">{ev.nome}</h3>
                <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {ev.local}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Lugares() {
  return (
    <section id="lugares" className="bg-muted py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <h2 className="text-3xl text-foreground sm:text-5xl">Lugares imperdíveis</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Os cartões-postais e os cantos escondidos que definem a identidade paulistana.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {lugares.map((lugar, i) => (
            <Reveal key={lugar.nome} delay={(i % 4) * 0.08}>
              <article className="group relative h-80 overflow-hidden rounded-3xl shadow-card">
                <img
                  src={lugar.imagem}
                  alt={lugar.nome}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/45 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-xl text-primary-foreground">{lugar.nome}</h3>
                  <p className="mt-1 text-sm text-primary-foreground/80">{lugar.descricao}</p>
                  <a
                    href={INSTAGRAM}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-3 inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-primary-foreground transition-all hover:gap-3"
                  >
                    Ver mais
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Beneficios() {
  const blocos = [
    {
      icone: Theater,
      titulo: "Diversidade Cultural",
      texto: "Mais de 70 nacionalidades convivendo em festivais, feiras e bairros temáticos.",
    },
    {
      icone: Landmark,
      titulo: "Arte e História",
      texto: "Museus de referência mundial, acervos públicos e arquitetura de várias épocas.",
    },
    {
      icone: UtensilsCrossed,
      titulo: "Gastronomia Mundial",
      texto: "Da pastelaria de feira à alta cozinha, a cidade come o mundo inteiro.",
    },
    {
      icone: CalendarDays,
      titulo: "Eventos o Ano Inteiro",
      texto: "Agenda cheia em todos os meses, com muita opção gratuita para aproveitar.",
    },
  ];

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <h2 className="text-3xl text-foreground sm:text-5xl">Por que explorar São Paulo?</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {blocos.map((b, i) => (
            <Reveal key={b.titulo} delay={i * 0.1}>
              <div className="h-full rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-rose text-primary-foreground">
                  <b.icone className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg text-foreground">{b.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function InstagramSection() {
  return (
    <section className="bg-muted py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-wine px-4 py-1.5 font-heading text-xs font-semibold tracking-wide text-primary-foreground uppercase">
            <Instagram className="h-3.5 w-3.5" aria-hidden="true" />
            @explorassp
          </span>
          <h2 className="mt-6 text-3xl text-foreground sm:text-5xl">
            Novas descobertas todos os dias
          </h2>
          <p className="mt-5 max-w-xl text-muted-foreground">
            Acompanhe diariamente novas descobertas pela cidade de São Paulo: eventos, roteiros,
            dicas de bairro e lugares que você ainda não conhece.
          </p>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-rose px-7 py-3.5 font-heading text-sm font-semibold text-primary-foreground shadow-card transition-transform hover:scale-[1.04]"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
            Seguir @explorassp
          </a>
        </Reveal>

        <Reveal delay={0.15} className="flex justify-center">
          <div className="relative w-[280px] rounded-[2.5rem] border-8 border-primary bg-primary p-1 shadow-card">
            <div className="absolute top-3 left-1/2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-primary" />
            <div className="overflow-hidden rounded-[2rem] bg-card">
              <div className="flex items-center gap-3 border-b border-border p-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-wine font-heading text-xs font-bold text-primary-foreground">
                  SP
                </span>
                <div>
                  <p className="font-heading text-sm font-semibold text-foreground">explorassp</p>
                  <p className="text-xs text-muted-foreground">São Paulo · Brasil</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-0.5">
                {lugares.slice(0, 9).map((l) => (
                  <img
                    key={l.nome}
                    src={l.imagem}
                    alt={l.nome}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="aspect-square w-full object-cover"
                  />
                ))}
              </div>
              <div className="flex items-center justify-center gap-2 p-4 text-xs text-muted-foreground">
                <Camera className="h-4 w-4" aria-hidden="true" />
                Conteúdo novo toda semana
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CtaFinal() {
  return (
    <section className="bg-gradient-wine py-24">
      <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
        <Reveal>
          <h2 className="text-3xl text-primary-foreground sm:text-5xl">
            A próxima grande experiência em São Paulo está esperando por você.
          </h2>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#lugares"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-7 py-3.5 font-heading text-sm font-semibold text-accent shadow-card transition-transform hover:scale-[1.04]"
            >
              Explorar Lugares
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/50 px-7 py-3.5 font-heading text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/15"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
              Ver Instagram
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-primary py-14 text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:grid-cols-3 lg:px-8">
        <div>
          <p className="flex items-center gap-2 font-display text-xl font-extrabold">
            <Compass className="h-6 w-6" aria-hidden="true" />
            Explora<span className="text-rose-light">SP</span>
          </p>
          <p className="mt-4 max-w-sm text-sm text-primary-foreground/75">
            Projeto dedicado à valorização da cultura, do turismo e das experiências urbanas da
            cidade de São Paulo.
          </p>
        </div>

        <nav aria-label="Links rápidos">
          <h3 className="font-heading text-sm font-semibold tracking-wide uppercase">
            Links rápidos
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-primary-foreground">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-heading text-sm font-semibold tracking-wide uppercase">Instagram</h3>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary-foreground/35 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-primary-foreground/15"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
            @explorassp
          </a>
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-7xl px-5 text-xs text-primary-foreground/60 lg:px-8">
        © {new Date().getFullYear()} ExploraSP. Todos os direitos reservados.
      </p>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Categorias />
        <Eventos />
        <Lugares />
        <Beneficios />
        <InstagramSection />
        <CtaFinal />
      </main>
      <Footer />
    </div>
  );
}
