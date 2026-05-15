import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { getStockForSku } from '../mocks/products'
import { formatMoney } from '../utils/format'

export function CartPage() {
  const { lines, subtotal, setQty, removeLine } = useCart()

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Cart
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white">
            Your rotation
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-400">
            Quantities respect mock stock (good practice). You can build checkout on your
            own.
          </p>
        </div>
        <Link
          to="/products"
          className="rounded-full bg-white/5 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/10 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300"
        >
          Continue shopping
        </Link>
      </header>

      {lines.length === 0 ? (
        <div className="mt-12 rounded-3xl border border-white/10 bg-zinc-900/25 px-6 py-16 text-center">
          <p className="font-display text-3xl font-semibold text-white">
            Your cart is empty
          </p>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-zinc-400">
            Add a pair from the catalog—sizes with zero stock can’t be selected on the
            product page.
          </p>
          <Link
            to="/products"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-lime-300 px-6 py-3 text-sm font-semibold text-zinc-950 hover:bg-lime-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            Browse catalog
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-8">
            {lines.map((line) => {
              const stock = getStockForSku(line.sku)
              return (
                <article
                  key={line.sku}
                  className="flex gap-4 rounded-3xl border border-white/10 bg-zinc-900/25 p-4 sm:gap-6 sm:p-5"
                >
                  <Link
                    to={`/products/${line.slug}`}
                    className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl bg-zinc-950 ring-1 ring-white/10 sm:h-32 sm:w-32"
                  >
                    <img
                      src={line.image}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </Link>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                          {line.brand}
                        </p>
                        <h2 className="mt-1 truncate font-display text-lg font-semibold text-white">
                          <Link
                            to={`/products/${line.slug}`}
                            className="hover:text-lime-200 focus-visible:outline-none focus-visible:text-lime-200"
                          >
                            {line.name}
                          </Link>
                        </h2>
                        <p className="mt-2 text-sm text-zinc-400">
                          Size <span className="font-semibold text-zinc-200">{line.sizeLabel}</span>{' '}
                          · SKU{' '}
                          <span className="font-mono text-xs text-zinc-500">{line.sku}</span>
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold tabular-nums text-white">
                          {formatMoney(line.price * line.qty, line.currency)}
                        </p>
                        <p className="mt-1 text-xs text-zinc-500">
                          {formatMoney(line.price, line.currency)} each
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white ring-1 ring-white/10 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 disabled:cursor-not-allowed disabled:opacity-40"
                          onClick={() => setQty(line.sku, line.qty - 1)}
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="min-w-10 text-center text-sm font-semibold tabular-nums text-white">
                          {line.qty}
                        </span>
                        <button
                          type="button"
                          className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white ring-1 ring-white/10 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 disabled:cursor-not-allowed disabled:opacity-40"
                          onClick={() => setQty(line.sku, line.qty + 1)}
                          disabled={line.qty >= stock}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                        <span className="ml-2 text-xs text-zinc-500">
                          Stock: <span className="tabular-nums">{stock}</span>
                        </span>
                      </div>

                      <button
                        type="button"
                        className="text-xs font-semibold text-zinc-400 underline-offset-4 hover:text-white hover:underline focus-visible:outline-none focus-visible:underline"
                        onClick={() => removeLine(line.sku)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-28 rounded-3xl border border-white/10 bg-zinc-950/45 p-6 backdrop-blur">
              <h2 className="font-display text-xl font-semibold text-white">Summary</h2>
              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex items-center justify-between gap-4 text-zinc-300">
                  <dt>Subtotal</dt>
                  <dd className="font-semibold tabular-nums text-white">
                    {formatMoney(subtotal)}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4 text-zinc-400">
                  <dt>Shipping</dt>
                  <dd className="text-xs">Add at checkout (you implement)</dd>
                </div>
              </dl>

              <div className="my-6 h-px bg-white/10" />

              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-semibold text-zinc-300">Estimated total</span>
                <span className="font-display text-2xl font-semibold tabular-nums text-white">
                  {formatMoney(subtotal)}
                </span>
              </div>

              <Link
                to="/checkout"
                className="mt-6 flex w-full items-center justify-center rounded-full bg-white/5 px-6 py-4 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                Go to checkout (stub)
              </Link>

              <p className="mt-4 text-xs leading-relaxed text-zinc-500">
                Checkout is an empty placeholder—add the form, validation, and order flow
                yourself.
              </p>
            </div>
          </aside>
        </div>
      )}
    </div>
  )
}
