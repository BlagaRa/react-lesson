import { ProductCard } from '../components/product/ProductCard'
import { mockProducts } from '../mocks/products'

export function CatalogPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
          Catalog
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Full catalog
        </h1>
        <p className="mt-4 text-base leading-relaxed text-zinc-400">
          The grid below reads the{' '}
          <code className="rounded-md bg-white/10 px-1.5 py-0.5 font-mono text-sm text-lime-200">
            mockProducts
          </code>{' '}
          array from{' '}
          <code className="rounded-md bg-white/10 px-1.5 py-0.5 font-mono text-sm text-lime-200">
            src/mocks/products.ts
          </code>{' '}
          directly (static data, no backend request). You can add filtering, sorting,
          and API loading later.
        </p>
      </header>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {mockProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}
