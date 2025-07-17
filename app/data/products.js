export const products = [
  { id: '1', name: 'Produk A', price: 10000 },
  { id: '2', name: 'Produk B', price: 20000 },
  { id: '3', name: 'Produk C', price: 30000 },
];

export function findProductIndex(id) {
  return products.findIndex((p) => p.id === id);
}
