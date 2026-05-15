export type ProductSize = {
  sizeLabel: string
  sku: string
  stock: number
}

export type Product = {
  id: string
  slug: string
  name: string
  brand: string
  price: number
  currency: string
  images: string[]
  sizes: ProductSize[]
  tags: string[]
  highlight?: string
}

export type ShippingOption = {
  id: string
  label: string
  eta: string
  price: number
}

export type CartLine = {
  sku: string
  qty: number
  productId: string
  slug: string
  name: string
  brand: string
  price: number
  currency: string
  image: string
  sizeLabel: string
}
