import type { ShippingOption } from '../types/catalog'

export const mockShippingOptions: ShippingOption[] = [
  { id: 'std', label: 'Standard delivery', eta: '5–7 business days', price: 0 },
  { id: 'exp', label: 'Express delivery', eta: '2–3 business days', price: 12.99 },
  { id: 'overnight', label: 'Overnight', eta: 'Next business day', price: 24.99 },
]
