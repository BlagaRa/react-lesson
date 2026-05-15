import { Link } from 'react-router-dom'

export function CartPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Cart
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white">
            Example cart 
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-400">
            The rows below do not change when you click — they are static HTML only. You can
            replace this with useState / useEffect later.
          </p>
        </div>
        <Link
          to="/products"
          className="rounded-full bg-white/5 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/10 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300"
        >
          Back to catalog
        </Link>
      </header>

      <div className="mt-10 grid gap-8 lg:grid-cols-12">
        <div className="space-y-4 lg:col-span-8">
          <article className="flex gap-4 rounded-3xl border border-white/10 bg-zinc-900/25 p-4 sm:gap-6 sm:p-5">
            <Link
              to="/products/nike-air-max-pulse"
              className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl bg-zinc-950 ring-1 ring-white/10 sm:h-32 sm:w-32"
            >
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80"
                alt=""
                className="h-full w-full object-cover"
              />
            </Link>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Nike
                  </p>
                  <h2 className="mt-1 font-display text-lg font-semibold text-white">
                    <Link
                      to="/products/nike-air-max-pulse"
                      className="hover:text-lime-200 focus-visible:outline-none focus-visible:text-lime-200"
                    >
                      Air Max Pulse
                    </Link>
                  </h2>
                  <p className="mt-2 text-sm text-zinc-400">
                    Size <span className="font-semibold text-zinc-200">US 9</span> · SKU{' '}
                    <span className="font-mono text-xs text-zinc-500">p1-9</span>
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold tabular-nums text-white">$159.99</p>
                  <p className="mt-1 text-xs text-zinc-500">$159.99 each</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-sm text-zinc-400">
                  <span className="font-semibold tabular-nums text-white">Quantity: 1</span>
                  <span className="text-xs text-zinc-500">(+ / − buttons to add)</span>
                </div>
                <button
                  type="button"
                  disabled
                  className="cursor-not-allowed text-xs font-semibold text-zinc-600 underline-offset-4"
                >
                  Remove (to be implemented)
                </button>
              </div>
            </div>
          </article>

          <article className="flex gap-4 rounded-3xl border border-white/10 bg-zinc-900/25 p-4 sm:gap-6 sm:p-5">
            <Link
              to="/products/adidas-ultraboost-light"
              className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl bg-zinc-950 ring-1 ring-white/10 sm:h-32 sm:w-32"
            >
              <img
                src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=80"
                alt=""
                className="h-full w-full object-cover"
              />
            </Link>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Adidas
                  </p>
                  <h2 className="mt-1 font-display text-lg font-semibold text-white">
                    <Link
                      to="/products/adidas-ultraboost-light"
                      className="hover:text-lime-200 focus-visible:outline-none focus-visible:text-lime-200"
                    >
                      Ultraboost Light
                    </Link>
                  </h2>
                  <p className="mt-2 text-sm text-zinc-400">
                    Size <span className="font-semibold text-zinc-200">US 8</span> · SKU{' '}
                    <span className="font-mono text-xs text-zinc-500">p2-8</span>
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold tabular-nums text-white">$379.98</p>
                  <p className="mt-1 text-xs text-zinc-500">$189.99 each</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-sm text-zinc-400">
                  <span className="font-semibold tabular-nums text-white">Quantity: 2</span>
                  <span className="text-xs text-zinc-500">(+ / − buttons to add)</span>
                </div>
                <button
                  type="button"
                  disabled
                  className="cursor-not-allowed text-xs font-semibold text-zinc-600 underline-offset-4"
                >
                  Remove (to be implemented)
                </button>
              </div>
            </div>
          </article>
        </div>

        <aside className="lg:col-span-4">
          <div className="sticky top-28 rounded-3xl border border-white/10 bg-zinc-950/45 p-6 backdrop-blur">
            <h2 className="font-display text-xl font-semibold text-white">Summary</h2>
            <dl className="mt-6 space-y-3 text-sm">
              <div className="flex items-center justify-between gap-4 text-zinc-300">
                <dt>Subtotal</dt>
                <dd className="font-semibold tabular-nums text-white">$539.97</dd>
              </div>
              <div className="flex items-center justify-between gap-4 text-zinc-400">
                <dt>Shipping</dt>
                <dd className="text-xs">Choose at checkout</dd>
              </div>
            </dl>
            <div className="my-6 h-px bg-white/10" />
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm font-semibold text-zinc-300">Estimated total</span>
              <span className="font-display text-2xl font-semibold tabular-nums text-white">
                $539.97
              </span>
            </div>
            <Link
              to="/checkout"
              className="mt-6 flex w-full items-center justify-center rounded-full bg-white/5 px-6 py-4 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300"
            >
              Go to checkout
            </Link>
            <p className="mt-4 text-xs leading-relaxed text-zinc-500">
              The total is typed twice in this file on purpose — a nudge to compute it
              dynamically later.
            </p>
          </div>
        </aside>
      </div>
    </div>
  )
}
