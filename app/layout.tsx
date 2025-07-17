import Link from 'next/link';
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {/* Navigasi global */}
        <nav style={{ padding: '1rem', backgroundColor: '#f5f5f5' }}>
          <Link href="/" style={{ marginRight: '1rem' }}>Home</Link>
          <Link href="/about" style={{ marginRight: '1rem' }}>About</Link>
          <Link href="/products" style={{ marginRight: '1rem' }}>Produk</Link>
          <Link href="/products/1" style={{ marginRight: '1rem' }}>Detail Produk 1</Link>
        </nav>

        {/* Konten halaman */}
        <main>{children}</main>
      </body>
    </html>
  );
}
