import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  type ReactNode,
} from 'react'
import type { CartLine } from '../types/catalog'
import { getStockForSku } from '../mocks/products'

const STORAGE_KEY = 'kinetic-cart-v1'

type CartAction =
  | { type: 'ADD'; payload: Omit<CartLine, 'qty'> & { qty?: number } }
  | { type: 'SET_QTY'; sku: string; qty: number }
  | { type: 'REMOVE'; sku: string }
  | { type: 'CLEAR' }
  | { type: 'HYDRATE'; lines: CartLine[] }

function mergeLine(existing: CartLine, incoming: CartLine): CartLine {
  const stock = getStockForSku(existing.sku)
  const nextQty = Math.min(stock, existing.qty + incoming.qty)
  return { ...existing, qty: nextQty }
}

function cartReducer(lines: CartLine[], action: CartAction): CartLine[] {
  switch (action.type) {
    case 'HYDRATE':
      return action.lines
    case 'CLEAR':
      return []
    case 'REMOVE':
      return lines.filter((l) => l.sku !== action.sku)
    case 'SET_QTY': {
      if (action.qty <= 0) {
        return lines.filter((l) => l.sku !== action.sku)
      }
      const stock = getStockForSku(action.sku)
      const clamped = Math.min(action.qty, stock)
      return lines.map((l) =>
        l.sku === action.sku ? { ...l, qty: clamped } : l,
      )
    }
    case 'ADD': {
      const qty = action.payload.qty ?? 1
      const stock = getStockForSku(action.payload.sku)
      if (stock <= 0) return lines
      const line: CartLine = {
        sku: action.payload.sku,
        productId: action.payload.productId,
        slug: action.payload.slug,
        name: action.payload.name,
        brand: action.payload.brand,
        price: action.payload.price,
        currency: action.payload.currency,
        image: action.payload.image,
        sizeLabel: action.payload.sizeLabel,
        qty: Math.min(qty, stock),
      }
      const idx = lines.findIndex((l) => l.sku === line.sku)
      if (idx === -1) return [...lines, line]
      const next = [...lines]
      next[idx] = mergeLine(lines[idx], line)
      return next
    }
    default:
      return lines
  }
}

type CartContextValue = {
  lines: CartLine[]
  itemCount: number
  subtotal: number
  addLine: (input: Omit<CartLine, 'qty'> & { qty?: number }) => void
  setQty: (sku: string, qty: number) => void
  removeLine: (sku: string) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

function loadStoredCart(): CartLine[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as CartLine[]
    if (!Array.isArray(parsed)) return []
    return parsed.filter(
      (l) =>
        typeof l?.sku === 'string' &&
        typeof l?.qty === 'number' &&
        l.qty > 0 &&
        getStockForSku(l.sku) > 0,
    ).map((l) => ({
      ...l,
      qty: Math.min(l.qty, getStockForSku(l.sku)),
    }))
  } catch {
    return []
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, dispatch] = useReducer(cartReducer, [], () => [])

  useEffect(() => {
    dispatch({ type: 'HYDRATE', lines: loadStoredCart() })
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lines))
  }, [lines])

  const itemCount = useMemo(
    () => lines.reduce((sum, l) => sum + l.qty, 0),
    [lines],
  )

  const subtotal = useMemo(
    () => lines.reduce((sum, l) => sum + l.price * l.qty, 0),
    [lines],
  )

  const addLine = useCallback(
    (input: Omit<CartLine, 'qty'> & { qty?: number }) => {
      dispatch({ type: 'ADD', payload: input })
    },
    [],
  )

  const setQty = useCallback((sku: string, qty: number) => {
    dispatch({ type: 'SET_QTY', sku, qty })
  }, [])

  const removeLine = useCallback((sku: string) => {
    dispatch({ type: 'REMOVE', sku })
  }, [])

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR' })
  }, [])

  const value = useMemo(
    () => ({
      lines,
      itemCount,
      subtotal,
      addLine,
      setQty,
      removeLine,
      clearCart,
    }),
    [lines, itemCount, subtotal, addLine, setQty, removeLine, clearCart],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

// Hook is intentionally co-located with its provider for teaching clarity.
// eslint-disable-next-line react-refresh/only-export-components
export function useCart(): CartContextValue {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
