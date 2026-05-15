import { Link } from 'react-router-dom'

export function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(190,242,100,0.22),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.14),_transparent_45%)]" />

      <section className="relative mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-300 ring-1 ring-white/10">
              Practice · hardcoded data in JSX
            </p>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl">
              Sneakers for learning React step by step.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
              Below, products are copy-pasted in the same file: the same card pattern three
              times, with names and prices typed by hand. Later you can swap in data from an
              array and add useState / useEffect.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-full bg-lime-300 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-[0_18px_60px_-28px_rgba(190,242,100,0.85)] transition hover:bg-lime-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                View catalog
              </Link>
              <Link
                to="/cart"
                className="inline-flex items-center justify-center rounded-full bg-white/5 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/10 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                View cart (static example)
              </Link>
            </div>

            <dl className="mt-10 grid max-w-xl grid-cols-3 gap-4 rounded-3xl border border-white/10 bg-zinc-950/35 p-5 backdrop-blur">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Products
                </dt>
                <dd className="mt-2 font-display text-3xl font-semibold tabular-nums text-white">
                  3
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Brands
                </dt>
                <dd className="mt-2 font-display text-3xl font-semibold tabular-nums text-white">
                  3
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  JSON files
                </dt>
                <dd className="mt-2 font-display text-3xl font-semibold tabular-nums text-white">
                  0
                </dd>
              </div>
            </dl>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-md rounded-[2rem] border border-white/10 bg-gradient-to-b from-zinc-900/70 to-zinc-950/40 p-4 shadow-[0_40px_120px_-52px_rgba(190,242,100,0.55)] backdrop-blur">
              <div className="overflow-hidden rounded-[1.6rem] ring-1 ring-white/10">
                <img
                  src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1400&q=80"
                  alt=""
                  className="aspect-[4/5] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 flex items-center justify-between rounded-2xl bg-zinc-950/55 px-4 py-3 ring-1 ring-white/10">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Spotlight
                  </p>
                  <p className="mt-1 font-display text-lg font-semibold text-white">
                    Everything typed by hand
                  </p>
                </div>
                <span className="rounded-full bg-lime-300 px-3 py-1 text-xs font-semibold text-zinc-950">
                  Demo
                </span>
              </div>
            </div>
          </div>
        </div>

        <section className="relative mt-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-white">
                Products (same card three times)
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-400">
                Intentionally repetitive copy-paste so you see why a component and
                structured data help later.
              </p>
            </div>
            <Link
              to="/products"
              className="text-sm font-semibold text-lime-200 hover:text-lime-100 focus-visible:outline-none focus-visible:underline"
            >
              Full catalog (same idea) →
            </Link>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 — copy-paste pattern */}
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

            {/* Card 2 — same pattern, different content */}
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

            {/* Card 3 — same pattern again */}
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
        </section>

        <section className="relative mt-16 rounded-3xl border border-white/10 bg-zinc-900/25 p-6 sm:p-8">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-white">
            Tags (all manual)
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-400">
            Each link only goes to the catalog; there is no filtering yet — you can add that
            with state.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Link
              to="/products"
              className="rounded-full bg-white/5 px-4 py-2 text-xs font-semibold text-zinc-200 ring-1 ring-white/10 transition hover:bg-white/10"
            >
              running
            </Link>
            <Link
              to="/products"
              className="rounded-full bg-white/5 px-4 py-2 text-xs font-semibold text-zinc-200 ring-1 ring-white/10 transition hover:bg-white/10"
            >
              featured
            </Link>
            <Link
              to="/products"
              className="rounded-full bg-white/5 px-4 py-2 text-xs font-semibold text-zinc-200 ring-1 ring-white/10 transition hover:bg-white/10"
            >
              lifestyle
            </Link>
          </div>
        </section>
      </section>
    </div>
  )
}
