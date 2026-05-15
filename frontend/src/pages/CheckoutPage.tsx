import { Link } from 'react-router-dom'

export function CheckoutPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-white">
        Checkout
      </h1>
      <p className="mt-4 leading-relaxed text-zinc-400">
        The form is intentionally missing. Shipping options are copy-pasted below — no
        separate file and no fetch.
      </p>

      <section className="mt-10 rounded-3xl border border-white/10 bg-zinc-900/25 p-6">
        <h2 className="font-display text-lg font-semibold text-white">
          Shipping options (static)
        </h2>
        <ul className="mt-4 space-y-4 text-sm text-zinc-300">
          <li className="rounded-2xl border border-white/10 bg-zinc-950/40 p-4">
            <p className="font-semibold text-white">Standard delivery</p>
            <p className="mt-1 text-zinc-400">5–7 business days</p>
            <p className="mt-2 tabular-nums text-lime-200">$0.00</p>
          </li>
          <li className="rounded-2xl border border-white/10 bg-zinc-950/40 p-4">
            <p className="font-semibold text-white">Express delivery</p>
            <p className="mt-1 text-zinc-400">2–3 business days</p>
            <p className="mt-2 tabular-nums text-lime-200">$12.99</p>
          </li>
          <li className="rounded-2xl border border-white/10 bg-zinc-950/40 p-4">
            <p className="font-semibold text-white">Overnight</p>
            <p className="mt-1 text-zinc-400">Next business day</p>
            <p className="mt-2 tabular-nums text-lime-200">$24.99</p>
          </li>
        </ul>
        <p className="mt-4 text-xs text-zinc-500">
          Radio buttons + state for shipping: an exercise for you.
        </p>
      </section>

      <Link
        to="/cart"
        className="mt-10 inline-flex rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300"
      >
        Back to cart
      </Link>
    </div>
  )
}
