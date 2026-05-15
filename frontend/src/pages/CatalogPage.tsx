import { Link } from 'react-router-dom'

export function CatalogPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
          Catalog
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          All products (hardcoded)
        </h1>
        <p className="mt-4 text-base leading-relaxed text-zinc-400">
          The list below is the same idea as Home: three copy-pasted cards. In real code you
          would extract a component and use an array — here it stays ugly and repetitive on
          purpose so you can refactor later.
        </p>
      </header>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 shadow-[0_24px_80px_-48px_rgba(0,0,0,0.85)] transition hover:-translate-y-1 hover:border-white/15">
          <Link
            to="/products/nike-air-max-pulse"
            className="relative block aspect-[4/5] overflow-hidden bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300"
          >
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80"
              alt=""
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
            <div className="pointer-events-none absolute left-4 top-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-lime-300/90 px-3 py-1 text-xs font-semibold text-zinc-950 backdrop-blur">
                Featured
              </span>
            </div>
          </Link>
          <div className="flex flex-1 flex-col gap-3 p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Nike
                </p>
                <h3 className="mt-1 truncate font-display text-lg font-semibold tracking-tight text-white">
                  <Link
                    to="/products/nike-air-max-pulse"
                    className="hover:text-lime-200 focus-visible:outline-none focus-visible:text-lime-200"
                  >
                    Air Max Pulse
                  </Link>
                </h3>
              </div>
              <p className="shrink-0 text-sm font-semibold tabular-nums text-white">
                $159.99
              </p>
            </div>
            <p className="line-clamp-2 text-sm leading-relaxed text-zinc-400">
              Responsive Air cushioning
            </p>
            <div className="mt-auto flex items-center justify-between gap-3 pt-1">
              <p className="text-xs text-zinc-500">4 sizes in stock</p>
              <Link
                to="/products/nike-air-max-pulse"
                className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-zinc-950 transition hover:bg-lime-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300"
              >
                Details
              </Link>
            </div>
          </div>
        </article>

        <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 shadow-[0_24px_80px_-48px_rgba(0,0,0,0.85)] transition hover:-translate-y-1 hover:border-white/15">
          <Link
            to="/products/adidas-ultraboost-light"
            className="relative block aspect-[4/5] overflow-hidden bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300"
          >
            <img
              src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=80"
              alt=""
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
            <div className="pointer-events-none absolute left-4 top-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-lime-300/90 px-3 py-1 text-xs font-semibold text-zinc-950 backdrop-blur">
                Featured
              </span>
            </div>
          </Link>
          <div className="flex flex-1 flex-col gap-3 p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Adidas
                </p>
                <h3 className="mt-1 truncate font-display text-lg font-semibold tracking-tight text-white">
                  <Link
                    to="/products/adidas-ultraboost-light"
                    className="hover:text-lime-200 focus-visible:outline-none focus-visible:text-lime-200"
                  >
                    Ultraboost Light
                  </Link>
                </h3>
              </div>
              <p className="shrink-0 text-sm font-semibold tabular-nums text-white">
                $189.99
              </p>
            </div>
            <p className="line-clamp-2 text-sm leading-relaxed text-zinc-400">
              Boost midsole
            </p>
            <div className="mt-auto flex items-center justify-between gap-3 pt-1">
              <p className="text-xs text-zinc-500">4 sizes in stock</p>
              <Link
                to="/products/adidas-ultraboost-light"
                className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-zinc-950 transition hover:bg-lime-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300"
              >
                Details
              </Link>
            </div>
          </div>
        </article>

        <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 shadow-[0_24px_80px_-48px_rgba(0,0,0,0.85)] transition hover:-translate-y-1 hover:border-white/15">
          <Link
            to="/products/new-balance-574-core"
            className="relative block aspect-[4/5] overflow-hidden bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300"
          >
            <img
              src="https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=1200&q=80"
              alt=""
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
          </Link>
          <div className="flex flex-1 flex-col gap-3 p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  New Balance
                </p>
                <h3 className="mt-1 truncate font-display text-lg font-semibold tracking-tight text-white">
                  <Link
                    to="/products/new-balance-574-core"
                    className="hover:text-lime-200 focus-visible:outline-none focus-visible:text-lime-200"
                  >
                    574 Core
                  </Link>
                </h3>
              </div>
              <p className="shrink-0 text-sm font-semibold tabular-nums text-white">
                $89.99
              </p>
            </div>
            <p className="line-clamp-2 text-sm leading-relaxed text-zinc-400">
              Retro silhouette
            </p>
            <div className="mt-auto flex items-center justify-between gap-3 pt-1">
              <p className="text-xs text-zinc-500">3 sizes in stock</p>
              <Link
                to="/products/new-balance-574-core"
                className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-zinc-950 transition hover:bg-lime-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300"
              >
                Details
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
