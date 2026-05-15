import { Link } from 'react-router-dom'

export function OrderConfirmationPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-white">
        Order confirmation
      </h1>
      <p className="mt-4 leading-relaxed text-zinc-400">
        After you implement checkout, show the order summary here (from state, context,
        or a server response). Right now the app does not submit any data anywhere.
      </p>
      <Link
        to="/products"
        className="mt-8 inline-flex rounded-full bg-lime-300 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-lime-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
      >
        Back to catalog
      </Link>
    </div>
  )
}
