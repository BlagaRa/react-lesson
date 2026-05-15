const express = require("express");
const cors = require("cors");
const { products } = require("../data/products");
const { shippingOptions } = require("../data/shippingOptions");

const PORT = process.env.PORT || 5001;

/** @type {Array<Record<string, unknown>>} */
const orders = [];

const app = express();
app.use(cors());
app.use(express.json());

function parseNum(value, fallback) {
  if (value === undefined || value === null || value === "") return fallback;
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
}

function matchesFilters(product, { brand, minPrice, maxPrice, size, tag }) {
  if (brand && product.brand.toLowerCase() !== String(brand).toLowerCase()) {
    return false;
  }
  if (minPrice != null && product.price < minPrice) return false;
  if (maxPrice != null && product.price > maxPrice) return false;
  if (tag && !product.tags.some((t) => t.toLowerCase() === String(tag).toLowerCase())) {
    return false;
  }
  if (size) {
    const hasSize = product.sizes.some((s) => s.sizeLabel === size && s.stock > 0);
    if (!hasSize) return false;
  }
  return true;
}

app.get("/api/products", (req, res) => {
  const brand = req.query.brand;
  const tag = req.query.tag;
  const size = req.query.size;
  const minPrice = parseNum(req.query.minPrice, null);
  const maxPrice = parseNum(req.query.maxPrice, null);

  const filtered = products.filter((p) =>
    matchesFilters(p, { brand, minPrice, maxPrice, size, tag }),
  );
  res.json({ products: filtered });
});

app.get("/api/products/:slugOrId", (req, res) => {
  const key = req.params.slugOrId;
  const product =
    products.find((p) => p.slug === key || p.id === key) ?? null;
  if (!product) {
    res.status(404).json({ error: "Product not found" });
    return;
  }
  res.json({ product });
});

app.get("/api/shipping-options", (_req, res) => {
  res.json({ shippingOptions });
});

app.post("/api/orders", (req, res) => {
  const body = req.body ?? {};
  const lines = body.lines;
  if (!Array.isArray(lines) || lines.length === 0) {
    res.status(400).json({ error: "lines must be a non-empty array" });
    return;
  }

  const shippingId = body.shipping?.optionId;
  const shippingOption = shippingOptions.find((s) => s.id === shippingId);
  if (!shippingOption) {
    res.status(400).json({ error: "Invalid shipping option" });
    return;
  }

  const subtotal = parseNum(body.totals?.subtotal, 0);
  const shippingCost = parseNum(body.totals?.shipping, shippingOption.price);
  const total = parseNum(body.totals?.total, subtotal + shippingCost);

  const order = {
    id: `ord_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`,
    lines,
    shipping: { ...body.shipping, option: shippingOption },
    delivery: body.delivery ?? {},
    totals: { subtotal, shipping: shippingCost, total },
    createdAt: new Date().toISOString(),
  };

  orders.push(order);
  res.status(201).json({ order });
});

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`Sneaker API listening on http://localhost:${PORT}`);
});
