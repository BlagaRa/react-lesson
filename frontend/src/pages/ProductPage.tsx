import { Link, Navigate, useParams } from 'react-router-dom'

export function ProductPage() {
  const { slug } = useParams()

  if (!slug) {
    return <Navigate to="/products" replace />
  }

  if (slug === 'nike-air-max-pulse') {
    return (
      <div className="mx-auto max-w-6xl px-4 pb-28 pt-10 sm:px-6 sm:pb-12">
        <nav className="text-xs text-zinc-500">
          <Link
            to="/products"
            className="font-semibold text-zinc-300 hover:text-white focus-visible:outline-none focus-visible:underline"
          >
            Catalog
          </Link>{' '}
          <span aria-hidden className="text-zinc-600">
            /
          </span>{' '}
          <span className="text-zinc-400">Nike</span>{' '}
          <span aria-hidden className="text-zinc-600">
            /
          </span>{' '}
          <span className="text-zinc-300">Air Max Pulse</span>
        </nav>

        <div className="mt-8 grid gap-10 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-7">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/35 shadow-[0_40px_120px_-56px_rgba(0,0,0,0.95)]">
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80"
                alt=""
                className="aspect-[4/5] w-full object-cover sm:aspect-[16/11]"
              />
            </div>
            <p className="text-xs text-zinc-500">
              The second image (also hardcoded) would move here if the gallery used useState —
              for now this is just a note.
            </p>
            <div className="grid grid-cols-4 gap-3 sm:grid-cols-6">
              <div className="overflow-hidden rounded-2xl ring-2 ring-lime-300 ring-offset-2 ring-offset-zinc-950">
                <img
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80"
                  alt=""
                  className="aspect-square w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-2xl ring-2 ring-transparent ring-offset-2 ring-offset-zinc-950">
                <img
                  src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1200&q=80"
                  alt=""
                  className="aspect-square w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                Nike
              </p>
              <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white">
                Air Max Pulse
              </h1>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <p className="text-2xl font-semibold tabular-nums text-white">$159.99</p>
                <span className="rounded-full bg-lime-300 px-3 py-1 text-xs font-semibold text-zinc-950">
                  Featured
                </span>
              </div>

              <p className="mt-5 text-base leading-relaxed text-zinc-300">
                Responsive Air cushioning
              </p>

              <div className="mt-8 rounded-3xl border border-white/10 bg-zinc-900/25 p-5">
                <p className="text-sm font-semibold text-white">Sizes (static list)</p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                  <li>US 7 — in stock: 4</li>
                  <li className="text-zinc-500">US 8 — in stock: 0 (cannot order)</li>
                  <li>US 9 — in stock: 12</li>
                  <li>US 10 — in stock: 7</li>
                  <li>US 11 — in stock: 2</li>
                </ul>
                <p className="mt-4 text-xs text-zinc-500">
                  Size selection + active button: good candidates for useState.
                </p>
              </div>

              <div className="mt-8 hidden sm:block">
                <button
                  type="button"
                  disabled
                  className="w-full cursor-not-allowed rounded-full bg-zinc-700 px-6 py-4 text-sm font-semibold text-zinc-300"
                >
                  Add to cart (to be implemented)
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-zinc-950/85 p-4 backdrop-blur-xl sm:hidden">
          <button
            type="button"
            disabled
            className="w-full cursor-not-allowed rounded-full bg-zinc-700 px-6 py-4 text-sm font-semibold text-zinc-300"
          >
            Add to cart (to be implemented)
          </button>
        </div>
      </div>
    )
  }

  if (slug === 'adidas-ultraboost-light') {
    return (
      <div className="mx-auto max-w-6xl px-4 pb-28 pt-10 sm:px-6 sm:pb-12">
        <nav className="text-xs text-zinc-500">
          <Link
            to="/products"
            className="font-semibold text-zinc-300 hover:text-white focus-visible:outline-none focus-visible:underline"
          >
            Catalog
          </Link>{' '}
          <span aria-hidden className="text-zinc-600">
            /
          </span>{' '}
          <span className="text-zinc-400">Adidas</span>{' '}
          <span aria-hidden className="text-zinc-600">
            /
          </span>{' '}
          <span className="text-zinc-300">Ultraboost Light</span>
        </nav>

        <div className="mt-8 grid gap-10 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-7">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/35 shadow-[0_40px_120px_-56px_rgba(0,0,0,0.95)]">
              <img
                src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=80"
                alt=""
                className="aspect-[4/5] w-full object-cover sm:aspect-[16/11]"
              />
            </div>
            <p className="text-xs text-zinc-500">
              Same as Nike: an interactive gallery is a good useState exercise.
            </p>
            <div className="grid grid-cols-4 gap-3 sm:grid-cols-6">
              <div className="overflow-hidden rounded-2xl ring-2 ring-lime-300 ring-offset-2 ring-offset-zinc-950">
                <img
                  src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=80"
                  alt=""
                  className="aspect-square w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-2xl ring-2 ring-transparent ring-offset-2 ring-offset-zinc-950">
                <img
                  src="https://images.unsplash.com/photo-1584735175315-9d5df23860e6?auto=format&fit=crop&w=1200&q=80"
                  alt=""
                  className="aspect-square w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                Adidas
              </p>
              <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white">
                Ultraboost Light
              </h1>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <p className="text-2xl font-semibold tabular-nums text-white">$189.99</p>
                <span className="rounded-full bg-lime-300 px-3 py-1 text-xs font-semibold text-zinc-950">
                  Featured
                </span>
              </div>

              <p className="mt-5 text-base leading-relaxed text-zinc-300">Boost midsole</p>

              <div className="mt-8 rounded-3xl border border-white/10 bg-zinc-900/25 p-5">
                <p className="text-sm font-semibold text-white">Sizes (static list)</p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                  <li>US 7 — in stock: 6</li>
                  <li>US 8 — in stock: 9</li>
                  <li>US 9 — in stock: 5</li>
                  <li className="text-zinc-500">US 10 — in stock: 0</li>
                  <li>US 11 — in stock: 3</li>
                </ul>
                <p className="mt-4 text-xs text-zinc-500">
                  Size selection + active button: good candidates for useState.
                </p>
              </div>

              <div className="mt-8 hidden sm:block">
                <button
                  type="button"
                  disabled
                  className="w-full cursor-not-allowed rounded-full bg-zinc-700 px-6 py-4 text-sm font-semibold text-zinc-300"
                >
                  Add to cart (to be implemented)
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-zinc-950/85 p-4 backdrop-blur-xl sm:hidden">
          <button
            type="button"
            disabled
            className="w-full cursor-not-allowed rounded-full bg-zinc-700 px-6 py-4 text-sm font-semibold text-zinc-300"
          >
            Add to cart (to be implemented)
          </button>
        </div>
      </div>
    )
  }

  if (slug === 'new-balance-574-core') {
    return (
      <div className="mx-auto max-w-6xl px-4 pb-28 pt-10 sm:px-6 sm:pb-12">
        <nav className="text-xs text-zinc-500">
          <Link
            to="/products"
            className="font-semibold text-zinc-300 hover:text-white focus-visible:outline-none focus-visible:underline"
          >
            Catalog
          </Link>{' '}
          <span aria-hidden className="text-zinc-600">
            /
          </span>{' '}
          <span className="text-zinc-400">New Balance</span>{' '}
          <span aria-hidden className="text-zinc-600">
            /
          </span>{' '}
          <span className="text-zinc-300">574 Core</span>
        </nav>

        <div className="mt-8 grid gap-10 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-7">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/35 shadow-[0_40px_120px_-56px_rgba(0,0,0,0.95)]">
              <img
                src="https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=1200&q=80"
                alt=""
                className="aspect-[4/5] w-full object-cover sm:aspect-[16/11]"
              />
            </div>
            <p className="text-xs text-zinc-500">
              Another almost-identical page — duplicated on purpose.
            </p>
            <div className="grid grid-cols-4 gap-3 sm:grid-cols-6">
              <div className="overflow-hidden rounded-2xl ring-2 ring-lime-300 ring-offset-2 ring-offset-zinc-950">
                <img
                  src="https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=1200&q=80"
                  alt=""
                  className="aspect-square w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-2xl ring-2 ring-transparent ring-offset-2 ring-offset-zinc-950">
                <img
                  src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1200&q=80"
                  alt=""
                  className="aspect-square w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                New Balance
              </p>
              <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white">
                574 Core
              </h1>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <p className="text-2xl font-semibold tabular-nums text-white">$89.99</p>
              </div>

              <p className="mt-5 text-base leading-relaxed text-zinc-300">
                Retro silhouette
              </p>

              <div className="mt-8 rounded-3xl border border-white/10 bg-zinc-900/25 p-5">
                <p className="text-sm font-semibold text-white">Sizes (static list)</p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                  <li>US 7 — in stock: 8</li>
                  <li>US 8 — in stock: 10</li>
                  <li className="text-zinc-500">US 9 — in stock: 0</li>
                  <li>US 10 — in stock: 4</li>
                </ul>
                <p className="mt-4 text-xs text-zinc-500">
                  Size selection + active button: good candidates for useState.
                </p>
              </div>

              <div className="mt-8 hidden sm:block">
                <button
                  type="button"
                  disabled
                  className="w-full cursor-not-allowed rounded-full bg-zinc-700 px-6 py-4 text-sm font-semibold text-zinc-300"
                >
                  Add to cart (to be implemented)
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-zinc-950/85 p-4 backdrop-blur-xl sm:hidden">
          <button
            type="button"
            disabled
            className="w-full cursor-not-allowed rounded-full bg-zinc-700 px-6 py-4 text-sm font-semibold text-zinc-300"
          >
            Add to cart (to be implemented)
          </button>
        </div>
      </div>
    )
  }

  return <Navigate to="/products" replace />
}
