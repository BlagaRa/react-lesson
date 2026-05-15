import type { Product } from '../types/catalog'
import productsJson from './products.json'

export const mockProducts: Product[] = productsJson as Product[]

export function getProductBySlug(slug: string): Product | undefined {
  return mockProducts.find((p) => p.slug === slug || p.id === slug)
}

export function getStockForSku(sku: string): number {
  for (const p of mockProducts) {
    const size = p.sizes.find((s) => s.sku === sku)
    if (size) return size.stock
  }
  return 0
}
