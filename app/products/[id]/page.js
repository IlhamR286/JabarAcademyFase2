import { products } from '@/app/data/products';

export default function ProductDetail({ params }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    // Optional: lempar ke not-found
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold">Produk tidak ditemukan</h1>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p>Harga: Rp{product.price.toLocaleString()}</p>
    </div>
  );
}
