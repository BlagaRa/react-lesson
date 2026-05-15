import { Link } from 'react-router-dom'
import type { Product } from '../../types/catalog'
import { formatMoney } from '../../utils/format'

type ProductCardProps = {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const cover = product.images[0]
  const lowStock = product.sizes.some((s) => s.stock > 0 && s.stock <= 3)
  const soldOut = product.sizes.every((s) => s.stock <= 0)

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 shadow-[0_24px_80px_-48px_rgba(0,0,0,0.85)] transition hover:-translate-y-1 hover:border-white/15 hover:shadow-[0_34px_120px_-52px_rgba(190,242,100,0.25)]">
      <Link
        to={`/products/${product.slug}`}
        className="relative block aspect-[4/5] overflow-hidden bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
      >
        <img
          src={cover}
          alt=""
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent opacity-90" />

        <div className="pointer-events-none absolute left-4 top-4 flex flex-wrap gap-2">
          {product.tags.includes('featured') ? (
            <span className="rounded-full bg-lime-300/90 px-3 py-1 text-xs font-semibold text-zinc-950 backdrop-blur">
              Featured
            </span>
          ) : null}
          {soldOut ? (
            <span className="rounded-full bg-zinc-950/70 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/15 backdrop-blur">
              Sold out
            </span>
          ) : lowStock ? (
            <span className="rounded-full bg-amber-400/90 px-3 py-1 text-xs font-semibold text-zinc-950 backdrop-blur">
              Low stock
            </span>
          ) : null}
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
              {product.brand}
            </p>
            <h3 className="mt-1 truncate font-display text-lg font-semibold tracking-tight text-white">
              <Link
                to={`/products/${product.slug}`}
                className="hover:text-lime-200 focus-visible:outline-none focus-visible:text-lime-200"
              >
                {product.name}
              </Link>
            </h3>
          </div>
          <p className="shrink-0 text-sm font-semibold tabular-nums text-white">
            {formatMoney(product.price, product.currency)}
          </p>
        </div>

        {product.highlight ? (
          <p className="line-clamp-2 text-sm leading-relaxed text-zinc-400">
            {product.highlight}
          </p>
        ) : null}

        <div className="mt-auto flex items-center justify-between gap-3 pt-1">
          <p className="text-xs text-zinc-500">
            {product.sizes.filter((s) => s.stock > 0).length} sizes available
          </p>
          <Link
            to={`/products/${product.slug}`}
            className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-zinc-950 transition hover:bg-lime-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
          >
            View
          </Link>
        </div>
      </div>
    </article>
  )
}
