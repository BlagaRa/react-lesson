import { Link } from 'react-router-dom'
import { useMemo } from 'react'
import { mockProducts } from '../mocks/products'
import { ProductCard } from '../components/product/ProductCard'

export function HomePage() {
  const showcase = useMemo(() => mockProducts.slice(0, 4), [])

  const highlights = useMemo(() => {
    const tags = new Set<string>()
    mockProducts.forEach((p) => p.tags.forEach((t) => tags.add(t)))
    return Array.from(tags).slice(0, 8)
  }, [])

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(190,242,100,0.22),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.14),_transparent_45%)]" />

      <section className="relative mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-300 ring-1 ring-white/10">
              Mock storefront · TypeScript files · local cart
            </p>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl">
              Sneakers engineered for motion—and{' '}
              <span className="text-lime-200">learning sessions</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
              Products come from local mock arrays; the cart lives in React +
              localStorage. No backend requests—you can add fetch, filters, and checkout
              yourself.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-full bg-lime-300 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-[0_18px_60px_-28px_rgba(190,242,100,0.85)] transition hover:bg-lime-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                Shop catalog
              </Link>
              <Link
                to="/cart"
                className="inline-flex items-center justify-center rounded-full bg-white/5 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/10 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                View cart
              </Link>
            </div>

            <dl className="mt-10 grid max-w-xl grid-cols-3 gap-4 rounded-3xl border border-white/10 bg-zinc-950/35 p-5 backdrop-blur">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Pairs
                </dt>
                <dd className="mt-2 font-display text-3xl font-semibold tabular-nums text-white">
                  {mockProducts.length}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Brands
                </dt>
                <dd className="mt-2 font-display text-3xl font-semibold tabular-nums text-white">
                  {
                    new Set(mockProducts.map((p) => p.brand)).size
                  }
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Sizes
                </dt>
                <dd className="mt-2 font-display text-3xl font-semibold tabular-nums text-white">
                  SKUs
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
                    Drop spotlight
                  </p>
                  <p className="mt-1 font-display text-lg font-semibold text-white">
                    Daily rotation
                  </p>
                </div>
                <span className="rounded-full bg-lime-300 px-3 py-1 text-xs font-semibold text-zinc-950">
                  New
                </span>
              </div>
            </div>
          </div>
        </div>

        <section className="relative mt-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-white">
                First in the list
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-400">
                The first four entries from{' '}
                <span className="font-mono text-lime-200/90">mockProducts</span>
                —no filtering; order matches the file.
              </p>
            </div>
            <Link
              to="/products"
              className="text-sm font-semibold text-lime-200 hover:text-lime-100 focus-visible:outline-none focus-visible:underline"
            >
              Explore everything →
            </Link>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {showcase.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>

        <section className="relative mt-16 rounded-3xl border border-white/10 bg-zinc-900/25 p-6 sm:p-8">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-white">
            Shop by vibe
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-400">
            Tags found in the mock data (ideas only)—they do not filter the catalog.
            Open the catalog for the full array.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {highlights.map((tag) => (
              <Link
                key={tag}
                to="/products"
                className="rounded-full bg-white/5 px-4 py-2 text-xs font-semibold capitalize text-zinc-200 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300"
              >
                {tag}
              </Link>
            ))}
          </div>
        </section>
      </section>
    </div>
  )
}
