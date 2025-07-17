import { products } from '@/app/data/products';

export async function GET() {
  return Response.json(products);
}

export async function POST(req) {
  const newProduct = await req.json();
  newProduct.id = Date.now().toString();
  products.push(newProduct);
  return Response.json(newProduct, { status: 201 });
}
