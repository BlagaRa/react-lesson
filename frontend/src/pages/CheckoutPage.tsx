import { Link } from 'react-router-dom'

export function CheckoutPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-white">
        Checkout
      </h1>
      <p className="mt-4 leading-relaxed text-zinc-400">
        This page is intentionally blank: use it to practice a delivery form, shipping
        options (for example from{' '}
        <code className="rounded-md bg-white/10 px-1.5 py-0.5 font-mono text-sm text-lime-200">
          src/mocks/shipping.ts
        </code>
        ), validation, and submitting an order (mock or{' '}
        <code className="font-mono text-sm text-zinc-300">fetch</code> to the backend)—no
        implementation is provided here.
      </p>
      <Link
        to="/cart"
        className="mt-8 inline-flex rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300"
      >
        Back to cart
      </Link>
    </div>
  )
}
