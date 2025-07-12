export default function ProductPage({ params }) {
  const { id } = params;

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">Detail Produk #{id}</h1>

      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="text-gray-700 mb-2">
          Ini adalah halaman untuk produk dengan ID: <span className="font-semibold">{id}</span>
        </p>
        <p className="text-gray-600">
          Informasi lengkap tentang produk ini akan ditampilkan di sini. Kamu bisa tambahkan data dari database atau API jika mau.
        </p>
      </div>
    </div>
  );
}
