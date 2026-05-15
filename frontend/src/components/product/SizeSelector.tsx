import type { ProductSize } from '../../types/catalog'

type SizeSelectorProps = {
  sizes: ProductSize[]
  selectedSku: string | null
  onSelect: (sku: string) => void
}

export function SizeSelector({
  sizes,
  selectedSku,
  onSelect,
}: SizeSelectorProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-3">
        <p id="size-label" className="text-sm font-semibold text-white">
          Size (US)
        </p>
        <p className="text-xs text-zinc-500">Stock updates instantly</p>
      </div>

      <div
        role="radiogroup"
        aria-labelledby="size-label"
        className="grid grid-cols-3 gap-2 sm:grid-cols-5"
      >
        {sizes.map((size) => {
          const disabled = size.stock <= 0
          const selected = selectedSku === size.sku
          const low = size.stock > 0 && size.stock <= 3

          return (
            <button
              key={size.sku}
              type="button"
              role="radio"
              aria-checked={selected}
              disabled={disabled}
              onClick={() => onSelect(size.sku)}
              className={[
                'relative rounded-2xl border px-3 py-3 text-left text-sm font-semibold transition',
                disabled
                  ? 'cursor-not-allowed border-white/10 bg-zinc-950/40 text-zinc-600'
                  : selected
                    ? 'border-lime-300/70 bg-lime-300/10 text-white ring-2 ring-lime-300/40'
                    : 'border-white/10 bg-zinc-950/30 text-white hover:border-white/20 hover:bg-white/5',
              ].join(' ')}
            >
              <span className="block">{size.sizeLabel}</span>
              <span className="mt-1 block text-xs font-medium text-zinc-400">
                {disabled ? (
                  <span className="text-zinc-600">Out of stock</span>
                ) : low ? (
                  <span className="text-amber-300">
                    Low stock · {size.stock} left
                  </span>
                ) : (
                  <span className="text-zinc-500">{size.stock} in stock</span>
                )}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
