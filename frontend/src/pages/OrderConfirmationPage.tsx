import { Link } from 'react-router-dom'

export function OrderConfirmationPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-white">
        Order confirmation
      </h1>
      <p className="mt-4 leading-relaxed text-zinc-400">
        Nothing was sent to a server. The order number is plain text typed right here.
      </p>
      <div className="mt-8 rounded-3xl border border-white/10 bg-zinc-900/25 p-6">
        <p className="text-sm text-zinc-500">Order number</p>
        <p className="mt-2 font-mono text-2xl font-semibold text-white">DEMO-ORDER-48291</p>
        <p className="mt-4 text-sm text-zinc-400">
          In a real app you would show data returned from an API or kept in state after
          checkout.
        </p>
      </div>
      <Link
        to="/products"
        className="mt-8 inline-flex rounded-full bg-lime-300 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-lime-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
      >
        Back to catalog
      </Link>
    </div>
  )
}
