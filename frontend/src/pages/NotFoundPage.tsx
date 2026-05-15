import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
      <p className="font-display text-6xl font-semibold tabular-nums text-white">404</p>
      <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white">
        Page not found
      </h1>
      <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-zinc-400">
        That route doesn’t exist in this teaching storefront yet.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-lime-300 px-6 py-3 text-sm font-semibold text-zinc-950 hover:bg-lime-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
      >
        Go home
      </Link>
    </div>
  )
}
