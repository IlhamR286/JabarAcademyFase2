import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 text-center">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Halaman Tidak Ditemukan</h2>
      <p className="text-gray-600 mb-6">
        Maaf, halaman yang kamu cari tidak tersedia atau sudah dipindahkan.
      </p>
      <Link
        href="/"
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
