import { useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { SizeSelector } from '../components/product/SizeSelector'
import { useCart } from '../context/CartContext'
import { getProductBySlug } from '../mocks/products'
import { formatMoney } from '../utils/format'

export function ProductPage() {
  const { slug } = useParams()
  const product = slug ? getProductBySlug(slug) : undefined
  const { addLine } = useCart()

  const [selectedSku, setSelectedSku] = useState<string | null>(null)
  const [activeImage, setActiveImage] = useState(0)
  const [notice, setNotice] = useState<string | null>(null)

  const selectedSize = useMemo(() => {
    if (!product || !selectedSku) return null
    return product.sizes.find((s) => s.sku === selectedSku) ?? null
  }, [product, selectedSku])

  if (!slug || !product) {
    return <Navigate to="/products" replace />
  }

  const p = product

  const cover = p.images[activeImage] ?? p.images[0]

  function handleAddToCart() {
    setNotice(null)
    if (!selectedSku || !selectedSize || selectedSize.stock <= 0) {
      setNotice('Pick an in-stock size first.')
      return
    }

    addLine({
      sku: selectedSize.sku,
      productId: p.id,
      slug: p.slug,
      name: p.name,
      brand: p.brand,
      price: p.price,
      currency: p.currency,
      image: p.images[0],
      sizeLabel: selectedSize.sizeLabel,
      qty: 1,
    })

    setNotice(`Added ${selectedSize.sizeLabel} to cart.`)
  }

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
        <span className="text-zinc-400">{product.brand}</span>{' '}
        <span aria-hidden className="text-zinc-600">
          /
        </span>{' '}
        <span className="text-zinc-300">{product.name}</span>
      </nav>

      <div className="mt-8 grid gap-10 lg:grid-cols-12">
        <div className="space-y-4 lg:col-span-7">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/35 shadow-[0_40px_120px_-56px_rgba(0,0,0,0.95)]">
            <img
              src={cover}
              alt=""
              className="aspect-[4/5] w-full object-cover sm:aspect-[16/11]"
            />
          </div>

          {product.images.length > 1 ? (
            <div className="grid grid-cols-4 gap-3 sm:grid-cols-6">
              {product.images.map((src, idx) => {
                const active = idx === activeImage
                return (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setActiveImage(idx)}
                    className={[
                      'overflow-hidden rounded-2xl ring-2 ring-offset-2 ring-offset-zinc-950 transition',
                      active
                        ? 'ring-lime-300'
                        : 'ring-transparent hover:ring-white/15',
                    ].join(' ')}
                  >
                    <img src={src} alt="" className="aspect-square w-full object-cover" />
                  </button>
                )
              })}
            </div>
          ) : null}
        </div>

        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
              {product.brand}
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white">
              {product.name}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <p className="text-2xl font-semibold tabular-nums text-white">
                {formatMoney(product.price, product.currency)}
              </p>
              {product.tags.includes('featured') ? (
                <span className="rounded-full bg-lime-300 px-3 py-1 text-xs font-semibold text-zinc-950">
                  Featured
                </span>
              ) : null}
            </div>

            {product.highlight ? (
              <p className="mt-5 text-base leading-relaxed text-zinc-300">
                {product.highlight}
              </p>
            ) : null}

            <div className="mt-8 rounded-3xl border border-white/10 bg-zinc-900/25 p-5">
              <SizeSelector
                sizes={product.sizes}
                selectedSku={selectedSku}
                onSelect={(sku) => {
                  setNotice(null)
                  setSelectedSku(sku)
                }}
              />
            </div>

            {notice ? (
              <p className="mt-4 text-sm text-zinc-300" role="status">
                {notice}
              </p>
            ) : null}

            <div className="mt-8 hidden sm:block">
              <button
                type="button"
                onClick={handleAddToCart}
                className="w-full rounded-full bg-lime-300 px-6 py-4 text-sm font-semibold text-zinc-950 shadow-[0_22px_70px_-34px_rgba(190,242,100,0.85)] transition hover:bg-lime-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 disabled:cursor-not-allowed disabled:bg-zinc-700 disabled:text-zinc-300 disabled:shadow-none"
                disabled={product.sizes.every((s) => s.stock <= 0)}
              >
                Add to cart
              </button>

              <div className="mt-4 rounded-2xl border border-white/10 bg-zinc-950/35 px-4 py-3 text-xs leading-relaxed text-zinc-400">
                Tip: cart quantities respect inventory snapshots—good practice for UI
                guardrails before real APIs.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-zinc-950/85 p-4 backdrop-blur-xl sm:hidden">
        <button
          type="button"
          onClick={handleAddToCart}
          className="w-full rounded-full bg-lime-300 px-6 py-4 text-sm font-semibold text-zinc-950 shadow-[0_22px_70px_-34px_rgba(190,242,100,0.85)] transition hover:bg-lime-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 disabled:cursor-not-allowed disabled:bg-zinc-700 disabled:text-zinc-300 disabled:shadow-none"
          disabled={product.sizes.every((s) => s.stock <= 0)}
        >
          Add to cart
        </button>
      </div>
    </div>
  )
}
