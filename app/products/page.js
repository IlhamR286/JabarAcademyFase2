'use client';

import { useEffect, useState } from 'react';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch('/api/products');
    const data = await res.json();
    setProducts(data);
  };

  const deleteProduct = async (id) => {
    const res = await fetch(`/api/products/${id}`, {
      method: 'DELETE',
    });
    if (res.ok) {
      fetchProducts(); // refresh list
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Produk</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id} className="mb-2">
            {p.name} - Rp{p.price.toLocaleString()}
            <button
              onClick={() => deleteProduct(p.id)}
              className="ml-4 text-red-500"
            >
              Hapus
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
